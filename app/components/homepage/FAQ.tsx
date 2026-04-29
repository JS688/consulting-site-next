"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How do I get my business to show up in ChatGPT or AI tools?",
    answer:
      "To appear in AI tools like ChatGPT, your website needs to be clearly structured, contain relevant content, and provide accurate information about your services. We optimize your site so AI systems can understand and recommend your business.",
  },
  {
    question: "What is SEO and why does it matter for my business?",
    answer:
      "SEO (Search Engine Optimization) helps your website appear in Google search results when customers search for your services. Better SEO means more visibility, traffic, and leads.",
  },
  {
    question: "Can my business appear in both Google and AI search results?",
    answer:
      "Yes. By improving your website structure, content, and data, your business can rank in Google search and be recommended in AI tools like ChatGPT and Perplexity.",
  },
  {
    question: "Do I need a new website or can you improve my current one?",
    answer:
      "We can do both. Whether you need a new website or want to improve your existing one, we optimize it so it performs better in search and attracts more customers.",
  },
  {
    question: "How long does it take to see results from SEO and AI optimization?",
    answer:
      "Most businesses start seeing improvements within a few weeks, with stronger results developing over a few months depending on competition and website condition.",
  },
  {
    question: "What types of businesses do you work with?",
    answer:
      "We work with local businesses such as restaurants, contractors, realtors, and service providers who want to improve their visibility on Google and in AI search tools.",
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

export default function GlobalServicesFaqSection() {
  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-20 text-white sm:px-6 md:px-8 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%),linear-gradient(180deg,rgba(17,17,18,1),rgba(3,3,3,1))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />

      <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/3 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 lg:p-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">
            FAQ
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-sm font-medium text-white/70 sm:text-base">
            Still have questions? Here are some of the most common ones:
          </p>
          <h2 className="mt-4 text-xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
            Clear answers about SEO, AI visibility, and how your website can turn search into customers.
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
                  <span className="text-sm font-medium text-white sm:text-base">
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
      </div>
    </section>
  );
}