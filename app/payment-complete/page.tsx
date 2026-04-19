import { Suspense } from "react";

import PaymentCompleteClient from "./payment-complete-client";

export default function PaymentCompletePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#04060c] p-8 text-white">Loading...</div>}>
      <PaymentCompleteClient />
    </Suspense>
  );
}