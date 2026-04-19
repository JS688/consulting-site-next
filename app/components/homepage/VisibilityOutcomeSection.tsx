"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
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
  hidden: { opacity: 0, y: 38 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

const headingPart: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function BeforeAfterSection() {
  return (
    <section className="relative overflow-hidden bg-[#111113] text-white">
      <video
        src="/back 2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-35 brightness-75 blur-[2px]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,17,19,0.92)_0%,rgba(17,17,19,0.88)_16%,rgba(17,17,19,0.72)_28%,rgba(0,0,0,0.42)_58%,rgba(0,0,0,0.42)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#111113] via-[#111113] to-transparent" />
      {/* Subtle blue tint */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(48,96,176,0.24)_0%,transparent_62%)]" />

      {/* Heading */}
      <div className="relative pb-8 pt-16">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <motion.div
            className="text-center"
          >
            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[#eaeaea] md:text-5xl lg:text-6xl">
              <span className="inline-flex flex-wrap items-baseline justify-center gap-x-3 gap-y-1">
                <motion.span
                  variants={headingPart}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
                >
                  From
                </motion.span>
                <motion.span
                  variants={headingPart}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                >
                  website
                </motion.span>
                <motion.span
                  variants={headingPart}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
                >
                  to growth system
                </motion.span>
              </span>
            </h2>
            <motion.p
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.95 }}
              className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-[#d4af37]/85 md:text-xl"
            >
              Here&apos;s how your business changes when the right system is in place.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-8 md:px-10 lg:px-16">

        <div className="grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-8">
          {/* BEFORE */}
          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.965 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
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
            <Link
              href="/strategy-call/15-min"
              aria-label="Book a 15-min video call"
              title="Book a 15-min video call"
              className="flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-0.5 hover:text-white/80"
            >
              <ArrowRight className="h-10 w-10" strokeWidth={1.8} />
            </Link>
          </div>

          {/* AFTER */}
          <motion.article
            initial={{ opacity: 0, y: 40, scale: 0.965 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
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
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 text-center"
        >
          <div className="mx-auto mt-3 flex justify-center">
            <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xl font-normal text-[#d4af37] sm:gap-3 sm:text-2xl lg:text-[2rem]">
              <motion.span
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              >
                Be found.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              >
                Be trusted.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 22, scale: 0.985 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 1 }}
              >
                Be chosen.<sup className="text-[0.5em] font-normal align-super">™</sup>
              </motion.span>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center justify-center gap-4">
            <Link
              href="/strategy-call/15-min"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-[rgba(30,40,60,0.45)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-[rgba(36,48,72,0.58)]"
            >
              Book a 15-min Strategy Video Call
            </Link>
            <p className="text-center text-xs text-zinc-600">
              No obligation. Every call is reviewed personally.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

