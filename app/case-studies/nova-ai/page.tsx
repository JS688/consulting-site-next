"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, LayoutGrid, Sparkles, Wand2 } from "lucide-react";

export default function NovaAiCaseStudyPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.65, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const pillars = [
    {
      icon: Sparkles,
      title: "Luxury Branding",
      text: "A refined visual identity designed to feel premium, distinctive, and memorable.",
    },
    {
      icon: LayoutGrid,
      title: "High-End Web",
      text: "A structured experience built to feel elegant, fast, and easy to navigate.",
    },
    {
      icon: Wand2,
      title: "Motion & Detail",
      text: "Subtle animation and interaction designed to create depth without distraction.",
    },
    {
      icon: Globe2,
      title: "Global Presence",
      text: "A digital system shaped to feel clear, adaptable, and ready for international audiences.",
    },
  ];

  const screens = [
    "Hero with bold statement and strong contrast",
    "Premium feature sections with spacious layouts",
    "Case study framing that feels polished and editorial",
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
              Nova AI
            </h1>
            <p className="mt-5 text-xl leading-relaxed text-zinc-300 sm:text-2xl">
              A bold and luxury digital identity for an AI-first brand built to stand out globally.
            </p>
            <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                Brand Identity
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
                Nova AI is a conceptual AI-driven platform designed to feel premium, intelligent, and globally ready. The goal was to create a visual identity and web presence that communicates innovation without losing clarity or elegance.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-zinc-300">
                Instead of relying on common AI aesthetics, the project was shaped around contrast, precision, and a more refined digital experience.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                  Type
                </p>
                <p className="mt-3 text-2xl font-medium text-white">
                  Concept Studio Work
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-linear-to-br from-white/10 to-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                  Direction
                </p>
                <p className="mt-3 text-2xl font-medium text-white">
                  Bold, Luxury, Modern
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
              The challenge was to design an AI brand that feels premium rather than generic. Most AI websites rely on the same dark gradients, glass effects, and technical language, which makes differentiation difficult.
            </p>
            <p className="mt-4 max-w-4xl text-lg leading-relaxed text-zinc-300">
              Nova AI needed a digital identity that felt confident, elegant, and credible from the first interaction.
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
              The project was approached as a complete system: branding, layout, typography, and motion working together to create a unified experience.
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

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl font-medium text-white sm:text-4xl">
              Visual Direction
            </h2>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed text-zinc-300">
              The visual language uses deep contrast, warm metallic accents, and spacious layouts to create a sense of luxury and control. The result feels sharp, minimal, and intentionally premium.
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
                <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">
                  Screen {index + 1}
                </p>
                <p className="mt-4 text-xl font-medium text-white">
                  {item}
                </p>
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
              <h2 className="text-3xl font-medium text-white">The Outcome</h2>
              <p className="mt-3 leading-relaxed text-zinc-300">
                Nova AI now has a strong conceptual foundation for a luxury AI brand: one that feels modern, distinctive, and ready to scale into a full digital presence.
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