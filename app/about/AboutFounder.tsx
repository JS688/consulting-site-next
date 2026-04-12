"use client";

import MissionBlock from "@/components/MissionBlock";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

function GlobeAnimation() {
  return (
    <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full border border-[#f6c21a]/30"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute inset-6 rounded-full border border-white/10"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute inset-12 rounded-full border border-[#f6c21a]/20"
      />

      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,194,26,0.18)_0%,rgba(246,194,26,0.06)_35%,rgba(255,255,255,0.02)_60%,rgba(0,0,0,0)_75%)] blur-[2px]" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-white/5 shadow-[0_0_80px_rgba(246,194,26,0.2)] backdrop-blur"
      >
        <div className="absolute inset-3 rounded-full border border-[#f6c21a]/25" />
        <div className="absolute inset-6 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6c21a] shadow-[0_0_20px_rgba(246,194,26,0.75)]" />
      </motion.div>

      <motion.div
        animate={{ opacity: [0.35, 0.8, 0.35] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-6 h-2 w-2 -translate-x-1/2 rounded-full bg-[#f6c21a]"
      />
      <motion.div
        animate={{ opacity: [0.2, 0.7, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-10 h-2 w-2 rounded-full bg-white/80"
      />
      <motion.div
        animate={{ opacity: [0.25, 0.75, 0.25] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-10 top-14 h-2 w-2 rounded-full bg-[#f6c21a]"
      />
    </div>
  );
}

export default function AboutFounder() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const pillars = [
    {
      title: "Background",
      body: [
        "With experience across different languages and cultures, the approach naturally became international.",
        "Working across English, Spanish, Portuguese, and Russian environments helped develop a deeper understanding of how different audiences interact with design and technology. This influence is reflected in every project-clear communication, adaptable systems, and a focus on global usability.",
      ],
    },
    {
      title: "Approach to Work",
      body: [
        "The goal is simple:",
        "Create digital experiences that feel intentional, distinctive, and built to last.",
        "No templates",
        "No generic design",
        "No shortcuts",
        "Each project is treated as a complete system-where branding, website, and interaction all work together.",
      ],
    },
    {
      title: "Perspective",
      body: [
        "Most websites today look similar. Same layouts. Same patterns. Same outcomes.",
        "Build identity, not just pages",
        "Create recognition, not just presence",
        "Design for impact, not just delivery",
      ],
    },
    {
      title: "Looking Forward",
      body: [
        "JulTech is being built as a long-term studio-one that works with modern brands, founders, and teams who value quality and clear direction.",
        "The goal is not volume. It is to create fewer, better projects that stand out globally.",
      ],
    },
    {
      title: "Closing",
      body: [
        "At the end of the day, this is about more than design or code.",
        "It is about building something that represents you properly-online and beyond.",
      ],
      emphasized: true,
    },
  ];

  return (
    <main className="bg-zinc-950 text-zinc-100">
      <section className="relative overflow-hidden px-6 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(246,194,26,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
        <div className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" as const }}
            viewport={{ once: true, amount: 0.25 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">About JulTech</p>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A creative technology studio built around distinctive digital identities.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-zinc-300">
              JulTech is focused on unique digital design, AI development, business analytics, and modern web
              experiences-shaped by a global perspective and built to feel different.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div {...fadeUp}>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Identity</p>
                  <p className="mt-3 text-lg leading-relaxed text-zinc-200">
                    Unique visual systems that make brands recognizable.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Web</p>
                  <p className="mt-3 text-lg leading-relaxed text-zinc-200">
                    High-performance websites designed for clarity and impact.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-sm uppercase tracking-[0.25em] text-zinc-400">Motion</p>
                  <p className="mt-3 text-lg leading-relaxed text-zinc-200">
                    Subtle animation that brings the brand to life.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="flex justify-center lg:justify-end">
              <GlobeAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      <MissionBlock />

      <section className="px-6 pb-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" as const }}
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col items-center"
        >
          <div className="flex w-full justify-center">
            <div className="rounded-full border-4 border-[#f6c21a] bg-black p-1.5 shadow-[0_0_40px_rgba(246,194,26,0.22)]">
              <div className="h-44 w-44 overflow-hidden rounded-full bg-zinc-900 sm:h-48 sm:w-48">
                <img
                  src="/julia-headshot.jpg"
                  alt="Julia Sokolsky headshot"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-center">
            <a
              href="https://www.linkedin.com/in/julia-sokolsky"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-white/10"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <span className="text-sm text-zinc-400">Founder &amp; Creative Technologist</span>
          </div>
        </motion.div>

        <div className="mx-auto mt-12 max-w-5xl text-center">
          <motion.div {...fadeUp} className="mx-auto max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">About the Founder</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              A global mindset, built around design, technology, and identity.
            </h2>
          </motion.div>

          <motion.div {...fadeUp} className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-zinc-300">
            <p>
              JulTech was founded by a creator with a strong focus on AI development, business analytics,
              digital design, and technology-shaped by a global perspective.
            </p>
            <p>
              From the beginning, the focus was not just on building websites, but on understanding how digital
              experiences shape perception, trust, and identity.
            </p>
          </motion.div>

          <div className="mx-auto mt-12 max-w-4xl space-y-5">
            {pillars.map((pillar, index) => (
              <div key={pillar.title} className="space-y-5">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" as const }}
                  className={
                    pillar.emphasized
                      ? "rounded-3xl border border-[#f6c21a]/35 bg-linear-to-br from-[#f6c21a]/10 to-white/5 p-7 text-center shadow-[0_20px_60px_rgba(246,194,26,0.08)] sm:p-8"
                      : "rounded-3xl border border-[#f6c21a]/30 bg-[linear-gradient(180deg,rgba(246,194,26,0.08),rgba(255,255,255,0.04))] p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.24)] sm:p-8"
                  }
                >
                  <h3 className="text-2xl font-medium text-white">{pillar.title}</h3>
                  <div className="mt-4 space-y-4">
                    {pillar.body.map((item, itemIndex) => {
                      const isBullet = itemIndex > 1 && (pillar.title === "Approach to Work" || pillar.title === "Perspective") && itemIndex < pillar.body.length - (pillar.title === "Approach to Work" ? 1 : 0);
                      const isEmphasis = pillar.title === "Approach to Work" && itemIndex === 1;

                      if (isBullet) {
                        return (
                          <p key={item} className="text-zinc-300">
                            • {item}
                          </p>
                        );
                      }

                      return (
                        <p
                          key={item}
                          className={isEmphasis ? "text-xl font-medium text-white" : "leading-relaxed text-zinc-300"}
                        >
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </motion.div>

                {index < pillars.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: index * 0.06 + 0.08, ease: "easeOut" as const }}
                    className="flex justify-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f6c21a]/30 bg-[#f6c21a]/10 text-[#f6c21a]">
                      <ArrowDown className="h-5 w-5" />
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    </main>
  );
}
