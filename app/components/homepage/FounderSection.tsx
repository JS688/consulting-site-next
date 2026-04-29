"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,215,64,0.05),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-xs uppercase tracking-[0.45em] text-white/35"
        >
          About JulTech
        </motion.p>

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="relative h-64 w-56 overflow-hidden rounded-2xl ring-1 ring-white/10 md:h-80 md:w-64">
              <Image
                src="/julia-headshot.jpg"
                alt="Julia Sokolsky — Founder of JulTech™"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 224px, 256px"
                priority
              />
            </div>

            {/* Name + location */}
            <div className="mt-4">
              <p className="text-base font-semibold text-white">Julia Sokolsky — Founder of JulTech</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-white/40">
                <MapPin className="h-3 w-3" />
                Columbia, SC · USA
              </p>
              <Link
                href="https://www.linkedin.com/in/julia-sokolsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[#FFD740] hover:underline"
              >
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-white/70"
          >
            <p className="text-lg leading-relaxed text-white/90">
              Founded by Julia Sokolsky, JulTech{" "}
              <span className="text-sm text-white/40">(JulTech AI Consulting Group LLC)</span>{" "}
              works with a select group of businesses that want to improve how they show up in Google search and modern search platforms.
            </p>

            <p className="leading-relaxed">
              Many businesses invest in websites, SEO, and AI tools — but treat
              them separately.
            </p>

            <p className="leading-relaxed">
              The result? Good tools, poor outcomes.
            </p>

            <p className="leading-relaxed">
              JulTech was built to fix that.
            </p>

            <p className="leading-relaxed">
              By bringing website design, search visibility, and content
              structure together into one system that actually works.
            </p>

            <div className="space-y-3 pt-2">
              <p className="font-medium text-white/85">What I focus on</p>
              <ul className="space-y-2 pl-1">
                {[
                  "Building high-performance, conversion-focused websites",
                  "Improving visibility in Google search results",
                  "Structuring content for modern search systems and AI tools",
                  "Creating systems that support long-term growth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD740]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-medium text-white/85">Who I work with</p>
              <p className="text-sm text-white/60">Primarily businesses in:</p>
              <ul className="space-y-2 pl-1">
                {[
                  "Real estate",
                  "Homebuilding",
                  "Mortgage",
                  "Restaurants and cafes",
                  "Local service industries",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD740]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-medium text-white/85">Closing</p>
              <p className="leading-relaxed">JulTech focuses on building systems that make your business:</p>
              <ul className="space-y-2 pl-1">
                {[
                  "Easier to find in search",
                  "Easier to understand",
                  "Easier to choose",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD740]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-white">
                If that&apos;s what you&apos;re looking for, we should talk.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
