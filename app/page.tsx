// app/page.tsx
export default function HomePage() {
  return (
    <main className="max-w-content mx-auto px-6 py-16">
      <header className="mb-8">
        <h1 className="h-hero">
          <span className="text-gold">AI strategy</span> that delivers real business impact.
        </h1>
        <p className="text-sm text-gray-300 mt-6 max-w-prose">
          Jultech helps companies design, implement, and scale AI solutions — without complexity,
          without waste, and with measurable results.
        </p>

        <div className="mt-6 flex gap-3 items-center">
          <a href="#contact" className="btn-gold">Request a consultation</a>
          <a href="#services" className="btn-outline">Learn more</a>
        </div>
      </header>

      <section id="what-we-do" className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">What we do (clear & compact)</h2>

        <div className="space-y-4">
          <article className="card">
            <h3 className="text-lg font-semibold text-gold">1️⃣ Strategic Analytics for SMBs</h3>
            <p className="text-sm text-gray-300 mt-2">
              Deliverables: Forecast model with confidence intervals, risk scenarios, executive PDF deck, and dashboard.
            </p>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
              <li>Data audit, cleaning & structure</li>
              <li>Time series forecasting & scenario modeling</li>
              <li>Price range: $6k–$18k</li>
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold text-gold">2️⃣ Customer & Profitability Analytics</h3>
            <p className="text-sm text-gray-300 mt-2">
              Deliverables: Segmentation report, profit heatmaps, strategic recommendations, executive presentation.
            </p>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
              <li>Customer segmentation & LTV</li>
              <li>Margin breakdown & profitability mapping</li>
              <li>Price: $5k–$15k</li>
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold text-gold">3️⃣ Operational Cost & Efficiency Modeling</h3>
            <p className="text-sm text-gray-300 mt-2">
              Deliverables: Optimization recommendations, variance drivers, actionable cost-reduction plan.
            </p>
            <ul className="list-disc list-inside text-sm mt-2 text-gray-300">
              <li>Cost structure analysis & regression</li>
              <li>Price: $8k–$20k</li>
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold text-gold">4️⃣ Strategic Decision Intelligence (Flagship)</h3>
            <p className="text-sm text-gray-300 mt-2">
              Full package: data cleaning, modeling, dashboard, McKinsey-style presentation, and strategic roadmap.
            </p>
            <p className="text-sm text-gray-300 mt-2 font-semibold">Price: $10k–$25k</p>
          </article>
        </div>
      </section>

      <section id="how-we-work" className="mb-8">
        <h2 className="text-xl font-semibold mb-3">How we work</h2>
        <p className="text-sm text-gray-300">We audit your data, build robust forecasting & segmentation models, and deliver concise executive outputs: a dashboard, a strategic deck, and a clear action plan focused on measurable outcomes.</p>
      </section>

      <section id="contact" className="mt-10">
        <h2 className="text-xl font-semibold">Start a conversation</h2>
        <p className="text-sm text-gray-300 mt-2">Small & medium private companies that want to use AI to improve forecasting, margins, and decision-making.</p>
      </section>
    </main>
  );
}