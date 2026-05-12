"use client";

import type { JSX, SVGProps } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import DiscoveryCallBoutiqueSection from "./DiscoveryCallBoutiqueSection";
import {
  ArrowRight,
  BarChart3,
  Box,
  CircleDollarSign,
  Infinity as InfinityIcon,
  Search,
  Shield,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

type Locale = "en" | "es";

type IconComponent = typeof Search | ((props: SVGProps<SVGSVGElement>) => JSX.Element);

type ProcessStep = {
  icon: IconComponent;
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
  icon: IconComponent;
};

type ServicePackage = {
  number: string;
  label: string;
  title: string;
  price: string;
  featured?: boolean;
  audience: string;
  bulletHeading: string;
  bullets: string[];
  result: string;
  ctaLabel: string;
  href: string;
  tone: "starter" | "growth" | "continuous";
};

function HowUnderstandIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <circle cx="44" cy="44" r="26" stroke="currentColor" strokeWidth="2.8" strokeDasharray="18 7" opacity="0.32" />
      <circle cx="44" cy="44" r="18" stroke="currentColor" strokeWidth="4" />
      <path d="M56 56L72 72" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

function HowBuildIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <rect x="14" y="16" width="54" height="44" rx="5" stroke="currentColor" strokeWidth="2.8" />
      <circle cx="22" cy="24" r="1.8" fill="currentColor" />
      <circle cx="29" cy="24" r="1.8" fill="currentColor" />
      <circle cx="36" cy="24" r="1.8" fill="currentColor" />
      <path d="M26 34H41V49H26z" stroke="currentColor" strokeWidth="2.8" />
      <path d="M47 34H60" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M47 43H60" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M26 55H41" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M47 52H58" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M62 56L76 42L84 50L70 64L61 66L62 56Z" stroke="currentColor" strokeWidth="2.8" strokeLinejoin="round" />
      <path d="M72 46L80 54" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" />
    </svg>
  );
}

function HowGrowIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path d="M18 72V50H28V72" stroke="currentColor" strokeWidth="3.2" />
      <path d="M38 72V40H48V72" stroke="currentColor" strokeWidth="3.2" />
      <path d="M58 72V30H68V72" stroke="currentColor" strokeWidth="3.2" />
      <path d="M16 60L34 42L48 49L75 22" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M62 22H75V35" stroke="currentColor" strokeWidth="4.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const immediateBenefits: Benefit[] = [
  {
    title: "Instant trust",
    description: "A refined website builds confidence the moment someone lands on it",
    icon: Shield,
  },
  {
    title: "More discovery",
    description: "More people finding your business-without ads or constant outreach",
    icon: Search,
  },
  {
    title: "More conversions",
    description: "Your website turns more visitors into real customers",
    icon: Users,
  },
] as const;

const longTermBenefits: Benefit[] = [
  {
    title: "Better-quality customers",
    description: "Attract the right clients who value your solution",
    icon: Users,
  },
  {
    title: "Less price resistance",
    description: "Faster decisions, fewer objections, and stronger perceived value",
    icon: CircleDollarSign,
  },
  {
    title: "Consistent revenue growth",
    description: "A steady flow of customers and predictable business growth",
    icon: TrendingUp,
  },
] as const;

const howItWorksSteps: Array<{
  number: string;
  title: string;
  description: string;
  icon: IconComponent;
  accent?: boolean;
}> = [
  {
    number: "01",
    title: "Understand",
    description: "We identify what's limiting your current website.",
    icon: HowUnderstandIcon,
  },
  {
    number: "02",
    title: "Build",
    description: "We redesign and optimize it for modern search and AI.",
    icon: HowBuildIcon,
  },
  {
    number: "03",
    title: "Grow",
    description: "You get consistent visibility, trust, and customer growth.",
    icon: HowGrowIcon,
    accent: true,
  },
] as const;

const sequenceContainer = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.14,
    },
  },
} as const;

const sequenceItem = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

function BenefitRow({ title, description, icon: Icon, isLast = false }: Benefit & { isLast?: boolean }) {
  return (
    <div>
      <div className="group flex gap-2.5 bg-transparent px-0 py-1.5 transition duration-300 sm:gap-4 sm:py-2">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#7d6030]/58 bg-[radial-gradient(circle_at_center,rgba(199,154,67,0.08),rgba(199,154,67,0.015)_58%,transparent_100%)] text-[#c79a43] shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_0_0_1px_rgba(199,154,67,0.05)] sm:h-14 sm:w-14">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
        </div>
        <div className="min-w-0">
          <div className="font-serif text-[1.08rem] leading-tight tracking-[-0.03em] text-white sm:text-[1.4rem]">{title}</div>
          <p className="mt-1 max-w-none text-[0.88rem] leading-5 text-white/68 sm:text-sm sm:leading-5 lg:text-[0.8rem]">
            {description}
          </p>
        </div>
      </div>
      {!isLast ? <div className="mt-2.5 h-px w-full bg-linear-to-r from-transparent via-[#5d4620]/85 to-transparent sm:mt-3" /> : null}
    </div>
  );
}

