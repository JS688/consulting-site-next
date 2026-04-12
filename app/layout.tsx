import "./globals.css";
import type { Metadata } from "next";
import Header from "./components/Header";

import Footer from "./components/Footer";
import { siteUrl } from "../lib/site";

import type { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "JulTech AI | AI-Ready Websites and Global Visibility",
    template: "%s | JulTech AI",
  },
  description:
    "JulTech AI builds premium websites, multilingual visibility systems, and AI-ready digital experiences for global businesses.",
  applicationName: "JulTech AI",
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
    siteName: "JulTech AI",
    title: "JulTech AI | AI-Ready Websites and Global Visibility",
    description:
      "Premium websites, multilingual visibility, and AI-forward digital strategy for ambitious brands.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "JulTech AI | AI-Ready Websites and Global Visibility",
    description:
      "Premium websites, multilingual visibility, and AI-forward digital strategy for ambitious brands.",
  },
  category: "technology",
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
      </head>

      <body className="bg-zinc-900 text-white antialiased flex flex-col min-h-screen">
        {/* Header stays at the top */}
        <Header />


        {/* Main content grows naturally */}
        <main className="flex-1">
          {children}
        </main>

        {/* SSL notice shown on every page above the footer */}
        <section className="bg-zinc-900 px-6 py-6 text-center text-sm text-gray-400">
          <p className="opacity-80">
            🔒 Your data is safe and secure. This website is protected with industry-standard SSL encryption.
          </p>
        </section>

        {/* Footer stays at the bottom */}
        <Footer />
      </body>
    </html>
  );
}
