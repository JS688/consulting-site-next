import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  BriefcaseBusiness,
  CircleCheck,
  Leaf,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const pricingPackages = [
  {
    label: "Foundation",
    title: "Website Design + SEO Structure",
    icon: BriefcaseBusiness,
    price: "$2,000",
    timeline: "4-8 weeks",
    bullets: [
      "Custom website design",
      "Mobile-optimized",
      "SEO-ready structure",
      "Clear messaging",
      "Fast, scalable setup",
    ],
    description: "Built with the foundation needed to rank and grow.",
    ctaLabel: "Get Started",
    href: "#contact",
    iconPanelText:
      "Built with the foundation needed to rank, grow, and be understood by search engines and AI tools.",
  },
  {
    label: "Optimization",
    title: "SEO & Visibility Optimization",
    icon: TrendingUp,
    price: "$500",
    timeline: "3-6 weeks",
    featured: true,
    bullets: [
      "SEO improvements",
      "Keyword alignment",
      "Content structuring",
      "Internal linking",
      "On-page optimization",
    ],
    description: "Improve your rankings and visibility in search.",
    ctaLabel: "Start Optimization",
    href: "#contact",
    iconPanelText:
      "Improve your rankings and increase your visibility in Google search results and AI-driven platforms.",
  },
  {
    label: "Growth",
    title: "Ongoing SEO Growth",
    icon: Leaf,
    price: "$500",
    priceSuffix: "/ month",
    bullets: [
      "Blog content updates",
      "Ongoing SEO improvements",
      "Content structuring",
      "Internal linking",
      "Performance tracking",
      "Google Business optimization",
    ],
    description: "Continuously grow traffic and customer inquiries.",
    ctaLabel: "Grow My Visibility",
    href: "#contact",
    iconPanelText:
      "Continuously grow your traffic, rankings, and customer inquiries over time.",
  },
];

const sectionHighlights = [
  { icon: BadgeCheck, label: "SEO & AI Friendly" },
  { icon: Zap, label: "Built for Performance" },
  { icon: Target, label: "Designed to Convert" },
];

const whyItWorks = [
  {
    icon: Search,
    title: "Search Engine Ready",
    description: "Clean code, fast loading, and structured for higher rankings.",
  },
  {
    icon: Sparkles,
    title: "AI & LLM Friendly",
    description: "Clear, structured content that AI tools can understand and trust.",
  },
  {
    icon: Target,
    title: "Local SEO Optimized",
    description: "Optimized for local searches and Google Business visibility.",
  },
  {
    icon: Zap,
    title: "Fast & Mobile First",
    description: "Performance-optimized for users and search engines.",
  },
  {
    icon: Shield,
    title: "Built to Convert",
    description: "Strategic messaging that turns visitors into customers.",
  },
];

const trustPoints = [
  "Trusted by local businesses",
  "Transparent pricing",
  "No long-term contracts",
];

