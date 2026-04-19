import Link from "next/link";

export default function CTASection() {
  return (
    <section className="pt-8 pb-0 bg-black text-white">
      <div className="flex items-center justify-center gap-2 mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.45)]">
        <span className="w-1.5 h-1.5 rounded-full bg-[rgb(245,197,24)]"></span>
        <span className="text-white/90 text-sm tracking-widest uppercase">Start your AI transformation</span>
      </div>

      <div className="flex flex-wrap items-start gap-5 justify-center mt-10">
        <div className="flex flex-col items-center gap-2">
          <Link
            href="/contact"
            className="border border-white/18 bg-white/4 text-white/92 font-medium px-7 py-3.5 rounded-lg shadow-[0_0_8px_rgba(255,255,255,0.05)] hover:-translate-y-0.5 hover:bg-white/8 hover:shadow-[0_0_12px_rgba(255,255,255,0.12)] transition-all"
          >
            Request a Consultation
          </Link>
          <p className="text-xs tracking-wide text-white/60">No commitment</p>
        </div>
      </div>
    </section>
  );
}
