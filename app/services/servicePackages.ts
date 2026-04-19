export type ServiceSlug = "starter" | "growth" | "premium";

export type ServicePackage = {
  slug: ServiceSlug;
  label: string;
  title: string;
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
  rightFor: string[];
  process: string[];
  bookingTitle: string;
  bookingDescription: string;
  sessionType: "short" | "full";
};

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    slug: "starter",
    label: "Starter - Foundation",
    title: "Starter",
    timeline: "2–4 weeks",
    overviewDescription:
      "A clear, professional website built to establish your presence.",
    bullets: [
      "Custom-built website",
      "Mobile-first give felt performance",
      "Prepared to be found online",
      "Content structure",
      "Clean, focused design",
      "Lightweight interactions",
    ],
    accentClass: "bg-zinc-200",
    primaryPillClass: "bg-zinc-300/70 shadow-[0_8px_20px_rgba(255,255,255,0.08)]",
    pillTextClass: "text-zinc-950",
    selectedCardClass:
      "border-white/20 bg-zinc-100/10 shadow-[0_0_80px_rgba(255,255,255,0.1)]",
    glowClass: "bg-white/12",
    detailTagline:
      "A focused, professionally built foundation for businesses that need credibility fast.",
    detailOverview: [
      "Starter is built for businesses that need a strong first impression without unnecessary complexity. It gives you a custom website that looks credible, feels intentional, and makes it easier for people to trust what you do.",
      "The focus is clarity: clean structure, faster performance, stronger messaging, and a professional presence that is ready to support your next stage of growth.",
    ],
    rightFor: [
      "Launching a new business or offer",
      "Replacing an outdated or inconsistent website",
      "Creating a more credible online presence quickly",
    ],
    process: [
      "Clarify the pages, goals, and core message",
      "Design and build a custom website with a focused structure",
      "Launch with the essentials in place for speed and visibility",
    ],
    bookingTitle: "Tell us about your Starter project",
    bookingDescription:
      "Fill out the short form first so the consultation stays focused. Then complete payment and choose your time in Calendly.",
    sessionType: "full",
  },
  {
    slug: "growth",
    label: "Growth - Visibility",
    title: "Growth",
    timeline: "4–8 weeks",
    overviewDescription:
      "A stronger presence designed to help you get discovered and stand out.",
    bullets: [
      "Everything in Starter",
      "Brand identity & design system",
      "Optimized to be found on Google",
      "Conversion-focused structure",
      "Bilingual support (EN/ES)",
      "Enhanced interactions & animations",
    ],
    accentClass: "bg-blue-400",
    primaryPillClass: "bg-blue-500/85 shadow-[0_10px_24px_rgba(59,130,246,0.18)]",
    pillTextClass: "text-white",
    selectedCardClass:
      "border-blue-300/35 bg-blue-500/10 shadow-[0_0_80px_rgba(59,130,246,0.16)]",
    glowClass: "bg-blue-300/14",
    detailTagline:
      "A stronger visibility layer for businesses ready to look sharper and get found more consistently.",
    detailOverview: [
      "Growth builds on the Starter foundation and adds the systems that help your business stand out. This is where your website starts becoming a clearer brand asset instead of just a digital placeholder.",
      "The package adds design consistency, better search positioning, bilingual support, and stronger interactions so the whole experience feels more refined and more competitive.",
    ],
    rightFor: [
      "Businesses ready to improve discoverability and trust",
      "Teams that need a stronger brand identity online",
      "Companies serving both English and Spanish-speaking audiences",
    ],
    process: [
      "Refine brand direction and digital structure",
      "Build a clearer, stronger presence with visibility in mind",
      "Launch a site experience designed to support growth and conversion",
    ],
    bookingTitle: "Tell us about your Growth project",
    bookingDescription:
      "Share what is holding the business back right now, then continue through payment and choose the right meeting time.",
    sessionType: "full",
  },
  {
    slug: "premium",
    label: "Premium - Growth",
    title: "Premium",
    timeline: "3+ months",
    overviewDescription:
      "A fully refined system built to grow your visibility, authority, and results.",
    bullets: [
      "Everything in Growth",
      "Advanced interactions & motion design",
      "Messaging & content refinement",
      "Conversion strategy & optimization",
      "Visibility across AI platforms",
      "Ongoing support & iteration",
    ],
    accentClass: "bg-yellow-400",
    primaryPillClass: "bg-yellow-400 shadow-[0_12px_30px_rgba(245,197,24,0.24)]",
    pillTextClass: "text-black",
    selectedCardClass:
      "border-yellow-300/35 bg-yellow-400/10 shadow-[0_0_80px_rgba(245,197,24,0.18)]",
    glowClass: "bg-yellow-300/14",
    detailTagline:
      "A complete digital system built for businesses that want visibility, authority, and ongoing refinement.",
    detailOverview: [
      "Premium is for businesses that need more than a website. It combines stronger design, sharper messaging, visibility strategy, and continuous iteration into one higher-level system.",
      "This tier is built for brands that want to scale with more precision, appear stronger across search and AI, and keep improving after launch instead of treating the site as a one-time project.",
    ],
    rightFor: [
      "Businesses ready for a higher-authority digital presence",
      "Teams that need stronger messaging and conversion performance",
      "Brands that want ongoing support instead of a one-time build",
    ],
    process: [
      "Refine the offer, messaging, and conversion path",
      "Build a more advanced presence with motion, content, and visibility strategy",
      "Continue improving through support, feedback, and iteration",
    ],
    bookingTitle: "Tell us about your Premium project",
    bookingDescription:
      "Start with the intake form so we understand the scope properly, then continue through payment and choose a time on Calendly.",
    sessionType: "full",
  },
];

export function getServicePackage(slug: string) {
  return SERVICE_PACKAGES.find((servicePackage) => servicePackage.slug === slug);
}