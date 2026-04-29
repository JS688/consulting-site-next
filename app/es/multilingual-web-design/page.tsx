"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

const languages = ["Ingles", "Espanol"];

const faqItems = [
  {
    question: "Que es el diseno web multilingue?",
    answer:
      "Es el proceso de construir sitios web que se comunican con claridad en varios idiomas mientras apoyan visibilidad en busqueda, comprension por IA y conversion.",
  },
  {
    question: "Por que es importante?",
    answer:
      "Ayuda a tu empresa a llegar a mas audiencias, comunicarse con mayor claridad y expandirse a nuevos mercados sin perder consistencia de marca.",
  },
  {
    question: "Puede ayudar al SEO?",
    answer:
      "Si. Un sitio bilingue mejora la visibilidad en distintas busquedas por idioma y ayuda a los motores a entender a tu audiencia internacional.",
  },
  {
    question: "Puede ayudar con respuestas de IA?",
    answer:
      "Si. Una estructura multilingue clara ofrece mas contexto para que los sistemas de IA entiendan, citen y recomienden tu negocio.",
  },
];

const services = [
  {
    title: "Diseno Web",
    subtitle: "Base",
    desc: "Sitios web con codigo personalizado para rendimiento, claridad y conversion.",
    points: ["Diseno premium y UX", "Estructura rapida y escalable", "Pensado para SEO y visibilidad en IA"],
  },
  {
    title: "SEO",
    subtitle: "Visibilidad en busqueda",
    desc: "Posiciona en Google y atrae a la audiencia correcta con contenido bien estructurado.",
    points: ["SEO tecnico", "Estrategia de palabras clave", "Optimizacion por intencion de busqueda"],
  },
  {
    title: "AEO",
    subtitle: "Respuestas de IA",
    desc: "Estructura tu contenido para que los sistemas de IA puedan usarlo como respuesta directa.",
    points: ["Contenido orientado a respuestas", "Estructura lista para IA", "Schema y claridad"],
  },
  {
    title: "GEO",
    subtitle: "Recomendaciones de IA",
    desc: "Posiciona tu negocio para ser recomendado por ChatGPT y sistemas modernos de IA.",
    points: ["Senales de autoridad", "Claridad de contenido", "Posicionamiento para recomendaciones"],
  },
  {
    title: "Crecimiento bilingue",
    subtitle: "Expansion",
    desc: "Llega a nuevos mercados en varios idiomas y aumenta tu visibilidad global.",
    points: ["Soporte en ingles y espanol", "SEO internacional", "Estrategia por mercados"],
  },
];

export default function EsMultilingualWebDesignPage() {
  return (
    <main className="bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.25rem] border border-white/10 bg-white/3 px-6 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:px-8 sm:py-12 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.4 }} className="max-w-4xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">Diseno Web Multilingue</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl lg:text-6xl">El sistema de visibilidad JulTech para servicios multilingues</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              Disenamos sitios web multilingues premium que ayudan a las empresas a llegar a mas personas, comunicarse con mas claridad y crecer en busqueda y plataformas de IA.
            </p>
            <p className="mt-3 max-w-3xl text-sm text-zinc-400">Basados en Estados Unidos, atendemos clientes en EE. UU., America Latina y Europa en varios idiomas.</p>

            <div className="mt-8 flex flex-wrap gap-3">
              {languages.map((lang) => (
                <span key={lang} className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-300">{lang}</span>
              ))}
            </div>
          </motion.div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/25 p-7 shadow-lg">
                <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#d4af37]">{service.subtitle}</div>
                <h2 className="mb-2 text-xl font-bold text-white">{service.title}</h2>
                <p className="mb-4 text-zinc-300">{service.desc}</p>
                <ul className="mb-0 list-inside list-disc space-y-2 text-sm text-zinc-300">
                  {service.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/es/web-design" className="text-[#d4af37]">Diseno Web</Link>
            <Link href="/es/seo-services" className="text-[#d4af37]">Servicios SEO</Link>
            <Link href="/es/aeo-services" className="text-[#d4af37]">Servicios AEO</Link>
            <Link href="/es/geo-services" className="text-[#d4af37]">Servicios GEO</Link>
          </div>
        </div>

        <section className="mt-16 rounded-[2.25rem] border border-white/10 bg-white/3 p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8 lg:p-12">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">Preguntas frecuentes</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl">Preguntas comunes sobre diseno web multilingue</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300">Respuestas claras ayudan a personas y sistemas de IA a entender como los sitios multilingues apoyan el crecimiento.</p>
          </div>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid gap-4">
              {faqItems.map((item, index) => (
                <motion.details key={item.question} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.4, delay: index * 0.05 }} className="group rounded-[1.25rem] border border-white/10 bg-black/25 p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-base font-medium text-white">{item.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-[#d4af37] transition-transform duration-300 group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{item.answer}</p>
                </motion.details>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <ProjectBookingFlow
            contextLabel="Proyecto de diseno web multilingue"
            title="Cuentanos sobre tu proyecto de diseno web multilingue"
            description="Comparte los idiomas, mercados y metas que quieres apoyar. Revisamos primero el alcance y luego te enviamos la valoracion correcta segun el proyecto y el enlace de pago seguro."
            sessionType="full"
            interestLabel="Diseno Web Multilingue"
            locale="es"
          />
        </section>
      </div>
    </main>
  );
}