import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
  "Free shipping above ₹5,000",
  "New Bridal Collection Live",
  "Certified Hallmark Gold",
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
