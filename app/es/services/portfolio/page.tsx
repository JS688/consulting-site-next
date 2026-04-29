"use client";

import Link from "next/link";

export default function EsPortfolioPage() {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="min-h-screen px-6 py-8 md:py-10">
        <div className="mx-auto max-w-3xl pt-6 pb-6">
          <Link
            href="/es/services"
            className="mb-8 inline-flex items-center gap-1 text-sm text-[#d1b075]/70 transition hover:text-[#d1b075]"
          >
            ← Volver a servicios
          </Link>

          <div className="group relative rounded-2xl p-px transition duration-300">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-[#d1b075]/0 via-[#d1b075]/0 to-[#d1b075]/0 opacity-0 blur-xl transition duration-300 group-hover:from-[#d1b075]/25 group-hover:via-[#d1b075]/10 group-hover:to-[#d1b075]/25 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#d1b075]/12 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col rounded-2xl border border-[#d1b075]/30 bg-zinc-950/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-[#d1b075]/60 hover:bg-zinc-950/85 hover:shadow-[0_0_35px_rgba(209,176,117,0.18)]">
              <p className="inline-flex items-center justify-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                Para branding
              </p>

              <div className="mt-4 mb-1 flex items-center gap-2">
                <span className="mt-1 text-2xl leading-none text-[#d1b075]">✦</span>
                <h1 className="text-xl font-semibold text-white md:text-2xl">
                  Sitios web portfolio
                </h1>
              </div>

              <div className="mt-4 text-sm leading-7 whitespace-nowrap text-gray-100">
                Portafolios a medida para mostrar tu trabajo con claridad
              </div>

              <div className="mt-3 text-xs text-white/70">
                Narrativa fuerte · Motion fluido · Visuales de marca
              </div>

              <div className="mt-3 text-center text-xs tracking-wide text-white/50">
                Entrega habitual: 3 a 4 semanas
              </div>

              <div className="mt-4 border-t border-[#d1b075]/25" />

              <div className="mt-4 text-[15px] leading-7 text-white/70">
                Ideal para creadores y estudios que necesitan mejor narrativa, galerias cuidadas, motion sutil y visuales de marca capaces de atraer clientes premium.
              </div>

              <div className="mt-6">
                <Link
                  href="/es/contact"
                  className="inline-block rounded-lg border border-[#d1b075]/70 px-5 py-2.5 text-[#d1b075] transition hover:border-[#d1b075] hover:bg-[#d1b075]/10 hover:text-[#e7cd95]"
                >
                  Solicitar propuesta
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}