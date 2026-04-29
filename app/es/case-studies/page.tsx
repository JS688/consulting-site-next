"use client";

import Link from "next/link";

export default function EsCaseStudiesPage() {
  const caseStudies = [
    {
      href: "/es/case-studies/jultech",
      title: "JulTech",
      description: "Posicionamiento de marca, experiencia web y motion sutil para una presencia digital global.",
    },
    {
      href: "/es/case-studies/nova-ai",
      title: "Nova AI",
      description: "Una identidad digital audaz y premium para una marca pensada para destacar en IA.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-20 text-zinc-100 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">Casos de estudio</p>
        <h1 className="text-3xl font-semibold tracking-tight text-yellow-400 sm:text-4xl">
          Trabajo seleccionado y sistemas digitales en accion
        </h1>
        <p className="max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg">
          Una muestra de como unimos estrategia, diseno, motion y claridad para construir presencia digital con impacto.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <Link
              key={study.href}
              href={study.href}
              className="rounded-4xl border border-white/10 bg-white/5 p-7 transition hover:border-yellow-400/35 hover:bg-white/8"
            >
              <h2 className="text-2xl font-semibold text-white">{study.title}</h2>
              <p className="mt-3 leading-7 text-zinc-300">{study.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}