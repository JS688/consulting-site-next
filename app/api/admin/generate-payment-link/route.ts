import { NextResponse } from "next/server";
import { signPayLinkPayload } from "@/lib/payLink";

type GenerateLinkBody = {
  amount?: number | string;
  name?: string;
  project?: string;
  days?: number;
  passcode?: string;
};

function getBaseUrl(origin: string) {
  const envBase = process.env.PAY_LINK_BASE_URL;
  if (envBase) {
    return envBase.replace(/\/$/, "");
  }

  return origin.replace(/\/$/, "");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as GenerateLinkBody;

    const amount = Number(body.amount);
    const name = String(body.name || "").trim();
    const project = String(body.project || "").trim();
    const days = Number(body.days || 14);
    const passcode = String(body.passcode || "");

    const requiredPasscode = process.env.ADMIN_PAYMENT_LINK_PASSCODE;
    if (!requiredPasscode) {
      return NextResponse.json({ error: "ADMIN_PAYMENT_LINK_PASSCODE is not configured" }, { status: 500 });
    }

    if (passcode !== requiredPasscode) {
      return NextResponse.json({ error: "Invalid admin passcode" }, { status: 403 });
    }

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    if (!name || !project) {
      return NextResponse.json({ error: "Client name and project are required" }, { status: 400 });
    }

    if (!Number.isFinite(days) || days < 1 || days > 90) {
      return NextResponse.json({ error: "Days must be between 1 and 90" }, { status: 400 });
    }

    const secret = process.env.PAY_LINK_SECRET;
    if (!secret) {
      return NextResponse.json({ error: "PAY_LINK_SECRET is not configured" }, { status: 500 });
    }

    const exp = String(Math.floor(Date.now() / 1000) + Math.floor(days) * 24 * 60 * 60);
    const amountString = String(amount);
    const sig = signPayLinkPayload({ amount: amountString, name, project, exp }, secret);

    const baseUrl = getBaseUrl(new URL(request.url).origin);
    const params = new URLSearchParams({
      amount: amountString,
      name,
      project,
      exp,
      sig,
    });

    const url = `${baseUrl}/pay?${params.toString()}`;

    return NextResponse.json({ url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to generate payment link" }, { status: 500 });
  }
}
