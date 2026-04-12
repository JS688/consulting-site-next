"use client";


import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Code2, Compass, Layers, SettingsIcon, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Compass,
    iconFrame: "bg-yellow-400/10 ring-yellow-400/25",
    title: "Discover",
    text: "Identify visibility gaps across search, AI, and bilingual markets",
  },
  {
    icon: Layers,
    iconFrame: "bg-white/6 ring-white/15",
    title: "Design",
    text: "Structure your website for clarity, answers, and AI understanding",
  },
  {
    icon: Code2,
    iconFrame: "bg-yellow-400/8 ring-yellow-400/20",
    title: "Deploy",
    text: "Launch a fast, optimized website built for search and AI",
  },
  {
    icon: TrendingUp,
    iconFrame: "bg-white/6 ring-white/15",
    title: "Optimize",
    text: "Continuously improve visibility, performance, and conversions",
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
    },
  },
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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
      className="relative overflow-hidden bg-black px-6 pb-16 pt-6 text-white md:pt-7 lg:pt-8"
    >
      {/* ANIMATED DIVIDER */}
      <div className="w-full flex items-center gap-2 mb-0">
        <div
          className={`h-px bg-yellow-500 transition-all duration-700 ${
            visible ? "animate-dividerSlide" : "opacity-80"
          }`}
        ></div>
        <div
          className={`text-gray-300 ${
            visible ? "animate-dividerPulse" : "opacity-0"
          }`}
        >
        </div>
      </div>

      {/* CONTENT */}
      <div
        className={`relative overflow-hidden transition-all duration-700 ${
          visible ? "animate-paintIn" : "opacity-0"
        }`}
      >
        <div className="pointer-events-none absolute inset-x-0 -top-2 bottom-0">
          <video
            src="/back.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-top opacity-55"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black/56 via-black/44 to-black/78" />
        </div>

        <div className="relative z-10">
          <motion.div
            className="mx-auto max-w-5xl text-center"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.6 }}
          >
            <motion.div
              variants={headerItemVariants}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-sm font-medium text-gray-300"
            >
              <SettingsIcon className="h-4 w-4" />
              Our System
            </motion.div>

            <motion.h2
              variants={headerItemVariants}
              className="mt-6 whitespace-nowrap text-4xl font-semibold tracking-tight text-yellow-400 sm:text-5xl"
            >
              How We Build AI-Ready Websites
            </motion.h2>

            <motion.p
              variants={headerItemVariants}
              className="mt-10 whitespace-nowrap text-lg leading-8 text-gray-400 sm:text-xl"
            >
              A modern system designed to make your business visible, understood, and chosen.
            </motion.p>
          </motion.div>

          <div className="relative mx-auto mt-12 max-w-7xl">
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

                      <p className="text-sm leading-relaxed whitespace-pre-line text-white md:text-base">
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
