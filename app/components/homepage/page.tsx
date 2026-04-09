"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, MessageSquareText, Sparkles } from "lucide-react";

import type { Variants } from "framer-motion";
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.85, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

export default function SearchJourneySection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/25 bg-yellow-400/10 px-4 py-2 text-sm font-medium text-yellow-200 shadow-[0_0_30px_rgba(250,204,21,0.08)]">
            <Sparkles className="h-4 w-4" />
            The New Search Journey
          </div>


          <span className="mt-6 block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white whitespace-nowrap">
            How Customers Find Businesses Today
          </span>

          <span className="mt-4 block text-base sm:text-lg md:text-xl leading-8 text-neutral-300 whitespace-nowrap">
            Search has changed. People don’t just browse anymore — they ask questions and expect answers.
          </span>

          <p className="mt-3 text-sm uppercase tracking-[0.28em] text-neutral-400">
            Your business needs to show up, answer, and be recommended.
          </p>
        </div>

        <div className="mt-16 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8 lg:p-10">
          <motion.div
            className="grid gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr] lg:items-stretch"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
          >

            {/* Card 1 */}
            <motion.div
              className="group relative rounded-3xl border border-white/10 bg-neutral-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
              variants={cardVariants}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300 ring-1 ring-inset ring-yellow-400/20">
                <Search className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-yellow-300/80">
                SEO (Search)
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Show Up on Google
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                When people search, your business needs to appear.
              </p>
              <p className="mt-4 text-xs text-neutral-400">
                List of results
              </p>
            </motion.div>

            {/* Connector */}
            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute -left-22 -right-22 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-yellow-400/50 to-transparent" />
              <motion.div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/20 bg-neutral-900 text-yellow-300 shadow-lg shadow-black/20"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.15, duration: 0.35 }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </div>

            {/* Card 2 */}
            <motion.div
              className="group relative rounded-3xl border border-white/10 bg-neutral-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
              variants={cardVariants}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300 ring-1 ring-inset ring-yellow-400/20">
                <MessageSquareText className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-yellow-300/80">
                AEO (Answers)
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Be the Answer
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                Your website becomes the answer people see first — above all other results.
              </p>
              <p className="mt-4 text-xs text-neutral-400">
                Single answer
              </p>
            </motion.div>

            {/* Connector */}
            <div className="relative hidden items-center justify-center lg:flex">
              <div className="absolute -left-22 -right-22 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-transparent via-yellow-400/50 to-transparent" />
              <motion.div
                className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/20 bg-neutral-900 text-yellow-300 shadow-lg shadow-black/20"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: 0.3, duration: 0.35 }}
              >
                <ArrowRight className="h-6 w-6" />
              </motion.div>
            </div>

            {/* Card 3 */}
            <motion.div
              className="group relative rounded-3xl border border-white/10 bg-neutral-900/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:shadow-[0_0_40px_rgba(250,204,21,0.12)]"
              variants={cardVariants}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-400/15 text-yellow-300 ring-1 ring-inset ring-yellow-400/20">
                <Sparkles className="h-6 w-6" />
              </div>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-yellow-300/80">
                GEO (AI)
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                Get Recommended by AI
              </h3>
              <p className="mt-3 text-sm leading-7 text-neutral-300">
                AI tools don’t show options — they recommend who to choose.
              </p>
              <p className="mt-4 text-xs text-neutral-400">
                Recommended choice
              </p>
            </motion.div>
          </motion.div>

          <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <p className="text-lg font-medium text-white sm:text-xl">
              Get found. Be the answer. Get recommended.
            </p>
             <p className="mt-3 text-sm text-neutral-400">
              Google shows options. AI makes decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
