"use client";

import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";

const getBookingPath = (session: "short" | "full", name?: string | null, email?: string | null) => {
  const params = new URLSearchParams({ session });

  if (name) {
    params.set("name", name);
  }

  if (email) {
    params.set("email", email);
  }

  return `/es/book?${params.toString()}`;
};

export default function EsPaymentCompleteClient() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const bookingUrl = useMemo(() => {
    const session = searchParams.get("session") === "short" ? "short" : "full";
    const name = searchParams.get("name");
    const email = searchParams.get("email");

    return getBookingPath(session, name, email);
  }, [searchParams]);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      window.location.replace(bookingUrl);
    }, 700);

    return () => window.clearTimeout(timeoutId);
  }, [bookingUrl]);

  return (
    <main className="min-h-screen bg-[#04060c] px-6 py-20 text-white">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-white/35">Pago recibido</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-[#e6c26a] sm:text-5xl">Abriendo tu pagina de reserva.</h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/60 sm:text-lg">
          Gracias. Tu pago esta completo y te estamos enviando ahora a la pagina de reserva.
        </p>

        {sessionId ? <p className="mt-6 text-sm text-white/40">Sesion: {sessionId}</p> : null}

        <a href={bookingUrl} className="mt-10 inline-flex items-center justify-center rounded-full border border-slate-600/40 bg-slate-800/55 px-8 py-4 text-base font-semibold text-white transition hover:border-slate-500/55 hover:bg-slate-700/65">
          Continuar a la reserva
        </a>

        <Link href="/es" className="mt-5 text-sm text-white/45 transition hover:text-white">Volver a JulTech</Link>
      </div>
    </main>
  );
}