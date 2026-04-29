"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { getAppraisalRangeLabel } from "@/lib/appraisalPricing";

const benefits = [
  "El rendimiento y la estructura de tu sitio web",
  "Tu visibilidad en Google (SEO)",
  "Como aparece tu negocio en herramientas de IA como ChatGPT",
  "Oportunidades perdidas para atraer clientes calificados",
  "Siguientes pasos claros para mejorar visibilidad y conversion",
];

const outcomes = [
  "Donde se encuentra hoy tu negocio",
  "Que te esta frenando",
  "Como convertir tu sitio web en un sistema de adquisicion de clientes",
];

export default function EsFreeAppraisalPage() {
  const appraisalRangeLabel = getAppraisalRangeLabel("es");
  const [businessName, setBusinessName] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");

  const canSubmit =
    businessName.trim().length > 0 &&
    email.trim().length > 0 &&
    businessDescription.trim().length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit) return;

    const subject = `Solicitud de valoracion AI - ${businessName.trim()}`;
    const body = [
      "Hola JulTech,",
      "",
      "Quiero solicitar una valoracion de visibilidad AI segun el alcance.",
      "",
      `Nombre del negocio: ${businessName.trim()}`,
      `Correo electronico: ${email.trim()}`,
      websiteUrl.trim() ? `URL del sitio web: ${websiteUrl.trim()}` : null,
      "",
      "Descripcion del negocio:",
      businessDescription.trim(),
      "",
      `Entiendo que la valoracion pagada se define segun el alcance (${appraisalRangeLabel}) y se acredita al proyecto completo si avanzamos.`,
    ]
      .filter(Boolean)
      .join("\n");

    const params = new URLSearchParams({ subject, body });
    window.location.assign(`mailto:ai@jul-tech.com?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-black px-6 py-8 text-white">
      <div className="mx-auto flex max-w-2xl items-center justify-end pb-8">
        <Link href="/es" className="text-xs text-zinc-500 transition hover:text-zinc-300">
          ← Volver
        </Link>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Solicita tu valoracion</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Obten tu valoracion de visibilidad en IA
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            La valoracion depende del alcance del proyecto. Los proyectos starter son $100, los proyectos growth o de nivel medio son $200, y los proyectos avanzados o personalizados son $300. La valoracion pagada se acredita al costo del proyecto si avanzas.
          </p>
        </div>

        <div className="mb-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">En esta valoracion analizamos:</p>
          <ul className="mb-10 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-10 rounded-xl border border-white/8 bg-white/3 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Te ayuda a entender con claridad:</p>
          <ul className="space-y-2">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]/70" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        <p className="mb-5 text-sm font-medium text-zinc-400">Pensado para empresas listas para liderar en la era de la IA.</p>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-7">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500">Nombre del negocio *</label>
              <input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} placeholder="Acme Inc." className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500">Correo electronico *</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@empresa.com" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-500">URL del sitio web (opcional)</label>
            <input type="url" value={websiteUrl} onChange={(e) => setWebsiteUrl(e.target.value)} placeholder="https://tusitio.com" className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-500">A que se dedica tu negocio? *</label>
            <textarea rows={4} value={businessDescription} onChange={(e) => setBusinessDescription(e.target.value)} placeholder="Describe brevemente tu negocio y tu objetivo principal." className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60" />
          </div>

          <div className="pt-2">
            <button type="submit" disabled={!canSubmit} className="w-full rounded-full bg-[#d4af37] py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.2)] transition hover:bg-[#c9a832] disabled:cursor-not-allowed disabled:opacity-40">
              Solicitar mi valoracion →
            </button>
            <p className="mt-3 text-center text-xs text-zinc-500">La valoracion pagada va de {appraisalRangeLabel} segun el alcance y se acredita al costo del proyecto si avanzas.</p>
            <p className="mt-1 text-center text-xs text-zinc-600">Esto abre un borrador de correo prellenado para revisar el alcance y enviarte el enlace de pago correcto.</p>
          </div>
        </form>

        <div className="mt-16 text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">O salta el formulario</p>
          <h2 className="mt-3 text-xl font-bold text-white">Agenda una llamada estrategica de 15 min</h2>
          <p className="mt-2 text-sm text-zinc-400">Si prefieres hablar, elige una hora y revisaremos tu visibilidad contigo.</p>
          <Link href="/es/strategy-call/15-min" className="jultech-calendly-btn mt-6 inline-block">
            Agendar llamada estrategica →
          </Link>
        </div>
      </div>
    </div>
  );
}