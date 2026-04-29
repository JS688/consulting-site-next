export type ServiceSlug = "starter" | "growth" | "premium";

export type ServicePackage = {
  slug: ServiceSlug;
  label: string;
  title: string;
  priceLabel: string;
  timeline: string;
  overviewDescription: string;
  bullets: string[];
  accentClass: string;
  primaryPillClass: string;
  pillTextClass?: string;
  selectedCardClass: string;
  glowClass: string;
  detailTagline: string;
  detailOverview: string[];
  investmentNote: string;
  rightFor: string[];
  process: string[];
  spotlightTitle?: string;
  spotlightDescription?: string;
  spotlightBullets?: string[];
  bookingTitle: string;
  bookingDescription: string;
  sessionType: "short" | "full";
};

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    slug: "starter",
    label: "Phase 1",
    title: "Foundation",
    priceLabel: "$3,000 - $6,000",
    timeline: "2-4 weeks",
    overviewDescription:
      "We design and build a website with the structure required for modern search and AI interpretation.",
    bullets: [
      "Custom-built or fully restructured website",
      "Clear messaging and positioning",
      "Structured page hierarchy and navigation",
      "Technical SEO foundation",
    ],
    accentClass: "bg-zinc-200",
    primaryPillClass: "bg-zinc-300/70 shadow-[0_8px_20px_rgba(255,255,255,0.08)]",
    pillTextClass: "text-zinc-950",
    selectedCardClass:
      "border-white/20 bg-zinc-100/10 shadow-[0_0_80px_rgba(255,255,255,0.1)]",
    glowClass: "bg-white/12",
    detailTagline:
      "We design and build a website with the structure required for modern search and AI interpretation.",
    detailOverview: [
      "Foundation creates the structure required for modern search and AI interpretation. We design and build a website that is clearly organized, easy to navigate, and aligned with how people and platforms evaluate a business online.",
      "This phase connects messaging, structure, and technical setup so your website is easier to understand across users, search engines, and AI systems.",
    ],
    investmentNote:
      "Every project is scoped based on your current website, market, and growth goals.",
    rightFor: [
      "Launching a new business or offer",
      "Replacing an outdated website",
      "Building a more credible online presence",
      "Creating a foundation for Google and AI visibility",
    ],
    process: [
      "Clarify your pages, messaging, and structural gaps",
      "Design and build the website around search-ready architecture",
      "Launch with a strong foundation for search and AI visibility",
    ],
    spotlightTitle: "Built for Search and AI Visibility",
    spotlightDescription:
      "A clear structure improves how your business is interpreted across users, search engines, and AI systems.",
    spotlightBullets: [
      "Organized page hierarchy and navigation",
      "Messaging designed for clarity",
      "Technical foundations that support discoverability",
    ],
    bookingTitle: "Start Your Project",
    bookingDescription:
      "Tell us about your project and what you're trying to achieve. We'll review it and send you the next steps.",
    sessionType: "full",
  },
  {
    slug: "growth",
    label: "Phase 2",
    title: "Search & AI Optimization",
    priceLabel: "$2,000 - $5,000",
    timeline: "4-6 weeks",
    overviewDescription:
      "We improve how your content is interpreted across search engines and AI systems.",
    bullets: [
      "Search optimization (SEO)",
      "AI-readable content structuring (AEO-style)",
      "Targeted content aligned with real search behavior",
      "Internal linking and topic alignment",
    ],
    accentClass: "bg-blue-400",
    primaryPillClass: "bg-blue-500/85 shadow-[0_10px_24px_rgba(59,130,246,0.18)]",
    pillTextClass: "text-white",
    selectedCardClass:
      "border-blue-300/35 bg-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.16)]",
    glowClass: "bg-blue-300/14",
    detailTagline:
      "We improve how your content is interpreted across search engines and AI systems.",
    detailOverview: [
      "Search and AI Optimization focuses on how clearly your content is interpreted. We refine your content structure, internal alignment, and search intent coverage so your site becomes easier to understand across both traditional search and AI-driven discovery.",
      "This phase improves clarity, consistency, and relevance without treating SEO and AI visibility as separate systems.",
    ],
    investmentNote:
      "Scope depends on the content depth, market complexity, and the amount of optimization required.",
    rightFor: [
      "Businesses with an existing site that needs better content alignment",
      "Brands that need clearer messaging and stronger topical structure",
      "Teams investing in SEO or AI visibility without a connected system",
    ],
    process: [
      "Review search intent, content structure, and visibility gaps",
      "Refine key pages for search and AI interpretation",
      "Strengthen internal alignment so the site is easier to understand and trust",
    ],
    bookingTitle: "Start Your Project",
    bookingDescription:
      "Tell us about your project and what you're trying to achieve. We'll review it and send you the next steps.",
    sessionType: "full",
  },
  {
    slug: "premium",
    label: "Phase 3",
    title: "Authority & Signal Strength",
    priceLabel: "$2,000 - $6,000",
    timeline: "6-8 weeks",
    overviewDescription:
      "We strengthen how your business is referenced, validated, and connected across the web.",
    bullets: [
      "Content expansion across key topics",
      "Backlinks, citations, and external signals",
      "Optimization of high-performing pages",
      "Cross-platform consistency",
    ],
    accentClass: "bg-yellow-400",
    primaryPillClass: "bg-yellow-400 shadow-[0_12px_30px_rgba(245,197,24,0.24)]",
    pillTextClass: "text-black",
    selectedCardClass:
      "border-yellow-300/35 bg-yellow-400/10 shadow-[0_0_80px_rgba(245,197,24,0.18)]",
    glowClass: "bg-yellow-300/14",
    detailTagline:
      "We strengthen how your business is referenced, validated, and connected across the web.",
    detailOverview: [
      "Authority and Signal Strength expands beyond your website to improve how your business is referenced and reinforced across the web. This includes the signals that help search engines and AI systems judge consistency, trust, and relevance.",
      "The goal is not just more content, but stronger validation around the business so your visibility system becomes more durable over time.",
    ],
    investmentNote:
      "Scope depends on content expansion needs, authority-building work, and the broader growth strategy.",
    rightFor: [
      "Businesses ready to strengthen trust and validation signals",
      "Brands that want broader consistency across the web",
      "Teams building a long-term visibility system instead of isolated tactics",
    ],
    process: [
      "Identify the strongest opportunities to improve trust and consistency signals",
      "Expand content and supporting references across priority topics and platforms",
      "Strengthen the wider signal system around your business over time",
    ],
    bookingTitle: "Start Your Project",
    bookingDescription:
      "Tell us about your project and what you're trying to achieve. We'll review it and send you the next steps.",
    sessionType: "full",
  },
];

export function getServicePackage(slug: string) {
  return SERVICE_PACKAGES.find((servicePackage) => servicePackage.slug === slug);
}