
import PrimaryHeroShowcase from "./components/homepage/PrimaryHeroShowcase";
import PricingSection from "./components/homepage/PricingSection";
import SectionLocalSeoFaq from "./components/homepage/FAQ";
import WhoThisIsFor from "./components/homepage/WhoThisIsFor";
import CTASection from "./components/CTASection";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-x-clip w-full">
      <div id="home">
        <PrimaryHeroShowcase />
        <WhoThisIsFor />
        <PricingSection />
      </div>
      <CTASection />
      <SectionLocalSeoFaq />
    </main>
  );
}

