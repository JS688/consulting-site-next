"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, LayoutGrid, Sparkles, Wand2 } from "lucide-react";

export default function JulTechCaseStudyPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const pillars = [
    {
      icon: Sparkles,
      title: "Brand Positioning",
      text: "Defined JulTech as a creative technology studio with a global perspective and a distinctive point of view.",
    },
    {
      icon: LayoutGrid,
      title: "Web Experience",
      text: "Built a structured, high-end website that feels clear, modern, and premium.",
    },
    {
      icon: Wand2,
      title: "Motion & Detail",
      text: "Used subtle animation and visual rhythm to create depth without losing clarity.",
    },
    {
      icon: Globe2,
      title: "Global Readiness",
      text: "Shaped the site to feel adaptable and relevant across international audiences.",
    },
  ];

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,194,26,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.32em] text-zinc-400">
              Case Study
            </p>
            <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
              JulTech
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              Building a global AI-ready digital presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Branding
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Web Experience
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Motion
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="mt-12 grid gap-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur lg:grid-cols-[1.1fr_0.9fr] lg:p-8"
          >
            <div className="rounded-3xl border border-white/10 bg-zinc-900/70 p-6 sm:p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                Overview
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                JulTech was developed as a creative technology studio focused on distinctive digital identities, AI development, business analytics, and unique digital design.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                The goal was to create a premium online presence that communicates clarity, trust, and a global perspective.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                  Type
                </p>
                <p className="mt-3 text-2xl font-medium text-white">
                  Studio Brand System
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                  Direction
                </p>
                <p className="mt-3 text-2xl font-medium text-white">
                  Bold, Minimal, Global
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">
              The Challenge
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              The challenge was to create a website that feels premium and strategic, not generic. The site needed to position JulTech as more than a service provider. It had to feel like a studio with vision.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">
              The Approach
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              The project was approached as a complete system: brand voice, layout, typography, motion, and structure all working together.
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
                    <h3 className="text-2xl font-medium text-white">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-4 leading-relaxed text-zinc-300">
                    {item.text}
                  </p>
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
              <h2 className="text-3xl font-medium text-white">The Outcome</h2>
              <p className="mt-3 leading-relaxed text-zinc-300">
                The result is a strong digital presence that positions JulTech as a modern, global creative technology studio.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
            >
              Start a project
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}