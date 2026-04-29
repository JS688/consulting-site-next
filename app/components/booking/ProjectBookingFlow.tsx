"use client";

import { ReactNode, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Compass,
  MonitorSmartphone,
  Search,
  Sparkles,
  Workflow,
} from "lucide-react";

import { getAppraisalRangeLabel, getSpecificAppraisalPriceLabel } from "@/lib/appraisalPricing";
import type { SessionType } from "@/lib/sessionLinks";

const PROJECT_TYPE_OPTIONS = [
  { value: "Website", label: "Website", icon: MonitorSmartphone },
  { value: "Google visibility", label: "Google visibility", icon: Search },
  { value: "AI visibility", label: "AI visibility", icon: Bot },
  { value: "Automation", label: "Automation", icon: Workflow },
  { value: "Not sure", label: "Not sure", icon: Compass },
] as const;

type ProjectBookingFlowProps = {
  contextLabel: string;
  title: string;
  description: string;
  sessionType?: SessionType;
  interestLabel?: string;
  locale?: "en" | "es";
};

const APPRAISAL_EMAIL = "ai@jul-tech.com";

export default function ProjectBookingFlow({
  contextLabel,
  title,
  description,
  interestLabel,
  locale = "en",
}: ProjectBookingFlowProps) {
  const copy = getCopy(locale);
  const specificAppraisalPriceLabel = getSpecificAppraisalPriceLabel(interestLabel);
  const appraisalPriceLabel = specificAppraisalPriceLabel ?? getAppraisalRangeLabel(locale);
  const formDescription = copy.description || description;
  const projectTypeOptions =
    locale === "es"
      ? [
          { value: "Sitio web", label: "Sitio web", icon: MonitorSmartphone },
          { value: "Visibilidad en Google", label: "Visibilidad en Google", icon: Search },
          { value: "Visibilidad en IA", label: "Visibilidad en IA", icon: Bot },
          { value: "Automatizacion", label: "Automatizacion", icon: Workflow },
          { value: "No estoy seguro", label: "No estoy seguro", icon: Compass },
        ]
      : PROJECT_TYPE_OPTIONS;

  const [projectType, setProjectType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [details, setDetails] = useState("");

  const canContinue =
    businessName.trim().length > 0 &&
    email.trim().length > 0 &&
    details.trim().length > 0;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canContinue) {
      return;
    }

    const subjectParts = [interestLabel, copy.emailSubjectLabel, businessName.trim()].filter(Boolean);
    const bodyLines = [
      copy.emailGreeting,
      "",
      specificAppraisalPriceLabel ? copy.emailIntro(appraisalPriceLabel) : copy.emailIntroGeneric,
      "",
      interestLabel ? `${copy.serviceLabel}: ${interestLabel}` : null,
      projectType ? `${copy.projectTypeLabel}: ${projectType}` : null,
      `${copy.fullNameLabel}: ${businessName.trim()}`,
      `${copy.emailLabel}: ${email.trim()}`,
      company.trim() ? `${copy.companyLabel}: ${company.trim()}` : null,
      "",
      `${copy.projectDetailsLabel}:`,
      details.trim(),
      "",
      specificAppraisalPriceLabel ? copy.creditLine(appraisalPriceLabel) : copy.creditLineGeneric(appraisalPriceLabel),
    ].filter(Boolean);

    const params = new URLSearchParams({
      subject: subjectParts.join(" - "),
      body: bodyLines.join("\n"),
    });

    window.location.assign(`mailto:${APPRAISAL_EMAIL}?${params.toString()}`);
  };

  return (
    <section className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#05080f] px-5 py-8 sm:px-8 sm:py-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-8%] top-10 h-64 w-64 rounded-full bg-blue-400/12 blur-3xl" />
        <div className="absolute bottom-[-10%] right-[-4%] h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.08),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.07),transparent_28%)]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-white/35">
            {contextLabel}
          </p>
          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h2>
          <p className="mt-5 text-base leading-8 text-white/60 sm:text-lg">
            {formDescription}
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto mt-10 max-w-4xl rounded-4xl border border-white/12 bg-slate-950/50 p-5 shadow-[0_30px_90px_rgba(2,6,23,0.48)] backdrop-blur-xl sm:p-8"
          onSubmit={handleSubmit}
          aria-label="Project intake form"
        >
          {interestLabel ? (
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/72">
              {interestLabel} {copy.selectedPackageLabel}
            </div>
          ) : null}

          <fieldset>
            <legend className="text-sm font-semibold text-white/90">
              {copy.legend}
            </legend>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {projectTypeOptions.map((option) => {
                const Icon = option.icon;
                const isActive = projectType === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setProjectType(option.value)}
                    className={[
                      "inline-flex min-h-18 w-full items-center justify-center gap-2 rounded-3xl border px-4 py-3 text-center text-sm font-medium leading-snug text-white transition-all duration-300 sm:text-[0.95rem]",
                      isActive
                        ? "border-blue-300/45 bg-blue-500/20 text-white shadow-[0_16px_40px_rgba(59,130,246,0.22)]"
                        : "border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/8",
                    ].join(" ")}
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${isActive ? "text-blue-200" : "text-white/75"}`} />
                    <span className="whitespace-normal wrap-break-word">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4">
            <FloatingField label={copy.fullNameLabel} htmlFor="business-name">
              <input
                id="business-name"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder={copy.fullNameLabel}
              />
            </FloatingField>

            <FloatingField label={copy.emailLabel} htmlFor="email-address">
              <input
                id="email-address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder={copy.emailLabel}
              />
            </FloatingField>

            <FloatingField label={copy.companyOptionalLabel} htmlFor="company-name">
              <input
                id="company-name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder={copy.companyOptionalLabel}
              />
            </FloatingField>

            <FloatingField
              label={copy.projectDetailsLabel}
              htmlFor="project-details"
              helperText={copy.helperText}
            >
              <textarea
                id="project-details"
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                className="peer min-h-44 w-full rounded-3xl border border-white/10 bg-white/5 px-5 pt-7 pb-4 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder={copy.projectDetailsLabel}
              />
            </FloatingField>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={!canContinue}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.45)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {specificAppraisalPriceLabel ? copy.cta() : copy.ctaGeneric}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-white/45">
            <Sparkles className="h-4 w-4 text-white/35" />
            {copy.replyLine}
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function getCopy(locale: "en" | "es") {
  if (locale === "es") {
    return {
      description: "Cuentanos sobre tu proyecto y lo que quieres lograr. Lo revisaremos y te enviaremos los siguientes pasos.",
      emailSubjectLabel: "Solicitud de valoracion",
      emailGreeting: "Hola JulTech,",
      emailIntro: (priceLabel: string) => `Quiero solicitar la valoracion de ${priceLabel} para mi proyecto.`,
      emailIntroGeneric: "Quiero solicitar una valoracion para mi proyecto segun el alcance.",
      serviceLabel: "Servicio",
      projectTypeLabel: "Tipo de proyecto",
      fullNameLabel: "Nombre completo",
      emailLabel: "Correo electronico",
      companyLabel: "Empresa",
      companyOptionalLabel: "Empresa (opcional)",
      projectDetailsLabel: "Detalles del proyecto",
      selectedPackageLabel: "paquete seleccionado",
      legend: "Que quieres mejorar?",
      helperText: "Describe brevemente tu negocio, tu objetivo y lo que quieres mejorar.",
      cta: () => "Recibe tus siguientes pasos",
      ctaGeneric: "Recibe tus siguientes pasos",
      creditLine: (priceLabel: string) => `La valoracion de ${priceLabel} se acredita al costo del proyecto si avanzas con nosotros.`,
      creditLineGeneric: (priceLabel: string) => `La valoracion pagada se define segun el alcance (${priceLabel}) y se acredita al costo del proyecto si avanzas con nosotros.`,
      emailDraftLine: "Esto abre un borrador de correo prellenado para que podamos revisar el alcance y enviarte el enlace de pago correcto.",
      replyLine: "Revisaremos tu solicitud y responderemos dentro de 24 horas.",
    };
  }

  return {
    description: "Tell us about your project and what you're trying to achieve. We'll review it and send you the next steps.",
    emailSubjectLabel: "Appraisal Request",
    emailGreeting: "Hello JulTech,",
    emailIntro: (priceLabel: string) => `I would like to request the ${priceLabel} appraisal for my project.`,
    emailIntroGeneric: "I would like to request an appraisal for my project based on scope.",
    serviceLabel: "Service",
    projectTypeLabel: "Project Type",
    fullNameLabel: "Full name",
    emailLabel: "Email",
    companyLabel: "Company",
    companyOptionalLabel: "Company (optional)",
    projectDetailsLabel: "Project details",
    selectedPackageLabel: "package selected",
    legend: "What are you looking to improve?",
    helperText: "Briefly describe your business, your goal, and what you want to improve.",
    cta: () => "Get Your Next Steps",
    ctaGeneric: "Get Your Next Steps",
    creditLine: (priceLabel: string) => `The ${priceLabel} appraisal is credited toward the project cost if you move forward.`,
    creditLineGeneric: (priceLabel: string) => `Paid appraisal pricing is based on scope (${priceLabel}) and is credited toward the project cost if you move forward.`,
    emailDraftLine: "This opens a prefilled email draft so we can review the scope and send the right payment link.",
    replyLine: "We'll review your request and reply within 24 hours.",
  };
}

function FloatingField({
  label,
  htmlFor,
  helperText,
  children,
}: {
  label: string;
  htmlFor: string;
  helperText?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      {children}
      <label
        htmlFor={htmlFor}
        className="pointer-events-none absolute left-5 top-3 text-sm text-white/70 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/42 peer-focus:top-3 peer-focus:text-sm peer-focus:text-white/70"
      >
        {label}
      </label>
      {helperText ? (
        <p className="pointer-events-none absolute left-5 top-12 text-sm text-white/38">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}