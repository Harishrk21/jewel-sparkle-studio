import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, ShoppingBag, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useToast } from "@/context/ToastContext";

function formatPrice(price: number) {
  return "₹" + price.toLocaleString("en-IN");
}

export default function CartDrawer() {
  const { items, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, subtotal, shipping, gst, total, promoCode, promoDiscount, applyPromo, removePromo, totalItems } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const { showToast } = useToast();

  const handleApplyPromo = () => {
    if (applyPromo(promoInput)) {
      showToast("Promo applied! 🎉");
      setPromoInput("");
    } else {
      showToast("Invalid promo code");
    }
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
            onClick={() => setIsCartOpen(false)}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 z-[71] w-full max-w-md bg-background border-l border-border flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <h2 className="font-heading text-xl text-ivory">Shopping Bag ({totalItems})</h2>
              <button onClick={() => setIsCartOpen(false)} className="text-ivory-muted hover:text-gold transition-colors">
                <X size={22} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
                <ShoppingBag size={48} className="text-gold-muted mb-4" />
                <p className="text-ivory font-heading text-xl mb-2">Your bag is empty</p>
                <p className="text-ivory-muted text-sm mb-6">Discover our curated collections</p>
                <Link
                  to="/collections"
                  onClick={() => setIsCartOpen(false)}
                  className="btn-gold rounded-lg text-sm"
                >
                  Explore Collections
                </Link>
              </div>
            ) : (
              <>
                {/* Items */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {items.map(item => (
                    <div key={`${item.product.id}-${item.size}`} className="flex gap-4 card-luxury rounded-lg p-3">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-20 h-20 object-cover rounded" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-ivory text-sm font-heading truncate">{item.product.name}</h4>
                        {item.size && <p className="text-ivory-muted text-xs mt-0.5">Size: {item.size}</p>}
                        <p className="text-gold text-sm mt-1 font-body">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="w-6 h-6 rounded border border-border flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="text-ivory text-sm font-body w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="w-6 h-6 rounded border border-border flex items-center justify-center text-ivory-muted hover:text-gold hover:border-gold transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                      <button onClick={() => removeFromCart(item.product.id)} className="text-ivory-muted hover:text-destructive transition-colors self-start">
                        <X size={16} />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Summary */}
                <div className="border-t border-border p-6 space-y-3">
                  {/* Promo */}
                  {!promoCode && (
                    <div className="flex gap-2">
                      <input
                        value={promoInput}
                        onChange={e => setPromoInput(e.target.value)}
                        placeholder="Promo code"
                        className="flex-1 bg-elevated border border-border rounded-lg px-3 py-2 text-sm text-ivory placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold"
                      />
                      <button onClick={handleApplyPromo} className="btn-ghost-gold rounded-lg text-xs px-4 py-2">Apply</button>
                    </div>
                  )}
                  {promoCode && (
                    <div className="flex items-center justify-between bg-gold/10 rounded-lg px-3 py-2">
                      <span className="text-gold text-sm flex items-center gap-1 font-body"><Tag size={14} /> {promoCode}</span>
                      <button onClick={removePromo} className="text-ivory-muted hover:text-destructive text-xs">Remove</button>
                    </div>
                  )}

                  <div className="space-y-1 text-sm font-body">
                    <div className="flex justify-between text-ivory-muted"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                    {promoDiscount > 0 && <div className="flex justify-between text-emerald-400"><span>Discount</span><span>-{formatPrice(promoDiscount)}</span></div>}
                    <div className="flex justify-between text-ivory-muted"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
                    <div className="flex justify-between text-ivory-muted"><span>GST (3%)</span><span>{formatPrice(gst)}</span></div>
                    <div className="flex justify-between text-ivory font-medium pt-2 border-t border-border text-base"><span>Total</span><span className="text-gold">{formatPrice(total)}</span></div>
                  </div>

                  <Link
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="btn-gold rounded-lg w-full text-center block text-sm mt-3"
                  >
                    Proceed to Checkout
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
