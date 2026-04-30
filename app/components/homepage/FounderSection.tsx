"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";

type Locale = "en" | "es";

const copy = {
  en: {
    eyebrow: "About JulTech",
    founder: "Julia Sokolsky — Founder of JulTech",
    location: "Columbia, SC · USA",
    intro:
      "Founded by Julia Sokolsky, JulTech ",
    introSuffix:
      " works with a select group of businesses that want to improve how they show up in Google search and modern search platforms.",
    paragraphs: [
      "Many businesses invest in websites, SEO, and AI tools — but treat them separately.",
      "The result? Good tools, poor outcomes.",
      "JulTech was built to fix that.",
      "By bringing website design, search visibility, and content structure together into one system that actually works.",
    ],
    focusTitle: "What I focus on",
    focusItems: [
      "Building high-performance, conversion-focused websites",
      "Improving visibility in Google search results",
      "Structuring content for modern search systems and AI tools",
      "Creating systems that support long-term growth",
    ],
    workWithTitle: "Who I work with",
    workWithLead: "Primarily businesses in:",
    workWithItems: [
      "Real estate",
      "Homebuilding",
      "Mortgage",
      "Restaurants and cafes",
      "Local service industries",
    ],
    closingTitle: "Closing",
    closingLead: "JulTech focuses on building systems that make your business:",
    closingItems: [
      "Easier to find in search",
      "Easier to understand",
      "Easier to choose",
    ],
    closingCta: "If that's what you're looking for, we should talk.",
  },
  es: {
    eyebrow: "Sobre JulTech",
    founder: "Julia Sokolsky — Fundadora de JulTech",
    location: "Columbia, SC · USA",
    intro:
      "Fundada por Julia Sokolsky, JulTech ",
    introSuffix:
      " trabaja con un grupo selecto de negocios que quieren mejorar como aparecen en Google y en las plataformas modernas de busqueda.",
    paragraphs: [
      "Muchos negocios invierten en sitios web, SEO y herramientas de IA — pero los tratan por separado.",
      "El resultado? Buenas herramientas, resultados pobres.",
      "JulTech fue creada para corregir eso.",
      "Uniendo diseno web, visibilidad en buscadores y estructura de contenido en un solo sistema que realmente funciona.",
    ],
    focusTitle: "En que me enfoco",
    focusItems: [
      "Construir sitios web de alto rendimiento orientados a conversion",
      "Mejorar visibilidad en resultados de Google",
      "Estructurar contenido para sistemas de busqueda modernos y herramientas de IA",
      "Crear sistemas que apoyan crecimiento a largo plazo",
    ],
    workWithTitle: "Con quien trabajo",
    workWithLead: "Principalmente negocios en:",
    workWithItems: [
      "Bienes raices",
      "Construccion de viviendas",
      "Hipotecas",
      "Restaurantes y cafes",
      "Industrias locales de servicios",
    ],
    closingTitle: "Cierre",
    closingLead: "JulTech se enfoca en construir sistemas que hacen tu negocio:",
    closingItems: [
      "Mas facil de encontrar en buscadores",
      "Mas facil de entender",
      "Mas facil de elegir",
    ],
    closingCta: "Si eso es lo que buscas, deberiamos hablar.",
  },
} as const;

export default function FounderSection({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24">
      {/* Subtle background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(255,215,64,0.05),transparent_55%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-12 text-xs uppercase tracking-[0.45em] text-white/35"
        >
          {localized.eyebrow}
        </motion.p>

        <div className="flex flex-col gap-12 md:flex-row md:items-start md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="relative h-64 w-56 overflow-hidden rounded-2xl ring-1 ring-white/10 md:h-80 md:w-64">
              <Image
                src="/julia-headshot.jpg"
                alt="Julia Sokolsky — Founder of JulTech™"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 224px, 256px"
                priority
              />
            </div>

            {/* Name + location */}
            <div className="mt-4">
              <p className="text-base font-semibold text-white">{localized.founder}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-white/40">
                <MapPin className="h-3 w-3" />
                {localized.location}
              </p>
              <Link
                href="https://www.linkedin.com/in/julia-sokolsky/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-xs text-[#FFD740] hover:underline"
              >
                LinkedIn <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-white/70"
          >
            <p className="text-lg leading-relaxed text-white/90">
              {localized.intro}
              <span className="text-sm text-white/40">(JulTech AI Consulting Group LLC)</span>{" "}
              {localized.introSuffix}
            </p>

            {localized.paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="space-y-3 pt-2">
              <p className="font-medium text-white/85">{localized.focusTitle}</p>
              <ul className="space-y-2 pl-1">
                {localized.focusItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD740]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-medium text-white/85">{localized.workWithTitle}</p>
              <p className="text-sm text-white/60">{localized.workWithLead}</p>
              <ul className="space-y-2 pl-1">
                {localized.workWithItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD740]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3 pt-2">
              <p className="font-medium text-white/85">{localized.closingTitle}</p>
              <p className="leading-relaxed">{localized.closingLead}</p>
              <ul className="space-y-2 pl-1">
                {localized.closingItems.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD740]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-medium text-white">
                {localized.closingCta}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
