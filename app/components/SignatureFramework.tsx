"use client";

const steps = [
  {
    id: "01",
    title: "Discover",
    subtitle: "Audit and clarity",
  },
  {
    id: "02",
    title: "Design",
    subtitle: "Architecture and strategy",
  },
  {
    id: "03",
    title: "Deploy",
    subtitle: "Build and launch",
  },
  {
    id: "04",
    title: "Optimize",
    subtitle: "Insights and improvement",
  },
];

function StepConnector() {
  return (
    <div className="flex h-10 items-center justify-center lg:h-auto lg:w-12" aria-hidden="true">
      <div className="flex flex-col items-center lg:flex-row">
        <div className="h-8 w-px bg-linear-to-b from-transparent via-[rgb(245,197,24)]/45 to-transparent shadow-[0_0_10px_rgba(245,197,24,0.18)] lg:h-px lg:w-10 lg:bg-linear-to-r" />
        <div className="mt-1 h-0 w-0 border-x-[5px] border-x-transparent border-t-[7px] border-t-[rgb(245,197,24)]/70 lg:mt-0 lg:ml-1 lg:border-y-[5px] lg:border-y-transparent lg:border-l-[7px] lg:border-l-[rgb(245,197,24)]/70 lg:border-t-0" />
      </div>
    </div>
  );
}

export default function SignatureFramework() {
  return (
    <section className="bg-black px-5 pt-6 pb-16 text-white md:pt-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative rounded-[28px] border border-white/12 bg-zinc-800/55 px-5 py-6 shadow-[0_0_24px_rgba(0,0,0,0.35)] backdrop-blur-sm md:px-7 md:py-8">
          <div className="mb-6 flex justify-center md:mb-8">
            <div className="inline-block rounded-full border border-white/20 bg-zinc-900/70 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[rgb(245,197,24)]">
              How we do it
            </div>
          </div>

          <div
            className="pointer-events-none absolute left-1/2 top-20 bottom-8 hidden w-px -translate-x-1/2 bg-linear-to-b from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.12)] sm:block lg:hidden"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-16 right-16 top-[58%] hidden h-px -translate-y-1/2 bg-linear-to-r from-transparent via-white/20 to-transparent shadow-[0_0_10px_rgba(255,255,255,0.12)] lg:block"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-center gap-4 lg:flex-row lg:items-stretch lg:justify-center lg:gap-3">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center lg:flex-row lg:items-stretch">
                <div
                  className="flex min-h-44 w-full max-w-55 flex-col rounded-2xl border border-white/16 bg-zinc-900/60 p-6 shadow-[0_0_12px_rgba(255,255,255,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:shadow-[0_0_18px_rgba(255,255,255,0.1)] lg:w-55"
                >
                  <div className="mb-3 text-3xl font-bold text-[rgb(245,197,24)]">{step.id}</div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-white/68">{step.subtitle}</p>
                </div>

                {index < steps.length - 1 ? <StepConnector /> : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
