import Link from "next/link";

type Locale = "en" | "es";

const copy = {
  en: {
    title: "See How Your Business Shows Up on Google and AI",
    description:
      "Get a free visibility check to understand where your website stands - and what's holding it back.",
    primaryLabel: "Get My Free Visibility Report ->",
    primaryHref: "#contact",
    secondaryLabel: "Talk to an Expert",
    footer: "No commitment. Takes 2 minutes.",
  },
  es: {
    title: "Solicite su revisión gratis",
    description: "Vea cómo aparece su negocio en Google",
    primaryLabel: "→ Pida su reporte gratis",
    primaryHref: "#contact",
    secondaryLabel: "→ Hable con un experto",
    footer: "Contacto\n📞 (803) 386-1672\nSin compromiso",
  },
} as const;

export default function VisibilityReportCTA({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];

  return (
    <section className="border-t border-[#d4af37]/10 bg-[#050814] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xl font-semibold sm:text-4xl md:text-5xl">
          {localized.title}
        </h2>

        <p className="mx-auto mt-4 max-w-none text-xs uppercase tracking-[0.12em] text-gray-400 sm:text-sm md:whitespace-nowrap">
          {localized.description}
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href={localized.primaryHref}
            className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-medium text-black transition hover:bg-yellow-400 sm:px-8 sm:py-4 sm:text-base"
          >
            {localized.primaryLabel}
          </Link>

          <a
            href="tel:+18033861672"
            className="rounded-full border border-[#f5c84c] px-6 py-3 text-sm font-medium text-[#f5c84c] transition hover:bg-[#f5c84c] hover:text-black sm:px-8 sm:py-4 sm:text-base"
          >
            {localized.secondaryLabel}
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          {localized.footer}
        </p>
      </div>
    </section>
  );
}