"use client";// ServiceCard component for grid rendering
function ServiceCard(service: Service) {
  const Icon = service.icon;
  return (
    <div className="group relative rounded-2xl p-px transition duration-300">
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-[#d1b075]/0 via-[#d1b075]/0 to-[#d1b075]/0 opacity-0 blur-xl transition duration-300 group-hover:from-[#d1b075]/25 group-hover:via-[#d1b075]/10 group-hover:to-[#d1b075]/25 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#d1b075]/12 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10 flex h-full min-h-75 flex-col rounded-2xl border border-[#d1b075]/30 bg-zinc-950/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[1.015] hover:border-[#d1b075]/60 hover:bg-zinc-950/85 hover:shadow-[0_0_35px_rgba(209,176,117,0.18)]">
        <p className="inline-flex items-center justify-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
          {service.badge}
        </p>
        <div className="mt-4 mb-1 flex items-center gap-2">
          <Icon className="mt-1 h-6 w-6 shrink-0 text-[#d1b075] transition duration-300 group-hover:scale-110" />
          <h3 className="text-lg font-semibold text-white whitespace-nowrap transition duration-300 group-hover:text-[#e7cd95] md:text-xl">
            {service.title}
          </h3>
        </div>
        <div className="mt-1 text-gray-100 text-[15px] leading-7">
          {service.short}
        </div>
        <div className="mt-2 text-xs text-white/75">
          {service.features}
        </div>
        <div className="mt-2 text-xs text-white/50 tracking-wide">
          {service.delivery}
        </div>
        <div className="mt-3 border-t border-[#d1b075]/20" />
        <div className="mt-3 flex items-center justify-center gap-4">
          <Link
            href={service.href}
            className="rounded-lg bg-[#d1b075] px-4 py-2 font-medium text-black transition hover:bg-[#e0c48a] hover:shadow-[0_0_18px_rgba(209,176,117,0.38)]"
          >
            Read More →
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-[#d1b075]/70 px-4 py-2 text-[#d1b075] transition hover:border-[#d1b075] hover:bg-[#d1b075]/10 hover:text-[#e7cd95]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </div>
  );
// ...existing code...
}
import Link from "next/link";
import type { ComponentType } from "react";
import { ShoppingCart } from "lucide-react";

type Service = {
  badge: string;
  title: string;
  icon: ComponentType<{ className?: string }>;
  short: string;
  features: string;
  delivery: string;
  more: string;
  href: string;
};

const services: Service[] = [
  {
    badge: "For Branding",
    title: "Portfolio Websites",
    icon: ({ className }: { className?: string }) => <span className={`text-[#e5c98a] text-2xl leading-none ${className ?? ""}`}>✦</span>,
    short:
      "Custom-coded portfolios built to showcase your work.",
    features: "Strong storytelling · Smooth motion · Branded visuals",
    delivery: "Typical delivery: 3–4 weeks",
    more:
      "Perfect for creators needing polished storytelling, galleries, smooth motion, and branded visuals that help attract premium clients.",
    href: "/services/portfolio",
  },
  {
    badge: "For Authority",
    title: "Business / Corporate Websites",
    icon: ({ className }: { className?: string }) => <span className={`text-[#e5c98a] text-2xl leading-none ${className ?? ""}`}>⇡</span>,
    short:
      "Professional websites that communicate your brand and value.",
    features: "Structured pages · Strong messaging · Case-study layouts",
    delivery: "Typical delivery: 5–7 weeks",
    more:
      "Built for credibility with structured service pages, strong messaging, and case-study style layouts that support sales conversations and long-term growth.",
    href: "/services/business",
  },
  {
    badge: "For Launches",
    title: "Landing Pages (1-Page Websites)",
    icon: ({ className }: { className?: string }) => <span className={`text-[#e5c98a] text-2xl leading-none ${className ?? ""}`}>⌂</span>,
    short: "Single-page websites built for conversions and fast launch.",
    features: "Focused messaging · Strong CTAs · Fast performance",
    delivery: "Typical delivery: 1–3 weeks",
    more:
      "Ideal for campaigns with focused messaging, strong calls to action, and streamlined layouts designed to increase inquiries and conversions.",
    href: "/services/landing-pages",
  },
];

export default function ServicesPage() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <div className="min-h-screen px-6 py-8 md:py-10">
        {/* HERO */}
        <div className="mx-auto max-w-5xl pt-6 pb-6 text-center">
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-[-0.5px] text-yellow-400 md:text-6xl">
            AI Website Solutions
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-lg font-medium leading-relaxed text-white md:text-xl">
            Whether you're selling, showcasing, or scaling — we build the right
            experience
          </p>

          <p className="mx-auto mt-3 flex items-center justify-center gap-2 text-sm italic text-[#d1b075]/85 md:text-base">
            <span className="text-[#d1b075]">✦</span>
            Built with you, refined until it’s right.
          </p>

          <div className="relative mx-auto mt-8 w-full max-w-7xl overflow-hidden rounded-2xl aspect-14/3">
            <video
              src="/logos/animation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover opacity-80 blur-[1px]"
            />
            <div className="absolute inset-0 bg-zinc-900/10" />
          </div>
        </div>

        {/* SERVICES GRID: 2x2, E-Commerce (left top), Portfolio (right top), Business (left bottom), Landing Pages (right bottom) */}
        <div className="mx-auto mt-8 grid max-w-5xl gap-8 md:grid-cols-2 md:gap-x-10 md:gap-y-12">
          {/* E-Commerce (top left) */}
          <div className="group relative rounded-2xl p-px transition duration-300">
            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-[#d1b075]/0 via-[#d1b075]/0 to-[#d1b075]/0 opacity-0 blur-xl transition duration-300 group-hover:from-[#d1b075]/25 group-hover:via-[#d1b075]/10 group-hover:to-[#d1b075]/25 group-hover:opacity-100" />
            <div className="pointer-events-none absolute inset-x-10 bottom-8 h-24 rounded-full bg-[#d1b075]/12 blur-3xl opacity-0 transition duration-300 group-hover:opacity-100" />
            <div className="relative z-10 flex h-full min-h-75 flex-col rounded-2xl border border-[#d1b075]/30 bg-zinc-950/70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 ease-in-out hover:scale-[1.015] hover:border-[#d1b075]/60 hover:bg-zinc-950/85 hover:shadow-[0_0_35px_rgba(209,176,117,0.18)]">
              <p className="inline-flex items-center justify-center self-start rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                For Selling
              </p>
              <div className="mt-4 mb-1 flex items-center gap-2">
                <ShoppingCart className="mt-1 h-6 w-6 shrink-0 text-[#d1b075] transition duration-300 group-hover:scale-110" />
                <h3 className="text-lg font-semibold text-white whitespace-nowrap transition duration-300 group-hover:text-[#e7cd95] md:text-xl">
                  E-Commerce Websites (Online Stores)
                </h3>
              </div>
              <div className="mt-1 text-gray-100 text-[15px] leading-7">
                High-performing online stores built to sell, scale, and convert.
              </div>
              <div className="mt-2 text-xs text-white/75">
                Fast checkout · Scalable structure · Conversion-focused
              </div>
              <div className="mt-2 text-xs text-white/50 tracking-wide">
                Typical delivery: 4–6 weeks
              </div>
              <div className="mt-3 border-t border-[#d1b075]/20" />
              <div className="mt-3 flex items-center justify-center gap-4">
                <Link
                  href="/services/e-commerce"
                  className="rounded-lg bg-[#d1b075] px-4 py-2 font-medium text-black transition hover:bg-[#e0c48a] hover:shadow-[0_0_18px_rgba(209,176,117,0.38)]"
                >
                  Read More →
                </Link>
                <Link
                  href="/contact"
                  className="rounded-lg border border-[#d1b075]/70 px-4 py-2 text-[#d1b075] transition hover:border-[#d1b075] hover:bg-[#d1b075]/10 hover:text-[#e7cd95]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
          </div>
          {/* Portfolio (top right) */}
          <ServiceCard {...services[0]} />
          {/* Business (bottom left) */}
          <ServiceCard {...services[1]} />
          {/* Landing Pages (bottom right) */}
          <ServiceCard {...services[2]} />
        </div>
        {/* FREE WEBSITE REVIEW BUTTON UNDER SERVICES GRID */}
        <div className="mx-auto max-w-2xl mt-12 flex flex-col items-center justify-center">
          <p className="text-white/60 text-sm mb-3">
  Not sure what you need?
</p>
          <a
            href="/free-appraisal"
            className="inline-flex items-center rounded-full bg-[#d1b075] px-8 py-3 font-semibold text-black shadow-[0_0_20px_rgba(209,176,117,0.25)] hover:bg-[#e0c48a] hover:shadow-[0_0_28px_rgba(209,176,117,0.32)] transition text-base mt-2 text-[1.15rem]"
          >
            Free Website Review
          </a>
        </div>
      </div>
    </div>
  );
}

