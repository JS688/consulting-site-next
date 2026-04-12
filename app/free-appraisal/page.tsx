"use client";

import { useEffect, useState, type FormEvent } from "react";
import Link from "next/link";
import { HelpCircle, Search, Sparkles } from "lucide-react";

type Mode = "review" | "new" | "unsure" | "";

type Choice = {
  value: Exclude<Mode, "">;
  title: string;
  desc: string;
  icon: typeof Search;
};

export default function FreeAppraisalPage() {
  const [step, setStep] = useState(1);
  const [mode, setMode] = useState<Mode>("");
  const [agree, setAgree] = useState(false);
  const [signature, setSignature] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [websiteUrl, setWebsiteUrl] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessDescription, setBusinessDescription] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [step, submitted]);

  const choices: Choice[] = [
    {
      value: "review",
      title: "I already have a website",
      desc: "I want a free review and tailored recommendations.",
      icon: Search,
    },
    {
      value: "new",
      title: "I want to build a new website",
      desc: "I need help starting from scratch.",
      icon: Sparkles,
    },
    {
      value: "unsure",
      title: "I’m not sure yet",
      desc: "I want guidance on what I need.",
      icon: HelpCircle,
    },
  ];

  const canGoStep2 = mode !== "";

  const canGoStep3 =
    businessName.trim().length > 0 &&
    email.trim().length > 0 &&
    (mode === "new"
      ? businessDescription.trim().length > 0
      : mode === "review"
        ? websiteUrl.trim().length > 0
        : true);

  const canSubmit = agree && signature.trim().length > 0 && canGoStep3;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/free-appraisal", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mode,
          websiteUrl,
          businessName,
          businessDescription,
          email,
          signature,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setStep(1);
    setMode("");
    setAgree(false);
    setSignature("");
    setSubmitted(false);
    setIsSubmitting(false);
    setWebsiteUrl("");
    setBusinessName("");
    setBusinessDescription("");
    setEmail("");
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-900 px-6 py-10 text-white">
        <div className="mx-auto max-w-180 px-2">
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-[#d1b075]/70 transition hover:text-[#d1b075]"
          >
            ← Back to Services
          </Link>

          <div className="mt-8 rounded-2xl border border-[#d1b075]/25 bg-zinc-950/75 p-8 shadow-[0_0_40px_rgba(209,176,117,0.08)] backdrop-blur-sm">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-[#d1b075]/30 bg-[#d1b075]/10">
                <span className="text-2xl text-[#d1b075]">✓</span>
              </div>

              <p className="text-xs uppercase tracking-[0.22em] text-white/35">
                Submission received
              </p>

              <h1 className="mt-3 text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
                Review submitted successfully
              </h1>

              <p className="mx-auto mt-3 max-w-2xl text-white/70">
                Thanks — your request is in. You will receive a confirmation email shortly, and I
                will prepare your website review based on the details you sent.
              </p>

              <div className="mt-8 grid w-full gap-4 md:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-sm font-semibold text-white">Email confirmation</p>
                  <p className="mt-1 text-sm text-white/60">
                    Check your inbox for a confirmation message.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-sm font-semibold text-white">Manual review</p>
                  <p className="mt-1 text-sm text-white/60">
                    Your details are reviewed before recommendations are sent.
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-left">
                  <p className="text-sm font-semibold text-white">Recommendations</p>
                  <p className="mt-1 text-sm text-white/60">
                    You will receive your review and next-step guidance by email.
                  </p>
                </div>
              </div>

              <div className="mt-8 w-full rounded-xl border border-white/10 bg-white/5 p-5 text-left">
                <p className="text-sm font-semibold text-white">What happens next</p>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li>• You receive an email confirmation.</li>
                  <li>• Your request is reviewed manually.</li>
                  <li>• Your recommendations are prepared and sent to your inbox.</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl bg-[#d1b075] px-6 py-3 font-semibold text-black transition hover:bg-[#e0c48a]"
                >
                  Submit another review
                </button>

                <Link
                  href="/services"
                  className="rounded-xl border border-white/10 px-6 py-3 text-white/75 transition hover:border-white/20 hover:text-white"
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-180 px-2">
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm text-[#d1b075]/70 transition hover:text-[#d1b075]"
        >
          ← Back to Services
        </Link>

        <div className="mt-8 text-center">
          <h1 className="text-3xl font-bold tracking-[-0.03em] text-white md:text-4xl">
            Free Website Review
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-white/70">
            No call required. Submit your details and receive tailored recommendations in your inbox.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 rounded-2xl border border-[#d1b075]/25 bg-zinc-950/75 p-6 shadow-[0_0_40px_rgba(209,176,117,0.08)] backdrop-blur-sm md:p-8"
        >
          <div className="space-y-8">
            <section className="transition-opacity duration-300">
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-white">
                  1. What do you need help with?
                </h2>
                <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                  Step {step} of 3
                </span>
              </div>

              <div className="grid gap-3">
                {choices.map((option) => {
                  const active = mode === option.value;
                  const Icon = option.icon;

                  return (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setMode(option.value)}
                      className={[
                        "group rounded-xl border p-4 text-left transition",
                        active
                          ? "border-[#d1b075]/80 bg-[#d1b075]/15 shadow-[0_0_24px_rgba(209,176,117,0.10)]"
                          : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/[0.07]",
                      ].join(" ")}
                    >
                      <div className="flex items-start gap-4">
                        <div
                          className={[
                            "mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition",
                            active
                              ? "border-[#d1b075]/60 bg-[#d1b075]/15 text-[#e7cd95]"
                              : "border-white/10 bg-zinc-950 text-white/70 group-hover:border-white/20",
                          ].join(" ")}
                        >
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <div className="font-medium text-white">{option.title}</div>
                          <div className="mt-1 text-sm text-white/60">{option.desc}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => canGoStep2 && setStep(2)}
                  disabled={!canGoStep2}
                  className="rounded-xl bg-[#d1b075] px-5 py-3 font-semibold text-black transition hover:bg-[#e0c48a] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Next →
                </button>
              </div>
            </section>

            {step >= 2 && (
              <section className="transition-opacity duration-300">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-white">
                    2. Tell me about your project
                  </h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Step {step} of 3
                  </span>
                </div>

                <div className="grid gap-4">
                  {(mode === "review" || mode === "unsure") && (
                    <input
                      type="url"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      placeholder="Website URL"
                      className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d1b075]"
                    />
                  )}

                  <input
                    type="text"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    placeholder="Business Name"
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d1b075]"
                  />

                  <textarea
                    rows={5}
                    value={businessDescription}
                    onChange={(e) => setBusinessDescription(e.target.value)}
                    placeholder={
                      mode === "review"
                        ? "What would you like me to review?"
                        : "What does your business do?"
                    }
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d1b075]"
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d1b075]"
                  />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="rounded-xl border border-white/10 px-5 py-3 text-white/70 transition hover:border-white/20 hover:text-white"
                  >
                    ← Back
                  </button>

                  <button
                    type="button"
                    onClick={() => canGoStep3 && setStep(3)}
                    disabled={!canGoStep3}
                    className="ml-auto rounded-xl bg-[#d1b075] px-5 py-3 font-semibold text-black transition hover:bg-[#e0c48a] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next →
                  </button>
                </div>
              </section>
            )}

            {step >= 3 && (
              <section className="transition-opacity duration-300">
                <div className="mb-4 flex items-center justify-between gap-4">
                  <h2 className="text-lg font-semibold text-white">
                    3. Terms and submission
                  </h2>
                  <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                    Step {step} of 3
                  </span>
                </div>

                <div className="space-y-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <label className="flex items-start gap-3 text-sm text-white/75">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-1 h-4 w-4 accent-[#d1b075]"
                    />
                    <span>
                      I agree to the{" "}
                      <Link href="/legal/terms" className="text-[#d1b075] underline">
                        Terms and Conditions
                      </Link>
                      .
                    </span>
                  </label>

                  <p className="text-xs text-white/40">
                    By submitting this form, you agree to our terms regarding project scope,
                    timelines, and payments.
                  </p>

                  <input
                    type="text"
                    value={signature}
                    onChange={(e) => setSignature(e.target.value)}
                    placeholder="Type your full name to sign"
                    className="w-full rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-[#d1b075]"
                  />

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="rounded-xl border border-white/10 px-5 py-3 text-white/70 transition hover:border-white/20 hover:text-white"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      disabled={!canSubmit || isSubmitting}
                      className="ml-auto rounded-xl bg-[#d1b075] px-5 py-3 font-semibold text-black transition hover:bg-[#e0c48a] disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      {isSubmitting ? "Submitting..." : "Submit for Free Review"}
                    </button>
                  </div>
                </div>
              </section>
            )}

            <p className="text-center text-xs text-white/45">
              Your details stay private and are only used to prepare your review.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}