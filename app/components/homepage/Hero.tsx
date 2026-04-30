"use client";

import { CircleX, Sparkles, TrendingUp, User } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const motionDots = [
  { top: "28%", left: "18%", delay: 0.8, duration: 6.4, size: 4 },
  { top: "42%", left: "8%", delay: 1.2, duration: 6.1, size: 6 },
  { top: "58%", left: "14%", delay: 0.35, duration: 5.6, size: 4 },
  { top: "74%", left: "12%", delay: 1.6, duration: 6.8, size: 5 },
];

type Locale = "en" | "es";

const copy = {
  en: {
    eyebrow: "WHY IT MATTERS",
    heading: "Search is changing - and most businesses aren't keeping up",
    description:
      "Potential customers do not just search anymore - they ask Google and AI who to trust, hire, and buy from.",
    bullets: [
      "Your website won't rank on Google",
      "It won't show up in AI results",
      "Customers won't find you when they're ready to buy",
      "Your competitors will capture that reach",
    ],
    primaryCta: "See Where You Stand →",
    primaryHref: "/free-appraisal",
    secondaryCta: "Talk to an Expert",
    footer: "No commitment. Takes 2 minutes.",
  },
  es: {
    eyebrow: "POR QUE IMPORTA",
    heading: "La busqueda esta cambiando - y la mayoria de los negocios no se esta adaptando",
    description:
      "Los clientes potenciales ya no solo buscan - le preguntan a Google y a la IA en quien confiar, a quien contratar y a quien comprar.",
    bullets: [
      "Tu sitio web no va a posicionarse en Google",
      "No va a aparecer en resultados de IA",
      "Los clientes no te van a encontrar cuando esten listos para comprar",
      "Tus competidores van a quedarse con ese alcance",
    ],
    primaryCta: "Ve donde estas hoy →",
    primaryHref: "/es/free-appraisal",
    secondaryCta: "Habla con un experto",
    footer: "Sin compromiso. Toma 2 minutos.",
  },
} as const;

export default function Hero({ locale = "en" }: { locale?: Locale }) {
  const localized = copy[locale];

  return (
    <section id="why" className="relative overflow-hidden bg-black px-6 py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_34%,rgba(255,209,74,0.08),transparent_22%),radial-gradient(circle_at_50%_76%,rgba(255,209,74,0.05),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 inline-flex items-center rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-2 text-sm uppercase tracking-[0.18em] text-yellow-300">
            {localized.eyebrow}
          </p>

          <h2 className="mb-6 text-xl font-semibold leading-tight text-white sm:text-3xl md:text-5xl">
            {localized.heading}
          </h2>

          <p className="mb-8 text-sm text-white/70 sm:text-base">
            {localized.description}
          </p>

          <div className="mb-8 grid gap-3 text-white/60">
            <div className="flex items-start gap-3">
              <CircleX className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />
              <p className="text-yellow-300">{localized.bullets[0]}</p>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-sky-400" />
              <p className="text-sky-300">{localized.bullets[1]}</p>
            </div>

            <div className="flex items-start gap-3">
              <User className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
              <p className="text-green-300">{localized.bullets[2]}</p>
            </div>

            <div className="flex items-start gap-3">
              <TrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-purple-400" />
              <p className="text-purple-300">{localized.bullets[3]}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href={localized.primaryHref}
              className="inline-flex w-full items-center justify-center rounded-full bg-yellow-400 px-6 py-3 font-medium text-black transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/30 sm:w-auto"
            >
              {localized.primaryCta}
            </Link>

            <a
              href="tel:+18033861672"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/20 px-6 py-3 text-white transition-all duration-300 hover:border-yellow-400 hover:text-yellow-400 sm:w-auto"
            >
              {localized.secondaryCta}
            </a>
          </div>

          <p className="mt-4 text-[11px] text-white/50 sm:text-xs">{localized.footer}</p>
        </div>

        <div className="relative flex justify-center md:justify-end">
          <motion.div
            className="relative flex w-full max-w-72 items-center justify-center sm:max-w-80 md:max-w-140"
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl animate-glow sm:h-80 sm:w-80 md:h-100 md:w-100" />

            <div className="relative z-10 w-full animate-float overflow-hidden rounded-[36px] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <video
                className="block h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
              >
                <source src="/logos/try 2.mp4" type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute inset-0">
                {motionDots.map((dot, index) => (
                  <motion.span
                    key={`motion-dot-${index}`}
                    className="absolute rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.8)]"
                    style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
                    animate={{
                      x: [0, 220, 420],
                      y: [0, -6, 10],
                      opacity: [0, 0.95, 0],
                      scale: [0.65, 1.1, 0.75],
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}