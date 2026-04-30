import Link from "next/link";

import ProcessSection from "../homepage/ProcessSection";
import SectionHowCustomersFind from "../homepage/SectionHowCustomersFind";
import WhoWeHelpSection from "../homepage/WhoWeHelpSection";

type Locale = "en" | "es";

const copy = {
  en: {
    eyebrow: "SEO & AI Visibility Optimization",
    title:
      "We design and optimize websites so your business shows up in Google search and can be clearly understood by AI tools like ChatGPT.",
    description: "Modern websites built to bring in customers — not just look good.",
    meansEyebrow: "What It Means",
    meansTitle: "What AI Visibility Means",
    meansParagraphs: [
      "AI visibility means structuring your website so search engines and AI systems can understand your business and surface it in relevant searches.",
      "It's not about guarantees — it's about increasing your chances of being found across modern search platforms.",
    ],
    worksEyebrow: "How It Works",
    steps: [
      {
        label: "01 — Findable",
        text: "Your website is structured so it can be indexed and ranked in Google search.",
      },
      {
        label: "02 — Understandable",
        text: "Your content is clear and organized so search engines and AI tools can interpret your services.",
      },
      {
        label: "03 — Visible",
        text: "Your business becomes easier to surface in search results when customers are looking for services like yours.",
      },
    ],
    learnMore: "Learn more",
    learnMoreHref: "/ai-visibility-columbia-sc",
    examplesLead: "We optimize for real customer searches.",
    examplesTitle: "People search like this:",
    examples: [
      {
        title: "Restaurants & Cafes",
        items: [
          '"top coffee shop in Columbia SC"',
          '"top brunch spots in Columbia SC"',
          '"trusted Mexican restaurant near me"',
          '"where to eat in Columbia SC"',
        ],
      },
      {
        title: "Local Services: Roofing",
        items: [
          '"trusted roofing company in Columbia SC"',
          '"roof repair Columbia SC"',
          '"roof replacement near me"',
          '"affordable roofing contractors Columbia SC"',
        ],
      },
      {
        title: "Realtors",
        items: [
          '"trusted realtor in Columbia SC"',
          '"top real estate agent near me"',
          '"homes for sale in Columbia SC"',
          '"who is the top real estate agent in Columbia SC"',
        ],
      },
      {
        title: "Homebuilders",
        items: [
          '"custom home builders in Columbia SC"',
          '"new construction homes Columbia SC"',
          '"licensed home builders near me"',
          '"build a house in Columbia SC cost"',
        ],
      },
    ],
    queriesTitle: "AI Search & Recommendation Queries",
    queries: [
      '"who is the top roofer in Columbia SC"',
      '"which real estate agent should I hire in Columbia SC"',
      '"licensed home builder near me with good reviews"',
      '"top rated contractors in Columbia SC"',
    ],
    beforeTitle: "Before",
    beforeItems: [
      "Website unclear and unstructured",
      "Not aligned with customer searches",
      "Low visibility in search results",
    ],
    afterTitle: "After",
    afterItems: [
      "Website aligned with real customer search queries",
      "Clear structure for search engines",
      "Improved visibility in Google and modern search platforms",
    ],
    outcomeEyebrow: "Outcome",
    outcomeText:
      "Your business becomes easier to understand, easier to find, and more likely to attract customers through search.",
    primaryCta: "Get Your Free SEO & AI Audit",
    primaryHref: "/free-appraisal",
    secondaryCta: "Talk to an Expert",
  },
  es: {
    eyebrow: "Optimizacion SEO y visibilidad en IA",
    title:
      "Disenamos y optimizamos sitios web para que tu negocio aparezca en Google y pueda ser entendido con claridad por herramientas de IA como ChatGPT.",
    description: "Sitios web modernos construidos para atraer clientes — no solo para verse bien.",
    meansEyebrow: "Lo que significa",
    meansTitle: "Que significa visibilidad en IA",
    meansParagraphs: [
      "La visibilidad en IA significa estructurar tu sitio web para que los buscadores y los sistemas de IA entiendan tu negocio y lo muestren en busquedas relevantes.",
      "No se trata de promesas — se trata de aumentar tus posibilidades de ser encontrado en las plataformas modernas de busqueda.",
    ],
    worksEyebrow: "Como funciona",
    steps: [
      {
        label: "01 — Encontrable",
        text: "Tu sitio web se estructura para que pueda ser indexado y posicionado en Google.",
      },
      {
        label: "02 — Entendible",
        text: "Tu contenido es claro y organizado para que buscadores y herramientas de IA interpreten tus servicios.",
      },
      {
        label: "03 — Visible",
        text: "Tu negocio se vuelve mas facil de mostrar cuando los clientes buscan servicios como los tuyos.",
      },
    ],
    learnMore: "Conoce mas",
    learnMoreHref: "/es/free-appraisal",
    examplesLead: "Optimizamos para busquedas reales de clientes.",
    examplesTitle: "Las personas buscan asi:",
    examples: [
      {
        title: "Restaurantes y cafes",
        items: [
          '"mejor cafe en Columbia SC"',
          '"mejores brunch en Columbia SC"',
          '"restaurante mexicano confiable cerca de mi"',
          '"donde comer en Columbia SC"',
        ],
      },
      {
        title: "Servicios locales: techos",
        items: [
          '"empresa de techos confiable en Columbia SC"',
          '"reparacion de techo Columbia SC"',
          '"reemplazo de techo cerca de mi"',
          '"contratistas de techos accesibles Columbia SC"',
        ],
      },
      {
        title: "Realtors",
        items: [
          '"realtor confiable en Columbia SC"',
          '"mejor agente de bienes raices cerca de mi"',
          '"casas en venta en Columbia SC"',
          '"quien es el mejor agente de bienes raices en Columbia SC"',
        ],
      },
      {
        title: "Constructores de viviendas",
        items: [
          '"constructores de casas a medida en Columbia SC"',
          '"casas nuevas en Columbia SC"',
          '"constructor licenciado cerca de mi"',
          '"cuanto cuesta construir una casa en Columbia SC"',
        ],
      },
    ],
    queriesTitle: "Consultas de busqueda y recomendacion en IA",
    queries: [
      '"quien es el mejor techador en Columbia SC"',
      '"que agente de bienes raices deberia contratar en Columbia SC"',
      '"constructor licenciado cerca de mi con buenas resenas"',
      '"mejores contratistas en Columbia SC"',
    ],
    beforeTitle: "Antes",
    beforeItems: [
      "Sitio web poco claro y sin estructura",
      "No alineado con las busquedas de clientes",
      "Baja visibilidad en resultados",
    ],
    afterTitle: "Despues",
    afterItems: [
      "Sitio alineado con busquedas reales de clientes",
      "Estructura clara para buscadores",
      "Mejor visibilidad en Google y plataformas modernas de busqueda",
    ],
    outcomeEyebrow: "Resultado",
    outcomeText:
      "Tu negocio se vuelve mas facil de entender, mas facil de encontrar y con mayores posibilidades de atraer clientes a traves de la busqueda.",
    primaryCta: "Recibe tu auditoria gratis de SEO e IA",
    primaryHref: "/es/free-appraisal",
    secondaryCta: "Habla con un experto",
  },
} as const;

