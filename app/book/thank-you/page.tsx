import Script from "next/script";

import CalendlyEmbed from "../../../components/CalendlyEmbed";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#04060c] px-6 py-20 text-white">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Payment confirmed</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Thank you. Let&apos;s schedule your session.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
            Your payment is complete. Choose a time below and we&apos;ll meet on Calendly to begin.
          </p>
        </div>

        <CalendlyEmbed />
      </section>
    </main>
  );
}