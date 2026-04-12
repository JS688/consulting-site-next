"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  MessageSquareText,
  Sparkles,
  Target,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Found",
    subtitle: "Google",
    desc: "Appear when customers search.",
    label: "List of Results",
  },
  {
    icon: MessageSquareText,
    title: "Answer",
    subtitle: "AI Voice",
    desc: "Become what users hear first.",
    label: "Direct Answer",
  },
  {
    icon: Sparkles,
    title: "Chosen by AI",
    subtitle: "ChatGPT + Gemini",
    desc: "Recommended by AI assistants.",
    label: "Chosen Result",
  },
  {
    icon: Target,
    title: "Bilingual",
    subtitle: "Result",
    desc: "Visible to English and Spanish users.",
    label: "English + Spanish",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function VisibilityGapSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%),linear-gradient(180deg,rgba(17,17,18,1),rgba(3,3,3,1))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />

      <div className="mx-auto max-w-7xl">
        <div className="rounded-4xl border border-white/10 bg-white/3 px-6 py-12 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:px-8 lg:px-12">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-black/35 px-4 py-2 text-sm text-zinc-300 shadow-[0_0_40px_rgba(212,175,55,0.06)]"
            >
              <Sparkles className="h-4 w-4 text-[#d4af37]" />
              The JulTech Visibility Framework™
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="mt-6 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl lg:text-6xl"
            >
              How Customers Find Businesses on Google and AI
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-3xl text-base leading-8 text-zinc-200/90 sm:text-lg"
            >
              Today, customers do not just search on Google. They ask AI tools like
              ChatGPT, Gemini, and voice assistants for direct answers.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-3xl text-base leading-8 text-zinc-200/90 sm:text-lg"
            >
              To be visible, your website must be optimized for both search engines
              (SEO) and answer engines (AEO).
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-3xl text-base leading-8 text-zinc-200/90 sm:text-lg"
            >
              That means your business needs to rank in search, appear in AI-generated
              answers, and be structured so machines can understand and recommend it.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mt-7 text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400"
            >
              Your business needs to show up, answer, and be chosen
            </motion.p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08, duration: 0.45 }}
                  whileHover={{ y: -5 }}
                  className="relative"
                >
                  {index < steps.length - 1 && (
                    <div className="absolute -right-4.5 top-1/2 hidden -translate-y-1/2 md:flex">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d4af37]/15 bg-black/40 text-[#d4af37]/70 shadow-[0_0_24px_rgba(212,175,55,0.08)]">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  )}

                  <div className="group h-full rounded-[1.75rem] border border-white/10 bg-linear-to-b from-white/6 to-white/3 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-[#d4af37]/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/35 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                      <Icon className="h-5 w-5 text-[#d4af37]" />
                    </div>

                    <p className="mt-5 text-[11px] uppercase tracking-[0.3em] text-zinc-400">
                      {step.subtitle}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-zinc-300">
                      {step.desc}
                    </p>

                    <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent" />

                    <p className="mt-5 text-sm font-medium text-[#d4af37]">
                      {step.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
