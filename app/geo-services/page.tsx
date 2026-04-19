"use client";

import React from "react";
import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

const faqItems = [
  {
    question: "What is GEO?",
    answer:
      "GEO, or Generative Engine Optimization, is the process of structuring your website and content so AI systems like ChatGPT and Gemini can understand, reference, and recommend your business.",
  },
  {
    question: "Why is GEO important?",
    answer:
      "GEO is important because more people are using AI tools to discover businesses, compare options, and get recommendations instead of relying only on traditional search results.",
  },
  {
    question: "How does GEO help my business?",
    answer:
      "GEO helps your business become more visible in AI-generated recommendations by making your content clearer, more authoritative, and easier for AI systems to interpret.",
  },
  {
    question: "Do you offer GEO services for international businesses?",
    answer:
      "Yes. We work with businesses across the U.S., Latin America, and Europe in multiple languages.",
  },
  {
    question: "Do I still need SEO and AEO if I have GEO?",
    answer:
      "Yes. SEO helps people find your site, AEO helps AI systems use your content as an answer, and GEO helps your business get recommended by AI systems. They work best together.",
  },
  {
    question: "How long does GEO take to work?",
    answer:
      "GEO improves as your website becomes clearer, more structured, and more authoritative. Stronger results build over time as your content and signals improve.",
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
  name: "GEO Services",
  areaServed: ["United States", "Latin America", "Europe"],
  serviceType: "Generative Engine Optimization",
  description:
    "GEO services designed to help businesses get recommended by AI systems through clear structure, strong authority, and multilingual visibility.",
};

export default function GeoServicesPage() {
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
          GEO Services
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">
          Generative Engine Optimization
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          We help businesses become more visible in AI-generated recommendations by structuring content for clarity, authority, and machine understanding.
        </p>

        <p className="mt-3 text-sm text-zinc-400">
          Based in the U.S., serving clients across the U.S., Latin America, and Europe in multiple languages.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-white">
          Built for AI Recommendations
        </h2>

        <p className="mt-4 text-zinc-300">
          GEO helps your business show up when AI systems recommend options, summarize solutions, or compare service providers. We make your content easier for AI to understand and trust.
        </p>

        <div className="mt-8 space-y-4 text-zinc-300">
          <p>• Content structured for AI recommendation systems</p>
          <p>• Strong authority signals across your website</p>
          <p>• Bilingual visibility for broader market reach</p>
          <p>• Clear positioning that supports AI understanding</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/web-design" className="text-[#d4af37]">
            Web Design
          </a>
          <a href="/seo-services" className="text-[#d4af37]">
            SEO Services
          </a>
          <a href="/aeo-services" className="text-[#d4af37]">
            AEO Services
          </a>
          <a href="/multilingual-web-design" className="text-[#d4af37]">
            Bilingual Web Design
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">GEO FAQ</h2>

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
        </div>

        <section className="mt-16">
          <ProjectBookingFlow
            contextLabel="GEO project"
            title="Tell us about your GEO project"
            description="Share where your brand needs stronger AI visibility, then continue through payment and choose your consultation time."
            sessionType="full"
            interestLabel="GEO Services"
          />
        </section>
      </div>
    </main>
  );
}