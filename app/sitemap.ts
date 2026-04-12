import type { MetadataRoute } from "next";

import { getAllPostsMeta } from "../lib/blog";
import { getAbsoluteUrl } from "../lib/site";

const staticRoutes = [
  "",
  "/about",
  "/about/viewpoint",
  "/aeo-services",
  "/blog",
  "/case-studies",
  "/case-studies/jultech",
  "/case-studies/nova-ai",
  "/contact",
  "/free-appraisal",
  "/geo-services",
  "/legal/privacy",
  "/legal/terms",
  "/multilingual-web-design",
  "/privacy",
  "/seo-services",
  "/services",
  "/services/business",
  "/services/e-commerce",
  "/services/landing-pages",
  "/services/portfolio",
  "/web-design",
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