// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";
import Header from "./components/Header";
import GoldenNeuralWave from "./components/GoldenNeuralWave";
import Footer from "./components/Footer";
import NeuralBackground from "./components/NeuralBackground";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jultech — AI Business Consulting",
  description:
    "Jultech — AI strategy & implementation for growth-stage and mid-market companies.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex min-h-screen flex-col bg-black text-white antialiased`}
      >
        <Header />
        <GoldenNeuralWave />

        {/* Client-only animated background */}
        <NeuralBackground />

        <main className="flex-1 pt-2">
          <div className="mx-auto max-w-7xl px-6 py-8">
            <section>{children}</section>
          </div>
        </main>

        <Footer />
      </body>
    </html>
  );
}
