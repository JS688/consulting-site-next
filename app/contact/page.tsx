"use client";

import React, { useState } from "react";
import { ArrowRight, ChevronDown, Mail, MapPin, Phone, ShieldCheck, Target, UserRound, Zap } from "lucide-react";

export default function BoutiqueContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", service: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,191,97,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(226,191,97,0.14),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_18%)]" />

      {/* Main */}
      <main id="contact" className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-4 py-6 sm:px-8 lg:px-10 lg:py-6">
        <div className="w-full">
        {/* Hero */}
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#e2bf61]">Contact</p>
          <h1 className="mt-3 font-serif text-2xl leading-tight tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
            Let&apos;s Start a Conversation
          </h1>
          <div className="mx-auto mt-3 h-px w-12 bg-[#e2bf61]/70 sm:mt-4 sm:w-14" />
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/68 sm:mt-4 sm:text-lg sm:leading-7">
            Tell us about your goals and we&apos;ll recommend the best approach for your business.
          </p>
        </section>

        {/* Content */}
        <section className="mt-4 grid items-start gap-4 sm:gap-5 lg:grid-cols-[0.92fr_1.58fr] lg:gap-4">
          {/* Direct contact card */}
          <div className="self-start rounded-[28px] border border-[#e2bf61]/28 bg-[linear-gradient(180deg,rgba(12,12,12,0.96),rgba(8,8,8,0.98))] px-4 pt-4 pb-4 shadow-[0_10px_50px_rgba(0,0,0,0.28),0_0_0_1px_rgba(226,191,97,0.05),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:px-8 sm:pt-7 sm:pb-6 lg:px-7 lg:pt-5 lg:pb-4">
            <div className="mx-auto flex w-fit items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e2bf61]/55 bg-[#e2bf61]/10 text-[#e2bf61] shadow-[0_0_0_1px_rgba(226,191,97,0.08)] sm:h-14 sm:w-14">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e2bf61]">Speak Directly</p>
            </div>

            <div className="mt-4 text-center lg:mt-3">
              <h2 className="mt-1.5 font-serif text-2xl tracking-tight text-white sm:text-3xl lg:text-[2rem]">Talk to an Expert</h2>
              <p className="mx-auto mt-2.5 max-w-sm text-sm leading-6 text-white/62 lg:mt-1.5">
                We&apos;re here to help you move faster and with confidence.
              </p>
            </div>

            <div className="mt-6 flex justify-center lg:mt-4">
              <a
                href="tel:+18033861672"
                className="inline-flex items-center gap-2 rounded-full bg-[#e2bf61] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(226,191,97,0.22)] transition hover:scale-[1.01] hover:opacity-95 sm:px-6 sm:py-3"
              >
                <Phone className="h-4 w-4" />
                (803) 386-1672
              </a>
            </div>

            <div className="mt-5 border-t border-white/10 pt-4 text-center lg:mt-3.5 lg:pt-3">
              <div className="inline-flex items-center gap-2 text-sm text-white/72">
                <MapPin className="h-4 w-4 text-[#e2bf61]" />
                <span>Columbia, SC · Remote</span>
              </div>
              <p className="mt-2 text-sm leading-6 text-white/48">We typically respond within a few hours.</p>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[28px] border border-[#e2bf61]/42 bg-[linear-gradient(180deg,rgba(12,12,12,0.96),rgba(8,8,8,0.98))] px-4 py-5 shadow-[0_10px_50px_rgba(0,0,0,0.28),0_0_0_1px_rgba(226,191,97,0.06),inset_0_1px_0_rgba(255,255,255,0.03)] backdrop-blur-sm sm:px-8 sm:py-8 lg:px-7 lg:py-5">
            <div className="mx-auto flex w-fit items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e2bf61]/55 bg-[#e2bf61]/10 text-[#e2bf61] shadow-[0_0_0_1px_rgba(226,191,97,0.08)] sm:h-14 sm:w-14">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e2bf61]">Prefer to Write?</p>
            </div>

            <h2 className="mt-2 text-center font-serif text-2xl tracking-tight text-white sm:text-3xl lg:text-[2rem]">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="mt-5 space-y-3.5 lg:mt-3.5 lg:space-y-2.5">
              <div className="grid gap-3.5 sm:grid-cols-2 lg:gap-2.5">
                <label className="group relative block">
                  <span className="sr-only">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-[#e2bf61]/60 focus:ring-1 focus:ring-[#e2bf61]/30 lg:py-2"
                  />
                </label>

                <label className="group relative block">
                  <span className="sr-only">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/12 bg-black/25 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-[#e2bf61]/60 focus:ring-1 focus:ring-[#e2bf61]/30 lg:py-2"
                  />
                </label>
              </div>

              <label className="group relative block">
                <span className="sr-only">What can we help you with?</span>
                <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/25" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full appearance-none rounded-2xl border border-white/12 bg-black/25 px-4 py-2.5 text-sm text-white outline-none transition focus:border-[#e2bf61]/60 focus:ring-1 focus:ring-[#e2bf61]/30 lg:py-2"
                >
                  <option value="">What can we help you with?</option>
                  <option value="seo">SEO Strategy</option>
                  <option value="web-dev">Web Development</option>
                  <option value="ai-content">AI Content Optimization</option>
                  <option value="automation">Automation / Workflow Systems</option>
                  <option value="other">Other</option>
                  <option value="not-sure">Not sure</option>
                </select>
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e2bf61] px-5 py-3 text-sm font-semibold text-black shadow-[0_12px_30px_rgba(226,191,97,0.20)] transition hover:opacity-95 disabled:opacity-50 lg:py-2.5"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </button>

              {submitStatus === "success" && (
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                  ✓ Message sent! We'll be in touch soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  Something went wrong. Please try again.
                </div>
              )}

              <div className="flex items-center justify-center gap-2 text-xs text-white/45">
                <ShieldCheck className="h-4 w-4 text-[#e2bf61]" />
                <span>Your information is secure and never shared.</span>
              </div>
            </form>
          </div>
        </section>

        {/* Benefits */}
        <section className="mt-5 pt-4 sm:mt-6 sm:pt-6">
          <div className="mt-3 flex items-start gap-4 sm:mt-4 sm:gap-6">
            <div className="mt-8 hidden h-px w-20 shrink-0 bg-[#e2bf61]/55 lg:block" aria-hidden="true" />
            <div className="grid grow gap-2 md:grid-cols-3 md:gap-0">
              <BenefitCard
                icon={<UserRound className="h-4.5 w-4.5" />}
                title="Personal Attention"
                text="You&apos;ll work directly with an expert."
              />
              <BenefitCard
                icon={<Target className="h-4.5 w-4.5" />}
                title="Clear Next Steps"
                text="We&apos;ll share a plan tailored to you."
              />
              <BenefitCard
                icon={<Zap className="h-4.5 w-4.5" />}
                title="Fast Response"
                text="We typically reply within a few hours."
              />
            </div>
            <div className="mt-8 hidden h-px w-20 shrink-0 bg-[#e2bf61]/55 lg:block" aria-hidden="true" />
          </div>

          <div className="mx-auto mt-9 max-w-3xl px-5 py-1 text-center text-sm text-white/68">
            Or email us directly: <a className="text-[#e2bf61] transition hover:text-[#f5d084]" href="mailto:ai@jul-tech.com">ai@jul-tech.com</a>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="px-2 py-2 md:px-5 md:py-0 md:not-last:border-r md:border-white/20">
      <div className="flex items-start gap-3.5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e2bf61]/45 bg-[#e2bf61]/10 text-[#e2bf61]">
          {icon}
        </div>
        <div>
          <h3 className="font-serif text-lg text-white">{title}</h3>
          <p className="mt-1.5 text-sm leading-6 text-white/58">{text}</p>
        </div>
      </div>
    </div>
  );
}

