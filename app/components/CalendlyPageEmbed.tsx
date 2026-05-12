"use client";

import { useEffect, useRef } from "react";

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initCalendly = () => {
      if (typeof window !== "undefined" && (window as any).Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        (window as any).Calendly.initInlineWidget({
          url,
          parentElement: containerRef.current,
        });
      }
    };

    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]') as HTMLScriptElement | null;
    if (existingScript) {
      if ((window as any).Calendly) {
        initCalendly();
      } else {
        existingScript.addEventListener("load", initCalendly, { once: true });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = initCalendly;

    document.body.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, [url]);

  return (
    <div
      ref={containerRef}
      className="mx-auto w-full"
      style={{ minWidth: "320px", height: "100vh" }}
    />
  );
}
