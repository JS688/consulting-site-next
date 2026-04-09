"use client";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.10),transparent_30%),linear-gradient(180deg,#0B0B0C_0%,#070707_100%)] pt-3 pb-0 md:pt-4">
      <div className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-6 text-center sm:px-8 lg:px-12">
        {/* HERO TEXT BLOCK */}
        <div className="max-w-5xl pt-1 pb-0">
          <h1 className="text-yellow-400 font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-[-0.5px] whitespace-nowrap overflow-x-auto">
            High-Ranking Websites for Google and AI
          </h1>
          <p className="mt-5 text-lg font-medium leading-relaxed text-white md:text-xl">
            We build custom, high-performance websites designed to turn visitors into customers
          </p>
          <p className="mt-2 text-sm font-light uppercase tracking-[0.22em] text-gray-300 opacity-80 md:text-base">
            FROM SEARCH VISIBILITY TO AI RECOMMENDATIONS — ONE UNIFIED SYSTEM
            <span className="align-super text-[0.7em]">TM</span>
          </p>
        </div>
        {/* SPACING */}
        <div className="h-3 md:h-4" />
      </div>

      <div className="relative z-20 w-full max-h-[68svh] overflow-hidden md:max-h-[72svh] lg:max-h-[76svh]">
        <div className="relative w-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-black/18" />
          <video
            src="/newtry.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="block h-auto w-full opacity-95"
          />
        </div>
      </div>
    </section>
  );
}

// (Removed duplicate FourPillarsSection and duplicate export default)
// (If you want to use FourPillarsSection, define it once and import/export as needed)