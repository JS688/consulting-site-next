"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BookingCompletePage() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.replace("/");
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/35">
          Booking confirmed
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#e6c26a] sm:text-5xl">
          You&apos;re booked.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
          Sending you back to JulTech now. If it does not happen automatically, use the button below.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-full border border-slate-600/40 bg-slate-800/55 px-8 py-4 text-base font-semibold text-white transition hover:border-slate-500/55 hover:bg-slate-700/65"
        >
          Return to JulTech
        </Link>
      </div>
    </main>
  );
}