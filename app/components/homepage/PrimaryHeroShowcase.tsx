"use client";

import Link from "next/link";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const sideDots = [
  { top: "18%", x: "9%", delay: 0.2, duration: 5.2, size: 4 },
  { top: "30%", x: "14%", delay: 1.1, duration: 6.1, size: 3 },
  { top: "46%", x: "10%", delay: 0.6, duration: 5.7, size: 5 },
  { top: "64%", x: "13%", delay: 1.4, duration: 6.4, size: 3 },
  { top: "24%", x: "88%", delay: 0.5, duration: 5.4, size: 4 },
  { top: "39%", x: "83%", delay: 1.2, duration: 6.2, size: 3 },
  { top: "58%", x: "90%", delay: 0.9, duration: 5.6, size: 5 },
  { top: "73%", x: "86%", delay: 1.6, duration: 6.5, size: 3 },
];

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function trackCallClick() {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "click_call", {
      event_category: "CTA",
      event_label: "Call Expert",
    });
  }
}

type Locale = "en" | "es";

const heroCopy = {
  en: {
    alert: "Stay visible as search evolves — or risk being overlooked",
    title: "We build websites that rank on Google and get found by customers",
    description:
      "Modern, high-performing websites designed to bring in customers, rank in Google search, and be clearly understood by modern search systems.",
    location:
      "Based in Columbia, SC - helping local businesses improve visibility and attract more customers",
    primaryCta: "Get Your Free Visibility Report →",
    primaryHref: "/free-appraisal",
    callLabel: "Call (803) 386-1672",
    trustPoints: ["No commitment", "Takes 2 minutes", "Clear next steps"],
    footer:
      "Built for real-world search behavior - helping your business get found, attract customers, and grow.",
    mobileCallLabel: "Call Now",
    mobilePrimaryLabel: "Get Report",
  },
  es: {
    alert: "Construimos páginas web que aparecen en Google y le traen más clientes",
    title: "Páginas modernas y de alto rendimiento, diseñadas para atraer clientes, posicionarse en Google y ser entendidas claramente por los sistemas de búsqueda actuales.",
    description: " Desde Columbia, SC — trabajamos con usted para que su negocio se vea más, atraiga clientes y crezca",
    location: "",
    primaryCta: "Reciba su reporte de visibilidad gratis →",
    primaryHref: "/es/free-appraisal",
    callLabel: "Llame al (803) 386-1672",
    trustPoints: ["• Sin compromiso", "Le toma 2 minutos", "Pasos claros a seguir"],
    footer: "Diseñado para cómo las personas buscan hoy. Para que su negocio sea encontrado, atraiga clientes y crezca.",
    mobileCallLabel: "Llamar",
    mobilePrimaryLabel: "Ver reporte",
  },
} as const;

