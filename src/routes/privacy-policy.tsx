import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Pauvn Abarana Maligai" },
      { name: "description", content: "Privacy Policy for Pauvn Abarana Maligai. Learn how we collect, use, and protect your personal data." },
    ],
  }),
});

const sections = [
  { title: "1. INTRODUCTION", content: "Pauvu Abarana Maligai (\"we\", \"our\", \"us\") is a gold jewellery business located at 47, North Masi Street, Madurai — 625001, Tamil Nadu, India. We operate this website and communicate with customers via WhatsApp Business (powered by WhatsApp Cloud API). This Privacy Policy explains how we collect, use, store, and protect your personal information." },
  { title: "2. INFORMATION WE COLLECT", content: "We collect: Full name, phone number, email address; Delivery address and PIN code; Order details and purchase history; WhatsApp number (for order updates and offers); Device type, browser, and IP address (for website analytics); Payment method type (we do NOT store card numbers)." },
  { title: "3. HOW WE USE YOUR INFORMATION", content: "Your data is used to: Process and deliver your orders; Send order confirmations and delivery updates via WhatsApp; Respond to your enquiries and complaints; Send festival offers and new arrival alerts (opt-out available); Improve our website and product catalogue." },
  { title: "4. WHATSAPP CLOUD API COMMUNICATION", content: "We use WhatsApp Cloud API (Meta Platforms) to communicate with customers. By providing your WhatsApp number, you consent to receive: Order confirmation messages; Delivery status updates; Festival collection announcements; Customer support responses. You can opt out at any time by sending \"STOP\" to our WhatsApp number. We do not send unsolicited promotional messages." },
  { title: "5. DATA SHARING", content: "We do not sell your data. We share data only with: Payment gateway providers (for transaction processing); Courier/delivery partners (for order fulfilment); WhatsApp / Meta (for message delivery via Cloud API). All partners are bound by confidentiality agreements." },
  { title: "6. COOKIES", content: "Our website uses basic cookies for session management and analytics. You may disable cookies in your browser settings. Core site functionality will still work without cookies." },
  { title: "7. DATA RETENTION", content: "Order data is retained for 7 years as required by Indian tax law (GST). Marketing preferences are retained until you opt out." },
  { title: "8. YOUR RIGHTS", content: "You have the right to: Access the personal data we hold about you; Request correction of incorrect data; Request deletion of your data (subject to legal obligations); Opt out of marketing communications at any time." },
  { title: "9. DATA SECURITY", content: "We use HTTPS encryption, secure servers, and restricted staff access to protect your data. Payment transactions use PCI-compliant gateways." },
  { title: "10. CHILDREN'S PRIVACY", content: "We do not knowingly collect data from individuals under 18 years of age. Purchases by minors must be made by a parent or guardian." },
  { title: "11. CHANGES TO THIS POLICY", content: "We may update this policy. Changes will be posted on this page with an updated \"Last Updated\" date. Continued use of our site implies acceptance." },
  { title: "12. CONTACT US", content: "For privacy concerns: Email: contact@pauvnabarana.com; Phone: +91 98765 43210; Address: 47, North Masi Street, Madurai — 625001, Tamil Nadu, India." },
];

function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-4xl md:text-5xl font-light text-gold text-center">Privacy Policy</h1>
        <div className="gold-divider mt-4" />
        <p className="text-ivory-muted text-sm font-body text-center mt-4">Last Updated: June 1, 2025 | Effective From: June 1, 2025</p>

        <div className="mt-12 space-y-8">
          {sections.map((s, i) => (
            <div key={i}>
              <h2 className="font-heading text-xl text-ivory mb-3">{s.title}</h2>
              <p className="text-ivory-muted text-sm font-body leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="text-gold text-sm font-body hover:text-gold-light transition-colors">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
