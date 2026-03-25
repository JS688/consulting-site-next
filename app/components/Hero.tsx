"use client";

import React from "react";
import JulTechAiEngineVisual from "./JulTechAiEngineVisual";

export default function Hero() {
  return(
  <main className="relative overflow-hidden bg-linear-to-b from-[#000000] via-[#0b0f14] to-[#000000] text-white">
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <div className="hero-ambient-orb hero-ambient-orb-left" />
      <div className="hero-ambient-orb hero-ambient-orb-right" />
      <div className="hero-ambient-orb hero-ambient-orb-center" />
      <div className="hero-neural-grid-soft" />
      <div className="hero-bottom-fade" />
    </div>
    <div className="relative z-10 max-w-7xl mx-auto px-6 pt-6 pb-6 md:pt-10 md:pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 lg:gap-12 items-center lg:items-stretch">
        {/* HEADLINE: Central */}
        <h1 className="relative mb-6 inline-block text-5xl md:text-[3rem] xl:text-[3.35rem] font-semibold leading-[0.98] tracking-[-0.03em] text-[rgb(245,197,24)] drop-shadow-[0_0_10px_rgba(245,197,24,0.38)]">
            AI that moves your business forward.
            <span className="hero-headline-underline" aria-hidden />
          </h1>
        {/* LEFT: Content Block */}
        <div className="flex max-w-100 flex-col justify-center items-start text-left lg:-ml-4 lg:pr-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(245,197,24)]">
            AI-READY WEBSITES
          </p>
      
          <h3 className="mb-4 text-xl md:text-2xl font-semibold leading-tight text-white/70">
            Where modern design meets intelligent systems.
          </h3>
          <p className="mb-8 text-base md:text-lg leading-relaxed text-white/62">
            Custom, AI-ready websites for small and medium businesses — built to perform, stand out, and make smarter decisions.
          </p>
        </div>

        {/* RIGHT: Visual Stage */}
        <div className="relative hidden lg:-mt-8 lg:flex self-stretch justify-end overflow-visible">
          <div className="pointer-events-none relative h-full min-h-80 w-176 overflow-hidden">
            <JulTechAiEngineVisual />
          </div>
        </div>
      </div>
    </div>
  </main>
);
}
