"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquareText, Search, Sparkles } from "lucide-react";

export default function SearchFlowAnimation() {
  return (
    <div className="relative w-full overflow-hidden rounded-4xl border border-white/10 bg-neutral-950 px-6 py-8 sm:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_28%)]" />

      <div className="relative mx-auto max-w-5xl">
        <div className="relative mx-auto mt-10 hidden h-1 w-full max-w-4xl overflow-hidden rounded-full bg-white/10 md:block">
          <motion.div
            className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-linear-to-r from-transparent via-yellow-300 to-transparent"
            animate={{ x: ["-35%", "135%"] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5 }}
            className="group relative rounded-3xl border border-yellow-400/25 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300">
              <Search className="h-5 w-5" />
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-200/80">
              Google
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Found</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">Appear when customers search.</p>

            <p className="mt-5 text-sm font-medium text-yellow-300">List of Results</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative rounded-3xl border border-yellow-400/40 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.04))] p-6 shadow-[0_0_45px_rgba(250,204,21,0.10)] backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300">
              <MessageSquareText className="h-5 w-5" />
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-200/80">
              Voice Search
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Answer</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">Become what users hear first.</p>

            <p className="mt-5 text-sm font-medium text-yellow-300">Direct Answer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="group relative rounded-3xl border border-yellow-400/25 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10 text-yellow-300">
              <Sparkles className="h-5 w-5" />
            </div>

            <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-yellow-200/80">
              AI (ChatGPT and Gemini)
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Chosen</h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">AI decides who to show.</p>

            <p className="mt-5 text-sm font-medium text-yellow-300">Chosen Result</p>
          </motion.div>
        </div>

        <div className="mt-8 grid gap-3 md:hidden">
          <div className="flex items-center gap-3 text-white/70">
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-[0.3em] text-yellow-300/80">Flow</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300/80">Found -&gt; Answer -&gt; Chosen</p>
        </div>
      </div>
    </div>
  );
}