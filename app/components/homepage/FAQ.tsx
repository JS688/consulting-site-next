"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    question: "How do I get my business to show up in Google and AI tools like ChatGPT?",
    answer:
      "Your website needs to be clear, structured, and trusted. We optimize it so search engines can rank it—and AI tools can understand and reference it—so your business gets found and recommended where people are already searching.",
  },
  {
    question: "What's the difference between SEO, AEO, and GEO?",
    answer:
      "SEO helps you get found on Google. AEO helps you become the direct answer in AI tools. GEO positions your business as a trusted source AI systems rely on. Together, they ensure your business is visible, understood, and chosen across modern search.",
  },
  {
    question: "Do I need a new website?",
    answer:
      "Not always. If your current site has a solid foundation, we upgrade it. If it's holding you back, we rebuild it. Either way, the goal is the same: a website that actually brings you customers.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Some changes—like trust and conversions—improve almost immediately. Visibility builds over time, with meaningful progress typically within 2–4 months and stronger growth as your authority increases.",
  },
  {
    question: "Is this worth it for a small or local business?",
    answer:
      "If your customers search before they choose, then yes. A well-optimized website compounds over time—it keeps bringing in customers without ongoing ad spend, making it one of the highest-leverage investments a local business can make.",
  },
  {
    question: "How much does this cost?",
    answer:
      "It depends on what your business needs. Some projects require focused upgrades, while others involve a full rebuild and ongoing growth strategy. We'll show you exactly what's limiting your growth—and what level of investment makes sense—before you decide anything.",
  },
  {
    question: "What happens after I request the free visibility report?",
    answer:
      "You'll see exactly how your business shows up today, where you're losing customers, and what to fix first. From there, you can move forward—or not. No pressure.",
  },
  {
    question: "What makes you different from a typical web agency?",
    answer:
      "Most agencies build websites that look good. We build websites that get found, build trust, and drive revenue. Everything is designed around one outcome: turning visibility into customers.",
  },
];

const faqItemsEs = [
  {
    question: "Como hago para que mi negocio aparezca en ChatGPT o en herramientas de IA?",
    answer:
      "Para aparecer en herramientas de IA como ChatGPT, tu sitio web necesita tener estructura clara, contenido relevante e informacion precisa sobre tus servicios. Nosotros optimizamos tu sitio para que los sistemas de IA puedan entenderlo y recomendar tu negocio.",
  },
  {
    question: "Que es SEO y por que importa para mi negocio?",
    answer:
      "SEO ayuda a que tu sitio web aparezca en Google cuando los clientes buscan tus servicios. Un mejor SEO significa mas visibilidad, mas trafico y mas prospectos.",
  },
  {
    question: "Mi negocio puede aparecer tanto en Google como en resultados de IA?",
    answer:
      "Si. Al mejorar la estructura, el contenido y los datos de tu sitio web, tu negocio puede posicionarse en Google y tambien ser recomendado en herramientas de IA como ChatGPT y Perplexity.",
  },
  {
    question: "Necesito un sitio nuevo o pueden mejorar el que ya tengo?",
    answer:
      "Podemos hacer ambas cosas. Ya sea que necesites un sitio nuevo o quieras mejorar el actual, lo optimizamos para que funcione mejor en busqueda y atraiga mas clientes.",
  },
  {
    question: "Cuanto tiempo toma ver resultados con SEO y optimizacion para IA?",
    answer:
      "La mayoria de los negocios empieza a notar mejoras en unas pocas semanas, con resultados mas fuertes durante los meses siguientes dependiendo de la competencia y del estado del sitio web.",
  },
  {
    question: "Con que tipos de negocios trabajan?",
    answer:
      "Trabajamos con negocios locales como restaurantes, contratistas, realtors y proveedores de servicios que quieren mejorar su visibilidad en Google y en herramientas de busqueda con IA.",
  },
];

type Locale = "en" | "es";

export default function GlobalServicesFaqSection({ locale = "en" }: { locale?: Locale }) {
  const items = locale === "en" ? faqItems : faqItemsEs;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="relative overflow-hidden bg-[#050505] px-4 py-10 text-white sm:px-6 md:px-8 md:py-12 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_24%),linear-gradient(180deg,rgba(17,17,18,1),rgba(3,3,3,1))]" />
      <div className="absolute inset-0 -z-10 opacity-[0.16] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-size-[56px_56px]" />

      <div className="mx-auto max-w-6xl rounded-3xl border border-white/10 bg-white/3 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-8 lg:p-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[9px] font-medium uppercase tracking-[0.35em] text-zinc-400 sm:text-[11px] sm:tracking-[0.45em]">
            FAQ
          </p>
          <p className="mx-auto mt-2 max-w-2xl text-xs font-medium text-white/70 sm:mt-4 sm:text-base">
            {locale === "en" ? "Still have questions? Here are some of the most common ones:" : "Todavia tienes preguntas? Aqui estan algunas de las mas comunes:"}
          </p>
          <h2 className="mt-2 text-lg font-semibold tracking-tight text-[#d4af37] sm:mt-4 sm:text-4xl">
            {locale === "en" ? "Frequently Asked Questions" : "Preguntas frecuentes"}
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-xs leading-6 text-zinc-300 sm:mt-5 sm:text-base sm:leading-8">
            {locale === "en"
              ? "Everything you need to know before turning your website into a growth engine."
              : "Respuestas claras sobre SEO, visibilidad en IA y como tu sitio web puede convertir busqueda en clientes."}
          </p>
        </div>

        <div className="mx-auto mt-6 max-w-5xl sm:mt-12">
          <div className="grid gap-3 sm:gap-4">
            {items.map((item, index) => (
              <motion.details
                key={item.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group rounded-lg border border-white/10 bg-black/25 p-3 sm:rounded-[1.25rem] sm:p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-xs font-medium text-white sm:text-base">
                    {item.question}
                  </span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-[#d4af37] transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-2 text-xs leading-6 text-zinc-300 sm:mt-4 sm:text-sm sm:leading-7">
                  {item.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://calendly.com/jultech-ai/new-meeting-1"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#d4af37] transition hover:text-[#e2b44a]"
          >
            {locale === "en" ? "See what's possible →" : "Descubre lo que es posible →"}
          </a>
        </div>
      </div>
    </section>
  );
}