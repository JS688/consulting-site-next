"use client";

import { motion } from "framer-motion";
import { Globe2, Search, MessageSquareText, Sparkles } from "lucide-react";

const pyramidSteps = [
  {
    icon: Globe2,
    title: "Expand your reach",
    subtitle: "Multilingual SEO",
    desc: "Reach Spanish-speaking customers and move beyond a single-language market through search.",
  },
  {
    icon: MessageSquareText,
    title: "Increase visibility",
    subtitle: "AEO",
    desc: "Show up in both English and Spanish search journeys across Google and AI.",
  },
  {
    icon: Sparkles,
    title: "Get chosen by AI",
    subtitle: "GEO",
    desc: "Multilingual content gives AI systems the context they need to understand and recommend your business.",
  },
];

export default function MultilingualExpansionSection() {
  return (
    <section className="relative overflow-hidden bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_28%),linear-gradient(180deg,rgba(10,10,10,1),rgba(3,3,3,1))]" />

      <div className="mx-auto max-w-7xl">

        {/* Styled Multilingual Visibility header with globe icon */}
        <div className="mx-auto max-w-4xl pt-4 text-center lg:pt-6">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-black/35 px-4 py-2 text-sm text-zinc-300 shadow-[0_0_40px_rgba(212,175,55,0.06)]">
            <Globe2 className="h-5 w-5 text-[#d4af37]" />
            Multilingual Visibility
          </div>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl lg:text-5xl">
            Expand Into New Markets
          </h2>
          <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
            DON'T MISS THIS OPPORTUNITY
          </p>
        </div>

        {/* reserve space for the animation you want to insert later */}
      


        {/* Horizontal Pillars Section */}

        <div className="relative mt-6 flex flex-col items-center">
          <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
            {/* Pillar 1 */}
            <div className="flex flex-col h-full">
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-[#d4af37] bg-black/60 px-6 py-8 text-center shadow-[0_0_30px_rgba(212,175,55,0.10)] min-h-[220px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/20 bg-black/35 shadow-[0_0_30px_rgba(212,175,55,0.08)] mb-3 mx-auto">
                  <Globe2 className="h-6 w-6 text-[#d4af37]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-1">Multilingual SEO</p>
                <h4 className="text-lg font-semibold text-white mb-1">Expand your reach</h4>
                <p className="text-sm text-zinc-400">Reach Spanish-speaking customers and move beyond a single-language market through search.</p>
              </div>
            </div>
            {/* Pillar 2 */}
            <div className="flex flex-col h-full">
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-[#d4af37] bg-black/60 px-6 py-8 text-center shadow-[0_0_30px_rgba(212,175,55,0.10)] min-h-[220px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/20 bg-black/35 shadow-[0_0_30px_rgba(212,175,55,0.08)] mb-3 mx-auto">
                  <MessageSquareText className="h-6 w-6 text-[#d4af37]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-1">AEO</p>
                <h4 className="text-lg font-semibold text-white mb-1">Increase visibility</h4>
                <p className="text-sm text-zinc-400">Show up in both English and Spanish search journeys across Google and AI.</p>
              </div>
            </div>
            {/* Pillar 3 */}
            <div className="flex flex-col h-full">
              <div className="flex flex-1 flex-col justify-between rounded-2xl border border-[#d4af37] bg-black/60 px-6 py-8 text-center shadow-[0_0_30px_rgba(212,175,55,0.10)] min-h-[220px]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37]/20 bg-black/35 shadow-[0_0_30px_rgba(212,175,55,0.08)] mb-3 mx-auto">
                  <Sparkles className="h-6 w-6 text-[#d4af37]" />
                </div>
                <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500 mb-1">GEO</p>
                <h4 className="text-lg font-semibold text-white mb-1">Get chosen by AI</h4>
                <p className="text-sm text-zinc-400">Multilingual content gives AI systems the context they need to understand and recommend your business.</p>
              </div>
            </div>
          </div>
        </div>
        <p className="mt-12 text-center text-base text-zinc-300">
          Your business needs to show up, answer, and be chosen.
        </p>
      </div>
    </section>
  );
}

