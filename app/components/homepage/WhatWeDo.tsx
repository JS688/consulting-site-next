"use client";

import { motion } from "framer-motion";
import { Layers3, MonitorSmartphone, Sparkles } from "lucide-react";

const pillars = [
  {
    icon: Layers3,
    title: "Brand Identity",
    text: "Logos, visual systems, and design language that make your brand recognizable and consistent across every touchpoint.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Experiences",
    text: "High-performance websites designed to communicate clearly, convert effectively, and scale globally.",
  },
  {
    icon: Sparkles,
    title: "Motion & Interaction",
    text: "Subtle animations and interactions that bring your brand to life and create a refined user experience.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_30%),linear-gradient(180deg,#050505,#020202)]" />
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-300">What We Do</p>
          <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl text-center">
             Built to perform, scale, and stand out.
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/20 bg-yellow-400/10">
                  <Icon className="h-6 w-6 text-yellow-300" />
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-white">{pillar.title}</h3>
                <p className="mt-4 text-base leading-7 text-zinc-300">{pillar.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}