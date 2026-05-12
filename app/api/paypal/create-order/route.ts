import { NextResponse } from "next/server";
import { isExpired, verifyPayLinkPayload } from "@/lib/payLink";

const base =
  process.env.PAYPAL_ENV === "live"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";

async function getAccessToken() {
  const clientId = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;

  if (!clientId || !secret) {
    throw new Error("PayPal credentials are not configured");
  }

  const auth = Buffer.from(`${clientId}:${secret}`).toString("base64");

  const res = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error("Failed to get PayPal access token");
  }

  const data = await res.json();
  return data.access_token as string;
}

export async function POST(req: Request) {
  try {
    const { amountCents, clientName, projectRef, exp, sig, token } = await req.json();

    if (!Number.isInteger(amountCents) || amountCents <= 0) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const requiredToken = process.env.CLIENT_PAYMENT_TOKEN;
    if (requiredToken && token !== requiredToken) {
      return NextResponse.json({ error: "Invalid payment token" }, { status: 403 });
    }

    const amount = (amountCents / 100).toFixed(2);
    const name = String(clientName || "");
    const project = String(projectRef || "");
    const expString = String(exp || "");
    const sigString = String(sig || "");

    const linkSecret = process.env.PAY_LINK_SECRET;
    if (linkSecret) {
      if (!amount || !name || !project || !expString || !sigString) {
        return NextResponse.json({ error: "Missing signed link data" }, { status: 403 });
      }

      if (isExpired(expString)) {
        return NextResponse.json({ error: "Payment link has expired" }, { status: 403 });
      }

      const valid = verifyPayLinkPayload({ amount, name, project, exp: expString }, sigString, linkSecret);
      if (!valid) {
        return NextResponse.json({ error: "Invalid payment signature" }, { status: 403 });
      }
    }

    const fallbackApprovalUrl = process.env.PAYPAL_PAYMENT_LINK_URL || process.env.PAYPAL_ME_LINK_URL;
    if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
      if (!fallbackApprovalUrl) {
        return NextResponse.json({ error: "PayPal is not configured" }, { status: 500 });
      }

      return NextResponse.json({ approvalUrl: fallbackApprovalUrl }, { status: 200 });
    }

    const accessToken = await getAccessToken();

    const res = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: amount,
            },
            description: project || "JulTech Project Payment",
            custom_id: name || undefined,
          },
        ],
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("PayPal create order error:", data);
      return NextResponse.json({ error: "Unable to create PayPal order" }, { status: 500 });
    }

    return NextResponse.json({ id: data.id });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unable to create PayPal order" }, { status: 500 });
  }
}
