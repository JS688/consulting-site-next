import type { MetadataRoute } from "next";

import { getAllPostsMeta } from "../lib/blog";
import { getAbsoluteUrl } from "../lib/site";

const staticRoutes = [
  "",
  "/es",
  "/es/about",
  "/es/blog",
  "/es/case-studies",
  "/es/contact",
  "/es/free-appraisal",
  "/es/multilingual-web-design",
  "/es/one-hour-consultation",
  "/es/book",
  "/es/payment-complete",
  "/es/booking-complete",
  "/es/services",
  "/es/strategy-call/15-min",
  "/es/strategy-call/1-hour",
  "/es/web-design",
  "/es/seo-services",
  "/es/aeo-services",
  "/es/geo-services",
  "/about",
  "/blog",
  "/case-studies",
  "/case-studies/jultech",
  "/case-studies/nova-ai",
  "/contact",
  "/15-min-strategy-call",
  "/free-appraisal",
  "/book",
  "/booking-complete",
  "/legal/privacy",
  "/legal/terms",
  "/one-hour-consultation",
  "/payment-complete",
  "/privacy",
  "/services",
  "/seo-services-columbia-sc.html",
  "/website-design-columbia-sc.html",
  "/local-seo-columbia-sc.html",
  "/seo-for-realtors-columbia-sc.html",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = staticRoutes.map((route) => ({
    url: getAbsoluteUrl(route || "/"),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/contact" || route === "/services" ? 0.9 : 0.7,
  })) satisfies MetadataRoute.Sitemap;

  const blogRoutes = getAllPostsMeta().map((post) => ({
    url: getAbsoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}