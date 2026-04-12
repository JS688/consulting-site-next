"use client";
import { useMemo, useState } from "react";
import { BlogMeta } from "@/lib/blog";
import BlogHero from "./multilingual-optimization/BlogHero";
import BlogSearchBar from "@/components/BlogSearchBar";
import BlogCategoryFilter from "@/components/BlogCategoryFilter";
import DarkGoldDivider from "@/components/DarkGoldDivider";
import MostReadSidebar from "./multilingual-optimization/MostReadSidebar";
import { motion } from "framer-motion";

const POSTS_PER_PAGE = 4;

export default function BlogPageClient({ allPosts }: { allPosts: BlogMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return allPosts.filter((post) => {
      const matchesQuery =
        !query ||
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        (post.excerpt ?? "").toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        category === "All" || post.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [allPosts, query, category]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <main className="bg-black min-h-screen text-white">
      <BlogHero />

      <section className="mx-auto max-w-6xl px-6 py-16 grid gap-12 lg:grid-cols-[2fr,1fr]">
        <div>
          <BlogSearchBar onSearch={(q) => { setPage(1); setQuery(q); }} />
          <BlogCategoryFilter
            onSelect={(c) => {
              setPage(1);
              setCategory(c === "All" ? "All" : c);
            }}
          />

          <DarkGoldDivider className="mt-10 mb-8" />

          <div className="grid gap-8 sm:grid-cols-2">
            {paginated.map((post, index) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="block rounded-xl border border-[#d4af37]/20 p-6 hover:border-[#d4af37]/40 transition bg-black/40 backdrop-blur-sm"
              >
                <h2 className="text-xl font-semibold text-[#d4af37]">
                  {post.title}
                </h2>
                <p className="mt-2 text-gray-400">{post.date}</p>
                {post.excerpt && (
                  <p className="mt-4 text-gray-300">{post.excerpt}</p>
                )}
              </motion.a>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center gap-3">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
                className="px-4 py-2 rounded border border-gray-600 disabled:opacity-40 hover:border-[#d4af37]/60"
              >
                Previous
              </button>
              <span className="text-gray-300">
                Page {page} of {totalPages}
              </span>
              <button
                disabled={page === totalPages}
                onClick={() => setPage((p) => p + 1)}
                className="px-4 py-2 rounded border border-gray-600 disabled:opacity-40 hover:border-[#d4af37]/60"
              >
                Next
              </button>
            </div>
          )}
        </div>

        <MostReadSidebar posts={allPosts} />
      </section>
    </main>
  );
}
