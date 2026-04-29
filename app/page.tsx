
import PrimaryHeroShowcase from "./components/homepage/PrimaryHeroShowcase";
import PricingSection from "./components/homepage/PricingSection";
import VisibilityReportCTA from "./components/homepage/VisibilityReportCTA";
import SectionLocalSeoFaq from "./components/homepage/FAQ";
import WhatWeDo from "./components/homepage/WhatWeDo";
import WhoThisIsFor from "./components/homepage/WhoThisIsFor";
import Hero from "./components/homepage/Hero";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <div id="home">
        <PrimaryHeroShowcase />
        <WhoThisIsFor />
        <Hero />
        <WhatWeDo />
        <PricingSection />
        <VisibilityReportCTA />
      </div>
      <SectionLocalSeoFaq />
    </main>
  );
}

