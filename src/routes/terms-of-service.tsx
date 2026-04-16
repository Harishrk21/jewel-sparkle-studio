import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Pauvn Abarana Maligai" },
      { name: "description", content: "Terms of Service for Pauvn Abarana Maligai. 916 BIS Hallmark Gold Jewellery from Madurai." },
    ],
  }),
});

const sections = [
  { title: "1. ACCEPTANCE OF TERMS", content: "By accessing our website or placing an order, you agree to these Terms of Service. If you do not agree, please do not use our services." },
  { title: "2. ELIGIBILITY", content: "You must be at least 18 years of age to place an order. Orders placed on behalf of minors must be done by a parent or legal guardian." },
  { title: "3. PRODUCTS & PRICING", content: "All prices are in Indian Rupees (₹) and inclusive of GST (3% on gold). Gold prices on our website are indicative and subject to daily market rates. Final price at time of order confirmation is binding. Making charges and wastage are disclosed transparently on every bill. Product images are for representation; slight variations in texture or colour may exist due to handcrafted nature of jewellery." },
  { title: "4. ORDERS & CONFIRMATION", content: "Orders are confirmed only after payment is received. For custom and bridal orders, a 25% advance is required. We reserve the right to cancel orders in case of pricing errors or stock unavailability. You will receive an order confirmation via WhatsApp and email." },
  { title: "5. PAYMENT", content: "Accepted payment methods: UPI, Credit/Debit Card, Net Banking, Cash on Delivery (COD available for orders under ₹50,000 within Madurai city limits only)." },
  { title: "6. SHIPPING & DELIVERY", content: "Standard delivery: 5–7 business days across Tamil Nadu. Madurai city: 1–2 business days. Custom/bridal orders: 15–21 business days. Free shipping on orders above ₹10,000. All parcels are fully insured and sent via trusted courier partners. A tracking number will be shared via WhatsApp once dispatched." },
  { title: "7. RETURNS & REFUND POLICY", content: "Returns accepted within 7 days of delivery. Product must be unused, unworn, and in original packaging. Customised, engraved, or altered items are non-returnable. Refunds processed within 7 business days of return receipt. Refund is credited to original payment method." },
  { title: "8. EXCHANGE POLICY", content: "Size exchange available within 15 days (rings and bangles). Exchange value based on weight and prevailing gold rate on day of exchange. Old gold exchange accepted at market rate — no deductions for purity if BIS hallmark is present." },
  { title: "9. CANCELLATION POLICY", content: "Orders can be cancelled before dispatch. Once dispatched, cancellation is not possible — initiate a return instead. Custom orders cannot be cancelled after production begins." },
  { title: "10. INTELLECTUAL PROPERTY", content: "All designs, photographs, content, and brand assets on this website are the exclusive property of Pauvn Abarana Maligai. Reproduction without written permission is prohibited." },
  { title: "11. PROHIBITED USE", content: "You agree not to: Use our website for fraudulent transactions; Copy or replicate our jewellery designs; Misrepresent yourself or your intent when placing orders." },
  { title: "12. LIMITATION OF LIABILITY", content: "We are not liable for indirect losses, delays due to courier failures, or loss of value due to gold market fluctuations after purchase." },
  { title: "13. GOVERNING LAW", content: "These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction of courts in Madurai, Tamil Nadu." },
  { title: "14. WHATSAPP COMMUNICATION CONSENT", content: "By sharing your WhatsApp number with us, you consent to receive transactional and promotional messages via WhatsApp Business (Cloud API). You may opt out at any time by messaging \"STOP\" to +91 99866 88313." },
  { title: "15. CONTACT US", content: "For any questions regarding these terms: Email: kumar84prasanna@yahoo.com; Phone: +91 99866 88313; Address: No. 50, South Avani Moola Street, Madurai, Tamil Nadu - 625001, India." },
];

function TermsPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-4xl md:text-5xl font-light text-gold text-center">Terms of Service</h1>
        <div className="gold-divider mt-4" />
        <p className="text-ivory-muted text-sm font-body text-center mt-4">Last Updated: June 1, 2025</p>

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
