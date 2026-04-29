"use client";

import FounderSection from "../components/homepage/FounderSection";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[80vh] overflow-hidden bg-linear-to-b from-[#0b0b0b] via-[#121212] to-black px-6 py-24 text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,64,0.08),transparent_60%)]"
        />

        <motion.div
          aria-hidden
          animate={{
            opacity: [0.15, 0.3, 0.15],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-175 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
        />

        <motion.div
          aria-hidden
          animate={{ opacity: [0.08, 0.15, 0.08], scale: [1, 1.05, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-25 top-[20%] h-100 w-100 rounded-full bg-white/5 blur-3xl"
        />

        <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="text-4xl font-semibold tracking-tight text-white md:text-6xl"
          >
            For those who expect{" "}
            <span className="relative inline-block">
              <span className="text-yellow-400">more</span>

              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
                className="absolute left-0 -bottom-2 h-0.5 bg-yellow-400"
              />
            </span>
          </motion.h1>

          <div className="mt-10 max-w-3xl space-y-6 text-center text-lg leading-relaxed text-white/70 md:text-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22, duration: 0.45 }}
            >
              We don&apos;t just design websites — we build systems for visibility.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
            >
              Every project starts with understanding how your customers search and what it takes for your business to be found.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.45 }}
            >
              We create websites that are clear, structured, and built to perform in Google search and modern search environments.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.45 }}
            >
              And we continue improving them as your business grows.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.54, duration: 0.45 }}
            className="mt-10 text-xl font-medium text-white md:text-3xl"
          >
            Built to perform. Designed to bring in customers.
          </motion.p>
        </div>
      </section>

      <FounderSection />
    </>
  );
}
