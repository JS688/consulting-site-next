"use client";

import Link from "next/link";

export default function LandingPagesPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="min-h-screen px-6 py-8 md:py-10">
        <div className="mx-auto max-w-3xl pt-6 pb-6">

          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-[#d1b075]/70 hover:text-[#d1b075] transition mb-8"
          >
            ← Back to Services
          </Link>

          <div className="group relative rounded-2xl p-[1px] transition duration-300">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d1b075]/0 via-[#d1b075]/0 to-[#d1b075]/0 opacity-0 blur-xl transition duration-300 group-hover:from-[#d1b075]/25 group-hover:via-[#d1b075]/10 group-hover:to-[#d1b075]/25 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#d1b075]/12 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col rounded-2xl border border-[#d1b075]/30 bg-zinc-950/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-[#d1b075]/60 hover:bg-zinc-950/85 hover:shadow-[0_0_35px_rgba(209,176,117,0.18)]">
              <p className="inline-flex items-center justify-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                For Launches
              </p>

              <div className="mt-4 mb-1 flex items-center gap-2">
                <span className="text-[#e5c98a] text-2xl leading-none">⌂</span>
                <h1 className="text-xl font-semibold text-white md:text-2xl">
                  Landing Pages (1-Page Websites)
                </h1>
              </div>

              <div className="mt-5 text-gray-100 text-[15px] leading-7 text-center">
                Single-page websites built for conversions and fast launch
              </div>

              <div className="mt-5 border-t border-[#d1b075]/25" />

              <div className="mt-4 text-[15px] leading-7 text-white/70">
                Ideal for campaigns with focused messaging, strong calls to action, and streamlined layouts designed to increase inquiries and conversions.
              </div>

              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg border border-[#d1b075]/70 px-5 py-2.5 text-[#d1b075] transition hover:border-[#d1b075] hover:bg-[#d1b075]/10 hover:text-[#e7cd95]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
