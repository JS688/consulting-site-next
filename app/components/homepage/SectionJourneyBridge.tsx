"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionJourneyBridge() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black px-6 pb-0 pt-4 text-white sm:px-8 md:pb-1 md:pt-6 lg:px-12 lg:pt-8"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bridge-orb-a absolute -left-16 top-0 h-48 w-48 rounded-full bg-yellow-300/8 blur-3xl" />
        <div className="bridge-orb-b absolute -right-16 top-6 h-56 w-56 rounded-full bg-white/4 blur-3xl" />
        <div className="bridge-orb-c absolute left-1/2 top-10 h-32 w-72 -translate-x-1/2 rounded-full bg-yellow-300/5 blur-3xl" />
        <div className="bridge-sheen absolute inset-y-0 left-[-20%] w-1/3 bg-linear-to-r from-transparent via-white/4 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className={`text-xl font-medium tracking-wide text-yellow-300 md:text-2xl ${visible ? "animate-paintIn" : "opacity-0"}`}>
          Be found. Be the answer. Be chosen
          <span className="align-super text-[0.7em]">TM</span>
        </p>
        <p className={`mt-2 text-sm text-neutral-500 md:text-base ${visible ? "animate-paintIn [animation-delay:0.15s]" : "opacity-0"}`}>
          Google shows options. AI makes decisions.
        </p>

        <div className={`relative z-20 mt-12 overflow-hidden ${visible ? "animate-paintIn [animation-delay:0.25s]" : "opacity-0"}`}>
          <div className="relative h-6 w-full overflow-hidden md:h-8 lg:h-10">
            <div className="absolute inset-0 z-10 bg-linear-to-b from-transparent via-transparent to-black/18" />
            <video
          aria-hidden="true"
              src="/logos/line.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="block h-full w-full object-cover opacity-95"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bridge-orb-a {
          animation: driftA 14s ease-in-out infinite;
        }

        .bridge-orb-b {
          animation: driftB 18s ease-in-out infinite;
        }

        .bridge-orb-c {
          animation: pulseGlow 8s ease-in-out infinite;
        }

        .bridge-sheen {
          animation: sweepAmbient 12s linear infinite;
        }

        @keyframes driftA {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(34px, 18px, 0) scale(1.08);
          }
        }

        @keyframes driftB {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(-28px, 22px, 0) scale(0.94);
          }
        }

        @keyframes pulseGlow {
          0%,
          100% {
            opacity: 0.35;
            transform: translateX(-50%) scale(0.96);
          }

          50% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1.04);
          }
        }

        @keyframes sweepAmbient {
          0% {
            transform: translateX(0);
            opacity: 0;
          }

          15% {
            opacity: 0.35;
          }

          50% {
            opacity: 0.15;
          }

          100% {
            transform: translateX(420%);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}