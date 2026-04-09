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
      <div className="mx-auto max-w-4xl text-center">
        <p className={`text-xl font-medium tracking-wide text-yellow-300 md:text-2xl ${visible ? "animate-paintIn" : "opacity-0"}`}>
          Be found. Be the answer. Be chosen
          <span className="align-super text-[0.7em]">TM</span>
        </p>
        <p className={`mt-2 text-sm text-neutral-500 md:text-base ${visible ? "animate-paintIn [animation-delay:0.15s]" : "opacity-0"}`}>
          Google shows options. AI makes decisions.
        </p>

        <div className="relative mt-8 left-1/2 w-screen -translate-x-1/2 md:mt-10">
          <div className="h-16 md:h-18">
            <div className={`relative overflow-hidden ${visible ? "animate-dividerSlide" : "w-0 opacity-0"}`}>
              <div className="h-0.5 w-full bg-neutral-600/65 animate-dividerPulse" />
              <div className="absolute inset-y-0 left-0 w-24 bg-linear-to-r from-transparent via-yellow-300/60 to-transparent animate-goldSweep" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}