const content = {
  en: {
    topTagline: "Be found. Be understood. Be chosen.",
    title: "Create a modern website - or upgrade your existing one",
    description:
      "Built with strategy so customers - and search systems - can clearly find and trust you.",
    primaryCta: "View Packages",
    secondaryCta: "See Our Process",
    processEyebrow: "Before we build anything -",
    processTitle: "WE BUILD THE STRATEGY",
    processDescription:
      "Most websites fail because they are built without understanding the business, the market, and the customers' needs.",
    processClose: "We do it differently.",
    processStepsLabel: "What we do first",
    packagesEyebrow: "Choose your path to growth",
    featuredLabel: "Most Popular",
    resultLabel: "Result:",
    cardsBottomTitle: "Built with strategy, not just design.",
    cardsBottomDescription:
      "Your website is structured around how customers think, search, and choose - so it works in the real world.",
    customScopeTitle: "Need a custom scope?",
    customScopeDescription:
      "We can build a package tailored to your business, market, and growth goals.",
    customScopeNote:
      "We're currently onboarding a small number of new clients at a reduced rate.",
    customScopePrimaryLabel: "Get Your Free Visibility Report →",
    customScopePrimaryHref: "https://calendly.com/jultech-ai/new-meeting-1",
    customScopeSecondaryLabel: "Call (803) 386-1672",
    customScopeSecondaryHref: "tel:+18033861672",
    trustPoints: [
      "Strategy-led structure",
      "Clear customer messaging",
      "Search-ready foundation",
    ],
    processSteps: [
      {
        icon: Search,
        title: "Market & Competitor Analysis",
        description: "We study your market so your business stands out - not blends in.",
      },
      {
        icon: Target,
        title: "Positioning & Messaging",
        description: "We clarify what makes your business valuable and how to communicate it clearly.",
      },
      {
        icon: Users,
        title: "Customer Journey",
        description: "We design your website to guide visitors into real inquiries.",
      },
      {
        icon: TrendingUp,
        title: "Growth Plan",
        description: "We create a clear plan to attract, convert, and grow consistently.",
      },
    ] as ProcessStep[],
    packages: [
      {
        number: "01",
        label: "Starter",
        title: "Foundation",
        price: "From $800",
        audience:
          "For businesses that want their website to bring in real customers - not just exist online.",
        bulletHeading: "What you'll gain",
        bullets: [
          "A clear, structured website that builds instant trust",
          "Visitors who understand your value within seconds",
          "Strong positioning so you stand out from competitors",
          "Messaging tailored to your ideal customers",
          "A modern presence that reflects your quality",
        ],
        result:
          "A strategic website that doesn't just look good - it attracts the right customers.",
        ctaLabel: "Start with Starter",
        href: "https://calendly.com/jultech-ai/new-meeting-1?month=2026-04",
        tone: "starter",
      },
      {
        number: "02",
        label: "Growth",
        title: "Growth",
        price: "From $1,500",
        featured: true,
        audience:
          "For businesses that want to be found, trusted, and chosen.",
        bulletHeading: "What you'll gain",
        bullets: [
          "More people finding your business on Google and AI",
          "Stronger local presence and credibility",
          "Consistent flow of qualified customer inquiries",
          "Clear differentiation from competitors",
          "A complete online presence built to convert",
        ],
        result:
          "A business that gets discovered, builds trust quickly, and turns visibility into customers.",
        ctaLabel: "Choose Growth",
        href: "https://calendly.com/jultech-ai/new-meeting-1?month=2026-04",
        tone: "growth",
      },
      {
        number: "03",
        label: "Continuous Growth",
        title: "Optimization",
        price: "From $300/month",
        audience:
          "For businesses that want consistent growth - not guesswork.",
        bulletHeading: "What you'll gain",
        bullets: [
          "Ongoing improvements that keep your site performing",
          "Data-backed decisions instead of trial and error",
          "Increasing visibility, traffic, and quality over time",
          "A website that evolves as your business grows",
          "A clear strategy guiding every next step",
        ],
        result:
          "A system that continuously brings better customers and drives long-term growth.",
        ctaLabel: "Build Ongoing Growth",
        href: "https://calendly.com/jultech-ai/new-meeting-1?month=2026-04",
        tone: "continuous",
      },
    ] as ServicePackage[],
  },
  es: {
    topTagline: "Que te encuentren. Que te entiendan. Que te elijan. TM",
    title: "Sitios web que convierten tu negocio en un sistema que genera clientes",
    description:
      "Construidos con estrategia para que los clientes - y los sistemas de busqueda - puedan encontrarte y confiar en ti con claridad.",
    primaryCta: "Ver paquetes",
    secondaryCta: "Ver nuestro proceso",
    processEyebrow: "Antes de construir nada,",
    processTitle: "CONSTRUIMOS LA ESTRATEGIA",
    processDescription:
      "La mayoria de los sitios web falla porque se construyen sin entender el negocio, el mercado y al cliente.",
    processClose: "Nosotros lo hacemos diferente.",
    processStepsLabel: "Lo que hacemos primero",
    packagesEyebrow: "Elige tu camino de crecimiento",
    featuredLabel: "Mas elegido",
    resultLabel: "Resultado:",
    cardsBottomTitle: "Construido con estrategia, no solo con diseno.",
    cardsBottomDescription:
      "Tu sitio web se estructura segun como los clientes piensan, buscan y eligen, para que funcione en el mundo real.",
    customScopeTitle: "Necesitas un alcance personalizado?",
    customScopeDescription:
      "Podemos crear un paquete adaptado a tu negocio, tu mercado y tus objetivos de crecimiento.",
    customScopeNote:
      "Actualmente estamos incorporando un numero limitado de nuevos clientes con una tarifa reducida.",
    customScopePrimaryLabel: "Reciba su reporte de visibilidad gratis →",
    customScopePrimaryHref: "/es/book?session=short",
    customScopeSecondaryLabel: "Llame al (803) 386-1672",
    customScopeSecondaryHref: "tel:+18033861672",
    trustPoints: [
      "Estructura con estrategia",
      "Mensajeria clara para clientes",
      "Base lista para buscadores",
    ],
    processSteps: [
      {
        icon: Search,
        title: "Analisis de mercado y competencia",
        description: "Estudiamos tu mercado para que tu negocio destaque.",
      },
      {
        icon: Target,
        title: "Posicionamiento y estrategia de mensajes",
        description: "Definimos tu valor y como comunicarlo.",
      },
      {
        icon: Users,
        title: "Mapa del recorrido del cliente",
        description: "Disenamos una experiencia que convierte visitas en consultas.",
      },
      {
        icon: TrendingUp,
        title: "Blueprint de crecimiento",
        description: "Creamos un plan claro para atraer, convertir y crecer de forma constante.",
      },
    ] as ProcessStep[],
    packages: [
      {
        number: "01",
        label: "Starter",
        title: "Base y estrategia",
        price: "Desde $800",
        audience:
          "Para negocios que quieren convertir su sitio web en una fuente confiable de crecimiento e ingresos",
        bulletHeading: "Lo que incluye",
        bullets: [
          "Sitio web personalizado construido desde cero o redisenado",
          "Diseno limpio y moderno enfocado en convertir visitas en consultas reales",
          "Optimizacion mobile",
          "Estructura de contenido asistida por IA para mejorar claridad, mensaje y descubrimiento",
          "Branding basico (logo + identidad visual)",
          "Mensajes claros escritos para resolver los problemas del cliente y presentar soluciones",
          "Guia de posicionamiento del negocio para presentar mejor tus servicios",
          "Recomendaciones basicas de crecimiento segun tu mercado y competidores",
        ],
        result:
          "Un sitio web profesional respaldado por estrategia para que no solo estes online, sino bien posicionado para atraer a los clientes correctos.",
        ctaLabel: "Empezar con Starter",
        href: "https://calendly.com/jultech-ai/new-meeting-1?month=2026-04",
        tone: "starter",
      },
      {
        number: "02",
        label: "Growth",
        title: "Visibilidad y adquisicion de clientes",
        price: "Desde $1,500",
        featured: true,
        audience:
          "Todo lo de Starter, mas herramientas y estrategia para atraer clientes activamente",
        bulletHeading: "Todo lo de Starter, mas:",
        bullets: [
          "Configuracion y optimizacion del perfil de Google Business",
          "Estructura SEO para que Google entienda y posicione tu sitio",
          "Estrategia para generar resenas y construir confianza",
          "Configuracion de redes sociales alineada con tu marca",
          "Branding expandido para destacar en tu mercado",
          "Contenido estructurado que aumenta las posibilidades de ser recomendado por herramientas de IA",
          "Analisis de competidores y mercado para superar lo que otros estan haciendo",
        ],
        result:
          "Una presencia online completa disenada no solo para existir, sino para atraer, convertir y competir.",
        ctaLabel: "Elegir Growth",
        href: "https://calendly.com/jultech-ai/new-meeting-1?month=2026-04",
        tone: "growth",
      },
      {
        number: "03",
        label: "Crecimiento continuo",
        title: "Optimizacion y escalamiento",
        price: "Desde $300/mes",
        audience:
          "Para negocios que quieren crecimiento constante, no solo una configuracion de una vez",
        bulletHeading: "Lo que hacemos cada mes",
        bullets: [
          "Actualizaciones y mejoras del sitio web",
          "Creacion de contenido y blog",
          "Mejoras SEO continuas",
          "Seguimiento de rendimiento y analitica",
          "Refinamiento continuo de marca",
          "Insights mensuales y recomendaciones",
          "Ajustes de estrategia basados en datos reales",
          "Soporte para aumentar trafico, leads y conversiones",
          "Estrategia continua para que clientes y sistemas de busqueda puedan encontrarte y confiar en ti",
        ],
        result:
          "No adivinas lo que funciona; mejoras y creces continuamente con una direccion clara.",
        ctaLabel: "Activar crecimiento continuo",
        href: "https://calendly.com/jultech-ai/new-meeting-1?month=2026-04",
        tone: "continuous",
      },
    ] as ServicePackage[],
  },
} as const;

