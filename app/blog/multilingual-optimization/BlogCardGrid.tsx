"use client";

import { motion } from "framer-motion";

interface BlogCardProps {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
}

const posts: BlogCardProps[] = [
  {
    title: "The Future of AI Visibility",
    slug: "ai-visibility",
    date: "April 12, 2026",
    excerpt: "How businesses are found and chosen in the AI era...",
  },
  {
    title: "Bilingual Optimization — The Hidden Growth Lever",
    slug: "multilingual-optimization",
    date: "April 12, 2026",
    excerpt:
      "Unlocking global visibility in English, Spanish, Portuguese, and Russian...",
  },
];

export default function BlogCardGrid() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 mt-16">
      {posts.map((post, index) => (
        <motion.a
          key={post.slug}
          href={`/blog/${post.slug}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15, duration: 0.6 }}
          className="block rounded-xl border border-[#d4af37]/20 p-6 hover:border-[#d4af37]/40 transition bg-black/40 backdrop-blur-sm"
        >
          <h2 className="text-2xl font-semibold text-[#d4af37]">
            {post.title}
          </h2>
          <p className="mt-2 text-gray-400">{post.date}</p>
          <p className="mt-4 text-gray-300">{post.excerpt}</p>
        </motion.a>
      ))}
    </div>
  );
}
