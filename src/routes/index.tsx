import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronDown, Star, ArrowRight, Send, Gem } from "lucide-react";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import ProductCard from "@/components/ProductCard";

export const Route = createFileRoute("/")({
  component: HomePage,
});

/* ── Gold Particles Canvas ── */
function GoldParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.2,
    }));

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
}

/* ── Counter ── */
function Counter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end]);

  return <span ref={ref}>{prefix}{count.toLocaleString("en-IN")}{suffix}</span>;
}

/* ── Section Wrapper ── */
function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7 }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-16">
      <h2 className="font-heading text-4xl md:text-5xl font-light text-gold">{title}</h2>
      <div className="gold-divider mt-4" />
      {subtitle && <p className="text-ivory-muted text-sm mt-4 font-body max-w-lg mx-auto">{subtitle}</p>}
    </div>
  );
}

/* ── HOME PAGE ── */
function HomePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const featuredProducts = products.filter(p => p.isBestseller).slice(0, 8);
  const heroWords = ["Worn by", "Tradition.", "Blessed by", "Madurai."];

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GoldParticles />
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background z-[1]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-gold text-xs font-body">🏅 BIS 916 Certified | Since 1987 | Madurai's Own</span>
            </motion.div>
            <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light italic text-ivory leading-[1.1]">
              {heroWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
                  className="block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-ivory-muted mt-6 text-base font-body max-w-md leading-relaxed"
            >
              Pure 916 Hallmark Gold Jewellery crafted for every celebration — from Pongal to Pandaga.
              <span className="block mt-2 text-gold font-heading italic">"தங்கத்தின் தரம், மரபின் மகிமை"</span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="flex gap-4 mt-8"
            >
              <Link to="/collections" search={{ category: "all" }} className="btn-gold rounded-lg text-sm">Explore Collections</Link>
              <a href="https://wa.me/919986688313" target="_blank" rel="noopener noreferrer" className="btn-ghost-gold rounded-lg text-sm">Book a Visit</a>
            </motion.div>
          </div>

          {/* Right: Featured Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-gold/30" style={{ animation: "gold-border-rotate 20s linear infinite" }} />
              <div className="absolute inset-3 rounded-full border border-gold/20" style={{ animation: "gold-border-rotate 15s linear infinite reverse" }} />
              <div className="absolute inset-6 rounded-full overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"
                  alt="Traditional Tamil Nadu Gold Jewelry"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <ChevronDown className="text-gold/60" size={28} />
        </motion.div>
      </section>

      {/* Stats */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-6 mb-6">
          {[
            { end: 35000, suffix: "+", label: "Happy Families Served" },
            { end: 1200, suffix: "+", label: "Unique Gold Designs" },
            { end: 916, suffix: "", label: "Hallmark Purity Guaranteed" },
            { end: 37, suffix: " Years", label: "Of Trusted Craftsmanship" },
          ].map((stat, i) => (
            <div key={i}>
              <p className="font-heading text-3xl md:text-4xl font-light text-gold">
                <Counter end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-ivory-muted text-sm mt-2 font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Categories */}
      <Section>
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle title="Shop by Collection" subtitle="Traditional South Indian jewellery categories" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map(cat => (
              <Link
                key={cat.id}
                to="/collections"
                search={{ category: cat.id as any }}
                className="group"
              >
                <div className="relative aspect-[4/5] rounded-xl overflow-hidden card-luxury">
                  <img src={cat.image} alt={cat.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading text-lg text-ivory leading-tight">{cat.name}</h3>
                    <p className="text-gold/80 text-xs font-body mt-1">{cat.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Products */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle title="Customer Favourites" subtitle="Bestselling 916 Hallmark Gold from Madurai" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/collections" search={{ category: "all" }} className="btn-ghost-gold rounded-lg text-sm inline-block">View All Collections</Link>
          </div>
        </div>
      </Section>

      {/* Brand Story */}
      <Section>
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <blockquote className="font-heading text-3xl md:text-4xl font-light text-ivory italic leading-snug mb-6">
              "Three Generations.<br />One Promise.<br />Pure Gold."
            </blockquote>
            <p className="text-ivory-muted font-body leading-relaxed">
              What began as a small jewellery shop in the heart of Madurai's Masi Street in 1987 
              has grown into one of the city's most beloved gold maligais. We don't just sell jewellery — 
              we craft heirlooms that travel from mother to daughter, from wedding to naming ceremony, 
              from generation to generation.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { icon: "🏅", title: "916 BIS Hallmark on Every Piece", desc: "Government certified purity guarantee on all gold items." },
              { icon: "⚖️", title: "100% Transparent Weight & Making Charges", desc: "Clear billing with exact weight, wastage and charges shown." },
              { icon: "🔄", title: "Old Gold Exchange at Live Market Rate", desc: "Exchange your old gold at the day's market rate with no deductions." },
              { icon: "💎", title: "Custom Bridal & Temple Jewellery Orders", desc: "Personalized designs crafted by our master karigars." },
            ].map((usp, i) => (
              <div key={i} className="flex gap-4">
                <span className="text-2xl">{usp.icon}</span>
                <div>
                  <h4 className="text-ivory font-body font-medium">{usp.title}</h4>
                  <p className="text-ivory-muted text-sm font-body">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle title="What Our Customers Say" subtitle="Trusted by 35,000+ families across Tamil Nadu" />
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {testimonials.map(t => (
              <div key={t.id} className="flex-shrink-0 w-80 card-luxury rounded-xl p-6">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < t.rating ? "text-gold fill-gold" : "text-muted-foreground"} />
                  ))}
                </div>
                <p className="text-ivory text-sm font-body leading-relaxed mb-4">"{t.quote}"</p>
                <div>
                  <p className="text-ivory font-body font-medium text-sm">{t.name}</p>
                  <p className="text-ivory-muted text-xs font-body">{t.city} • {t.productBought}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light text-gold mb-4">Join Our Gold Circle</h2>
          <div className="gold-divider" />
          <p className="text-ivory-muted text-sm mt-4 font-body mb-8">Get notified on new arrivals, festive offers, and today's live gold rate in Madurai.</p>
          {subscribed ? (
            <p className="text-gold font-body">You're in! We'll keep you posted. 🙏</p>
          ) : (
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your WhatsApp number or Email"
                className="flex-1 bg-elevated border border-border rounded-lg px-4 py-3 text-sm text-ivory placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold"
              />
              <button
                onClick={() => { if (email) setSubscribed(true); }}
                className="btn-gold rounded-lg text-sm flex items-center gap-2"
              >
                <Send size={14} /> Stay Updated
              </button>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}
