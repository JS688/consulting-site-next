"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICE_PACKAGES } from "./servicePackages";

export default function ServicesPage() {
  const [active, setActive] = useState<string | null>(null);
  const stairLayout = {
    starter: {
      wrapperClass: "max-w-[470px] sm:max-w-[510px] lg:max-w-[560px]",
      cardClass: "min-h-[320px] lg:min-h-[350px]",
      toneClass:
        "border border-white/14 bg-zinc-100/6 shadow-[0_0_60px_rgba(255,255,255,0.05)]",
    },
    growth: {
      wrapperClass: "max-w-[570px] sm:max-w-[620px] lg:max-w-[690px]",
      cardClass: "min-h-[335px] lg:min-h-[365px]",
      toneClass:
        "border border-blue-300/22 bg-blue-500/8 shadow-[0_0_60px_rgba(59,130,246,0.08)]",
    },
    premium: {
      wrapperClass: "max-w-[670px] sm:max-w-[740px] lg:max-w-[840px]",
      cardClass: "min-h-[350px] lg:min-h-[395px]",
      toneClass:
        "border border-yellow-300/22 bg-yellow-400/8 shadow-[0_0_70px_rgba(245,197,24,0.09)]",
    },
  };

  return (
    <main className="relative overflow-x-hidden bg-[#111111] pb-16 pt-6 text-white sm:pb-20 sm:pt-8 md:pb-24 md:pt-10">
      <h1 className="sr-only">Services</h1>

      <motion.div
        aria-hidden
        initial={{ opacity: 0, x: 48 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.06, duration: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <video
          src="/right%20services.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover object-right opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#111111] via-[#111111]/78 to-[#111111]/38" />
      </motion.div>

      <motion.div
        aria-hidden
        animate={{ opacity: [0.08, 0.15, 0.08], x: [0, 156, 0], y: [0, 36, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[81%] top-0 w-7xl -translate-x-1/2 rounded-full bg-yellow-400/6 blur-3xl lg:-bottom-80 xl:-bottom-96 2xl:-bottom-112"
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, ease: "easeOut" }}
          className="max-w-3xl space-y-4"
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400/80">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
            How we move you forward
          </h2>
          <p className="text-sm leading-7 text-zinc-300 sm:text-base md:text-lg">
            We focus on what&apos;s holding you back and move you forward with clarity and precision.
          </p>
        </motion.div>

        <div className="flex flex-col gap-8 lg:gap-10">
          {SERVICE_PACKAGES.map((panel, index) => {
            const layout = stairLayout[panel.slug];

            return (
              <Link
                key={panel.slug}
                href={`/services/${panel.slug}`}
                className={`block w-full ${layout.wrapperClass}`}
                onMouseEnter={() => setActive(panel.slug)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(panel.slug)}
                onBlur={() => setActive(null)}
              >
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.32, ease: "easeOut" }}
                  className={`group relative flex h-full cursor-pointer overflow-hidden rounded-4xl p-6 backdrop-blur-sm transition-all duration-300 ease-out sm:p-8 ${layout.cardClass} ${layout.toneClass} ${panel.slug === "starter" ? "hover:-translate-y-1" : "hover:-translate-y-2"} ${active === panel.slug ? `${panel.selectedCardClass} scale-[1.02]` : ""} ${active && active !== panel.slug ? "scale-[0.985] opacity-60" : ""}`}
                >
                  <div
                    className={`pointer-events-none absolute blur-2xl transition-opacity duration-300 ${panel.glowClass} ${panel.slug === "starter" ? "left-[40%] top-1/2 h-64 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full" : "inset-0 rounded-4xl"} ${active === panel.slug ? "opacity-100" : "opacity-45"}`}
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-white/2 via-transparent to-transparent" />

                  <div className="relative flex min-h-36 flex-1 flex-col gap-6 sm:min-h-40">
                    <div className="flex flex-col gap-5 md:gap-6">
                      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-6">
                        <div className="flex items-center gap-4">
                          <span className={`h-10 w-3 rounded-full ${panel.accentClass}`} />
                          <div className="space-y-2">
                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/55">
                              {panel.label}
                            </p>
                            <h2
                              className={`text-2xl font-semibold tracking-tight transition-all duration-300 sm:text-3xl ${active === panel.slug ? "text-white" : "text-white/80"}`}
                            >
                              {panel.title}
                            </h2>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 md:justify-end">
                          <span
                            className={`rounded-full px-6 py-3 text-sm font-semibold ${panel.pillTextClass ?? "text-white"} ${panel.primaryPillClass}`}
                          >
                            {panel.timeline}
                          </span>
                        </div>
                      </div>

                      <p className="max-w-3xl text-sm leading-7 text-zinc-300 sm:text-base">
                        {panel.overviewDescription}
                      </p>
                    </div>

                    <ul className="grid gap-2.5 text-sm text-zinc-200 sm:grid-cols-2 sm:text-[0.95rem]">
                      {panel.bullets.map((item) => (
                        <li
                          key={item}
                          className="w-full whitespace-nowrap rounded-xl border border-white/8 bg-black/45 px-2.5 py-2 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.02)]"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </Link>
            );
          })}
        </div>

      </div>
    </main>
  );
}
