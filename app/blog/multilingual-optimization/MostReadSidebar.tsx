import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";

interface Props {
  posts: Array<{
    title: string;
    date: string;
    slug: string;
    category?: string;
    excerpt?: string;
    mostRead?: boolean;
    readingTimeMinutes: number;
  }>;
  locale?: "en" | "es";
}

export default function MostReadSidebar({ posts, locale = "en" }: Props) {
  const mostRead = posts.filter((p) => p.mostRead).slice(0, 5);
  const featuredPosts = mostRead.length ? mostRead : posts.slice(0, 5);
  const title = locale === "en"
    ? mostRead.length ? "Most read" : "Featured articles"
    : mostRead.length ? "Mas leidos" : "Articulos destacados";
  const hrefPrefix = locale === "en" ? "/blog" : "/es/blog";

  return (
    <aside className="space-y-6 xl:sticky xl:top-24">
      <div className="rounded-[1.75rem] border border-white/10 bg-white/4 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#d4af37]/20 bg-[#d4af37]/10 text-[#d4af37]">
            <BookOpenText className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">{locale === "en" ? "Reader picks" : "Lecturas destacadas"}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{title}</h3>
          </div>
        </div>

        <ul className="mt-6 space-y-4">
          {featuredPosts.map((post) => (
            <li key={post.slug} className="rounded-2xl border border-white/8 bg-black/20 p-4 transition hover:border-[#d4af37]/30">
              <Link href={`${hrefPrefix}/${post.slug}`} className="block">
                {post.category ? (
                  <p className="text-[11px] uppercase tracking-[0.26em] text-[#d4af37]/70">{post.category}</p>
                ) : null}
                <p className="mt-2 text-sm font-semibold leading-6 text-white">{post.title}</p>
                <p className="mt-2 text-xs text-white/45">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-[1.75rem] border border-[#d4af37]/18 bg-[linear-gradient(180deg,rgba(212,175,55,0.1),rgba(255,255,255,0.03))] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
        <p className="text-xs uppercase tracking-[0.28em] text-white/45">{locale === "en" ? "Need help applying this?" : "Necesitas ayuda para aplicar esto?"}</p>
        <h3 className="mt-3 text-2xl font-semibold text-white">{locale === "en" ? "Turn insight into visibility" : "Convierte conocimiento en visibilidad"}</h3>
        <p className="mt-4 text-sm leading-7 text-white/72">
          {locale === "en"
            ? "If you want your website to be clearer for Google, AI tools, and real customers, start with the service path that fits your business."
            : "Si quieres que tu sitio web sea mas claro para Google, para herramientas de IA y para clientes reales, empieza con la ruta de servicios que mejor encaje con tu negocio."}
        </p>
        <Link
          href={locale === "en" ? "/services" : "/es/services"}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
        >
          {locale === "en" ? "Explore services" : "Explora servicios"} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </aside>
  );
}
