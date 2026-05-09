"use client";

import Link from "next/link";

export default function FreeAppraisalPage() {
  return (
    <div className="min-h-screen bg-black px-6 py-8 text-white">
      {/* Minimal nav */}
      <div className="mx-auto flex max-w-2xl items-center justify-end pb-8">
        <Link href="/" className="text-xs text-zinc-500 transition hover:text-zinc-300">
          ← Back
        </Link>
      </div>

      <div className="mx-auto max-w-2xl">
        {/* ── Calendly ── */}
        <div className="pt-6 text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />
          <h2 className="mt-3 text-xl font-bold text-white">
            Book a 15-min Strategy Call
          </h2>
          <a
            href="https://calendly.com/jultech-ai/new-meeting-1?month=2026-04"
            className="jultech-calendly-btn mt-6 inline-block"
          >
            Book a Strategy Call →
          </a>
        </div>

      </div>
    </div>
  );
}
