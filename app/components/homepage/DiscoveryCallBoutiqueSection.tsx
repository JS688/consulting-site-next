"use client";

import { CheckCircle2, Compass, LineChart, Target } from "lucide-react";

const clarityPoints = [
  {
    icon: CheckCircle2,
    text: "what needs to change",
  },
  {
    icon: LineChart,
    text: "what opportunities you are missing",
  },
  {
    icon: Target,
    text: "how to position your business more strongly",
  },
  {
    icon: Compass,
    text: "what upgrade path fits your goals",
  },
] as const;

export default function DiscoverySection() {
  return (
    <section className="relative bg-black px-6 py-24 text-white overflow-hidden">
      
      {/* subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(242,193,78,0.08),transparent_60%)]" />

      <div className="relative z-10 mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT: VIDEO CARD */}
        <div className="relative order-last bg-transparent p-0 shadow-none md:order-first">

          {/* video container */}
          <div className="relative overflow-hidden">
            <video
          aria-hidden="true"
              src="/logos/cal.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90"
            />
            
            {/* glow overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,193,78,0.15),transparent_60%)]" />
          </div>

          {/* text under video */}
          <div className="mt-6 text-center">
            <p className="text-xs tracking-[0.3em] text-[#f2c14e]/70 uppercase">
              A Focused Strategy Session
            </p>

            <a
              href="https://calendly.com/jultech-ai/new-meeting-1?month=2026-04"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#f2c14e] px-6 py-3 text-black font-medium transition hover:-translate-y-1 hover:bg-[#f6cd64]"
            >
              Book a Discovery Call →
            </a>

            <p className="mt-4 text-xs text-white/50 tracking-wide">
              No pressure. Just clarity.
            </p>
          </div>
        </div>

        {/* RIGHT: CONTENT */}
        <div className="order-first md:order-last">
          <p className="text-xs tracking-[0.3em] text-[#f2c14e]/70 uppercase mb-4">
            Let's unlock your website's potential
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Discovery Call
          </h2>

          <p className="mt-6 text-2xl text-[#f2c14e]">
            See what is possible for your website
          </p>

          <p className="mt-8 text-sm tracking-[0.3em] text-white/40 uppercase">
            You will leave with clarity on:
          </p>

          {/* LIST */}
          <div className="mt-8 space-y-2">
            {clarityPoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.text}>
                  <div className="flex items-center gap-4">
                    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#f2c14e]/45 text-[#f2c14e]">
                      <div className="absolute inset-0 rounded-full bg-[#f2c14e]/8 blur-sm" />
                      <Icon className="relative h-5 w-5" />
                    </div>
                    <p className="text-[0.9rem] leading-6 text-white/84 sm:whitespace-nowrap sm:text-[0.98rem] lg:text-[1.02rem]">{point.text}</p>
                  </div>

                  {point.text !== clarityPoints[clarityPoints.length - 1].text ? (
                    <div className="ml-16 mt-2 h-px bg-white/12" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}