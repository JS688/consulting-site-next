"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe2, MessageSquareText, Sparkles, Languages, ChevronDown } from "lucide-react";

const languages = ["English", "Spanish"];

const faqItems = [
  {
    question: "What is multilingual web design?",
    answer:
      "Bilingual web design is the process of building websites that communicate clearly across multiple languages while supporting search visibility, AI understanding, and conversion.",
  },
  {
    question: "Why is multilingual web design important?",
    answer:
      "It helps your business reach more audiences, communicate with more clarity, and expand into new markets without losing brand consistency.",
  },
  {
    question: "Can multilingual websites help SEO?",
    answer:
      "Yes. Bilingual websites can improve visibility across different language searches and help search engines understand your international audience.",
  },
  {
    question: "Can multilingual content help AI answers?",
    answer:
      "Yes. Clear multilingual structure gives AI systems more context to understand, quote, and recommend your business.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. We work with businesses across the U.S., Latin America, and Europe in multiple languages.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Bilingual Web Design",
  areaServed: ["United States", "Latin America", "Europe"],
  serviceType: "Bilingual Web Design, SEO, AEO, GEO",
  description:
    "Bilingual web design services built to help businesses reach English and Spanish-speaking audiences across search and AI platforms.",
};

const services = [
  {
    title: "Web Design",
    subtitle: "Foundation",
    desc: "Custom-coded websites built for performance, clarity, and conversion.",
    points: [
      "Premium design and UX",
      "Fast and scalable structure",
      "Built for SEO and AI visibility",
    ],
  },
  {
    title: "SEO",
    subtitle: "Search Visibility",
    desc: "Rank on Google and attract the right audience through structured content.",
    points: [
      "Technical SEO",
      "Keyword strategy",
      "Search intent optimization",
    ],
  },
  {
    title: "AEO",
    subtitle: "AI Answers",
    desc: "Structure your content so AI systems can use it as a direct answer.",
    points: [
      "Answer-focused content",
      "AI-friendly structure",
      "Schema and clarity optimization",
    ],
  },
  {
    title: "GEO",
    subtitle: "AI Recommendations",
    desc: "Position your business to be recommended by ChatGPT and modern AI systems.",
    points: [
      "Authority signals",
      "Content clarity",
      "AI recommendation positioning",
    ],
  },
  {
    title: "Bilingual Growth",
    subtitle: "Expansion",
    desc: "Reach new markets across languages and increase global visibility.",
    points: [
      "English and Spanish support",
      "International SEO",
      "Cross-market strategy",
    ],
  },
];

export default function BilingualWebDesignPage() {
  return (
    <main className="bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.25rem] border border-white/10 bg-white/3 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.4 }}
            className="max-w-4xl"
          >
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
              Bilingual Web Design
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl lg:text-6xl">
              The JulTech Visibility System for Services
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              We design premium multilingual websites that help businesses reach
              more people, communicate more clearly, and grow across search and
              AI platforms.
            </p>

            <p className="mt-3 max-w-3xl text-sm text-zinc-400">
              Based in the U.S., serving clients across the U.S., Latin America,
              and Europe in multiple languages.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-white/10 bg-black/25 p-7 flex flex-col h-full shadow-lg">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">{service.subtitle}</div>
                <h2 className="text-xl font-bold text-white mb-2">{service.title}</h2>
                <p className="mb-4 text-zinc-300">{service.desc}</p>
                <ul className="mb-0 space-y-2 text-sm text-zinc-300 list-disc list-inside">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/web-design" className="text-[#d4af37]">
              Web Design
            </Link>
            <Link href="/seo-services" className="text-[#d4af37]">
              SEO Services
            </Link>
            <Link href="/aeo-services" className="text-[#d4af37]">
              AEO Services
            </Link>
            <Link href="/geo-services" className="text-[#d4af37]">
              GEO Services
            </Link>
          </div>
        </div>

        <section className="mt-16 rounded-[2.25rem] border border-white/10 bg-white/3 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">
              Common Questions About Bilingual Web Design
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Clear answers help both people and AI systems understand how
              multilingual websites support growth.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-4">
              {faqItems.map((item, index) => (
                <motion.details
                  key={item.question}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group rounded-[1.25rem] border border-white/10 bg-black/25 p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-medium text-white">
                      {item.question}
                    </span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#d4af37] transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    {item.answer}
                  </p>
                </motion.details>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl text-center">
            <h3 className="text-lg font-semibold text-white">
              Ready to expand into new markets?
            </h3>
            <p className="mt-3 text-sm text-zinc-300">
              Start a project to see how multilingual web design can help your
              brand grow across languages and markets.
            </p>

            <div className="mt-6 flex items-center justify-center">
              <Link
                href="/contact"
                className="rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

