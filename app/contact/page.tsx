import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function ContactPage() {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(userAgent);

  if (isMobile) {
    redirect("tel:+18033861672");
  }

  return (
    <main className="min-h-screen bg-[#050505] px-4 py-12 text-white sm:px-6 md:px-10">
      <div className="mx-auto max-w-xl rounded-3xl border border-white/10 bg-white/3 p-6 text-center sm:p-8">
        <p className="text-xs uppercase tracking-[0.28em] text-[#d7b35a]">Contact</p>
        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">Talk to an Expert</h1>
        <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base">
          Call directly at (803) 386-1672.
        </p>

        <a
          href="tel:+18033861672"
          className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#d7b35a] px-5 py-3 text-sm font-semibold text-black transition hover:bg-[#ebca79] sm:w-auto"
        >
          Call (803) 386-1672
        </a>
      </div>
    </main>
  );
}

