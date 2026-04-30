"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Sparkles, TrendingUp, Users } from "lucide-react";

type Locale = "en" | "es";

const copy = {
  en: {
    eyebrow: "Who this is for —",
    heading: "If any of these sound familiar, you’re not alone.",
    subheading: "Most businesses we talk to are facing the same challenges in Google search",
    painPoints: [
    {
      number: "1",
      title: "Relying on referrals — but need more consistent customers",
      description:
        "Word of mouth is valuable, but it doesn’t create predictable growth",
    },
    {
      number: "2",
      title: "Not ranking on Google when customers search",
      description:
        "If you’re not showing up, your competitors are capturing that demand",
    },
    {
      number: "3",
      title: "Not showing up in modern search tools",
      description:
        "Search behavior is evolving, but most websites haven’t adapted",
    },
    {
      number: "4",
      title: "Your website isn’t bringing in customers",
      description:
        "A website should do more than exist — it should generate business",
    },
    ],
    approachEyebrow: "The approach —",
    approachHeading: "We build for how people search today.",
    approachDescription:
      "By improving your website’s structure, content, and visibility, your business becomes easier to find — and easier to choose.",
    outcomes: [
    {
      icon: TrendingUp,
      title: "Better visibility in Google search",
      description: "Show up when customers are actively looking.",
    },
    {
      icon: Users,
      title: "More qualified customers",
      description: "Attract the right people to grow your business.",
    },
    {
      icon: Shield,
      title: "Stronger trust and positioning",
      description: "Build credibility and stay ahead of competitors",
    },
    {
      icon: Sparkles,
      title: "Consistent, long-term growth",
      description: "Turn visibility into a predictable source of customers.",
    },
    ],
    footer:
      "We design websites that search systems understand — and customers trust",
    ctaLabel: "Explore your visibility",
  },
  es: {
    eyebrow: "¿Para quién es?",
    heading: "Si esto le suena familiar, no es el único.",
    subheading: "La mayoría de los negocios enfrenta los mismos retos en Google.",
    painPoints: [
      {
        number: "1",
        title: "Depende de recomendaciones — pero necesita más clientes",
        description:
          "El boca a boca ayuda, pero no es constante.",
      },
      {
        number: "2",
        title: "No aparece en Google cuando lo buscan",
        description:
          "Si no aparece, sus clientes se van con la competencia.",
      },
      {
        number: "3",
        title: "No está en las nuevas formas de buscar\nen Google y en la\nInteligencia Artificial (IA)",
        description:
          "La forma de buscar cambió, pero su negocio no está ahí.",
      },
      {
        number: "4",
        title: "Su página web no le trae clientes",
        description:
          "Está ahí, pero no le genera ventas.",
      },
    ],
    approachEyebrow: "Nuestro enfoque",
    approachHeading: "Construimos según cómo las personas buscan hoy.",
    approachDescription:
      "Al mejorar la estructura, el contenido y la visibilidad de su página web, su negocio se vuelve más fácil de encontrar — y más fácil de elegir.",
    outcomes: [
      {
        icon: TrendingUp,
        title: "Mayor visibilidad en Google",
        description: "Aparezca cuando sus clientes realmente están buscando.",
      },
      {
        icon: Users,
        title: "Clientes mejor calificados",
        description: "Atraiga a las personas correctas para hacer crecer su negocio.",
      },
      {
        icon: Shield,
        title: "Más confianza y mejor\nposicionamiento",
        description: "Genere credibilidad y mantenga ventaja frente a su competencia.",
      },
      {
        icon: Sparkles,
        title: "Crecimiento constante a largo plazo",
        description: "Convierta su visibilidad en una fuente estable de clientes.",
      },
    ],
    footer:
      "Diseñamos páginas web que los motores de búsqueda entienden — y en las que sus clientes confían.",
    ctaLabel: "Explora su visibilidad",
  },
} as const;

