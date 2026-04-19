"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const shortConsultationUrl = "/strategy-call/15-min";
const consultationUrl = "/strategy-call/1-hour";
type HoverMode = "quick" | "full" | null;

const headerItemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
// If you need containerVariants, define it here, above the component, not inside JSX
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

export default function Hero() {
  const [hoverMode, setHoverMode] = useState<HoverMode>(null);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="/logos/background.png"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/55 to-black" />
      </div>

      <div className="relative mx-auto min-h-[calc(100vh-5rem)] max-w-7xl px-6 pb-4 pt-4 lg:pt-8">
        <div className="w-full grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
          <div className="max-w-xl space-y-8 pt-2 pb-4 text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-bold leading-tight text-white"
            >
              <span className="block text-3xl sm:text-4xl lg:text-5xl">MULTIPLY YOUR</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl">WEBSITE IMPACT</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl font-medium text-[#d4af37] lg:text-3xl"
            >
              Rank on Google. Get chosen by AI.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base text-white/60 md:whitespace-nowrap"
            >
              Built for businesses that lead-not compete-in search and AI
            </motion.p>

            <div className="space-y-6 pt-4">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Start fast or go deeper
              </p>

              <div className="space-y-2">
                <p className="text-sm text-white/60">
                  Get a quick analysis
                </p>

                <Link
                  href={shortConsultationUrl}
                  onMouseEnter={() => setHoverMode("quick")}
                  onMouseLeave={() => setHoverMode(null)}
                  onFocus={() => setHoverMode("quick")}
                  onBlur={() => setHoverMode(null)}
                  className="group inline-flex w-full max-w-76 items-center justify-center gap-3 rounded-full border border-slate-600/40 bg-slate-800/55 px-5 py-3.5 font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition hover:border-slate-500/55 hover:bg-slate-700/65"
                >
                  <span>Book 15-Min Call</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-sm text-white/60">
                  Need fast results? Solve it properly.
                </p>

                <Link
                  href={consultationUrl}
                  onMouseEnter={() => setHoverMode("full")}
                  onMouseLeave={() => setHoverMode(null)}
                  onFocus={() => setHoverMode("full")}
                  onBlur={() => setHoverMode(null)}
                  className="group inline-flex w-full max-w-76 items-center justify-center gap-3 rounded-full border border-blue-900/60 bg-blue-950/85 px-5 py-3.5 font-semibold text-white shadow-[0_10px_24px_rgba(8,47,73,0.18)] transition hover:border-blue-800/70 hover:bg-blue-900/90"
                >
                  <span>Book 1-Hour Strategy Call</span>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-0 flex w-full items-start justify-end">
            <motion.div
              variants={headerItemVariants}
              initial="hidden"
              animate="visible"
              className={`relative z-10 w-full max-w-124 transition-all duration-500 lg:max-w-160 lg:translate-x-4 xl:max-w-176 ${
                hoverMode === "quick"
                  ? "scale-105 brightness-110 rotate-1"
                  : hoverMode === "full"
                    ? "scale-110 brightness-125 rotate-3"
                    : "scale-100 brightness-100 rotate-0"
              }`}
            >
              <div
                className={`absolute -inset-4 rounded-[2.25rem] transition-all duration-500 ${
                  hoverMode === "quick"
                    ? "bg-[#d4af37]/20 opacity-30 blur-2xl"
                    : hoverMode === "full"
                      ? "bg-[#d4af37]/40 opacity-60 blur-3xl"
                      : "bg-[#d4af37]/6 opacity-100 blur-3xl"
                }`}
              />
              <div className="relative h-72 w-full overflow-hidden rounded-[2.25rem] md:h-96 lg:h-136">
                <div className="absolute inset-0 z-10 bg-linear-to-b from-black/40 via-black/10 to-black/70" />
                <video
                  src="/newtry.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover opacity-55 saturate-90"
                />
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={headerItemVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto flex w-full justify-center pb-6 pt-24 text-center"
        >
          <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-xl font-medium text-[#d4af37] sm:gap-3 sm:text-2xl lg:text-[2rem]">
            <span>Be found.</span>
            <span>Be trusted.</span>
            <span>
              Be chosen.
              <sup className="ml-1 text-[0.45em] align-super">TM</sup>
            </span>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-black to-transparent" />
      <motion.div
        variants={headerItemVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto mt-4 max-w-4xl px-6 pb-0 text-center"
      >
        <div className="mx-auto h-px w-full max-w-3xl bg-linear-to-r from-transparent via-[#d4af37]/70 to-transparent" />
      </motion.div>
    </section>
  );
}
