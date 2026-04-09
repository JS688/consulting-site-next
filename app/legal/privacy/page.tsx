"use client";

import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-white/60 hover:text-white transition mb-6"
        >
          ← Back
        </Link>
        <div className="rounded-2xl border border-white/10 bg-zinc-950/70 p-8 space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-sm text-white/50">
              Last updated: April 2026
            </p>
          </div>
          <div className="border-t border-white/10" />
          <section className="space-y-6 text-white/80 text-sm">
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">1. Introduction</h2>
              <p>This Privacy Policy explains how JulTech AI Consulting Group LLC (“we,” “us,” or “our”) collects, uses, stores, and protects personal information provided by clients and visitors (“you”) when using this website or our consulting services.</p>
              <p>By accessing this website or submitting information through any form, you consent to the practices described in this Privacy Policy.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">2. Information We Collect</h2>
              <p className="font-semibold text-white">Information You Provide</p>
              <ul className="list-disc ml-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (if provided)</li>
                <li>Project details or messages submitted through forms</li>
                <li>E-signature (typed name or “V”)</li>
                <li>Billing and payment information (processed securely by third-party providers)</li>
              </ul>
              <p className="font-semibold text-white mt-2">Information Collected Automatically</p>
              <ul className="list-disc ml-6">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Basic cookies necessary for website functionality</li>
              </ul>
              <p>We do not collect sensitive personal information unless voluntarily provided.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">3. How We Use Your Information</h2>
              <ul className="list-disc ml-6">
                <li>Respond to consultation requests</li>
                <li>Communicate about your project</li>
                <li>Deliver consulting and website development services</li>
                <li>Send invoices, payment confirmations, and administrative messages</li>
                <li>Improve website performance and user experience</li>
                <li>Maintain business records</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not use your information for advertising or resale.</p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">4. Payment Processing</h2>
              <ul className="list-disc ml-6">
                <li>All payments are handled by secure third-party processors such as Stripe or PayPal.</li>
                <li>We do not store or have access to your full credit card number.</li>
                <li>Your payment information is processed according to the payment provider’s own privacy policy.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">5. Sharing of Information</h2>
              <ul className="list-disc ml-6">
                <li>We do not sell or rent your personal information.</li>
                <li>We may share information only with:</li>
                <ul className="list-disc ml-10">
                  <li>Essential service providers (hosting, email, payment processors)</li>
                  <li>Legal authorities if required by law</li>
                  <li>Contractors assisting with your project (only when necessary and under confidentiality)</li>
                </ul>
                <li>All third-party providers are required to protect your information.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">6. Cookies and Analytics</h2>
              <ul className="list-disc ml-6">
                <li>This website may use minimal cookies for:</li>
                <ul className="list-disc ml-10">
                  <li>Basic site functionality</li>
                  <li>Security</li>
                  <li>Performance monitoring</li>
                </ul>
                <li>If analytics tools (such as Google Analytics) are used, they may collect anonymized usage data.</li>
                <li>If you prefer, you can disable cookies in your browser settings.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">7. Data Retention</h2>
              <p>We retain information only as long as necessary for:</p>
              <ul className="list-disc ml-6">
                <li>Delivering services</li>
                <li>Business operations</li>
                <li>Legal and financial record-keeping</li>
              </ul>
              <p>Typical retention periods:</p>
              <ul className="list-disc ml-6">
                <li>Consultation requests: up to 12 months</li>
                <li>Client project files: up to 3 years</li>
                <li>Financial records: 7 years (standard legal requirement)</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">8. Your Rights</h2>
              <p>Depending on your location, you may have the right to:</p>
              <ul className="list-disc ml-6">
                <li>Request access to your data</li>
                <li>Request corrections</li>
                <li>Request deletion</li>
                <li>Request a copy of your data</li>
                <li>Withdraw consent (where applicable)</li>
              </ul>
              <p>To exercise these rights, contact us at: <a href="mailto:ai@jul-tech.com" className="underline">ai@jul-tech.com</a></p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">9. Data Security</h2>
              <ul className="list-disc ml-6">
                <li>We take reasonable measures to protect your information, including:</li>
                <ul className="list-disc ml-10">
                  <li>Encrypted hosting</li>
                  <li>Secure email providers</li>
                  <li>Encrypted payment processing</li>
                  <li>Limited access to personal data</li>
                </ul>
                <li>However, no online system is 100% secure, and we cannot guarantee absolute protection.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">10. Children’s Privacy</h2>
              <ul className="list-disc ml-6">
                <li>This website and our services are not intended for individuals under the age of 18.</li>
                <li>We do not knowingly collect information from minors.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">11. Links to Third-Party Websites</h2>
              <ul className="list-disc ml-6">
                <li>Our website may contain links to external sites.</li>
                <li>We are not responsible for the privacy practices or content of those websites.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">12. Updates to This Policy</h2>
              <ul className="list-disc ml-6">
                <li>We may update this Privacy Policy periodically.</li>
                <li>The latest version will always be posted on this page with the updated date.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white mb-1">13. Contact Information</h2>
              <ul className="list-disc ml-6">
                <li>For questions about this Privacy Policy or your data, contact:</li>
                <li>JulTech AI Consulting Group LLC</li>
                <li>Columbia, SC, United States</li>
                <li><a href="mailto:ai@jul-tech.com" className="underline">ai@jul-tech.com</a></li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
