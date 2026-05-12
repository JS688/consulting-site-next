import { ArrowRight, FileSearch, Timer, TrendingUp, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section className="hidden bg-[#060606] px-6 pb-8 pt-6 text-white md:block md:px-8 md:pb-10 md:pt-8">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#c59b2f]/50 bg-[radial-gradient(120%_95%_at_0%_0%,rgba(255,255,255,0.06),transparent_45%),radial-gradient(130%_90%_at_100%_0%,rgba(212,175,55,0.14),transparent_45%),linear-gradient(145deg,#111317_0%,#08090c_45%,#060607_100%)] px-7 py-7 shadow-[0_14px_60px_rgba(0,0,0,0.45)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_45%_at_20%_0%,rgba(255,255,255,0.05),transparent_80%)]" />
          <div className="pointer-events-none absolute right-10 top-0 h-px w-40 bg-linear-to-r from-transparent via-[#f2c14e] to-transparent" />

          <div className="relative grid gap-7 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="lg:pr-9 lg:border-r lg:border-white/12">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#d4af37]/45 bg-black/35 shadow-[0_0_16px_rgba(212,175,55,0.2)]">
                <FileSearch className="h-6 w-6 text-[#f2c14e]" />
              </div>

              <h2 className="mt-4 font-serif text-3xl leading-[1.05] text-[#f5f1e8] lg:text-[40px]">
                Get Your
                <br />
                <span className="text-[#f2c14e]">Visibility Report</span>
              </h2>

              <div className="my-4 h-px w-20 bg-linear-to-r from-[#f2c14e] to-transparent" />

              <p className="max-w-xl text-sm leading-6 text-white/72 lg:text-base">
                Most businesses are being overlooked by Google and AI - even when they offer great services.
              </p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/72 lg:text-base">
                We&apos;ll show you exactly where you&apos;re missing opportunities and what to fix first.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3.5 lg:mt-10 lg:pl-4">
              <a
                href="/contact"
                className="group inline-flex items-center justify-between gap-3 rounded-2xl bg-[linear-gradient(180deg,#f7d46b_0%,#d6ad39_100%)] px-5 py-3 text-base font-semibold leading-tight text-[#171717] shadow-[0_14px_28px_rgba(212,175,55,0.22)] transition duration-200 hover:-translate-y-px hover:shadow-[0_18px_34px_rgba(212,175,55,0.28)] lg:text-lg"
              >
                <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
                  <span className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-black text-[#f3c955]">
                    <FileSearch className="h-4.5 w-4.5" />
                  </span>
                  Find Out What&apos;s Costing You Customers
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <div className="flex items-center gap-4 text-white/50">
                <span className="h-px flex-1 bg-white/15" />
                <span className="text-sm">or</span>
                <span className="h-px flex-1 bg-white/15" />
              </div>

              <a
                href="/15-min-strategy-call"
                className="group mt-1 inline-flex items-center justify-between gap-3 rounded-2xl border border-[#c59b2f]/60 bg-[#0b0c0f] px-5 py-3 text-base font-medium text-white transition duration-200 hover:border-[#f2c14e] hover:bg-[#111317] lg:text-lg"
              >
                <span className="inline-flex items-center gap-2.5">
                  <span className="flex h-8.5 w-8.5 items-center justify-center rounded-lg border border-[#f2c14e]/50 bg-[#141518] text-[#f2c14e]">
                    <Timer className="h-4 w-4" />
                  </span>
                  Book Your Strategy Session
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

            </div>
          </div>

          <div className="relative mt-7 grid gap-3 border-t border-white/10 pt-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start gap-3 border-r border-white/10 pr-3 last:border-r-0">
              <TrendingUp className="mt-0.5 h-5 w-5 text-[#f2c14e]" />
              <div>
                <p className="text-sm font-medium text-[#f5f1e8]">Clear next steps</p>
                <p className="mt-0.5 text-xs text-white/65">Know exactly what to do next</p>
              </div>
            </div>
            <div className="flex items-start gap-3 border-r border-white/10 pr-3 last:border-r-0">
              <FileSearch className="mt-0.5 h-5 w-5 text-[#f2c14e]" />
              <div>
                <p className="text-sm font-medium text-[#f5f1e8]">Real insights</p>
                <p className="mt-0.5 text-xs text-white/65">Not generic advice</p>
              </div>
            </div>
            <div className="flex items-start gap-3 pr-3">
              <Sparkles className="mt-0.5 h-5 w-5 text-[#f2c14e]" />
              <div>
                <p className="text-sm font-medium text-[#f5f1e8]">Built for your business</p>
                <p className="mt-0.5 text-xs text-white/65">Focused on your market</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
