import Link from "next/link";

export default function VisibilityReportCTA() {
  return (
    <section className="border-t border-[#d4af37]/10 bg-[#050814] px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-xl font-semibold sm:text-4xl md:text-5xl">
          See How Your Business Shows Up on Google and AI
        </h2>

        <p className="mx-auto mt-4 max-w-none text-xs uppercase tracking-[0.12em] text-gray-400 sm:text-sm md:whitespace-nowrap">
          Get a free visibility check to understand where your website stands - and what's holding it back.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <Link
            href="#contact"
            className="rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-medium text-black transition hover:bg-yellow-400 sm:px-8 sm:py-4 sm:text-base"
          >
            Get My Free Visibility Report -&gt;
          </Link>

          <a
            href="tel:+18033861672"
            className="rounded-full border border-[#f5c84c] px-6 py-3 text-sm font-medium text-[#f5c84c] transition hover:bg-[#f5c84c] hover:text-black sm:px-8 sm:py-4 sm:text-base"
          >
            Talk to an Expert
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          No commitment. Takes 2 minutes.
        </p>
      </div>
    </section>
  );
}