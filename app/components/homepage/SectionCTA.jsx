"use client";

export default function SectionCTA() {
  return (
    <section className="bg-black px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-14 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm md:px-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
              Final Step
            </p>

            <h2 className="mt-6 whitespace-nowrap text-4xl font-semibold leading-tight md:text-5xl">
             Your visibility is already being decided.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              Customers are already finding, trusting, and choosing businesses based on what they see. Make sure your business is part of that decision.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/free-appraisal"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
            >
              Get Your AI Visibility Audit →
            </a>

            <a
              href="https://calendly.com/jultech-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#d4af37]/80 transition-colors hover:text-[#d4af37]"
            >
              or book a strategy call
            </a>
          </div>

          <p className="mt-6 text-center text-sm text-zinc-500">
            No obligation. Each audit and call is reviewed personally.
          </p>
        </div>
      </div>
    </section>
  );
}
