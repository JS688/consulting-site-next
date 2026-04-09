"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Code2, Compass, Layers, Settings2, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Compass,
    iconFrame: "bg-yellow-400/10 ring-yellow-400/25",
    title: "Discover",
    text: "Identify visibility gaps across Google, AI, and multilingual",
  },
  {
    icon: Layers,
    iconFrame: "bg-white/6 ring-white/15",
    title: "Design",
    text: "Structure your website for clarity, answers, and AI",
  },
  {
    icon: Code2,
    iconFrame: "bg-yellow-400/8 ring-yellow-400/20",
    title: "Deploy",
    text: "Build a fast website optimized for search and AI",
  },
  {
    icon: TrendingUp,
    iconFrame: "bg-white/6 ring-white/15",
    title: "Optimize",
    text: "Improve visibility, performance, and conversions",
  },
];

export default function SectionFourSystem() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-black px-6 pb-16 pt-10 text-white md:pt-12 lg:pt-14"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.18] bg-[url('/jultech-bg-2.png')] bg-cover bg-center" />

      {/* ANIMATED DIVIDER */}
      <div className="w-full flex items-center gap-2 mb-12">
        <div
          className={`h-px bg-gray-300 transition-all duration-700 ${
            visible ? "animate-dividerSlide" : "opacity-0"
          }`}
        ></div>
        <div
          className={`text-gray-300 ${
            visible ? "animate-dividerPulse" : "opacity-0"
          }`}
        >
        </div>
      </div>

      {/* GOLD LIGHT SWEEP */}
      {visible && (
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-linear-to-r from-transparent via-yellow-400/40 to-transparent animate-goldSweep"></div>
        </div>
      )}

      {/* CONTENT */}
      <div
        className={`relative z-10 transition-all duration-700 ${
          visible ? "animate-paintIn" : "opacity-0"
        }`}
      >
        <div className="relative mx-auto max-w-7xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-gray-300">
            <Settings2 className="h-4 w-4" />
            Our System
          </div>

          <h2 className="mt-6 mb-6 text-4xl font-bold text-yellow-400 md:text-5xl">
            How We Build AI-Ready Websites
          </h2>

          <p className="mx-auto mb-14 max-w-5xl text-lg leading-8 text-gray-400 sm:text-xl">
            A modern system that makes your business visible, understood, and chosen
          </p>

          <div className="relative mx-auto max-w-7xl">
            <div className="grid items-start gap-12 md:grid-cols-4 md:gap-16 lg:gap-20">
              {steps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="relative flex flex-col items-center">
                    <div className="group h-full w-full rounded-3xl border border-yellow-400/25 bg-black/50 px-6 py-8 shadow-[0_0_24px_rgba(245,197,24,0.08)] backdrop-blur-sm transition-colors duration-300 hover:border-yellow-400/40">
                      <div className="mb-5 flex items-center gap-4">
                        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${step.iconFrame}`}>
                          <Icon className="h-5 w-5 text-yellow-300" />
                        </div>

                        <h3 className="text-3xl font-semibold text-yellow-300">{step.title}</h3>
                      </div>

                      <p className="text-base leading-relaxed whitespace-pre-line text-white md:text-lg">
                        {step.text}
                      </p>
                    </div>

                    {index < steps.length - 1 && (
                      <>
                        <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/50 md:hidden">
                          <ArrowDown className="h-5 w-5" />
                        </div>

                        <div className="absolute left-full top-1/2 z-20 hidden h-10 w-20 -translate-y-1/2 items-center md:flex lg:w-24">
                          <div className="relative mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/50">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto max-w-5xl text-lg leading-8 text-gray-400 sm:text-xl">
              Engineered for visibility. Built to bring in customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
