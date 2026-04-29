"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function VisibilityOutcomeSection() {
  const [showWhyThisMattersMore, setShowWhyThisMattersMore] = useState(false);

  return (
    <section id="why" className="relative z-20 -mt-15 overflow-hidden bg-[linear-gradient(180deg,#050507_0%,#08101d_52%,#0f172a_100%)] px-6 pb-28 pt-28 text-white md:-mt-18 md:px-10 md:pt-32 lg:px-16">
      <div className="pointer-events-none absolute -top-14 left-1/2 h-28 w-152 -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,200,80,0.14),transparent_72%)] blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(255,180,50,0.06),transparent_34%),radial-gradient(circle_at_72%_74%,rgba(66,98,156,0.12),transparent_28%),linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.18)_100%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center"
        >
          <h2 className="text-4xl font-semibold tracking-tight text-[#f4cf43] md:text-5xl lg:text-6xl">
            Why This Matters
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          variants={fadeUp}
          className="mt-12"
        >
          <div className="mx-auto h-px w-full max-w-3xl bg-[linear-gradient(to_right,transparent,rgba(255,180,50,0.3),transparent)]" />

          <p className="mx-auto mt-14 max-w-4xl text-center text-2xl font-medium leading-normal text-zinc-100 md:text-[2.05rem]">
            Customers don&apos;t just search anymore - they ask AI and compare results.
          </p>

          <button
            type="button"
            onClick={() => setShowWhyThisMattersMore((current) => !current)}
            className="text-[#d4af37] text-sm mt-3 hover:underline"
          >
            {showWhyThisMattersMore ? "Show less" : "Learn more"}
          </button>

          {showWhyThisMattersMore ? (
            <p className="mx-auto mt-10 max-w-4xl text-xl leading-[1.8] text-zinc-400 md:text-[1.55rem] md:leading-[1.7]">
              If your business isn&apos;t structured for search engines and AI systems, it may not appear when customers are looking for services like yours.
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
