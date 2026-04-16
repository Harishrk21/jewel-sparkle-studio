import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, CreditCard, Smartphone, Building, Banknote, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/context/ToastContext";

function formatPrice(p: number) { return "₹" + p.toLocaleString("en-IN"); }

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Checkout — Lumière Jewels" },
      { name: "description", content: "Complete your purchase at Lumière Jewels." },
    ],
  }),
});

function CheckoutPage() {
  const { items, subtotal, shipping, gst, total, promoCode, promoDiscount, clearCart } = useCart();
  const navigate = useNavigate();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("card");

  const [form, setForm] = useState({
    name: "", email: "", phone: "", address1: "", address2: "", city: "", state: "", pin: "",
  });

  if (items.length === 0 && step < 3) {
    return (
      <div className="pt-32 min-h-screen text-center">
        <p className="text-ivory font-heading text-2xl">Your cart is empty</p>
        <Link to="/collections" className="btn-gold rounded-lg inline-block text-sm mt-6">Shop Now</Link>
      </div>
    );
  }

  const handlePlaceOrder = () => {
    setStep(3);
    clearCart();
    showToast("Order placed successfully! 🎉");
  };

  const steps = ["Cart", "Details", "Confirmation"];
  const orderId = "LJ" + Date.now().toString().slice(-8);
  const deliveryDate = new Date(Date.now() + 5 * 86400000).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  return (
    <div className="pt-20 min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-12">
        {/* Progress */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {steps.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-body ${
                step > i + 1 ? "bg-gold text-background" :
                step === i + 1 ? "border-2 border-gold text-gold" :
                "border border-border text-ivory-muted"
              }`}>
                {step > i + 1 ? <Check size={14} /> : i + 1}
              </div>
              <span className={`text-xs font-body ${step >= i + 1 ? "text-gold" : "text-ivory-muted"}`}>{s}</span>
              {i < 2 && <div className={`w-12 h-px ${step > i + 1 ? "bg-gold" : "bg-border"}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-heading text-2xl text-ivory mb-4">Contact & Shipping</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "Full Name", placeholder: "Priya Sharma" },
                  { key: "email", label: "Email", placeholder: "priya@email.com" },
                  { key: "phone", label: "Phone", placeholder: "+91 98290 12345" },
                  { key: "address1", label: "Address Line 1", placeholder: "42 MG Road" },
                  { key: "address2", label: "Address Line 2", placeholder: "Apt 301" },
                  { key: "city", label: "City", placeholder: "Jaipur" },
                  { key: "state", label: "State", placeholder: "Rajasthan" },
                  { key: "pin", label: "PIN Code", placeholder: "302003" },
                ].map(field => (
                  <div key={field.key}>
                    <label className="text-ivory-muted text-xs font-body mb-1 block">{field.label}</label>
                    <input
                      value={(form as any)[field.key]}
                      onChange={e => setForm(prev => ({ ...prev, [field.key]: e.target.value }))}
                      placeholder={field.placeholder}
                      className="w-full bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-ivory placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold"
                    />
                  </div>
                ))}
              </div>
              <button onClick={() => setStep(2)} className="btn-gold rounded-lg text-sm flex items-center gap-2 mt-4">
                Continue to Payment <ArrowRight size={14} />
              </button>
            </div>

            {/* Summary sidebar */}
            <div className="card-luxury rounded-xl p-6 h-fit">
              <h3 className="font-heading text-lg text-ivory mb-4">Order Summary</h3>
              <div className="space-y-3 text-sm font-body">
                {items.map(item => (
                  <div key={item.product.id} className="flex justify-between text-ivory-muted">
                    <span className="truncate mr-2">{item.product.name} × {item.quantity}</span>
                    <span>{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-3 space-y-1">
                  <div className="flex justify-between text-ivory-muted"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
                  {promoDiscount > 0 && <div className="flex justify-between text-emerald-400"><span>Discount</span><span>-{formatPrice(promoDiscount)}</span></div>}
                  <div className="flex justify-between text-ivory-muted"><span>Shipping</span><span>{shipping === 0 ? "Free" : formatPrice(shipping)}</span></div>
                  <div className="flex justify-between text-ivory-muted"><span>GST (3%)</span><span>{formatPrice(gst)}</span></div>
                  <div className="flex justify-between text-ivory font-medium pt-2 border-t border-border"><span>Total</span><span className="text-gold">{formatPrice(total)}</span></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="max-w-xl mx-auto">
            <h2 className="font-heading text-2xl text-ivory mb-6">Payment Method</h2>
            <div className="space-y-3 mb-6">
              {[
                { id: "card", icon: CreditCard, label: "Credit / Debit Card" },
                { id: "upi", icon: Smartphone, label: "UPI" },
                { id: "netbanking", icon: Building, label: "Net Banking" },
                { id: "cod", icon: Banknote, label: "Cash on Delivery" },
              ].map(method => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all ${
                    paymentMethod === method.id
                      ? "card-luxury border-gold gold-glow"
                      : "card-luxury hover:border-gold/40"
                  }`}
                >
                  <method.icon size={20} className={paymentMethod === method.id ? "text-gold" : "text-ivory-muted"} />
                  <span className={`font-body text-sm ${paymentMethod === method.id ? "text-ivory" : "text-ivory-muted"}`}>{method.label}</span>
                </button>
              ))}
            </div>

            <div className="card-luxury rounded-xl p-4 mb-6">
              <div className="flex justify-between text-sm font-body text-ivory">
                <span>Total</span>
                <span className="text-gold font-medium">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="flex gap-3">
              <button onClick={() => setStep(1)} className="btn-ghost-gold rounded-lg text-sm flex items-center gap-2">
                <ArrowLeft size={14} /> Back
              </button>
              <button onClick={handlePlaceOrder} className="flex-1 btn-gold rounded-lg text-sm">
                Place Order
              </button>
            </div>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md mx-auto">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6"
            >
              <Check size={36} className="text-gold" />
            </motion.div>
            <h2 className="font-heading text-3xl text-ivory">Order Placed Successfully!</h2>
            <div className="gold-divider mt-4" />
            <div className="mt-6 space-y-2 text-sm font-body text-ivory-muted">
              <p>Order ID: <span className="text-gold">{orderId}</span></p>
              <p>Estimated Delivery: <span className="text-ivory">{deliveryDate}</span></p>
            </div>
            <div className="flex gap-3 justify-center mt-8">
              <Link to="/collections" className="btn-gold rounded-lg text-sm">Continue Shopping</Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
