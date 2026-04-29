import Link from "next/link";

export default function AIVisibilityPageEs() {
  return (
    <section className="relative overflow-hidden bg-black px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-16 h-64 w-96 -translate-x-1/2 rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(96,165,250,0.09),transparent_25%),radial-gradient(circle_at_30%_80%,rgba(245,200,76,0.08),transparent_30%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5c84c]/80">Visibilidad AI</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#f5c84c] sm:text-5xl">
          Haz Que la IA Recomiende Tu Negocio
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-white/75">
          Estructuramos tu sitio web y la informacion de tu negocio para que sistemas como ChatGPT
          entiendan, confien y recomienden tu empresa cuando la gente pregunte a quien contratar.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/4 p-5">
            <h2 className="text-lg font-semibold text-white">Claridad de Entidad</h2>
            <p className="mt-2 text-sm text-white/65">Servicios, ubicaciones y pruebas claras para que la IA identifique bien tu negocio.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/4 p-5">
            <h2 className="text-lg font-semibold text-white">Estructura de Contenido</h2>
            <p className="mt-2 text-sm text-white/65">Paginas y esquema organizados para buscadores y sistemas de recuperacion por IA.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/4 p-5">
            <h2 className="text-lg font-semibold text-white">Enfoque en Conversion</h2>
            <p className="mt-2 text-sm text-white/65">Mejoras de visibilidad conectadas a resultados reales: llamadas, consultas y clientes.</p>
          </article>
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/es/free-appraisal"
            className="inline-flex items-center justify-center rounded-full bg-[#f5c84c] px-6 py-3 text-sm font-semibold text-black transition hover:bg-[#ffd867]"
          >
            Solicita Tu Auditoria SEO &amp; AI
          </Link>
          <Link
            href="/es/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow-400 hover:text-yellow-400"
          >
            Habla con un Experto
          </Link>
        </div>
      </div>
    </section>
  );
}
