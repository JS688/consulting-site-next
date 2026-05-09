import type { Metadata } from "next";

import PrimaryHeroShowcase from "../components/homepage/PrimaryHeroShowcase";
import PricingSection from "../components/homepage/PricingSection";
import VisibilityReportCTA from "../components/homepage/VisibilityReportCTA";
import SectionLocalSeoFaq from "../components/homepage/FAQ";
import WhoThisIsFor from "../components/homepage/WhoThisIsFor";
import Hero from "../components/homepage/Hero";

export const metadata: Metadata = {
  title: "Construimos sitios web que aparecen en Google y ayudan a que sus clientes se encuentren.",
  description:
    "Las páginas web modernas y de alto rendimiento, diseñadas para atraer clientes, posicionarse en Google y ser entendidas claramente por los sistemas de búsqueda actuales.",
};

export default function EsHomePage() {
  return (
    <main className="bg-black text-white">
      <div id="home">
        <PrimaryHeroShowcase locale="es" />
        <WhoThisIsFor locale="es" />
        <Hero />
        <PricingSection locale="es" />
        <VisibilityReportCTA locale="es" />
      </div>
      <SectionLocalSeoFaq locale="es" />
    </main>
  );
}
