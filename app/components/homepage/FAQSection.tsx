"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
  bullets?: string[];
};

const faqs: FAQItem[] = [
  {
    question: "What is AI Visibility Optimization?",
    answer:
      "AI Visibility Optimization is the process of structuring and optimizing your website so it can be found in Google search results and recommended by AI tools like ChatGPT.",
  },
  {
    question: "How can my business show up in Google search results and AI tools like ChatGPT?",
    answer:
      "Your website must be properly structured, optimized for search queries, and easy for AI systems to understand. This includes strong SEO, clear content, and alignment with real customer searches.",
  },
  {
    question: "How does ChatGPT decide which businesses to recommend?",
    answer:
      "ChatGPT recommends businesses based on how clearly a website is structured, how well it matches user queries, and how easy the content is to understand. Websites optimized for SEO and AI have a higher chance of being recommended.",
  },
  {
    question: "What is the difference between SEO and AI SEO (AEO)?",
    answer:
      "SEO focuses on ranking in Google search results, while AI SEO (AEO) focuses on making your content understandable and recommendable by AI tools like ChatGPT. Both work together to improve visibility.",
  },
  {
    question: "How long does it take to see results from SEO and AI optimization?",
    answer:
      "Results typically take a few weeks to months depending on your website and competition. Improvements to structure and content can begin affecting visibility relatively quickly.",
  },
  {
    question: "Do I need a new website to rank in Google and AI search?",
    answer:
      "Not always. Many websites can be optimized without a full rebuild. However, in some cases, redesigning can improve performance and long-term visibility.",
  },
  {
    question: "What industries benefit from AI visibility optimization?",
    answer:
      "Local businesses, restaurants, service providers, real estate professionals, and small businesses benefit the most. Any business that relies on being found online can improve visibility with SEO and AI optimization.",
  },
  {
    question: "What happens during an AI visibility consultation?",
    answer:
      "During a consultation, we review your website, identify gaps in SEO and AI visibility, and explain how your business can improve its presence in search results and AI recommendations.",
  },
  {
    question: "Do you implement SEO and AI optimization strategies?",
    answer:
      "Yes. We provide both strategy and implementation, including website optimization, content improvements, and SEO enhancements for better Google and AI visibility.",
  },
  {
    question: "What are the most important factors for ranking on Google and AI search?",
    answer:
      "Key factors include website structure, content clarity, keyword alignment, user experience, and how easily your business information can be understood by search engines and AI systems.",
  },
  {
    question: "Can my business appear in ChatGPT or AI-generated recommendations?",
    answer:
      "Yes. Businesses can appear in AI-generated results if their websites are properly structured, optimized for search, and aligned with how AI systems interpret and recommend content.",
  },
  {
    question: "Do you work with businesses in Columbia, SC?",
    answer:
      "Yes, we work with businesses in Columbia, South Carolina and help local companies improve their visibility in Google search results and AI platforms like ChatGPT.",
  },
  {
    question: "How much does AI consulting cost for small businesses?",
    answer:
      "Costs vary depending on your needs and website condition. Most services are tailored based on your goals, competition, and visibility requirements.",
  },
  {
    question: "Why choose JulTech for AI visibility optimization?",
    answer:
      "JulTech focuses on practical SEO and AI optimization strategies that improve real business outcomes. We help businesses become more visible in Google search results and AI platforms like ChatGPT through structured, results-driven approaches.",
  },
];

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
    <section id="faq" className="bg-[#1b1d22] px-6 py-24 text-white md:px-10 lg:px-16">
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
