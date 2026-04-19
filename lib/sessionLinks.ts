export const STRIPE_PAYMENT_LINKS = {
  short: "https://buy.stripe.com/4gM14g15QePK9tCf3xabK01",
  full: "https://buy.stripe.com/3cIfZadSCePKcFOaNhabK02",
} as const;

export const CALENDLY_LINKS = {
  short: "https://calendly.com/jultech-ai/new-meeting-1",
  full: "https://calendly.com/jultech-ai/1-hour-strategy-session",
} as const;

export type SessionType = keyof typeof STRIPE_PAYMENT_LINKS;