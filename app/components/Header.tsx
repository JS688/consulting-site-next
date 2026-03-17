"use client";

import React, { useState } from "react";

export default function Header(): React.ReactElement {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-900/60 bg-black/60 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo + brand */}
            <a
              href="/"
              className="flex items-center gap-3 no-underline text-current"
              aria-label="Jultech homepage"
            >
              <img
                src="/logo.png"
                alt="Jultech logo"
                className="object-contain"
                style={{ width: 72, height: 72 }}
              />
              <div className="hidden md:block ml-3">
                <div className="text-sm font-extrabold text-[rgb(245,197,24)] tracking-tight">
                  AI Business Consulting
                </div>
                <div className="text-[11px] text-gray-400 -mt-0.5">Jultech</div>
              </div>
            </a>
          </div>

          {/* Desktop nav (visible >= md) */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-white hover:text-[rgb(245,197,24)] transition font-medium">
              About
            </a>
            <a href="#services" className="text-white hover:text-[rgb(245,197,24)] transition font-medium">
              Services
            </a>
            <a href="#case-studies" className="text-white hover:text-[rgb(245,197,24)] transition font-medium">
              Case Studies
            </a>
            <a
              href="#contact"
              className="text-white hover:text-[rgb(245,197,24)] transition font-semibold"
            >
              Contact
            </a>
          </nav>

          {/* Mobile button (visible < md) */}
          <div className="md:hidden">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((s) => !s)}
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-[rgba(245,197,24,0.25)]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay menu — hidden at md+ so it never appears on large screens */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/92 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="text-center px-6">
            <nav className="space-y-8">
              <a href="#about" onClick={() => setOpen(false)} className="block text-3xl font-semibold text-white">
                About
              </a>
              <a href="#services" onClick={() => setOpen(false)} className="block text-3xl font-semibold text-white">
                Services
              </a>
              <a href="#case-studies" onClick={() => setOpen(false)} className="block text-3xl font-semibold text-white">
                Case Studies
              </a>
              <a href="#contact" onClick={() => setOpen(false)} className="block text-3xl font-semibold text-[rgb(245,197,24)]">
                Contact
              </a>
            </nav>

            <div className="mt-12">
              <button
                onClick={() => setOpen(false)}
                className="inline-block px-6 py-2 rounded-md bg-white/6 hover:bg-white/8 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
