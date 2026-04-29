import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FreeAppraisalThankYouPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f5c84c] text-2xl font-bold text-black">
            ✓
          </div>

          <h1 className="mt-6 text-3xl font-semibold md:text-5xl">
            You&apos;re In - We&apos;ll Review Your Website
          </h1>

          <p className="mt-4 text-gray-400">
            Your request has been received. We&apos;ll analyze your website&apos;s visibility on Google and AI tools and send your report shortly.
          </p>

          <div className="mt-8 rounded-xl border border-[#d4af37]/20 bg-[#f5c84c]/5 p-6 text-left">
            <h3 className="text-lg font-semibold">What happens next:</h3>

            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>• We review your website structure and content</li>
              <li>• We check how your business appears in Google search</li>
              <li>• We analyze visibility in AI tools like ChatGPT</li>
              <li>• You receive actionable recommendations</li>
            </ul>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-gray-400">Want to speed things up?</p>

            <a
              href="tel:+18033861672"
              className="inline-block rounded-full bg-[#f5c84c] px-8 py-4 font-medium text-black transition hover:bg-yellow-400"
            >
              Talk to an Expert →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}