"use client";

import { ReactNode, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Globe2,
  Smartphone,
  Sparkles,
} from "lucide-react";

import { STRIPE_PAYMENT_LINKS, type SessionType } from "@/lib/sessionLinks";

const SESSION_PAYMENT_LINKS = STRIPE_PAYMENT_LINKS;

const PROJECT_TYPE_OPTIONS = [
  { value: "Mobile App", label: "Mobile App", icon: Smartphone },
  { value: "Web App", label: "Web App", icon: Globe2 },
  { value: "Software Development", label: "Software Development", icon: Code2 },
  { value: "Other", label: "Other", icon: Sparkles },
] as const;

type ProjectBookingFlowProps = {
  contextLabel: string;
  title: string;
  description: string;
  sessionType?: SessionType;
  interestLabel?: string;
};

export default function ProjectBookingFlow({
  contextLabel,
  title,
  description,
  sessionType = "full",
  interestLabel,
}: ProjectBookingFlowProps) {
  const paymentLink = SESSION_PAYMENT_LINKS[sessionType];

  const [projectType, setProjectType] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [details, setDetails] = useState("");

  const canContinue =
    businessName.trim().length > 0 &&
    email.trim().length > 0 &&
    details.trim().length > 0;

  const paymentUrl = useMemo(() => {
    const params = new URLSearchParams();

    if (email.trim()) {
      params.set("prefilled_email", email.trim());
    }

    if (businessName.trim()) {
      const referenceParts = [interestLabel, projectType, businessName.trim()].filter(Boolean);
      params.set(
        "client_reference_id",
        referenceParts.join(" - "),
      );
    }

    const query = params.toString();
    return query ? `${paymentLink}?${query}` : paymentLink;
  }, [businessName, email, interestLabel, paymentLink, projectType]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!canContinue) {
      return;
    }

    window.location.href = paymentUrl;
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
            {description}
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
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
              Package selected: {interestLabel}
            </div>
          ) : null}

          <fieldset>
            <legend className="text-sm font-semibold text-white/90">
              What are you looking to build?
            </legend>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {PROJECT_TYPE_OPTIONS.map((option) => {
                const Icon = option.icon;
                const isActive = projectType === option.value;

                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setProjectType(option.value)}
                    className={[
                      "inline-flex items-center justify-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "border-blue-300/45 bg-blue-500/20 text-white shadow-[0_16px_40px_rgba(59,130,246,0.22)]"
                        : "border-white/10 bg-white/5 text-white/75 hover:border-white/20 hover:bg-white/8 hover:text-white",
                    ].join(" ")}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-blue-200" : "text-white/55"}`} />
                    <span className="whitespace-nowrap">{option.label}</span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 grid gap-4">
            <FloatingField label="Full Name" htmlFor="business-name">
              <input
                id="business-name"
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder="Full Name"
              />
            </FloatingField>

            <FloatingField label="Email Address" htmlFor="email-address">
              <input
                id="email-address"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder="Email Address"
              />
            </FloatingField>

            <FloatingField label="Company (optional)" htmlFor="company-name">
              <input
                id="company-name"
                value={company}
                onChange={(event) => setCompany(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder="Company"
              />
            </FloatingField>

            <FloatingField
              label="Project Details"
              htmlFor="project-details"
              helperText="Briefly describe your project and goals."
            >
              <textarea
                id="project-details"
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                className="peer min-h-44 w-full rounded-3xl border border-white/10 bg-white/5 px-5 pt-7 pb-4 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder="Project Details"
              />
            </FloatingField>

            <FloatingField label="Website URL (optional)" htmlFor="website-url">
              <input
                id="website-url"
                value={websiteUrl}
                onChange={(event) => setWebsiteUrl(event.target.value)}
                className="peer w-full rounded-2xl border border-white/10 bg-white/5 px-5 pt-6 pb-3 text-white outline-none transition-all duration-300 placeholder:text-transparent focus:border-white/25 focus:bg-white/8 focus:shadow-[0_0_0_4px_rgba(96,165,250,0.10)]"
                placeholder="Website URL"
              />
            </FloatingField>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              disabled={!canContinue}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-7 py-4 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(59,130,246,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(59,130,246,0.45)] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Continue to Payment
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </button>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-white/45">
            <Sparkles className="h-4 w-4 text-white/35" />
            We typically reply within a few hours.
          </div>
        </motion.form>
      </div>
    </section>
  );
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