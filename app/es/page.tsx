import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "JulTech AI — Visibilidad Digital para Negocios | SEO, AEO, GEO",
  description:
    "Ayudamos a negocios a ser encontrados en Google y recomendados por sistemas de inteligencia artificial. Valoraciones estrategicas y servicios de visibilidad digital disponibles.",
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
            Tu visibilidad ya se esta decidiendo.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Cada dia, los clientes encuentran, confian y eligen negocios segun lo que ven en Google y en sistemas de IA. Asegurate de que tu negocio forme parte de esa decision.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              href="/es/strategy-call/15-min"
              className="inline-flex items-center justify-center rounded-full border border-white/40 bg-[rgba(30,40,60,0.45)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-[rgba(36,48,72,0.58)]"
            >
              Agenda una llamada estrategica
            </Link>
          </div>
        </div>
      </section>

      {/* Gold divider */}
      <div className="h-[60px] w-full border-t border-[#d4af37]/25 bg-[linear-gradient(to_bottom,rgba(212,175,55,0.06),transparent)]" />

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
                title: "Inteligencia de busqueda",
                desc: "Tu negocio aparece en Google cuando los clientes buscan activamente tus servicios.",
              },
              {
                label: "AEO",
                title: "Inteligencia de respuestas",
                desc: "Tu negocio se convierte en una respuesta confiable en herramientas de IA y asistentes de voz.",
              },
              {
                label: "GEO",
                title: "Inteligencia de recomendacion",
                desc: "Tu negocio es recomendado en resultados generados por IA como ChatGPT y Gemini.",
              },
              {
                label: "Bilingüe",
                title: "Expansion multilingue",
                desc: "Conecta con clientes hispanohablantes en plataformas de busqueda e IA.",
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
      <div className="h-[60px] w-full border-t border-[#d4af37]/25 bg-[linear-gradient(to_bottom,rgba(212,175,55,0.06),transparent)]" />

      {/* CTA */}
      <section className="px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-14 text-center md:px-12 md:py-16">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
              Paso Final
            </p>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Donde aparece tu negocio hoy en Google y en IA?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
              En 24 a 48 horas puedes obtener una direccion clara sobre tu visibilidad actual y los pasos para mejorarla.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <Link
                href="/es/strategy-call/15-min"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-[rgba(30,40,60,0.45)] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/55 hover:bg-[rgba(36,48,72,0.58)]"
              >
                Agenda una llamada estrategica
              </Link>
            </div>
            <p className="mt-6 text-sm text-zinc-500">
              Sin obligacion. Cada llamada es revisada personalmente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
