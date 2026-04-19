"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45 }}
            className="text-xs uppercase tracking-[0.45em] text-white/35"
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.14, duration: 0.45 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl"
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
              JulTech approaches every project with clarity and discipline.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
            >
              Through careful analysis, we uncover what truly matters and turn it
              into direction.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.45 }}
            >
              We design digital experiences that are refined, intelligent, and
              built to perform.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.46, duration: 0.45 }}
            >
              We stay involved, evolving alongside our clients as their needs
              grow.
            </motion.p>
          </div>

          <div className="mt-24 space-y-8 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-medium text-white md:text-4xl"
            >
              Built to perform. Designed to resonate.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-xl text-white/72 md:text-3xl"
            >
              Not just seen.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, scale: 0.8, letterSpacing: "0.2em" }}
              whileInView={{ opacity: 1, scale: 1, letterSpacing: "0em" }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="py-4 text-6xl font-extrabold tracking-tight text-yellow-400 md:py-6 md:text-8xl"
            >
              FELT.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="mt-20 space-y-6 text-center"
            >
              <p className="mx-auto max-w-2xl text-xl text-white/80 md:text-2xl">
                We redefine how businesses are found, trusted, and chosen.
              </p>

              <Link
                href="/book"
                className="group inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-4 font-semibold text-black transition hover:bg-yellow-300"
              >
                <span>Book a Strategy Call</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="text-sm text-white/40">
                Clear next steps. No pressure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
