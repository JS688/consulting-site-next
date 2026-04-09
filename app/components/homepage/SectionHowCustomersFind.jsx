"use client";
// SectionHowCustomersFind.jsx
// Section 2: How Customers Find Businesses
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, MessageSquareText, Sparkles, Target } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Found",
    subtitle: "Google",
    desc: "Appear when customers search",
    label: "List of Results",
  },
  {
    icon: MessageSquareText,
    title: "Answer",
    subtitle: "AI Voice (Siri and Alexa)",
    desc: "Become what users hear first",
    label: "Direct Answer",
  },
  {
    icon: Sparkles,
    title: "Chosen by AI",
    subtitle: "AI (ChatGPT and Gemini)",
    desc: "Recommended by AI Assistants",
    label: "Chosen Result",
  },
  {
    icon: Target,
    title: "Bilingual",
    subtitle: "Result",
    desc: "Visible to All",
    label: "English + Spanish",
  },
];

const headerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 12, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function SearchJourneySection() {
  return (
    <section className="relative z-20 overflow-hidden bg-black px-6 pb-0 pt-8 text-white sm:px-8 md:pt-10 lg:px-12 lg:pt-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,rgba(255,214,102,0.14),transparent_0.7rem),radial-gradient(circle_at_68%_72%,rgba(255,214,102,0.12),transparent_0.55rem),radial-gradient(circle_at_82%_34%,rgba(255,214,102,0.10),transparent_0.45rem),linear-gradient(180deg,rgba(18,18,19,0.95),rgba(10,10,11,0.98)),repeating-linear-gradient(0deg,rgba(68,68,70,0.20)_0,rgba(68,68,70,0.20)_1px,transparent_1px,transparent_34px),repeating-linear-gradient(90deg,rgba(68,68,70,0.18)_0,rgba(68,68,70,0.18)_1px,transparent_1px,transparent_34px),repeating-linear-gradient(0deg,rgba(26,26,28,0.70)_0,rgba(26,26,28,0.70)_8px,transparent_8px,transparent_52px),repeating-linear-gradient(90deg,rgba(26,26,28,0.62)_0,rgba(26,26,28,0.62)_8px,transparent_8px,transparent_52px)] opacity-95" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(255,214,102,0.06),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-12 bg-black md:h-14" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="rounded-4xl bg-black px-6 pb-6 pt-8 shadow-[0_10px_32px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:px-8 sm:pb-8 sm:pt-10 lg:px-10 lg:pb-10 lg:pt-12">
          <motion.div
            className="mx-auto max-w-5xl text-center"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.div
              variants={headerItemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-gray-300"
            >
              <Sparkles className="h-4 w-4" />
              The JulTech Visibility Framework™
            </motion.div>

            <motion.h2
              variants={headerItemVariants}
              className="mt-6 text-4xl font-semibold tracking-tight text-yellow-400 sm:text-5xl whitespace-nowrap"
            >
              How Customers Find Businesses Today
            </motion.h2>

            <motion.p
              variants={headerItemVariants}
              className="mt-10 text-lg leading-8 text-white sm:text-xl whitespace-nowrap"
            >
              Search has changed. Potential clients do not just browse anymore — they ask questions and expect answers
            </motion.p>

            <motion.p
              variants={headerItemVariants}
              className="mt-8 text-sm font-normal uppercase tracking-[0.35em] text-gray-300 opacity-80 whitespace-nowrap"
            >
              YOUR BUSINESS NEEDS TO SHOW UP, ANSWER, AND BE CHOSEN
            </motion.p>
          </motion.div>

          <div className="relative mt-16">
            <div className="grid gap-10 md:grid-cols-4 md:gap-12">
              {steps.map((step, i) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="relative">
                    {i < steps.length - 1 && (
                      <div className="absolute left-full top-1/2 z-20 hidden -translate-y-1/2 md:flex md:ml-1">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/60">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    )}

                    <motion.div
                      initial={{ opacity: 0, y: 18, scale: 0.985 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ delay: i * 0.1, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      whileHover={{ y: -4 }}
                      className={[
                        "group relative h-full rounded-3xl bg-white/10 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1",
                        step.highlight
                          ? "border-yellow-400/40 bg-white/6 shadow-[0_0_40px_rgba(250,204,21,0.08)] scale-[1.03]"
                          : "",
                      ].join(" ")}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/8 ring-1 ring-white/10 transition-all duration-300 group-hover:bg-yellow-400/10 group-hover:ring-yellow-400/20">
                        <Icon className="h-5 w-5 text-yellow-300" />
                      </div>

                      <p className="mt-5 text-[11px] uppercase tracking-[0.25em] text-neutral-400">
                        {step.subtitle}
                      </p>

                      <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                        {step.desc}
                      </p>

                      <p className="mt-5 text-sm font-medium text-yellow-300">
                        {step.label}
                      </p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

