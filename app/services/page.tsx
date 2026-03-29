import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "1) Strategic Analytics for SMBs",
    description:
      "Deliverables: Forecast model with confidence intervals, risk scenarios, executive PDF deck, and dashboard.",
    bullets: [
      "Data audit, cleaning & structure",
      "Time series forecasting & scenario modeling",
      "Best for finance and growth planning",
    ],
    price: "Price range: $6k-$18k",
  },
  {
    title: "2) Customer & Profitability Analytics",
    description:
      "Deliverables: Segmentation report, profit heatmaps, strategic recommendations, executive presentation.",
    bullets: [
      "Customer segmentation & LTV",
      "Margin breakdown & profitability mapping",
      "Best for GTM and commercial strategy",
    ],
    price: "Price range: $5k-$15k",
  },
  {
    title: "3) Operational Cost & Efficiency Modeling",
    description:
      "Deliverables: Optimization recommendations, variance drivers, and an actionable cost-reduction plan.",
    bullets: [
      "Cost structure analysis and regression",
      "Efficiency opportunity modeling",
      "Best for operations and supply chain leaders",
    ],
    price: "Price range: $8k-$20k",
  },
  {
    title: "4) Strategic Decision Intelligence (Flagship)",
    description:
      "Full package: data cleaning, modeling, dashboard, executive presentation, and strategic roadmap.",
    bullets: [
      "Cross-functional insight synthesis",
      "Decision framework with prioritized actions",
      "Best for leadership teams",
    ],
    price: "Price range: $10k-$25k",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-black text-white">
      <section className="max-w-7xl mx-auto px-6 pt-10 pb-6">
        <h1 className="text-5xl md:text-[3.5rem] font-semibold leading-[1.02] tracking-[-0.02em] text-white">
          <span className="text-[rgb(245,197,24)]">AI strategy</span> that delivers real business impact.
        </h1>
        <p className="mt-6 text-xl text-white/78 max-w-5xl leading-relaxed">
          Jultech helps companies design, implement, and scale AI solutions — without complexity, without waste, and with measurable results.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-lg bg-[rgb(245,197,24)] px-6 py-3 font-semibold text-black shadow-[0_0_12px_rgba(245,197,24,0.35)] hover:bg-[rgb(255,210,50)] transition"
          >
            Request a consultation
          </a>
          <a href="#services" className="text-white/70 underline hover:text-white transition">
            Learn more
          </a>
        </div>
      </section>

      <section id="services" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              bullets={service.bullets}
              price={service.price}
            />
          ))}
        </div>
      </section>
    </main>
  );
}


