export default function CTASection() {
  return (
    <section className="hidden bg-[#070707] px-4 pb-8 pt-4 text-white md:block md:px-6 md:pb-12 md:pt-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 md:gap-5">
        {/* Primary CTA */}
        <div className="rounded-2xl border border-[#b88a1a]/70 bg-linear-to-r from-[#171717] to-[#101010] px-4 py-5 md:rounded-2xl md:px-8 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b88a1a]/35 bg-[#111111] md:h-12 md:w-12">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#f2c14e] md:h-5 md:w-5" aria-hidden="true">
                  <path d="M6 3.5h7l5 5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M13 3.5V9h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                  <path d="M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <h2 className="font-serif text-[1.05rem] leading-snug text-[#f5f1e8] md:text-2xl">Get Your Free Visibility Report</h2>
                <p className="mt-0.5 text-xs leading-5 text-[#c1c1c1] md:mt-1 md:text-sm">See how your business shows up — and where you&apos;re losing customers.</p>
              </div>
            </div>
            <a
              href="https://calendly.com/jultech-ai/new-meeting-1"
              className="inline-flex w-full items-center justify-center rounded-xl bg-[#f2c14e] px-4 py-2.5 text-sm font-medium text-[#151515] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f6cd64] md:w-auto md:px-6 md:py-3 whitespace-nowrap"
            >
              Get Your Report <span className="ml-1.5">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Separator */}
        <div className="mx-auto h-px w-16 bg-linear-to-r from-transparent via-[#b88a1a]/60 to-transparent" />

        {/* Secondary CTA */}
        <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] px-4 py-5 md:rounded-2xl md:px-8 md:py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141414] md:h-12 md:w-12">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#a9a9a9] md:h-5 md:w-5" aria-hidden="true">
                  <path d="M5.5 4.8c.4-.9 1.2-1.4 2.2-1.4h1.4c.8 0 1.5.5 1.7 1.2l.7 2.4c.2.7 0 1.4-.5 1.9l-1.1 1.1c.8 1.6 2.2 3 3.8 3.8l1.1-1.1c.5-.5 1.2-.7 1.9-.5l2.4.7c.7.2 1.2.9 1.2 1.7v1.4c0 1-.5 1.8-1.4 2.2-.8.4-1.7.5-2.7.2-6.1-1.7-10.7-6.3-12.4-12.4-.3-1-.2-1.9.2-2.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="font-serif text-[1.05rem] leading-snug text-[#f5f1e8] md:text-2xl">Prefer to speak directly?</h3>
                <p className="mt-0.5 text-xs leading-5 text-[#c1c1c1] md:mt-1 md:text-sm">We&apos;ll walk through your website and opportunities together.</p>
              </div>
            </div>
            <a
              href="tel:+18033861672"
              className="inline-flex w-full items-center justify-center rounded-xl border border-[#b88a1a] px-4 py-2.5 text-sm font-medium text-[#f2c14e] transition-colors duration-200 hover:bg-[#171717] md:w-auto md:px-6 md:py-3 whitespace-nowrap"
            >
              <span className="mr-1.5">📞</span> Call (803) 386-1672
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
