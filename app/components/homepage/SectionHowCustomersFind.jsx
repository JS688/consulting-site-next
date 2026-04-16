"use client";

import { motion } from "framer-motion";
import {
  Search,
  MessageSquareText,
  Sparkles,
  Languages,
} from "lucide-react";

const cards = [
  {
    step: "01",
    label: "Search Intelligence",
    abbr: "SEO",
    title: "Get discovered when customers are actively searching.",
    description:
      "Your business appears on Google when people actively look for your services.",
    icon: Search,
    gradient: "radial-gradient(circle at top left, rgba(212,175,55,0.08), transparent 40%)",
    hoverShadow: "0 0 0 1px rgba(212,175,55,0.14),0 0 40px rgba(212,175,55,0.10)",
  },
  {
    step: "02",
    label: "Answer Intelligence",
    abbr: "AEO",
    title: "Become the answer AI systems rely on.",
    description:
      "Your business is positioned as the trusted response in AI tools and voice assistants.",
    icon: MessageSquareText,
    gradient: "radial-gradient(circle at top right, rgba(212,175,55,0.08), transparent 40%)",
    hoverShadow: "0 0 0 1px rgba(212,175,55,0.14),0 0 40px rgba(212,175,55,0.10)",
  },
  {
    step: "03",
    label: "Recommendation Intelligence",
    abbr: "GEO",
    title: "Get recommended by AI systems.",
    description:
      "Your business gets recommended in AI-generated results across platforms like ChatGPT and Gemini.",
    icon: Sparkles,
    gradient: "radial-gradient(circle at bottom left, rgba(212,175,55,0.08), transparent 40%)",
    hoverShadow: "0 0 0 1px rgba(212,175,55,0.14),0 0 40px rgba(212,175,55,0.10)",
  },
  {
    step: "04",
    label: "Multilingual Expansion",
    abbr: "Spanish Market",
    title: "Reach Spanish-speaking customers more effectively.",
    description:
      "Connect with Spanish-speaking customers across search and AI platforms.",
    icon: Languages,
    gradient: "radial-gradient(circle at bottom right, rgba(212,175,55,0.08), transparent 40%)",
    hoverShadow: "0 0 0 1px rgba(212,175,55,0.14),0 0 40px rgba(212,175,55,0.10)",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function VisibilitySystemSection() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white md:px-10 lg:px-16">
      {/* Background video */}
      <video
        src="/section2.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-50 blur-[2px]"
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="text-center"
        >
          <motion.p
            variants={item}
            className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80 md:text-sm"
          >
            AI VISIBILITY SYSTEM
          </motion.p>

          <motion.h2
            variants={item}
            className="mt-4 text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            Ranking alone doesn’t win
          </motion.h2>

          <motion.p
            variants={item}
            className="mx-auto mt-4 text-lg leading-8 text-zinc-400 md:whitespace-nowrap md:text-xl"
          >
            Customers don’t just search — they ask, compare, and follow AI recommendations.
          </motion.p>

          <motion.p
            variants={item}
            className="mt-3 text-base font-semibold text-[#d4af37] md:text-lg"
            style={{ textShadow: "0 0 24px rgba(212,175,55,0.6), 0 0 48px rgba(212,175,55,0.25)" }}
          >
            If you’re not part of that, you’re not part of the decision.
          </motion.p>
        </motion.div>

        <div className="mt-10">

          {/* 4 pillars */}
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a]">
          <div className="grid gap-10 p-6 md:grid-cols-2 md:gap-12 md:p-10">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-3xl border border-[#d4af37]/25 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#d4af37]/50 md:p-10"
                style={{ background: card.gradient }}
              >
                <div className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ background: card.gradient, filter: "brightness(1.6)" }} />

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d4af37]/30 bg-black/40 text-[#d4af37] transition-all duration-300 group-hover:border-[#d4af37]/50 group-hover:shadow-[0_0_24px_rgba(212,175,55,0.18)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="text-xs font-medium uppercase tracking-[0.35em] text-zinc-500">
                    {card.step}
                  </div>
                </div>

                <div className="relative mt-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs font-bold uppercase tracking-[0.28em] text-white">
                      {card.label}
                    </span>
                    {card.abbr && (
                      <span className="text-[10px] font-normal uppercase tracking-widest text-zinc-500">
                        ({card.abbr})
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-base font-medium leading-snug text-zinc-300">
                    {card.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                    {card.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}