import type { MetadataRoute } from "next";

import { getAllPostsMeta } from "../lib/blog";
import { getAbsoluteUrl } from "../lib/site";

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/case-studies",
  "/case-studies/jultech",
  "/case-studies/nova-ai",
  "/contact",
  "/15-min-strategy-call",
  "/free-appraisal",
  "/legal/privacy",
  "/legal/terms",
  "/one-hour-consultation",
  "/privacy",
  "/services",
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