export type AppraisalLocale = "en" | "es";

export function getAppraisalRangeLabel(locale: AppraisalLocale) {
  return locale === "es" ? "$100 a $300" : "$100-$300";
}

export function getSpecificAppraisalPriceLabel(interestLabel?: string) {
  const normalized = interestLabel?.toLowerCase();

  if (!normalized) {
    return null;
  }

  if (normalized.includes("starter") || normalized.includes("foundation") || normalized.includes("base")) {
    return "$100";
  }

  if (normalized.includes("growth") || normalized.includes("visibility") || normalized.includes("visibilidad")) {
    return "$200";
  }

  if (
    normalized.includes("premium") ||
    normalized.includes("advanced") ||
    normalized.includes("custom") ||
    normalized.includes("authority") ||
    normalized.includes("autoridad")
  ) {
    return "$300";
  }

  return null;
}