"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { SERVICE_PACKAGES_ES } from "./servicePackagesEs";

export default function EsServicesPage() {
  const [active, setActive] = useState<string | null>(null);
  const stepCopy = {
    starter: {
      step: "Paso 1 - Construir",
      outcome: "Una presencia fuerte y profesional lista para ser descubierta.",
      toneClass: "border-white/14 bg-zinc-100/6 shadow-[0_0_60px_rgba(255,255,255,0.05)]",
    },
    growth: {
      step: "Paso 2 - Optimizar",
      outcome: "Tu sitio empieza a ganar visibilidad.",
      toneClass: "border-blue-300/22 bg-blue-500/8 shadow-[0_0_60px_rgba(59,130,246,0.08)]",
    },
    premium: {
      step: "Paso 3 - Crecer",
      outcome: "Tu negocio destaca y genera mas confianza.",
      toneClass: "border-yellow-300/22 bg-yellow-400/8 shadow-[0_0_70px_rgba(245,197,24,0.09)]",
    },
  } as const;

  return (
    <main className="relative overflow-x-hidden bg-[#111111] pb-16 pt-6 text-white sm:pb-20 sm:pt-8 md:pb-24 md:pt-10">
      <h1 className="sr-only">Servicios</h1>

      <motion.div aria-hidden initial={{ opacity: 0, x: 48 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.06, duration: 0.5, ease: "easeOut" }} className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <video src="/right%20services.mp4" autoPlay loop muted playsInline className="h-full w-full object-cover object-right opacity-[0.14]" />
        <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-[#111111]/78 to-[#111111]/38" />
      </motion.div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32, ease: "easeOut" }} className="max-w-4xl space-y-6 pt-6 sm:pt-10">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">Sistema de visibilidad</p>
          <h2 className="max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            Construimos sitios web que se encuentran en Google y en plataformas de IA
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link href="/es/strategy-call/15-min" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300">
              Agenda una llamada estrategica
            </Link>
            <p className="flex items-center text-sm text-zinc-400">
              No solo construimos sitios web. Construimos sistemas de visibilidad.
            </p>
          </div>
        </motion.div>

        <section className="space-y-8">
          <p className="text-center text-sm text-white/50 sm:text-base">
            Muchos sitios solo existen. Muy pocos realmente funcionan.
          </p>

          <div className="grid gap-6 xl:grid-cols-3">
          {SERVICE_PACKAGES_ES.map((panel, index) => {
            const layout = stepCopy[panel.slug];

            return (
              <Link
                key={panel.slug}
                href={`/es/services/${panel.slug}`}
                className="block w-full"
                onMouseEnter={() => setActive(panel.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(panel.slug)}
                onBlur={() => setActive(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.32, ease: "easeOut" }}
                  className={`group relative flex h-full min-h-105 cursor-pointer overflow-hidden rounded-4xl border p-6 backdrop-blur-sm transition-all duration-300 ease-out sm:p-8 ${layout.toneClass} ${active === panel.slug ? `${panel.selectedCardClass} scale-[1.02]` : ""} ${active && active !== panel.slug ? "scale-[0.985] opacity-60" : "hover:-translate-y-2"}`}
                >
                  <div className={`pointer-events-none absolute blur-2xl transition-opacity duration-300 ${panel.glowClass} ${panel.slug === "starter" ? "left-[40%] top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full" : "inset-0 rounded-4xl"} ${active === panel.slug ? "opacity-100" : "opacity-45"}`} />
                  <div className="absolute inset-0 bg-linear-to-r from-white/2 via-transparent to-transparent" />

                  <div className="relative flex flex-1 flex-col gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className={`h-12 w-3 rounded-full ${panel.accentClass}`} />
                        <div className="space-y-2">
                          <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/45">{layout.step}</p>
                          <h4 className={`text-3xl font-semibold tracking-tight transition-all duration-300 ${active === panel.slug ? "text-white" : "text-white/82"}`}>
                            {panel.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-base leading-7 text-zinc-300">{panel.overviewDescription}</p>

                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                          {panel.timeline}
                        </span>
                      </div>
                    </div>

                    <ul className="grid gap-2.5 text-sm text-zinc-200 sm:grid-cols-2">
                      {panel.bullets.map((item) => (
                        <li key={item} className="w-full rounded-xl border border-white/8 bg-black/45 px-3 py-2.5 leading-6 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto rounded-3xl border border-white/10 bg-black/25 p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-yellow-400/75">Resultado</p>
                      <p className="mt-2 text-sm leading-7 text-white/80">{layout.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              </Link>
            );
          })}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-4xl border border-white/10 bg-black/25 p-8">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400/80">Expectativas</p>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white">Claridad desde el principio</h3>
            <p className="mt-5 text-base leading-8 text-zinc-300">
              No garantizamos rankings ni posicionamiento en plataformas de IA. Lo que si hacemos es construir los sistemas que aumentan tu visibilidad con el tiempo y mejoran tus posibilidades de ser encontrado y generar confianza online.
            </p>
          </div>
        </section>

        <section className="rounded-4xl border border-white/10 bg-linear-to-r from-white/5 to-white/3 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.28)] sm:p-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-yellow-400/80">Siguiente paso</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Hablemos de como hacer que encuentren tu negocio online</h3>
          <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-300">
            Si quieres pasar de solo tener un sitio web a construir visibilidad real, empieza con una llamada estrategica y definimos el siguiente paso correcto para tu negocio.
          </p>
          <div className="mt-8">
            <Link href="/es/strategy-call/15-min" className="inline-flex items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300">
              Agenda una llamada estrategica
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}