import Hero from "../components/homepage/Hero";
import MissionBlock from "../components/MissionBlock";
import SectionHowCustomersFind from "../components/homepage/SectionHowCustomersFind";
import PricingSection from "../components/homepage/PricingSection";
import SectionLocalSeoFaq from "../components/homepage/FAQ";
import SectionSeoAeoGeo from "../components/homepage/Multilingualsection";
import SectionFourSystem from "../components/homepage/SectionFourSystem";
import SectionCTA from "../components/homepage/SectionCTA";
import WhatWeDo from "../components/homepage/WhatWeDo";
import WhyJulTech from "../components/homepage/WhyJulTech";

export default function StrategyCallPage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <MissionBlock />
      <WhatWeDo />
      <WhyJulTech />
      <SectionHowCustomersFind />
      <PricingSection />
      <SectionSeoAeoGeo />
      <SectionFourSystem />
      <SectionLocalSeoFaq />
      <SectionCTA />
    </main>
  );
}