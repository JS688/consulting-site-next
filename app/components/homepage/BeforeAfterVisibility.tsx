export default function BeforeAfterVisibility() {
  return (
    <section className="relative overflow-hidden bg-[#05070c] px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-yellow-400/8 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold tracking-tight text-[#f5c84c] sm:text-4xl">
          Before vs After Visibility
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/4 p-7">
            <h3 className="text-2xl font-semibold text-white">Before</h3>
            <ul className="mt-5 space-y-3 text-white/75">
              <li>Not showing in Google search</li>
              <li>Not appearing in AI results</li>
              <li>Website unclear and unstructured</li>
            </ul>
          </article>

          <article className="rounded-2xl border border-[#f5c84c]/35 bg-[#f5c84c]/8 p-7 shadow-[0_0_30px_rgba(245,200,76,0.08)]">
            <h3 className="text-2xl font-semibold text-[#f5c84c]">After</h3>
            <ul className="mt-5 space-y-3 text-white/85">
              <li>Appearing in Google search &amp; Maps</li>
              <li>Structured for AI tools like ChatGPT</li>
              <li>More visibility, calls, and customer inquiries</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}