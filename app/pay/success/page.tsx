export default function PaySuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="rounded-3xl border border-white/10 bg-white/3 p-8 text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[#e2bf61]">Payment Complete</p>
        <h1 className="mt-4 font-serif text-4xl">Thank you</h1>
        <p className="mt-4 text-white/65">Your payment has been received. We will follow up shortly.</p>
      </div>
    </main>
  );
}