export default function PrimaryHeroShowcase({ locale = "en" }: { locale?: Locale }) {
  const copy = heroCopy[locale];

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031227_0%,#071a35_52%,#0a2342_100%)] px-0 pb-32 pt-8 text-white sm:pb-28 sm:pt-10 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_52%,rgba(245,200,76,0.11),transparent_26%),radial-gradient(circle_at_88%_48%,rgba(245,200,76,0.10),transparent_26%),linear-gradient(180deg,rgba(3,9,18,0.52)_0%,rgba(3,9,18,0.64)_100%)]" />

      <div className="pointer-events-none absolute inset-0">
        {sideDots.map((dot, index) => (
          <motion.span
            key={`side-dot-${index}`}
            className="absolute rounded-full bg-[#f5c84c]/55 shadow-[0_0_14px_rgba(245,200,76,0.45)]"
            style={{ top: dot.top, left: dot.x, width: dot.size, height: dot.size }}
            animate={{
              y: [0, -10, 6, 0],
              x: [0, 2, -2, 0],
              opacity: [0.35, 0.75, 0.5, 0.35],
            }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:min-h-130 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-14">
          <div className="mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left">
            <div className="animate-fadeUp delay-1 mb-6 mx-auto flex max-w-md flex-nowrap items-center justify-center gap-2 rounded-[28px] border border-[#f5c84c] bg-[#f5c84c]/10 px-4 py-3 text-center text-xs font-semibold text-white sm:text-sm lg:mx-0 lg:max-w-xl lg:justify-start">
              <AlertCircle className="h-4 w-4 shrink-0 text-[#f5c84c]" />
              {locale === "es" ? (
                <span className="leading-snug uppercase whitespace-nowrap">Construimos páginas web que aparecen en Google y le traen más clientes</span>
              ) : (
                <span className="leading-snug uppercase">{copy.alert}</span>
              )}
            </div>

            <h1 className="animate-fadeUp delay-1 mt-4 text-2xl font-medium leading-tight tracking-tight text-[#f5c84c] sm:text-5xl lg:text-6xl">
                {locale === "en" ? (
                  <>
                    We build websites that rank on <span className="text-[#f5c84c]">Google</span> and get found by customers
                  </>
                ) : (
                  <>
                    Construimos las páginas web que aparecen en <span className="text-[#f5c84c]">Google</span> y ayudan a que sus clientes se encuentren
                  </>
                )}
            </h1>

            <p className="animate-fadeUp delay-2 mt-5 text-sm text-white/75 sm:mt-8 sm:text-xl lg:max-w-2xl">
                {copy.description}
            </p>

              <p className="animate-fadeUp delay-3 mt-4 text-xs text-white/45 sm:text-sm lg:max-w-none lg:whitespace-nowrap">
                {copy.location}
              </p>

            <div className="animate-fadeUp delay-5 mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
              <Link
                href={copy.primaryHref}
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#f5c84c] px-6 py-3 text-base font-semibold text-black no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 sm:w-auto sm:px-7 sm:py-4 sm:text-lg"
              >
                  <span>{copy.primaryCta}</span>
              </Link>

              <a
                href="tel:+18033861672"
                onClick={trackCallClick}
                  className="inline-flex w-full items-center justify-center rounded-full border border-[#f5c84c] px-6 py-3 text-base font-semibold text-[#f5c84c] no-underline transition-all duration-300 hover:bg-[#f5c84c]/8 sm:w-auto sm:py-4 sm:text-lg"
              >
                  <span>{copy.callLabel}</span>
              </a>
            </div>

              <div className="mt-6 space-y-1 text-sm text-white/55 lg:max-w-xs">
                {copy.trustPoints.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>

              <p className="mt-8 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-lg">
                {copy.footer}
            </p>
          </div>

          <motion.div
            className="relative mx-auto mt-8 w-full max-w-40 sm:max-w-56 lg:mt-0 lg:max-w-90 lg:translate-x-8 lg:justify-self-end lg:self-start xl:translate-x-12"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="absolute inset-4 rounded-full bg-[#f5c84c]/14 blur-3xl" />
            <div className="absolute inset-x-10 inset-y-8 rounded-full bg-[#0a2342]/30 blur-2xl" />

            <div className="relative overflow-hidden rounded-[40px]">
              <video
                className="block aspect-square w-full rounded-4xl object-cover opacity-95 shadow-[0_18px_60px_rgba(0,0,0,0.22)] lg:rounded-[40px]"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/logos/My%20cube.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 z-999 flex w-full md:hidden">
        <a
          href="tel:+18033861672"
          onClick={trackCallClick}
          className="flex-1 bg-black px-3 py-3 text-center font-semibold text-white no-underline"
        >
          📞 {copy.mobileCallLabel}
        </a>
        <Link
          href={copy.primaryHref}
          className="flex-1 bg-[#f5c84c] px-3 py-3 text-center font-semibold text-black no-underline"
        >
          {copy.mobilePrimaryLabel}
        </Link>
      </div>
    </section>
  );
}
