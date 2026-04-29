import type { Metadata } from "next";

import ColumbiaLandingPage, {
  type ColumbiaLandingConfig,
} from "../components/landing/ColumbiaLandingPage";

const pageConfig: ColumbiaLandingConfig = {
  label: "Website Design Columbia SC",
  title: "Website Design for Businesses in Columbia, SC",
  description:
    "We design high-performance websites for Columbia businesses that need clearer messaging, stronger conversion paths, and search-ready structure.",
  locationLine:
    "Built for businesses in Columbia, SC that need a website that looks refined, performs well, and supports long-term visibility.",
  serviceType: "Website Design",
  benefits: [
    "Create a website that clearly explains your services and makes your business easier to trust.",
    "Improve performance on mobile so customers can navigate, call, and inquire without friction.",
    "Build a site structure that supports SEO and modern search visibility from the start.",
    "Turn your website into a clearer conversion path for calls, bookings, and qualified leads.",
  ],
  process: [
    {
      title: "Clarify messaging and structure",
      description:
        "We define what your site needs to say and how the pages should be organized to support conversion and search.",
    },
    {
      title: "Design for trust and usability",
      description:
        "We design an experience that feels clear, modern, and easy to use across desktop and mobile.",
    },
    {
      title: "Build with performance in mind",
      description:
        "We create pages that load cleanly, guide visitors clearly, and support stronger technical foundations.",
    },
    {
      title: "Prepare the site for growth",
      description:
        "We launch with structure that can support future SEO, local landing pages, and broader visibility efforts.",
    },
  ],
  audience: [
    "Local businesses",
    "Professional services",
    "Restaurants and cafes",
    "Home service companies",
    "Brands planning a redesign",
  ],
  faqs: [
    {
      question: "Do you design custom websites?",
      answer:
        "Yes. We build custom websites tailored to your services, audience, and visibility goals rather than relying on generic templates.",
    },
    {
      question: "Can you redesign an outdated site?",
      answer:
        "Yes. We regularly help businesses replace sites that look outdated, load poorly, or fail to support search visibility and conversions.",
    },
    {
      question: "Will the website be mobile-friendly?",
      answer:
        "Yes. Mobile usability is a core part of the design and development process because many customers first experience your business on their phone.",
    },
    {
      question: "Do you build websites for Columbia businesses specifically?",
      answer:
        "Yes. This landing page is built for businesses targeting Columbia, South Carolina and nearby local customers.",
    },
  ],
};

export const metadata: Metadata = {
  title: "Website Design Columbia SC | JulTech AI",
  description: pageConfig.description,
  alternates: {
    canonical: "/website-design-columbia-sc.html",
  },
};

export default function WebsiteDesignColumbiaScPage() {
  return <ColumbiaLandingPage config={pageConfig} />;
}