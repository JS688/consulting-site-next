"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      description: "We identify what's limiting your current website.",
    },
    {
      number: "02",
      title: "Build",
      description: "We redesign and optimize it for modern search and AI.",
    },
    {
      number: "03",
      title: "Grow",
      description: "You get consistent visibility, trust, and customer growth.",
    },
  ];

  return (
    <section className="bg-black px-6 pb-16 pt-12 text-white md:pb-20 md:pt-16">
      {/* Header */}
      <div className="mx-auto mb-12 max-w-5xl text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#b88a1a]">How it works</p>
        <h2 className="text-3xl font-bold md:text-4xl">
          <span className="text-[#f5f1e8]">Understand</span>
          <span className="mx-3 text-[#444]">→</span>
          <span className="text-[#f5f1e8]">Build</span>
          <span className="mx-3 text-[#444]">→</span>
          <span className="text-[#f2c14e]">Grow</span>
        </h2>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="relative flex flex-col items-center text-center md:px-10">
              {/* Connector line between steps */}
              {i < steps.length - 1 && (
                <div className="absolute top-[1.85rem] left-1/2 hidden h-px w-full bg-gradient-to-r from-[#b88a1a]/40 to-transparent md:block" />
              )}

              {/* Number badge */}
              <div className="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#b88a1a]/40 bg-[#0d0d0d]">
                <span className="font-mono text-sm font-semibold tracking-widest text-[#f2c14e]">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-2 text-xl font-bold text-[#f5f1e8]">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#a0a0a0]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tagline */}
      <div className="mx-auto mt-16 px-4 text-center">
        <p className="text-sm font-medium tracking-widest text-[#b88a1a] uppercase">
          ✦ Turn your website into a growth revenue engine ✦
        </p>
        <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-[#b88a1a]/40 to-transparent" />
      </div>

      {/* CTA */}
      <div className="mt-10 flex w-full flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <a
          href="/free-appraisal"
          className="inline-flex items-center justify-center rounded-full bg-[#f2c14e] px-8 py-3.5 text-sm font-semibold text-[#151515] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f6cd64]"
        >
          Get Your Free Visibility Report &rarr;
        </a>
        <a
          href="tel:+18033861672"
          className="inline-flex items-center justify-center rounded-full border border-[#b88a1a]/60 px-8 py-3.5 text-sm font-semibold text-[#f2c14e] transition-colors duration-200 hover:border-[#f2c14e]/80 hover:bg-[#111]"
        >
          Call (803) 386-1672
        </a>
      </div>

      {/* Trust badges */}
      <div className="mx-auto mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
        {["No commitment", "Takes 2 minutes", "Clear next steps"].map((badge) => (
          <span key={badge} className="flex items-center gap-1.5 text-xs text-[#666]">
            <svg viewBox="0 0 20 20" fill="none" className="h-3.5 w-3.5 text-[#888]" aria-hidden="true">
              <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M7 10.5l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {badge}
          </span>
        ))}
      </div>
    </section>
  );
}