function packageToneMeta(tone: ServicePackage["tone"], locale: Locale) {
  if (tone === "starter") {
    return {
      cardTone: "from-emerald-500/10 via-black to-black",
      border: "border-emerald-500/30",
      accent: "text-emerald-300",
      iconBg: "bg-emerald-500/10",
      timelineBorder: "border-emerald-400/40",
      dot: "bg-emerald-300",
      shadow: "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
      icon: Box,
      stepLabel: locale === "es" ? "Inicio" : "Start",
      stepDescription: locale === "es" ? "Construye una base solida" : "Build a strong foundation",
    };
  }

  if (tone === "growth") {
    return {
      cardTone: "from-amber-500/10 via-black to-black",
      border: "border-amber-400/55",
      accent: "text-amber-300",
      iconBg: "bg-amber-500/10",
      timelineBorder: "border-amber-400/40",
      dot: "bg-amber-300",
      shadow: "shadow-[0_0_40px_rgba(245,158,11,0.10)]",
      icon: BarChart3,
      stepLabel: locale === "es" ? "Crecer" : "Grow",
      stepDescription: locale === "es" ? "Atrae mas clientes" : "Attract more customers",
    };
  }

  return {
    cardTone: "from-violet-500/10 via-black to-black",
    border: "border-violet-500/30",
    accent: "text-violet-300",
    iconBg: "bg-violet-500/10",
    timelineBorder: "border-violet-400/40",
    dot: "bg-violet-300",
    shadow: "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
    icon: InfinityIcon,
    stepLabel: locale === "es" ? "Escalar" : "Scale",
    stepDescription: locale === "es" ? "Optimiza y escala el crecimiento" : "Optimize and scale growth",
  };
}

