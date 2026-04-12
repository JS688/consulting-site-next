"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {

  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-zinc-900 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
          {/* logo + brand */}
          <Link
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
          </Link>
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Our Approach</Link>
            <div className="relative group">
              <button
                className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 group-hover:after:w-full flex items-center gap-1 focus:outline-none"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                About
                <span className="ml-1">▾</span>
              </button>
              <div
                className="absolute left-0 top-full mt-0 hidden group-hover:block group-focus-within:block w-52 rounded-lg bg-zinc-900 shadow-lg border border-white/10 py-2 z-50"
              >
                <Link href="/about" className="block px-5 py-2 text-white font-semibold hover:bg-zinc-800">About JulTech</Link>
                <Link href="/about/viewpoint" className="block px-5 py-2 text-white hover:bg-zinc-800">Viewpoint</Link>
              </div>
            </div>
            <div className="relative group">
              <button
                className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 group-hover:after:w-full flex items-center gap-1 focus:outline-none"
                tabIndex={0}
                aria-haspopup="true"
                aria-expanded="false"
                type="button"
              >
                Services
                <span className="ml-1">▾</span>
              </button>
              <div
                className="absolute left-0 top-full mt-0 hidden group-hover:block group-focus-within:block w-56 rounded-lg bg-zinc-900 shadow-lg border border-white/10 py-2 z-50"
              >
                <Link href="/services" className="block px-5 py-2 text-white font-semibold hover:bg-zinc-800">Overview</Link>
                <Link href="/web-design" className="block px-5 py-2 text-white hover:bg-zinc-800">Web Design</Link>
                <Link href="/seo-services" className="block px-5 py-2 text-white hover:bg-zinc-800">SEO</Link>
                <Link href="/aeo-services" className="block px-5 py-2 text-white hover:bg-zinc-800">AEO</Link>
                <Link href="/geo-services" className="block px-5 py-2 text-white hover:bg-zinc-800">GEO</Link>
                <Link href="/multilingual-web-design" className="block px-5 py-2 text-white hover:bg-zinc-800">Multilingual Web Design</Link>
              </div>
            </div>
            <Link href="/case-studies" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Case Studies</Link>
            <Link href="/blog" className="relative text-white transition-colors duration-200 hover:text-[rgb(245,197,24)] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[rgb(245,197,24)]/70 after:transition-all after:duration-300 hover:after:w-full">Blog</Link>
            <div className="flex items-center gap-2 ml-6">
              <Link href="/free-appraisal" className="bg-zinc-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-zinc-700 transition">Free Audit</Link>
              <Link href="/contact" className="bg-[rgb(245,197,24)] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[rgb(255,210,50)] transition">Contact</Link>
            </div>
          </nav>
          {/* DESKTOP CTA */}
            {/* Removed duplicate Get Free Audit button */}
          {/* MOBILE BUTTON */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-white text-2xl ml-4">{open ? "✕" : "☰"}</button>
        </div>
      </header>
      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-8 text-2xl md:hidden">
          <Link href="/" onClick={() => setOpen(false)}>Our Approach</Link>
          <details className="w-full flex flex-col items-center">
            <summary className="text-white cursor-pointer py-2">About</summary>
            <div className="flex flex-col items-center space-y-2 mt-2">
              <Link href="/about" onClick={() => setOpen(false)} className="text-yellow-300">About JulTech</Link>
              <Link href="/about/viewpoint" onClick={() => setOpen(false)} className="text-yellow-300">Viewpoint</Link>
            </div>
          </details>
          <details className="w-full flex flex-col items-center" open>
            <summary className="text-white cursor-pointer py-2">Services</summary>
            <div className="flex flex-col items-center space-y-2 mt-2">
              <Link href="/web-design" onClick={() => setOpen(false)} className="text-yellow-300">Web Design</Link>
              <Link href="/seo-services" onClick={() => setOpen(false)} className="text-yellow-300">SEO</Link>
              <Link href="/aeo-services" onClick={() => setOpen(false)} className="text-yellow-300">AEO</Link>
              <Link href="/geo-services" onClick={() => setOpen(false)} className="text-yellow-300">GEO</Link>
              <Link href="/multilingual-web-design" onClick={() => setOpen(false)} className="text-yellow-300">Multilingual Web Design</Link>
            </div>
          </details>
          <Link href="/case-studies" onClick={() => setOpen(false)}>Case Studies</Link>
          <Link href="/blog" onClick={() => setOpen(false)}>Blog</Link>
          <div className="flex flex-col gap-3 w-full px-8">
            <Link href="/free-appraisal" onClick={() => setOpen(false)} className="bg-zinc-800 text-white font-semibold px-4 py-2 rounded-lg hover:bg-zinc-700 transition text-center">Free Audit</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="bg-[rgb(245,197,24)] text-black font-semibold px-4 py-2 rounded-lg hover:bg-[rgb(255,210,50)] transition text-center">Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
