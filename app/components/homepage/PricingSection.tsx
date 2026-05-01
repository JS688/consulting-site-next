"use client";
import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  CircleCheck,
  Leaf,
  MapPin,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const pricingPackages = [
  {
    eyebrow: "Foundation",
    title: "Get Found in Columbia",
    subtitle: "Website design + search-ready structure",
    icon: BriefcaseBusiness,
    price: "$1,500",
    timeline: "4-8 weeks",
    bestFor: "Businesses launching or rebuilding locally",
    bullets: [
      "Custom website design",
      "Mobile optimization",
      "SEO-ready structure",
      "Clear messaging",
    ],
    description: "Built to help your business show up in local search from day one.",
    ctaLabel: "Start Your Project",
    href: "#contact",
    offsetClass: "md:translate-y-6",
  },
  {
    eyebrow: "Most Chosen",
    title: "Compete in Local Search",
    subtitle: "SEO & visibility optimization",
    icon: TrendingUp,
    price: "$500",
    timeline: "3-6 weeks",
    featured: true,
    bestFor: "Businesses not ranking in Google",
    bullets: [
      "SEO improvements",
      "Keyword alignment (real searches)",
      "Content structuring",
      "Internal linking",
    ],
    description: "Improve how your business appears in Google search results in Columbia.",
    ctaLabel: "Start Optimization",
    href: "#contact",
  },
  {
    eyebrow: "Growth",
    title: "Own Your Local Visibility",
    subtitle: "Ongoing SEO growth",
    icon: Leaf,
    price: "$500",
    priceSuffix: "/ month",
    bestFor: "Businesses ready to grow consistently",
    bullets: [
      "Content updates",
      "Ongoing SEO improvements",
      "Internal linking",
      "Performance tracking",
    ],
    description: "Turn search into a steady flow of local customers.",
    ctaLabel: "Grow With Us",
    href: "#contact",
    offsetClass: "md:translate-y-10",
  },
];

const sectionHighlights = [
  { icon: Search, label: "SEO-Ready" },
  { icon: Zap, label: "Built for Performance" },
  { icon: Target, label: "Designed to Convert" },
];

const whyItWorks = [
  {
    icon: Search,
    title: "Search Engine Ready",
    description: "Clean code, fast loading, and structured for higher rankings.",
  },
  {
    icon: Sparkles,
    title: "AI & LLM Friendly",
    description: "Clear, structured content that AI tools can understand and trust.",
  },
  {
    icon: Target,
    title: "Local SEO Optimized",
    description: "Optimized for local searches and Google Business visibility.",
  },
  {
    icon: Zap,
    title: "Fast & Mobile First",
    description: "Performance-optimized for users and search engines.",
  },
  {
    icon: Shield,
    title: "Built to Convert",
    description: "Strategic messaging that turns visitors into customers.",
  },
];

const trustPoints = [
  "Built for local businesses in Columbia",
  "Clear pricing - no surprises",
  "No long-term contracts",
];

type Locale = "en" | "es";

