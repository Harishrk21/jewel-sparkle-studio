import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { totalItems: cartCount, setIsCartOpen } = useCart();
  const { totalItems: wishlistCount, setIsWishlistOpen } = useWishlist();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location.pathname]);

  const navLinks = [
    { to: "/" as const, label: "Home" },
    { to: "/collections" as const, label: "Collections", search: { category: "all" } },
    { to: "/about" as const, label: "About" },
    { to: "/contact" as const, label: "Contact" },
  ];

  const bg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md border-b border-border"
    : "bg-transparent";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${bg}`}>
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Pauvn Abarana Maligai" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                search={(link as any).search}
                className="text-ivory-muted text-sm tracking-widest uppercase font-body hover:text-gold transition-colors relative group"
                activeProps={{ className: "text-gold" }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative text-ivory-muted hover:text-gold transition-colors"
            >
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-background text-[10px] rounded-full flex items-center justify-center font-body">
                  {wishlistCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-ivory-muted hover:text-gold transition-colors"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gold text-background text-[10px] rounded-full flex items-center justify-center font-body">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="md:hidden text-ivory-muted hover:text-gold transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-ivory-muted hover:text-gold"
            >
              <X size={28} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.to}
                    search={(link as any).search}
                    className="text-ivory text-2xl tracking-widest uppercase font-heading hover:text-gold transition-colors"
                    activeProps={{ className: "text-gold" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
