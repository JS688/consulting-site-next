"use client";

import FounderSection from "../homepage/FounderSection";

type Locale = "en" | "es";

export default function AboutPageContent({ locale = "en" }: { locale?: Locale }) {
  return <FounderSection locale={locale} />;
}