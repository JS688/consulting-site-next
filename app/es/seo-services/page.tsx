"use client";

import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

const faqItems = [
  {
    question: "Que incluyen los servicios de SEO?",
    answer:
      "Los servicios de SEO incluyen optimizacion tecnica, estrategia de palabras clave, estructura de contenido, enlazado interno y mejoras de rendimiento para ayudar a que tu sitio web posicione en Google.",
  },
  {
    question: "El SEO puede ayudar con la visibilidad en IA?",
    answer:
      "Si. El SEO moderno mejora la visibilidad en IA al hacer que tu contenido sea mas claro, estructurado y facil de entender para los sistemas de IA.",
  },
  {
    question: "Trabajan con empresas multilingues?",
    answer:
      "Si. Trabajamos con empresas en Estados Unidos, America Latina y Europa en multiples idiomas.",
  },
  {
    question: "Sigo necesitando SEO si ya tengo sitio web?",
    answer:
      "Si. Un sitio web sin SEO suele ser dificil de encontrar. El SEO ayuda a que tu contenido sea descubierto, comprendido y elegido.",
  },
];

export default function EsSeoServicesPage() {
  return (
    <main className="bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">Servicios SEO</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">Busqueda + visibilidad en IA</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          Ayudamos a las empresas a posicionarse en Google, aparecer en respuestas generadas por IA y construir visibilidad en mercados multilingues.
        </p>
        <p className="mt-3 text-sm text-zinc-400">Basados en Estados Unidos, trabajamos con clientes en EE. UU., America Latina y Europa.</p>

        <section className="mt-12 rounded-4xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-semibold text-white">SEO que se extiende a la visibilidad en IA</h2>
          <p className="mt-4 max-w-3xl text-zinc-300">
            Nuestro enfoque combina SEO tecnico, estrategia de contenido y enlazado interno para que tu negocio pueda ser entendido por motores de busqueda y sistemas de IA. El objetivo es simple: ayudar a las personas correctas a encontrarte, confiar en ti y elegirte.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">SEO tecnico</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Mejora velocidad, indexacion, rastreabilidad y el rendimiento general del sitio.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">Estrategia de intencion de busqueda</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Alinea tus paginas con las preguntas y problemas que tu audiencia realmente busca.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">Estructura lista para IA</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Organiza el contenido para que los sistemas de IA puedan entenderlo, citarlo y recomendarlo.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
              <h3 className="text-lg font-semibold text-white">Crecimiento bilingue</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Amplia tu alcance en varios idiomas y mercados con SEO para visibilidad internacional.</p>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a href="/es/web-design" className="text-[#d4af37]">Diseno Web</a>
            <a href="/es/aeo-services" className="text-[#d4af37]">Servicios AEO</a>
            <a href="/es/geo-services" className="text-[#d4af37]">Servicios GEO</a>
            <a href="/es/multilingual-web-design" className="text-[#d4af37]">Diseno Web Multilingue</a>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">Preguntas frecuentes sobre SEO</h2>
          <div className="mt-6 space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <ProjectBookingFlow
            contextLabel="Proyecto SEO"
            title="Cuentanos sobre tu proyecto SEO"
            description="Comparte tus metas, desafios de visibilidad y situacion actual del sitio. Revisamos primero el alcance y luego te enviamos la valoracion correcta segun el proyecto y el enlace de pago seguro."
            sessionType="full"
            interestLabel="Servicios SEO"
            locale="es"
          />
        </section>
      </div>
    </main>
  );
}