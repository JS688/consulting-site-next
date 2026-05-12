"use client";

import type { MouseEvent, ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { Pacifico } from "next/font/google";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

function SignatureJT({ className = "" }: { className?: string }) {
  return (
    <span className={`${pacifico.className} inline-flex items-center text-[1.16em] leading-none ${className}`} aria-hidden="true">
      <span className="text-[#c9a64d]">J</span>
      <span className="-ml-1 text-white">T</span>
    </span>
  );
}

function HeaderBrandWordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-baseline leading-none ${className}`}>
      <span className="text-[#c9a64d]">Jul</span>
      <span className="text-white">Tech</span>
      <sup className="ml-0.5 align-super text-[0.52em] font-medium uppercase tracking-[0.08em] text-white">TM</sup>
    </span>
  );
}

const LOCALIZED_PATHS: Record<string, string> = {
  "/": "/es",
  "/about": "/es/about",
  "/services": "/es/services",
  "/contact": "/es/contact",
  "/case-studies": "/es/case-studies",
  "/blog": "/es/blog",
  "/strategy-call/15-min": "/es/strategy-call/15-min",
  "/strategy-call/1-hour": "/es/strategy-call/1-hour",
  "/strategy-call/1-hour/checkout": "/es/strategy-call/1-hour/checkout",
  "/one-hour-consultation": "/es/one-hour-consultation",
  "/free-appraisal": "/es/free-appraisal",
  "/book": "/es/book",
  "/pay": "/es/pay",
  "/payment-complete": "/es/payment-complete",
  "/booking-complete": "/es/booking-complete",
  "/web-design": "/es/web-design",
  "/seo-services": "/es/seo-services",
  "/aeo-services": "/es/aeo-services",
  "/geo-services": "/es/geo-services",
  "/multilingual-web-design": "/es/multilingual-web-design",
  "/ai-visibility": "/es/ai-visibility",
  "/es": "/",
  "/es/about": "/about",
  "/es/services": "/services",
  "/es/contact": "/contact",
  "/es/case-studies": "/case-studies",
  "/es/blog": "/blog",
  "/es/strategy-call/15-min": "/strategy-call/15-min",
  "/es/strategy-call/1-hour": "/strategy-call/1-hour",
  "/es/strategy-call/1-hour/checkout": "/strategy-call/1-hour/checkout",
  "/es/one-hour-consultation": "/one-hour-consultation",
  "/es/free-appraisal": "/free-appraisal",
  "/es/book": "/book",
  "/es/pay": "/pay",
  "/es/payment-complete": "/payment-complete",
  "/es/booking-complete": "/booking-complete",
  "/es/web-design": "/web-design",
  "/es/seo-services": "/seo-services",
  "/es/aeo-services": "/aeo-services",
  "/es/geo-services": "/geo-services",
  "/es/multilingual-web-design": "/multilingual-web-design",
  "/es/ai-visibility": "/ai-visibility",
};

function getAlternatePath(pathname: string | null) {
  if (!pathname) {
    return { en: "/", es: "/es" };
  }

  if (LOCALIZED_PATHS[pathname]) {
    return pathname.startsWith("/es")
      ? { en: LOCALIZED_PATHS[pathname], es: pathname }
      : { en: pathname, es: LOCALIZED_PATHS[pathname] };
  }

  if (pathname.startsWith("/es/")) {
    return { en: pathname.slice(3) || "/", es: pathname };
  }

  return { en: pathname, es: `/es${pathname === "/" ? "" : pathname}` };
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isSpanish = pathname === "/es" || pathname?.startsWith("/es/");
  const alternatePaths = getAlternatePath(pathname);
  const homeHref = isSpanish ? "/es" : "/";
  const homeAnchorHref = isSpanish ? "/es" : "#home";
  const strategyCallHref = isSpanish ? "/es/strategy-call/15-min" : "/strategy-call/15-min";
  const navItems = isSpanish
    ? [
        { href: "/es", label: "Inicio" },
        // { href: "/es", label: "Enfoque" }, // Removed as requested
        { href: "/es/services", label: "Servicios" },
        { href: "/es/about", label: "Nosotros" },
        { href: "/es/ai-visibility", label: "Visibilidad AI" },
        { href: "/es/blog", label: "Blog" },
        { href: "/es/contact", label: "Contacto" },
        { href: "/es/pay", label: "Pagos" },
      ]
    : [
        { href: homeAnchorHref, label: "Home" },
        { href: "#packages", label: "Services" },
        { href: "/ai-visibility", label: "AI Visibility" },
        { href: "/about", label: "About" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
        { href: "/pay", label: "Payments" },
      ];

  const isActiveNavItem = (href: string) => {
    if (!pathname || href.startsWith("#")) {
      return false;
    }

    return pathname === href;
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }

    const sectionOffsets: Record<string, number> = {
      services: -96,
      "growth-engine": -96,
      packages: -96,
    };
    const yOffset = sectionOffsets[id] ?? -120;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick =
    (href: string, afterClick?: () => void) =>
    (event: MouseEvent<HTMLAnchorElement>) => {
      if (!href.startsWith("#")) {
        afterClick?.();
        return;
      }

      event.preventDefault();
      afterClick?.();

      if (pathname !== "/") {
        window.location.href = `/${href}`;
        return;
      }

      scrollToSection(href.slice(1));
    };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111111]/95 backdrop-blur-md">
          <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-10">
          <div className="flex items-center gap-4">
            <Link
              href={homeHref}
              className="flex items-center gap-2"
              aria-label="JulTech homepage"
            >
              <SignatureJT className="text-base sm:text-lg" />
              <HeaderBrandWordmark className="text-lg font-semibold tracking-tight" />
            </Link>
          </div>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick(item.href)}
                className={`relative text-sm font-normal transition hover:text-white ${isActiveNavItem(item.href) ? "text-[#e2bf61]" : "text-white/78"}`}
              >
                {item.label}
                {isActiveNavItem(item.href) ? <span className="absolute inset-x-0 -bottom-4.5 h-0.5 bg-[#e2bf61]" aria-hidden="true" /> : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 border-l border-white/10 pl-3 sm:flex lg:order-2">
              <Link
                href={alternatePaths.en}
                aria-label="Switch to English"
                aria-current={!isSpanish ? "true" : undefined}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${!isSpanish ? "border border-yellow-400/35 text-yellow-400" : "border border-white/10 text-white/45 hover:text-white/70"}`}
              >
                EN
              </Link>
              <Link
                href={alternatePaths.es}
                aria-label="Cambiar a español"
                aria-current={isSpanish ? "true" : undefined}
                className={`rounded-md px-2.5 py-1 text-xs font-semibold transition ${isSpanish ? "border border-yellow-400/35 text-yellow-400" : "border border-white/10 text-white/45 hover:text-white/70"}`}
              >
                ES
              </Link>
            </div>

            <div className="hidden lg:block lg:order-1">
              <Link
                href={strategyCallHref}
                className="rounded-full border border-yellow-400/35 bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-yellow-300"
              >
                {isSpanish ? "Llamada estrategica" : "Call an Expert"}
              </Link>
            </div>

            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white lg:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70"
            />

            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.32, ease: "easeOut" }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={0.12}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120) {
                  setOpen(false);
                }
              }}
              className="absolute inset-0 flex flex-col bg-[#111111] px-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-[calc(env(safe-area-inset-top)+0.75rem)] shadow-2xl"
            >
              <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-white/15" />

              <div className="flex items-center justify-between">
                <Link href={homeHref} onClick={() => setOpen(false)} aria-label="JulTech homepage" className="flex items-center gap-2">
                  <SignatureJT className="text-base" />
                  <HeaderBrandWordmark className="text-lg font-semibold tracking-tight" />
                </Link>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/10 p-2 text-white/80 transition hover:border-white/20 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="mt-4 grid gap-1.5 pb-2">
                {navItems.map((item) => (
                  <MobileLink
                    key={item.href}
                    href={item.href}
                    onClick={handleNavClick(item.href, () => setOpen(false))}
                    active={isActiveNavItem(item.href)}
                  >
                    {item.label}
                  </MobileLink>
                ))}
              </nav>

              <div className="mt-4 shrink-0">
              <div className="flex gap-2">
                <Link
                  href={alternatePaths.en}
                  onClick={() => setOpen(false)}
                  aria-label="Switch to English"
                  aria-current={!isSpanish ? "true" : undefined}
                  className={`flex-1 rounded-md px-3 py-2 text-center text-xs font-semibold transition sm:text-sm ${!isSpanish ? "border border-yellow-400/40 text-yellow-400" : "border border-white/10 text-white/45 hover:text-white"}`}
                >
                  EN
                </Link>
                <Link
                  href={alternatePaths.es}
                  onClick={() => setOpen(false)}
                  aria-label="Cambiar a español"
                  aria-current={isSpanish ? "true" : undefined}
                  className={`flex-1 rounded-md px-3 py-2 text-center text-xs font-semibold transition sm:text-sm ${isSpanish ? "border border-yellow-400/40 text-yellow-400" : "border border-white/10 text-white/45 hover:text-white"}`}
                >
                  ES
                </Link>
              </div>

              <Link
                href={strategyCallHref}
                onClick={() => setOpen(false)}
                className="mt-4 flex items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-yellow-300"
              >
                {isSpanish ? "Llamada estrategica" : "Call an Expert"}
              </Link>
              {!isSpanish && (
                <a
                  href="tel:+18033861672"
                  onClick={() => setOpen(false)}
                  className="mt-2 flex items-center justify-center gap-1.5 text-xs text-white/45 hover:text-white/70 transition"
                >
                  📞 (803) 386-1672
                </a>
              )}

              <p className="mt-3 text-xs leading-5 text-white/40 sm:text-sm sm:leading-6">
                {isSpanish ? "Estructura clara. Ejecucion premium." : "Clear structure. Premium execution."}
              </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({
  href,
  onClick,
  children,
  active = false,
}: {
  href: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  children: ReactNode;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex items-center justify-between rounded-xl border px-4 py-3 text-sm transition ${active ? "border-[#e2bf61]/40 bg-[#e2bf61]/10 text-[#e2bf61]" : "border-white/10 bg-white/3 text-white/80 hover:border-white/20 hover:bg-white/6 hover:text-white"}`}
    >
      <span>{children}</span>
    </Link>
  );
}
