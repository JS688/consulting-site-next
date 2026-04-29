"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  Languages,
  Search,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

import { BlogMeta } from "@/lib/blog";
import BlogSearchBar from "@/components/BlogSearchBar";
import BlogCategoryFilter from "@/components/BlogCategoryFilter";
import MostReadSidebar from "./multilingual-optimization/MostReadSidebar";

const POSTS_PER_PAGE = 6;

const editorialPillars = [
  {
    title: "SEO that still matters",
    text: "How structure, authority, and intent shape Google visibility now.",
    icon: Search,
  },
  {
    title: "AEO and AI answers",
    text: "How to make your business easier for AI systems to interpret and cite.",
    icon: BrainCircuit,
  },
  {
    title: "Multilingual discoverability",
    text: "How to stay clear and credible across languages and markets.",
    icon: Languages,
  },
];

const faqItems = [
  {
    question: "What topics does the JulTech blog cover?",
    answer:
      "The blog focuses on SEO, AEO, AI visibility, multilingual optimization, Google search, and the website systems businesses need to be found and trusted online.",
  },
  {
    question: "Who is this blog for?",
    answer:
      "It is written for business owners and teams who want practical guidance on how websites perform in Google, AI search tools, and multilingual markets.",
  },
  {
    question: "Why does this matter for AEO?",
    answer:
      "Answer engine optimization depends on clarity. A page that clearly explains topics, questions, and outcomes is easier for AI systems to understand and surface in answers.",
  },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default function BlogPageClient({ allPosts }: { allPosts: BlogMeta[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [page, setPage] = useState(1);

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(allPosts.map((post) => post.category).filter((value): value is string => Boolean(value)))
      ),
    ],
    [allPosts]
  );

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return allPosts.filter((post) => {
      const matchesQuery =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        (post.excerpt ?? "").toLowerCase().includes(normalizedQuery) ||
        (post.category ?? "").toLowerCase().includes(normalizedQuery);

      const matchesCategory = category === "All" || post.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [allPosts, query, category]);

  const hasActiveFilters = query.trim().length > 0 || category !== "All";
  const featuredPost = !hasActiveFilters ? filtered[0] : null;
  const remainingPosts = featuredPost ? filtered.slice(1) : filtered;
  const totalPages = Math.max(1, Math.ceil(remainingPosts.length / POSTS_PER_PAGE));
  const currentPage = Math.min(page, totalPages);
  const paginated = remainingPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const visibleCount = (featuredPost ? 1 : 0) + paginated.length;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),transparent_28%),linear-gradient(180deg,rgba(8,8,8,1),rgba(5,5,5,1))]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-size-[58px_58px] opacity-[0.12]" />

      <section className="relative px-6 pb-10 pt-18 lg:px-12 lg:pb-14 lg:pt-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-[#d4af37]/10 px-4 py-2 text-sm text-[#f1d98a]">
              <Sparkles className="h-4 w-4" />
              SEO, AEO, AI visibility, and multilingual search
            </div>
            <h1 className="mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
              A sharper blog for businesses that want to be found and trusted online
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
              This blog answers practical questions about Google visibility, AI answer optimization, multilingual websites, and the systems that help modern businesses get discovered, understood, and chosen.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/65">
              <div className="rounded-full border border-white/10 bg-white/4 px-4 py-2">
                {allPosts.length}+ articles
              </div>
              <div className="rounded-full border border-white/10 bg-white/4 px-4 py-2">
                {categories.length - 1} topic areas
              </div>
              <div className="rounded-full border border-white/10 bg-white/4 px-4 py-2">
                Written for business owners and growth teams
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.45, ease: "easeOut" }}
            className="grid gap-4"
          >
            {editorialPillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-semibold text-white">{pillar.title}</h2>
                      <p className="mt-2 text-sm leading-7 text-white/65">{pillar.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative px-6 pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          {featuredPost ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12, duration: 0.45, ease: "easeOut" }}
              className="mb-8"
            >
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block overflow-hidden rounded-4xl border border-[#d4af37]/18 bg-[linear-gradient(135deg,rgba(212,175,55,0.12),rgba(255,255,255,0.04))] p-8 shadow-[0_30px_120px_rgba(0,0,0,0.35)] transition hover:border-[#d4af37]/36"
              >
                <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
                  <div>
                    <p className="text-xs uppercase tracking-[0.32em] text-[#f1d98a]">Featured article</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                      {featuredPost.title}
                    </h2>
                    {featuredPost.excerpt ? (
                      <p className="mt-4 max-w-3xl text-base leading-8 text-white/72">
                        {featuredPost.excerpt}
                      </p>
                    ) : null}
                    <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/62">
                      {featuredPost.category ? (
                        <span className="rounded-full border border-white/12 bg-black/20 px-4 py-2">{featuredPost.category}</span>
                      ) : null}
                      <span className="rounded-full border border-white/12 bg-black/20 px-4 py-2">{formatDate(featuredPost.date)}</span>
                      <span className="rounded-full border border-white/12 bg-black/20 px-4 py-2">{featuredPost.readingTimeMinutes} min read</span>
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6 backdrop-blur-sm">
                    <p className="text-xs uppercase tracking-[0.28em] text-white/45">Why read this</p>
                    <p className="mt-4 text-sm leading-7 text-white/72">
                      Start with the clearest article on the page to understand how modern search blends Google indexing, AI interpretation, and human trust.
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f1d98a]">
                      Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ) : null}

          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
            <div className="space-y-8">
              <section className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                  <div className="max-w-2xl">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/40">Browse articles</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Find the topic you need right now</h2>
                    <p className="mt-3 text-sm leading-7 text-white/65">
                      Search by keyword or filter by category to find answers on SEO, AEO, AI visibility, and multilingual growth.
                    </p>
                  </div>
                  <div className="text-sm text-white/50" aria-live="polite">
                    Showing {visibleCount} of {filtered.length} article{filtered.length === 1 ? "" : "s"}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <BlogSearchBar
                    value={query}
                    onSearch={(nextQuery) => {
                      setPage(1);
                      setQuery(nextQuery);
                    }}
                  />

                  <BlogCategoryFilter
                    categories={categories}
                    activeCategory={category}
                    onSelect={(nextCategory) => {
                      setPage(1);
                      setCategory(nextCategory);
                    }}
                  />
                </div>
              </section>

              {paginated.length > 0 ? (
                <section className="grid gap-6 md:grid-cols-2">
                  {paginated.map((post, index) => (
                    <motion.div
                      key={post.slug}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.35, ease: "easeOut" }}
                    >
                      <Link
                        href={`/blog/${post.slug}`}
                        className="group flex h-full flex-col rounded-[1.75rem] border border-white/10 bg-white/3 p-6 shadow-[0_20px_70px_rgba(0,0,0,0.24)] transition hover:-translate-y-1 hover:border-[#d4af37]/28 hover:bg-white/5"
                      >
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.24em] text-white/42">
                          {post.category ? <span className="text-[#d4af37]/80">{post.category}</span> : null}
                          <span>{formatDate(post.date)}</span>
                          <span>{post.readingTimeMinutes} min read</span>
                        </div>

                        <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white">
                          {post.title}
                        </h3>

                        <p className="mt-4 flex-1 text-sm leading-7 text-white/68">
                          {post.excerpt ?? "Read the article for a clear breakdown of the topic, key takeaways, and what it means for modern search visibility."}
                        </p>

                        <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#f1d98a]">
                          Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </section>
              ) : (
                <section className="rounded-[1.75rem] border border-white/10 bg-white/3 p-8 text-center shadow-[0_20px_70px_rgba(0,0,0,0.2)]">
                  <h2 className="text-2xl font-semibold text-white">No articles match that search yet</h2>
                  <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
                    Try a broader keyword or switch back to All categories to browse the full set of articles.
                  </p>
                </section>
              )}

              {totalPages > 1 && paginated.length > 0 ? (
                <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/3 px-5 py-4 text-sm text-white/65">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setPage((previousPage) => Math.max(1, previousPage - 1))}
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-[#d4af37]/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <span>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setPage((previousPage) => Math.min(totalPages, previousPage + 1))}
                    className="rounded-full border border-white/10 px-4 py-2 transition hover:border-[#d4af37]/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              ) : null}

              <section className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">What this blog helps with</p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Built to answer modern visibility questions clearly</h2>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {editorialPillars.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                      <div key={pillar.title} className="rounded-3xl border border-white/8 bg-black/20 p-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-white">{pillar.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-white/65">{pillar.text}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-4xl border border-white/10 bg-white/4 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">FAQ</p>
                <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">Quick answers about this blog</h2>
                <div className="mt-6 grid gap-4">
                  {faqItems.map((item) => (
                    <article key={item.question} className="rounded-3xl border border-white/8 bg-black/20 p-5">
                      <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                      <p className="mt-3 text-sm leading-7 text-white/68">{item.answer}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>

            <MostReadSidebar posts={allPosts} />
          </div>
        </div>
      </section>
    </main>
  );
}
