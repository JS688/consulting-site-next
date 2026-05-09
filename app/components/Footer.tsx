"use client";

import type { ReactNode } from "react";
import { Pacifico } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Mail, Phone, Sparkles, MapPin } from "lucide-react";

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
  const bookHref = isSpanish ? "/es/free-appraisal" : "/free-appraisal";
  const linkedinHref = "https://www.linkedin.com/in/julia-sokolsky/";

  const servicesLabel = isSpanish ? "SERVICIOS" : "SERVICES";
  const companyLabel = isSpanish ? "EMPRESA" : "COMPANY";
  const contactLabel = isSpanish ? "CONTACTO" : "CONTACT";
  const privacyLabel = isSpanish ? "Privacidad" : "Privacy";
  const termsLabel = isSpanish ? "Terminos" : "Terms";

  return (
    <footer id="contact" className="w-full bg-[#070707] text-zinc-200">
      <div id="audit" className="relative -top-24" aria-hidden="true" />

      <div className="mx-auto max-w-6xl px-4 pb-6 pt-6 sm:px-6 lg:px-8 lg:pb-7 lg:pt-7">
        <div className="mb-6 h-px w-full bg-linear-to-r from-transparent via-[#c9a64d]/60 to-transparent" />

        <div className="grid gap-8 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:gap-8">
          <div>
            <Link href={homeHref} className="inline-flex items-center gap-2 text-xl font-semibold tracking-tight text-white transition hover:text-white">
              <SignatureJT className="text-lg sm:text-xl" />
              <FooterBrandWordmark className="text-2xl font-semibold tracking-[0.03em] sm:text-[1.75rem]" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-300">
              {isSpanish ? (
                "Sitios web con IA que posicionan en Google y son recomendados por herramientas de IA."
              ) : (
                <>
                  <span className="block">AI-powered websites that</span>
                  <span className="block">rank on Google and</span>
                  <span className="block">get recommended by AI tools.</span>
                </>
              )}
            </p>
            <div className="mt-4 h-0.5 w-14 bg-[#c9a64d]" />
            <p className="mt-6 inline-flex items-center gap-2 text-sm leading-6 text-zinc-200">
              <MapPin className="h-4 w-4 text-[#c9a64d]" />
              Columbia, SC · Remote
            </p>
            <p className="mt-5 text-sm text-zinc-300">{isSpanish ? "Siguenos" : "Follow us"}</p>
            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#c9a64d] text-[#c9a64d] transition hover:bg-[#c9a64d]/10"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="text-lg" />
            </a>
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

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c9a64d]">{contactLabel}</p>
            <div className="mt-2 h-px w-11 bg-[#c9a64d]/90" />
            <div className="mt-4 space-y-2.5 text-sm">
              <ContactLink href="mailto:ai@jul-tech.com" icon={<Mail className="h-4 w-4" />} label="ai@jul-tech.com" />
              <ContactLink href="tel:+18033861672" icon={<Phone className="h-4 w-4" />} label="(803) 386-1672" />
            </div>

            <div className="mt-4">
              <Link
                href={bookHref}
                className="group inline-flex w-full max-w-64 items-center gap-1.5 rounded-lg border border-[#c9a64d]/80 bg-[radial-gradient(circle_at_50%_50%,rgba(201,166,77,0.18),rgba(201,166,77,0.04)_58%,transparent_100%)] px-3 py-2 text-zinc-100 transition hover:border-[#c9a64d] sm:w-auto"
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 text-[#c9a64d]" />
                <span className="text-xs font-semibold leading-snug tracking-tight sm:text-sm">
                    {isSpanish ? "Recibe tu auditoria gratis" : "Get Your Free Audit"}
                </span>
                <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#c9a64d] transition-transform group-hover:translate-x-0.5" />
              </Link>
              <p className="mt-2 text-xs text-zinc-400">{isSpanish ? "Sin compromiso. 100% gratis." : "No obligation. 100% free."}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
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
};

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center justify-center font-semibold leading-none ${className}`}>in</span>
  );
}

function ContactLink({ icon, label, href, external = false }: ContactLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="inline-flex max-w-full items-center gap-3 text-sm font-normal text-zinc-400 transition hover:text-white"
    >
      <span className="text-[#c9a64d]">{icon}</span>
      <span>{label}</span>
    </a>
  );
}

function ServicesLink({ label, href, external = false }: FooterLinkProps) {
  const className =
    "flex w-full items-center border-b border-white/10 py-2 text-sm font-normal text-zinc-300 transition hover:text-white md:w-[70%]";

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