const pricingPackagesEs = [
  {
    eyebrow: "1. Recreamos su página web completa",
    title: "Recreamos su página web desde cero o mejoramos su página actual, con diseño profesional y calidad que atrae clientes.",
    subtitle: "Incluimos imágenes, animaciones modernas y una estructura pensada para atraer clientes. También le ayudamos a proteger su marca, para que su negocio sea único. Su página estará disponible en inglés y en español, con redacción clara y correcta en ambos idiomas. Nosotros nos encargamos de la traducción para que su mensaje conecte con más clientes. Además, creamos una estrategia para conseguir reseñas reales y las mostramos en su página web para generar confianza. También desarrollamos su marca (branding) para que su negocio destaque en Columbia, SC. 🔹 Sus clientes que hablan inglés podrán entender su negocio perfectamente, porque su página tendrá mensajes claros, bien organizados y fáciles de seguir. 👉 Resultado: una página web profesional que genera confianza y le trae más clientes.",
    verMas: true,
    icon: BriefcaseBusiness,
    price: "$1,500",
    timeline: "4-8 semanas",
    bestFor: "Negocios que están lanzando o reconstruyendo su presencia local",
    bullets: [
      "Recreamos su página web desde cero o mejoramos su página actual, con diseño profesional y calidad que atrae clientes.",
      "Incluimos imágenes, animaciones modernas y una estructura pensada para atraer clientes.",
      "Le ayudamos a proteger su marca, para que su negocio sea único.",
      "Su página estará disponible en inglés y en español, con redacción clara y correcta en ambos idiomas.",
      "Nos encargamos de la traducción para que su mensaje conecte con más clientes.",
      "Creamos una estrategia para conseguir reseñas reales y las mostramos en su página web para generar confianza.",
      "Desarrollamos su marca (branding) para que su negocio destaque en Columbia, SC.",
      "Sus clientes que hablan inglés podrán entender su negocio perfectamente, porque su página tendrá mensajes claros, bien organizados y fáciles de seguir.",
      "Resultado: una página web profesional que genera confianza y le trae más clientes."
    ],
    description: "Creado para ayudar a que su negocio aparezca en búsqueda local desde el primer día.",
    ctaLabel: "Inicia tu proyecto",
    href: "#contact",
    offsetClass: "md:translate-y-6",
  },
  {
    eyebrow: "Mas elegido",
    title: "Compite en búsqueda local",
    subtitle: "SEO y optimización de visibilidad para que su negocio aparezca en Google y atraiga más clientes en Columbia, SC.",
    icon: TrendingUp,
    price: "$500",
    timeline: "3-6 semanas",
    featured: true,
    bestFor: "Negocios que no están posicionando en Google",
    bullets: [
      "Mejoras SEO para que su página suba posiciones en Google.",
      "Alineación de keywords con búsquedas reales de sus clientes.",
      "Estructuración de contenido para que Google y los clientes entiendan mejor sus servicios.",
      "Enlaces internos que ayudan a que su página sea más visible y fácil de navegar.",
    ],
    description: "Mejora cómo aparece su negocio en Google en Columbia y empiece a atraer más clientes locales.",
    ctaLabel: "Comienza la optimización",
    href: "#contact",
    offsetClass: "md:translate-y-2",
  },
  {
    eyebrow: "Crecimiento",
    title: "Domina tu visibilidad local",
    subtitle: "Crecimiento SEO continuo",
    icon: Leaf,
    price: "$500",
    priceSuffix: "/ mes",
    bestFor: "Negocios listos para crecer de forma constante",
    bullets: [
      "Actualizaciones de contenido",
      "Mejoras SEO continuas",
      "Enlaces internos",
      "Seguimiento de rendimiento",
    ],
    description: "Convierte la busqueda en un flujo constante de clientes locales.",
    ctaLabel: "Crece con nosotros",
    href: "#contact",
    offsetClass: "md:translate-y-10",
  },
];

const sectionHighlightsEs = [
  { icon: Search, label: "Listo para SEO" },
  { icon: Zap, label: "Alto rendimiento" },
  { icon: Target, label: "Disenado para convertir" },
];

const whyItWorksEs = [
  {
    icon: Search,
    title: "Listo para buscadores",
    description: "Codigo limpio, carga rapida y estructura preparada para mejores rankings.",
  },
  {
    icon: Sparkles,
    title: "Amigable con IA y LLM",
    description: "Contenido claro y estructurado que las herramientas de IA pueden entender y confiar.",
  },
  {
    icon: Target,
    title: "SEO local optimizado",
    description: "Optimizado para busquedas locales y visibilidad en Google Business.",
  },
  {
    icon: Zap,
    title: "Rapido y mobile first",
    description: "Optimizado para rendimiento tanto para usuarios como para buscadores.",
  },
  {
    icon: Shield,
    title: "Hecho para convertir",
    description: "Mensajeria estrategica que convierte visitas en clientes.",
  },
];

const trustPointsEs = [
  "Creado para negocios locales en Columbia",
  "Precios claros - sin sorpresas",
  "Sin contratos largos",
];

