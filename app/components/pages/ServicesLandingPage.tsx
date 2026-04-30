"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Globe2,
  LayoutPanelTop,
  Languages,
  BadgeCheck,
  Search,
  Sparkles,
} from "lucide-react";

type Locale = "en" | "es";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const copy = {
  en: {
    badge: "The JulTech Visibility System™",
    title: "Everything You Need to Get Found, Answered, and Chosen",
    description:
      "We build premium websites and visibility systems that help businesses rank on Google, appear in AI answers, and expand across languages and markets.",
    location:
      "Based in the U.S., serving clients across the U.S., Latin America, and Europe in multiple languages.",
    offerEyebrow: "What we offer",
    offerTitle: "A system built for modern search and AI",
    offerDescription:
      "Each service works as part of one larger framework: design, search visibility, AI answers, recommendations, and multilingual expansion.",
    nextEyebrow: "Next step",
    nextTitle: "Ready to build the right system for your brand?",
    nextDescription:
      "Start with a project or request a free audit, and we will map the best path for your goals, market, and language needs.",
    primaryCta: "Start a Project",
    primaryHref: "/contact",
    secondaryCta: "Get Free Audit",
    secondaryHref: "/free-appraisal",
    learnMore: "Learn more",
    services: [
      {
        href: "/web-design",
        icon: LayoutPanelTop,
        eyebrow: "Design",
        title: "Web Design",
        description: "Custom-coded websites built for performance, clarity, and conversion.",
        points: [
          "Premium design and UX",
          "Fast and scalable structure",
          "Built for SEO and AI visibility",
        ],
        accent: false,
      },
      {
        href: "/seo-services",
        icon: Search,
        eyebrow: "Visibility",
        title: "SEO",
        description: "Rank on Google and attract the right audience through structured content.",
        points: [
          "Technical SEO",
          "Keyword strategy",
          "Search intent optimization",
        ],
        accent: false,
      },
      {
        href: "/aeo-services",
        icon: Sparkles,
        eyebrow: "AI Answers",
        title: "AEO",
        description: "Structure your content so AI systems can use it as a direct answer.",
        points: [
          "Answer-focused content",
          "AI-friendly structure",
          "Schema and clarity optimization",
        ],
        accent: false,
      },
      {
        href: "/geo-services",
        icon: Globe2,
        eyebrow: "Recommendations",
        title: "GEO",
        description: "Position your business to be recommended by ChatGPT and modern AI systems.",
        points: [
          "Authority signals",
          "Content clarity",
          "AI recommendation positioning",
        ],
        accent: false,
      },
      {
        href: "/multilingual-web-design",
        icon: Languages,
        eyebrow: "Growth",
        title: "Multilingual Growth",
        description: "Reach new markets across languages and increase global visibility.",
        points: [
          "English, Spanish, Portuguese, Russian",
          "International SEO support",
          "Cross-market communication",
        ],
        accent: true,
      },
      {
        href: "/about",
        icon: Languages,
        eyebrow: "Trust",
        title: "Multilingual Authority",
        description:
          "A brand story backed by language skill, international experience, and business strategy.",
        points: [
          "Global perspective",
          "Language-driven positioning",
          "Founder credibility",
        ],
        accent: false,
      },
    ],
  },
  es: {
    badge: "Servicios para su negocio",
    title: "¿Qué hacemos por usted?",
    description: "1. Creamos su página web completa\nCreamos su página web desde cero o mejoramos su página actual, con diseño profesional y calidad que atrae clientes. Incluimos imágenes, animaciones modernas y una estructura pensada para atraer clientes. También le ayudamos a proteger su marca, para que su negocio sea único. Su página estará disponible en inglés y en español, con redacción clara y correcta en ambos idiomas. Nosotros nos encargamos de la traducción para que su mensaje conecte con más clientes. Además, creamos una estrategia para conseguir reseñas reales y las mostramos en su página web para generar confianza. También desarrollamos su marca (branding) para que su negocio destaque en Columbia, SC. Sus clientes que hablan inglés podrán entender su negocio perfectamente, porque su página tendrá mensajes claros, bien organizados y fáciles de seguir. Resultado: una página web profesional que genera confianza y le trae más clientes.\n2. Mejoramos su visibilidad en Google y en la Inteligencia Artificial\nHacemos que su negocio aparezca en Google y sea entendido por herramientas de inteligencia artificial, para que más clientes lo encuentren y lo elijan. Mejoramos cómo su negocio aparece en Google. Optimizamos su página web para buscadores y herramientas de inteligencia artificial. Creamos un blog (contenido) para ayudarle a posicionarse. Agregamos más contenido y fotos para atraer clientes y mejorar su visibilidad. Registramos y optimizamos su negocio en Google Business. Fortalecemos su marca (branding) para destacar en los resultados. Para restaurantes (opcional): Si tiene restaurante, también podemos ayudar con integración con plataformas de delivery como Uber Eats y DoorDash (se revisa según sus necesidades).\n3. Crecimiento continuo cada mes\nSu negocio necesita mantenerse actualizado para seguir atrayendo clientes. Actualizamos fotos y contenido de su página web. Creamos artículos (blog) y publicaciones nuevas. Mejoramos su posicionamiento en Google. Analizamos su negocio y a sus competidores. Detectamos oportunidades y áreas de mejora. Hacemos ajustes para atraer más clientes. Resultado: su negocio se mantiene moderno, competitivo y en crecimiento constante.\n\nUsamos tecnologías modernas adaptadas a la nueva forma en que Google y la inteligencia artificial funcionan.",
    location: "¿Tiene preguntas? Hable con un experto. Hablamos inglés y español.",
    offerEyebrow: "Servicios",
    offerTitle: "Nuestros servicios principales",
    offerDescription: "Consulte los detalles de cada servicio o hable con nosotros para una solución personalizada.",
    nextEyebrow: "Siguiente paso",
    nextTitle: "¿Listo para crecer?",
    nextDescription: "Contáctenos para una consulta gratuita y descubra cómo podemos ayudarle a crecer.",
    primaryCta: "Contáctenos",
    primaryHref: "/es/contact",
    secondaryCta: "Solicite revisión gratis",
    secondaryHref: "/es/free-appraisal",
    learnMore: "Más información",
    services: [],
  },
} as const;

