"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, LayoutGrid, Sparkles, Wand2 } from "lucide-react";

export default function EsJulTechCaseStudyPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const pillars = [
    {
      icon: Sparkles,
      title: "Posicionamiento de marca",
      text: "Definimos JulTech como un estudio creativo de tecnologia con perspectiva global y una voz distintiva.",
    },
    {
      icon: LayoutGrid,
      title: "Experiencia web",
      text: "Construimos un sitio estructurado, premium y facil de entender.",
    },
    {
      icon: Wand2,
      title: "Motion y detalle",
      text: "Usamos animacion sutil y ritmo visual para crear profundidad sin perder claridad.",
    },
    {
      icon: Globe2,
      title: "Preparacion global",
      text: "Moldeamos el sitio para que se sienta adaptable y relevante para audiencias internacionales.",
    },
  ];

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,194,26,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-zinc-400">
              Caso de estudio
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              JulTech
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              Construyendo una presencia digital global preparada para IA.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Branding</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Experiencia web</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Motion</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-12 grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-8"
          >
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Resumen</p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                JulTech se desarrollo como un estudio creativo de tecnologia enfocado en identidades digitales distintivas, desarrollo con IA, analitica de negocio y diseno digital singular.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                El objetivo fue crear una presencia online premium que transmitiera claridad, confianza y una perspectiva global.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Tipo</p>
                <p className="mt-3 text-2xl font-medium text-white">Sistema de marca de estudio</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Direccion</p>
                <p className="mt-3 text-2xl font-medium text-white">Audaz, minimal, global</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">El reto</h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              El reto era construir un sitio premium y estrategico, no generico. Debia posicionar a JulTech como algo mas que un proveedor de servicios: tenia que sentirse como un estudio con vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">El enfoque</h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              El proyecto se abordo como un sistema completo: voz de marca, layout, tipografia, motion y estructura trabajando en conjunto.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {pillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ duration: 0.55, ease: "easeOut" as const, delay: index * 0.05 }}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f6c21a]/30 bg-[#f6c21a]/10 text-[#f6c21a]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-zinc-300">{item.text}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            {...fadeUp}
            className="flex flex-col gap-6 rounded-4xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between"
          >
            <div className="max-w-2xl">
              <h2 className="text-3xl font-medium text-white">El resultado</h2>
              <p className="mt-3 leading-relaxed text-zinc-300">
                El resultado es una presencia digital fuerte que posiciona a JulTech como un estudio creativo de tecnologia moderno y global.
              </p>
            </div>

            <Link
              href="/es/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Iniciar un proyecto
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}