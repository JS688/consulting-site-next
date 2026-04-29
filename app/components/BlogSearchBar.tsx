"use client";

import { Search } from "lucide-react";

export default function BlogSearchBar({
  value,
  onSearch,
  placeholder = "Search articles about SEO, AEO, AI visibility...",
}: {
  value: string;
  onSearch: (query: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="relative block">
      <Search className="pointer-events-none absolute left-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        className="w-full rounded-full border border-white/10 bg-white/[0.04] py-4 pl-12 pr-5 text-white outline-none transition placeholder:text-white/30 focus:border-[#d4af37]/55 focus:bg-white/[0.06]"
      />
    </label>
  );
}
