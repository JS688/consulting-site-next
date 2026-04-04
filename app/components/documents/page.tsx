"use client";

import { useState } from "react";
import Link from "next/link";

const HIGHLIGHTS = [
  "40% deposit",
  "60% balance",
  "non-refundable",
  "final delivery",
  "full payment",
  "legally binding",
];

function highlightText(text: string) {
  const regex = new RegExp(`(${HIGHLIGHTS.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    HIGHLIGHTS.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="font-semibold text-white">{part}</span>
    ) : (
      part
    )
  );
}

const sections = [
  {
    title: "1. Agreement to Terms",
    text: [
      'By purchasing consulting services through this website and selecting the checkbox indicating acceptance, the client ("Client") agrees to be bound by these Terms & Conditions. This constitutes a legally binding agreement between the Client and JulTech AI Consulting Group LLC ("Consultant").',
    ],
  },
  {
    title: "2. Scope of Services",
    text: [
      "Consultant agrees to provide consulting services as described on the website, proposal, or service page selected at the time of purchase.",
      "Any services not expressly listed are outside the scope and may require a separate agreement or additional fees.",
    ],
  },
  {
    title: "3. Payment Terms",
    text: [
      "Client agrees to pay all fees as listed at checkout.",
      "A non-refundable 40% deposit is required before any work begins.",
      "The remaining 60% balance is due prior to final delivery of services, deliverables, or completion of the engagement.",
      "Consultant reserves the right to pause, delay, or withhold work until payments are received in full.",
      "Final deliverables will not be released until full payment has been received.",
    ],
  },
  {
    title: "4. Refund Policy",
    text: [
      "All deposits are non-refundable.",
      "Due to the nature of consulting services, no refunds will be issued once work has commenced. Any exceptions are at the sole discretion of the Consultant.",
    ],
  },
  {
    title: "5. Client Responsibilities",
    text: [
      "Client agrees to:\n- Provide accurate and timely information\n- Respond to communications within a reasonable timeframe\n- Deliver all required materials necessary for project completion",
      "Delays caused by the Client may impact timelines and do not relieve payment obligations.",
    ],
  },
  {
    title: "6. Revisions & Changes",
    text: [
      "Services include a reasonable number of revisions unless otherwise specified.",
      "Additional revisions, scope changes, or new requests may incur additional fees and may require a separate agreement.",
    ],
  },
  {
    title: "7. Timeline",
    text: [
      "Project timelines are estimates and depend on Client responsiveness and cooperation.",
      "Consultant is not liable for delays caused by the Client or external factors beyond reasonable control.",
    ],
  },
  {
    title: "8. Intellectual Property",
    text: [
      "Consultant retains ownership of all underlying processes, frameworks, templates, methodologies, and proprietary tools used to deliver the services.",
      "Consultant reserves the right to use non-confidential aspects of the work for portfolio, case studies, and marketing purposes.",
    ],
  },
  {
    title: "9. Confidentiality",
    text: [
      "Both parties agree to maintain the confidentiality of any proprietary, sensitive, or non-public information shared during the engagement.",
    ],
  },
  {
    title: "10. Limitation of Liability",
    text: [
      "Consultant shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to the services provided.",
      "Total liability shall not exceed the total amount paid by the Client for the services.",
    ],
  },
  {
    title: "11. Termination",
    text: [
      "Consultant reserves the right to terminate services at any time if the Client breaches these Terms & Conditions.",
      "In such cases:\n- Payments made are non-refundable\n- Any outstanding balances remain due",
      "Client may terminate services; however, all payments made are non-refundable and any completed or in-progress work will be billed accordingly.",
    ],
  },
  {
    title: "12. Governing Law and Venue",
    text: [
      "This Agreement shall be governed by and interpreted in accordance with the laws of the State of South Carolina, United States. Venue for all disputes shall be Columbia, South Carolina and all disputes must be brought in a court located in Columbia, South Carolina.",
    ],
  },
  {
    title: "13. Electronic Acceptance",
    text: [
      "By checking the acceptance box at checkout, entering payment details, and completing the transaction, Client acknowledges and agrees that:",
      "- They have read and understood these Terms & Conditions\n- This action constitutes an electronic signature\n- This agreement is legally binding and enforceable",
    ],
  },
  {
    title: "14. Entire Agreement",
    text: [
      "These Terms & Conditions constitute the entire agreement between the Client and Consultant and supersede all prior discussions, communications, or agreements.",
    ],
  },
];

export default function TermsPage() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
              Consulting Services Terms & Conditions
            </h1>
            <p className="mt-2 text-sm text-white/50">
              Last updated: April 2026
            </p>
          </div>

          <div className="border-t border-white/10" />

          <div className="space-y-0.5 text-xs text-white/50">
            <p>JulTech AI Consulting Group LLC</p>
            <p>Columbia, SC, United States</p>
            <p>sokolskyjulia@gmail.com</p>
          </div>

          {/* TERMS SECTIONS */}
          <div className="space-y-6">
            {sections.map((section, i) => (
              <section key={i} className="space-y-1">
                <h2 className="text-lg font-semibold text-white">
                  {section.title}
                </h2>
                {section.text.map((t, idx) => (
                  <p key={idx} className="text-xs leading-5 text-white/80 whitespace-pre-line">
                    {highlightText(t)}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* ACCEPTANCE */}
          <div className="border-t border-white/10 pt-6">
            {submitted ? (
              <div className="text-center space-y-4">
                <p className="text-base font-semibold text-white">
                  Thank you for accepting!
                </p>
                <p className="text-sm text-white/60">
                  You can now request a quote.
                </p>
                <Link
                  href="/contact"
                  className="inline-block rounded-lg bg-white/90 px-6 py-2.5 font-semibold text-zinc-900 transition hover:bg-white hover:shadow-md"
                >
                  Request a Quote →
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-0.5 h-4 w-4 accent-white rounded"
                  />
                  <span className="text-sm text-white/70 leading-relaxed">
                    I have read and agree to the <span className="font-semibold text-white">Terms & Conditions</span> listed above.
                  </span>
                </label>

                <button
                  onClick={() => setSubmitted(true)}
                  disabled={!agreed}
                  className={`w-full rounded-lg px-6 py-2.5 font-semibold transition ${
                    agreed
                      ? "bg-white/90 text-zinc-900 hover:bg-white hover:shadow-md"
                      : "bg-white/10 text-white/30 cursor-not-allowed"
                  }`}
                >
                  I Agree
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
