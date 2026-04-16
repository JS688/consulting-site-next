"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is the audit really free?",
    a: "Yes. The AI Visibility Audit is completely free and designed to show how your website performs across search engines and AI systems like ChatGPT. It highlights where your business may be missing visibility and how to improve it.",
  },
  {
    q: "What happens after I submit my website?",
    a: "After you submit your website, we analyze your visibility across Google (SEO), AI answers (AEO), and AI recommendations (GEO). Within 24–48 hours, you receive a breakdown of your current performance and key opportunities to improve.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "No. You don't need any technical or SEO experience. All insights are explained clearly, including how your website appears in search engines and AI tools, with simple next steps you can follow.",
  },
  {
    q: "What if I want help implementing this?",
    a: "If you want help improving your SEO, AEO, or GEO visibility, you can book a strategy call. We'll walk through how to apply these improvements and turn your website into a consistent client acquisition system.",
  },
  {
    q: "How long does the call take?",
    a: "The AI Visibility Strategy Call takes about 15 minutes. It's focused on reviewing your visibility across search and AI systems and outlining clear next steps.",
  },
  {
    q: "Do I need SEO, AEO, and GEO together?",
    a: "Yes. SEO helps your business get found on Google, AEO helps your content become the answer in AI systems, and GEO helps your business get recommended in AI-generated results. Together, they form a complete visibility system.",
  },
  {
    q: "Can my website appear in AI answers like ChatGPT?",
    a: "Yes. With the right structure, content, and optimization, your website can appear in AI-generated answers. This is part of Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO), which help AI systems understand and recommend your business.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-semibold md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-zinc-400">
          Clear answers to help you move forward with confidence.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/3 transition-all"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-medium">{faq.q}</span>
              <ChevronDown
                className={`shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              />
            </button>

            {openIndex === i && (
              <div className="px-6 pb-6 text-zinc-400">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
