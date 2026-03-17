// app/components/RightColumn.tsx
import React from "react";

export default function RightColumn(): React.ReactElement {
  return (
    <aside className="p-4">
      <div className="rounded-lg border border-white/6 bg-black/40 p-6">
        <h3 className="text-sm text-[rgb(245,197,24)] font-semibold mb-2">Let's talk</h3>
        <p className="text-sm text-gray-300 mb-4">
          Tell us about your business challenge and we'll help design the right AI solution.
        </p>

        <a
          href="#contact"
          className="inline-block px-4 py-2 rounded-md bg-[rgb(245,197,24)] text-black font-semibold"
        >
          Request a consultation
        </a>

        <div className="mt-6">
          <h4 className="text-sm text-[rgb(245,197,24)] font-semibold mb-2">Quick links</h4>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>
              <a href="#about" className="hover:underline">About</a>
            </li>
            <li>
              <a href="#services" className="hover:underline">Services</a>
            </li>
            <li>
              <a href="#case-studies" className="hover:underline">Case Studies</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}