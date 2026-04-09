"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    id: "01",
    title: "Digital Bilingual Strategy",
    subtitle:
      "We help your business communicate clearly in English and Spanish so you can reach more customers and build trust across cultures.",
  },
  {
    id: "02",
    title: "Search Engine Optimization (SEO)",
    subtitle:
      "We optimize your website so it ranks higher on Google and gets discovered by people searching for your services.",
  },
  {
    id: "03",
    title: "Answer Engine Optimization (AEO)",
    subtitle:
      "We structure your content so voice assistants like Siri, Alexa, and Google Assistant can read it clearly and choose your business as the answer.",
  },
  {
    id: "04",
    title: "Generative Engine Optimization (GEO)",
    subtitle:
      "We prepare your website for AI tools like ChatGPT, Gemini, and Copilot so they can understand your content and reference your business in their responses.",
  },
];
export default function SignatureFramework() {
  const refs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-show");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => observer.observe(ref));
  }, []);

  return (
    <section className="bg-black text-white py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgb(245,197,24)] mb-2">
            OUR PROCESS
          </p>
          <h2 className="font-semibold leading-tight text-2xl md:text-3xl mb-2">
            The JulTech Intelligence Framework™
          </h2>
          <p className="text-base leading-relaxed text-white/70">
            A simple system that makes your website smarter, more visible, and more profitable.
          </p>
        </div>

        <div className="flex flex-wrap gap-5 justify-start">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                if (el) {
                  refs.current[index] = el;
                }
              }}
              className="opacity-0 translate-y-5 w-56 p-6 rounded-2xl bg-[#0b0b0b] border border-white/10 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)]"
            >
              <div className="text-2xl font-bold text-[rgb(245,197,24)] mb-2">{step.id}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-6">{step.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-show {
          opacity: 1 !important;
          transform: translateY(0) !important;
          transition: all 0.6s ease-out;
        }
      `}</style>
    </section>
  );
}
