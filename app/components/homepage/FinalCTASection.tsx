"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function FinalCTASection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#050507_0%,#08101d_52%,#0f172a_100%)] px-6 pb-20 pt-10 text-white md:pt-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(212,175,55,0.08),transparent_24%),radial-gradient(circle_at_70%_78%,rgba(63,94,153,0.16),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-36 bg-[radial-gradient(120%_85%_at_50%_0%,rgba(8,12,20,0)_24%,rgba(5,8,14,0.66)_60%,rgba(2,4,8,0.94)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-[radial-gradient(90%_120%_at_50%_100%,rgba(2,4,8,0.72)_10%,transparent_72%)]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeUp}
        className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 text-left lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]"
      >
        <div>
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Start Improving Your AI Visibility
          </h2>
          <p className="mt-6 text-gray-400">
            Not sure if your business shows up in AI results?
          </p>
          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Serving businesses in Columbia, SC and across the United States.
          </p>

          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="mt-10 flex justify-start"
          >
            <Link
              href="/strategy-call/15-min"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-8 py-4 font-medium text-black transition"
            >
              Get Your Free Visibility Review →
            </Link>
          </motion.div>

          <div className="mt-4">
            <Link
              href="#services"
              className="text-sm text-white/60 underline underline-offset-4 transition hover:text-yellow-400"
            >
              View solutions →
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl">
          <video
            className="h-full w-full object-cover opacity-80 mask-[radial-gradient(120%_95%_at_50%_50%,black_68%,transparent_100%)]"
            src="/logos/to%20the%20right.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </motion.div>
    </section>
  );
}