"use client";

import { AlertCircle, Globe, Search, Sparkles, Users } from "lucide-react";

export default function WhoThisIsFor() {
  const painPoints = [
    {
      icon: Users,
      text: "Relying on referrals — but need more consistent customers",
    },
    {
      icon: Search,
      text: "Not ranking on Google when customers search",
    },
    {
      icon: Sparkles,
      text: "Not showing up in AI tools like ChatGPT, Gemini, and others",
    },
    {
      icon: Globe,
      text: "Your website isn\'t bringing in customers",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050814] px-6 py-24 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_42%,rgba(245,200,76,0.08),transparent_28%),radial-gradient(circle_at_88%_58%,rgba(245,200,76,0.08),transparent_28%)]" />

      <div className="relative mx-auto max-w-5xl text-center">
        <p className="mb-6 inline-flex items-center rounded-full border border-yellow-400/70 bg-yellow-400/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-yellow-300 sm:text-sm">
          WHO THIS IS FOR
        </p>

        <h2 className="text-lg font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
          If any of these sound familiar:
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 text-left md:grid-cols-2">
          {painPoints.map((point) => {
            const Icon = point.icon;

            return (
            <div
              key={point.text}
              className="rounded-2xl border border-yellow-400/25 bg-[linear-gradient(145deg,rgba(255,205,72,0.08),rgba(255,205,72,0.01))] px-6 py-6 transition-all duration-300 hover:border-yellow-400/50"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 rounded-xl border border-yellow-400/35 bg-yellow-400/10 p-3 text-yellow-300">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="text-sm leading-relaxed text-white/90 sm:text-xl lg:text-2xl">{point.text}</p>
              </div>
            </div>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border border-yellow-400/50 bg-[linear-gradient(145deg,rgba(255,205,72,0.15),rgba(255,205,72,0.03))] px-6 py-8 sm:px-8">
          <div className="flex flex-col items-center gap-4 text-yellow-300 md:flex-row md:items-start md:justify-center md:gap-3">
            <AlertCircle className="h-9 w-9 shrink-0" />
            <div className="text-center md:text-left">
              <p className="text-base font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
                Then your website likely isn&apos;t built or structured for how people search today.
              </p>
              <p className="mt-3 text-xs leading-relaxed text-white/75 sm:text-base md:text-lg">
                So your business gets found by customers searching on Google and AI platforms.
              </p>
              <p className="mt-3 text-xs font-medium leading-relaxed text-yellow-200 sm:text-base md:text-lg">
                V We fix that by improving how your business is presented, understood, and found online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
