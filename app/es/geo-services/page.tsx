"use client";

import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

const faqItems = [
  {
    question: "Que es GEO?",
    answer:
      "GEO, o Generative Engine Optimization, es el proceso de estructurar tu sitio web y contenido para que sistemas de IA como ChatGPT y Gemini puedan entender, referenciar y recomendar tu negocio.",
  },
  {
    question: "Por que GEO es importante?",
    answer:
      "Porque cada vez mas personas usan herramientas de IA para descubrir empresas, comparar opciones y obtener recomendaciones en lugar de depender solo de resultados tradicionales.",
  },
  {
    question: "Como ayuda GEO a mi negocio?",
    answer:
      "GEO hace que tu negocio sea mas visible en recomendaciones generadas por IA al volver tu contenido mas claro, mas confiable y mas facil de interpretar.",
  },
  {
    question: "Trabajan con empresas internacionales?",
    answer:
      "Si. Trabajamos con empresas en Estados Unidos, America Latina y Europa en multiples idiomas.",
  },
];

export default function EsGeoServicesPage() {
  return (
    <main className="bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">Servicios GEO</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">Generative Engine Optimization</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Ayudamos a las empresas a ser mas visibles en recomendaciones generadas por IA estructurando el contenido para claridad, autoridad y entendimiento por maquinas.
        </p>
        <p className="mt-3 text-sm text-zinc-400">Basados en Estados Unidos, trabajamos con clientes en EE. UU., America Latina y Europa en multiples idiomas.</p>

        <h2 className="mt-12 text-2xl font-semibold text-white">Construido para recomendaciones de IA</h2>
        <p className="mt-4 text-zinc-300">
          GEO ayuda a que tu negocio aparezca cuando los sistemas de IA recomiendan opciones, resumen soluciones o comparan proveedores. Hacemos que tu contenido sea mas facil de entender y confiar para la IA.
        </p>

        <div className="mt-8 space-y-4 text-zinc-300">
          <p>• Contenido estructurado para sistemas de recomendacion por IA</p>
          <p>• Senales de autoridad mas fuertes en todo tu sitio</p>
          <p>• Visibilidad bilingue para ampliar tu alcance</p>
          <p>• Posicionamiento claro que apoya la comprension por IA</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/es/web-design" className="text-[#d4af37]">Diseno Web</a>
          <a href="/es/seo-services" className="text-[#d4af37]">Servicios SEO</a>
          <a href="/es/aeo-services" className="text-[#d4af37]">Servicios AEO</a>
          <a href="/es/multilingual-web-design" className="text-[#d4af37]">Diseno Web Multilingue</a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">Preguntas frecuentes sobre GEO</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-16">
          <ProjectBookingFlow
            contextLabel="Proyecto GEO"
            title="Cuentanos sobre tu proyecto GEO"
            description="Comparte donde tu marca necesita mas visibilidad en IA. Revisamos primero el alcance y luego te enviamos la valoracion correcta segun el proyecto y el enlace de pago seguro."
            sessionType="full"
            interestLabel="Servicios GEO"
            locale="es"
          />
        </section>
      </div>
    </main>
  );
}