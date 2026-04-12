"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FeaturedWork() {
  return (
    <section className="bg-black px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Featured Work</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Nova AI
          </h2>
          <p className="mt-4 text-xl text-zinc-300">
            A premium digital identity for an AI-first company
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            We designed a distinctive brand and built a high-performance website to position Nova AI as a modern, global technology company.
          </p>
          <Link
            href="/case-studies"
            className="mt-8 inline-flex items-center rounded-full border border-yellow-400/35 px-5 py-3 text-sm font-semibold text-yellow-300 transition hover:border-yellow-300 hover:bg-yellow-400/10"
          >
            View Case Study &rarr;
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(140deg,rgba(212,175,55,0.22),rgba(255,255,255,0.06),rgba(0,0,0,0.3))] p-8 shadow-[0_30px_90px_rgba(0,0,0,0.35)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]" />
          <div className="relative rounded-4xl border border-white/10 bg-black/55 p-8 backdrop-blur">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-zinc-400">
              <span>AI Branding</span>
              <span>Web Experience</span>
            </div>
            <div className="mt-10 space-y-5">
              <div className="h-4 w-28 rounded-full bg-yellow-300/90" />
              <div className="h-16 rounded-3xl bg-white/8" />
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="h-32 rounded-3xl bg-white/7" />
                <div className="h-32 rounded-3xl bg-yellow-400/10" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}