export default function ServicesLandingPage({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];

  return (
    <main className="bg-[#030303] text-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-12 lg:py-20">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_28%),linear-gradient(180deg,rgba(12,12,12,1),rgba(3,3,3,1))]" />
        <div className="absolute inset-0 -z-10 opacity-[0.14] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />

        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-white/3 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12">
          <motion.div
            className="mx-auto max-w-4xl text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <motion.div
              variants={itemVariants}
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#d4af37]/20 bg-black/35 px-4 py-2 text-sm text-zinc-300"
            >
              <BadgeCheck className="h-4 w-4 text-[#d4af37]" />
              {localized.badge}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl lg:text-6xl"
            >
              {localized.title}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-zinc-300"
            >
              {localized.description}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-3xl text-sm text-zinc-400"
            >
              {localized.location}
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-12 lg:pb-20">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-white/10 bg-linear-to-b from-white/5 to-white/3 px-6 py-10 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
              {localized.offerEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {localized.offerTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              {localized.offerDescription}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {localized.services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: index * 0.06, duration: 0.45, ease: "easeOut" }}
                  className={[
                    "group relative overflow-hidden rounded-[1.75rem] border p-6 shadow-[0_18px_60px_rgba(0,0,0,0.28)] transition-all duration-300",
                    service.accent
                      ? "border-[#d4af37]/20 bg-white/4.5"
                      : "border-white/10 bg-black/25",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4">
                      <Icon className="h-5 w-5 text-[#d4af37]" />
                    </div>
                    <p className="text-[11px] uppercase tracking-[0.35em] text-zinc-500">
                      {service.eyebrow}
                    </p>
                  </div>

                  <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-zinc-300">
                    {service.description}
                  </p>

                  <div className="mt-6 space-y-3 border-t border-white/10 pt-5">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-zinc-300">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#d4af37]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#d4af37] px-4 py-2.5 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
                    >
                      {localized.learnMore} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-[#d4af37]/20 bg-[#0a0a0a] px-6 py-12 shadow-[0_35px_140px_rgba(0,0,0,0.55)] sm:px-8 lg:px-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
              {localized.nextEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">
              {localized.nextTitle}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">
              {localized.nextDescription}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={localized.primaryHref}
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e3c15f]"
              >
                {localized.primaryCta}
              </Link>
              <Link
                href={localized.secondaryHref}
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#d4af37]/40"
              >
                {localized.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}