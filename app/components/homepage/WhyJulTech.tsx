"use client";

import { motion } from "framer-motion";

const points = [
  "Multilingual execution",
  "Custom design systems",
  "No templates or generic solutions",
  "Built for modern, international brands",
];

export default function WhyJulTech() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">Built for Global Brands</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">
            Designed to work beyond borders.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            JulTech is designed to work beyond borders, combining design, technology, and strategy into systems that feel clear, adaptable, and globally relevant.
          </p>
          <p className="mt-5 text-lg leading-relaxed text-zinc-400">
            Every project is built from the ground up, focusing on identity, performance, and long-term scalability.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <ul className="space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-4 rounded-2xl border border-white/6 bg-black/20 px-4 py-4 text-base text-zinc-200">
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}