import Link from "next/link";

import { getAllPostsMetaEs } from "@/lib/blogEs";

export default function EsBlogPage() {
  const posts = getAllPostsMetaEs();

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-white">
      <section className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-xs uppercase tracking-[0.35em] text-[#d4af37]/80">Blog</p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">
            Ideas sobre visibilidad AI y SEO
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
            Este espacio reune articulos en espanol sobre visibilidad en IA, optimizacion multilingue y el futuro de la busqueda inteligente.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/es/blog/${post.slug}`}
              className="rounded-3xl border border-[#d4af37]/20 bg-black/35 p-6 transition hover:border-[#d4af37]/45"
            >
              <h2 className="text-xl font-semibold text-[#d4af37]">{post.title}</h2>
              <p className="mt-2 text-sm text-zinc-500">{post.date}</p>
              {post.excerpt ? <p className="mt-4 text-sm leading-7 text-zinc-300">{post.excerpt}</p> : null}
              <p className="mt-5 text-sm font-medium text-white/70">Leer articulo</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}