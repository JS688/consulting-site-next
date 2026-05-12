"use client";

import Link from "next/link";
import {
  BrainCircuit,
  CheckCircle2,
  Clock3,
  MapPin,
  MessageCircleMore,
  Search,
  ShieldCheck,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const sideDots = [
  { top: "18%", x: "9%", delay: 0.2, duration: 5.2, size: 4 },
  { top: "30%", x: "14%", delay: 1.1, duration: 6.1, size: 3 },
  { top: "46%", x: "10%", delay: 0.6, duration: 5.7, size: 5 },
  { top: "64%", x: "13%", delay: 1.4, duration: 6.4, size: 3 },
  { top: "24%", x: "88%", delay: 0.5, duration: 5.4, size: 4 },
  { top: "39%", x: "83%", delay: 1.2, duration: 6.2, size: 3 },
  { top: "58%", x: "90%", delay: 0.9, duration: 5.6, size: 5 },
  { top: "73%", x: "86%", delay: 1.6, duration: 6.5, size: 3 },
] as const;

const motionDots = [
  { top: "28%", left: "18%", delay: 0.8, duration: 6.4, size: 4 },
  { top: "42%", left: "8%", delay: 1.2, duration: 6.1, size: 6 },
  { top: "58%", left: "14%", delay: 0.35, duration: 5.6, size: 4 },
  { top: "74%", left: "12%", delay: 1.6, duration: 6.8, size: 5 },
] as const;

const modernSearchPillars = [
  {
    key: "seo",
    label: "SEO",
    description: "get found\non Google",
    mobileDescription: "get found on Google",
    icon: Search,
    iconClassName: "text-[#f5c84c]",
    accentClassName: "bg-[#f5c84c]",
  },
  {
    key: "aeo",
    label: "AEO",
    description: "be the answer\nin AI search",
    mobileDescription: "be the answer in AI search",
    icon: MessageCircleMore,
    iconClassName: "text-[#c97cff]",
    accentClassName: "bg-[#c97cff]",
  },
  {
    key: "geo",
    label: "GEO",
    description: "be the trusted source for AI",
    icon: BrainCircuit,
    iconClassName: "text-[#2ce3c8]",
    accentClassName: "bg-[#2ce3c8]",
  },
] as const;

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
    alert: "Be Found. Be Understood. Be Chosen.",
    description:
      "We create modern websites — or upgrade your existing one — so customers can find you, understand your value, and choose your business across Google and today's AI tools",
    descriptionSuffix: "",
    descriptionFollowup: "",
    location: "Based in",
    locationHighlight: "Columbia, SC",
    locationSuffix: "helping local businesses attract more customers",
    primaryCta: "See Your Visibility Score",
    primaryHref: "https://calendly.com/jultech-ai/new-meeting-1",
    callLabel: "Call (803) 386-1672",
    trustPoints: ["No commitment", "Takes 2 minutes", "Clear next steps"],
  },
  es: {
    alert: "Construimos páginas web que aparecen en Google y le traen más clientes",
    description:
      " Desde Columbia, SC — trabajamos con usted para que su negocio se vea más, atraiga clientes y crezca",
    descriptionSuffix: "",
    descriptionFollowup: "",
    location: "",
    primaryCta: "Reciba su reporte de visibilidad gratis →",
    primaryHref: "/es/free-appraisal",
    callLabel: "Llame al (803) 386-1672",
    trustPoints: ["Sin compromiso", "Le toma 2 minutos", "Pasos claros a seguir"],
  },
} as const;

const trustPointIcons = {
  "No commitment": ShieldCheck,
  "Takes 2 minutes": Clock3,
  "Clear next steps": CheckCircle2,
} as const;

const heroContentVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

const heroItemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
} as const;

const heroFrameworkVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: 0.08, ease: "easeOut" },
  },
} as const;

