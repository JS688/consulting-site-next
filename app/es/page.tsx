import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JulTech AI — Visibilidad Digital para Negocios | SEO, AEO, GEO",
  description:
    "Ayudamos a negocios a ser encontrados en Google y recomendados por sistemas de inteligencia artificial. Auditoría gratuita de visibilidad AI disponible.",
};

export default function EsHomePage() {
  return (
    <main className="bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-32 text-center md:px-10 lg:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.10),transparent_40%)]" />
        <div className="relative mx-auto max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
            SISTEMA DE VISIBILIDAD AI
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Tu visibilidad ya está siendo decidida.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Cada día, los clientes encuentran, confían y eligen negocios basándose en lo que ven en Google y sistemas de IA. Asegúrate de que tu negocio sea parte de esa decisión.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/free-appraisal"
              className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
            >
              Obtén tu Auditoría Gratuita →
            </Link>
            <a
              href="https://calendly.com/jultech-ai/new-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-[#d4af37]/80 transition-colors hover:text-[#d4af37]"
            >
              o agenda una llamada estratégica
            </a>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="w-full" style={{ borderTop: "1px solid rgba(212,175,55,0.25)", background: "linear-gradient(to bottom, rgba(212,175,55,0.06), transparent)", height: "60px" }} />

      {/* Services */}
      <section className="px-6 py-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
            NUESTROS SERVICIOS
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-center text-4xl font-semibold leading-tight md:text-5xl">
            Un sistema completo de visibilidad digital.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                label: "SEO",
                title: "Inteligencia de Búsqueda",
                desc: "Tu negocio aparece en Google cuando los clientes buscan activamente tus servicios.",
              },
              {
                label: "AEO",
                title: "Inteligencia de Respuestas",
                desc: "Tu negocio se convierte en la respuesta confiable en herramientas de IA y asistentes de voz.",
              },
              {
                label: "GEO",
                title: "Inteligencia de Recomendación",
                desc: "Tu negocio es recomendado en resultados generados por IA como ChatGPT y Gemini.",
              },
              {
                label: "Bilingüe",
                title: "Expansión Multilingüe",
                desc: "Conecta con clientes hispanohablantes en plataformas de búsqueda e IA.",
              },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-3xl border border-[#d4af37]/20 bg-white/3 p-8"
              >
                <span className="text-xs font-bold uppercase tracking-widest text-[#d4af37]/70">
                  {s.label}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="w-full" style={{ borderTop: "1px solid rgba(212,175,55,0.25)", background: "linear-gradient(to bottom, rgba(212,175,55,0.06), transparent)", height: "60px" }} />

      {/* CTA */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-14 text-center md:px-12 md:py-16">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
              Paso Final
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              ¿Dónde aparece tu negocio hoy en Google y en IA?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              En 24–48 horas recibes un análisis claro de tu visibilidad actual y los pasos para mejorarla. Sin compromiso.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/free-appraisal"
                className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-7 py-4 text-sm font-semibold text-black transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(212,175,55,0.35)]"
              >
                Obtén tu Auditoría Gratuita →
              </Link>
              <a
                href="https://calendly.com/jultech-ai/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#d4af37]/80 transition-colors hover:text-[#d4af37]"
              >
                o agenda una llamada estratégica
              </a>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Sin obligación. Cada auditoría es revisada personalmente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
