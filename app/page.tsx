
import Hero from "./components/homepage/Hero";
import SectionHowCustomersFind from "./components/homepage/SectionHowCustomersFind";
import SectionJourneyBridge from "./components/homepage/SectionJourneyBridge";
import SectionFourSystem from "./components/homepage/SectionFourSystem";
import SectionCTA from "./components/homepage/SectionCTA";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <SectionHowCustomersFind />
      <SectionJourneyBridge />
      <SectionFourSystem />
      <SectionCTA />
    </main>
  );
}

