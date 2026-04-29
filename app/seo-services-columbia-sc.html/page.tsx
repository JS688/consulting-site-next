import type { Metadata } from "next";

import ColumbiaLandingPage, {
  type ColumbiaLandingConfig,
} from "../components/landing/ColumbiaLandingPage";

const pageConfig: ColumbiaLandingConfig = {
  label: "SEO Services Columbia SC",
  title: "SEO Services for Businesses in Columbia, SC",
  description:
    "We help businesses in Columbia improve rankings, attract qualified traffic, and build stronger visibility across Google and modern search platforms.",
  locationLine:
    "Built for Columbia, SC businesses that need stronger search visibility without treating strategy, content, and website structure as separate problems.",
  serviceType: "SEO Services",
  benefits: [
    "Rank for the searches your customers actually use in Columbia and surrounding markets.",
    "Improve site structure, internal linking, and content clarity so search engines can understand your services.",
    "Strengthen visibility across Google search while supporting modern AI-driven discovery.",
    "Turn your website into a stronger lead-generation asset instead of a static brochure.",
  ],
  process: [
    {
      title: "Audit what is holding visibility back",
      description:
        "We review your structure, content, and keyword alignment to identify the bottlenecks limiting rankings.",
    },
    {
      title: "Align pages with real search intent",
      description:
        "We refine your page content so it matches how people in Columbia search for the services you offer.",
    },
    {
      title: "Improve technical and on-page signals",
      description:
        "We strengthen internal links, headings, metadata, and page structure to support better indexing and stronger relevance.",
    },
    {
      title: "Build momentum over time",
      description:
        "We keep improving clarity and authority so your site can earn more traffic, inquiries, and trust.",
    },
  ],
  audience: [
    "Local service businesses",
    "Professional firms",
    "Restaurants and cafes",
    "Home services",
    "Growing brands in Columbia, SC",
  ],
  faqs: [
    {
      question: "What do your SEO services include?",
      answer:
        "Our SEO work includes structure improvements, content alignment, internal linking, keyword targeting, and technical recommendations that support stronger visibility.",
    },
    {
      question: "Can SEO help with AI visibility too?",
      answer:
        "Yes. Strong SEO improves clarity and structure, which also helps modern search systems and AI tools better understand your business.",
    },
    {
      question: "Do you work with existing websites?",
      answer:
        "Yes. We can improve an existing site or combine SEO work with a redesign when the current site structure is holding performance back.",
    },
    {
      question: "Is this focused on Columbia, SC businesses?",
      answer:
        "Yes. This landing page is tailored for businesses targeting Columbia, South Carolina and nearby local search demand.",
    },
  ],
};

export const metadata: Metadata = {
  title: "SEO Services Columbia SC | JulTech AI",
  description: pageConfig.description,
  alternates: {
    canonical: "/seo-services-columbia-sc",
  },
};

export default function SeoServicesColumbiaScPage() {
  return <ColumbiaLandingPage config={pageConfig} />;
}