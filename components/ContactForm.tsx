"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Layers3,
  Laptop,
  Mail,
  ShieldCheck,
  Sparkles,
  Smartphone,
} from "lucide-react";
import {
  useMemo,
  useState,
  type ChangeEvent,
  type FormEvent,
  type TextareaHTMLAttributes,
} from "react";

const PROJECT_TYPES = [
  { label: "Web Design", icon: Smartphone },
  { label: "WordPress Website", icon: Globe },
  { label: "SEO / Google", icon: Layers3 },
  { label: "AI Solutions", icon: Laptop },
] as const;

const PROJECT_TYPES_ES = [
  { label: "Diseno Web", icon: Smartphone },
  { label: "Sitio WordPress", icon: Globe },
  { label: "SEO / Google", icon: Layers3 },
  { label: "Soluciones con IA", icon: Laptop },
] as const;

type ProjectTypeLabel =
  | (typeof PROJECT_TYPES)[number]["label"]
  | (typeof PROJECT_TYPES_ES)[number]["label"];

type FormState = {
  name: string;
  email: string;
  company: string;
  details: string;
};

type SubmitStatus = "idle" | "sending" | "sent" | "error";
type Locale = "en" | "es";

type FloatingFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
  required?: boolean;
};

function FloatingField({
  label,
  name,
  type = "text",
  value,
  onChange,
  textarea = false,
  rows = 5,
  placeholder,
  required = false,
}: FloatingFieldProps) {
  const baseClasses =
    "peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]";

  if (textarea) {
    const textareaProps: TextareaHTMLAttributes<HTMLTextAreaElement> = {
      rows,
      name,
      className: baseClasses,
      placeholder: placeholder || label,
      value,
      onChange,
      required,
    };

    return (
      <div className="relative">
        <textarea {...textareaProps} />
        <label className="pointer-events-none absolute left-5 top-4 text-sm text-white/45 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/35 peer-focus:top-3 peer-focus:text-sm peer-focus:text-white/70">
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        className={baseClasses}
        placeholder={placeholder || label}
        value={value}
        onChange={onChange}
        required={required}
      />
      <label className="pointer-events-none absolute left-5 top-4 text-sm text-white/45 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-white/35 peer-focus:top-3 peer-focus:text-sm peer-focus:text-white/70">
        {label}
      </label>
    </div>
  );
}

export default function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const copy = getCopy(locale);
  const projectTypes = locale === "es" ? PROJECT_TYPES_ES : PROJECT_TYPES;

  const [selectedType, setSelectedType] = useState<ProjectTypeLabel>(projectTypes[0].label);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    details: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const glowBlobs = useMemo(
    () => [
      { className: "left-[4%] top-[8%] h-72 w-72 bg-blue-500/20 blur-3xl" },
      { className: "right-[8%] top-[20%] h-80 w-80 bg-orange-400/10 blur-3xl" },
      { className: "left-[18%] bottom-[8%] h-96 w-96 bg-slate-500/10 blur-3xl" },
    ],
    []
  );

  const canSubmit =
    form.name.trim().length > 0 &&
    form.email.trim().length > 0 &&
    form.details.trim().length > 0;

  const resetStatusIfNeeded = () => {
    if (status === "sent" || status === "error") {
      setStatus("idle");
    }
  };

  const handleChange =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [field]: event.target.value }));
      resetStatusIfNeeded();
    };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canSubmit || status === "sending") {
      return;
    }

    setStatus("sending");

    try {
      await new Promise((resolve) => setTimeout(resolve, 700));
      setForm({
        name: "",
        email: "",
        company: "",
        details: "",
      });
      setSelectedType(projectTypes[0].label);
      setStatus("sent");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#04060c] text-white shadow-[0_35px_120px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(251,146,60,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.08),transparent_35%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[56px_56px] opacity-60" />

      {glowBlobs.map((blob, index) => (
        <motion.div
          key={blob.className}
          aria-hidden="true"
          className={`absolute rounded-full ${blob.className}`}
          animate={{ x: [0, 20, 0], y: [0, -12, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12 + index * 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      ))}

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 shadow-[0_0_40px_rgba(59,130,246,0.08)] backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4 text-blue-300" />
            {copy.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            {copy.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg"
          >
            {copy.description}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22 }}
          className="mx-auto mt-14 max-w-5xl rounded-4xl border border-white/10 bg-white/5 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:p-6 lg:p-8"
        >
          <div className="rounded-3xl border border-white/10 bg-[#0a1020]/60 p-4 sm:p-6 lg:p-8">
            <div className="mb-6 flex items-center gap-3 text-lg font-medium text-white/90">
              <CheckCircle2 className="h-5 w-5 text-blue-300" />
              {copy.focusLabel}
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {projectTypes.map(({ label, icon: Icon }) => {
                const active = selectedType === label;

                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => {
                      setSelectedType(label);
                      resetStatusIfNeeded();
                    }}
                    className={`group flex items-center justify-center gap-2 rounded-2xl border px-4 py-4 text-sm font-medium transition-all duration-300 ${
                      active
                        ? "border-blue-400/70 bg-blue-500/15 text-white shadow-[0_0_0_1px_rgba(96,165,250,0.25),0_10px_30px_rgba(59,130,246,0.14)]"
                        : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/8"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${active ? "text-blue-300" : "text-white/45"}`} />
                    {label}
                  </button>
                );
              })}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5" aria-label="Contact form">
              <div className="grid gap-5 md:grid-cols-2">
                <FloatingField
                  label={copy.fullNameLabel}
                  name="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
                <FloatingField
                  label={copy.emailLabel}
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <FloatingField
                label={copy.companyLabel}
                name="company"
                value={form.company}
                onChange={handleChange("company")}
              />

              <FloatingField
                label={copy.detailsLabel}
                name="details"
                textarea
                rows={6}
                value={form.details}
                onChange={handleChange("details")}
                placeholder={copy.detailsPlaceholder}
                required
              />

              <div className="flex flex-col items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={!canSubmit || status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)] ring-1 ring-blue-200/20 transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.45)] hover:ring-blue-200/35 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? copy.submitSending : copy.submitIdle}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>

                <a
                  href="tel:+18033861672"
                  className="text-sm font-medium text-white/58 transition hover:text-white/82"
                >
                  +1 803 386 1672
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-center text-xs uppercase tracking-[0.2em] text-white/52 sm:text-sm sm:tracking-[0.16em]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-blue-300" />
                <span>{copy.insuredText}</span>
              </div>

              <p className="text-center text-[11px] text-white/25">
                JulTech AI Consulting Group LLC · Columbia, South Carolina, USA · Registered Business
              </p>

              <div className="flex items-center gap-2 pt-1 text-sm text-white/45">
                <Mail className="h-4 w-4 text-white/35" />
                {copy.replyText}
              </div>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
                >
                  {copy.successText}
                </motion.div>
              ) : null}

              {status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                >
                  {copy.errorText}
                </motion.div>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function getCopy(locale: Locale) {
  if (locale === "es") {
    return {
      badge: "Solicitud privada de consulta",
      title: "Eleva tu presencia digital",
      description:
        "Trabajamos con marcas ambiciosas para crear experiencias digitales de alto rendimiento: desde sitios web a medida y plataformas WordPress hasta SEO, visibilidad en Google y sistemas impulsados por IA.",
      focusLabel: "Selecciona el area de enfoque",
      fullNameLabel: "Nombre completo",
      emailLabel: "Correo electronico",
      companyLabel: "Empresa (opcional)",
      detailsLabel: "Detalles del proyecto",
      detailsPlaceholder:
        "Cuentanos sobre tu sitio web, WordPress, SEO o metas de IA, y lo que quieres mejorar.",
      submitIdle: "Solicitar consulta",
      submitSending: "Enviando solicitud...",
      insuredText: "JulTech esta totalmente asegurado para ofrecer una colaboracion segura y profesional.",
      replyText: "Respondemos en unas pocas horas con el siguiente paso mas claro para tu proyecto.",
      successText:
        "Tu solicitud fue recibida. Un especialista se pondra en contacto contigo pronto para comenzar la consulta.",
      errorText:
        "Ocurrio un problema al enviar tu solicitud. Intentalo de nuevo.",
    };
  }

  return {
    badge: "Private consultation request",
    title: "Elevate Your Digital Presence",
    description:
      "We partner with ambitious brands to craft high-performance digital experiences from bespoke websites and WordPress platforms to elite SEO, Google visibility, and AI-driven systems that scale.",
    focusLabel: "Select Your Focus Area",
    fullNameLabel: "Full Name",
    emailLabel: "Email Address",
    companyLabel: "Company (optional)",
    detailsLabel: "Project Details",
    detailsPlaceholder:
      "Tell us about your website, WordPress, SEO, or AI project goals, and what you want to improve.",
    submitIdle: "Request Consultation",
    submitSending: "Sending Request...",
    insuredText: "JulTech is fully insured, ensuring a secure and professional engagement.",
    replyText: "We reply within a few hours with the clearest next step for your project.",
    successText:
      "Your request has been received. A specialist will reach out shortly to begin your consultation.",
    errorText:
      "Something went wrong while submitting your request. Please try again.",
  };
}