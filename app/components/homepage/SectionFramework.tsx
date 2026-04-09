"use client";

import { useEffect, useRef } from "react";

const impactDelayClasses = ["boom-delay-400", "boom-delay-550", "boom-delay-700"];

export default function VisibilityGapSection() {
  const refs = useRef<Array<HTMLElement | null>>([]);

  const setRef = (index: number) => (element: HTMLElement | null) => {
    refs.current[index] = element;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-boom");
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach(ref => ref && observer.observe(ref));

    return () => {
      refs.current.forEach(ref => ref && observer.unobserve(ref));
      observer.disconnect();
    };
  }, []);

  const impactPoints = [
    "Invisible in AI answers",
    "Invisible in voice search",
    "Invisible to bilingual customers",
  ];

  return (
    <section className="section-fade relative overflow-hidden bg-black px-6 py-32 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[url('/your-jultech-bg.png')] bg-cover bg-center opacity-[0.18]" />

      <div className="relative mx-auto max-w-4xl text-center">
        <p
          ref={setRef(0)}
          className="boom-delay-100 mb-3 text-sm uppercase tracking-[0.3em] text-yellow-300 opacity-0"
        >
          The JulTech Visibility Framework™
        </p>

        <h2
          ref={setRef(1)}
          className="boom-delay-250 mb-6 text-4xl font-semibold text-white opacity-0 md:text-5xl"
        >
          The Visibility Gap
        </h2>

        <p
          ref={setRef(2)}
          className="boom-delay-250 mb-16 text-xl leading-relaxed text-gray-300 opacity-0 md:text-2xl"
        >
          Most businesses rank.
          <br />
          Few are understood.
          <br />
          Even fewer are chosen.
        </p>

        <div className="mb-16 space-y-6">
          {impactPoints.map((point, index) => (
            <p
              key={index}
              ref={setRef(3 + index)}
              className={`text-lg text-gray-200 opacity-0 md:text-xl ${impactDelayClasses[index]}`}
            >
              {point}
            </p>
          ))}
        </div>

        <p
          ref={setRef(6)}
          className="boom-delay-900 glow-gold text-2xl font-semibold text-[rgb(245,197,24)] opacity-0 md:text-3xl"
        >
          Your website deserves to be seen, heard, and chosen.
        </p>

        <div className="mx-auto mt-14 flex max-w-xl flex-col items-center justify-between gap-4 sm:flex-row">
          <a
            href="/services"
            className="inline-flex min-w-44 items-center justify-center rounded-full border border-[#d1b075]/50 px-8 py-3 text-base font-semibold text-white transition hover:border-[#e0c48a] hover:text-[#f4d79c]"
          >
            Services
          </a>
          <a
            href="/contact"
            className="inline-flex min-w-44 items-center justify-center rounded-full bg-[#d1b075] px-8 py-3 text-base font-semibold text-black shadow-[0_0_20px_rgba(209,176,117,0.25)] transition hover:bg-[#e0c48a] hover:shadow-[0_0_28px_rgba(209,176,117,0.32)]"
          >
            Contact Us
          </a>
        </div>
      </div>

      <style jsx>{`
        .boom-delay-100 {
          animation-delay: 0.1s;
        }

        .boom-delay-250 {
          animation-delay: 0.25s;
        }

        .boom-delay-400 {
          animation-delay: 0.4s;
        }

        .boom-delay-550 {
          animation-delay: 0.55s;
        }

        .boom-delay-700 {
          animation-delay: 0.7s;
        }

        .boom-delay-900 {
          animation-delay: 0.9s;
        }

        @keyframes boomFade {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.97);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .animate-boom {
          animation: boomFade 0.7s ease-out forwards;
        }

        @keyframes sectionFade {
          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }
        }

        .section-fade {
          animation: sectionFade 0.8s ease-out forwards;
        }

        @keyframes goldPulse {
          0% {
            box-shadow: 0 0 0 rgba(245, 197, 24, 0);
          }

          50% {
            box-shadow: 0 0 12px rgba(245, 197, 24, 0.35);
          }

          100% {
            box-shadow: 0 0 0 rgba(245, 197, 24, 0);
          }
        }

        .glow-gold {
          animation: goldPulse 2.8s ease-in-out infinite;
        }

        @keyframes lineGrow {
          from {
            height: 0;
          }

          to {
            height: 100%;
          }
        }

        .line-grow {
          animation: lineGrow 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
