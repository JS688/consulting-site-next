"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-900 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          {/* logo + brand */}
          <Link
            href="/"
            className="group flex -translate-y-1 items-center gap-2.5 no-underline text-current transition-transform duration-200 hover:scale-[1.02]"
            aria-label="Homepage"
          >
            <div className="flex flex-col justify-center leading-tight">
              <div className="flex items-center gap-1">
                <span className="text-[rgb(245,197,24)] font-semibold text-[1.45rem] tracking-wider drop-shadow-[0_0_10px_rgba(245,197,24,0.42)]">
                  Jul
                </span>
                <span className="text-white font-bold text-[1.45rem] tracking-wider">
                  Tech™
                </span>
              </div>
              <p className="mt-0.5 text-[12px] font-semibold uppercase tracking-[0.26em] text-[rgb(245,197,24)]/85">
                AI-READY ENGINE
              </p>
            </div>
          </Link>
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-[0.98rem]">
            <Link href="/" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Our Approach</Link>
            <Link href="/about" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">About</Link>
            <Link href="/services" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Services</Link>
            <Link href="/case-studies" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Case Studies</Link>
            <Link href="/blog" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
            <Link href="/contact" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Contact</Link>
            <div className="flex items-center gap-2 ml-6">
              <Link
                href="/15-min-strategy-call"
                className="rounded-lg border border-slate-600/40 bg-slate-800/55 px-4 py-2 text-[0.95rem] font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition hover:border-slate-500/55 hover:bg-slate-700/65"
              >
                Strategy Call
              </Link>
              <div className="flex items-center gap-1 ml-3 border-l border-white/10 pl-3">
                <Link href="/" className="rounded border border-[rgb(245,197,24)] px-2 py-1 text-sm font-semibold text-[rgb(245,197,24)] transition hover:bg-[rgb(245,197,24)] hover:text-black">EN</Link>
                <Link href="/es" className="rounded border border-white/20 px-2 py-1 text-sm font-semibold text-white/60 transition hover:border-[rgb(245,197,24)] hover:text-[rgb(245,197,24)]">ES</Link>
              </div>
            </div>
          </nav>
          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl ml-4">{open ? "✕" : "☰"}</button>
        </div>
      </header>
      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Our Approach</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <div className="flex flex-col gap-3 w-full px-8">
            <Link
              href="/15-min-strategy-call"
              onClick={() => setOpen(false)}
              className="rounded-lg border border-slate-600/40 bg-slate-800/55 px-4 py-2 text-center font-semibold text-white shadow-[0_10px_24px_rgba(15,23,42,0.16)] transition hover:border-slate-500/55 hover:bg-slate-700/65"
            >
              Strategy Call
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
