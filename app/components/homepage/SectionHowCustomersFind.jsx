"use client";

import { motion } from "framer-motion";
import { Search, MessageSquareText, Sparkles, Globe2 } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search Visibility",
    subtitle: "Google",
    desc: "SEO helps your website rank on Google so customers can find your business when they search for your services",
    label: "SEO",
  },
  {
    icon: MessageSquareText,
    title: "AI Voice Optimization",
    subtitle: "AI Voice",
    desc: "AEO structures your content so AI tools and voice assistants can understand and deliver it as a direct answer",
    label: "AEO",
  },
  {
    icon: Sparkles,
    title: "AI Recommendations",
    subtitle: "AI Systems",
    desc: "GEO positions your business to be recommended by AI systems like ChatGPT, Gemini, and other modern assistants",
    label: "GEO",
  },
  {
    icon: Globe2,
    title: "Global Visibility",
    subtitle: "Multilingual",
    desc: "Multilingual visibility helps your business expand into new markets across search and AI platforms",
    label: "Multilingual",
  },
];



const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

// Restore itemVariants for header/subheader
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const popOutVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 32, duration: 0.55 },
  },
};

export default function VisibilityFlowSection() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#030303] px-4 py-16 text-white sm:px-6 md:px-8 lg:px-12 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_24%),linear-gradient(180deg,rgba(12,12,12,1),rgba(3,3,3,1))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />
      <div className="mx-auto max-w-7xl">
       
        {/* Divider animation above The JulTech Visibility System™ */}

        <motion.div
          className="mx-auto max-w-4xl pt-4 text-center lg:pt-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.45 }}
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-black/35 px-4 py-2 text-sm text-zinc-300 shadow-[0_0_40px_rgba(212,175,55,0.06)]"
          >
            The JulTech Visibility System™
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mx-auto mt-6 max-w-4xl text-center text-2xl font-bold leading-tight tracking-[-0.01em] text-[#d4af37] sm:text-2xl lg:text-3xl xl:text-4xl"
          >
            The System Behind Visibility and AI Selection
          </motion.h2>
        </motion.div>


        {/* Four Pillars Grid System - Connected, Numbered, Sharper Descriptions */}
        <div className="mt-12 w-full relative">


          {/* Connecting line behind cards */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#d4af37]/20 to-transparent md:block z-0 w-full" />
          <motion.div
            className="relative grid grid-cols-1 gap-8 md:grid-cols-4 items-stretch w-full z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            {/* Pillar 1: Search Visibility */}
            <motion.div
              variants={popOutVariants}
              className="flex flex-1 flex-col items-center text-center px-2"
            >
              <div className="relative flex h-full w-full flex-col items-center rounded-xl border border-[#d4af37]/30 bg-black/40 p-6 shadow-lg">
                <p className="text-[11px] tracking-[0.4em] text-zinc-500 mb-2">01</p>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-black/50 mb-4">
                  <Search className="h-7 w-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Search Visibility</h3>
                <p className="text-[0.98rem] text-zinc-300 leading-6 min-h-[56px] flex items-center justify-center">SEO helps your business rank on Google when customers search for your services.</p>
              </div>
            </motion.div>
            {/* Pillar 2: AI Voice Optimization */}
            <motion.div
              variants={popOutVariants}
              className="flex flex-1 flex-col items-center text-center px-2"
            >
              <div className="relative flex h-full w-full flex-col items-center rounded-xl border border-[#d4af37]/30 bg-black/40 p-6 shadow-lg">
                <p className="text-[11px] tracking-[0.4em] text-zinc-500 mb-2">02</p>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-black/50 mb-4">
                  <MessageSquareText className="h-7 w-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">AI Voice Optimization</h3>
                <p className="text-[0.98rem] text-zinc-300 leading-6 min-h-[56px] flex items-center justify-center">AEO makes your content the answer for AI tools and voice assistants.</p>
              </div>
            </motion.div>
            {/* Pillar 3: AI Recommendations */}
            <motion.div
              variants={popOutVariants}
              className="flex flex-1 flex-col items-center text-center px-2"
            >
              <div className="relative flex h-full w-full flex-col items-center rounded-xl border border-[#d4af37]/30 bg-black/40 p-6 shadow-lg">
                <p className="text-[11px] tracking-[0.4em] text-zinc-500 mb-2">03</p>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-black/50 mb-4">
                  <Sparkles className="h-7 w-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">AI Recommendations</h3>
                <p className="text-[0.98rem] text-zinc-300 leading-6 min-h-[56px] flex items-center justify-center">GEO gets your business recommended by ChatGPT, Gemini, and other AI systems.</p>
              </div>
            </motion.div>
            {/* Pillar 4: Multilingual Visibility */}
            <motion.div
              variants={popOutVariants}
              className="flex flex-1 flex-col items-center text-center px-2"
            >
              <div className="relative flex h-full w-full flex-col items-center rounded-xl border border-[#d4af37]/30 bg-black/40 p-6 shadow-lg">
                <p className="text-[11px] tracking-[0.4em] text-zinc-500 mb-2">04</p>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-black/50 mb-4">
                  <Globe2 className="h-7 w-7 text-[#d4af37]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">Multilingual Visibility</h3>
                <p className="text-[0.98rem] text-zinc-300 leading-6 min-h-[56px] flex items-center justify-center">Reach more customers and new markets across search and AI platforms.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>

    {/* Framework summary line - now just above CTA, with tighter spacing */}
    <p className="mt-6 mb-2 text-center text-sm text-zinc-400">
      Your business needs to show up, answer, and be chosen.
    </p>

    {/* Start a Project CTA - below the summary line, with tighter spacing */}
    <div className="mb-6 flex justify-center">
      <a
        href="/contact"
        className="inline-block rounded-full bg-[#d4af37] px-7 py-3 text-base font-semibold text-black shadow-lg transition hover:bg-[#bfa13a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]/70 focus-visible:ring-offset-2"
      >
        Start Building Your Visibility System &rarr;
      </a>
    </div>    
    </>
  );
}
