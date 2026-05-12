import { NextRequest, NextResponse } from "next/server";
import { isExpired, verifyPayLinkPayload } from "@/lib/payLink";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const amount = Number(body?.amount || 0);
    const amountString = String(body?.amount || "");
    const name = String(body?.clientName || "");
    const project = String(body?.projectRef || "");
    const exp = String(body?.exp || "");
    const sig = String(body?.sig || "");
    const token = String(body?.token || "");

    if (!Number.isFinite(amount) || amount <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const requiredToken = process.env.CLIENT_PAYMENT_TOKEN;
    if (requiredToken && token !== requiredToken) {
      return NextResponse.json({ error: "Invalid payment token" }, { status: 403 });
    }

    const linkSecret = process.env.PAY_LINK_SECRET;
    if (linkSecret) {
      if (!amountString || !name || !project || !exp || !sig) {
        return NextResponse.json({ error: "Missing signed link data" }, { status: 403 });
      }

      if (isExpired(exp)) {
        return NextResponse.json({ error: "Payment link has expired" }, { status: 403 });
      }

      const valid = verifyPayLinkPayload({ amount: amountString, name, project, exp }, sig, linkSecret);
      if (!valid) {
        return NextResponse.json({ error: "Invalid payment signature" }, { status: 403 });
      }
    }

    const approvalUrl = process.env.PAYPAL_PAYMENT_LINK_URL || process.env.PAYPAL_ME_LINK_URL;

    if (!approvalUrl) {
      return NextResponse.json({ error: "PayPal link is not configured" }, { status: 501 });
    }

    return NextResponse.json({ approvalUrl }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Failed to create PayPal order" }, { status: 500 });
  }
}
