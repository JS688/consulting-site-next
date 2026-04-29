import { Suspense } from "react";

import EsPaymentCompleteClient from "./payment-complete-client";

export default function EsPaymentCompletePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#04060c] p-8 text-white">Cargando...</div>}>
      <EsPaymentCompleteClient />
    </Suspense>
  );
}