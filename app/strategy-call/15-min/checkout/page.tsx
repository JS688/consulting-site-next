import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Sparkles } from "lucide-react";

import { STRIPE_PAYMENT_LINKS } from "@/lib/sessionLinks";

export default function FifteenMinCheckoutPage() {
  return (
    <main className="min-h-screen bg-[#04060c] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
        <div className="w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-blue-300" />
            15-minute strategy call checkout
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Review your call, then continue to secure payment
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            You&apos;re booking the 15-minute strategy call. Payment is handled securely by Stripe, and after payment
            you&apos;ll return to JulTech to schedule your session.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Lock className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Secure checkout</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Stripe handles payment securely off-site.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Protected booking flow</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                After checkout, you&apos;ll come back here to choose your time.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Sparkles className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Fast next steps</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Pay first, then go straight into scheduling.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={STRIPE_PAYMENT_LINKS.short}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Continue to Stripe
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/strategy-call/15-min"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:bg-white/8"
            >
              Back to call details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}