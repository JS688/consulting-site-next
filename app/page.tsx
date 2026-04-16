
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
      <div className="w-full" style={{ borderTop: "1px solid rgba(212,175,55,0.35)", background: "linear-gradient(to bottom, rgba(212,175,55,0.08), transparent)", height: "80px" }} />
      <VisibilityOutcomeSection />

      <FAQSection />
    </main>
  );
}

