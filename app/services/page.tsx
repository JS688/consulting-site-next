"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  LayoutPanelTop,
  MessageSquareText,
  Search,
  Sparkles,
  Languages,
  BadgeCheck,
} from "lucide-react";


const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    href: "/web-design",
    icon: LayoutPanelTop,
    eyebrow: "Design",
    title: "Web Design",
    description: "Custom-coded websites built for performance, clarity, and conversion.",
    points: [
      "Premium design and UX",
      "Fast and scalable structure",
      "Built for SEO and AI visibility",
    ],
    accent: false,
  },
  {
    href: "/seo-services",
    icon: Search,
    eyebrow: "Visibility",
    title: "SEO",
    description: "Rank on Google and attract the right audience through structured content.",
    points: [
      "Technical SEO",
      "Keyword strategy",
      "Search intent optimization",
    ],
    accent: false,
  },
  {
    href: "/aeo-services",
    icon: Sparkles,
    eyebrow: "AI Answers",
    title: "AEO",
    description: "Structure your content so AI systems can use it as a direct answer.",
    points: [
      "Answer-focused content",
      "AI-friendly structure",
      "Schema and clarity optimization",
    ],
    accent: false,
  },
  {
    href: "/geo-services",
    icon: Globe2,
    eyebrow: "Recommendations",
    title: "GEO",
    description: "Position your business to be recommended by ChatGPT and modern AI systems.",
    points: [
      "Authority signals",
      "Content clarity",
      "AI recommendation positioning",
    ],
    accent: false,
  },
  {
    href: "/multilingual-web-design",
    icon: Languages,
    eyebrow: "Growth",
    title: "Multilingual Growth",
    description: "Reach new markets across languages and increase global visibility.",
    points: [
      "English, Spanish, Portuguese, Russian",
      "International SEO support",
      "Cross-market communication",
    ],
    accent: true,
  },
  {
    href: "/about",
    icon: Languages,
    eyebrow: "Trust",
    title: "Multilingual Authority",
    description:
      "A brand story backed by language skill, international experience, and business strategy.",
    points: [
      "Global perspective",
      "Language-driven positioning",
      "Founder credibility",
    ],
    accent: false,
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#030303] text-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_28%),linear-gradient(180deg,rgba(12,12,12,1),rgba(3,3,3,1))]" />
        <div className="absolute inset-0 -z-10 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />

        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/3 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-black/35 px-4 py-2 text-sm text-zinc-300"
            >
              <BadgeCheck className="h-4 w-4 text-[#d4af37]" />
              The JulTech Visibility System™
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl lg:text-6xl"
            >
              Everything You Need to Get Found, Answered, and Chosen
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300"
            >
              We build premium websites and visibility systems that help businesses rank on Google, appear in AI answers, and expand across languages and markets.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-3xl text-sm text-zinc-400"
            >
              Based in the U.S., serving clients across the U.S., Latin America, and Europe in multiple languages.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-linear-to-b from-white/5 to-white/3 px-6 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
              What we offer
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A system built for modern search and AI
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Each service works as part of one larger framework: design, search visibility, AI answers, recommendations, and multilingual expansion.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                  className={[
                    "group relative overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300",
                    service.accent
                      ? "border-[#d4af37]/20 bg-white/4.5"
                      : "border-white/10 bg-black/25",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4">
                      <Icon className="h-5 w-5 text-[#d4af37]" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                      {service.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[#d4af37]/20 bg-[#0a0a0a] px-6 py-12 shadow-[0_35px_140px_rgba(0,0,0,0.55)] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
              Next step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">
              Ready to build the right system for your brand?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Start with a project or request a free audit, and we will map the best path for your goals, market, and language needs.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
              >
                Start a Project
              </Link>
              <Link
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40"
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
