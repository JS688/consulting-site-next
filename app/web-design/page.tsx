import ProjectBookingFlow from "@/components/booking/ProjectBookingFlow";

export default function WebDesignPage() {
  return (
    <main className="min-h-screen bg-[#030303] text-white px-4 py-16 sm:px-6 lg:px-12">
      <h1 className="text-4xl font-bold text-[#d4af37] mb-6">Web Design</h1>
      <p className="text-lg text-zinc-300 mb-4">Discover our approach to high-performance, modern web design built for visibility, conversion, and brand elevation.</p>
      <section className="relative overflow-hidden bg-[#030303] px-0 py-0 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.45em] text-zinc-500">
              Web Design
            </p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-[#d4af37] sm:text-4xl lg:text-5xl">
              Bespoke Web Design, Built From Scratch
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              We create premium websites with custom code, original motion, and a refined visual system that makes your brand feel unique, elevated, and memorable.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">Custom Code</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Built from scratch for speed, flexibility, and a more tailored user experience.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">Original Motion</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Unique animations and transitions that make the site feel premium and alive.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">Brand System</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Custom logos, visual styling, and layout decisions that make the brand unmistakable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl">
        <ProjectBookingFlow
          contextLabel="Web design project"
          title="Tell us about your web design project"
          description="Share what you want to build, then continue through payment and choose the best consultation time for your project."
          sessionType="full"
          interestLabel="Web Design"
        />
      </section>
    </main>
  );
}