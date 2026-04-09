"use client";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white px-6 py-12">
      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold text-[#e5c98a]">
          Privacy Policy
        </h1>
        <div className="space-y-1 text-sm text-white/70">
          <p>JulTech AI Consulting Group LLC</p>
          <p>Columbia, SC, United States</p>
          <p>ai@jul-tech.com</p>
        </div>
 {/* SECTION TEMPLATE */}
        {[
          {
            title: "1. Agreement to Terms",
            text: [
              "This Privacy Policy explains how JulTech AI Consulting Group LLC (“we,” “us,” or “our”) collects, uses, stores, and protects personal information provided by clients and visitors (“you”) when using this website or our consulting services.",
"By accessing this website or submitting information through any form, you consent to the practices described in this Privacy Policy."            ]
          },
          {
            title: "2. Information We Collect",
            text: [
              "We may collect the following types of information:",
"Information You Provide",
"Name",
"Email address",
"Phone number (if provided)",
"Project details or messages submitted through forms",
"E‑signature (typed name or “V”)",
"Billing and payment information (processed securely by third‑party providers)",
"Information Collected Automatically",
"IP address",
"Browser type",
"Device information",
"Pages visited",
"Basic cookies necessary for website functionality",
"We do not collect sensitive personal information unless voluntarily provided."
            ]
          },
          {
            title: "3. Payment Terms",
            text: [
              "Client agrees to pay all fees as listed at checkout.",
              "A non-refundable 40% deposit is required before any work begins.",
              "The remaining 60% balance is due prior to final delivery of services, deliverables, or completion of the engagement.",
              "Consultant reserves the right to pause, delay, or withhold work until payments are received in full.",
              "Final deliverables will not be released until full payment has been received."
            ]
          },
          {
            title: "4. Refund Policy",
            text: [
              "All deposits are non-refundable.",
              "Due to the nature of consulting services, no refunds will be issued once work has commenced.",
              "Any exceptions are at the sole discretion of the Consultant."
            ]
          },
          {
            title: "5. Client Responsibilities",
            text: [
              "Client agrees to provide accurate and timely information.",
              "Client agrees to respond to communications within a reasonable timeframe.",
              "Client agrees to deliver all required materials necessary for project completion.",
              "Delays caused by the Client may impact timelines and do not relieve payment obligations."
            ]
          },
          {
            title: "6. Revisions and Changes",
            text: [
              "Services include a reasonable number of revisions unless otherwise specified.",
              "Additional revisions, scope changes, or new requests may incur additional fees and may require a separate agreement."
            ]
          },
          {
            title: "7. Timeline",
            text: [
              "Project timelines are estimates and depend on Client responsiveness and cooperation.",
              "Consultant is not liable for delays caused by the Client or external factors beyond reasonable control."
            ]
          },
          {
            title: "8. Intellectual Property",
            text: [
              "Consultant retains ownership of all underlying processes, frameworks, templates, methodologies, and proprietary tools used to deliver the services.",
              "Consultant reserves the right to use non-confidential aspects of the work for portfolio, case studies, and marketing purposes."
            ]
          },
          {
            title: "9. Confidentiality",
            text: [
              "Both parties agree to maintain the confidentiality of any proprietary, sensitive, or non-public information shared during the engagement."
            ]
          },
          {
            title: "10. Limitation of Liability",
            text: [
              "Consultant shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to the services provided.",
              "Total liability shall not exceed the total amount paid by the Client for the services."
            ]
          },
          {
            title: "11. Termination",
            text: [
              "Consultant reserves the right to terminate services at any time if the Client breaches these Terms and Conditions.",
              "Payments made are non-refundable and any outstanding balances remain due.",
              "Client may terminate services; however, all payments made are non-refundable and any completed or in-progress work will be billed accordingly."
            ]
          },
          {
            title: "12. Governing Law and Venue",
            text: [
              "This Agreement shall be governed by and interpreted in accordance with the laws of the State of South Carolina, United States.",
              "Venue for all disputes shall be Columbia, South Carolina."
            ]
          },
          {
            title: "13. Electronic Acceptance",
            text: [
              "By checking the acceptance box at checkout, entering payment details, and completing the transaction, Client acknowledges and agrees that:",
              "- They have read and understood these Terms and Conditions.",
              "- This action constitutes an electronic signature.",
              "- This agreement is legally binding and enforceable."
            ]
          },
          {
            title: "14. Entire Agreement",
            text: [
              "These Terms and Conditions constitute the entire agreement between the Client and Consultant and supersede all prior discussions, communications, or agreements."
            ]
          }
        ].map((section, i) => (
          <section key={i} className="space-y-3">
            <h2 className="text-xl font-semibold text-[#e5c98a]">
              {section.title}
            </h2>
            {section.text.map((t, idx) => (
              <p key={idx} className="text-sm leading-7 text-white/80">
                {t}
              </p>
            ))}
          </section>
        ))}

      </div>
    </div>
  );
}
