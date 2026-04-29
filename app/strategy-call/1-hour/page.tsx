import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, Sparkles } from "lucide-react";

import { STRIPE_PAYMENT_LINKS } from "@/lib/sessionLinks";

export default function OneHourStrategyPage() {
  return (
    <main className="min-h-screen bg-[#04060c] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
        <div className="w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Premium 1-hour strategy session
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A deeper session for serious growth decisions
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            This session is for businesses that want a complete review of their website, positioning, SEO, conversion
            opportunities, and AI workflow ideas before moving ahead.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Clock3 className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Full review</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                We go deeper into the business, the offer, and the user experience.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Strategic direction</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                You get clear next steps, not vague advice.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Sparkles className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Premium execution</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Built for brands ready to invest in quality and results.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={STRIPE_PAYMENT_LINKS.full}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Continue to payment
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:bg-white/8"
            >
              Back to website
            </Link>
          </div>

          <p className="mt-4 text-sm text-white/45">
            Secure payment is handled off-site. After payment, you&apos;ll return to schedule your session.
          </p>
        </div>
      </section>
    </main>
  );
}