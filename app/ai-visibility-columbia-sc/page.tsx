import Link from "next/link";

export default function AIVisibilityColumbiaScPage() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-64 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(96,165,250,0.09),transparent_25%),radial-gradient(circle_at_30%_80%,rgba(245,200,76,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-14">
        <div>
          <h1 className="text-4xl font-semibold tracking-tight text-[#f5c84c] sm:text-5xl">
            AI Visibility Services in Columbia, SC
          </h1>
          <p className="mt-6 max-w-4xl text-lg text-white/75">
            We help your business appear in AI-powered search results like ChatGPT - and turn that visibility into real customers.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/free-audit"
              className="inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd867]"
            >
              Get Your Free SEO &amp; AI Audit -&gt;
            </Link>
            <a
              href="tel:+18033861672"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
            >
              Call an Expert
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#f5c84c]">What is AI Visibility?</h2>
          <p className="text-white/75">
            AI visibility means your business can be found, understood, and recommended by AI tools like ChatGPT and other AI-powered search platforms.
          </p>
          <p className="text-white/75">
            Instead of just ranking in Google, your business becomes part of the answers people see when they ask AI what to buy, where to go, or who to hire.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#f5c84c]">Why AI Visibility Matters</h2>
          <p className="text-white/75">
            More people are using AI tools alongside Google to decide who to trust and where to spend their money.
          </p>
          <p className="text-white/75">
            If your business is not showing up in those results, you are missing a growing source of customers.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#f5c84c]">How AI Search and Recommendations Work</h2>
          <ol className="space-y-2 text-white/75">
            <li>1. Customer searches (Google or AI)</li>
            <li>2. AI analyzes structured websites</li>
            <li>3. It understands services and relevance</li>
            <li>4. It recommends businesses</li>
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#f5c84c]">How We Improve Your AI Visibility</h2>
          <ul className="space-y-2 text-white/75">
            <li>- Structure your website for clarity</li>
            <li>- Align content with real search queries</li>
            <li>- Improve Google visibility (feeds AI systems)</li>
            <li>- Optimize for AI interpretation and recommendations</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-[#f5c84c]">Before vs After AI Visibility</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/4 p-6">
              <h3 className="text-2xl font-semibold text-white">Before</h3>
              <ul className="mt-4 space-y-2 text-white/75">
                <li>Not appearing in Google or AI results</li>
                <li>Unclear website structure</li>
                <li>Low visibility</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#f5c84c]/35 bg-[#f5c84c]/8 p-6">
              <h3 className="text-2xl font-semibold text-[#f5c84c]">After</h3>
              <ul className="mt-4 space-y-2 text-white/85">
                <li>Appearing in search and AI recommendations</li>
                <li>Structured for AI understanding</li>
                <li>More visibility, calls, and leads</li>
              </ul>
            </article>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-[#f5c84c]">Who This Is For</h2>
          <ul className="space-y-2 text-white/75">
            <li>- Restaurants and cafes</li>
            <li>- Local businesses</li>
            <li>- Service-based businesses</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd867]"
          >
            Get Your Free SEO &amp; AI Audit -&gt;
          </Link>
          <a
            href="tel:+18033861672"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Call an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
