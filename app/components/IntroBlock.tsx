"use client";

export default function IntroBlock() {
  return (
    <section className="relative -mt-8 bg-black px-5 pt-2 pb-12 text-white md:-mt-10 md:pt-3 lg:-mt-14 lg:pt-4">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mt-16 max-w-3xl mx-auto rounded-xl border border-[rgb(245,197,24)]/30 bg-zinc-900/60 px-8 py-8 text-center backdrop-blur-sm transition hover:shadow-[0_0_30px_rgba(245,197,24,0.12)]">
          {/* Small gold label */}
          <div className="mb-4 inline-block rounded-full border border-[rgb(245,197,24)]/30 bg-zinc-800 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[rgb(245,197,24)]">
            What we do
          </div>
          {/* Headline */}
          <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
            Built around your business — not a template.
          </h2>
          {/* Description */}
          <p className="mt-4 text-base leading-relaxed text-gray-400">
            Every website is designed from the ground up to reflect your brand,
            communicate your value clearly, and support how your business actually operates.
          </p>
          <div className="mx-auto mt-6 h-px w-full max-w-2xl bg-linear-to-r from-transparent via-[rgb(245,197,24)]/35 to-transparent" />
          <div className="mt-6">
            <div className="mb-3 flex items-center justify-center gap-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[rgb(245,197,24)]"></span>
              <span className="text-sm uppercase tracking-widest text-white/90">Start your AI transformation</span>
            </div>
            <div className="mt-6 flex flex-wrap items-start justify-center gap-4 lg:flex-nowrap">
              <div className="flex flex-col items-center gap-4">
                {/* Buttons row */}
                <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
                  {/* Primary CTA */}
                  <a
                    href="/services"
                    className="rounded-lg bg-[rgb(245,197,24)] px-6 py-3 font-medium text-black shadow-[0_0_14px_rgba(245,197,24,0.18)] transition-all hover:-translate-y-0.5 hover:bg-yellow-300 hover:shadow-[0_0_20px_rgba(245,197,24,0.28)]"
                  >
                    Get Your Custom Website
                  </a>
                  {/* Secondary CTA */}
                  <a
                    href="/contact"
                    className="rounded-lg border border-white/10 px-6 py-3 font-medium text-white transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/5"
                  >
                    Book a Free Consultation
                  </a>
                </div>
                {/* Subtext under primary */}
                <p className="text-xs tracking-wide text-white/60">
                  Built around your business
                </p>
                {/* Subtext under secondary */}
                <p className="text-xs tracking-wide text-white/40">
                  No commitment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
