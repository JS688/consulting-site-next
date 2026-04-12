"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SectionCTA() {
  return (
    <section className="bg-neutral-950 px-6 pb-24 pt-10 text-white sm:px-8 sm:pb-24 sm:pt-12 lg:px-12 lg:pt-14">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-[2.5rem] border border-white/10 bg-white/5 px-6 py-12 text-center shadow-2xl shadow-black/20 backdrop-blur sm:px-10 sm:py-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">
            Final Step
          </p>

          <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build something distinctive.
          </h2>
  <p className="mt-4 text-xl text-neutral-400">
            Whether you&apos;re launching, scaling, or redefining your brand, we&apos;ll help you create a digital presence that stands out.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:scale-[1.03] hover:bg-yellow-300 active:scale-[0.98]"
            >
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute inset-0 rounded-xl bg-yellow-400/20 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
            </Link>

            <Link
              href="/free-appraisal"
              className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-[1.02] hover:border-yellow-400/30 hover:bg-white/10 active:scale-[0.98]"
            >
              <span>Get a Free Audit</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <p className="mt-5 text-sm text-zinc-500">
            Limited availability for new projects each month.
          </p>
        </motion.div>
      </div>
    </section>
  );
}