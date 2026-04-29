"use client";

import Link from "next/link";

export default function EsLandingPagesPage() {
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

          <div className="group relative rounded-2xl p-[1px] transition duration-300">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d1b075]/0 via-[#d1b075]/0 to-[#d1b075]/0 opacity-0 blur-xl transition duration-300 group-hover:from-[#d1b075]/25 group-hover:via-[#d1b075]/10 group-hover:to-[#d1b075]/25 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#d1b075]/12 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="relative z-10 flex flex-col rounded-2xl border border-[#d1b075]/30 bg-zinc-950/70 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-[#d1b075]/60 hover:bg-zinc-950/85 hover:shadow-[0_0_35px_rgba(209,176,117,0.18)]">
              <p className="inline-flex items-center justify-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                Para lanzamientos
              </p>

              <div className="mt-4 mb-1 flex items-center gap-2">
                <span className="text-2xl leading-none text-[#e5c98a]">⌂</span>
                <h1 className="text-xl font-semibold text-white md:text-2xl">
                  Landing pages (sitios de una pagina)
                </h1>
              </div>

              <div className="mt-5 text-center text-[15px] leading-7 text-gray-100">
                Sitios de una sola pagina pensados para conversion y lanzamiento rapido
              </div>

              <div className="mt-5 border-t border-[#d1b075]/25" />

              <div className="mt-4 text-[15px] leading-7 text-white/70">
                Ideales para campanas con mensajes enfocados, llamadas a la accion claras y layouts optimizados para aumentar consultas y conversiones.
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