function VideoHero({ mobile = false }: { mobile?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = (reducedMotion: boolean) => {
      if (!videoRef.current) return;
      if (reducedMotion) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    };
    apply(mq.matches);
    const handler = (e: MediaQueryListEvent) => apply(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <video
      ref={videoRef}
      aria-hidden="true"
      className={
        mobile
          ? "block h-auto w-full scale-[1.02] object-contain object-center opacity-95"
          : "block h-auto w-full scale-[1.03] object-contain object-center opacity-95"
      }
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/animat-hero-poster.jpg"
    >
      <source src="/animat-hero-opt.webm" type="video/webm" />
      <source src="/animat-hero-opt.mp4" type="video/mp4" />
    </video>
  );
}

function HeroAnimationSurface({ mobile = false }: { mobile?: boolean }) {
  return (
    <motion.div
      className={
        mobile
          ? "relative flex w-full max-w-[18rem] items-start justify-center"
          : "relative -right-12 mt-6 flex w-full max-w-[68rem] items-start justify-end xl:-right-14 xl:mt-8 xl:max-w-[74rem]"
      }
      animate={mobile ? { y: [-6, 6, -6] } : { y: [-8, 8, -8], scale: [1, 1.02, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      <div
        className={
          mobile
            ? "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(245,200,76,0.14),transparent_46%)]"
            : "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_46%,rgba(245,200,76,0.14),transparent_44%)]"
        }
      />

      <div
        className={
          mobile
            ? "relative z-10 w-full overflow-hidden rounded-[30px] bg-transparent"
            : "relative z-10 w-full overflow-hidden rounded-[42px] bg-transparent"
        }
      >
        <VideoHero mobile={mobile} />

        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_46%,rgba(3,18,39,0.16)_72%,rgba(3,18,39,0.42)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,18,39,0.14)_0%,transparent_12%,transparent_82%,rgba(3,18,39,0.3)_100%)]" />

        <div className="pointer-events-none absolute inset-0">
          {motionDots.map((dot, index) => (
            <motion.span
              key={`motion-dot-${index}`}
              className="absolute rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.8)]"
              style={{ top: dot.top, left: dot.left, width: dot.size, height: dot.size }}
              animate={{
                x: mobile ? [0, 110, 220] : [0, 220, 420],
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
  );
}

export default function PrimaryHeroShowcase({ locale = "en" }: { locale?: Locale }) {
  const copy = heroCopy[locale];
  const isEnglish = locale === "en";

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#031227_0%,#071a35_52%,#0a2342_100%)] px-0 pb-14 pt-8 text-white sm:pb-28 sm:pt-10 md:pb-20">
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

      <div className="relative mx-auto max-w-7xl px-6 lg:-translate-x-2 xl:-translate-x-3">
        <div
          className={
            isEnglish
              ? "grid items-center justify-items-center gap-12 lg:min-h-130 lg:grid-cols-[minmax(0,1fr)_minmax(460px,660px)] lg:items-start lg:justify-items-start lg:gap-8"
              : "grid items-center justify-items-center gap-12 lg:min-h-130 lg:justify-items-start"
          }
        >
          <motion.div
            className={isEnglish ? "mx-auto max-w-4xl text-center lg:-ml-4 lg:mx-0 lg:max-w-190 lg:text-left xl:-ml-6" : "mx-auto max-w-4xl text-center lg:mx-0 lg:max-w-3xl lg:text-left"}
            variants={heroContentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
          >
            <motion.div
              className="mb-6 mx-auto inline-flex w-auto max-w-full items-center justify-center gap-2 rounded-full border border-[#f5c84c]/70 bg-[#f5c84c]/6 px-3 py-2 text-center text-[11px] font-semibold text-white sm:gap-3 sm:px-5 sm:py-3 sm:text-sm lg:mx-0 lg:justify-start"
              variants={heroItemVariants}
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#f5c84c]/70 text-[#f5c84c]">
                <Star className="h-2.5 w-2.5 fill-current" />
              </span>
              {locale === "es" ? (
                <span className="leading-snug uppercase">Construimos páginas web que aparecen en Google y le traen más clientes</span>
              ) : (
                <>
                  <span className="whitespace-nowrap leading-none uppercase tracking-[0.05em] text-[#f5c84c] sm:hidden">
                    <span className="text-[9px]">{copy.alert}</span>
                    <span className="relative -top-[0.45em] ml-0.5 text-[0.48rem] tracking-[0.05em]">TM</span>
                  </span>
                  <span className="hidden leading-none uppercase tracking-[0.08em] text-[#f5c84c] sm:inline">
                    {copy.alert}
                    <span className="relative -top-[0.45em] ml-1 text-[0.6em] tracking-[0.08em]">TM</span>
                  </span>
                </>
              )}
            </motion.div>

            <motion.h1 className="mt-2 text-4xl font-medium leading-[0.9] tracking-tight text-white sm:text-5xl sm:leading-[0.9] lg:text-6xl" variants={heroItemVariants}>
              {locale === "en" ? (
                <>
                  <span className="block">We build websites</span>
                  <span className="block">that bring you</span>
                  <span className="block text-[#f5c84c]">more customers</span>
                </>
              ) : (
                <>
                  Construimos las paginas web que aparecen en <span className="text-[#f5c84c]">Google</span> y ayudan a que sus clientes se encuentren
                </>
              )}
            </motion.h1>

            <motion.p
              className={
                isEnglish
                  ? "mt-4 text-sm text-white/75 sm:mt-6 sm:text-xl lg:max-w-4xl lg:text-[20px] lg:leading-8"
                  : "animate-fadeUp delay-2 mt-7 text-sm text-white/75 sm:mt-10 sm:text-xl lg:max-w-2xl"
              }
              variants={heroItemVariants}
            >
              {isEnglish ? (
                <>
                  <span className="sm:hidden">
                    <span className="block">We create or upgrade websites for Google and AI</span>
                    <span className="block">so customers find, trust, and choose your business</span>
                  </span>
                  <span className="hidden sm:inline">{copy.description}</span>
                </>
              ) : (
                copy.description
              )}
              {copy.descriptionSuffix ? (
                <>
                  <br />
                  <span className="whitespace-nowrap">{copy.descriptionSuffix}</span>
                </>
              ) : null}
            </motion.p>

            {copy.descriptionFollowup ? (
              <motion.p className="mt-4 text-sm text-white/50 sm:text-base lg:max-w-2xl" variants={heroItemVariants}>
                {copy.descriptionFollowup}
              </motion.p>
            ) : null}

            {isEnglish ? (
              <motion.div
                className="mx-auto mt-5 w-full max-w-190 overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] shadow-[0_18px_48px_rgba(0,0,0,0.18)] lg:mx-0 lg:mt-7 lg:rounded-[28px]"
                variants={heroFrameworkVariants}
              >
                <div className="flex items-center gap-2 px-3 py-1 text-center sm:gap-3 sm:px-5 sm:py-0">
                  <div className="h-px flex-1 bg-white/10" />
                  <div className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#f5c84c] sm:text-[11px]">
                    Built for modern search
                  </div>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                <div className="grid gap-0 px-3 pb-0.5 pt-0 sm:px-5 sm:pb-1.5 sm:pt-1 md:grid-cols-3">
                  {modernSearchPillars.map((pillar, index) => {
                    const Icon = pillar.icon;

                    return (
                      <motion.div
                        key={pillar.key}
                        className={`border-white/10 px-3 py-1.5 text-left first:pl-2 last:pr-2 md:px-6 md:py-2 ${index < modernSearchPillars.length - 1 ? "border-b md:border-b-0 md:border-r" : ""}`}
                        whileHover={{ y: -6, scale: 1.02, boxShadow: "0 14px 34px rgba(245, 200, 76, 0.12)" }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      >
                        <div className="grid grid-cols-[96px_minmax(0,1fr)] items-center gap-3 md:block">
                          <div className="flex justify-center md:flex md:items-center md:gap-4">
                            <div className={`flex h-12 w-12 items-center justify-center rounded-full border border-current/35 bg-white/3 ${pillar.iconClassName} md:h-14 md:w-14`}>
                              <Icon className="h-6 w-6 md:h-7 md:w-7" />
                            </div>
                            <div className="hidden min-w-19 md:block md:min-w-0">
                              <div className="text-[1.15rem] font-semibold tracking-tight text-white sm:text-[1.3rem] md:text-[1.45rem]">
                                {pillar.label}
                              </div>
                              <div className={`mt-2 h-0.75 w-9 rounded-full ${pillar.accentClassName}`} />
                            </div>
                          </div>
                          <div className="min-w-0">
                            <div className="md:hidden">
                              <div className="text-[1.05rem] font-semibold tracking-tight text-white sm:text-[1.3rem]">
                                {pillar.label}
                              </div>
                              <div className={`mt-1.5 h-0.5 w-8 rounded-full ${pillar.accentClassName}`} />
                            </div>
                            <p className="mt-1.5 text-left text-[14px] leading-tight text-white/78 md:mt-2 md:mx-auto md:max-w-42 md:text-center md:text-[16px] md:leading-[1.35]">
                              <span className="md:hidden">{"mobileDescription" in pillar ? pillar.mobileDescription : pillar.description}</span>
                              <span className="hidden whitespace-pre-line md:inline">{pillar.description}</span>
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ) : null}

            {isEnglish ? (
              <motion.div
                className="relative mt-5 flex w-full justify-center lg:hidden"
                variants={heroFrameworkVariants}
              >
                <div className="pointer-events-none absolute inset-y-3 left-1/2 w-full max-w-76 -translate-x-1/2 rounded-[30px] bg-[radial-gradient(circle_at_50%_50%,rgba(13,43,79,0.72)_0%,rgba(10,35,66,0.42)_42%,transparent_82%)]" />
                <div className="absolute left-1/2 top-0 h-28 w-28 -translate-x-1/2 rounded-full bg-yellow-400/12 blur-3xl" />
                <div className="absolute bottom-1 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-cyan-400/12 blur-3xl" />
                <HeroAnimationSurface mobile />
              </motion.div>
            ) : null}

            <motion.div className="mt-12 flex flex-col items-stretch justify-center gap-4 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start" variants={heroItemVariants}>
              <Link
                href={copy.primaryHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f5c84c] px-5 py-2.5 text-sm font-semibold text-black no-underline transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              >
                <span>{copy.primaryCta}</span>
              </Link>

              <a
                href="tel:+18033861672"
                onClick={trackCallClick}
                className="inline-flex w-full items-center justify-center rounded-full border border-[#f5c84c] px-5 py-2.5 text-sm font-semibold text-[#f5c84c] no-underline transition-all duration-300 hover:bg-[#f5c84c]/8 sm:w-auto sm:px-6 sm:py-3 sm:text-base"
              >
                <span>{copy.callLabel}</span>
              </a>
            </motion.div>

            <motion.div
              className={
                isEnglish
                  ? "mt-2 flex flex-col items-center gap-1.5 text-[10px] tracking-wide text-white/65 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 sm:text-[11px] lg:justify-start"
                  : "mt-3 flex items-center justify-center gap-2 whitespace-nowrap text-xs text-white/55 sm:text-sm lg:justify-start"
              }
              variants={heroItemVariants}
            >
              {copy.trustPoints.map((item, index) => (
                <div key={item} className="flex items-center gap-2">
                  {isEnglish ? (
                    (() => {
                      const Icon = trustPointIcons[item as keyof typeof trustPointIcons] ?? CheckCircle2;

                      return <Icon className="h-4 w-4 text-white/70" />;
                    })()
                  ) : index > 0 ? <span className="text-[#f5c84c]/70">•</span> : null}
                  <span>{item}</span>
                </div>
              ))}
            </motion.div>

            {copy.location ? (
              isEnglish ? (
                <motion.div className="mt-5 flex items-center justify-center gap-3 text-sm tracking-wide text-white/65 lg:justify-start" variants={heroItemVariants}>
                  <MapPin className="h-4 w-4 text-yellow-300" />
                  <span className="[font-variant-caps:all-small-caps]">
                    {copy.location}{" "}
                    <span className="text-[#f5c84c]">{copy.locationHighlight}</span>
                    {" — "}
                    {copy.locationSuffix}
                  </span>
                </motion.div>
              ) : (
                <p className="animate-fadeUp delay-3 mt-4 text-xs font-medium uppercase tracking-[0.14em] text-white/45 sm:text-sm lg:max-w-none lg:whitespace-nowrap">
                  {copy.location}
                </p>
              )
            ) : null}
          </motion.div>

          {isEnglish ? (
            <motion.div
              className="relative hidden w-full justify-center lg:mt-0 lg:flex lg:self-start lg:justify-end lg:pl-20"
              initial={{ opacity: 0, x: 18, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
            >
              <div className="pointer-events-none absolute inset-y-4 -right-18 w-[118%] rounded-l-[88px] bg-[radial-gradient(circle_at_78%_50%,rgba(13,43,79,0.92)_0%,rgba(10,35,66,0.78)_28%,rgba(7,26,53,0.36)_56%,transparent_80%)]" />
              <div className="pointer-events-none absolute inset-y-8 -right-2 w-28 bg-[linear-gradient(90deg,rgba(7,26,53,0)_0%,rgba(7,26,53,0.58)_52%,rgba(7,26,53,0.92)_82%,rgba(7,26,53,1)_100%)] blur-2xl" />
              <div className="absolute -right-10 top-2 h-72 w-72 rounded-full bg-yellow-400/12 blur-3xl" />
              <div className="absolute bottom-8 -right-16 h-60 w-60 rounded-full bg-cyan-400/12 blur-3xl" />

              <HeroAnimationSurface />
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
