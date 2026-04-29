"use client";

import { CircleX, Sparkles, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const motionDots = [
  { top: "28%", left: "18%", delay: 0.8, duration: 6.4, size: 4 },
  { top: "42%", left: "8%", delay: 1.2, duration: 6.1, size: 6 },
  { top: "58%", left: "14%", delay: 0.35, duration: 5.6, size: 4 },
  { top: "74%", left: "12%", delay: 1.6, duration: 6.8, size: 5 },
];

export default function Hero() {
  return (
    <section id="why" className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,209,74,0.08),transparent_22%),radial-gradient(circle_at_50%_76%,rgba(255,209,74,0.05),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-2 text-sm uppercase tracking-[0.18em] text-yellow-300">
            WHY IT MATTERS
          </p>

          <h2 className="mb-6 text-xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
            Search is changing - and most businesses aren&apos;t keeping up
          </h2>

          <p className="mb-8 text-sm text-white/70 sm:text-base">
            Potential customers do not just search anymore - they ask Google and AI who to trust, hire, and buy from.
          </p>

          <div className="mb-8 grid gap-3 text-white/60">
            <div className="flex items-start gap-3">
              <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
              <p className="text-yellow-300">Your website won&apos;t rank on Google</p>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <p className="text-sky-300">It won&apos;t show up in AI results</p>
            </div>

            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              <p className="text-green-300">Customers won&apos;t find you when they&apos;re ready to buy</p>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
              <p className="text-purple-300">Your competitors will capture that reach</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/free-appraisal"
              className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 sm:w-auto"
            >
              See Where You Stand →
            </Link>

            <a
              href="tel:+18033861672"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 sm:w-auto"
            >
              Talk to an Expert
            </a>
          </div>

          <p className="mt-4 text-[11px] text-white/50 sm:text-xs">No commitment. Takes 2 minutes.</p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <motion.div
            className="relative flex w-full max-w-72 items-center justify-center sm:max-w-80 md:max-w-140"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl animate-glow sm:h-80 sm:w-80 md:h-100 md:w-100" />

            <div className="relative z-10 w-full animate-float overflow-hidden rounded-[36px] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <video
                className="block h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/logos/try 2.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0">
                {motionDots.map((dot, index) => (
                  <motion.span
                    key={`motion-dot-${index}`}
                    className="absolute rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.8)]"
                    style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
                    animate={{
                      x: [0, 220, 420],
                      y: [0, -6, 10],
                      opacity: [0, 0.95, 0],
                      scale: [0.65, 1.1, 0.75],
                    }}
                    transition={{
                      duration: dot.duration,
                      delay: dot.delay,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}