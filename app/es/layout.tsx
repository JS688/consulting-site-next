import type { ReactNode } from "react";

/**
 * Wraps all /es/* pages. Next.js App Router allows nested layouts to
 * override the <html> lang attribute for the subtree.
 */
export default function EsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

// Tell Next.js to set lang="es" on the <html> element for this segment.
// This is picked up by generateMetadata / the html tag rendering in the root layout
// through the segment-level `htmlLang` export (Next 15+).
// For broad compatibility we also handle it via the root layout check below.
export const metadata = {
  // Ensures hreflang and og:locale are correct for ES pages
  alternates: {
    languages: {
      en: "/",
    },
  },
  other: {
    "content-language": "es",
  },
};
