"use client";

export default function AIFormulaSection() {
  return (
    <div className="relative h-full w-full">
      <div className="relative z-10 flex h-full items-start justify-end gap-6 px-6 py-3">

        {/* AI Tools + SEO */}
        <div className="flex flex-col gap-0.5 text-right">
          <p className="text-sm font-bold leading-tight text-[#60b8ff] drop-shadow-[0_0_12px_rgba(60,140,255,0.7)]">AI TOOLS</p>
          <p className="text-xs font-semibold text-[#a0ddff] drop-shadow-[0_0_8px_rgba(60,140,255,0.6)]">(CHATGPT)</p>
          <p className="text-2xl font-extrabold leading-tight text-[#60b8ff] drop-shadow-[0_0_14px_rgba(60,140,255,0.8)]">SEO</p>
          <p className="text-xs font-semibold text-[#a0ddff] drop-shadow-[0_0_8px_rgba(60,140,255,0.6)]">(GOOGLE)</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-6xl font-extrabold leading-none text-[#f5c84c] drop-shadow-[0_0_14px_rgba(245,200,76,0.8)]">{'}'}</div>
          <div className="relative h-6 w-18">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-[#f5c84c]/35 via-[#f5c84c] to-[#f5c84c]/35" />
            <div className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f5c84c]/85" />
            <div className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#f5c84c]/85" />
            <div className="absolute left-0 top-1/2 h-2 w-2 rounded-full bg-[#f5c84c] shadow-[0_0_14px_rgba(245,200,76,0.95)] animate-neuron-travel" />
            <div className="absolute left-1/2 top-1/2 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5c84c] shadow-[0_0_14px_rgba(245,200,76,0.95),0_0_24px_rgba(245,200,76,0.6)] animate-glow [animation-duration:3s]" />
          </div>
        </div>

        {/* More Customers */}
        <div className="flex flex-col gap-0.5 text-right">
          <p className="mt-1 translate-x-1 text-2xl font-extrabold leading-tight text-white drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]">CUSTOMERS</p>
        </div>

      </div>
    </div>
  );
}
