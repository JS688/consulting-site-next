"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-900 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* logo + brand */}
          <a
            href="/"
            className="group flex -translate-y-1 items-center gap-2.5 no-underline text-current transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Homepage"
          >
            <div className="flex flex-col justify-center leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-[rgb(245,197,24)] font-semibold text-[1.35rem] tracking-wider drop-shadow-[0_0_10px_rgba(245,197,24,0.42)]">
                  Jul
                </span>
                <span className="text-white font-bold text-[1.35rem] tracking-wider">
                  Tech
                </span>
                <span className="ml-1 inline-flex items-center rounded-full border border-[rgb(245,197,24)]/40 bg-[rgb(245,197,24)]/12 px-1.5 py-px text-[10px] font-bold uppercase tracking-[0.24em] text-[rgb(245,197,24)]">
                  AI
                </span>
              </div>
              <p className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[rgb(245,197,24)]/85">
                AI-READY ENGINE
              </p>
            </div>
          </a>
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="/" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Our Approach</a>
            <a href="/services" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Services</a>
            <a href="/results" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Results</a>
            <a href="/packages" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Packages</a>
            <a href="/blog" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Blog</a>
            <a href="/contact" className="relative text-white font-semibold transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
            <a href="/free-audit" className="ml-6 bg-[rgb(245,197,24)] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[rgb(255,210,50)] transition">Free Audit</a>
          </nav>
          {/* DESKTOP CTA */}
          <a href="/contact" className="ml-6 rounded-lg bg-[rgb(245,197,24)] px-5 py-2.5 text-base font-semibold text-black transition hover:bg-[rgb(255,210,50)] hidden md:inline-block">Start a Project</a>
          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl ml-4">{open ? "✕" : "☰"}</button>
        </div>
      </header>
      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl md:hidden">
          <a href="/" onClick={() => setOpen(false)}>Our Approach</a>
          <a href="/services" onClick={() => setOpen(false)}>Services</a>
          <a href="/results" onClick={() => setOpen(false)}>Results</a>
          <a href="/blog" onClick={() => setOpen(false)}>Blog</a>
          <a href="/packages" onClick={() => setOpen(false)}>Packages</a>
          <a href="/contact" onClick={() => setOpen(false)} className="text-yellow-400 font-semibold">Contact</a>
          <a href="/contact" onClick={() => setOpen(false)} className="ml-6 bg-[rgb(245,197,24)] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[rgb(255,210,50)] transition">Start a Project</a>
          <a href="/free-audit" onClick={() => setOpen(false)} className="ml-6 bg-[rgb(245,197,24)] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[rgb(255,210,50)] transition">Free Audit</a>
        </div>
      )}
    </>
  );
}
