import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

export default function EsWebDesignPage() {
  return (
    <main className="min-h-screen bg-[#030303] px-4 py-16 text-white sm:px-6 lg:px-12">
      <h1 className="mb-6 text-4xl font-bold text-[#d4af37]">Diseno Web</h1>
      <p className="mb-4 text-lg text-zinc-300">
        Descubre nuestro enfoque para crear sitios web modernos y de alto rendimiento, pensados para visibilidad, conversion y posicionamiento de marca.
      </p>
      <section className="relative overflow-hidden bg-[#030303] px-0 py-0 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">Diseno Web</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl lg:text-5xl">
              Diseno web a medida, construido desde cero
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Creamos sitios premium con codigo personalizado, movimiento original y un sistema visual refinado que hace que tu marca se sienta unica, elevada y memorable.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/3 p-6">
              <h3 className="text-lg font-semibold text-white">Codigo a medida</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Construido desde cero para velocidad, flexibilidad y una experiencia mas personalizada.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/3 p-6">
              <h3 className="text-lg font-semibold text-white">Movimiento original</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Animaciones y transiciones unicas que hacen que el sitio se sienta premium y vivo.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/3 p-6">
              <h3 className="text-lg font-semibold text-white">Sistema de marca</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">Logotipos, estilo visual y decisiones de layout que vuelven a la marca inconfundible.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <ProjectBookingFlow
          contextLabel="Proyecto de diseno web"
          title="Cuentanos sobre tu proyecto de diseno web"
          description="Comparte lo que quieres construir. Revisamos primero el alcance y luego te enviamos la valoracion correcta segun el proyecto y el enlace de pago seguro."
          sessionType="full"
          interestLabel="Diseno Web"
          locale="es"
        />
      </section>
    </main>
  );
}