"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, GraduationCap } from "lucide-react";

type Locale = "en" | "es";

const copy = {
  en: {
    eyebrow: "About JulTech",
    founderName: "Julia Sokolsky",
    founderRole: "Founder",
    location: "Columbia, SC · USA",
    linkedinLabel: "Connect With Us on LinkedIn",
    titleA: "Strategic websites.",
    titleB: "Clear visibility.",
    summaryLead: "JulTech designs websites across industries, with a focus on the medical field.",
    summaryAccent: "Be found. Be Understood. Be Chosen.",
    support: "Design, search visibility, and brand clarity working quietly as one system.",
    aligned: "If this aligns with your practice, we can discuss it further.",
    primaryCta: "Get Your Free Consultation",
    secondaryCta: "Talk to an Expert Now",
    education:
      "Currently completing a PMBA at the University of South Carolina, with specialization in AI, business analytics, and cybersecurity.",
  },
  es: {
    eyebrow: "Sobre JulTech",
    founderName: "Julia Sokolsky",
    founderRole: "Fundadora de JulTech",
    location: "Columbia, SC · USA",
    linkedinLabel: "Conectar en LinkedIn",
    titleA: "Sitios estrategicos.",
    titleB: "Visibilidad clara.",
    summaryLead: "JulTech diseña sitios web para la industria medica",
    summaryAccent: "Construidos para ser encontrados, entendidos y elegidos.",
    support: "Diseño, visibilidad en buscadores y claridad de marca funcionando en silencio como un solo sistema.",
    aligned: "Si eso se alinea contigo, deberiamos hablar.",
    primaryCta: "Recibe tu consulta gratis",
    secondaryCta: "Habla con un experto ahora",
    education:
      "Actualmente completando un PMBA en la University of South Carolina, enfocado en IA, analitica empresarial y ciberseguridad.",
  },
} as const;

export default function FounderSection({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];
  const consultationHref = locale === "es" ? "/es/15-min-strategy-call" : "/15-min-strategy-call";
  const expertHref = locale === "es" ? "/es/contact" : "/contact";

  return (
    <section className="bg-[#050505] px-4 py-6 text-white sm:px-6 md:px-10 md:py-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[400px_minmax(0,1fr)] lg:items-start lg:gap-16">
          <aside className="mx-auto w-full max-w-110 lg:mx-0 lg:max-w-none">
            <div className="overflow-hidden rounded-3xl">
              <div className="relative aspect-4/5 bg-[#111]">
                <Image
                  src="/mememe.png"
                  alt="Julia Sokolsky"
                  fill
                  className="object-cover object-[50%_30%] opacity-90"
                  priority
                />
              </div>
            </div>

            <div className="px-1 pt-6">
              <h2 className="text-xl font-semibold text-white sm:text-2xl">{localized.founderName}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.22em] text-[#d7b35a]">{localized.founderRole}</p>
            </div>
          </aside>

          <div>
            <div className="max-w-3xl">
              <h1 className="animate-stagger-1 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {localized.titleA}
                <br />
                <span className="text-[#d7b35a]">{localized.titleB}</span>
              </h1>

              <div className="animate-stagger-2 mt-7 h-px w-14 bg-[#d7b35a]/65" />

              <p className="animate-stagger-3 mt-7 max-w-2xl text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
                {localized.summaryLead}
              </p>

              <p className="animate-stagger-4 mt-6 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">{localized.support}</p>

              <div className="animate-stagger-5 mt-6 pt-1">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7b35a]/45 text-[#d7b35a]">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <p className="max-w-2xl pt-1 text-sm leading-7 text-white/65 sm:text-base">{localized.education}</p>
                </div>
              </div>

              <div className="animate-stagger-6 mt-6 flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#d7b35a]/45 text-[#d7b35a]">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <p className="pt-1 text-base leading-7 text-white/85 sm:text-lg">{localized.aligned}</p>
              </div>

              <div className="animate-stagger-7 mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={consultationHref}
                  className="inline-flex items-center justify-center rounded-lg bg-[#d7b35a] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#ebca79]"
                >
                  {localized.primaryCta}
                </Link>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Link
                    href={expertHref}
                    className="inline-flex items-center justify-center rounded-lg border border-[#d7b35a]/60 px-5 py-2.5 text-sm font-semibold text-[#d7b35a] transition hover:border-[#ebca79] hover:text-[#ebca79]"
                  >
                    {localized.secondaryCta}
                  </Link>
                  <a
                    href="https://www.linkedin.com/in/julia-sokolsky/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-[#d7b35a] transition hover:text-[#ebca79]"
                    aria-label="Connect on LinkedIn"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-[#d7b35a]/45 text-[#d7b35a]">
                      in
                    </span>
                    {localized.linkedinLabel}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="animate-stagger-8 mt-6">
                <p className="max-w-2xl text-xl font-semibold leading-8 text-[#d7b35a] sm:text-2xl">
                  {localized.summaryAccent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes staggerIn {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        :global(.animate-stagger-1) {
          animation: staggerIn 0.5s ease-out 0s both;
        }
        :global(.animate-stagger-2) {
          animation: staggerIn 0.5s ease-out 0.1s both;
        }
        :global(.animate-stagger-3) {
          animation: staggerIn 0.5s ease-out 0.2s both;
        }
        :global(.animate-stagger-4) {
          animation: staggerIn 0.5s ease-out 0.3s both;
        }
        :global(.animate-stagger-5) {
          animation: staggerIn 0.5s ease-out 0.4s both;
        }
        :global(.animate-stagger-6) {
          animation: staggerIn 0.5s ease-out 0.5s both;
        }
        :global(.animate-stagger-7) {
          animation: staggerIn 0.5s ease-out 0.6s both;
        }
        :global(.animate-stagger-8) {
          animation: staggerIn 0.5s ease-out 0.7s both;
        }
      `}</style>
    </section>
  );
}
