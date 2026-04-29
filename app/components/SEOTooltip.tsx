"use client";

import { useState } from "react";

export default function SEOTooltip() {
  const [open, setOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="ml-1 text-sm font-medium text-[#f5c84c]/80 underline underline-offset-4 decoration-dotted transition hover:text-[#f5c84c] cursor-pointer"
      >
        (What is SEO? →)
      </button>

      {open && (
        <span className="absolute bottom-full left-0 z-50 mb-2 w-72 rounded-xl border border-white/10 bg-[#0f1a3d] px-4 py-3 text-sm leading-6 text-white/85 shadow-xl">
          SEO means optimizing your website so it shows up on Google when customers search.
        </span>
      )}
    </span>
  );
}
