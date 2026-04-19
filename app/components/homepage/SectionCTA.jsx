"use client";

import Link from "next/link";

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

          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/strategy-call/15-min"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-[rgba(30,40,60,0.45)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-[rgba(36,48,72,0.58)]"
            >
              Book a Strategy Call
            </Link>
          </div>

          <p className="mt-6 text-center text-sm text-zinc-500">
            No obligation. Each call is reviewed personally.
          </p>
        </div>
      </div>
    </section>
  );
}
