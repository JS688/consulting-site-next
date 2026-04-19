import { Suspense } from "react";
import Link from "next/link";
import CalendlyInlineEmbed from "./CalendlyInlineEmbed";

export default function BookPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-12">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-white/45 transition hover:text-white">
            ← Back
          </Link>
        </header>

        <section className="grid gap-8 xl:grid-cols-[minmax(0,1.55fr)_380px]">
          <div className="overflow-hidden rounded-4xl border border-white/10 bg-white/4 shadow-[0_24px_90px_rgba(0,0,0,0.34)]">
            <Suspense
              fallback={<div className="min-h-225 w-full bg-white/5 p-6 text-white/60">Loading booking widget...</div>}
            >
              <CalendlyInlineEmbed />
            </Suspense>
          </div>

          <aside className="rounded-4xl border border-white/10 bg-white/4 p-7 text-left shadow-[0_24px_90px_rgba(0,0,0,0.22)] xl:sticky xl:top-28 xl:h-fit">
            <p className="text-xs uppercase tracking-[0.35em] text-white/35">
              Book
            </p>
            <h1 className="mt-5 text-3xl font-bold tracking-tight text-[#e6c26a] sm:text-4xl">
              Confirm your strategy session
            </h1>
            <p className="mt-5 text-base leading-7 text-white/60">
              Select a time below to complete your booking.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                What to expect
              </p>
              <ul className="mt-5 space-y-4 text-white/75">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#e6c26a]" />
                  <span>Clear action plan</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#e6c26a]" />
                  <span>Website/AI audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#e6c26a]" />
                  <span>Next steps</span>
                </li>
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}