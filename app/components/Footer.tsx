import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 border-t border-neutral-800 pt-10 pb-6">

      {/* TOP HEADER SECTION */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="border-t border-yellow-400 mb-3"></div>

        <h3 className="text-left text-white font-semibold tracking-wide">
          JulTech AI — Modern AI‑Ready Web Studio
        </h3>

        <div className="mt-8"></div>
      </div>

      {/* MAIN 3‑COLUMN FOOTER */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LEFT COLUMN — NAVIGATION + CONTACT US BUTTON */}
        <div className="space-y-2 text-left text-gray-400">
          <Link href="/about" className="block hover:text-yellow-400">About</Link>
          <Link href="/services" className="block hover:text-yellow-400">Services</Link>
          <Link href="/packages" className="block hover:text-yellow-400">Packages</Link>

          <button className="mt-2 px-4 py-2 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition">
            Contact Us
          </button>
        </div>

        {/* MIDDLE COLUMN — CONTACT INFO + LAUNCH BUTTON */}
        <div className="space-y-4 text-left md:pl-8">

          <p className="text-white">800‑123‑4566 (call free)</p>
          <p className="text-white">sokolskyjulia@gmail.com</p>
          <p className="text-white">Office: SC, USA</p>

          <button className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-md hover:bg-yellow-300 transition">
            Launch Your AI Website
          </button>

        </div>

        {/* RIGHT COLUMN — SUBSCRIBE */}
        <div className="md:justify-self-end text-left">

          <h4 className="text-white font-semibold tracking-wide mb-1">
            Subscribe
          </h4>

          <p className="text-xs text-gray-400 mb-3">
            Get insights, updates, and AI strategy tips.
          </p>

          <p className="text-[11px] text-gray-500 mb-2">
            We never spam. Unsubscribe anytime.
          </p>

          <form className="flex flex-col sm:flex-row gap-2 max-w-xs">
            <input
              type="email"
              placeholder="Email address"
              className="px-3 py-2 rounded-md bg-neutral-900 border border-neutral-700 
                         text-gray-200 focus:outline-none focus:border-yellow-400 text-sm flex-1"
            />

            <button
              type="submit"
              className="px-4 py-2 bg-yellow-400 text-black font-medium rounded-md 
                         hover:bg-yellow-300 transition text-sm whitespace-nowrap"
            >
              Submit
            </button>
          </form>

        </div>

      </div>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-6 mt-10 mb-6">

        <a href="#" className="hover:text-yellow-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.8-2.2 3.9-2.2 4.2 0 5 2.8 5 6.4V24h-4v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-4V8z"/>
          </svg>
        </a>

        <a href="#" className="hover:text-yellow-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.9 1.5h3.3l-7.2 8.2 8.5 12.3h-6.7l-5.2-7.6-6 7.6H2.3l7.7-8.8L1.8 1.5h6.9l4.7 6.8 5.5-6.8z"/>
          </svg>
        </a>

        <a href="#" className="hover:text-yellow-400">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 7.3A2.8 2.8 0 1 1 14.8 12 2.8 2.8 0 0 1 12 14.8zm4.8-8.9a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z"/>
          </svg>
        </a>

      </div>

      {/* BOTTOM BAR */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between text-xs text-gray-400">
        <div>© 2026 JulTech AI — Boutique AI‑Ready Web Studio. All rights reserved.</div>

        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-yellow-400">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="hover:text-yellow-400">Terms & Conditions</Link>
        </div>
      </div>

    </footer>
  );
}
