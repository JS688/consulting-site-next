import Link from "next/link";

type FaqItem = {
  question: string;
  answer: string;
};

type ProcessItem = {
  title: string;
  description: string;
};

const relatedColumbiaPages = [
  { href: "/seo-services-columbia-sc.html", label: "SEO Services in Columbia" },
  { href: "/website-design-columbia-sc.html", label: "Website Design in Columbia" },
  { href: "/local-seo-columbia-sc.html", label: "Local SEO in Columbia" },
  { href: "/seo-for-realtors-columbia-sc.html", label: "SEO for Realtors in Columbia" },
];

export type ColumbiaLandingConfig = {
  label: string;
  title: string;
  description: string;
  locationLine: string;
  serviceType: string;
  benefits: string[];
  process: ProcessItem[];
  audience: string[];
  faqs: FaqItem[];
};

export default function ColumbiaLandingPage({ config }: { config: ColumbiaLandingConfig }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: config.title,
    areaServed: ["Columbia, SC", "South Carolina"],
    serviceType: config.serviceType,
    description: config.description,
  };

  return (
    <main className="bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-400">
          {config.label}
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#d4af37] sm:text-5xl">
          {config.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
          {config.description}
        </p>

        <p className="mt-3 text-sm text-zinc-400">
          {config.locationLine}
        </p>

        <section className="mt-12 rounded-4xl border border-white/10 bg-white/3 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-8">
          <h2 className="text-2xl font-semibold text-white">
            What This Service Helps You Do
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {config.benefits.map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-sm leading-7 text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">How We Work</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {config.process.map((item, index) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-black/25 p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-zinc-500">
                  Step {index + 1}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">Built for Businesses Like</h2>

          <div className="mt-6 flex flex-wrap gap-3">
            {config.audience.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold text-[#d4af37]">FAQ</h2>

          <div className="mt-6 space-y-4">
            {config.faqs.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-4">
                <h3 className="text-lg font-medium text-white">{item.question}</h3>
                <p className="mt-2 text-sm leading-7 text-zinc-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-4xl border border-white/10 bg-white/3 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-[#d4af37]">Related Columbia Service Pages</h2>
          <p className="mt-4 text-sm leading-7 text-zinc-300">
            Explore related pages that strengthen the local search structure around these Columbia services.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {relatedColumbiaPages.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-black/25 px-4 py-2 text-sm text-zinc-300 transition hover:border-[#d4af37]/50 hover:text-[#f5c84c]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-16 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/free-appraisal"
            className="inline-flex items-center justify-center rounded-full bg-[#d4af37] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#e7bf4f]"
          >
            Get Your Free Visibility Audit
          </Link>
          <a
            href="tel:+18033861672"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Call an Expert
          </a>
        </section>
      </div>
    </main>
  );
}