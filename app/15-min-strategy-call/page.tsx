"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StrategyCallPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto max-w-7xl px-4 py-8 md:px-8 lg:px-10">
        <div className="flex justify-end pb-8">
          <Link
            href="/"
            className="text-xs text-zinc-500 transition hover:text-zinc-300"
          >
            ← Back
          </Link>
        </div>

        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/45">
            15-Min Strategy Call
          </p>
          <h1 className="mt-4 max-w-3xl text-[1.95rem] font-black tracking-tight sm:text-4xl md:text-6xl">
            <span className="block">Quick clarity.</span>
            <span className="block whitespace-nowrap">Immediate next steps.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
            A short, focused strategy session for businesses that want quick
            clarity, stronger positioning, and an immediate next move.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/book?session=short"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-[#d4af37] bg-[#d4af37] px-6 py-4 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-[#e3c15f] hover:shadow-[0_0_28px_rgba(212,175,55,0.24)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Book Session
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-4 text-sm text-zinc-400">
            Continue to the dedicated booking page for form, payment, and scheduling.
          </p>
        </div>
      </section>
    </main>
  );
}