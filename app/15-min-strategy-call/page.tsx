"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const CalendlyPageEmbed = dynamic(() => import("../components/CalendlyPageEmbed"), {
  loading: () => (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4">
      <div className="text-center">
        <div className="mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#d7b35a]/30 border-t-[#d7b35a]" />
        <p className="text-white/70">Loading calendar...</p>
      </div>
    </div>
  ),
  ssr: false,
});

export default function StrategyCallPage() {
  return (
    <main className="min-h-screen bg-[#050505] py-12">
      <Suspense fallback={<div>Loading...</div>}>
        <CalendlyPageEmbed url="https://calendly.com/jultech-ai/new-meeting-1" />
      </Suspense>
    </main>
  );
}