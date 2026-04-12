"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ViewpointPageContent() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const principles = [
    {
      title: "Design with intent",
      text: "Every visual decision is made to strengthen identity, clarity, and trust.",
    },
    {
      title: "Think beyond websites",
      text: "Each project is treated as a complete digital presence, not just a page or layout.",
    },
    {
      title: "Build for global use",
      text: "The experience is shaped to feel clear, adaptable, and relevant across audiences.",
    },
    {
      title: "Keep it distinctive",
      text: "No templates, no generic structure-just custom work with its own point of view.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Discovery",
      text: "We start by understanding the brand, goals, audience, and what the project needs to achieve.",
    },
    {
      step: "02",
      title: "Strategy",
      text: "We define the direction, structure, and priorities so the project has a clear foundation.",
    },
    {
      step: "03",
      title: "Design",
      text: "We shape the visual identity, layout, and interactions into a distinctive system.",
    },
    {
      step: "04",
      title: "Development",
      text: "We build the experience with performance, responsiveness, and scalability in mind.",
    },
    {
      step: "05",
      title: "Launch & Refinement",
      text: "We finalize, test, and refine the result so it feels polished and ready to grow.",
    },
  ];

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="px-6 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" as const }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">Viewpoint</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A clear point of view on building distinctive digital experiences.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              The viewpoint at JulTech is simple: understand the brand deeply, shape a strong direction,
              and build a digital presence that feels intentional, modern, and globally relevant.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">What shapes the work</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">
              JulTech is built around the idea that strong digital experiences come from clarity, purpose,
              and a design language that feels original rather than recycled.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {principles.map((item, index) => (
              <motion.article
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
              >
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Principle</p>
                <h3 className="mt-3 text-2xl font-medium text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-300">{item.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">How projects take shape</h2>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-zinc-300">
              Every project follows a structured process so the result feels focused, polished, and aligned
              with the direction of the brand.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ duration: 0.55, ease: "easeOut" as const, delay: index * 0.05 }}
                className="rounded-3xl border border-white/10 bg-linear-to-br from-white/8 to-white/4 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-white">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-medium text-white">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-zinc-300">{item.text}</p>
                  </div>
                </div>
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
              <h2 className="text-3xl font-medium text-white">Built to feel different.</h2>
              <p className="mt-3 leading-relaxed text-zinc-300">
                The goal is not just to deliver a website, but to build a digital presence that stands out,
                feels credible, and supports the brand for the long term.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}