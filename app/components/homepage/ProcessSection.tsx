const processSteps = [
  {
    number: "1",
    title: "Build the foundation",
    accent: false,
  },
  {
    number: "2",
    title: "Optimize for search",
    accent: true,
  },
  {
    number: "3",
    title: "Grow visibility over time",
    accent: false,
  },
];

const processStepsEs = [
  {
    number: "1",
    title: "Construye la base",
    accent: false,
  },
  {
    number: "2",
    title: "Optimiza para busqueda",
    accent: true,
  },
  {
    number: "3",
    title: "Haz crecer tu visibilidad",
    accent: false,
  },
];

export default function ProcessSection({ locale = "en" }: { locale?: "en" | "es" }) {
  const steps = locale === "en" ? processSteps : processStepsEs;

  return (
    <section id="process" className="relative overflow-hidden bg-black px-6 pb-28 pt-20 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 -top-10 h-48 w-80 -translate-x-1/2 rounded-full bg-yellow-400/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <p className="mb-4 text-sm tracking-wide text-[#d4af37]">{locale === "en" ? "HOW IT WORKS" : "COMO FUNCIONA"}</p>

        <h2 className="mb-6 text-3xl font-semibold md:text-5xl">
          {locale === "en" ? "A simple visibility process" : "Un proceso simple de visibilidad"}
        </h2>

        <div className="relative mt-12 grid gap-8 text-left md:grid-cols-3">
          <div className="absolute left-0 top-1/2 -z-10 hidden h-px w-full -translate-y-1/2 bg-linear-to-r from-transparent via-yellow-400/20 to-transparent md:block" />

          {steps.map((step) => (
            <div
              key={step.title}
              className={[
                "rounded-xl border bg-white/2 p-6 transition-all duration-300 hover:-translate-y-2",
                step.accent
                  ? "relative border-yellow-400/40"
                  : "border-white/10 hover:border-yellow-400/30",
              ].join(" ")}
            >
              {step.accent ? (
                <div className="absolute inset-0 -z-10 rounded-xl bg-yellow-400/10 opacity-40 blur-2xl" />
              ) : null}

              <div className={[
                "mb-4 flex h-10 w-10 items-center justify-center rounded-full text-yellow-400",
                step.accent ? "bg-yellow-400/20" : "bg-yellow-400/10",
              ].join(" ")}>
                <span className="font-semibold">{step.number}</span>
              </div>

              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}