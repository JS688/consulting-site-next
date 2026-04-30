const services = [
  {
    number: 1,
    position: "lg:col-start-1 lg:row-start-1",
    title: "Build the Right Foundation",
    description: "We design and structure your website so search engines and AI tools can clearly understand your services.",
    featured: false,
  },
  {
    number: 2,
    position: "lg:col-start-1 lg:row-start-2",
    title: "Align With Real Searches",
    description: "We optimize your content based on how customers actually search for your services.",
    featured: false,
  },
  {
    number: 3,
    position: "lg:col-start-2 lg:row-start-1",
    title: "Improve Visibility & Rankings",
    description: "We refine your website and content to improve rankings and increase discoverability.",
    featured: true,
  },
  {
    number: 4,
    position: "lg:col-start-2 lg:row-start-2",
    title: "Grow Traffic & Customer Inquiries",
    description: "We continue improving your visibility so your business attracts more traffic, leads, and customers over time.",
    featured: false,
  },
];

type Locale = "en" | "es";

const servicesEs = [
  {
    number: 1,
    position: "lg:col-start-1 lg:row-start-1",
    title: "Construye la base correcta",
    description: "Disenamos y estructuramos tu sitio web para que Google y las herramientas de IA entiendan con claridad lo que haces.",
    featured: false,
  },
  {
    number: 2,
    position: "lg:col-start-1 lg:row-start-2",
    title: "Alinea tu contenido con busquedas reales",
    description: "Optimizamos tu contenido segun la forma en que tus clientes realmente buscan tus servicios.",
    featured: false,
  },
  {
    number: 3,
    position: "lg:col-start-2 lg:row-start-1",
    title: "Mejora visibilidad y posicionamiento",
    description: "Refinamos tu sitio web y tu contenido para mejorar posiciones y aumentar descubrimiento.",
    featured: true,
  },
  {
    number: 4,
    position: "lg:col-start-2 lg:row-start-2",
    title: "Haz crecer trafico y consultas",
    description: "Seguimos mejorando tu visibilidad para que tu negocio atraiga mas trafico, prospectos y clientes con el tiempo.",
    featured: false,
  },
];

export default function WhatWeDo({ locale = "en" }: { locale?: Locale }) {
  const cards = locale === "en" ? services : servicesEs;

  return (
    <section id="ai-explanation" className="relative overflow-hidden bg-[#050814] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-left">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#f5c84c]/70 bg-[#f5c84c]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c] sm:text-sm">
            {locale === "en" ? "Solutions" : "Soluciones"}
          </p>
          <h2 className="text-lg font-semibold tracking-tight text-[#f5c84c] sm:text-4xl">{locale === "en" ? "How We Help You Get Found" : "Como ayudamos a que te encuentren"}</h2>
          <p className="mt-4 text-xs leading-relaxed text-white/60 sm:text-base">
            {locale === "en"
              ? "We follow a structured process to improve your visibility in Google search and help your business be clearly understood across modern search platforms."
              : "Seguimos un proceso estructurado para mejorar tu visibilidad en Google y ayudar a que tu negocio sea entendido con claridad en las plataformas de busqueda actuales."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:auto-rows-fr lg:grid-cols-2 lg:gap-8">
          {cards.map((service) => {
            return (
              <div
                key={service.title}
                className={`relative flex flex-col ${service.position}`}
              >
                <article
                  className={`relative h-full rounded-2xl border p-6 transition-all duration-200 hover:-translate-y-0.5 ${
                    service.featured
                      ? "border-[#f5c84c]/50 bg-[#f5c84c]/5 shadow-[0_0_30px_rgba(245,200,76,0.08)]"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <div className="absolute -top-5 left-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#f5c84c]/40 bg-black text-xs font-semibold text-[#f5c84c] sm:h-10 sm:w-10 sm:text-sm">
                    {service.number}
                  </div>

                  {service.featured && (
                    <span className="absolute -top-4 right-6 inline-flex items-center gap-1.5 rounded-full border border-[#f5c84c]/30 bg-black px-2.5 py-1 text-[11px] font-semibold text-white sm:px-3 sm:text-xs">
                      ✅ {locale === "en" ? "Core System" : "Sistema central"}
                    </span>
                  )}
                  <h3 className={`text-sm font-semibold sm:text-xl ${service.featured ? "text-[#f5c84c]" : "text-white"}`}>
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60 sm:text-base">{service.description}</p>
                </article>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}