"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  bullets?: string[];
};

const faqs = [
  {
    question: "What is AI consulting and how can it help my business?",
    answer:
      "AI consulting helps businesses use artificial intelligence to improve efficiency, automate processes, and increase revenue. This can include automation, data analysis, and AI-driven tools tailored to your operations.",
  },
  {
    question: "How can my business show up in Google and AI search results?",
    answer:
      "To appear in Google and AI-generated answers, your website needs strong content, clear structure, and authority. We optimize your site for SEO and AI visibility (AEO/GEO) so it can be discovered by both search engines and AI tools.",
  },
  {
    question: "What is the difference between SEO and AI SEO (AEO)?",
    answer:
      "SEO focuses on ranking in Google search results. AI SEO (AEO - Answer Engine Optimization) focuses on getting your business mentioned in AI-generated answers like ChatGPT, Perplexity, and Google AI Overviews.",
  },
  {
    question: "How long does it take to see results from SEO or AI optimization?",
    answer:
      "Most websites see initial improvements within 2-8 weeks, while strong rankings typically take 2-3 months or more, depending on competition and your starting point.",
  },
  {
    question: "Do I need a new website to rank on Google?",
    answer:
      "No. In most cases, your existing website can be optimized with better structure, content, and targeting without rebuilding it from scratch.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with businesses across multiple industries, especially those looking to implement AI, automation, or digital growth strategies.",
  },
  {
    question: "What happens during a consultation?",
    answer:
      "During the consultation, we analyze your business, website, and goals, then provide clear recommendations and a strategy you can implement immediately.",
  },
  {
    question: "Can you implement the strategy for me?",
    answer:
      "Yes. In addition to consulting, we offer done-for-you implementation and ongoing support if needed.",
  },
  {
    question: "What are the most important factors for ranking on Google?",
    answer: "The key factors include:",
    bullets: [
      "high-quality content",
      "relevant keywords",
      "website structure",
      "backlinks and authority",
      "We focus on all of these to improve your visibility.",
    ],
  },
  {
    question: "Can my business appear in ChatGPT or AI tools?",
    answer:
      "Yes. By structuring your content properly and building authority, your business can be referenced in AI-generated answers, not just traditional search results.",
  },
  {
    question: "How much does AI consulting cost?",
    answer:
      "Pricing depends on the scope of the project and level of support. Consultations and custom packages are available based on your needs.",
  },
  {
    question: "Why choose JulTech for AI consulting?",
    answer:
      "JulTech focuses on practical AI implementation, real business results, and long-term visibility, combining SEO, AI optimization, and strategy into one approach.",
  },
] satisfies FAQItem[];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: [faq.answer, ...(faq.bullets ?? [])].join(" "),
    },
  })),
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#1b1d22] px-6 py-24 text-white md:px-10 lg:px-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white">
            SEO + AI Optimized FAQ
          </p>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <button
              key={faq.question}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className={[
                "group w-full rounded-3xl border p-0 text-left transition-all duration-300",
                "bg-white/3 hover:border-blue-400/30",
                isOpen
                  ? "border-blue-400/40 shadow-[0_0_28px_rgba(59,130,246,0.16)]"
                  : "border-white/10",
              ].join(" ")}
            >
              <div className="px-6 py-5 md:px-7">
                <div className="flex items-center gap-4">
                  <span
                    className={[
                      "h-2.5 w-2.5 rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-blue-400 shadow-[0_0_14px_rgba(59,130,246,0.55)]"
                        : "bg-zinc-500",
                    ].join(" ")}
                  />
                  <span className="flex-1 text-sm font-medium uppercase tracking-[0.22em] text-[#d4af37] md:text-[0.95rem]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={[
                      "h-5 w-5 text-[#d4af37] transition-transform duration-300",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                  />
                </div>

                <div
                  className={[
                    "grid transition-all duration-300",
                    isOpen ? "grid-rows-[1fr] pt-5" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="pl-6 text-base leading-8 text-zinc-300 md:text-lg">
                      {faq.answer}
                    </p>
                    {faq.bullets ? (
                      <ul className="list-disc space-y-2 pl-12 pt-4 text-base leading-8 text-zinc-300 md:text-lg">
                        {faq.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
