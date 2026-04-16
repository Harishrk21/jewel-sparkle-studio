import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Gem, Shield, Heart, Package, RotateCcw, Award } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Us — Pauvn Abarana Maligai" },
      { name: "description", content: "Three generations of trusted gold craftsmanship in Madurai since 1987. Pure 916 BIS Hallmark Gold Jewellery." },
      { property: "og:title", content: "About Us — Pauvn Abarana Maligai" },
      { property: "og:description", content: "Madurai's Trusted Jeweller Since 1987. Three Generations. One Promise. Pure Gold." },
    ],
  }),
});

const timeline = [
  { year: "1987", title: "Founded", desc: "Founded by Shri. Pauvu Mudaliar on South Avani Moola Street, Madurai" },
  { year: "1995", title: "Expansion", desc: "Expanded to full showroom with 200+ designs" },
  { year: "2003", title: "BIS Certification", desc: "Received BIS 916 Hallmark Certification (first on Masi Street)" },
  { year: "2010", title: "Second Generation", desc: "Second generation takes over; custom bridal orders launched" },
  { year: "2016", title: "Award Winner", desc: "Winner: 'Most Trusted Jeweller — Madurai District' Award" },
  { year: "2020", title: "Digital Launch", desc: "Online catalogue launched; WhatsApp order service started" },
  { year: "2024", title: "37 Years", desc: "37 Years of service | 35,000+ families served" },
];

const values = [
  { icon: Award, title: "916 BIS Hallmark", desc: "Every piece certified. No compromise, ever." },
  { icon: Gem, title: "Transparent Billing", desc: "Weight, making charge, wastage — all shown clearly." },
  { icon: RotateCcw, title: "Old Gold Exchange", desc: "Exchange your old gold at live market rate. No deductions." },
  { icon: Shield, title: "Handcrafted Designs", desc: "Over 60% of our designs are handmade by in-house karigars." },
  { icon: Package, title: "Gift Packaging", desc: "Complimentary premium box and card for all purchases." },
  { icon: Heart, title: "Lifetime Cleaning", desc: "Free cleaning and polishing for all purchases. Forever." },
];

const artisans = [
  {
    name: "Muthu Karigar",
    specialty: "Temple Jewellery & Repoussé Work",
    experience: "34 Years",
    quote: "I learned this craft from my father. Every Meenakshi I engrave — I feel her blessings in my hands."
  },
  {
    name: "Selvi Akka",
    specialty: "Stone Setting & Kemp Work",
    experience: "22 Years",
    quote: "Setting each stone is like placing a star in the sky. It must sit perfectly — or not at all."
  },
  {
    name: "Rajan Goldsmith",
    specialty: "Thali & Bridal Chain Work",
    experience: "28 Years",
    quote: "A thali is the most sacred thing I make. I start every thali with a prayer."
  }
];

function AboutPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Heritage */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/5] rounded-xl overflow-hidden card-luxury">
            <img
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800"
              alt="Traditional South Indian Jewelry"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="font-heading text-4xl md:text-5xl font-light text-gold mb-4">Three Generations. One Street. Pure Gold.</h1>
            <div className="gold-divider !mx-0" />
            <p className="text-ivory-muted font-body leading-relaxed mt-6">
              It began in 1987 when our founder, Shri. Pauvu Mudaliar, opened a small jewellery shop at No. 50, South Avani Moola Street - the beating heart of Madurai's jewellery district. With a single glass case, a set of hand tools, and an unshakeable commitment to 916 purity, he built the foundation of what would become Madurai's most trusted gold maligai.
            </p>
            <p className="text-ivory-muted font-body leading-relaxed mt-4">
              Today, three generations later, Pauvn Abarana Maligai serves over 35,000 families across Madurai, Dindigul, Virudhunagar, and Theni. Every piece we craft carries the same promise - pure 916 BIS Hallmark gold, transparent pricing, and craftsmanship that honours Tamil tradition.
            </p>
            <p className="text-ivory-muted font-body leading-relaxed mt-4">
              We are not just a jewellery shop. We are part of your family's story — present at your weddings, your children's naming ceremonies, your Pongal mornings, and your Karthigai evenings. That trust is our greatest hallmark.
            </p>
            <blockquote className="mt-6 pl-4 border-l-2 border-gold text-gold font-heading italic text-lg">
              "தங்கம் வெறும் உலோகம் அல்ல — அது உங்கள் குடும்பத்தின் கதை."
            </blockquote>
            <p className="text-ivory-muted text-sm font-body mt-1 italic">("Gold is not merely a metal — it is your family's story.")</p>
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

      {/* Values */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-4xl font-light text-gold text-center mb-4">The 916 Promise</h2>
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

      {/* Artisans */}
      <section className="section-padding bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="font-heading text-4xl font-light text-gold text-center mb-4">Our Master Karigars</h2>
          <div className="gold-divider mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisans.map((artisan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-luxury rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-gold/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-gold text-2xl font-heading">{artisan.name.charAt(0)}</span>
                </div>
                <h4 className="text-ivory font-heading text-xl">{artisan.name}</h4>
                <p className="text-gold text-sm font-body mt-1">{artisan.specialty}</p>
                <p className="text-ivory-muted text-xs font-body mt-1">{artisan.experience} Experience</p>
                <blockquote className="mt-4 text-ivory-muted text-sm font-body italic leading-relaxed">
                  "{artisan.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
