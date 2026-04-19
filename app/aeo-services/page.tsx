"use client";

import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

const faqItems = [
  {
    question: "Why does bilingual web design matter?",
    answer:
      "Bilingual web design helps your business reach both English and Spanish-speaking customers with a clear, accessible website that supports visibility and conversions.",
  },
  {
    question: "Can a bilingual website help with SEO?",
    answer:
      "Yes. A bilingual website can improve search visibility by targeting relevant keywords in both languages and helping your business reach more qualified traffic.",
  },
  {
    question: "Do you offer bilingual web design in Columbia, SC?",
    answer:
      "Yes. We design bilingual websites for businesses in Columbia, SC and also work with clients nationwide.",
  },
  {
    question: "Can bilingual content help with AI answers?",
    answer:
      "Yes. Clear bilingual content helps AI systems better understand your business and increases the chances of your pages being surfaced and recommended.",
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
  name: "Bilingual Web Design in Columbia, SC",
  areaServed: ["Columbia, SC", "United States"],
  serviceType: "Bilingual Web Design, SEO, AEO, GEO",
  description:
    "Bilingual web design services built to reach English and Spanish-speaking customers, improve search visibility, and support AI discovery.",
};

export default function AeoServicesPage() {
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
          AEO Services
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">
          Answer Engine Optimization
        </h1>

        <p className="mt-6 text-lg leading-8 text-zinc-300">
          We help businesses structure their content so AI systems, voice assistants, and answer engines can understand, quote, and recommend it.
        </p>

        <p className="mt-3 text-sm text-zinc-400">
          Based in the U.S., serving clients across the U.S., Latin America, and Europe in multiple languages.
        </p>

        <h2 className="mt-12 text-2xl font-semibold text-white">
          Built for AI Answers
        </h2>

        <p className="mt-4 text-zinc-300">
          AEO helps your website become the direct answer when people ask questions through AI tools and voice search. We organize your content so it is clear, concise, and easy for machines to understand.
        </p>

        <div className="mt-8 space-y-4 text-zinc-300">
          <p>• Direct-answer content that AI systems can extract</p>
          <p>• Clear page structure for better machine understanding</p>
          <p>• Schema markup and supporting signals for visibility</p>
          <p>• Content strategy aligned with user questions</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/web-design" className="text-[#d4af37]">
            Web Design
          </a>
          <a href="/seo-services" className="text-[#d4af37]">
            SEO Services
          </a>
          <a href="/multilingual-web-design" className="text-[#d4af37]">
            Bilingual Web Design
          </a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">AEO FAQ</h2>

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
            contextLabel="AEO project"
            title="Tell us about your AEO project"
            description="Share how you want your business to appear in AI answers, then continue through payment and choose the right consultation time."
            sessionType="full"
            interestLabel="AEO Services"
          />
        </section>
      </div>
    </main>
  );
}