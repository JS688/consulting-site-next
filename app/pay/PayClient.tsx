"use client";

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  CreditCard,
  FileText,
  Lock,
  Mail,
  ShieldCheck,
  Wallet,
} from "lucide-react";

type PaymentPageProps = {
  stripeSessionEndpoint?: string;
  paypalOrderEndpoint?: string;
  amountParam: string;
  clientName: string;
  projectRef: string;
  token: string;
  exp: string;
  sig: string;
  linkValid: boolean;
};

export default function JulTechPaymentOptionsPage({
  stripeSessionEndpoint = "/api/create-stripe-session",
  paypalOrderEndpoint = "/api/paypal/create-order",
  amountParam,
  clientName: clientNameProp,
  projectRef: projectRefProp,
  token: tokenProp,
  exp: expProp,
  sig: sigProp,
}: PaymentPageProps) {
  const searchParams = useSearchParams();

  const [clientName, setClientName] = useState("");
  const [projectRef, setProjectRef] = useState("");
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("");
  const [exp, setExp] = useState("");
  const [sig, setSig] = useState("");
  const [loadingStripe, setLoadingStripe] = useState(false);

  useEffect(() => {
    setClientName(searchParams.get("name") ?? clientNameProp ?? "");
    setProjectRef(searchParams.get("project") ?? projectRefProp ?? "");
    setAmount(searchParams.get("amount") ?? amountParam ?? "");
    setToken(searchParams.get("token") ?? tokenProp ?? "");
    setExp(searchParams.get("exp") ?? expProp ?? "");
    setSig(searchParams.get("sig") ?? sigProp ?? "");
  }, [searchParams, clientNameProp, projectRefProp, amountParam, tokenProp, expProp, sigProp]);

  const amountCents = useMemo(() => {
    const n = Number(amount);
    return Number.isFinite(n) && n > 0 ? Math.round(n * 100) : 0;
  }, [amount]);

  const displayAmount = useMemo(() => {
    if (!amountCents) return "Set per client";
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(amountCents / 100);
  }, [amountCents]);

  const canPay = amountCents > 0;
  const paypalClientId = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

  const startStripeCheckout = async () => {
    if (!canPay || loadingStripe) return;

    try {
      setLoadingStripe(true);

      const res = await fetch(stripeSessionEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amountCents,
          clientName,
          projectRef,
          token,
          exp,
          sig,
        }),
      });

      if (!res.ok) throw new Error("Unable to create Stripe checkout session");

      const data: { url?: string } = await res.json();
      if (!data.url) throw new Error("Missing Stripe checkout URL");

      window.location.href = data.url;
    } catch (err) {
      console.error(err);
      alert("Stripe checkout could not be started.");
    } finally {
      setLoadingStripe(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,rgba(226,191,97,0.10),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(226,191,97,0.05),transparent_18%),radial-gradient(circle_at_80%_25%,rgba(255,255,255,0.03),transparent_16%)]" />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="/" className="flex items-center gap-2.5">
            <span className="text-2xl font-semibold tracking-tight text-[#e2bf61]">JT</span>
            <span className="text-lg font-medium tracking-tight">
              JulTech<span className="text-white/55">TM</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="/" className="transition hover:text-white">Home</a>
            <a href="/services" className="transition hover:text-white">Services</a>
            <a href="/ai-visibility" className="transition hover:text-white">AI Visibility</a>
            <a href="/about" className="transition hover:text-white">About</a>
            <a href="/blog" className="transition hover:text-white">Blog</a>
            <a href="/contact" className="transition hover:text-white">Contact</a>
          </nav>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#ffcb2f] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,203,47,0.20)] transition hover:opacity-95"
          >
            Call an Expert
          </a>
        </div>
      </header>

      <main className="relative mx-auto min-h-[calc(100vh-73px)] max-w-6xl px-5 py-10 sm:px-8 lg:px-10 lg:py-12">
        <section className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.45em] text-[#e2bf61]">Secure Payment</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight sm:text-5xl lg:text-6xl">Complete Your Project Payment</h1>
          <div className="mx-auto mt-4 h-px w-14 bg-[#e2bf61]/70" />
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/68 sm:text-lg">Secure, fast, and easy payment for your JulTech project.</p>
        </section>

        <section className="mt-8 grid gap-5 lg:grid-cols-[1fr_1.08fr] lg:gap-6">
          <div className="rounded-3xl border border-white/10 bg-white/3 px-6 py-7 shadow-[0_10px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-8 sm:py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e2bf61]/55 bg-[#e2bf61]/10 text-[#e2bf61]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e2bf61]">Invoice Summary</p>
                  <h2 className="mt-1 font-serif text-2xl tracking-tight">Project Details</h2>
                </div>
              </div>
              <BadgeDollarSign className="h-5 w-5 text-white/40" />
            </div>

            <div className="mt-6 space-y-4">
              <SummaryRow label="Client" value={clientName || "Not specified"} />
              <SummaryRow label="Project" value={projectRef || "Not specified"} />
              <SummaryRow label="Amount" value={displayAmount} strong />
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="flex items-start gap-3">
                <Lock className="mt-0.5 h-4 w-4 text-[#e2bf61]" />
                <p className="text-sm leading-6 text-white/65">This amount is locked from your secure client link and cannot be changed.</p>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-white/55">
              <CheckCircle2 className="h-4 w-4 text-[#e2bf61]" />
              <span>Payment for consulting and digital services provided by JulTech.</span>
            </div>
          </div>

          <div className="rounded-3xl border border-[#e2bf61]/35 bg-white/3 px-6 py-7 shadow-[0_10px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-8 sm:py-8">
            <div className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:justify-center sm:gap-4 sm:text-left">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#e2bf61]/55 bg-[#e2bf61]/10 text-[#e2bf61]">
                <Wallet className="h-6 w-6" />
              </div>
              <div className="mt-3 sm:mt-0">
                <p className="text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e2bf61]">Choose Your Payment Method</p>
                <h2 className="mt-2 font-serif text-3xl tracking-tight">Stripe or PayPal</h2>
              </div>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[#e2bf61]/40 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2bf61]/35 bg-[#e2bf61]/10 text-[#e2bf61]">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white">Pay with Card</h3>
                    <p className="mt-1 text-sm leading-6 text-white/58">Secure checkout powered by Stripe</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={startStripeCheckout}
                  disabled={!canPay || loadingStripe}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e2bf61] px-4 py-3 text-sm font-semibold text-black transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {loadingStripe ? "Loading..." : "Pay with Card"}
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="mt-3 text-center text-xs text-white/42">Client-specific amount required</p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e2bf61]/35 bg-[#e2bf61]/10 text-[#e2bf61]">
                    <span className="text-lg font-bold tracking-tight text-[#e2bf61]">PP</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-white">Pay with PayPal</h3>
                    <p className="mt-1 text-sm leading-6 text-white/58">Pay using your PayPal account</p>
                  </div>
                </div>

                <div className="mt-5 overflow-hidden rounded-2xl">
                  {paypalClientId ? (
                    <PayPalScriptProvider
                      options={{
                        clientId: paypalClientId,
                        currency: "USD",
                        intent: "capture",
                      }}
                    >
                      <PayPalButtons
                        style={{
                          layout: "horizontal",
                          color: "gold",
                          shape: "rect",
                          label: "paypal",
                          tagline: false,
                        }}
                        disabled={!canPay}
                        createOrder={async () => {
                          const res = await fetch(paypalOrderEndpoint, {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                              amountCents,
                              clientName,
                              projectRef,
                              token,
                              exp,
                              sig,
                            }),
                          });

                          if (!res.ok) throw new Error("Unable to create PayPal order");

                          const data: { id?: string; approvalUrl?: string } = await res.json();
                          if (data.approvalUrl) {
                            window.location.href = data.approvalUrl;
                            return "";
                          }
                          if (!data.id) throw new Error("Missing PayPal order id");
                          return data.id;
                        }}
                        onApprove={async (data) => {
                          const res = await fetch("/api/paypal/capture-order", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ orderID: data.orderID }),
                          });

                          if (!res.ok) throw new Error("Unable to capture PayPal order");

                          window.location.href = `/pay/success?provider=paypal&orderID=${data.orderID}`;
                        }}
                        onError={(err) => {
                          console.error(err);
                          alert("PayPal checkout could not be started.");
                        }}
                      />
                    </PayPalScriptProvider>
                  ) : (
                    <div className="rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white/55">Missing NEXT_PUBLIC_PAYPAL_CLIENT_ID</div>
                  )}
                </div>

                <p className="mt-3 text-center text-xs text-white/42">Client-specific amount required</p>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/25 p-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-4 w-4 text-[#e2bf61]" />
                <p className="text-sm leading-6 text-white/65">
                  All payments are securely processed by Stripe or PayPal. JulTech does not store or have access to your payment details.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/45">
              <Mail className="h-4 w-4 text-[#e2bf61]" />
              <span>A receipt and confirmation will be emailed after payment.</span>
            </div>
          </div>
        </section>

        <div className="mx-auto mt-6 max-w-4xl rounded-2xl border border-white/10 bg-white/3 px-5 py-4 text-center text-sm text-white/68">
          Private client link example: jultechai.com/pay/acme-seo-april
        </div>
      </main>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/40">{label}</p>
      <p className={`mt-1 ${strong ? "text-lg font-semibold text-[#e2bf61]" : "text-sm text-white"}`}>{value}</p>
    </div>
  );
}
