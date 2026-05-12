import crypto from "crypto";

type PayLinkPayload = {
  amount: string;
  name: string;
  project: string;
  exp: string;
};

function toBasePayload(payload: PayLinkPayload) {
  return `${payload.amount}|${payload.name}|${payload.project}|${payload.exp}`;
}

export function signPayLinkPayload(payload: PayLinkPayload, secret: string): string {
  return crypto.createHmac("sha256", secret).update(toBasePayload(payload)).digest("hex");
}

export function verifyPayLinkPayload(payload: PayLinkPayload, signature: string, secret: string): boolean {
  const expected = signPayLinkPayload(payload, secret);

  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export function isExpired(exp: string): boolean {
  const expSeconds = Number(exp);
  if (!Number.isFinite(expSeconds)) {
    return true;
  }

  const nowSeconds = Math.floor(Date.now() / 1000);
  return nowSeconds > expSeconds;
}
