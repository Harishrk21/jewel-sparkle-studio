import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Gem, Shield, Heart, Package, RotateCcw, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Lumière Jewels" },
      { name: "description", content: "Born in the lanes of Jaipur, crafted for the world. Discover the heritage and artistry behind Lumière Jewels." },
      { property: "og:title", content: "About — Lumière Jewels" },
      { property: "og:description", content: "Born in the lanes of Jaipur, crafted for the world." },
    ],
  }),
});

const timeline = [
  { year: "2008", title: "Founded", desc: "Started in a small workshop in Jaipur's Johari Bazaar with three master artisans." },
  { year: "2012", title: "First Flagship Store", desc: "Opened our first retail space, bringing Rajasthani craftsmanship to discerning customers." },
  { year: "2016", title: "National Award", desc: "Received the National Award for Excellence in Jewellery Design from the Gem & Jewellery Council." },
  { year: "2020", title: "Online Launch", desc: "Launched our e-commerce platform, making luxury accessible across India." },
  { year: "2024", title: "10,000+ Customers", desc: "Crossed the milestone of 10,000 happy customers across 28 states." },
];

const values = [
  { icon: Gem, title: "Handcrafted", desc: "Each piece passes through 12 artisan hands" },
  { icon: Shield, title: "Ethical Sourcing", desc: "Conflict-free gems, recycled precious metals" },
  { icon: Award, title: "Certified Purity", desc: "BIS Hallmark on every gold piece" },
  { icon: Heart, title: "Lifetime Polish", desc: "Free cleaning & polishing, forever" },
  { icon: Package, title: "Secure Packaging", desc: "Tamper-proof luxury boxes with insurance" },
  { icon: RotateCcw, title: "Easy Returns", desc: "7-day hassle-free return policy" },
];

function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Heritage */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-xl overflow-hidden card-luxury">
            <img
              src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800"
              alt="Lumière artisan workshop"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-gold mb-4">Our Heritage</h1>
            <div className="gold-divider !mx-0" />
            <p className="text-ivory-muted font-body leading-relaxed mt-6">
              Born in the lanes of Jaipur, crafted for the world. Lumière Jewels was founded on the belief that jewellery should be more than adornment — it should be art you wear, stories you tell, and legacies you pass on.
            </p>
            <p className="text-ivory-muted font-body leading-relaxed mt-4">
              Our master artisans carry centuries of Rajasthani goldsmithing tradition in their hands. Every piece is handcrafted using techniques passed down through generations, yet designed for the modern woman who values both heritage and contemporary elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="font-heading text-4xl font-light text-gold text-center mb-4">Our Journey</h2>
          <div className="gold-divider mb-16" />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full -translate-x-1/2 mt-2" />
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <span className="text-gold font-heading text-2xl">{item.year}</span>
                  <h3 className="text-ivory font-heading text-xl mt-1">{item.title}</h3>
                  <p className="text-ivory-muted text-sm font-body mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-4xl font-light text-gold text-center mb-4">Master Artisans</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ratan Lal Soni", specialty: "Kundan Setting", years: 35, desc: "Third-generation Kundan artist from Bikaner." },
              { name: "Mohd. Farooq", specialty: "Meenakari Enamel", years: 28, desc: "Master of the ancient art of enamel work on gold." },
              { name: "Geeta Devi", specialty: "Filigree & Wire Work", years: 22, desc: "Creates impossibly delicate patterns from gold wire." },
            ].map((artisan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="card-luxury rounded-xl p-6 text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <Gem className="text-gold" size={28} />
                </div>
                <h3 className="font-heading text-xl text-ivory">{artisan.name}</h3>
                <p className="text-gold text-sm font-body mt-1">{artisan.specialty}</p>
                <p className="text-ivory-muted text-xs font-body mt-1">{artisan.years} years of experience</p>
                <p className="text-ivory-muted text-sm font-body mt-3">{artisan.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-4xl font-light text-gold text-center mb-4">Our Promise</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-luxury rounded-xl p-6 text-center"
              >
                <val.icon className="text-gold mx-auto mb-3" size={28} />
                <h4 className="text-ivory font-body font-medium text-sm">{val.title}</h4>
                <p className="text-ivory-muted text-xs font-body mt-2">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
