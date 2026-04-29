import Script from "next/script";

import CalendlyEmbed from "@/components/CalendlyEmbed";

export default function EsThankYouPage() {
  return (
    <main className="min-h-screen bg-[#04060c] px-6 py-20 text-white">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />

      <section className="mx-auto max-w-5xl">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">Pago confirmado</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Gracias. Vamos a agendar tu sesion.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/60">
            Tu pago esta completo. Elige un horario abajo y nos reuniremos por Calendly para comenzar.
          </p>
        </div>

        <CalendlyEmbed />
      </section>
    </main>
  );
}