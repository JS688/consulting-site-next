import Stripe from "stripe";
import { NextResponse } from "next/server";
import { isExpired, verifyPayLinkPayload } from "@/lib/payLink";
import { STRIPE_PAYMENT_LINKS } from "@/lib/sessionLinks";

const stripeSecret = process.env.STRIPE_SECRET_KEY;
const stripe = stripeSecret
  ? new Stripe(stripeSecret, {
      apiVersion: "2026-04-22.dahlia",
    })
  : null;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const amountCents = Number(body?.amountCents || 0);
    const clientName = String(body?.clientName || "");
    const projectRef = String(body?.projectRef || "");
    const amount = amountCents > 0 ? (amountCents / 100).toFixed(2) : "";
    const exp = String(body?.exp || "");
    const sig = String(body?.sig || "");
    const token = String(body?.token || "");

    if (!Number.isInteger(amountCents) || amountCents <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const requiredToken = process.env.CLIENT_PAYMENT_TOKEN;
    if (requiredToken && token !== requiredToken) {
      return NextResponse.json({ error: "Invalid payment token" }, { status: 403 });
    }

    const linkSecret = process.env.PAY_LINK_SECRET;
    if (linkSecret) {
      if (!amount || !clientName || !projectRef || !exp || !sig) {
        return NextResponse.json({ error: "Missing signed link data" }, { status: 403 });
      }

      if (isExpired(exp)) {
        return NextResponse.json({ error: "Payment link has expired" }, { status: 403 });
      }

      const valid = verifyPayLinkPayload({ amount, name: clientName, project: projectRef, exp }, sig, linkSecret);
      if (!valid) {
        return NextResponse.json({ error: "Invalid payment signature" }, { status: 403 });
      }
    }

    const origin = new URL(request.url).origin;

    if (!stripe) {
      const fallbackUrl = process.env.STRIPE_PAYMENT_LINK_URL || STRIPE_PAYMENT_LINKS.full;
      return NextResponse.json({ url: fallbackUrl }, { status: 200 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: projectRef ? `JulTech Project Payment - ${projectRef}` : "JulTech Project Payment",
              description: clientName ? `Client: ${clientName}` : undefined,
            },
            unit_amount: amountCents,
          },
          quantity: 1,
        },
      ],
      metadata: {
        clientName,
        projectRef,
      },
      success_url: `${origin}/pay/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/pay?amount=${(amountCents / 100).toFixed(2)}&name=${encodeURIComponent(clientName)}&project=${encodeURIComponent(projectRef)}`,
    });

    return NextResponse.json({ url: session.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to create Stripe session" }, { status: 500 });
  }
}
