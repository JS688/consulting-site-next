export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white md:py-20">
      <section className="mx-auto max-w-5xl text-center">
        <h1 className="text-5xl font-extrabold tracking-[-0.5px] text-yellow-400 md:text-6xl">
          Contact
        </h1>

        <p className="mx-auto mt-6 max-w-3xl text-lg font-light leading-relaxed text-gray-300 md:text-xl">
          Let's connect and talk through what your business needs next.
        </p>

        <div className="relative mx-auto mt-10 w-full max-w-6xl overflow-hidden rounded-2xl aspect-14/3">
          <video
            src="/letstry.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover opacity-85 blur-[1px]"
          />
          <div className="absolute inset-0 bg-black/12" />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
          <a
            href="mailto:ai@jul-tech.com"
            className="rounded-full border border-yellow-400/35 px-5 py-3 text-yellow-200 transition hover:border-yellow-300 hover:text-yellow-100"
            aria-label="Email JulTech AI"
            title="Email JulTech AI"
          >
            ai@jul-tech.com
          </a>
          <a
            href="https://www.linkedin.com/in/julia-sokolsky/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-yellow-400/35 px-5 py-3 text-yellow-200 transition hover:border-yellow-300 hover:text-yellow-100"
            aria-label="Visit Julia Sokolsky on LinkedIn"
            title="Visit Julia Sokolsky on LinkedIn"
          >
            LinkedIn
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-sm text-gray-500">
          Your data is safe and secure. This website is protected with industry-standard SSL encryption.
        </p>
      </section>
    </main>
  );
}

