import { ArrowRight } from "lucide-react";
const approachSteps = [
  {
    number: "01",
    title: "Define",
    description:
      "We clarify the problem, your goals, and what success actually looks like before anything is built.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We design the system — structure, flows, and logic aligned to how your business actually operates.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We implement and refine — ensuring everything works reliably in real conditions.",
  },
];

export default function OurApproach() {
  return (
    <section className="w-full bg-black px-6 pt-8 pb-12">
      <div className="w-full rounded-3xl border-2 border-[rgb(245,197,24)] bg-zinc-900/85 p-12 shadow-lg md:p-16">
        <div className="mb-8 text-center">
          <div className="inline-block rounded-full border-2 border-zinc-400 bg-black px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[rgb(245,197,24)]">
            Our Approach
          </div>
          <h2 className="mt-5 text-2xl font-semibold text-white md:text-3xl">
            Built around how your business actually works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-white/70 md:text-lg">
            A structured process designed for clarity, execution, and long-term reliability
          </p>
        </div>
        {/* DESKTOP STEPS */}
        <div className="relative mt-10 hidden items-stretch gap-8 xl:flex">
          {approachSteps.map((step, index) => (
            <div key={step.number} className="relative flex flex-1 flex-col justify-center">
              <div className="group flex h-full flex-col justify-center rounded-2xl border border-white/5 bg-zinc-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-zinc-950 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]">
                <div className="text-sm font-medium text-yellow-400/70">
                  {step.number}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {step.description}
                </p>
              </div>
              {index < approachSteps.length - 1 && (
                <div className="absolute top-1/2 -right-8 z-20 flex -translate-y-1/2 items-center">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-400 text-black shadow-[0_0_20px_rgba(250,204,21,0.5)] transition-transform duration-300 group-hover:scale-110">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* MOBILE STEPS */}
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:hidden">
          {approachSteps.map((step) => (
            <div
              key={step.number}
              className="group h-full rounded-2xl border border-white/5 bg-zinc-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/30 hover:bg-zinc-950 hover:shadow-[0_0_30px_rgba(250,204,21,0.08)]"
            >
              <div className="text-sm font-medium text-yellow-400/70">
                {step.number}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}