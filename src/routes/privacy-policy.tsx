import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy — Lumière Jewels" },
      { name: "description", content: "Privacy Policy for Lumière Jewels. Learn how we collect, use, and protect your personal data." },
    ],
  }),
});

const sections = [
  { title: "1. Introduction & Scope", content: "This Privacy Policy explains how Lumière Jewels (\"we\", \"our\", \"us\") collects, uses, shares, and protects personal information when you visit our website, make a purchase, or interact with us through any channel including WhatsApp Business. This policy applies to all users of lumierejewels.com and our associated services. By using our services, you consent to the practices described herein." },
  { title: "2. Information We Collect", content: "We collect the following categories of personal information: (a) Identity Data: full name, date of birth, gender; (b) Contact Data: email address, phone number, billing and delivery addresses; (c) Financial Data: payment card details, UPI IDs, bank account details (processed securely through our payment partners); (d) Transaction Data: details of products purchased, order history, payment records; (e) Technical Data: IP address, browser type and version, device information, operating system; (f) Usage Data: how you navigate our website, pages viewed, time spent, click patterns; (g) Marketing Data: your preferences for receiving communications from us." },
  { title: "3. How We Use Your Information", content: "We use your personal information to: process and fulfill your orders including payment processing, shipping, and delivery updates; communicate with you about your orders via email, SMS, and WhatsApp; personalize your shopping experience with relevant product recommendations; send marketing communications with your explicit consent (you may opt out at any time); improve our website, products, and customer service; detect and prevent fraud and unauthorized transactions; comply with legal and regulatory obligations." },
  { title: "4. WhatsApp Business Communication", content: "We use WhatsApp Cloud API to communicate with our customers. When you provide your phone number and consent to WhatsApp communications, we may send: order confirmations and shipping updates; delivery notifications; payment receipts; customer service responses; promotional messages about new collections and offers (only with your explicit opt-in). You may opt out of WhatsApp communications at any time by replying STOP to any message or contacting us at hello@lumierejewels.com." },
  { title: "5. Data Sharing with Third Parties", content: "We share your data only with: Payment Processors (Razorpay, PayU) for secure transaction processing; Shipping Partners (BlueDart, DTDC, Delhivery) for order delivery; WhatsApp/Meta for business messaging services; Analytics providers for website improvement. We never sell, rent, or trade your personal data to third parties for their marketing purposes." },
  { title: "6. Cookies & Tracking", content: "Our website uses cookies and similar technologies to enhance your browsing experience, remember your preferences, analyze site traffic, and serve relevant advertisements. You can manage cookie preferences through your browser settings. Essential cookies are necessary for the website to function and cannot be disabled." },
  { title: "7. Data Retention Policy", content: "We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including satisfying legal, accounting, or reporting requirements. Order data is retained for 7 years for tax and legal compliance. Marketing consent records are maintained until you withdraw consent. Account data is retained until you request deletion." },
  { title: "8. Your Rights", content: "Under applicable data protection laws, you have the right to: access your personal data; request correction of inaccurate data; request deletion of your data (subject to legal obligations); object to processing of your data for marketing; request data portability in a machine-readable format; withdraw consent at any time. To exercise any of these rights, please contact our Data Protection Officer." },
  { title: "9. Data Security Measures", content: "We implement industry-standard security measures including: SSL/TLS encryption for all data in transit; PCI DSS compliant payment processing; encrypted storage of sensitive personal data; regular security audits and vulnerability assessments; employee access controls and confidentiality agreements; incident response procedures for data breaches." },
  { title: "10. Children's Privacy", content: "Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from minors. If you are under 18, please use our services only under the supervision of a parent or guardian. If we become aware that we have collected data from a minor without proper consent, we will take steps to delete it promptly." },
  { title: "11. Changes to This Policy", content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by posting the updated policy on our website and, where appropriate, via email or WhatsApp. The date of the latest revision will always be indicated at the top of this page." },
  { title: "12. Contact the Data Controller", content: "For any questions, concerns, or requests regarding this Privacy Policy or your personal data, please contact: Data Protection Officer, Lumière Jewels Pvt. Ltd., 42 Johari Bazaar, Jaipur, Rajasthan 302003, India. Email: privacy@lumierejewels.com. Phone: +91 141 234 5678." },
];

function PrivacyPolicyPage() {
  return (
    <div className="pt-20 min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-4xl md:text-5xl font-light text-gold text-center">Privacy Policy</h1>
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
