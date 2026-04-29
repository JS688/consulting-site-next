"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, LayoutGrid, Sparkles, Wand2 } from "lucide-react";

export default function EsNovaAiCaseStudyPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const pillars = [
    {
      icon: Sparkles,
      title: "Branding de lujo",
      text: "Una identidad visual refinada, pensada para sentirse premium, distintiva y memorable.",
    },
    {
      icon: LayoutGrid,
      title: "Web de alto nivel",
      text: "Una experiencia estructurada para sentirse elegante, rapida y facil de navegar.",
    },
    {
      icon: Wand2,
      title: "Motion y detalle",
      text: "Animacion sutil e interacciones pensadas para crear profundidad sin distraccion.",
    },
    {
      icon: Globe2,
      title: "Presencia global",
      text: "Un sistema digital construido para sentirse claro, adaptable y listo para audiencias internacionales.",
    },
  ];

  const screens = [
    "Hero con declaracion fuerte y contraste marcado",
    "Secciones premium con layouts espaciosos",
    "Narrativa tipo caso de estudio con acabado editorial",
  ];

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,194,26,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-zinc-400">Caso de estudio</p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">Nova AI</h1>
            <p className="mt-5 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              Una identidad digital audaz y de lujo para una marca AI-first construida para destacar globalmente.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Identidad de marca</span>
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
                Nova AI es una plataforma conceptual impulsada por IA, disenada para sentirse premium, inteligente y lista para una presencia global. El objetivo fue crear una identidad visual y una presencia web que comunicaran innovacion sin perder claridad ni elegancia.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                En lugar de depender de esteticas de IA ya vistas, el proyecto se construyo alrededor del contraste, la precision y una experiencia digital mas refinada.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Tipo</p>
                <p className="mt-3 text-2xl font-medium text-white">Trabajo conceptual de estudio</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Direccion</p>
                <p className="mt-3 text-2xl font-medium text-white">Audaz, lujo, moderno</p>
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
              El reto fue disenar una marca de IA que se sintiera premium en lugar de generica. Muchos sitios de IA repiten los mismos gradientes oscuros, efectos glass y lenguaje tecnico, lo que dificulta diferenciarse.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-zinc-300">
              Nova AI necesitaba una identidad digital que transmitiera confianza, elegancia y credibilidad desde la primera interaccion.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">El enfoque</h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              El proyecto se abordo como un sistema completo: branding, layout, tipografia y motion trabajando juntos para crear una experiencia unificada.
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

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">Direccion visual</h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              El lenguaje visual usa contraste profundo, acentos metalicos calidos y layouts amplios para generar sensacion de lujo y control. El resultado se siente preciso, minimal y claramente premium.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {screens.map((item, index) => (
              <motion.div
                key={item}
                {...fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Pantalla {index + 1}</p>
                <p className="mt-4 text-xl font-medium text-white">{item}</p>
              </motion.div>
            ))}
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
                Nova AI ahora tiene una base conceptual fuerte para una marca de lujo centrada en IA: moderna, distintiva y lista para crecer hacia una presencia digital completa.
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