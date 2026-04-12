"use client";

import { useState } from "react";

export default function BlogSearchBar({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) {
  const [value, setValue] = useState("");

  return (
    <div className="mt-10">
      <input
        type="text"
        placeholder="Search articles..."
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full max-w-xl px-5 py-3 rounded-lg bg-black border border-gray-700 text-white placeholder-gray-500 focus:border-[#d4af37] outline-none transition"
      />
    </div>
  );
}
