import Link from "next/link";

export default function Footer() {
  const privacyHref = "/legal/privacy";
  const termsHref = "/legal/terms";
  const linkedInHref = "https://www.linkedin.com/in/julia-sokolsky/";
  const servicesHref = "#services";
  const pricingHref = "#services";
  const approachHref = "/about";
  const contactHref = "#contact";
  const privacyLabel = "Privacy";
  const termsLabel = "Terms";

  return (
    <footer id="contact" className="bg-black px-6 pb-8 pt-16 text-white">
      <div id="audit" className="relative -top-24" aria-hidden="true" />
      <div className="mb-10 border-t border-[#d4af37]/10 py-10 text-center">
        <p className="text-gray-400">Need answers fast?</p>
        <h3 className="mt-2 text-xl font-semibold">Talk to an Expert Now</h3>
        <a
          href="tel:+18033861672"
          className="mt-4 inline-block rounded-full bg-yellow-500 px-8 py-3 font-medium text-black transition hover:bg-yellow-400"
        >
          📞 Call (803) 386-1672
        </a>
        <p className="mt-3 text-sm text-gray-500">
          No commitment — just clear answers about your website and visibility.
        </p>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 text-sm md:grid-cols-3">
        <div>
          <p className="mb-2 text-yellow-400">JULTECH AI</p>
          <p className="mb-2 max-w-sm text-white/70">
            Websites built to rank on Google and get recommended by AI tools.
          </p>
          <p className="text-white/40">Columbia, SC · Remote</p>
        </div>

        <div className="flex flex-col items-start space-y-2 text-sm text-white/60 md:items-center">
          <Link href={servicesHref} className="transition hover:text-[#d4af37]">
            Services
          </Link>
          <Link href={pricingHref} className="transition hover:text-[#d4af37]">
            Solutions
          </Link>
          <Link href={approachHref} className="transition hover:text-[#d4af37]">
            Our Approach
          </Link>
          <Link href={contactHref} className="transition hover:text-[#d4af37]">
            Contact
          </Link>
        </div>

        <div className="space-y-2 text-right text-sm text-white/60">
          <a href="tel:+18033861672" className="block transition hover:text-[#d4af37]">
            (803) 386-1672
          </a>
          <a href="mailto:ai@jul-tech.com" className="block transition hover:text-[#d4af37]">
            ai@jul-tech.com
          </a>
          <a href={linkedInHref} target="_blank" rel="noopener noreferrer" className="block transition hover:text-[#d4af37]">
            LinkedIn
          </a>
        </div>
      </div>

      <div className="mx-auto my-4 w-full max-w-6xl border-t border-white/10" />

      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-3 text-xs text-white/30 md:flex-row md:items-center">
        <div className="space-x-4">
          <Link href={privacyHref} className="transition hover:text-[#d4af37]">
            {privacyLabel}
          </Link>
          <Link href={termsHref} className="transition hover:text-[#d4af37]">
            {termsLabel}
          </Link>
        </div>

        <p>© 2026 JulTech · Columbia, SC</p>
      </div>
    </footer>
  );
}
