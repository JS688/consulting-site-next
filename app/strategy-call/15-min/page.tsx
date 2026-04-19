import Link from "next/link";
import { ArrowRight, Clock3, ShieldCheck, Sparkles } from "lucide-react";

export default function FifteenMinStrategyPage() {
  return (
    <main className="min-h-screen bg-[#04060c] text-white">
      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-20">
        <div className="w-full">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Premium 15-minute strategy call
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            A focused call to clarify your next move
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">
            This is a short private consultation for businesses that want clear direction before investing in a website,
            WordPress build, SEO campaign, or AI-powered upgrade.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Clock3 className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Quick clarity</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                We identify the biggest opportunity and what to do first.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <ShieldCheck className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Tailored advice</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                We review your current situation and recommend the best path.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Sparkles className="h-5 w-5 text-blue-300" />
              <h2 className="mt-4 text-lg font-medium">Next-step plan</h2>
              <p className="mt-2 text-sm leading-6 text-white/55">
                Leave with a clear action plan and the option to move forward.
              </p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/strategy-call/15-min/checkout"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#4f8df7,#6bafff)] px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Continue to payment
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm font-medium text-white/80 transition hover:bg-white/8"
            >
              Back to website
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}