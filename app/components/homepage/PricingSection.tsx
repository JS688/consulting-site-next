import Link from "next/link";

const pricingPackages = [
  {
    label: "Foundation",
    title: "Website Design + SEO Structure",
    price: "$2,000",
    timeline: "4-8 weeks",
    bullets: [
      "Custom website design",
      "Mobile-optimized",
      "SEO-ready structure",
      "Clear messaging",
      "Fast, scalable setup",
    ],
    description:
      "Built with the foundation needed to rank and grow.",
    ctaLabel: "Get Started",
    href: "#contact",
  },
  {
    label: "Optimization",
    title: "SEO & Visibility Optimization",
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
    description:
      "Improve your rankings and visibility in search.",
    ctaLabel: "Start Optimization",
    href: "#contact",
  },
  {
    label: "Growth",
    title: "Ongoing SEO Growth",
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
    description:
      "Continuously grow traffic and customer inquiries.",
    ctaLabel: "Grow My Visibility",
    href: "#contact",
  },
];

export default function PricingSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 pb-20 pt-14 text-white sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Simple Plans. <span className="text-[#f5c84c]">Real Results.</span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
          Websites built for search engines and customers - designed to bring in real traffic and growth.
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
              {pkg.featured ? (
                <span className="mb-3 inline-flex rounded-full bg-[#d4af37] px-4 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-black sm:text-xs">
                  Most Popular
                </span>
              ) : null}

              <p className="text-xl font-semibold text-[#f5c84c] sm:text-2xl">{pkg.label}</p>

              <p className="mt-1 text-sm text-gray-400 sm:text-base">{pkg.title}</p>

              <p className="mt-6 text-3xl font-bold text-white">
                {pkg.price}
                {pkg.priceSuffix ? <span className="text-base font-normal text-gray-400"> {pkg.priceSuffix}</span> : null}
              </p>

              {pkg.timeline ? (
                <p className="mt-1 text-sm text-gray-500">{pkg.timeline}</p>
              ) : null}

              <ul className="mt-6 space-y-3 text-sm text-gray-300 sm:text-base">
                {pkg.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#f5c84c] shadow-[0_0_12px_rgba(245,200,76,0.45)]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-gray-400">{pkg.description}</p>

              <Link
                href={pkg.href}
                className="mt-8 block rounded-full bg-[#d4af37] px-6 py-3 text-center text-sm font-medium text-black transition hover:bg-[#f5c84c] sm:text-base"
              >
                {pkg.ctaLabel} {"->"}
              </Link>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-sm text-gray-500">
          Built for real-world search behavior. Optimization and growth improve visibility over time.
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