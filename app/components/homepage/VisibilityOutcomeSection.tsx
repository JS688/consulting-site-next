"use client";

import { motion, type Variants } from "framer-motion";
import { Check, ArrowRight, X } from "lucide-react";

const beforeItems = [
  "Visitors land and leave",
  "AI tools do not clearly understand your business",
  "Competitors get chosen instead",
  "Leads come in inconsistently",
];

const afterItems = [
  "Customers find you more easily",
  "AI tools are more likely to surface your business",
  "Your brand feels more credible",
  "Your website starts supporting client growth",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

export default function BeforeAfterSection() {
  return (
    <section className="bg-[#111113] text-white">

      {/* Heading band */}
      <div className="bg-[#111113] py-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            className="text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
              WHAT THIS LOOKS LIKE FOR YOUR BUSINESS
            </p>
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#eaeaea] md:text-5xl lg:text-6xl">
              From website to growth system.
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#c0c0c0] md:text-xl">
              Here&apos;s how your business changes when the right system is in place.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 lg:px-16">

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-8">
          {/* BEFORE */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-white/40 bg-[rgba(30,40,60,0.45)] p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.03),transparent_45%)]" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-zinc-400">
                <X className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-zinc-500">
                  Before
                </p>
                <h3 className="mt-1 whitespace-nowrap text-2xl font-semibold text-white">
                 Problems
                </h3>
              </div>
            </div>

            <ul className="relative mt-8 space-y-4">
              {beforeItems.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-black/25 px-4 py-4 text-zinc-300"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-white/70" />
                  <span className="text-base leading-7">{text}</span>
                </li>
              ))}
            </ul>
          </motion.article>

          {/* ARROW */}
          <div className="hidden items-center justify-center lg:flex">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/20 bg-white/3 text-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.08)]">
              <ArrowRight className="h-5 w-5" />
            </div>
          </div>

          {/* AFTER */}
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="relative overflow-hidden rounded-3xl border border-[#d4af37]/25 bg-[linear-gradient(180deg,rgba(212,175,55,0.08),rgba(255,255,255,0.03))] p-8 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_45%)]" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-black/40 text-[#d4af37] shadow-[0_0_24px_rgba(212,175,55,0.16)]">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.3em] text-[#d4af37]/70">
                  After
                </p>
                <h3 className="mt-1 whitespace-nowrap text-2xl font-semibold text-white">
                  Resolutions
                </h3>
              </div>
            </div>

            <ul className="relative mt-8 space-y-4">
              {afterItems.map((text) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/20 px-4 py-4 text-zinc-200"
                >
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#d4af37]" />
                  <span className="text-base leading-7">{text}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>{/* end grid */}

        {/* Bottom CTA — no frame */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-[#d4af37] md:text-2xl">
            Your visibility is already being decided.
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-zinc-400">
            The question is whether your business is chosen.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href="/free-appraisal"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(212,175,55,0.35)]"
            >
              Get Your AI Visibility Audit →
            </a>
            <a
              href="https://calendly.com/jultech-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#d4af37]/70 underline underline-offset-4 transition hover:text-[#d4af37]"
            >
              or book a strategy call
            </a>
            <p className="text-xs text-zinc-600">
              No obligation. Each audit and call is reviewed personally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

