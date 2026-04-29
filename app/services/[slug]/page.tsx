import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock3 } from "lucide-react";

import ProjectBookingFlow from "../../components/booking/ProjectBookingFlow";
import { getServicePackage, SERVICE_PACKAGES } from "../servicePackages";

export function generateStaticParams() {
  return SERVICE_PACKAGES.map((servicePackage) => ({ slug: servicePackage.slug }));
}

export default async function ServicePackageDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const servicePackage = getServicePackage(slug);

  if (!servicePackage) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-6xl px-6 py-10 lg:px-12">
        <header className="mb-8 flex items-center justify-between">
          <Link href="/services" className="text-sm text-white/45 transition hover:text-white">
            ← Back to services
          </Link>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/75">
              {servicePackage.label}
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
              {servicePackage.title}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/72">
              {servicePackage.detailTagline}
            </p>

            <div className="mt-8 max-w-2xl space-y-5 text-base leading-8 text-white/62">
              {servicePackage.detailOverview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/4 p-7 shadow-[0_0_80px_rgba(0,0,0,0.28)] backdrop-blur-sm md:p-8">
            <div className="border-b border-white/10 pb-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                Timeline
              </p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-white/60">
                  <Clock3 className="h-3.5 w-3.5" />
                  <span>{servicePackage.timeline}</span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-white/40">
              What&apos;s included
            </p>

            <h2 className="mt-4 text-2xl font-semibold text-white">
              Included in {servicePackage.title}
            </h2>

            <ul className="mt-6 space-y-4">
              {servicePackage.bullets.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <Check className="mt-1 h-4 w-4 text-yellow-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {servicePackage.spotlightTitle ? (
          <section className="mt-14 rounded-4xl border border-white/10 bg-white/4 p-7 shadow-[0_0_80px_rgba(0,0,0,0.28)] md:p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-white/40">Modern search</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">{servicePackage.spotlightTitle}</h2>
            {servicePackage.spotlightDescription ? (
              <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">
                {servicePackage.spotlightDescription}
              </p>
            ) : null}

            {servicePackage.spotlightBullets?.length ? (
              <ul className="mt-6 space-y-4">
                {servicePackage.spotlightBullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70">
                    <Check className="mt-1 h-4 w-4 text-yellow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

        <section className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-4xl border border-white/10 bg-white/4 p-7 shadow-[0_0_80px_rgba(0,0,0,0.28)]">
            <h2 className="text-2xl font-semibold text-white">Who this is for</h2>

            <ul className="mt-6 space-y-4">
              {servicePackage.rightFor.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white/45" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-4xl border border-white/10 bg-white/4 p-7 shadow-[0_0_80px_rgba(0,0,0,0.28)]">
            <h2 className="text-2xl font-semibold text-white">How we move it forward</h2>

            <ul className="mt-6 space-y-4">
              {servicePackage.process.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/70">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-white/45" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <ProjectBookingFlow
            contextLabel={`${servicePackage.title} booking`}
            title={servicePackage.bookingTitle}
            description={servicePackage.bookingDescription}
            sessionType={servicePackage.sessionType}
            interestLabel={servicePackage.title}
          />
        </section>
      </div>
    </main>
  );
}