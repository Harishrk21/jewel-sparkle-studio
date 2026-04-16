import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Lumière Jewels" },
      { name: "description", content: "Get in touch with Lumière Jewels. Visit our showroom in Jaipur or reach out for custom designs and enquiries." },
      { property: "og:title", content: "Contact — Lumière Jewels" },
      { property: "og:description", content: "Get in touch with Lumière Jewels for custom designs and enquiries." },
    ],
  }),
});

function ContactPage() {
  const { showToast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("We'll respond within 24 hours ✦");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="pt-20 min-h-screen">
      <section className="section-padding">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h1 className="font-heading text-5xl font-light text-gold">Get in Touch</h1>
            <div className="gold-divider mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-5"
            >
              {[
                { key: "name", label: "Full Name", placeholder: "Priya Sharma", type: "text" },
                { key: "email", label: "Email", placeholder: "priya@email.com", type: "email" },
                { key: "phone", label: "Phone", placeholder: "+91 98290 12345", type: "tel" },
              ].map(f => (
                <div key={f.key}>
                  <label className="text-ivory-muted text-xs font-body mb-1 block">{f.label}</label>
                  <input
                    type={f.type}
                    value={(form as any)[f.key]}
                    onChange={e => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
                    placeholder={f.placeholder}
                    required
                    className="w-full bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-ivory placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold"
                  />
                </div>
              ))}

              <div>
                <label className="text-ivory-muted text-xs font-body mb-1 block">Subject</label>
                <select
                  value={form.subject}
                  onChange={e => setForm(prev => ({ ...prev, subject: e.target.value }))}
                  required
                  className="w-full bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-ivory font-body focus:outline-none focus:border-gold appearance-none cursor-pointer"
                >
                  <option value="">Select subject</option>
                  <option value="order">Order Query</option>
                  <option value="custom">Custom Design</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="text-ivory-muted text-xs font-body mb-1 block">Message</label>
                <textarea
                  value={form.message}
                  onChange={e => setForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us how we can help..."
                  rows={5}
                  required
                  className="w-full bg-elevated border border-border rounded-lg px-4 py-2.5 text-sm text-ivory placeholder:text-muted-foreground font-body focus:outline-none focus:border-gold resize-none"
                />
              </div>

              <button type="submit" className="btn-gold rounded-lg text-sm flex items-center gap-2">
                <Send size={14} /> Send Message
              </button>
            </motion.form>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              {[
                { icon: MapPin, title: "Visit Our Showroom", lines: ["42, Johari Bazaar", "Jaipur, Rajasthan 302003", "India"] },
                { icon: Mail, title: "Email Us", lines: ["hello@lumierejewels.com", "orders@lumierejewels.com"] },
                { icon: Phone, title: "Call Us", lines: ["+91 98290 12345", "+91 141 234 5678"] },
                { icon: Clock, title: "Business Hours", lines: ["Mon — Sat: 10 AM — 8 PM", "Sunday: 11 AM — 6 PM"] },
              ].map((info, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="text-gold" size={18} />
                  </div>
                  <div>
                    <h3 className="text-ivory font-body font-medium text-sm">{info.title}</h3>
                    {info.lines.map((line, j) => (
                      <p key={j} className="text-ivory-muted text-sm font-body">{line}</p>
                    ))}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/919829012345"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold rounded-lg text-sm inline-flex items-center gap-2"
              >
                Chat on WhatsApp
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
