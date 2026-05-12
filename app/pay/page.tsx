import PayClient from "./PayClient";
import { isExpired, verifyPayLinkPayload } from "@/lib/payLink";
import type { ReactNode } from "react";
import { Lock, Mail, Send } from "lucide-react";

type Params = Record<string, string | string[] | undefined>;

function getFirst(value: string | string[] | undefined): string {
  if (Array.isArray(value)) {
    return value[0] || "";
  }

  return value || "";
}

export default async function PayPage({ searchParams }: { searchParams: Promise<Params> }) {
  const params = await searchParams;
  const amount = getFirst(params.amount);
  const name = getFirst(params.name) || getFirst(params.client);
  const project = getFirst(params.project);
  const token = getFirst(params.token);
  const exp = getFirst(params.exp);
  const sig = getFirst(params.sig);
  const hasClientPaymentParams = Boolean(amount || name || project || token || exp || sig);

  const secret = process.env.PAY_LINK_SECRET;
  const hasSignature = Boolean(amount && name && project && exp && sig);
  const signatureValid =
    Boolean(secret) &&
    hasSignature &&
    !isExpired(exp) &&
    verifyPayLinkPayload({ amount, name, project, exp }, sig, secret as string);

  const linkValid = !secret || signatureValid;

  if (!hasClientPaymentParams) {
    return <PublicPaymentsPage />;
  }

  return (
    <PayClient
      amountParam={amount}
      clientName={name}
      projectRef={project}
      token={token}
      exp={exp}
      sig={sig}
      linkValid={linkValid}
    />
  );
}

function PublicPaymentsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505] text-white antialiased">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_92%_8%,rgba(226,191,97,0.28),transparent_28%),radial-gradient(circle_at_3%_97%,rgba(226,191,97,0.26),transparent_31%),radial-gradient(circle_at_50%_0%,rgba(226,191,97,0.08),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_14%,transparent_86%,rgba(255,255,255,0.01))]" />

        <main className="relative mx-auto max-w-5xl px-6 pb-20 pt-12 text-center sm:px-8 sm:pb-24 sm:pt-14">
        <h1 className="font-serif text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
          Client Payments
        </h1>

        <div className="mx-auto mt-8 flex w-full max-w-35.5 items-center justify-center">
          <span className="h-px flex-1 bg-linear-to-r from-transparent via-[#8d6a19] to-[#8d6a19]/20" />
          <span className="mx-2 h-1.5 w-10 rounded-full bg-[radial-gradient(circle,#f0cf76_0%,#e2bf61_45%,rgba(226,191,97,0)_100%)] blur-[0.4px]" />
          <span className="h-px flex-1 bg-linear-to-l from-transparent via-[#8d6a19] to-[#8d6a19]/20" />
        </div>

        <div className="mx-auto mt-6 max-w-2xl space-y-5 text-xl leading-relaxed text-white/76 sm:text-[1.92rem] sm:leading-[1.7]">
          <p className="text-base text-white/88 sm:text-[1.05rem]">
            If you are an existing JulTech client, you can complete your project payment securely using your dedicated payment link.
          </p>
          <p className="text-base text-white/60 sm:text-[0.90rem]">
            Each payment link is created specifically for your project and includes the agreed scope and amount.
          </p>
        </div>

          <section className="mx-auto mt-6 max-w-[44rem] rounded-[22px] border border-[#8e6b21] bg-[linear-gradient(180deg,rgba(22,22,22,0.94),rgba(12,12,12,0.96))] px-5 py-6 shadow-[0_20px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.03)] sm:px-6 sm:py-7">
          <div className="grid gap-5">
            <InfoRow
              icon={<Lock className="h-6 w-6" strokeWidth={1.8} />}
              title="Secure & Trusted Payments"
              body={
                <>
                  Payments are securely processed through trusted providers including
                  <span className="text-[#e2bf61]"> Stripe</span> and
                  <span className="text-[#e2bf61]"> PayPal</span>. JulTech does not store or have access to your payment details.
                </>
              }
            />

            <div className="h-px bg-white/10" />

            <InfoRow
              icon={<Mail className="h-6 w-6" strokeWidth={1.8} />}
              title="Need Your Payment Link?"
              body={<>If you have not received your payment link, please contact us and we will provide one for your project.</>}
            />
          </div>
        </section>

        <div className="mt-10">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 rounded-[10px] border border-[#8e6b21] bg-[linear-gradient(180deg,rgba(19,19,19,0.92),rgba(10,10,10,0.98))] px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e2bf61] shadow-[0_14px_40px_rgba(0,0,0,0.35)] transition hover:border-[#cda84e] hover:text-[#f0cf76]"
          >
            <Send className="h-4 w-4" strokeWidth={1.9} />
            Contact JulTech
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-white/40">
          <SecurityBadgeIcon className="h-7 w-7 text-[#e2bf61]" />
          <p className="max-w-2xl text-xs leading-6 sm:text-[0.82rem] sm:whitespace-nowrap">
            For security reasons, payment links are issued individually per client and project.
          </p>
        </div>
      </main>
    </div>
  );
}

function SecurityBadgeIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 2.75 18.75 5.7v5.03c0 4.35-2.7 7.57-6.75 9.52-4.05-1.95-6.75-5.17-6.75-9.52V5.7L12 2.75Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M12 8.6v3.15"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M10.55 12.95h2.9"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function InfoRow({
  icon,
  title,
  body,
  muted = false,
}: {
  icon: ReactNode;
  title: string;
  body: ReactNode;
  muted?: boolean;
}) {
  return (
    <div className="grid items-start gap-4 sm:grid-cols-[72px_1fr] sm:gap-5">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#8e6b21]/55 bg-[radial-gradient(circle_at_50%_35%,rgba(226,191,97,0.08),rgba(255,255,255,0.02)_55%,rgba(0,0,0,0.12)_100%)] text-[#e2bf61] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] sm:mx-0">
        {icon}
      </div>

      <div className="text-center sm:text-left">
        <h2 className={`text-[0.93rem] font-medium tracking-tight sm:text-[1.05rem] ${muted ? "text-white/60" : "text-white/88"}`}>{title}</h2>
        <p className={`mt-2 max-w-xl text-[0.93rem] sm:text-[1.02rem] ${muted ? "text-white/50" : "text-white/60"}`}>{body}</p>
      </div>
    </div>
  );
}
