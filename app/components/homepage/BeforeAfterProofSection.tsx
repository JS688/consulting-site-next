"use client";

import { motion, type Variants } from "framer-motion";
import { Check, X } from "lucide-react";

const beforeItems = [
  "Not surfaced",
  "Business not structured for AI",
  "Limited visibility",
];

const afterItems = [
  "Eligible for recommendations",
  "Optimized for AI understanding",
  "Improved visibility",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerList: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function BeforeAfterProofSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#07090f_0%,#0b1220_58%,#101826_100%)] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_22%,rgba(212,175,55,0.04),transparent_28%),radial-gradient(circle_at_74%_68%,rgba(66,98,156,0.1),transparent_26%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl"
        >
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Example: AI Visibility in Action
          </h2>
        </motion.div>

        <div className="mt-10 max-w-6xl">
          <p className="text-lg text-[#d4af37]">
            "best Mexican restaurant near me"
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400">
            Example: A local business in Columbia, SC optimized for queries like "best restaurant near me".
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm uppercase text-gray-400">Before</h3>
              <motion.ul
                className="mt-4 space-y-3 text-gray-400"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerList}
              >
                {beforeItems.map((text) => (
                  <motion.li key={text} variants={listItem} className="flex items-start gap-3">
                    <X className="mt-1 h-4 w-4 shrink-0 text-gray-500" />
                    <span className="text-base leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-sm uppercase text-[#d4af37]">After</h3>
              <motion.ul
                className="mt-4 space-y-3 text-gray-200"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={staggerList}
              >
                {afterItems.map((text) => (
                  <motion.li key={text} variants={listItem} className="flex items-start gap-3">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-[#f0c94a]" />
                    <span className="text-base leading-relaxed">{text}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10 max-w-2xl"
          >
            <p className="text-gray-400">
              Your business becomes easier for AI systems to understand, surface, and recommend - improving visibility across Google and AI platforms.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}