import "./globals.css";
import Header from "./components/Header";

import Footer from "./components/Footer";

export const metadata = {
  title: "JulTech AI — AI‑Ready Websites",
  description: "Premium, modern, AI‑ready websites built with clarity and trust.",
};

import type { ReactNode } from "react";

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
