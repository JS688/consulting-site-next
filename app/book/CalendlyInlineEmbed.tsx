"use client";

import { useEffect, useMemo, useRef } from "react";
import { useSearchParams } from "next/navigation";

import { CALENDLY_LINKS } from "@/lib/sessionLinks";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: Element;
        prefill?: Record<string, string>;
        utm?: Record<string, string>;
      }) => void;
    };
  }
}

const CALENDLY_SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export default function CalendlyInlineEmbed() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const searchParams = useSearchParams();

  const session = searchParams.get("session") === "full" ? "full" : "short";

  const calendlyUrl = useMemo(() => {
    const params = new URLSearchParams({
      hide_landing_page_details: "1",
      hide_event_type_details: "1",
      hide_gdpr_banner: "1",
    });

    return `${CALENDLY_LINKS[session]}?${params.toString()}`;
  }, [session]);

  const prefill = useMemo(() => {
    const name = searchParams.get("name")?.trim();
    const email = searchParams.get("email")?.trim();
    const nextPrefill: Record<string, string> = {};

    if (name) {
      nextPrefill.name = name;
    }

    if (email) {
      nextPrefill.email = email;
    }

    return Object.keys(nextPrefill).length > 0 ? nextPrefill : undefined;
  }, [searchParams]);

  useEffect(() => {
    const initializeWidget = () => {
      if (!containerRef.current || !window.Calendly) {
        return;
      }

      containerRef.current.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: calendlyUrl,
        parentElement: containerRef.current,
        prefill,
      });
    };

    if (window.Calendly) {
      initializeWidget();
      return;
    }

    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${CALENDLY_SCRIPT_SRC}"]`);

    if (existingScript) {
      existingScript.addEventListener("load", initializeWidget, { once: true });
      return () => existingScript.removeEventListener("load", initializeWidget);
    }

    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT_SRC;
    script.async = true;
    script.onload = initializeWidget;
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [calendlyUrl, prefill]);

  return (
    <div
      ref={containerRef}
      className="calendly-inline-widget min-w-80 h-225 w-full"
      data-url={calendlyUrl}
    />
  );
}