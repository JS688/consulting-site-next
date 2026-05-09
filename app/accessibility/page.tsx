import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description:
    "JulTech AI is committed to making its website accessible to all users, including people with disabilities.",
};

export default function AccessibilityStatementPage() {
  return (
    <main className="bg-black px-6 py-20 text-white md:px-10">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-widest text-[#b88a1a]">
          Legal &amp; Compliance
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#f5f1e8] sm:text-4xl">
          Accessibility Statement
        </h1>
        <p className="mt-2 text-sm text-[#888]">Last updated: May 2026. This statement is reviewed periodically.</p>

        <div className="mt-10 space-y-8 text-[0.95rem] leading-7 text-[#ccc]">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Our Commitment</h2>
            <p>
              JulTech AI Consulting Group LLC is committed to ensuring digital accessibility for
              people with disabilities. This statement applies to the website{" "}
              <strong className="text-white">www.jultechai.com</strong>. We continuously improve
              the user experience for everyone and apply relevant accessibility standards.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Conformance Status</h2>
            <p>
              This website is designed to meet{" "}
              <a
                href="https://www.w3.org/WAI/WCAG21/quickref/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f2c14e] underline underline-offset-2 hover:text-[#f6cd64]"
              >
                Web Content Accessibility Guidelines (WCAG) 2.1, Level AA
              </a>{" "}
              accessibility standards, and we continuously work to maintain and improve
              accessibility across all pages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Compatibility</h2>
            <p>
              This website is designed to be compatible with modern browsers and assistive
              technologies, including screen readers and keyboard navigation. It relies on HTML,
              CSS, JavaScript, and WAI-ARIA.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Measures We Have Taken</h2>
            <ul className="list-disc space-y-2 pl-5 text-[#ccc]">
              <li>Semantic HTML landmarks (header, nav, main, footer) on every page</li>
              <li>Clear heading hierarchy with a single &lt;h1&gt; per page</li>
              <li>Visible keyboard focus indicators for all interactive elements</li>
              <li>Skip-to-content link for keyboard and screen reader users</li>
              <li>All images have descriptive alt text; decorative images are marked appropriately</li>
              <li>All form inputs have programmatically associated labels</li>
              <li>Form status messages announced via ARIA live regions</li>
              <li>Autoplay videos are muted, decorative, and hidden from assistive technology</li>
              <li>Animations respect the <code>prefers-reduced-motion</code> OS setting</li>
              <li>Language attribute set correctly for English (<code>lang="en"</code>) and Spanish (<code>lang="es"</code>) pages</li>
              <li>Color contrast meets WCAG AA requirements for body text</li>
              <li>Touch targets sized at minimum 44×44px on mobile</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Known Limitations</h2>
            <p>
              We are aware of the following areas currently under review:
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[#ccc]">
              <li>
                Some third-party embeds (Calendly) may not fully conform to WCAG AA — we are
                monitoring vendor updates.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Feedback &amp; Contact</h2>
            <p>
              We welcome your feedback on the accessibility of this website. If you experience any
              barriers or have suggestions for improvement, please contact us:
            </p>
            <ul className="mt-3 space-y-2 pl-1 text-[#ccc]">
              <li>
                <strong className="text-white">Email:</strong>{" "}
                <a
                  href="mailto:julia@jultechai.com"
                  className="text-[#f2c14e] underline underline-offset-2 hover:text-[#f6cd64]"
                >
                  julia@jultechai.com
                </a>
              </li>
              <li>
                <strong className="text-white">Phone:</strong>{" "}
                <a
                  href="tel:+18033861672"
                  className="text-[#f2c14e] underline underline-offset-2 hover:text-[#f6cd64]"
                >
                  (803) 386-1672
                </a>
              </li>
              <li>
                <strong className="text-white">Response time:</strong> We aim to respond within 2
                business days.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Formal Complaints</h2>
            <p>
              If you are not satisfied with our response, you may contact the{" "}
              <a
                href="https://www.ada.gov/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#f2c14e] underline underline-offset-2 hover:text-[#f6cd64]"
              >
                U.S. Department of Justice ADA Information Line
              </a>{" "}
              at 1-800-514-0301.
            </p>
          </section>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="text-sm text-[#888] transition hover:text-white"
          >
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
