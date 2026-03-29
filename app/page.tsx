import Hero from "./components/Hero";
import IntroBlock from "./components/IntroBlock";
import SignatureFramework from "./components/SignatureFramework";
import FounderSection from "./components/founder/FounderSection";

export default function HomePage() {
  return (
    <main>
      <h1>Hello Julia</h1>
      <Hero />
      <IntroBlock />
      <SignatureFramework />
      <FounderSection />
    </main>
  );
}