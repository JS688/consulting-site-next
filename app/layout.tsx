import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { siteUrl } from "../lib/site";

import type { ReactNode } from "react";

const shouldIndexSite = process.env.VERCEL_ENV !== "preview";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JulTech AI | AI Automation & Web Development",
    template: "%s | JulTech AI",
  },
  description:
    "We build AI-powered solutions and websites to automate your business.",
  applicationName: "JulTech™ AI",
  keywords: [
    "JulTech AI",
    "AI-ready websites",
    "multilingual web design",
    "SEO",
    "AEO",
    "GEO",
    "case studies",
    "AI consulting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "JulTech™ AI",
    title: "JulTech AI | AI Automation & Web Development",
    description:
      "We build AI-powered solutions and websites to automate your business.",
    locale: "en_US",
    images: [
      {
        url: "/logo.png",
        width: 1000,
        height: 1000,
        alt: "JulTech AI Consulting logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JulTech AI | AI Automation & Web Development",
    description:
      "We build AI-powered solutions and websites to automate your business.",
    images: ["/logo.png"],
  },
  icons: {
    icon: [{ url: "/logo.png", sizes: "1000x1000", type: "image/png" }],
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  robots: {
    index: shouldIndexSite,
    follow: shouldIndexSite,
  },
  category: "technology",
  verification: {
    google: "c44v513uJHnBMYTU0ESaKu-tQJeUQ5TwY0f80UtvscE",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="bg-black">
      <head>
        {/* Remix Icons for footer + header icons */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        {/* Calendly popup styles */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        {/* LocalBusiness Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "JulTech AI Consulting Group LLC",
              "url": "https://www.jultechai.com/",
              "telephone": "+1-803-386-1672",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "19 Cassia Court",
                "addressLocality": "Columbia",
                "addressRegion": "SC",
                "postalCode": "29209",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "Place",
                "name": "Columbia, SC"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "34.0007",
                "longitude": "-81.0348"
              },
              "sameAs": [
                "https://www.linkedin.com/company/112936546/",
                "https://www.linkedin.com/in/julia-sokolsky/"
              ],
              "description": "JulTech AI Consulting Group helps businesses design and optimize websites that rank in Google search and get recommended by AI tools like ChatGPT.",
              "serviceType": [
                "Website Design",
                "Local SEO",
                "AI Visibility Optimization",
                "Technical SEO"
              ]
            })
          }}
        />
      </head>

      <body className="bg-zinc-900 text-white antialiased flex flex-col min-h-screen">
        {/* Header stays at the top */}
        <Header />


        {/* Main content grows naturally */}
        <main className="flex-1 pt-14">
          {children}
        </main>

        {/* Footer stays at the bottom */}
        <Footer />
        {/* Calendly popup widget */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
