import { Link } from "@tanstack/react-router";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/logo.png" alt="Pauvn Abarana Maligai" className="h-16 w-auto mb-4" />
            <p className="text-ivory-muted text-sm leading-relaxed">
              Pure 916 Gold. Madurai's Pride. Your Family's Trust. Since 1987.
            </p>
            <p className="text-gold/80 text-xs font-body italic mt-2">"தங்கத்தின் தரம், மரபின் மகிமை"</p>
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

          {/* Specialities */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest mb-4 font-body font-medium">Our Specialties</h4>
            <div className="flex flex-col gap-2">
              {["Thali & Mangalsutra", "Bangles & Kadas", "Necklaces & Harams", "Earrings & Jimikki", "Bridal Sets", "Temple Jewellery"].map(c => (
                <Link key={c} to="/collections" search={{ category: "all" }} className="text-ivory-muted text-sm hover:text-gold transition-colors">{c}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-ivory text-sm uppercase tracking-widest mb-4 font-body font-medium">Visit Us</h4>
            <div className="flex flex-col gap-2 text-ivory-muted text-sm">
              <p>47, North Masi Street</p>
              <p>Madurai — 625001, Tamil Nadu</p>
              <p>+91 98765 43210</p>
              <p>contact@pauvnabarana.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-ivory-muted text-xs">© {new Date().getFullYear()} Pauvu Abarana Maligai. 47, North Masi Street, Madurai — 625001, Tamil Nadu.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-ivory-muted text-xs hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-ivory-muted text-xs hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
