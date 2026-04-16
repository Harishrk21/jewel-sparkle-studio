import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Heart, Minus, Plus, Share2, ShoppingBag, ChevronRight } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";
import ProductCard from "@/components/ProductCard";

function formatPrice(p: number) { return "₹" + p.toLocaleString("en-IN"); }

export const Route = createFileRoute("/product/$productId")({
  component: ProductDetailPage,
  head: ({ params }) => {
    const product = products.find(p => p.id === Number(params.productId));
    return {
      meta: [
        { title: product ? `${product.name} — Lumière Jewels` : "Product — Lumière Jewels" },
        { name: "description", content: product?.description?.slice(0, 155) || "Luxury handcrafted jewellery" },
        { property: "og:title", content: product ? `${product.name} — Lumière Jewels` : "Product" },
        { property: "og:description", content: product?.description?.slice(0, 155) || "" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="pt-32 text-center min-h-screen">
      <h1 className="font-heading text-3xl text-ivory">Product not found</h1>
      <Link to="/collections" className="btn-gold rounded-lg inline-block text-sm mt-6">Browse Collections</Link>
    </div>
  ),
});

function ProductDetailPage() {
  const { productId } = Route.useParams();
  const product = products.find(p => p.id === Number(productId));
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { showToast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(undefined);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) return null;

  const wishlisted = isInWishlist(product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  const stockLeft = Math.floor(Math.random() * 8) + 2;

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      showToast("Please select a size");
      return;
    }
    addToCart(product, quantity, selectedSize);
    showToast("Added to cart ✓");
    setIsCartOpen(true);
  };

  return (
    <div className="pt-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ivory-muted font-body mb-8">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/collections" className="hover:text-gold transition-colors">Collections</Link>
          <ChevronRight size={12} />
          <Link to="/collections" search={{ category: product.category }} className="hover:text-gold transition-colors capitalize">{product.category}</Link>
          <ChevronRight size={12} />
          <span className="text-ivory">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="aspect-square rounded-xl overflow-hidden card-luxury mb-4"
            >
              <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${i === selectedImage ? "border-gold" : "border-border hover:border-gold/50"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div>
            <h1 className="font-heading text-3xl md:text-4xl font-light text-ivory">{product.name}</h1>
            <p className="text-ivory-muted text-sm font-body mt-2">{product.material}{product.gemstone ? ` • ${product.gemstone}` : ""}</p>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-muted-foreground"} />
                ))}
              </div>
              <span className="text-ivory-muted text-sm font-body">{product.rating} ({product.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mt-5">
              <span className="text-gold font-heading text-3xl">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-muted-foreground text-lg line-through font-body">{formatPrice(product.originalPrice)}</span>
                  <span className="px-2 py-0.5 bg-sale/20 text-red-300 text-xs rounded font-body">-{product.discount}%</span>
                </>
              )}
            </div>

            {stockLeft <= 5 && (
              <p className="text-amber-400 text-sm font-body mt-3">⚡ Only {stockLeft} left in stock</p>
            )}

            {/* Size selector */}
            {product.sizes && (
              <div className="mt-6">
                <p className="text-ivory text-sm font-body mb-3">Select Size</p>
                <div className="flex gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-10 h-10 rounded-lg text-sm font-body transition-all ${
                        selectedSize === size
                          ? "bg-gold text-background"
                          : "border border-border text-ivory-muted hover:border-gold"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-ivory text-sm font-body mb-3">Quantity</p>
              <div className="flex items-center gap-3">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-ivory-muted hover:border-gold hover:text-gold transition-colors">
                  <Minus size={16} />
                </button>
                <span className="text-ivory font-body w-8 text-center">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-ivory-muted hover:border-gold hover:text-gold transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex gap-3 mt-8">
              <button onClick={handleAddToCart} className="flex-1 btn-gold rounded-lg text-sm flex items-center justify-center gap-2">
                <ShoppingBag size={16} /> Add to Cart
              </button>
              <button
                onClick={() => {
                  if (wishlisted) removeFromWishlist(product.id);
                  else addToWishlist(product);
                  showToast(wishlisted ? "Removed from wishlist" : "Added to wishlist ♡");
                }}
                className={`w-12 h-12 rounded-lg border flex items-center justify-center transition-colors ${wishlisted ? "border-gold bg-gold/10 text-gold" : "border-border text-ivory-muted hover:border-gold"}`}
              >
                <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>

            {/* Tabs */}
            <div className="mt-10 border-t border-border pt-8">
              <div className="flex gap-6 mb-6">
                {["description", "materials", "shipping"].map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-body capitalize pb-2 transition-colors ${activeTab === tab ? "text-gold border-b-2 border-gold" : "text-ivory-muted hover:text-ivory"}`}
                  >
                    {tab === "materials" ? "Materials & Care" : tab}
                  </button>
                ))}
              </div>
              <div className="text-ivory-muted text-sm font-body leading-relaxed">
                {activeTab === "description" && <p>{product.description}</p>}
                {activeTab === "materials" && (
                  <div>
                    <p><strong className="text-ivory">Material:</strong> {product.material}</p>
                    {product.gemstone && <p className="mt-2"><strong className="text-ivory">Gemstone:</strong> {product.gemstone}</p>}
                    <p className="mt-2"><strong className="text-ivory">Weight:</strong> {product.weight}</p>
                    <p className="mt-4"><strong className="text-ivory">Care Instructions:</strong> {product.careInstructions}</p>
                  </div>
                )}
                {activeTab === "shipping" && (
                  <div>
                    <p>Free shipping on orders above ₹5,000. Standard delivery in 5-7 business days.</p>
                    <p className="mt-2">All orders are securely packaged in our signature luxury boxes with tamper-proof seals.</p>
                    <p className="mt-2">International shipping available to select countries. Contact us for details.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-heading text-3xl font-light text-gold text-center mb-4">You May Also Like</h2>
            <div className="gold-divider mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {related.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
