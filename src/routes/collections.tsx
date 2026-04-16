import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest" | "rating";

export const Route = createFileRoute("/collections")({
  component: CollectionsPage,
  validateSearch: (search: Record<string, unknown>) => ({
    category: (search.category as string) || "all",
  }),
  head: () => ({
    meta: [
      { title: "Collections — Pauvn Abarana Maligai" },
      { name: "description", content: "Browse our 916 BIS Hallmark certified gold jewellery collections. Thali, bangles, necklaces, earrings, rings and bridal sets from Madurai." },
      { property: "og:title", content: "Collections — Pauvn Abarana Maligai" },
      { property: "og:description", content: "916 Hallmark Gold Jewellery Collections from Madurai's Trusted Jeweller." },
    ],
  }),
});

const categoryOptions = ["all", "thali", "bangles", "necklaces", "earrings", "rings", "bridal"];
const categoryLabels: Record<string, string> = {
  all: "All Collections",
  thali: "Thali & Mangalsutra",
  bangles: "Bangles & Kadas",
  necklaces: "Necklaces & Harams",
  earrings: "Earrings & Jimikki",
  rings: "Rings & Mookuthi",
  bridal: "Bridal Sets"
};

function CollectionsPage() {
  const { category: initialCategory } = Route.useSearch();
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState<SortOption>("featured");
  const [priceRange, setPriceRange] = useState([0, 200000]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (activeCategory !== "all") result = result.filter(p => p.category === activeCategory);
    result = result.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "newest": result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      default: result.sort((a, b) => (b.isBestseller ? 1 : 0) - (a.isBestseller ? 1 : 0)); break;
    }
    return result;
  }, [activeCategory, sort, priceRange]);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div className="bg-surface section-padding text-center">
        <h1 className="font-heading text-5xl md:text-6xl font-light text-ivory">Our Collections</h1>
        <p className="text-gold/80 text-sm font-body mt-2 italic">"தங்கத்தின் தரம், மரபின் மகிமை"</p>
        <div className="gold-divider mt-4" />
        <p className="text-ivory-muted text-sm font-body mt-4">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          {categoryLabels[activeCategory]}
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex flex-wrap items-center gap-3 mb-3">
            {categoryOptions.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-body transition-all ${
                  activeCategory === cat
                    ? "bg-gold text-background"
                    : "border border-border text-ivory-muted hover:border-gold hover:text-gold"
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-ivory-muted text-xs font-body">Showing {filtered.length} products</p>
            <select
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
              className="bg-elevated border border-border rounded-lg px-3 py-1.5 text-xs text-ivory font-body focus:outline-none focus:border-gold appearance-none cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price: Low → High</option>
              <option value="price-desc">Price: High → Low</option>
              <option value="newest">Newest</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + sort}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
          >
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ivory-muted font-body">No products match your filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