export default function WhoThisIsFor({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];

  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(196,154,42,0.12),transparent_30%),radial-gradient(circle_at_78%_30%,rgba(196,154,42,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,rgba(255,255,255,0.01))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,154,42,0.22),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c49a2a] sm:text-xs">
              {localized.eyebrow}
            </p>

            <h2 className="max-w-2xl font-serif text-[2.2rem] font-light leading-[0.98] tracking-[-0.03em] text-[#f4efe7] sm:text-6xl lg:text-[4.5rem]">
              {locale === "en" ? (
                <>
                  If any of these <span className="text-[#d1a12d]">sound familiar,</span>
                  <br />
                  you’re not alone.
                </>
              ) : (
                <>
                  Si esto le <span className="text-[#d1a12d]">suena familiar,</span>
                  <br />
                  no está solo.
                </>
              )}
            </h2>

            <p className="mt-6 text-sm leading-6 whitespace-nowrap text-white/62 sm:text-[1.12rem] sm:leading-8">
              {localized.subheading}
            </p>
          </div>

          <div className="relative mx-auto h-64 w-full max-w-xl overflow-hidden sm:h-72 md:h-80 lg:h-90 lg:max-w-130 lg:justify-self-end">
            <div className="absolute right-4 top-0 h-70 w-70 rounded-full border border-[#8d6c17]/50" />
            <div className="absolute -right-6 top-4.5 h-80 w-80 rounded-full border border-[#8d6c17]/40" />
            <div className="absolute -right-14.5 top-10.5 h-90 w-90 rounded-full border border-[#8d6c17]/30" />
            <div className="absolute -right-23.5 top-17.5 h-100 w-100 rounded-full border border-[#8d6c17]/20" />
            <div className="absolute right-40 top-28 h-2.5 w-2.5 rounded-full bg-[#d1a12d] shadow-[0_0_12px_rgba(209,161,45,0.9)]" />
            <div className="absolute right-28 top-38.5 h-2 w-2 rounded-full bg-[#d1a12d] shadow-[0_0_10px_rgba(209,161,45,0.8)]" />

            <div className="absolute inset-0 overflow-hidden rounded-4xl border border-white/6 bg-black shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
              <Image
                src="/logos/who%20for.png"
                alt="Columbia, South Carolina skyline"
                fill
                priority
                sizes="(min-width: 1280px) 490px, (min-width: 1024px) 42vw, 100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.42))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(0,0,0,0),rgba(0,0,0,0.12)_42%,rgba(0,0,0,0.48)_100%)]" />
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-y-14 md:grid-cols-2 md:gap-x-20 lg:mt-16 lg:gap-y-16">
          {localized.painPoints.map((point, index) => (
            <article
              key={point.title}
              className={[
                "grid grid-cols-[46px_1px_minmax(0,1fr)] items-start gap-x-5",
                index === 2 ? "md:translate-y-6" : "",
              ].join(" ")}
            >
              <div className="pt-1 font-serif tabular-nums text-[1.9rem] leading-none text-[#d1a12d] sm:text-[2.2rem]">{point.number}</div>
              <div className="mt-1 h-29 w-px bg-[linear-gradient(180deg,rgba(196,154,42,0.95),rgba(196,154,42,0.2),rgba(196,154,42,0))]" />
              <div>
                <h3 className={[
                  "font-serif text-[1.6rem] font-light leading-[1.04] tracking-[-0.025em] text-[#f4efe7] sm:text-[2.15rem] sm:leading-[1.02]",
                  index === 0 ? "max-w-[18rem] md:max-w-none" : "max-w-[18rem]",
                ].join(" ")}>
                  {point.title}
                </h3>
                <p className="mt-3 max-w-76 text-sm leading-6 text-white/60 sm:mt-4 sm:text-[1.02rem] sm:leading-7">
                  {point.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 border-t border-[#3b3017]" />

        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c49a2a] sm:text-xs">
              {localized.approachEyebrow}
            </p>

            <h3 className="font-serif text-[2.15rem] font-light leading-[0.98] tracking-[-0.03em] text-[#f4efe7] sm:text-5xl">
              {locale === "en" ? (
                <>
                  We build for how
                  <br />
                  people <span className="text-[#d1a12d]">search today.</span>
                </>
              ) : (
                <>
                  Construimos para como
                  <br />
                  las personas <span className="text-[#d1a12d]">buscan hoy.</span>
                </>
              )}
            </h3>

            <p className="mt-6 text-base leading-7 text-white/62 sm:mt-7 sm:text-[1.08rem] sm:leading-8">
              {localized.approachDescription}
            </p>
          </div>

          <div className="space-y-0">
            {localized.outcomes.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-5 border-b border-[#3b3017] py-4 first:pt-0 last:border-b-0 last:pb-0"
                >
                  <div className="pt-1 text-[#d1a12d]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-serif text-[1.45rem] font-light leading-[1.06] tracking-[-0.025em] text-[#f4efe7] sm:text-[2rem] sm:leading-[1.02]">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-white/60 sm:text-base sm:leading-7">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-8 rounded-[1.35rem] border border-[#8d6c17] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-5 py-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d1a12d] text-[#d1a12d] shadow-[0_0_0_1px_rgba(209,161,45,0.18),0_0_24px_rgba(209,161,45,0.12)]">
              <div className="absolute inset-1.5 rounded-full border border-[#d1a12d]/50" />
              <div className="absolute inset-2.5 rounded-full border border-dashed border-[#d1a12d]/45" />
              <span className="relative flex items-baseline font-serif text-[1.35rem] font-semibold tracking-[-0.04em]">
                <span className="text-[#d1a12d]">J</span>
                <span className="text-white">T</span>
              </span>
            </div>

            <div className="min-w-0">
              <p className="max-w-60 text-[0.82rem] leading-5 text-white/72 sm:max-w-none sm:text-lg sm:leading-8 sm:whitespace-nowrap">
                {locale === "en" ? (
                  <>
                    We design websites that search <span className="whitespace-nowrap">systems understand — and customers trust</span>
                  </>
                ) : (
                  <>
                    Disenamos sitios web que los <span className="whitespace-nowrap">sistemas de busqueda entienden — y los clientes confian</span>
                  </>
                )}
              </p>
            </div>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-3 self-start text-lg font-medium text-[#d1a12d] transition hover:text-[#e2b44a] sm:text-xl lg:self-auto"
          >
            <span>{localized.ctaLabel}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
