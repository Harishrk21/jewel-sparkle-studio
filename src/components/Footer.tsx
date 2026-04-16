import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="text-gold text-lg tracking-[0.3em] font-heading font-light mb-4">L U M I È R E</p>
            <p className="text-ivory-muted text-sm leading-relaxed">
              Born in the lanes of Jaipur, crafted for the world. Every piece tells a story only you can finish.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest mb-4 font-body font-medium">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/" as const, label: "Home" },
                { to: "/collections" as const, label: "Collections" },
                { to: "/about" as const, label: "About Us" },
                { to: "/contact" as const, label: "Contact" },
              ].map(l => (
                <Link key={l.to} to={l.to} className="text-ivory-muted text-sm hover:text-gold transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest mb-4 font-body font-medium">Collections</h4>
            <div className="flex flex-col gap-2">
              {["Rings", "Necklaces", "Earrings", "Bracelets", "Anklets", "Sets"].map(c => (
                <Link key={c} to="/collections" search={{ category: c.toLowerCase() }} className="text-ivory-muted text-sm hover:text-gold transition-colors">{c}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest mb-4 font-body font-medium">Contact</h4>
            <div className="flex flex-col gap-2 text-ivory-muted text-sm">
              <p>42, Johari Bazaar, Jaipur</p>
              <p>Rajasthan, India 302003</p>
              <p>hello@lumierejewels.com</p>
              <p>+91 98290 12345</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory-muted text-xs">© 2025 Lumière Jewels. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-ivory-muted text-xs hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-ivory-muted text-xs hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
