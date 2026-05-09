"use client";

import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;

    script.onload = () => {
      if (typeof window !== "undefined" && (window as any).Calendly) {
        (window as any).Calendly.initPageCalendar({
          url: url,
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [url]);

  return (
    <div
      className="calendly-inline-widget mx-auto w-full"
      data-url={url}
      style={{ minWidth: "320px", height: "100vh" }}
    />
  );
}
