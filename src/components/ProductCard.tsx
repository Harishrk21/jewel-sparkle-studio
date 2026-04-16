import { motion } from "framer-motion";
import { Heart, Star, ShoppingBag, Eye } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useToast } from "@/context/ToastContext";

function formatPrice(price: number) {
  return "₹" + price.toLocaleString("en-IN");
}

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart, setIsCartOpen } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { showToast } = useToast();
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    showToast("Added to cart ✓");
    setIsCartOpen(true);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (wishlisted) {
      removeFromWishlist(product.id);
      showToast("Removed from wishlist");
    } else {
      addToWishlist(product);
      showToast("Added to wishlist ♡");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <Link to="/product/$productId" params={{ productId: String(product.id) }} className="block">
        <div className="card-luxury rounded-xl overflow-hidden">
          {/* Image */}
          <div className="relative aspect-square overflow-hidden bg-elevated">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />

            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-1">
              {product.isNew && (
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded bg-emerald-800/90 text-emerald-200 font-body font-medium">New</span>
              )}
              {product.discount && (
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded bg-sale/90 text-red-200 font-body font-medium">-{product.discount}%</span>
              )}
              {product.isBestseller && (
                <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider rounded bg-gold/90 text-background font-body font-medium">Bestseller</span>
              )}
            </div>

            {/* Wishlist */}
            <button
              onClick={handleWishlist}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center hover:bg-background/80 transition-colors"
            >
              <Heart size={14} fill={wishlisted ? "#C9A84C" : "none"} className={wishlisted ? "text-gold" : "text-ivory"} />
            </button>

            {/* Hover overlay */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3 flex gap-2">
              <button
                onClick={handleAddToCart}
                className="flex-1 btn-gold rounded-lg text-xs flex items-center justify-center gap-2 py-2.5"
              >
                <ShoppingBag size={14} /> Add to Cart
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="p-4">
            <p className="text-ivory-muted text-[11px] uppercase tracking-widest mb-1 font-body">{product.material}</p>
            <h3 className="text-ivory font-heading text-lg font-light leading-tight">{product.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 mt-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={11} className={i < Math.floor(product.rating) ? "text-gold fill-gold" : "text-muted-foreground"} />
              ))}
              <span className="text-ivory-muted text-[11px] ml-1 font-body">({product.reviewCount})</span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mt-2">
              <span className="text-gold font-body font-medium">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-muted-foreground text-sm line-through font-body">{formatPrice(product.originalPrice)}</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
