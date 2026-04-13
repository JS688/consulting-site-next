const DEFAULT_SITE_URL = "https://www.jul-tech.com";

function normalizeSiteUrl(url: string) {
  if (!url) {
    return DEFAULT_SITE_URL;
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://${url}`;
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.SITE_URL ??
    process.env.VERCEL_PROJECT_PRODUCTION_URL ??
    process.env.VERCEL_URL ??
    DEFAULT_SITE_URL
);

export function getAbsoluteUrl(path = "/") {
  return new URL(path, siteUrl).toString();
}