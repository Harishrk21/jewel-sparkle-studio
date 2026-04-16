import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms-of-service")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service — Lumière Jewels" },
      { name: "description", content: "Terms of Service for Lumière Jewels. Read our terms governing purchases, returns, and use of our services." },
    ],
  }),
});

const sections = [
  { title: "1. Acceptance of Terms", content: "By accessing or using the Lumière Jewels website (lumierejewels.com) and associated services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms constitute a legally binding agreement between you and Lumière Jewels Pvt. Ltd." },
  { title: "2. Eligibility", content: "You must be at least 18 years of age to make purchases on our website. If you are under 18, you may browse our website but must have a parent or legal guardian complete any purchase on your behalf. By placing an order, you represent that you are at least 18 years old or have the consent of a legal guardian." },
  { title: "3. Product Descriptions & Pricing", content: "We strive to accurately describe our products and display current pricing. All prices are listed in Indian Rupees (₹) and are inclusive of applicable GST. Product weights, dimensions, and gemstone specifications are approximate and may vary slightly due to the handcrafted nature of our jewellery. We reserve the right to modify prices without prior notice. In the event of a pricing error, we will notify you before processing your order." },
  { title: "4. Order Placement & Confirmation", content: "Placing an order on our website constitutes an offer to purchase. Order confirmation is sent via email and/or WhatsApp. We reserve the right to cancel any order due to product unavailability, pricing errors, or suspected fraudulent activity. An order is considered confirmed only after payment has been successfully processed and you receive our confirmation communication." },
  { title: "5. Payment Terms", content: "We accept payment via Credit Cards, Debit Cards, UPI, Net Banking, and Cash on Delivery (for select PIN codes). All online payments are processed through PCI DSS compliant payment gateways. For Cash on Delivery orders, an additional convenience fee of ₹99 may apply. EMI options are available on select bank cards for orders above ₹10,000." },
  { title: "6. Shipping & Delivery", content: "We ship across India through insured courier partners including BlueDart, DTDC, and Delhivery. Standard delivery takes 5-7 business days. Express delivery (2-3 business days) is available at additional cost. Free shipping is offered on orders above ₹5,000. All shipments are fully insured against loss or damage during transit. Delivery timelines may be affected by natural disasters, strikes, or other circumstances beyond our control." },
  { title: "7. Returns & Refund Policy", content: "We offer a 7-day return window from the date of delivery. To be eligible for return, the product must be unworn, undamaged, and in its original packaging with all tags intact. Custom-made and engraved pieces are not eligible for return. To initiate a return, contact us within 7 days of delivery with your order ID. Refunds are processed within 7-10 business days after we receive and inspect the returned item. Refunds are issued to the original payment method." },
  { title: "8. Cancellation Policy", content: "Orders may be cancelled before dispatch by contacting our customer service team. Once an order has been dispatched, it cannot be cancelled but may be returned under our Returns Policy. For custom orders, cancellation is only possible within 24 hours of order placement and before production has commenced." },
  { title: "9. Exchange Policy", content: "We offer size exchanges within 15 days of delivery for rings, bangles, and bracelets. The item must be in unworn condition with original packaging. Exchange is subject to availability of the requested size. If the desired size is unavailable, a full refund will be offered. One free exchange is permitted per order; subsequent exchanges may incur shipping charges." },
  { title: "10. Intellectual Property", content: "All content on this website including designs, photographs, text, logos, and graphics are the intellectual property of Lumière Jewels Pvt. Ltd. and are protected by Indian copyright and trademark laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent. Our jewellery designs are original and may not be replicated by any individual or entity." },
  { title: "11. Prohibited Use", content: "You agree not to: use our website for any unlawful purpose; attempt to gain unauthorized access to our systems; submit false or misleading information; use automated tools to scrape or extract data; resell our products without written authorization; defame, harass, or impersonate any person; interfere with the proper working of our website." },
  { title: "12. Limitation of Liability", content: "To the maximum extent permitted by law, Lumière Jewels shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services, including but not limited to loss of profits, data, or goodwill. Our total liability for any claim shall not exceed the amount paid by you for the specific product or service giving rise to the claim." },
  { title: "13. Indemnification", content: "You agree to indemnify, defend, and hold harmless Lumière Jewels, its officers, directors, employees, and agents from any claims, losses, damages, liabilities, costs, and expenses arising from your breach of these Terms, your use of our services, or your violation of any rights of a third party." },
  { title: "14. Governing Law & Jurisdiction", content: "These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of our services shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India." },
  { title: "15. WhatsApp Communication Consent", content: "By providing your phone number during checkout or account creation, you consent to receiving transactional messages via WhatsApp including order confirmations, shipping updates, and delivery notifications. Promotional messages via WhatsApp require separate explicit consent. You may withdraw consent at any time by replying STOP." },
  { title: "16. Contact Us", content: "For questions about these Terms of Service, please contact: Legal Department, Lumière Jewels Pvt. Ltd., 42 Johari Bazaar, Jaipur, Rajasthan 302003, India. Email: legal@lumierejewels.com. Phone: +91 141 234 5678." },
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
