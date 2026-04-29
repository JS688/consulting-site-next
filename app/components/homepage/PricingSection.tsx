import Link from "next/link";

const pricingPackages = [
  {
    label: "Foundation",
    title: "Website Design + SEO & AI-Ready Structure",
    price: "$2,000",
    timeline: "Timeline: 4–8 weeks",
    featured: true,
    bullets: [
      "Custom website design",
      "Mobile-optimized",
      "SEO & AI-ready structure",
      "Clear messaging",
      "Fast, scalable setup",
    ],
    description:
      "Built with the foundation needed to rank, grow, and be understood by search engines and AI tools.",
    ctaLabel: "Get Started",
    href: "#contact",
  },
  {
    label: "Optimization",
    title: "SEO & Visibility Optimization",
    price: "$500",
    timeline: "Timeline: 3–6 weeks",
    bullets: [
      "SEO improvements for better rankings",
      "Keyword alignment with customer search intent",
      "AI-friendly content structure",
      "Internal linking optimization",
      "Strategic on-page optimization for higher visibility",
    ],
    description:
      "Improve your rankings and increase your visibility in search results and modern search platforms.",
    ctaLabel: "Start Optimization",
    href: "#contact",
  },
  {
    label: "Growth",
    title: "Ongoing SEO & Visibility Growth",
    price: "$500",
    priceSuffix: "/ month",
    bullets: [
      "Blog content creation and updates",
      "Ongoing SEO improvements",
      "AI-friendly content structuring",
      "Internal linking and site expansion",
      "Performance tracking and reporting",
      "Google Business Profile setup and optimization",
      "FAQ updates to improve customer search visibility",
    ],
    description:
      "Continuously grow your traffic, rankings, and customer inquiries over time.",
    ctaLabel: "Grow My Visibility",
    href: "#contact",
  },
];

export default function PricingSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 pb-20 pt-14 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="mb-4 inline-flex items-center rounded-full border border-[#d4af37]/60 bg-[#d4af37]/10 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#f5c84c] sm:text-sm">
          SERVICES
        </p>

        <h2 className="text-base font-semibold sm:text-4xl md:text-5xl">
          Choose Your Starting Point
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-[11px] leading-relaxed text-white/70 sm:text-base">
          Start with a strong foundation, then improve and grow your visibility over time.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {pricingPackages.map((pkg) => (
            <article
              key={pkg.label}
              className={[
                "relative rounded-2xl p-5 text-left transition-all duration-300 sm:p-8",
                pkg.featured
                  ? "border-2 border-[#d4af37] bg-[#d4af37]/5 shadow-[0_0_40px_rgba(255,215,0,0.1)]"
                  : "border border-[#d4af37]/20 hover:border-[#d4af37] hover:shadow-[0_0_30px_rgba(255,215,0,0.15)]",
              ].join(" ")}
            >
              <p className="text-xs uppercase tracking-[0.18em] text-[#f5c84c] sm:text-sm">{pkg.label}</p>

              <h3 className="mt-2 text-sm font-semibold sm:text-2xl">{pkg.title}</h3>

              <p className="mt-3 text-base font-bold text-white sm:text-3xl">
                {pkg.price}
                {pkg.priceSuffix ? <span className="text-xs font-normal text-white/75 sm:text-base"> {pkg.priceSuffix}</span> : null}
              </p>

              {pkg.timeline ? (
                <p className="mt-2 text-[11px] text-gray-500 sm:text-sm">{pkg.timeline}</p>
              ) : null}

              {pkg.label === "Foundation" ? (
                <span className="mt-4 inline-flex rounded-full bg-[#d4af37] px-4 py-1 text-[11px] font-medium text-black sm:text-xs">
                  Most Popular
                </span>
              ) : null}

              <ul className="mt-5 space-y-2.5 text-[11px] leading-relaxed text-gray-300 sm:text-base">
                {pkg.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f5c84c] shadow-[0_0_12px_rgba(245,200,76,0.45)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-[11px] leading-relaxed text-gray-400 sm:text-sm">{pkg.description}</p>

              <Link
                href={pkg.href}
                className="mt-6 block rounded-full bg-[#d4af37] px-6 py-3 text-center text-xs font-medium text-black transition hover:bg-[#f5c84c] sm:text-base"
              >
                {pkg.ctaLabel}
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-3 max-w-3xl text-xs text-gray-600">
          Timelines may vary depending on project scope and business needs.
        </p>

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