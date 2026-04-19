"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the audit really free?",
    answer:
      "Yes. The AI Visibility Audit is completely free and designed to show where your business is missing visibility across search and AI.",
  },
  {
    question: "What happens after I submit my website?",
    answer:
      "You’ll receive a breakdown of your visibility and key opportunities within 24–48 hours.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. Everything is explained clearly, with actionable steps you can understand and apply.",
  },
  {
    question: "What if I want help implementing this?",
    answer:
      "You can book a strategy call and we’ll walk through how to apply these improvements to your business.",
  },
  {
    question: "How long does the call take?",
    answer:
      "About 15 minutes — focused, practical, and tailored to your business.",
  },
  {
    question: "Do I need SEO, AEO, and GEO together?",
    answer:
      "Yes. SEO helps you get found, AEO helps you become the answer, and GEO helps you get chosen by AI systems.",
  },
  {
    question: "Can my website appear in AI answers like ChatGPT?",
    answer:
      "Yes. With the right structure, content, and optimization, your website can appear in AI-generated answers.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#1b1d22] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-white">
            Frequently Asked Questions (FAQ)
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
