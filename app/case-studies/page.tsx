"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CaseStudiesPage() {
  const fadeUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
    viewport: { once: true, amount: 0.25 },
  };

  const projects = [
    {
      slug: "jultech",
      title: "JulTech Transformation",
      subtitle: "Building a global AI-ready digital presence",
      tags: ["Branding", "Web", "Motion"],
      eyebrow: "Studio System",
      accent: "from-[#f6c21a]/35 via-[#7a6518]/20 to-transparent",
      panel: "from-zinc-900 via-zinc-950 to-black",
    },
    {
      slug: "nova-ai",
      title: "AI Nova Solutions",
      subtitle: "A bold and luxury digital identity for an AI-first brand",
      tags: ["Brand Identity", "Web Experience", "Motion"],
      eyebrow: "AI Identity",
      accent: "from-white/20 via-[#f6c21a]/20 to-transparent",
      panel: "from-zinc-950 via-black to-zinc-900",
    },
  ];

  const quickLinks = [
    { href: "/services", label: "Solutions" },
    { href: "/case-studies/jultech", label: "JulTech Transformation" },
    { href: "/case-studies/nova-ai", label: "AI Nova Solutions" },
  ];

  return (
    <main className="bg-zinc-950 px-6 py-20 text-zinc-100 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div {...fadeUp} className="max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
            Case Studies
          </p>
          <h1 className="mb-6 text-4xl font-semibold sm:text-5xl">
            Selected work focused on building distinctive digital experiences.
          </h1>
          <p className="text-lg leading-relaxed text-zinc-300">
            A selection of projects combining branding, technology, and design systems for modern, global brands.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ duration: 0.55, ease: "easeOut" as const, delay: 0.05 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full border border-[#f6c21a]/30 bg-white/5 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-[#f6c21a]/60 hover:bg-[#f6c21a]/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              {...fadeUp}
              transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" as const }}
              className="group overflow-hidden rounded-4xl border border-white/10 bg-white/5 transition hover:bg-white/10"
            >
              <Link href={`/case-studies/${project.slug}`}>
                <div className="relative">
                  <div className={`relative aspect-16/10 w-full overflow-hidden bg-linear-to-br ${project.panel}`}>
                    <div className={`absolute inset-0 bg-linear-to-br ${project.accent} opacity-80`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(246,194,26,0.12),transparent_30%)]" />
                    <div className="absolute inset-x-8 top-8 rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.32em] text-zinc-400">
                        {project.eyebrow}
                      </p>
                      <p className="mt-3 max-w-xs text-2xl font-semibold text-white">
                        {project.title}
                      </p>
                    </div>
                    <div className="absolute inset-x-8 bottom-8 grid gap-4 sm:grid-cols-3">
                      <div className="h-24 rounded-3xl border border-white/10 bg-white/6 backdrop-blur-sm" />
                      <div className="h-24 rounded-3xl border border-[#f6c21a]/20 bg-[#f6c21a]/10 backdrop-blur-sm" />
                      <div className="h-24 rounded-3xl border border-white/10 bg-white/6 backdrop-blur-sm" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-medium text-white">
                      {project.title}
                    </h2>
                    <p className="mt-2 text-zinc-300">{project.subtitle}</p>

                    <div className="mt-4 flex flex-wrap gap-2 text-sm">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 px-3 py-1 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
