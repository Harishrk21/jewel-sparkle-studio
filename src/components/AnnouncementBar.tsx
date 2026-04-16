import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "🏅 916 BIS Hallmark Certified Gold — Guaranteed Purity",
  "🚚 Free Home Delivery in Madurai above ₹10,000",
  "✨ New Bridal Collection — Karthigai Thiruvizha Special",
  "💍 Custom Jewellery Orders Accepted — WhatsApp Us",
  "🎁 Exchange Your Old Gold at Best Market Rate",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gold text-background text-center text-xs py-2 font-body tracking-wide relative z-[51] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="block"
        >
          {messages[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
