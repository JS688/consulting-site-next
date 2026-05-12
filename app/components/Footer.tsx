"use client";

import type { ReactNode } from "react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Phone, Sparkles, MapPin } from "lucide-react";
import { CALENDLY_LINKS } from "@/lib/sessionLinks";

type FooterItem = {
  label: string;
  href: string;
  external?: boolean;
};

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

export default function Footer() {
  const pathname = usePathname();
  const isSpanish = pathname === "/es" || pathname?.startsWith("/es/");
  
  function SignatureJT({ className = "" }: { className?: string }) {
    return (
      <span className={`${pacifico.className} inline-flex items-center text-[1.16em] leading-none ${className}`} aria-hidden="true">
        <span className="text-[#c9a64d]">J</span>
        <span className="-ml-1 text-white">T</span>
      </span>
    );
  }
  
  function FooterBrandWordmark({ className = "" }: { className?: string }) {
    return (
      <span className={`inline-flex items-baseline leading-none ${className}`}>
        <span className="text-[#c9a64d]">JUL</span>
        <span className="text-white">TECH</span>
      </span>
    );
  }

  const services: FooterItem[] = [
    { label: "AI Visibility", href: isSpanish ? "/es/ai-visibility" : "/ai-visibility" },
    { label: "SEO Strategy", href: isSpanish ? "/es/seo-services" : "/seo-services" },
    { label: "Web Development", href: isSpanish ? "/es/web-design" : "/web-design" },
    { label: "AI Content Optimization", href: isSpanish ? "/es/aeo-services" : "/aeo-services" },
  ];

  const company: FooterItem[] = [
    { label: isSpanish ? "Nosotros" : "About", href: isSpanish ? "/es/about" : "/about" },
    { label: "Blog", href: isSpanish ? "/es/blog" : "/blog" },
    { label: isSpanish ? "Casos de Exito" : "Case Studies", href: "/case-studies" },
    { label: isSpanish ? "Contacto" : "Contact", href: isSpanish ? "/es/contact" : "/contact" },
  ];

  const homeHref = isSpanish ? "/es" : "/";
  const privacyHref = isSpanish ? "/es/legal/privacy" : "/legal/privacy";
  const termsHref = isSpanish ? "/es/legal/terms" : "/legal/terms";
  const accessibilityHref = isSpanish ? "/es/accessibility" : "/accessibility";
  const bookHref = CALENDLY_LINKS.short;
  const linkedinHref = "https://www.linkedin.com/in/julia-sokolsky/";

  const servicesLabel = isSpanish ? "SERVICIOS" : "SERVICES";
  const companyLabel = isSpanish ? "EMPRESA" : "COMPANY";
  const contactLabel = isSpanish ? "CONTACTO" : "CONTACT";
  const followLabel = isSpanish ? "Siguenos" : "Follow us";
  const privacyLabel = isSpanish ? "Privacidad" : "Privacy";
  const termsLabel = isSpanish ? "Terminos" : "Terms";

  return (
    <footer id="contact" className="w-full bg-[#070707] text-zinc-200">
      <div id="audit" className="relative -top-24" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 pb-4 pt-4 sm:px-6 lg:px-8 lg:pb-7 lg:pt-7">
        <div className="mb-4 h-px w-full bg-linear-to-r from-transparent via-[#c9a64d]/60 to-transparent md:mb-6" />

        <div className="grid grid-cols-2 gap-x-5 gap-y-6 md:grid-cols-[1.25fr_1fr_1fr_1.25fr] md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href={homeHref} className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white transition hover:text-white">
              <SignatureJT className="text-lg sm:text-xl" />
              <FooterBrandWordmark className="text-2xl font-semibold tracking-[0.03em] sm:text-[1.75rem]" />
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-300 md:mt-4 md:leading-7">
              {isSpanish ? (
                "Sitios web con IA que posicionan en Google y son recomendados por herramientas de IA."
              ) : (
                <>
                  <span className="inline md:block">AI-powered websites that </span>
                  <span className="inline md:block">rank on Google and </span>
                  <span className="inline md:block">get recommended by AI tools.</span>
                </>
              )}
            </p>
            <div className="mt-3 h-0.5 w-12 bg-[#c9a64d] md:mt-4 md:w-14" />
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a64d]">{servicesLabel}</p>
            <div className="text-sm">
              {services.map((item) => (
                <ServicesLink key={item.label} label={item.label} href={item.href} external={item.external} />
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a64d]">{companyLabel}</p>
            <div className="text-sm">
              {company.map((item) => (
                <ServicesLink key={item.label} label={item.label} href={item.href} external={item.external} />
              ))}
            </div>
          </div>

          <div className="hidden md:col-span-1 md:block">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a64d]">{contactLabel}</p>
              <div className="mt-2 h-px w-11 bg-[#c9a64d]/90" />
              <div className="mt-3 space-y-2 text-sm md:mt-4 md:space-y-2.5">
                <ContactLink href="mailto:ai@jul-tech.com" icon={<Mail className="h-4 w-4" />} label="ai@jul-tech.com" noWrap />
                <ContactLink href="tel:+18033861672" icon={<Phone className="h-4 w-4" />} label="(803) 386-1672" noWrap gapClassName="gap-1" />
              </div>

              <div className="mt-4">
                <a
                  href={bookHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-full max-w-56 items-center justify-center gap-1.5 rounded-full border border-[#c9a64d]/55 bg-[radial-gradient(circle_at_50%_45%,rgba(201,166,77,0.14),rgba(201,166,77,0.03)_62%,transparent_100%)] px-3 py-1.5 text-zinc-100 transition hover:border-[#c9a64d]/80 hover:bg-[#c9a64d]/8"
                >
                  <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#c9a64d]" />
                  <span className="text-sm font-semibold leading-snug tracking-[0.01em] whitespace-nowrap">
                    {isSpanish ? "Recibe tu auditoria gratis" : "Get Your Free Audit"}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#c9a64d] transition-transform group-hover:translate-x-0.5" />
                </a>
                <p className="mt-2 text-[11px] text-zinc-400">{isSpanish ? "Sin compromiso. 100% gratis." : "No obligation. 100% free."}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 space-y-4 md:hidden">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a64d]">{contactLabel}</p>
            <div className="mt-2 h-px w-11 bg-[#c9a64d]/90" />
            <div className="mt-3 space-y-2 text-sm text-zinc-300">
              <a href="mailto:ai@jul-tech.com" className="block transition hover:text-white">
                ai@jul-tech.com
              </a>
              <a href="tel:+18033861672" className="block transition hover:text-white">
                (803) 386-1672
              </a>
            </div>
            <p className="mt-3 text-sm text-zinc-400">Columbia, SC · Remote</p>
          </div>

          <div className="space-y-2">
            <a
              href={bookHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/20 px-3 py-1.5 text-xs font-medium tracking-[0.01em] text-zinc-200 transition hover:border-[#c9a64d]/80 hover:text-white"
            >
              {isSpanish ? "Recibe tu auditoria gratis" : "Get Your Free Audit"}
            </a>
            <p className="text-[11px] text-zinc-400">{isSpanish ? "Sin compromiso. 100% gratis." : "No obligation. 100% free."}</p>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-sm text-zinc-300">{followLabel}</span>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c9a64d] transition hover:text-white"
              aria-label="LinkedIn"
            >
              <span className="underline">LinkedIn</span>
            </a>
          </div>
        </div>

        <div className="mt-5 border-t border-white/10 pt-3 md:mt-6 md:pt-4">
          <div className="flex flex-col gap-2 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
            <p>© 2026 JulTech · All Rights Reserved</p>
            <div className="flex flex-wrap items-center gap-3">
              <Link href={privacyHref} className="transition hover:text-white">
                {privacyLabel}
              </Link>
              <span className="text-[#c9a64d]/65">·</span>
              <Link href={termsHref} className="transition hover:text-white">
                {termsLabel}
              </Link>
              <span className="text-[#c9a64d]/65">·</span>
              <Link href={accessibilityHref} className="transition hover:text-white">
                {isSpanish ? "Accesibilidad" : "Accessibility"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkProps = {
  label: string;
  href: string;
  external?: boolean;
};

function FooterLink({ label, href, external = false }: FooterLinkProps) {
  const className = "inline-flex items-center gap-1 text-sm font-normal text-zinc-400 transition hover:text-white";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span>{label}</span>
    </Link>
  );
}

type ContactLinkProps = {
  icon: ReactNode;
  label: string;
  href: string;
  external?: boolean;
  noWrap?: boolean;
  gapClassName?: string;
};

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center justify-center font-semibold leading-none ${className}`}>in</span>
  );
}

function ContactLink({ icon, label, href, external = false, noWrap = false, gapClassName = "gap-1.5" }: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`flex max-w-full items-center ${gapClassName} text-sm font-normal text-zinc-400 transition hover:text-white`}
    >
      <span className="text-[#c9a64d]">{icon}</span>
      <span className={noWrap ? "whitespace-nowrap" : ""}>{label}</span>
    </a>
  );
}

function ServicesLink({ label, href, external = false }: FooterLinkProps) {
  const className =
    "flex w-full items-center border-b border-white/10 py-1.5 text-sm font-normal text-zinc-300 transition hover:text-white md:w-[70%] md:py-2";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      <span>{label}</span>
    </Link>
  );
}
