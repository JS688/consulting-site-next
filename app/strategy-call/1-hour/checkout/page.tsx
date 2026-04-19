import Link from "next/link";
import { ArrowRight, Lock, ShieldCheck, Sparkles } from "lucide-react";

import { STRIPE_PAYMENT_LINKS } from "@/lib/sessionLinks";

export default function OneHourCheckoutPage() {
  return (
    <main className="min-h-screen bg-[#04060c] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
        <div className="w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-blue-300" />
            1-hour strategy session checkout
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            Review the session, then continue to secure payment
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            You&apos;re booking the full 1-hour strategy session. Stripe handles payment securely, then you return to
            JulTech to choose the exact time for your session.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Lock className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Secure checkout</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Stripe processes payment securely off-site.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Protected booking flow</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                You&apos;ll come back here after payment to book your slot.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Sparkles className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Premium next steps</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Confirm payment first, then schedule the session directly.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={STRIPE_PAYMENT_LINKS.full}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Continue to Stripe
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/strategy-call/1-hour"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:bg-white/8"
            >
              Back to session details
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}