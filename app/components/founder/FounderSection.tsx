"use client";

import { useState } from "react";
import Image from "next/image";

export default function FounderSection() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mt-24 max-w-3xl mx-auto px-6 text-center">

      {/* HEADSHOT */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mx-auto mb-6 border border-[#d4c5a5] shadow-sm bg-black">
        <Image
          src="/julia-headshot.jpg"
          alt="Julia, Founder of JulTech"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* NAME */}
      <h3 className="text-2xl font-semibold text-white mb-1 relative inline-block">
        Julia Sokolsky
        <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-[rgb(245,197,24)]" />
      </h3>

      {/* TITLE */}
      <p className="text-[rgb(245,197,24)] font-bold mb-5">
        Founder & AI Web Specialist & Business Strategist
      </p>
        <p className="text-[rgb(245,197,24)] font-bold mb-5">
        Built by a strategist who understands both business and technology.
      </p>

      {/* BIO */}
      <p className="text-white/70 leading-relaxed">
        I founded JulTech after working across diverse business environments and
        seeing how many organizations struggle to modernize in a way that feels
        strategic, efficient, and genuinely human. My background blends global
        business experience, multilingual communication, and a deep understanding
        of how technology can transform operations when applied thoughtfully.
      </p>

      {expanded && (
        <p className="text-white/70 leading-relaxed mt-4">
          I graduated with honors from the University of South Carolina with a
          degree in Business Administration and Spanish, and I am currently
          pursuing my master&apos;s at USC with concentrations in international
          business, AI in business applications, business analytics, and
          cybersecurity. This combination allows me to bridge strategy, data,
          and real-world execution to help clients make confident decisions in a
          rapidly evolving digital landscape.{" "}
          <span className="italic">
            My mission is simple: deliver exceptional service so every client
            feels supported and in good hands.
          </span>
        </p>
      )}

      {/* READ MORE BUTTON */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="mt-5 text-[rgb(245,197,24)] text-sm font-medium underline underline-offset-4 hover:opacity-80 transition"
      >
        {expanded ? "Show less" : "Read more"}
      </button>

    </section>
  );
}
