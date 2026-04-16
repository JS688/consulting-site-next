"use client";

import { useState } from "react";

const categories = ["SEO", "AI", "Bilingual", "GEO"];

export default function BlogCategoryFilter({
  onSelect,
}: {
  onSelect: (category: string) => void;
}) {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap gap-4 mt-10">
      {["All", ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => {
            setActive(cat);
            onSelect(cat);
          }}
          className={`px-5 py-2 rounded-full border transition ${
            active === cat
              ? "border-[#d4af37] text-[#d4af37]"
              : "border-gray-600 text-gray-300 hover:border-[#d4af37]/40"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
