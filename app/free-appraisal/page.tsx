"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { getAppraisalRangeLabel } from "@/lib/appraisalPricing";

const benefits = [
  "Your website performance and structure",
  "Your visibility on Google (SEO)",
  "How your business appears in AI tools like ChatGPT",
  "Missed opportunities to attract qualified customers",
  "Clear next steps to improve visibility and conversions",
];

const outcomes = [
  "Where your business stands today",
  "What's holding you back",
  "How to turn your website into a client acquisition system",
];

export default function FreeAppraisalPage() {
  const appraisalRangeLabel = getAppraisalRangeLabel("en");
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

    const subject = `AI Visibility Appraisal Request - ${businessName.trim()}`;
    const body = [
      "Hello JulTech,",
      "",
      "I would like to request an AI visibility appraisal based on scope.",
      "",
      `Business Name: ${businessName.trim()}`,
      `Email: ${email.trim()}`,
      websiteUrl.trim() ? `Website URL: ${websiteUrl.trim()}` : null,
      "",
      "Business Description:",
      businessDescription.trim(),
      "",
      `I understand appraisal pricing ranges from ${appraisalRangeLabel} based on scope, and the paid appraisal is credited toward the full project if we move forward.`,
    ]
      .filter(Boolean)
      .join("\n");

    const params = new URLSearchParams({
      subject,
      body,
    });

    window.location.assign(`mailto:ai@jul-tech.com?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-black px-6 py-8 text-white">
      {/* Minimal nav */}
      <div className="mx-auto flex max-w-2xl items-center justify-end pb-8">
        <Link href="/" className="text-xs text-zinc-500 transition hover:text-zinc-300">
          ← Back
        </Link>
      </div>

      <div className="mx-auto max-w-2xl">
        {/* Headline */}
        <div className="mb-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Request Your Appraisal</p>
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Get Your AI Visibility Appraisal
          </h1>
          <p className="mt-4 text-base text-zinc-400">
            Appraisal pricing is based on project scope. Starter projects are $100, growth and mid-tier projects are $200, and advanced or custom projects are $300. The paid appraisal is credited toward your project cost if you move forward.
          </p>
        </div>

        {/* What you get */}
        <div className="mb-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">In this appraisal, we analyze:</p>
          <ul className="mb-10 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        {/* Walk away with */}
        <div className="mb-10 rounded-xl border border-white/8 bg-white/3 p-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500">Walk away with a clear understanding of:</p>
          <ul className="space-y-2">
            {outcomes.map((o) => (
              <li key={o} className="flex items-start gap-3 text-sm text-zinc-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af37]/70" />
                {o}
              </li>
            ))}
          </ul>
        </div>

        {/* Authority line */}
        <p className="mb-5 text-sm font-medium text-zinc-400">
          Designed for businesses ready to lead in the AI era.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-white/10 bg-white/3 p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500">Business Name *</label>
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                placeholder="Acme Inc."
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-zinc-500">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-500">Website URL (optional)</label>
            <input
              type="url"
              value={websiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              placeholder="https://yourwebsite.com"
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-zinc-500">What does your business do? *</label>
            <textarea
              rows={4}
              value={businessDescription}
              onChange={(e) => setBusinessDescription(e.target.value)}
              placeholder="Briefly describe your business and your main goal (e.g. more leads, better rankings, visibility in AI)."
              className="w-full rounded-xl border border-white/10 bg-black px-4 py-3 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-[#d4af37]/60"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-full bg-[#d4af37] py-3.5 text-sm font-semibold text-black shadow-[0_0_24px_rgba(212,175,55,0.2)] transition hover:bg-[#c9a832] disabled:cursor-not-allowed disabled:opacity-40"
            >
              Request My Appraisal →
            </button>
          </div>
        </form>

        {/* ── Calendly ── */}
        <div className="mt-16 text-center">
          <div className="mx-auto mb-3 h-px w-16 bg-linear-to-r from-transparent via-[#d4af37]/40 to-transparent" />
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-zinc-500">
            Or skip the form
          </p>
          <h2 className="mt-3 text-xl font-bold text-white">
            Book a 15-min Strategy Call
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Prefer to talk? Pick a time and we&apos;ll review your visibility together.
          </p>
          <a
            href="https://calendly.com/jultech-ai/new-meeting-1?month=2026-04"
            className="jultech-calendly-btn mt-6 inline-block"
          >
            Book a Strategy Call →
          </a>
        </div>

      </div>
    </div>
  );
}
