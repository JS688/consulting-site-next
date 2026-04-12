"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const businessName = "JulTech AI Consulting Group LLC";

const faqItems = [
  {
    question: "What services do you offer?",
    answer:
      "We offer premium web design, SEO, AEO, GEO, and multilingual website strategy for businesses that want to grow across search and AI platforms.",
  },
  {
    question: "What is AEO and how does it help my business?",
    answer:
      "AEO (Answer Engine Optimization) structures your content so AI systems and voice assistants can deliver your website as a direct answer to user questions.",
  },
  {
    question: "What is GEO and why is it important?",
    answer:
      "GEO (Generative Engine Optimization) helps your business get recommended by AI systems like ChatGPT and Gemini, increasing visibility beyond traditional search results.",
  },
  {
    question: "Do you work with businesses outside the U.S.?",
    answer:
      "Yes. We work with businesses across the U.S., Latin America, and Europe in multiple languages.",
  },
  {
    question: "Can my website appear in AI answers?",
    answer:
      "Yes. Clear structure, strong content, and schema markup help AI systems understand and use your content as a direct answer.",
  },
  {
    question: "Do you build multilingual websites?",
    answer:
      "Yes. We build multilingual websites that help brands communicate clearly across different markets and expand their reach.",
  },
  {
    question: "Do I need SEO, AEO, and GEO together?",
    answer:
      "Yes. SEO helps you get found, AEO helps you become the answer, and GEO helps you get chosen by AI systems.",
  },
  {
    question: "How long does SEO take?",
    answer:
      "SEO usually builds over time, but early improvements in structure, clarity, and visibility can start sooner.",
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
  name: businessName,
  areaServed: ["United States", "Latin America", "Europe"],
  serviceType: "Web Design, SEO, AEO, GEO, Multilingual Strategy",
  description:
    "Premium websites designed to rank on Google, surface in AI answers, and convert attention into qualified leads across multilingual markets.",
};

const serviceLinks = [
  { href: "/web-design", label: "Web Design" },
  { href: "/seo-services", label: "SEO" },
  { href: "/aeo-services", label: "AEO" },
  { href: "/geo-services", label: "GEO" },
  { href: "/multilingual-web-design", label: "Multilingual Web Design" },
];

export default function GlobalServicesFaqSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-6 md:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%),linear-gradient(180deg,rgba(17,17,18,1),rgba(3,3,3,1))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px] opacity-[0.16]" />

      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/3 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">
            Common Questions About SEO, AEO, and GEO
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
            Clear answers help both people and AI systems understand what you do.
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

        <div className="mx-auto mt-12 max-w-4xl text-center">
          <h3 className="text-lg font-semibold text-white">
            Based in the USA, serving clients across the U.S., Latin America, and Europe
          </h3>
          <p className="mt-3 text-base text-zinc-300 sm:text-lg">
            We work with businesses across multiple markets, delivering multilingual web design, SEO, AEO, and GEO strategies built for modern search and international growth.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {serviceLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm font-medium text-[#d4af37] shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:border-[#d4af37]/40 hover:bg-white/6 hover:shadow-[0_14px_36px_rgba(212,175,55,0.1)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}