import Link from "next/link";
import { ArrowRight, Clock3, Check } from "lucide-react";

import { STRIPE_PAYMENT_LINKS } from "@/lib/sessionLinks";

export const metadata = {
  title: "Consulta de 1 hora",
  description:
    "Una sesion estrategica de 1 hora para empresas que buscan mejor posicionamiento, mas visibilidad y respuestas directas.",
};

export default function EsConsultationPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 px-5 py-10 sm:py-14">
        <div className="flex items-center justify-between gap-4">
          <Link href="/es" className="text-sm text-white/45 transition hover:text-white">← Volver</Link>
          <a href={STRIPE_PAYMENT_LINKS.full} className="rounded-full border border-blue-400/35 bg-blue-500/90 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-400">
            Reservar ahora
          </a>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.45em] text-white/35">Sesion estrategica de 1 hora</p>
            <h1 className="max-w-[10ch] text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">Reserva una llamada de 1 hora.</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
              Rapida, enfocada y practica. Revisamos tu sitio web, tu mensaje y los siguientes pasos para que salgas con un plan claro.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">60 minutos</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Videollamada en vivo</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Pago + calendario</span>
            </div>

            <div className="mt-8 flex gap-4">
              <a id="book" href={STRIPE_PAYMENT_LINKS.full} className="inline-flex items-center gap-3 rounded-full bg-blue-500 px-6 py-4 text-base font-bold text-white transition hover:bg-blue-400">
                Reservar sesion <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-[#111111] p-6 sm:p-7">
            <p className="text-xs uppercase tracking-[0.35em] text-white/30">Lo que obtienes</p>
            <ul className="mt-5 space-y-4 text-sm sm:text-base">
              {[
                "Revision de sitio web y mensaje",
                "Oportunidades de crecimiento",
                "Siguientes pasos claros",
                "Respuestas directas a tus preguntas",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/75">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/60">
              <div className="flex items-center gap-2 text-white/75">
                <Clock3 className="h-4 w-4" />
                <span>Una sola llamada, sin relleno</span>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          <MiniCard title="Antes de la llamada" items={["Comparte tu sitio o enlace del proyecto", "Dime en que quieres ayuda"]} />
          <MiniCard title="Despues de la llamada" items={["Te llevas un plan de accion claro", "Sabrás exactamente que hacer despues"]} />
        </section>
      </div>
    </main>
  );
}

function MiniCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#111111] p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-white/65 sm:text-base">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-white/45" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}