export default function AIVisibilityPageContent({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];

  return (
    <>
      <section className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-64 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(96,165,250,0.09),transparent_25%),radial-gradient(circle_at_30%_80%,rgba(245,200,76,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">
            {localized.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#f5c84c] sm:text-5xl">
            {localized.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-white/75">
            {localized.description}
          </p>

          <div className="mt-12 rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">{localized.meansEyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold text-[#f5c84c] sm:text-3xl">{localized.meansTitle}</h2>
            {localized.meansParagraphs.map((paragraph) => (
              <p key={paragraph} className="mt-5 max-w-3xl text-white/75">
                {paragraph}
              </p>
            ))}

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">{localized.worksEyebrow}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {localized.steps.map((step) => (
                <article key={step.label} className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <p className="text-xs font-semibold tracking-[0.18em] text-[#f5c84c]">{step.label}</p>
                  <p className="mt-2 text-sm text-white/70">{step.text}</p>
                </article>
              ))}
            </div>

            <Link
              href={localized.learnMoreHref}
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#f5c84c] transition hover:text-[#ffd867]"
            >
              {localized.learnMore}
            </Link>
          </div>

          <div className="mt-14 rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8">
            <p className="max-w-4xl text-base leading-7 text-white/75 sm:text-lg">
              {localized.examplesLead}
            </p>

            <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{localized.examplesTitle}</h2>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {localized.examples.map((example) => (
                <article key={example.title} className="rounded-xl border border-white/10 bg-black/20 p-5">
                  <h3 className="text-lg font-semibold text-[#f5c84c]">{example.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {example.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-xl border border-[#f5c84c]/25 bg-[#f5c84c]/8 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">{localized.queriesTitle}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {localized.queries.map((query) => (
                  <li key={query}>{query}</li>
                ))}
              </ul>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <article className="rounded-xl border border-white/10 bg-black/20 p-5">
                <h3 className="text-lg font-semibold text-[#f5c84c]">{localized.beforeTitle}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  {localized.beforeItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="rounded-xl border border-[#f5c84c]/25 bg-[#f5c84c]/8 p-5">
                <h3 className="text-lg font-semibold text-[#f5c84c]">{localized.afterTitle}</h3>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {localized.afterItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">{localized.outcomeEyebrow}</p>
            <p className="mt-3 max-w-3xl text-white/70">
              {localized.outcomeText}
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href={localized.primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd867]"
            >
              {localized.primaryCta}
            </Link>
            <a
              href="tel:+18033861672"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              {localized.secondaryCta}
            </a>
          </div>
        </div>
      </section>

      <SectionHowCustomersFind locale={locale} />
      <WhoWeHelpSection locale={locale} />
      <ProcessSection locale={locale} />
    </>
  );
}