function servicesMicrocopy(locale: Locale) {
  if (locale === "es") {
    return {
      headingLead: "Tres caminos. Un destino:",
      headingAccent: "crecimiento.",
      unsureTitle: "No esta seguro de que camino es ideal para usted?",
      unsureDescription: "Le ayudaremos a elegir la mejor direccion para su negocio.",
      unsureCallLabel: "Llame al (803) 386-1672",
      unsureCta: "Agenda una llamada",
    };
  }

  return {
    headingLead: "Three paths. One destination:",
    headingAccent: "growth.",
    unsureTitle: "Not sure which path is right for you?",
    unsureDescription: "We'll help you choose the best direction for your business.",
    unsureCallLabel: "Call (803) 386-1672",
    unsureCta: "Book a Call",
  };
}

export default function PricingSection({ locale = "en" }: { locale?: Locale }) {
  const localized = content[locale];
  const serviceCopy = servicesMicrocopy(locale);

  return (
    <section id="services" className="relative bg-[#050505] px-4 pb-6 pt-4 text-white sm:px-6 sm:pb-8 sm:pt-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(202,157,77,0.12),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(202,157,77,0.12),transparent_26%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_20%,rgba(255,255,255,0.01))]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(216,169,74,0.35),transparent)]" />

      <div className="relative mx-auto max-w-7xl">
        {locale === "en" ? (
          <>
            <motion.div
              id="service-strategy"
              className="relative py-6 lg:py-10 before:absolute before:inset-y-0 before:-left-[100vw] before:-right-[100vw] before:bg-black before:-z-10"
              variants={sequenceContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div variants={sequenceItem} className="max-w-5xl text-left">
                <div className="inline-flex flex-col items-start gap-3">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f5c84c] sm:text-xs">
                    <Sparkles className="h-4 w-4" />
                    What this means for your business
                  </div>
                  <div className="h-px w-28 bg-[#f5c84c]/75" />
                </div>

                <h2 className="mt-5 max-w-4xl text-[2rem] font-medium leading-[0.94] tracking-tight text-white sm:text-5xl sm:leading-[0.9] lg:whitespace-nowrap lg:text-6xl">
                  A website that brings you <span className="text-[#d7b367]">more customers</span>
                </h2>

                <div className="mt-5 h-1 w-16 rounded-full bg-[#f5c84c]" />

                <p className="mt-4 max-w-xl pb-8 text-base leading-7 text-white/66 sm:mt-5 sm:max-w-none sm:pb-12 sm:text-[1.4rem] sm:leading-[1.2]">
                  Built to help customers find you, trust you, and choose you across Google and AI
                </p>
              </motion.div>

              {/* Full-bleed video strip */}
              <motion.div
                variants={sequenceItem}
                className="relative -mx-4 overflow-hidden sm:-mx-6"
              >
                <video
          aria-hidden="true"
                  className="block h-28 w-full object-cover sm:h-36"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/moving.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.6),transparent_20%,transparent_80%,rgba(5,5,5,0.6)),linear-gradient(180deg,rgba(5,5,5,0.4),transparent_30%,transparent_70%,rgba(5,5,5,0.4))]" />
              </motion.div>

              <motion.div variants={sequenceItem} className="relative mt-7 px-4 sm:px-6">
                <div className="h-px w-full bg-linear-to-r from-transparent via-[#6f5420] to-transparent" />
                <div className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#c79a43]/80 bg-[#0b0906] shadow-[0_0_10px_rgba(199,154,67,0.14)]" />
              </motion.div>

              <motion.div variants={sequenceItem} className="mt-6 py-6 sm:mt-8 sm:py-8">
              <div className="relative mx-auto grid max-w-5xl gap-4 sm:gap-8 lg:grid-cols-2 lg:gap-4">
                <div className="pointer-events-none absolute bottom-0 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-[#6f5420] to-transparent lg:block" />

                <div className="space-y-3.5 rounded-4xl border border-[#6f5420]/35 bg-transparent p-4 sm:space-y-5 sm:p-6 lg:rounded-none lg:border-0 lg:p-0">
                  <motion.div variants={sequenceItem} className="flex flex-col items-center gap-3 px-1 text-center sm:gap-5">
                    <div className="font-serif text-[1.12rem] font-medium uppercase tracking-[0.24em] text-[#d7b367] sm:text-[1.28rem]">
                      Immediate impact
                    </div>
                    <div className="h-px w-36 bg-linear-to-r from-transparent via-[#876528] to-transparent" />
                  </motion.div>
                  {immediateBenefits.map((benefit, index) => {
                    const itemKey = `immediate-${benefit.title}`;
                    return (
                      <motion.div key={itemKey} variants={sequenceItem}>
                        <BenefitRow
                          {...benefit}
                          isLast={index === immediateBenefits.length - 1}
                        />
                      </motion.div>
                    );
                  })}
                </div>

                <div className="space-y-3.5 rounded-4xl border border-[#6f5420]/35 bg-transparent p-4 sm:space-y-5 sm:p-6 lg:ml-4 lg:rounded-none lg:border-0 lg:p-0">
                  <motion.div variants={sequenceItem} className="flex flex-col items-center gap-3 px-1 text-center sm:gap-5">
                    <div className="font-serif text-[1.12rem] font-medium uppercase tracking-[0.24em] text-[#d7b367] sm:text-[1.28rem]">
                      Long-term growth
                    </div>
                    <div className="h-px w-36 bg-linear-to-r from-transparent via-[#876528] to-transparent" />
                  </motion.div>
                  {longTermBenefits.map((benefit, index) => {
                    const itemKey = `longterm-${benefit.title}`;
                    return (
                      <motion.div key={itemKey} variants={sequenceItem}>
                        <BenefitRow
                          {...benefit}
                          isLast={index === longTermBenefits.length - 1}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </div>
              </motion.div>{/* end black band */}

              <motion.div variants={sequenceItem} className="relative mt-6 px-4 sm:px-6">
                <div className="h-px w-full bg-linear-to-r from-transparent via-[#7b5d25] to-transparent" />
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#d7b367]/75 bg-[#0b0906]" />
              </motion.div>

              <motion.div variants={sequenceItem} className="mt-3 text-center">
                <p className="flex items-center justify-center gap-3 font-sans text-[0.82rem] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.1rem] lg:text-[1.2rem]">
                  <span className="text-[#f2c14e]">✦</span>
                  Let&apos;s <span className="text-[#f2c14e]">upgrade</span> your website
                  <span className="text-[#f2c14e]">✦</span>
                </p>
              </motion.div>

            </motion.div>{/* end service-strategy black band */}

              <motion.div
                className="relative mt-14 mx-auto max-w-6xl px-2 py-6 text-left sm:px-8 sm:py-7 lg:mt-16 lg:py-8"
                variants={sequenceContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                <motion.div variants={sequenceItem} className="inline-flex flex-col items-start gap-3">
                  <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f5c84c] sm:text-xs">
                    <Sparkles className="h-4 w-4" />
                    How it works
                  </div>
                  <div className="h-px w-28 bg-[#f5c84c]/75" />
                </motion.div>

                <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
                  <div className="max-w-3xl">
                    <motion.h3 variants={sequenceItem} className="flex items-center gap-x-1 whitespace-nowrap text-[1.45rem] font-medium leading-[0.94] tracking-[-0.04em] text-[#f2ece3] sm:gap-x-3 sm:text-5xl sm:leading-[0.9] sm:tracking-tight lg:text-6xl">
                      <span className="shrink-0 text-white">Understand</span>
                      <span className="shrink-0 text-white">&rarr;</span>
                      <span className="shrink-0 text-white">Build</span>
                      <span className="shrink-0 text-white">&rarr;</span>
                      <span className="shrink-0 text-[#f2c14e]">Grow</span>
                    </motion.h3>

                    <motion.div variants={sequenceItem} className="mt-4 h-1 w-16 rounded-full bg-[#f5c84c]" />

                    <motion.p variants={sequenceItem} className="mt-12 max-w-2xl text-[1.15rem] leading-8 text-white/68 sm:text-[1.4rem] sm:leading-9">
                      A simple, strategic process that turns your website into a system for <span className="text-[#f2c14e]">attracting and converting</span> the right customers
                    </motion.p>
                  </div>

                  <div className="relative hidden lg:block lg:w-96 lg:shrink-0 xl:w-104">
                    <div className="absolute -inset-8 bg-[radial-gradient(circle_at_72%_28%,rgba(240,194,92,0.18),transparent_24%),radial-gradient(circle_at_54%_64%,rgba(67,48,16,0.32),transparent_46%)] blur-3xl" />
                    <div className="relative overflow-hidden rounded-4xl">
                      <video
          aria-hidden="true"
                        className="relative block h-56 w-full object-cover object-center opacity-100 mix-blend-screen xl:h-72"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src="/newtry.mp4" type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(8,6,4,0.24)_56%,rgba(8,6,4,0.5)_100%),linear-gradient(90deg,rgba(10,8,6,0.44),transparent_24%,transparent_76%,rgba(10,8,6,0.4)),linear-gradient(180deg,rgba(14,11,8,0.28),transparent_18%,transparent_68%,rgba(10,8,6,0.48))]" />
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto mt-10 max-w-7xl lg:px-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {howItWorksSteps.map((step, index) => {
                      const Icon = step.icon;

                      return (
                        <motion.article
                          key={step.title}
                          variants={sequenceItem}
                          className="relative rounded-3xl border border-[#f2c14e]/20 bg-[#0c0c0c] p-8"
                        >
                          {/* Connector (between cards, hidden on last) */}
                          {index < howItWorksSteps.length - 1 && (
                            <span className="absolute -right-7 top-1/2 z-10 hidden -translate-y-1/2 md:flex md:items-center">
                              {/* left line */}
                              <span className="block h-px w-4 bg-[#f2c14e]/50" />
                              {/* dot with glow */}
                              <span className="relative block h-3 w-3 rounded-full bg-[#f2c14e]/80 shadow-[0_0_8px_3px_rgba(242,193,78,0.55),0_0_18px_6px_rgba(242,193,78,0.25)]" />
                              {/* right line */}
                              <span className="block h-px w-4 bg-[#f2c14e]/50" />
                            </span>
                          )}

                          <div className="mb-5 flex items-center gap-4">
                            {/* Icon circle */}
                            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#f2c14e]/30 bg-[#f2c14e]/8">
                              <Icon className="h-7 w-7 text-[#f2c14e]" />
                            </div>
                            <div>
                              <p className="mb-0.5 text-xs font-semibold tracking-widest text-[#f2c14e]">{step.number}</p>
                              <div className="h-px w-8 bg-[#f2c14e]/40" />
                            </div>
                          </div>

                          <h3 className={[
                            "text-2xl font-semibold",
                            step.accent ? "text-[#d7b367]" : "text-white",
                          ].join(" ")}>
                            {step.title}
                          </h3>
                          <div className="mt-2 h-px w-10 bg-[#f2c14e]" />
                          <p className="mt-3 text-white/70">{step.description}</p>
                        </motion.article>
                      );
                    })}
                  </div>
                </div>

                <motion.p
                  id="growth-engine"
                  variants={sequenceItem}
                  className="mt-6 flex items-center justify-center gap-3 whitespace-nowrap text-center font-sans text-[0.82rem] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.1rem] lg:text-[1.2rem]"
                >
                  <span className="text-[#f2c14e]">✦</span>
                  {"Turn your website into a "}<span className="text-[#f2c14e]">{"growth revenue engine"}</span>
                  <span className="text-[#f2c14e]">✦</span>
                </motion.p>

                <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a
                    href="/free-appraisal"
                    className="inline-flex items-center justify-center rounded-full bg-[#f2c14e] px-7 py-3 text-sm font-semibold text-[#151515] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#f6cd64]"
                  >
                    See Your Visibility Score &rarr;
                  </a>
                  <a
                    href="tel:+18033861672"
                    className="inline-flex items-center justify-center rounded-full border border-[#b88a1a]/60 px-7 py-3 text-sm font-semibold text-[#f2c14e] transition-colors duration-200 hover:border-[#f2c14e]/80 hover:bg-[#111]"
                  >
                    Call (803) 386-1672
                  </a>
                </div>

                <div className="relative mx-auto mt-5 w-full max-w-xs overflow-hidden rounded-4xl sm:mt-6 sm:max-w-sm lg:hidden">
                  <div className="absolute -inset-8 bg-[radial-gradient(circle_at_72%_28%,rgba(240,194,92,0.18),transparent_24%),radial-gradient(circle_at_54%_64%,rgba(67,48,16,0.32),transparent_46%)] blur-3xl" />
                  <video
          aria-hidden="true"
                    className="relative block h-48 w-full object-cover object-center opacity-100 mix-blend-screen sm:h-56"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src="/newtry.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(8,6,4,0.24)_56%,rgba(8,6,4,0.5)_100%),linear-gradient(90deg,rgba(10,8,6,0.44),transparent_24%,transparent_76%,rgba(10,8,6,0.4)),linear-gradient(180deg,rgba(14,11,8,0.28),transparent_18%,transparent_68%,rgba(10,8,6,0.48))]" />
                </div>

                <div className="relative mx-auto mt-6 w-full max-w-6xl px-3 sm:px-6">
                  <div className="h-px w-full bg-linear-to-r from-transparent via-[#c79a43]/85 to-transparent" />
                  <div className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-[#e5bf68]/85 bg-[#120f0a] shadow-[0_0_14px_rgba(215,179,103,0.26)]" />
                </div>

                <DiscoveryCallBoutiqueSection />
              </motion.div>

          </>
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_290px] lg:gap-14 xl:grid-cols-[minmax(0,1fr)_340px]">
            <div className="max-w-5xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d8a94a]/90 sm:text-[0.95rem]">
                {localized.topTagline}
              </p>

              <h2 className="mt-5 max-w-3xl text-[2.35rem] font-medium leading-[0.92] tracking-tight text-white sm:text-5xl sm:leading-[0.9] lg:text-6xl">
                {localized.title}
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/68 sm:text-lg lg:max-w-none lg:whitespace-nowrap">
                {localized.description}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="#packages"
                  className="inline-flex items-center justify-center rounded-sm border border-[#d8a94a]/45 bg-[#c79a43] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-black transition hover:bg-[#ddb35d]"
                >
                  {localized.primaryCta}
                </Link>
                <Link
                  href="#service-strategy"
                  className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.14em] text-white/78 transition hover:text-[#f1c768]"
                >
                  <span>{localized.secondaryCta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-56 sm:max-w-64 lg:max-w-none lg:translate-x-8 lg:justify-self-end xl:translate-x-12">
              <div className="absolute inset-4 rounded-full bg-[#d8a94a]/14 blur-3xl" />
              <div className="absolute inset-x-10 inset-y-8 rounded-full bg-[#0a2342]/30 blur-2xl" />

              <div className="relative overflow-hidden rounded-[40px] border border-[#d8a94a]/4 bg-[linear-gradient(180deg,rgba(255,255,255,0.022),rgba(255,255,255,0.006))] p-3">
                <video
          aria-hidden="true"
                  className="block aspect-square w-full rounded-4xl object-cover object-[34%_center] opacity-45 shadow-[0_18px_60px_rgba(0,0,0,0.14)]"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                >
                  <source src="/logos/motion.mp4" type="video/mp4" />
                </video>
                <div className="pointer-events-none absolute inset-3 rounded-4xl bg-[radial-gradient(circle_at_center,transparent_40%,rgba(5,5,5,0.16)_66%,rgba(5,5,5,0.48)_100%)]" />
              </div>
            </div>
          </div>
        )}

        <div id="packages" className="mt-12">
          <div className="inline-flex w-full flex-col items-center gap-3 text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-[#f5c84c] sm:text-xs">
              <Sparkles className="h-4 w-4" />
              {localized.packagesEyebrow}
            </div>
            <div className="h-px w-28 bg-[#f5c84c]/75" />
          </div>

          <h3 className="mt-5 text-center text-[2.35rem] font-medium leading-[0.92] tracking-tight text-white sm:text-5xl sm:leading-[0.9] lg:text-6xl">
            {serviceCopy.headingLead}{" "}
            <span className="text-amber-300">{serviceCopy.headingAccent}</span>
          </h3>

          <motion.div
            className="mx-auto mt-10 flex max-w-7xl flex-col gap-5 px-2 text-sm md:flex-row md:items-center md:justify-between md:gap-6"
            variants={sequenceContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {localized.packages.map((pkg, index) => {
              const meta = packageToneMeta(pkg.tone, locale);

              return (
                <motion.div key={`${pkg.label}-step`} variants={sequenceItem} className="flex w-full items-center gap-4 md:flex-1">
                  <div className="flex items-center gap-3">
                    <span className={["flex h-14 w-14 items-center justify-center rounded-full border text-[1.8rem] font-light leading-none", meta.timelineBorder, meta.accent].join(" ")}>
                      {pkg.number}
                    </span>
                    <div className="text-left">
                      <p className={["text-xs uppercase tracking-[0.28em]", meta.accent].join(" ")}>{meta.stepLabel}</p>
                      <p className="text-white/70">{meta.stepDescription}</p>
                    </div>
                  </div>

                  {index < localized.packages.length - 1 ? (
                    <div className="relative hidden h-px flex-1 bg-linear-to-r from-white/0 via-[#c79a43]/55 to-white/0 md:block">
                      <div className="absolute right-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-[#f1c768] shadow-[0_0_12px_rgba(241,199,104,0.72)]" />
                    </div>
                  ) : null}
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="mt-14 grid gap-6 lg:grid-cols-3"
            variants={sequenceContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {localized.packages.map((pkg) => {
              const meta = packageToneMeta(pkg.tone, locale);
              const Icon = meta.icon;

              return (
                <motion.article
                  variants={sequenceItem}
                  key={pkg.title}
                  className={[
                    "relative flex h-full flex-col rounded-4xl border bg-linear-to-b p-8 backdrop-blur-sm transition duration-300",
                    meta.shadow,
                    meta.border,
                    meta.cardTone,
                    "hover:scale-[1.01]",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className={["text-sm tracking-[0.28em]", meta.accent].join(" ")}>
                        {pkg.number}{" "}
                        <span className="text-white/45">{pkg.label.toUpperCase()}</span>
                      </p>
                      <h3 className="mt-6 max-w-48 whitespace-pre-line font-serif text-4xl leading-[0.95] text-white">
                        {pkg.title}
                      </h3>
                    </div>

                    <div className={["relative flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10", meta.iconBg].join(" ")}>
                      <div className="absolute inset-0 rounded-2xl bg-white/5 blur-xl opacity-60" />
                      <Icon className={["relative z-10 h-8 w-8", meta.accent].join(" ")} strokeWidth={1.8} />
                    </div>
                  </div>

                  <p className="mt-6 max-w-md text-sm leading-7 text-white/72">
                    {pkg.audience}
                  </p>

                  <div className="mt-8 border-t border-white/10 pt-7">
                    <p className={["text-xs uppercase tracking-[0.28em]", meta.accent].join(" ")}>
                      {pkg.bulletHeading}
                    </p>

                    <ul className="mt-5 space-y-2.5">
                      {pkg.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2.5 text-[0.82rem] leading-5 text-white/82 xl:text-[0.8rem]">
                          <span className={["mt-1.5 h-2 w-2 shrink-0 rounded-full shadow-[0_0_18px_rgba(255,255,255,0.15)]", meta.dot].join(" ")} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                      <p className={["text-xs uppercase tracking-[0.28em]", meta.accent].join(" ")}>
                        {localized.resultLabel}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-white/80">{pkg.result}</p>
                    </div>

                    <Link
                      href={pkg.href}
                      className={[
                        "mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-medium transition",
                        pkg.featured
                          ? "bg-amber-300 text-black shadow-[0_0_30px_rgba(245,158,11,0.25)] hover:bg-amber-200"
                          : "border border-white/15 bg-transparent text-white hover:border-white/25 hover:bg-white/5",
                      ].join(" ")}
                    >
                      <span>{pkg.ctaLabel}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>

          <p className="mt-8 flex flex-wrap items-center justify-center gap-3 text-center font-sans text-[0.82rem] font-medium leading-[1.2] tracking-[-0.02em] text-white sm:text-[1.1rem] lg:text-[1.2rem]">
            <span className="text-[#f2c14e]">✦</span>
            <span>Let us solve your <span className="text-[#f2c14e]">web problems</span></span>
            <span className="text-[#f2c14e]">✦</span>
          </p>

          <div className="mt-8 md:hidden">
            <div className="flex flex-col gap-4">
              {/* Primary CTA */}
              <div className="rounded-2xl border border-[#b88a1a]/70 bg-linear-to-r from-[#171717] to-[#101010] px-4 py-5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#b88a1a]/35 bg-[#111111]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#f2c14e]" aria-hidden="true">
                        <path d="M6 3.5h7l5 5V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M13 3.5V9h5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M8 14h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif text-[1.05rem] leading-snug text-[#f5f1e8]">See My Visibility Score</p>
                      <p className="mt-0.5 text-xs leading-5 text-[#c1c1c1]">See how your business shows up — and where you&apos;re losing customers.</p>
                    </div>
                  </div>
                  <a
                    href="https://calendly.com/jultech-ai/new-meeting-1"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-[#f2c14e] px-4 py-2.5 text-sm font-medium text-[#151515] transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    See My Visibility Score &rarr;
                  </a>
                </div>
              </div>
              {/* Separator */}
              <div className="mx-auto h-px w-16 bg-linear-to-r from-transparent via-[#b88a1a]/60 to-transparent" />
              {/* Secondary CTA */}
              <div className="rounded-2xl border border-white/10 bg-[#0f0f0f] px-4 py-5">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#141414]">
                      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-[#a9a9a9]" aria-hidden="true">
                        <path d="M5.5 4.8c.4-.9 1.2-1.4 2.2-1.4h1.4c.8 0 1.5.5 1.7 1.2l.7 2.4c.2.7 0 1.4-.5 1.9l-1.1 1.1c.8 1.6 2.2 3 3.8 3.8l1.1-1.1c.5-.5 1.2-.7 1.9-.5l2.4.7c.7.2 1.2.9 1.2 1.7v1.4c0 1-.5 1.8-1.4 2.2-.8.4-1.7.5-2.7.2-6.1-1.7-10.7-6.3-12.4-12.4-.3-1-.2-1.9.2-2.7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif text-[1.05rem] leading-snug text-[#f5f1e8]">Prefer to speak directly?</p>
                      <p className="mt-0.5 text-xs leading-5 text-[#c1c1c1]">We&apos;ll walk through your website and opportunities together.</p>
                    </div>
                  </div>
                  <a
                    href="tel:+18033861672"
                    className="inline-flex w-full items-center justify-center rounded-xl border border-[#b88a1a] px-4 py-2.5 text-sm font-medium text-[#f2c14e] transition-colors duration-200 hover:bg-[#171717]"
                  >
                    <span className="mr-1.5">📞</span> Call (803) 386-1672
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}