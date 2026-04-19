
import Hero from "./components/homepage/Hero";
import SectionHowCustomersFind from "./components/homepage/SectionHowCustomersFind";
import VisibilityOutcomeSection from "./components/homepage/VisibilityOutcomeSection";

import FAQSection from "./components/homepage/FAQSection";

export default function HomePage() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <SectionHowCustomersFind />
      {/* Gold line divider */}

      <div className="w-full bg-[#111113] pb-4 pt-0">
        <div className="h-0.5 w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.25)_15%,rgba(255,255,255,0.25)_85%,transparent)]" />
      </div>
      <VisibilityOutcomeSection />

      <div className="w-full bg-black pb-4 pt-0">
        <div className="h-0.5 w-full bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.25)_15%,rgba(255,255,255,0.25)_85%,transparent)]" />
      </div>

      <FAQSection />
    </main>
  );
}

