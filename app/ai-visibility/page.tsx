import Link from "next/link";
import SectionHowCustomersFind from "../components/homepage/SectionHowCustomersFind";
import ProcessSection from "../components/homepage/ProcessSection";
import WhoWeHelpSection from "../components/homepage/WhoWeHelpSection";

export default function AIVisibilityPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-16 h-64 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(96,165,250,0.09),transparent_25%),radial-gradient(circle_at_30%_80%,rgba(245,200,76,0.08),transparent_30%)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">
          SEO &amp; AI Visibility Optimization
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#f5c84c] sm:text-5xl">
          We design and optimize websites so your business shows up in Google search and can be clearly understood by AI tools like ChatGPT.
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/75">
          Modern websites built to bring in customers — not just look good.
        </p>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">What It Means</p>
          <h2 className="mt-3 text-2xl font-semibold text-[#f5c84c] sm:text-3xl">What AI Visibility Means</h2>
          <p className="mt-5 max-w-3xl text-white/75">
            AI visibility means structuring your website so search engines and AI systems can understand your business and surface it in relevant searches.
          </p>
          <p className="mt-4 max-w-3xl text-white/75">
            It&apos;s not about guarantees — it&apos;s about increasing your chances of being found across modern search platforms.
          </p>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">How It Works</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f5c84c]">01 — Findable</p>
              <p className="mt-2 text-sm text-white/70">
                Your website is structured so it can be indexed and ranked in Google search.
              </p>
            </article>

            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f5c84c]">02 — Understandable</p>
              <p className="mt-2 text-sm text-white/70">
                Your content is clear and organized so search engines and AI tools can interpret your services.
              </p>
            </article>

            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <p className="text-xs font-semibold tracking-[0.18em] text-[#f5c84c]">03 — Visible</p>
              <p className="mt-2 text-sm text-white/70">
                Your business becomes easier to surface in search results when customers are looking for services like yours.
              </p>
            </article>
          </div>

          <Link
            href="/ai-visibility-columbia-sc"
            className="mt-7 inline-flex items-center text-sm font-semibold text-[#f5c84c] transition hover:text-[#ffd867]"
          >
            Learn more
          </Link>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/4 p-6 sm:p-8">
          <p className="max-w-4xl text-base leading-7 text-white/75 sm:text-lg">
            We optimize for real customer searches.
          </p>

          <h2 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">People search like this:</h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">Restaurants &amp; Cafes</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>"top coffee shop in Columbia SC"</li>
                <li>"top brunch spots in Columbia SC"</li>
                <li>"trusted Mexican restaurant near me"</li>
                <li>"where to eat in Columbia SC"</li>
              </ul>
            </article>

            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">Local Services: Roofing</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>"trusted roofing company in Columbia SC"</li>
                <li>"roof repair Columbia SC"</li>
                <li>"roof replacement near me"</li>
                <li>"affordable roofing contractors Columbia SC"</li>
              </ul>
            </article>

            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">Realtors</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>"trusted realtor in Columbia SC"</li>
                <li>"top real estate agent near me"</li>
                <li>"homes for sale in Columbia SC"</li>
                <li>"who is the top real estate agent in Columbia SC"</li>
              </ul>
            </article>

            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">Homebuilders</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                <li>"custom home builders in Columbia SC"</li>
                <li>"new construction homes Columbia SC"</li>
                <li>"licensed home builders near me"</li>
                <li>"build a house in Columbia SC cost"</li>
              </ul>
            </article>
          </div>

          <div className="mt-8 rounded-xl border border-[#f5c84c]/25 bg-[#f5c84c]/8 p-5">
            <h3 className="text-lg font-semibold text-[#f5c84c]">AI Search &amp; Recommendation Queries</h3>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li>"who is the top roofer in Columbia SC"</li>
              <li>"which real estate agent should I hire in Columbia SC"</li>
              <li>"licensed home builder near me with good reviews"</li>
              <li>"top rated contractors in Columbia SC"</li>
            </ul>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-xl border border-white/10 bg-black/20 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">Before</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li>Website unclear and unstructured</li>
                <li>Not aligned with customer searches</li>
                <li>Low visibility in search results</li>
              </ul>
            </article>

            <article className="rounded-xl border border-[#f5c84c]/25 bg-[#f5c84c]/8 p-5">
              <h3 className="text-lg font-semibold text-[#f5c84c]">After</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>Website aligned with real customer search queries</li>
                <li>Clear structure for search engines</li>
                <li>Improved visibility in Google and modern search platforms</li>
              </ul>
            </article>
          </div>

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">Outcome</p>
          <p className="mt-3 max-w-3xl text-white/70">
            Your business becomes easier to understand, easier to find, and more likely to attract customers through search.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd867]"
          >
            Get Your Free SEO &amp; AI Audit
          </Link>
          <a
            href="tel:+18033861672"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Talk to an Expert
          </a>
        </div>
        </div>
      </section>

      <SectionHowCustomersFind />

      <WhoWeHelpSection />

      <ProcessSection />
    </>
  );
}
