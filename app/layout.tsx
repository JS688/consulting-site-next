// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Header from "./components/Header";
import RightColumn from "./components/RightColumn";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jultech — AI Business Consulting",
  description: "Jultech — AI strategy & implementation for growth-stage and mid-market companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}>
        <Header />

        <main className="pt-20 min-h-screen">
          <div className="max-w-screen-xl mx-auto px-6 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <section className="lg:col-span-2">{children}</section>
              <aside className="hidden lg:block">
                <RightColumn />
              </aside>
            </div>
          </div>
        </main>

        <footer className="mt-24 border-t border-gray-800/50">
          <div className="max-w-screen-xl mx-auto px-6 py-8 text-sm text-gray-400">
            © {new Date().getFullYear()} Jultech — AI Business Consulting
            <div className="mt-2">Built with care — design by Jultech</div>
          </div>
        </footer>
      </body>
    </html>
  );
}