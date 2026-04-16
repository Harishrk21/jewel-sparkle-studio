import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, ShoppingBag } from "lucide-react";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";
import { Link } from "@tanstack/react-router";

function formatPrice(price: number) {
  return "₹" + price.toLocaleString("en-IN");
}

export default function WishlistDrawer() {
  const { items, removeFromWishlist, isWishlistOpen, setIsWishlistOpen } = useWishlist();
  const { addToCart, setIsCartOpen } = useCart();
  const { showToast } = useToast();

  const handleMoveToCart = (product: typeof items[0]) => {
    addToCart(product);
    removeFromWishlist(product.id);
    showToast("Moved to cart ✓");
  };

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsWishlistOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[71] w-full max-w-md bg-background border-l border-border flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-xl text-ivory">Wishlist ({items.length})</h2>
              <button onClick={() => setIsWishlistOpen(false)} className="text-ivory-muted hover:text-gold transition-colors">
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <Heart size={48} className="text-gold-muted mb-4" />
                <p className="text-ivory font-heading text-xl mb-2">No saved items</p>
                <p className="text-ivory-muted text-sm mb-6">Save pieces you love for later</p>
                <Link to="/collections" onClick={() => setIsWishlistOpen(false)} className="btn-gold rounded-lg text-sm">Browse Collections</Link>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {items.map(product => (
                  <div key={product.id} className="flex gap-4 card-luxury rounded-lg p-3">
                    <img src={product.images[0]} alt={product.name} className="w-20 h-20 object-cover rounded" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-ivory text-sm font-heading truncate">{product.name}</h4>
                      <p className="text-gold text-sm mt-1 font-body">{formatPrice(product.price)}</p>
                      <button
                        onClick={() => handleMoveToCart(product)}
                        className="mt-2 text-xs text-gold hover:text-gold-light transition-colors flex items-center gap-1 font-body"
                      >
                        <ShoppingBag size={12} /> Move to Cart
                      </button>
                    </div>
                    <button onClick={() => removeFromWishlist(product.id)} className="text-ivory-muted hover:text-destructive transition-colors self-start">
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
