"use client";

import { motion, type Variants } from "framer-motion";
import { ChartColumnIncreasing, UtensilsCrossed, Wrench } from "lucide-react";

const cards = [
  {
    title: "Restaurants and Cafes",
    description:
      "Looking to improve local search and AI visibility.",
    icon: UtensilsCrossed,
  },
  {
    title: "Local Businesses and Services",
    description:
      "Not showing up in Google or AI results.",
    icon: Wrench,
  },
  {
    title: "Outdated or Unclear Websites",
    description:
      "Businesses that need clearer messaging and stronger visibility.",
    icon: ChartColumnIncreasing,
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WhoWeHelpSection() {
  return (
    <section id="who" className="relative overflow-hidden bg-[linear-gradient(180deg,#050506_0%,#07090e_60%,#0a0c12_100%)] px-6 pb-24 pt-20 text-white md:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(97,111,139,0.12),transparent_28%),radial-gradient(circle_at_8%_16%,rgba(255,194,71,0.06),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0)_24%,rgba(0,0,0,0.22)_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeUp}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-[#d4af37]/70">
            Who We Help
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-[#f4cf43] md:text-4xl lg:text-[3.1rem]">
            Built for Local Businesses
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300 md:text-[1.18rem]">
            We help local businesses show up more clearly in Google search and AI recommendations.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
          className="mt-16 grid gap-7 lg:grid-cols-3 lg:gap-8"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group relative flex min-h-72 flex-col items-center justify-center rounded-4xl border border-[#b88712]/18 bg-white/2 px-8 py-9 text-center backdrop-blur-md transition-all duration-300 hover:border-[#d4af37]/30 hover:bg-white/4 hover:shadow-[0_14px_30px_rgba(0,0,0,0.16),0_0_18px_rgba(212,175,55,0.06)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(255,204,92,0.025),transparent_30%)]" />

                <div className="relative flex flex-col items-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/18 bg-[#d4af37]/8 text-[#f4cf43] shadow-[0_0_14px_rgba(212,175,55,0.08)] transition-all duration-300 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-8 max-w-xs text-[1.55rem] font-semibold leading-[1.2] tracking-tight text-zinc-100 md:text-[1.78rem]">
                    {card.title}
                  </h3>

                  <p className="mt-5 max-w-xs text-[0.98rem] leading-7 text-zinc-300 md:text-base">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}