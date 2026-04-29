import type { Metadata } from "next";

import ColumbiaLandingPage, {
  type ColumbiaLandingConfig,
} from "../components/landing/ColumbiaLandingPage";

const pageConfig: ColumbiaLandingConfig = {
  label: "Local SEO Columbia SC",
  title: "Local SEO Services in Columbia, SC",
  description:
    "We help Columbia businesses improve local search visibility through stronger location signals, better page structure, and clearer Google Business Profile support.",
  locationLine:
    "Built for businesses that need to show up when people in Columbia search for nearby services, trusted providers, and local solutions.",
  serviceType: "Local SEO Services",
  benefits: [
    "Improve local visibility when customers search for services in Columbia, SC.",
    "Strengthen the connection between your website, service pages, and Google Business Profile.",
    "Clarify local relevance through better page structure, content, and service-area targeting.",
    "Support stronger map and local-intent search performance over time.",
  ],
  process: [
    {
      title: "Review local search signals",
      description:
        "We identify gaps in your location pages, on-site messaging, business profile alignment, and local trust signals.",
    },
    {
      title: "Strengthen local page content",
      description:
        "We improve your content so it reflects the services, locations, and customer searches that matter most.",
    },
    {
      title: "Support Google Business Profile alignment",
      description:
        "We connect on-site messaging with your local profile so search engines can better understand your relevance.",
    },
    {
      title: "Build consistent local visibility",
      description:
        "We refine your structure and content over time to help you compete for more local search demand.",
    },
  ],
  audience: [
    "Local service businesses",
    "Restaurants and cafes",
    "Home services",
    "Professional offices",
    "Businesses targeting Columbia neighborhoods",
  ],
  faqs: [
    {
      question: "What is local SEO?",
      answer:
        "Local SEO helps your business appear more clearly for searches tied to a location, such as city-based services, nearby providers, and map-driven results.",
    },
    {
      question: "Does local SEO include Google Business Profile work?",
      answer:
        "It can. We often align website structure and content with Google Business Profile signals so both support stronger local visibility.",
    },
    {
      question: "Can local SEO help service-area businesses?",
      answer:
        "Yes. Local SEO can help businesses that serve Columbia and surrounding areas, even if they do not rely on a walk-in storefront.",
    },
    {
      question: "How long does local SEO take?",
      answer:
        "Local SEO usually improves over time as your content, structure, and local signals become clearer and more consistent.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Local SEO Columbia SC | JulTech AI",
  description: pageConfig.description,
  alternates: {
    canonical: "/local-seo-columbia-sc.html",
  },
};

export default function LocalSeoColumbiaScPage() {
  return <ColumbiaLandingPage config={pageConfig} />;
}