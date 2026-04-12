
import Hero from "./components/homepage/Hero";
import FeaturedWork from "./components/homepage/FeaturedWork";
import MissionBlock from "./components/MissionBlock";
import SectionHowCustomersFind from "./components/homepage/SectionHowCustomersFind";
import SectionLocalSeoFaq from "./components/homepage/FAQ";
import SectionSeoAeoGeo from "./components/homepage/Multilingualsection";
import SectionFourSystem from "./components/homepage/SectionFourSystem";
import SectionCTA from "./components/homepage/SectionCTA";
import WhatWeDo from "./components/homepage/WhatWeDo";
import WhyJulTech from "./components/homepage/WhyJulTech";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <MissionBlock />
      <WhatWeDo />
      <FeaturedWork />
      <WhyJulTech />
      <SectionHowCustomersFind />
      <SectionSeoAeoGeo />
      <SectionFourSystem />
      <SectionLocalSeoFaq />
      <SectionCTA />
    </main>
  );
}

