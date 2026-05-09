"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageSquareText,
  Search,
  Shield,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  UserRound,
  Users,
} from "lucide-react";

type Locale = "en" | "es";

const copy = {
  en: {
    eyebrow: "Who this is for —",
    heading: "For businesses with outdated websites that no longer reflect their quality or attract customers",
    subheading: "You need modernization if your website:",
    painPoints: [
    {
      number: "1",
      title: "Looks outdated and doesn’t build trust",
      description: "",
    },
    {
      number: "2",
      title: "Doesn’t show why you’re better than your competitors",
      description: "",
    },
    {
      number: "3",
      title: "Isn’t built for modern search, including AI-powered tools",
      description: "",
    },
    {
      number: "4",
      title: "Because of your website, you are losing customers even with high-quality services",
      description: "",
    },
    ],
    approachEyebrow: "Our approach —",
    approachHeading: "How we help you get more customers",
    approachDescription:
      "We don’t just design websites-we structure them around how customers search, decide, and choose a business.",
    outcomes: [
    {
      icon: Search,
      title: "",
      description: "Show up when customers are actively searching for your services.",
    },
    {
      icon: MessageSquareText,
      title: "",
      description: "Clear messaging and structure so visitors know exactly what you offer.",
    },
    {
      icon: UserRound,
      title: "",
      description: "Strong positioning and trust so customers feel ready to contact you.",
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

type PainPointIconProps = {
  className?: string;
};

function SadMonitorIcon({ className }: PainPointIconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <rect x="12" y="11" width="40" height="28" rx="3.5" stroke="currentColor" strokeWidth="3" />
      <path d="M24 51h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 39v12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="26" cy="23.5" r="2.5" fill="#f5c84c" />
      <circle cx="38" cy="23.5" r="2.5" fill="#f5c84c" />
      <path d="M24.5 31c2.2-3.2 5-4.8 7.5-4.8s5.3 1.6 7.5 4.8" stroke="#f5c84c" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function TrophyStarIcon({ className }: PainPointIconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path d="M23 13h18v8c0 7.6-4.1 14-9 16.7-4.9-2.7-9-9.1-9-16.7v-8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
      <path d="M23 17h-6c0 7.2 2.3 12 7.5 13.9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M41 17h6c0 7.2-2.3 12-7.5 13.9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 51h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M32 37v14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M24 51h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="m32 20 2.3 4.7 5.2.8-3.8 3.7.9 5.1-4.6-2.5-4.6 2.5.9-5.1-3.8-3.7 5.2-.8L32 20Z" stroke="#f5c84c" strokeWidth="2.4" strokeLinejoin="round" />
    </svg>
  );
}

function DeclineChartIcon({ className }: PainPointIconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <path d="M14 14v36h36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 47V26" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M30 47V20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M40 47V34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M19 25h10l8 8 9-9 4 4" stroke="#f5c84c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m46 24 7 .8-.8 7" stroke="#f5c84c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AiSearchIcon({ className }: PainPointIconProps) {
  return (
    <svg viewBox="0 0 64 64" fill="none" aria-hidden="true" className={className}>
      <circle cx="30" cy="28" r="15" stroke="currentColor" strokeWidth="3" />
      <path d="m40.5 38.5 9.5 9.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M22.4 34V22.6h2.1l3.1 7.2 3.1-7.2h2.1V34h-2.1v-6.9l-2.5 5.8h-1.3l-2.4-5.8V34h-2.1Z" fill="#f5c84c" />
      <path d="M35.3 22.6h2.2V34h-2.2V22.6Z" fill="#f5c84c" />
    </svg>
  );
}

const englishPainPoints = [
  {
    number: "1",
    icon: SadMonitorIcon,
    body: (
      <>
        Looks <span className="text-[#f5c84c]">outdated</span> and doesn&apos;t <span className="text-[#f5c84c]">build trust</span>
      </>
    ),
  },
  {
    number: "2",
    icon: TrophyStarIcon,
    body: (
      <>
        Doesn&apos;t show why you&apos;re <span className="text-[#f5c84c]">better</span> than your <span className="text-[#f5c84c]">competitors</span>
      </>
    ),
  },
  {
    number: "3",
    icon: DeclineChartIcon,
    body: (
      <>
        Even with high-quality services, you are <span className="text-[#f5c84c]">losing customers</span>
      </>
    ),
  },
  {
    number: "4",
    icon: AiSearchIcon,
    body: (
      <>
        <span className="block text-[0.72rem] leading-[1.08] tracking-[-0.04em] sm:hidden">
          <span className="block whitespace-nowrap">Your website isn&apos;t built for</span>
          <span className="block whitespace-nowrap">
            <span className="text-[#f5c84c]">modern search</span>, including <span className="text-[#f5c84c]">AI platforms</span>
          </span>
        </span>
        <span className="hidden sm:inline">
          Your website isn&apos;t built for <span className="text-[#f5c84c]">modern search</span>,
          <br />
          including <span className="text-[#f5c84c]">AI platforms</span>
        </span>
      </>
    ),
  },
] as const;

const englishSearchOutcomes = [
  {
    label: "SEO",
    description: "be seen on Google",
    icon: Search,
    accent: "text-[#f5c84c]",
    border: "border-[#f5c84c]/28",
  },
  {
    label: "AEO",
    description: "be understood by AI",
    icon: MessageSquareText,
    accent: "text-[#c97cff]",
    border: "border-[#c97cff]/28",
  },
  {
    label: "GEO",
    description: "be chosen as the trusted source",
    icon: Shield,
    accent: "text-[#2ce3c8]",
    border: "border-[#2ce3c8]/28",
  },
] as const;

const englishTrustPoints = ["No commitment", "Takes 2 minutes", "Clear next steps"] as const;

const trustPointIcons = {
  "No commitment": ShieldCheck,
  "Takes 2 minutes": Clock3,
  "Clear next steps": CheckCircle2,
} as const;

export default function WhoThisIsFor({ locale = "en" }: { locale?: Locale }) {
  const isEnglish = locale === "en";

  if (isEnglish) {
    return (
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#020915_0%,#041222_52%,#071424_100%)] px-4 pb-14 pt-7 text-white sm:px-8 sm:pb-18 sm:pt-10 lg:px-12 lg:pb-22 lg:pt-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(245,200,76,0.08),transparent_24%),radial-gradient(circle_at_78%_28%,rgba(67,126,223,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_24%,rgba(255,255,255,0.01))]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-8 sm:gap-10 xl:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] xl:items-start xl:gap-10">
            <div>
              <div className="inline-flex flex-col items-start gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f5c84c] sm:text-xs">
                  Who this is for
                </p>
                <div className="h-px w-28 bg-[#f5c84c]/75" />
              </div>

              <h2 className="mt-5 max-w-3xl text-white">
                <span className="block text-[2rem] font-medium leading-[0.92] tracking-[-0.04em] sm:hidden">
                  <span className="block whitespace-nowrap">
                    Your <span className="text-[#f5c84c]">outdated website</span>
                  </span>
                  <span className="block whitespace-nowrap">is costing you</span>
                  <span className="block whitespace-nowrap text-[#f5c84c]">customers and revenue</span>
                </span>

                <span className="hidden font-medium tracking-tight sm:block sm:text-5xl sm:leading-[0.9] lg:text-6xl">
                  Your <span className="text-[#f5c84c]">outdated website</span>
                  <br />
                  is costing you
                  <br />
                  <span className="text-[#f5c84c]">customers and revenue</span>
                </span>
              </h2>

              <div className="mt-5 h-1 w-16 rounded-full bg-[#f5c84c]" />

              <p className="mt-4 text-[0.95rem] leading-7 text-white/72 sm:mt-5 sm:text-[1.4rem] sm:leading-[1.2]">
                You need modernization if your website:
              </p>

              <div className="mt-4 space-y-2 sm:space-y-2.5">
                {englishPainPoints.map((point, index) => {
                  const Icon = point.icon;

                  return (
                    <motion.article
                      key={point.number}
                      className="grid grid-cols-[34px_42px_minmax(0,1fr)] items-center gap-x-2 rounded-2xl border border-[#223448] bg-[linear-gradient(180deg,rgba(12,27,43,0.88),rgba(8,21,34,0.94))] px-2.5 py-1.5 shadow-[0_18px_40px_rgba(0,0,0,0.22)] sm:grid-cols-[44px_64px_minmax(0,1fr)] sm:gap-x-3 sm:rounded-[1.1rem] sm:px-4 sm:py-1.5"
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.35 }}
                      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
                    >
                      <div className="flex justify-center">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f5c84c] text-xs font-semibold text-[#08111d] sm:h-9 sm:w-9 sm:text-sm">
                          {point.number}
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-white/12 bg-[linear-gradient(180deg,rgba(20,38,58,0.96),rgba(8,19,31,0.96))] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] sm:h-12 sm:w-12 sm:rounded-xl">
                          <Icon className="h-5 w-5 text-white/92 sm:h-7 sm:w-7" />
                        </div>
                      </div>

                      <div className="border-l border-white/10 pl-2.5 text-[0.86rem] font-medium leading-[1.12] tracking-[-0.03em] text-white sm:pl-4 sm:text-[1.02rem]">
                        {point.body}
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </div>

            <motion.div
              className="relative mx-auto w-full max-w-full sm:max-w-md xl:mt-12 xl:ml-auto xl:mr-0 xl:max-w-md xl:translate-x-4"
              initial={{ opacity: 0, x: 18, y: 28, scale: 0.92, rotate: -1.4 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative h-80 overflow-hidden rounded-[1.2rem] sm:h-124 sm:rounded-[1.45rem] xl:h-132"
                initial={{ boxShadow: "0 14px 38px rgba(0,0,0,0.18)" }}
                whileInView={{ boxShadow: "0 34px 90px rgba(0,0,0,0.34)" }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                  <video
          aria-hidden="true"
                    src="/logos/jt.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="block h-full w-full object-cover opacity-90"
                  />
                  {/* soft edge fade — all four sides */}
                  <div className="pointer-events-none absolute inset-0"
                    style={{
                      background: "radial-gradient(ellipse at center, transparent 40%, rgba(4,18,34,0.55) 72%, rgba(4,18,34,0.92) 100%)"
                    }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(4,18,34,0.55)_0%,transparent_22%,transparent_78%,rgba(4,18,34,0.55)_100%),linear-gradient(to_bottom,rgba(4,18,34,0.45)_0%,transparent_18%,transparent_78%,rgba(4,18,34,0.65)_100%)]" />
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-5 flex flex-col items-start gap-3">
            <Link
              href="https://calendly.com/jultech-ai/new-meeting-1"
              className="inline-flex w-auto items-center gap-2 rounded-full bg-[#f5c84c] px-5 py-2.5 text-sm font-semibold text-black no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30"
            >
              <span>Get Your Free Visibility Report</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <div className="flex flex-col items-center gap-2 text-[10px] tracking-wide text-white/65 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-3 sm:text-[11px] lg:items-start lg:justify-start">
              {englishTrustPoints.map((item) => {
                const Icon = trustPointIcons[item];

                return (
                  <div key={item} className="flex items-center gap-2">
                    <Icon className="h-4 w-4 text-white/70" />
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const localized = copy.es;
  const bookingHref = "/es/book?session=short";
  const outcomesContent = localized.outcomes.map((item, index) => {
    const Icon = item.icon;

    return (
      <motion.div
        key={`${locale}-outcome-${index}`}
        className="grid grid-cols-[28px_minmax(0,1fr)] gap-x-5 border-b border-[#3b3017] py-4 first:pt-0"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
      >
        <div className="pt-1 text-[#d1a12d]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          {item.title ? (
            <h4 className="font-serif text-[1.45rem] font-light leading-[1.06] tracking-[-0.025em] text-[#f4efe7] sm:text-[2rem] sm:leading-[1.02]">
              {item.title}
            </h4>
          ) : null}
          {item.description ? (
            <p className={item.title ? "mt-2 text-sm leading-6 text-white/60 sm:text-base sm:leading-7" : "text-sm leading-6 text-white/60 sm:text-base sm:leading-7"}>
              {item.description}
            </p>
          ) : null}
        </div>
      </motion.div>
    );
  });

  return (
    <section className="relative overflow-hidden bg-[#040404] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(196,154,42,0.12),transparent_30%),radial-gradient(circle_at_78%_30%,rgba(196,154,42,0.1),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_22%,rgba(255,255,255,0.01))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(196,154,42,0.22),transparent)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.92fr)] lg:items-start">
          <div className="max-w-3xl">
            <p className="mb-6 text-[11px] font-medium uppercase tracking-[0.34em] text-white/56 sm:text-xs">
              {localized.eyebrow}
            </p>

            <h2 className="max-w-2xl font-serif text-[1.85rem] font-light leading-[0.98] tracking-[-0.03em] text-[#b8891a] sm:text-[2.9rem] lg:text-[3.6rem]">
              <>
                Si esto le <span className="text-[#d1a12d]">suena familiar,</span>
                <br />
                no está solo.
              </>
            </h2>

            {localized.subheading ? (
              <p className="mt-16 font-serif text-[1.42rem] font-extralight leading-[1.04] tracking-[-0.025em] text-white/58 sm:whitespace-nowrap sm:text-[1.9rem] sm:leading-[1.02]">
                {localized.subheading}
              </p>
            ) : null}
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

        <div className="mt-10 grid gap-y-5 lg:mt-8 lg:gap-y-6">
          {localized.painPoints.map((point, index) => (
            <motion.article
              key={point.title}
              className="grid grid-cols-[46px_1px_minmax(0,1fr)] items-start gap-x-5"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: index * 0.12, ease: "easeOut" }}
            >
              <div className="pt-1 font-serif tabular-nums text-[1.7rem] leading-none text-[#8d6c17]/80 sm:text-[2rem]">{point.number}</div>
              <div className="mt-1 h-29 w-px bg-[linear-gradient(180deg,rgba(196,154,42,0.95),rgba(196,154,42,0.2),rgba(196,154,42,0))]" />
              <div>
                <h3 className={[
                  "font-serif text-[1.42rem] font-extralight leading-[1.04] tracking-[-0.025em] text-[#f4efe7] sm:text-[1.95rem] sm:leading-[1.02]",
                  index === 0
                    ? "max-w-[18rem] md:max-w-none"
                    : index === 1
                      ? "max-w-[18rem] text-[#b8891a] md:max-w-none"
                    : index === 2
                      ? "max-w-104 sm:max-w-none"
                    : index === 3
                      ? "max-w-104 sm:max-w-2xl"
                      : "max-w-[18rem]",
                ].join(" ")}>
                  {index === 2 ? (
                    <span className="block lg:whitespace-nowrap">
                      Even with high-quality services, you are losing customers
                    </span>
                  ) : index === 3 ? (
                    <>
                      Your website isn’t built for modern search,
                      <br />
                      including AI-powered tools
                    </>
                  ) : (
                    point.title
                  )}
                </h3>
                {point.description ? (
                  <p className="mt-3 max-w-76 text-sm leading-6 text-white/60 sm:mt-4 sm:text-[1.02rem] sm:leading-7">
                    {point.description}
                  </p>
                ) : null}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-20 border-t border-[#3b3017]" />

        <div className="mt-14 grid gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.95fr)] lg:items-start">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.34em] text-[#c49a2a] sm:text-xs">
              {localized.approachEyebrow}
            </p>

            <h3 className="font-serif text-[2.15rem] font-light leading-[0.98] tracking-[-0.03em] text-[#f4efe7] sm:text-5xl">
              <>
                Construimos para como
                <br />
                las personas <span className="text-[#d1a12d]">buscan hoy.</span>
              </>
            </h3>

            <p className="mt-6 text-base leading-7 text-white/62 sm:mt-7 sm:text-[1.08rem] sm:leading-8">
              {localized.approachDescription}
            </p>
          </div>

          <div className="w-full space-y-0 lg:justify-self-end lg:w-full lg:max-w-136">
            <div className="relative mx-auto mt-8 w-full max-w-md overflow-hidden rounded-[1.9rem] border border-[#3b3017]/18 bg-black/25 shadow-[0_20px_60px_rgba(0,0,0,0.35)] lg:mt-0 lg:ml-auto lg:max-w-xl">
              <video
          aria-hidden="true"
                className="block h-auto w-full rounded-[1.9rem] mask-[radial-gradient(ellipse_at_center,black_54%,rgba(0,0,0,0.82)_72%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_54%,rgba(0,0,0,0.82)_72%,transparent_100%)]"
                src="/logos/3rd%20motion.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>

            <div className="mt-8 space-y-0">{outcomesContent}</div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 rounded-[1.35rem] border border-[#8d6c17] bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))] px-5 py-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:gap-8 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#d1a12d] text-[#d1a12d] shadow-[0_0_0_1px_rgba(209,161,45,0.18),0_0_24px_rgba(209,161,45,0.12)]">
              <div className="absolute inset-1.5 rounded-full border border-[#d1a12d]/50" />
              <div className="absolute inset-2.5 rounded-full border border-dashed border-[#d1a12d]/45" />
              <span className="relative flex items-baseline font-serif text-[1.35rem] font-semibold tracking-[-0.04em]">
                <span className="text-[#d1a12d]">J</span>
                <span className="text-white">T</span>
              </span>
            </div>

            <div className="min-w-0">
              <p className="text-sm leading-6 text-white/72 sm:max-w-none sm:text-lg sm:leading-8 sm:whitespace-nowrap">
                <>
                  Disenamos sitios web que los <span className="whitespace-nowrap">sistemas de busqueda entienden — y los clientes confian</span>
                </>
              </p>
            </div>
          </div>

          <Link
            href={bookingHref}
            className="inline-flex w-full items-center justify-center gap-3 self-stretch text-lg font-medium text-[#d1a12d] transition hover:text-[#e2b44a] sm:w-auto sm:self-start sm:text-xl lg:self-auto"
          >
            <span>{localized.ctaLabel}</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