export default function PricingSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(245,200,76,0.06),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(245,200,76,0.04),transparent_24%)]" />
      <div className="pointer-events-none absolute left-0 top-0 h-64 w-28 bg-[linear-gradient(135deg,rgba(245,200,76,0.12),transparent_55%)] opacity-35" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-64 w-28 bg-[linear-gradient(315deg,rgba(245,200,76,0.12),transparent_55%)] opacity-35" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-black/55 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#f5c84c] shadow-[0_12px_28px_rgba(0,0,0,0.35)] sm:text-xs">
          <ArrowRight className="h-3.5 w-3.5" />
          SEO & AI-ready websites that rank and grow
        </div>

        <h2 className="text-2xl font-semibold sm:text-4xl md:text-5xl">
          <span className="text-white">Simple Plans.</span>{" "}
          <span className="text-[#f5c84c]">Real Results.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-300 sm:text-xl">
          Websites built for search engines, customers, and AI tools - so your business gets found now and grows over time.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-200 sm:gap-6 sm:text-sm">
          {sectionHighlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.label} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-[#f5c84c]" />
                <span>{item.label}</span>
                {index < sectionHighlights.length - 1 ? <span className="ml-2 hidden text-white/20 sm:inline">|</span> : null}
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          {pricingPackages.map((pkg) => {
            const Icon = pkg.icon;

            return (
              <article
                key={pkg.label}
                className={[
                  "relative rounded-2xl border p-4 shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-all duration-300 sm:p-5",
                  pkg.featured
                    ? "border-2 border-[#d4af37] bg-[linear-gradient(180deg,rgba(245,200,76,0.08),rgba(0,0,0,0.78))] shadow-[0_0_30px_rgba(255,215,0,0.16)]"
                    : "border-[#d4af37]/20 bg-[rgba(5,5,5,0.78)] hover:border-[#d4af37]/45",
                ].join(" ")}
              >
                {pkg.featured ? (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d4af37] px-5 py-2 text-xs font-bold uppercase tracking-[0.08em] text-black shadow-[0_10px_25px_rgba(245,200,76,0.22)]">
                    ★ Most Popular
                  </div>
                ) : null}

                <div className="rounded-[1.4rem] border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(255,210,90,0.08),rgba(255,210,90,0.02))] p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#d4af37]/25 bg-[linear-gradient(180deg,rgba(255,210,90,0.14),rgba(255,210,90,0.04))] text-[#f5c84c] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-[1.7rem] font-semibold leading-none text-white sm:text-[2.1rem]">
                        {pkg.label}
                      </h3>
                      <p className="mt-2 text-base leading-tight text-[#f5c84c] sm:text-lg">
                        {pkg.title}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-end justify-between gap-4 border-t border-white/10 pt-5">
                    <p className="text-[2.35rem] font-bold leading-none tracking-tight text-white sm:text-[3rem]">
                      {pkg.price}
                      {pkg.priceSuffix ? <span className="ml-1 text-lg font-medium text-[#f5c84c] sm:text-2xl">{pkg.priceSuffix}</span> : null}
                    </p>

                    {pkg.timeline ? (
                      <div className="text-right">
                        <p className="text-xs text-gray-400 sm:text-sm">Timeline:</p>
                        <p className="text-base font-semibold text-[#f5c84c] sm:text-xl">{pkg.timeline}</p>
                      </div>
                    ) : null}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-zinc-200 sm:text-base">
                    {pkg.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 fill-[#f5c84c] text-black" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl border border-[#d4af37]/20 bg-[linear-gradient(180deg,rgba(255,210,90,0.08),rgba(255,210,90,0.02))] p-4 text-sm leading-relaxed text-zinc-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:text-base">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 text-[#f5c84c]">
                        {pkg.featured ? <BarChart3 className="h-5 w-5" /> : <Sparkles className="h-5 w-5" />}
                      </div>
                      <p>{pkg.iconPanelText}</p>
                    </div>
                  </div>

                  <Link
                    href={pkg.href}
                    className="mt-6 flex items-center justify-center gap-3 rounded-2xl bg-[linear-gradient(180deg,#f0c35a,#dca63a)] px-6 py-4 text-center text-base font-semibold text-black shadow-[0_16px_36px_rgba(220,166,58,0.22)] transition hover:brightness-105 sm:text-[1.15rem]"
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-[1.8rem] border border-[#d4af37]/20 bg-[rgba(10,10,10,0.86)] px-6 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#f5c84c] sm:text-lg">
            Why our websites are built for SEO & AI
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-5 lg:gap-8">
            {whyItWorks.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-1.5 text-left md:gap-2">
                  <div className="mt-0.5 text-[#f5c84c]">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold leading-tight text-white sm:text-sm lg:text-[0.92rem]">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-zinc-300 sm:text-xs lg:text-[0.82rem]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-zinc-300">
          {trustPoints.map((item) => (
            <div key={item} className="flex items-center gap-2">
              <CircleCheck className="h-4 w-4 text-[#f5c84c]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/3 p-5 text-left sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5c84c]/80 sm:text-xs">
            Columbia SEO Pages
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/seo-services-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              SEO Services
            </Link>
            <Link
              href="/website-design-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              Website Design
            </Link>
            <Link
              href="/local-seo-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              Local SEO
            </Link>
            <Link
              href="/seo-for-realtors-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              SEO for Realtors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}