export default function PricingSection({ locale = "en" }: { locale?: Locale }) {

    // Expand/collapse state for 'ver más' (Spanish only, first card)
    const [showMore, setShowMore] = React.useState(false);
  const packages = locale === "en" ? pricingPackages : pricingPackagesEs;
  const highlights = locale === "en" ? sectionHighlights : sectionHighlightsEs;
  const benefitPoints = locale === "en" ? whyItWorks : whyItWorksEs;
  const trustItems = locale === "en" ? trustPoints : trustPointsEs;

  return (
    <section id="services" className="relative overflow-hidden bg-black px-6 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,200,76,0.08),transparent_58%)]" />
      <div className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full border border-[#d4af37]/10 opacity-40 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-10 h-100 w-100 translate-x-1/4 rounded-full border border-[#d4af37]/12" />
      <div className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full border border-[#d4af37]/10" />
      <div className="pointer-events-none absolute right-20 top-32 h-60 w-60 rounded-full border border-[#d4af37]/10" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
              {locale === "en" ? "Pricing" : "Precios"}
            </p>

            <h2 className="mt-5 text-3xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
              {locale === "en" ? "Simple plans." : "Planes simples."}
              <span className="block font-medium text-[#f5c84c] lg:inline lg:pl-3">
                {locale === "en" ? "Built for Columbia businesses." : "Hechos para negocios de Columbia."}
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base lg:mx-0">
              {locale === "en"
                ? "Websites built for how customers search locally - so your business gets found and grows over time."
                : "Sitios web construidos para la forma en que los clientes buscan localmente - para que tu negocio sea encontrado y crezca con el tiempo."}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-[11px] uppercase tracking-[0.08em] text-zinc-200 sm:text-sm lg:justify-start lg:gap-6">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="flex items-center gap-2.5">
                    <Icon className="h-4 w-4 text-[#f5c84c]" />
                    <span>{item.label}</span>
                    {index < sectionHighlights.length - 1 ? <span className="ml-2 hidden h-5 w-px bg-white/15 sm:inline-block" /> : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="relative flex h-60 w-60 items-center justify-center rounded-full border border-[#d4af37]/15 bg-[radial-gradient(circle,rgba(245,200,76,0.08),rgba(0,0,0,0)_65%)]">
              <div className="absolute inset-6 rounded-full border border-[#d4af37]/12" />
              <div className="absolute inset-20 rounded-full border border-[#d4af37]/12" />
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d4af37]/30 bg-[#f5c84c]/10 text-[#f5c84c]">
                  <MapPin className="h-8 w-8" />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f5c84c]">
                  Columbia, SC
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid items-start gap-8 text-left md:grid-cols-3 md:gap-6 lg:mt-16 lg:gap-10">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            const hasVerMas = locale === "es" && "verMas" in pkg && Boolean(pkg.verMas);

            return (
              <article
                key={pkg.title}
                className={[
                  "relative overflow-hidden rounded-[1.6rem] border p-6 shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-all duration-300 sm:p-8",
                  pkg.offsetClass ?? "",
                  pkg.featured
                    ? "scale-[1.02] border-[#d4af37]/45 bg-[linear-gradient(180deg,rgba(245,200,76,0.08),rgba(10,10,10,0.95))] shadow-[0_0_40px_rgba(245,200,76,0.16)]"
                    : "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(8,8,8,0.94))] hover:border-[#d4af37]/30",
                ].join(" ")}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,200,76,0.07),transparent_55%)] opacity-80" />

                <div className="relative z-10">
                  {pkg.featured ? (
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#f5c84c] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-black">
                      <Sparkles className="h-3.5 w-3.5" />
                      {pkg.eyebrow}
                    </div>
                  ) : (
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                      {pkg.eyebrow}
                    </p>
                  )}

                  <div className="flex items-center gap-4">
                    <div className={[
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-full border text-[#f5c84c]",
                      pkg.featured ? "border-[#d4af37]/35 bg-[#f5c84c]/10" : "border-[#d4af37]/22 bg-black/40",
                    ].join(" ")}>
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <h3 className="text-2xl font-medium leading-tight text-white sm:text-[2rem]">
                        {pkg.title}
                      </h3>
                      <p className="mt-2 text-sm text-zinc-500 sm:text-[0.95rem]">
                        {pkg.subtitle && hasVerMas && !showMore
                          ? pkg.subtitle.slice(0, 90) + "..."
                          : pkg.subtitle}
                      </p>
                      {hasVerMas && (
                        <button
                          className="mt-2 text-xs text-[#f5c84c] underline hover:text-[#e3b83f] focus:outline-none"
                          onClick={() => setShowMore((v) => !v)}
                        >
                          {showMore ? "Ver menos" : "Ver más información"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6">
                    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-5 md:block">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                          {locale === "en" ? "What it includes" : "Que incluye"}
                        </p>

                        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
                          {(hasVerMas && !showMore
                            ? pkg.bullets.slice(0, 2)
                            : pkg.bullets
                          ).map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <CircleCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#f5c84c]" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="min-w-28 text-right md:mt-6 md:text-left">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                          {locale === "en" ? "Price" : "Precio"}
                        </p>
                        <p className="mt-3 text-4xl font-semibold tracking-tight text-white">
                          {pkg.price}
                          {pkg.priceSuffix ? <span className="ml-1 text-lg font-normal text-zinc-400">{pkg.priceSuffix}</span> : null}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500">{pkg.timeline}</p>
                      </div>
                    </div>

                    <p className="mt-5 text-xs text-zinc-500">{locale === "en" ? "Best for" : "Ideal para"}: {pkg.bestFor}</p>
                  </div>

                  <p className="mt-6 text-xs leading-relaxed text-zinc-400">
                    {pkg.description}
                  </p>

                  <Link
                    href={pkg.href}
                    className={[
                      "mt-10 flex items-center justify-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition",
                      pkg.featured
                        ? "border-[#f5c84c] bg-[#f5c84c] text-black hover:bg-[#e3b83f]"
                        : "border-white/20 text-white hover:border-[#f5c84c] hover:text-[#f5c84c]",
                    ].join(" ")}
                  >
                    <span>{pkg.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 rounded-[1.8rem] border border-[#d4af37]/20 bg-[rgba(10,10,10,0.86)] px-6 py-5 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.08em] text-[#f5c84c] sm:text-lg">
            {locale === "en" ? "Why our websites are built for SEO & AI" : "Por que nuestros sitios web estan hechos para SEO e IA"}
          </p>

          <div className="mt-5 grid gap-6 md:grid-cols-5 lg:gap-8">
            {benefitPoints.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-1.5 text-left md:gap-2">
                  <div className="mt-0.5 text-[#f5c84c]">
                    <Icon className="h-8 w-8 sm:h-10 sm:w-10" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-semibold leading-tight text-white sm:text-sm lg:text-[0.92rem]">{item.title}</p>
                    <p className="mt-1 text-[11px] leading-relaxed text-zinc-300 sm:text-xs lg:text-[0.82rem]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-3 rounded-[1.35rem] border border-[#d4af37]/18 bg-[rgba(10,10,10,0.88)] px-5 py-4 text-center text-xs text-zinc-400 sm:grid-cols-3 sm:gap-0 sm:text-sm">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className={[
                "flex items-center justify-center gap-2 px-4 py-2",
                index < trustPoints.length - 1 ? "sm:border-r sm:border-white/10" : "",
              ].join(" ")}
            >
              <CircleCheck className="h-4 w-4 text-[#f5c84c]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-white/10 bg-white/3 p-5 text-left sm:p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f5c84c]/80 sm:text-xs">
            {locale === "en" ? "Columbia SEO Pages" : "Paginas SEO de Columbia"}
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/seo-services-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              SEO Services
            </Link>
            <Link
              href="/website-design-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              Website Design
            </Link>
            <Link
              href="/local-seo-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              Local SEO
            </Link>
            <Link
              href="/seo-for-realtors-columbia-sc"
              className="text-sm text-white/80 transition hover:text-[#f5c84c]"
            >
              SEO for Realtors
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}