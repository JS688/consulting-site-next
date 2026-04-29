export default function BlogCategoryFilter({
  categories,
  activeCategory,
  onSelect,
}: {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => {
            onSelect(cat);
          }}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            activeCategory === cat
              ? "border-[#d4af37]/60 bg-[#d4af37]/12 text-[#f2d77b]"
              : "border-white/10 bg-white/[0.03] text-white/70 hover:border-[#d4af37]/30 hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
