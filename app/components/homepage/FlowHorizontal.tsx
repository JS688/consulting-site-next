"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Star, UserRound, Workflow } from "lucide-react";

const steps = [
  { number: "01", label: "Customer\nsearch", icon: UserRound },
  { number: "02", label: "Structured\nwebsite", icon: Workflow },
  { number: "03", label: "Search engine\nunderstanding", icon: Search },
  { number: "04", label: "AI\nrecommendation", icon: Star },
];

export default function FlowHorizontal() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="flex w-full max-w-152 flex-col items-center">
      <p className="mb-8 text-center text-[11px] font-semibold uppercase tracking-[0.28em] text-[#d4af37]/78">
        How AI Search and Recommendations Work
      </p>

      <div className="grid w-full grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)_72px_minmax(0,1fr)_72px_minmax(0,1fr)] items-start" onMouseLeave={() => setActive(null)}>
        {steps.map(({ number, label, icon: Icon }, index) => (
          <div key={number} className="contents">
            <div
              onMouseEnter={() => setActive(index)}
              className="group flex cursor-pointer flex-col items-center text-center transition-all duration-300 hover:scale-[1.03]"
            >
              <p className="mb-3 text-[10px] font-semibold tracking-[0.26em] text-[#d4af37]/78">
                {number}
              </p>
              <div
                className={`relative flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                  active === index
                    ? "border-[#d4af37]/65 bg-[#d4af37]/12 text-[#f4cf62] shadow-[0_0_22px_rgba(212,175,55,0.22)]"
                    : "border-[#d4af37]/28 bg-[#d4af37]/5 text-[#d4af37]/78"
                }`}
              >
                <Icon className="h-4 w-4" />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.12),transparent_68%)] opacity-60" />
              </div>
              <p
                className={`mt-7 max-w-30 whitespace-pre-line text-sm leading-6 transition-colors duration-300 ${
                  active === index ? "text-white" : "text-gray-300"
                }`}
              >
                {label}
              </p>
            </div>

            {index < steps.length - 1 ? (
              <div className="mt-10 flex h-10 items-start justify-center">
                <svg width="72" height="30" viewBox="0 0 72 30" className="overflow-visible">
                  <defs>
                    <linearGradient id={`flow-line-${index}`} x1="0" y1="0" x2="72" y2="0" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor={active !== null && active > index ? "rgba(244,215,102,0.28)" : "rgba(212,175,55,0.18)"} />
                      <stop offset="48%" stopColor={active !== null && active > index ? "rgba(255,225,132,0.92)" : "rgba(236,196,71,0.62)"} />
                      <stop offset="100%" stopColor={active !== null && active > index ? "rgba(255,223,116,0.96)" : "rgba(236,196,71,0.74)"} />
                    </linearGradient>
                    <filter id={`flow-glow-${index}`} x="-60%" y="-160%" width="220%" height="320%">
                      <feGaussianBlur stdDeviation="3.6" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id={`spark-glow-${index}`} x="-500%" y="-500%" width="1000%" height="1000%">
                      <feGaussianBlur stdDeviation="3.2" />
                    </filter>
                  </defs>
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0.2 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.24, duration: 0.72, ease: "easeOut" }}
                    d="M2 20 C 20 3, 49 3, 68 19"
                    fill="none"
                    stroke={`url(#flow-line-${index})`}
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter={`url(#flow-glow-${index})`}
                  />
                  <motion.path
                    initial={{ pathLength: 0, opacity: 0.08 }}
                    whileInView={{ pathLength: 1, opacity: 0.65 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: index * 0.24 + 0.04, duration: 0.78, ease: "easeOut" }}
                    d="M2 20 C 20 3, 49 3, 68 19"
                    fill="none"
                    stroke="rgba(255,223,116,0.26)"
                    strokeWidth="5.6"
                    strokeLinecap="round"
                    filter={`url(#flow-glow-${index})`}
                  />
                  {[
                    { cx: 18, cy: 12, r: 1.3, opacity: 0.68 },
                    { cx: 24, cy: 9, r: 1.8, opacity: 0.96 },
                    { cx: 31, cy: 7, r: 1.1, opacity: 0.74 },
                    { cx: 38, cy: 8, r: 1.35, opacity: 0.86 },
                    { cx: 45, cy: 10, r: 1.15, opacity: 0.72 },
                    { cx: 52, cy: 13, r: 1.55, opacity: 0.9 },
                  ].map((spark, sparkIndex) => (
                    <motion.circle
                      key={`${index}-spark-${sparkIndex}`}
                      initial={{ opacity: 0, scale: 0.4 }}
                      whileInView={{ opacity: spark.opacity, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ delay: index * 0.24 + 0.14 + sparkIndex * 0.05, duration: 0.24, ease: "easeOut" }}
                      cx={spark.cx}
                      cy={spark.cy}
                      r={spark.r}
                      fill="rgba(255,214,104,0.98)"
                      filter={`url(#spark-glow-${index})`}
                    />
                  ))}
                </svg>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}