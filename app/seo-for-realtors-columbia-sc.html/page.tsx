import type { Metadata } from "next";

import ColumbiaLandingPage, {
  type ColumbiaLandingConfig,
} from "../components/landing/ColumbiaLandingPage";

const pageConfig: ColumbiaLandingConfig = {
  label: "SEO for Realtors Columbia SC",
  title: "SEO for Realtors in Columbia, SC",
  description:
    "We help real estate professionals in Columbia improve visibility for buyer, seller, neighborhood, and location-based searches across Google and modern search platforms.",
  locationLine:
    "Built for realtors in Columbia, SC who need stronger search visibility, clearer local authority, and a website that supports ongoing lead generation.",
  serviceType: "SEO for Realtors",
  benefits: [
    "Improve visibility for searches related to neighborhoods, buying, selling, and real estate agents in Columbia.",
    "Create clearer service and area pages that support both search rankings and customer trust.",
    "Structure content so buyers and sellers can quickly understand what makes your business the right fit.",
    "Build a website and content system that can support long-term local real estate visibility.",
  ],
  process: [
    {
      title: "Map search demand to your market",
      description:
        "We identify the real estate searches tied to Columbia neighborhoods, seller intent, buyer intent, and local expertise.",
    },
    {
      title: "Build stronger location and service pages",
      description:
        "We improve the structure and clarity of pages tied to neighborhoods, listings, services, and local expertise.",
    },
    {
      title: "Improve trust and discoverability",
      description:
        "We refine messaging and on-page content so your site is easier to understand and easier to trust.",
    },
    {
      title: "Support long-term growth",
      description:
        "We help you build a foundation that can keep attracting buyers and sellers as your market presence grows.",
    },
  ],
  audience: [
    "Independent realtors",
    "Real estate teams",
    "Buyer-focused agents",
    "Seller-focused agents",
    "Brokerages in Columbia, SC",
  ],
  faqs: [
    {
      question: "Why do realtors need SEO?",
      answer:
        "SEO helps realtors show up when buyers and sellers search for agents, neighborhoods, homes, and local real estate guidance.",
    },
    {
      question: "Can SEO help neighborhood visibility?",
      answer:
        "Yes. Clear neighborhood pages and location-focused content can help your business become more visible for local market searches.",
    },
    {
      question: "Do you work with individual agents and teams?",
      answer:
        "Yes. We can support individual realtors, growing teams, and brokerages that want stronger search visibility.",
    },
    {
      question: "Is this specific to Columbia, SC?",
      answer:
        "Yes. This page is targeted to realtor SEO opportunities in Columbia, South Carolina and surrounding local markets.",
    },
  ],
};

export const metadata: Metadata = {
  title: "SEO for Realtors Columbia SC | JulTech AI",
  description: pageConfig.description,
  alternates: {
    canonical: "/seo-for-realtors-columbia-sc.html",
  },
};

export default function SeoForRealtorsColumbiaScPage() {
  return <ColumbiaLandingPage config={pageConfig} />;
}