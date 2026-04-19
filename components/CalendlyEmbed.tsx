import { Suspense } from "react";
import CalendlyInlineEmbed from "@/book/CalendlyInlineEmbed";

export default function CalendlyEmbed() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <Suspense
        fallback={<div className="min-h-225 w-full bg-white/5 p-6 text-white/60">Loading booking widget...</div>}
      >
        <CalendlyInlineEmbed />
      </Suspense>
    </div>
  );
}