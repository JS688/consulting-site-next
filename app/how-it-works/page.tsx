import type { Metadata } from "next";
import SectionHowCustomersFind from "../components/homepage/SectionHowCustomersFind";
import FAQSection from "../components/homepage/FAQSection";

export const metadata: Metadata = {
  title: "How AI Search Works | JulTech™ AI",
  description:
    "Learn how AI search works, how businesses get found in Google and ChatGPT, and what AI Visibility Optimization means for your business.",
  keywords: [
    "how AI search works",
    "AI visibility optimization",
    "how to show up in ChatGPT",
    "how to rank on Google",
    "SEO explained",
    "AEO",
    "AI recommendation",
    "findable understandable recommendable",
  ],
  alternates: {
    canonical: "/how-it-works",
  },
  openGraph: {
    title: "How AI Search Works | JulTech™ AI",
    description:
      "How does AI search work? Learn the 4-step process from customer search to AI recommendation — and how to make your business appear.",
    url: "/how-it-works",
    images: ["/logo.png"],
  },
};

export default function HowItWorksPage() {
  return (
    <main className="bg-black text-white">
      {/* PAGE INTRO */}
      <section className="relative bg-black px-6 pb-0 pt-24 text-center md:px-12 md:pt-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.07),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d4af37]/80">
            Education
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-6xl">
            How It Works
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/55 md:text-lg">
            How does AI search actually work? Why does your competitor show up and you don&apos;t?
            This page answers every question.
          </p>
        </div>
      </section>

      {/* 1. How AI Search Works
          2. Full 4-step process
          3. Outcome explanation
          4. Definition: What is AI Visibility Optimization?
          5. Findable / Understandable / Recommendable
          6. Before / After example */}
      <SectionHowCustomersFind />

      {/* 7. FAQ */}
      <FAQSection />
    </main>
  );
}
