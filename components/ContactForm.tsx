"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Globe,
  Layers3,
  Laptop,
  Mail,
  Phone,
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

const TIMELINE_OPTIONS = ["ASAP", "1-2 weeks", "2-4 weeks", "1-2 months", "2+ months"] as const;
const BUDGET_OPTIONS = ["Under $5k", "$5k - $10k", "$10k - $25k", "$25k - $50k", "$50k+"] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  details: string;
};

type SubmitStatus = "idle" | "sending" | "sent" | "error";
type ProjectTypeLabel = (typeof PROJECT_TYPES)[number]["label"];

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

export default function ContactForm() {
  const [selectedType, setSelectedType] = useState<ProjectTypeLabel>(PROJECT_TYPES[0].label);
  const [timeline, setTimeline] = useState("");
  const [budget, setBudget] = useState("");
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
      setTimeline("");
      setBudget("");
      setSelectedType(PROJECT_TYPES[0].label);
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
            Premium contact experience
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-7xl"
          >
            Elevate Your Digital Presence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55 sm:text-lg"
          >
            We partner with ambitious brands to craft high-performance digital experiences from bespoke websites and WordPress platforms to elite SEO, Google visibility, and AI-driven systems that scale.
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
              Select Your Focus Area
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {PROJECT_TYPES.map(({ label, icon: Icon }) => {
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
                  label="Full Name"
                  name="name"
                  value={form.name}
                  onChange={handleChange("name")}
                  required
                />
                <FloatingField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>

              <FloatingField
                label="Company (optional)"
                name="company"
                value={form.company}
                onChange={handleChange("company")}
              />

              <FloatingField
                label="Project Details"
                name="details"
                textarea
                rows={6}
                value={form.details}
                onChange={handleChange("details")}
                placeholder="Tell us about your website, WordPress, SEO, or AI project goals, and what you want to improve."
                required
              />

              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative">
                  <select
                    aria-label="Estimated Timeline"
                    name="timeline"
                    value={timeline}
                    onChange={(event) => {
                      setTimeline(event.target.value);
                      resetStatusIfNeeded();
                    }}
                    className="peer w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                  >
                    <option value="">Select a timeline</option>
                    {TIMELINE_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-slate-950">
                        {option}
                      </option>
                    ))}
                  </select>
                  <label className="pointer-events-none absolute left-5 top-3 text-sm text-white/70">
                    Estimated Timeline
                  </label>
                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                </div>

                <div className="relative">
                  <select
                    aria-label="Budget Range"
                    name="budget"
                    value={budget}
                    onChange={(event) => {
                      setBudget(event.target.value);
                      resetStatusIfNeeded();
                    }}
                    className="peer w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                  >
                    <option value="">Select a budget</option>
                    {BUDGET_OPTIONS.map((option) => (
                      <option key={option} value={option} className="bg-slate-950">
                        {option}
                      </option>
                    ))}
                  </select>
                  <label className="pointer-events-none absolute left-5 top-3 text-sm text-white/70">
                    Budget Range
                  </label>
                  <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/45" />
                </div>
              </div>

              <div className="grid gap-4 pt-1 sm:grid-cols-2">
                <a
                  href="tel:+18033861672"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/85 transition hover:border-white/20 hover:bg-white/8"
                >
                  <Phone className="h-4 w-4 text-blue-300" />
                  +1 803 386 1672
                </a>

                <button
                  type="submit"
                  disabled={!canSubmit || status === "sending"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-6 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === "sending" ? "Sending Request..." : "Request Private Consultation"}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1 text-sm text-white/45">
                <Mail className="h-4 w-4 text-white/35" />
                Our team will respond within hours to discuss a tailored strategy for your growth.
              </div>

              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100"
                >
                  Your request has been received. A specialist will reach out shortly to begin your consultation.
                </motion.div>
              ) : null}

              {status === "error" ? (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-100"
                >
                  Something went wrong while submitting your request. Please try again.
                </motion.div>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}