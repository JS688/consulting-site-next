"use client";

import React from "react";

const faqItems = [
  {
    question: "What do SEO services include?",
    answer:
      "SEO services include technical optimization, keyword strategy, content structure, internal linking, and performance improvements that help your website rank on Google.",
  },
  {
    question: "Can SEO help with AI visibility?",
    answer:
      "Yes. Modern SEO supports AI visibility by making your content clearer, more structured, and easier for AI systems to understand and reference.",
  },
  {
    question: "Do you work with multilingual businesses?",
    answer:
      "Yes. We work with businesses across the U.S., Latin America, and Europe in multiple languages.",
  },
  {
    question: "Do I still need SEO if I already have a website?",
    answer:
      "Yes. A website without SEO is often hard to find. SEO helps your content get discovered, understood, and chosen.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO usually builds over time, but improvements in structure, clarity, and performance can start helping sooner.",
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
  name: "SEO Services",
  areaServed: ["United States", "Latin America", "Europe"],
  serviceType: "SEO, AEO, GEO",
  description:
    "Premium SEO services designed to improve rankings, support AI visibility, and help brands grow across languages and markets.",
};

export default function SeoServicesPage() {
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

      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">
          SEO Services
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">
          Search + AI Visibility
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          We help businesses rank on Google, appear in AI-generated answers, and build visibility across multilingual markets.
        </p>

        <p className="mt-3 text-sm text-zinc-400">
          Based in the U.S., serving clients across the U.S., Latin America, and Europe in multiple languages.
        </p>

        <section className="mt-12 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            SEO That Extends Into AI Visibility
          </h2>

          <p className="mt-4 max-w-3xl text-zinc-300">
            Our approach combines technical SEO, content strategy, and internal linking so your business can be understood by both search engines and AI systems. The goal is simple: help the right people find you, trust you, and choose you.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">
                Technical SEO
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Improve speed, indexing, crawlability, and overall site performance.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">
                Search Intent Strategy
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Align pages with the questions and problems your audience is actually searching for.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">
                AI-Friendly Structure
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Organize content so AI systems can understand, quote, and recommend it.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">
                Bilingual Growth
              </h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Expand reach across languages and markets with SEO built for international visibility.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/web-design" className="text-[#d4af37]">
              Web Design
            </a>
            <a href="/aeo-services" className="text-[#d4af37]">
              AEO Services
            </a>
            <a href="/geo-services" className="text-[#d4af37]">
              GEO Services
            </a>
            <a href="/multilingual-web-design" className="text-[#d4af37]">
              Bilingual Web Design
            </a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">SEO FAQ</h2>

          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-medium text-white">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-[#d4af37]/20 bg-[#0a0a0a] px-6 py-12 shadow-[0_35px_140px_rgba(0,0,0,0.45)] sm:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">
              Ready to Improve Your Search Visibility?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              Start a project or request a free audit to see how your business can grow through stronger rankings, AI visibility, and multilingual strategy.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
              >
                Start a Project
              </a>
              <a
                href="/free-audit"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40"
              >
                Get Free Audit
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}