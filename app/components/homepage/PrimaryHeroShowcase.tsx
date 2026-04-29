"use client";

import Link from "next/link";
import { AlertCircle, MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const sideDots = [
  { top: "18%", x: "9%", delay: 0.2, duration: 5.2, size: 4 },
  { top: "30%", x: "14%", delay: 1.1, duration: 6.1, size: 3 },
  { top: "46%", x: "10%", delay: 0.6, duration: 5.7, size: 5 },
  { top: "64%", x: "13%", delay: 1.4, duration: 6.4, size: 3 },
  { top: "24%", x: "88%", delay: 0.5, duration: 5.4, size: 4 },
  { top: "39%", x: "83%", delay: 1.2, duration: 6.2, size: 3 },
  { top: "58%", x: "90%", delay: 0.9, duration: 5.6, size: 5 },
  { top: "73%", x: "86%", delay: 1.6, duration: 6.5, size: 3 },
];

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

function trackCallClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_call", {
      event_category: "CTA",
      event_label: "Call Expert",
    });
  }
}

export default function PrimaryHeroShowcase() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031227_0%,#071a35_52%,#0a2342_100%)] px-0 pb-32 pt-8 text-white sm:pb-28 sm:pt-10 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_52%,rgba(245,200,76,0.11),transparent_26%),radial-gradient(circle_at_88%_48%,rgba(245,200,76,0.10),transparent_26%),linear-gradient(180deg,rgba(3,9,18,0.52)_0%,rgba(3,9,18,0.64)_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        {sideDots.map((dot, index) => (
          <motion.span
            key={`side-dot-${index}`}
            className="absolute rounded-full bg-[#f5c84c]/55 shadow-[0_0_14px_rgba(245,200,76,0.45)]"
            style={{ top: dot.top, left: dot.x, width: dot.size, height: dot.size }}
            animate={{
              y: [0, -10, 6, 0],
              x: [0, 2, -2, 0],
              opacity: [0.35, 0.75, 0.5, 0.35],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:min-h-130 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-14">
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <div className="animate-fadeUp delay-1 mb-6 mx-auto flex max-w-md flex-wrap items-center justify-center gap-2 rounded-[28px] border border-[#f5c84c] bg-[#f5c84c]/10 px-4 py-3 text-center text-xs font-semibold text-white sm:text-sm lg:mx-0 lg:max-w-xl lg:justify-start">
              <AlertCircle className="h-4 w-4 shrink-0 text-[#f5c84c]" />
              <span className="leading-snug uppercase">Stay visible as search evolves — or risk being overlooked</span>
            </div>

            <h1 className="animate-fadeUp delay-1 mt-4 text-2xl font-medium leading-tight tracking-tight text-[#f5c84c] sm:text-5xl lg:text-6xl">
              We build websites that rank on Google and perform in modern search
            </h1>

            <p className="animate-fadeUp delay-2 mt-5 text-sm text-white/75 sm:mt-8 sm:text-xl lg:max-w-2xl">
              Modern, high-performing websites designed to bring in customers, rank in Google search, and be clearly understood by AI tools like ChatGPT.
            </p>

            <div className="animate-fadeUp delay-4 mt-10 text-sm font-medium tracking-[0.08em] text-white/50 sm:text-base lg:text-left">
              <span className="inline-flex flex-wrap items-center justify-center gap-2 lg:justify-start">
                <MapPin className="h-4 w-4" />
                <span>Based in Columbia, SC · Working with clients worldwide</span>
              </span>
            </div>

            <div className="animate-fadeUp delay-5 mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link
                href="/free-appraisal"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f5c84c] px-6 py-3 text-base font-semibold text-black no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 sm:w-auto sm:px-7 sm:py-4 sm:text-lg"
              >
                <span>Get Your Free SEO &amp; AI Audit →</span>
              </Link>

              <a
                href="tel:+18033861672"
                onClick={trackCallClick}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white no-underline transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 sm:w-auto sm:py-4 sm:text-lg"
              >
                <span>📞 Call an Expert: (803)386-1672</span>
              </a>
            </div>

            <p className="mt-5 text-sm text-white/45">Limited availability · No commitment</p>

            <p className="mt-4 text-[11px] leading-relaxed tracking-tight text-white/80 sm:text-lg sm:tracking-normal lg:text-xl">
              <span className="block sm:inline">Local SEO, Google Business Profile optimization, and AI visibility - </span>
              <span className="mt-1 flex items-center justify-center gap-2 sm:mt-0 sm:inline-flex lg:justify-start">
                <span>built to help your business get found and grow</span>
                <TrendingUp className="h-5 w-5 text-[#f5c84c]" />
              </span>
            </p>
          </div>

          <motion.div
            className="relative mx-auto mt-8 w-full max-w-40 sm:max-w-56 lg:mt-0 lg:max-w-90 lg:translate-x-8 lg:justify-self-end lg:self-start xl:translate-x-12"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-4 rounded-full bg-[#f5c84c]/14 blur-3xl" />
            <div className="absolute inset-x-10 inset-y-8 rounded-full bg-[#0a2342]/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[40px]">
              <video
                className="block aspect-square w-full rounded-4xl object-cover opacity-95 shadow-[0_18px_60px_rgba(0,0,0,0.22)] lg:rounded-[40px]"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/logos/My%20cube.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-999 flex w-full md:hidden">
        <a
          href="tel:+18033861672"
          onClick={trackCallClick}
          className="flex-1 bg-black px-3 py-3 text-center font-semibold text-white no-underline"
        >
          📞 Call Now
        </a>
        <Link
          href="/free-appraisal"
          className="flex-1 bg-[#f5c84c] px-3 py-3 text-center font-semibold text-black no-underline"
        >
          Get Free Audit
        </Link>
      </div>
    </section>
  );
}
