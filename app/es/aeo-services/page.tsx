"use client";

import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

const faqItems = [
  {
    question: "Que es AEO?",
    answer:
      "AEO, o Answer Engine Optimization, estructura tu contenido para que sistemas de IA, asistentes de voz y motores de respuesta puedan entenderlo y usarlo como respuesta directa.",
  },
  {
    question: "Por que AEO importa?",
    answer:
      "Porque cada vez mas personas hacen preguntas completas en herramientas de IA y esperan recibir una respuesta clara, no solo una lista de enlaces.",
  },
  {
    question: "AEO reemplaza al SEO?",
    answer:
      "No. El SEO y el AEO trabajan juntos. El SEO ayuda a que te encuentren; el AEO ayuda a que tu negocio sea la respuesta.",
  },
  {
    question: "Trabajan con empresas multilingues?",
    answer:
      "Si. Trabajamos con empresas en Estados Unidos, America Latina y Europa en multiples idiomas.",
  },
];

export default function EsAeoServicesPage() {
  return (
    <main className="bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">Servicios AEO</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">Answer Engine Optimization</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-300">
          Ayudamos a las empresas a estructurar su contenido para que sistemas de IA, asistentes de voz y motores de respuesta puedan entenderlo, citarlo y recomendarlo.
        </p>
        <p className="mt-3 text-sm text-zinc-400">Basados en Estados Unidos, trabajamos con clientes en EE. UU., America Latina y Europa en multiples idiomas.</p>

        <h2 className="mt-12 text-2xl font-semibold text-white">Construido para respuestas de IA</h2>
        <p className="mt-4 text-zinc-300">
          AEO ayuda a que tu sitio se convierta en la respuesta directa cuando las personas hacen preguntas en herramientas de IA y busqueda por voz. Organizamos tu contenido para que sea claro, conciso y facil de entender para las maquinas.
        </p>

        <div className="mt-8 space-y-4 text-zinc-300">
          <p>• Contenido orientado a respuestas directas</p>
          <p>• Estructura clara para mejor comprension por maquinas</p>
          <p>• Schema y senales de apoyo para la visibilidad</p>
          <p>• Estrategia de contenido alineada con preguntas reales</p>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="/es/web-design" className="text-[#d4af37]">Diseno Web</a>
          <a href="/es/seo-services" className="text-[#d4af37]">Servicios SEO</a>
          <a href="/es/multilingual-web-design" className="text-[#d4af37]">Diseno Web Multilingue</a>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">Preguntas frecuentes sobre AEO</h2>
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
            contextLabel="Proyecto AEO"
            title="Cuentanos sobre tu proyecto AEO"
            description="Comparte como quieres que tu negocio aparezca en respuestas de IA. Revisamos primero el alcance y luego te enviamos la valoracion correcta segun el proyecto y el enlace de pago seguro."
            sessionType="full"
            interestLabel="Servicios AEO"
            locale="es"
          />
        </section>
      </div>
    </main>
  );
}