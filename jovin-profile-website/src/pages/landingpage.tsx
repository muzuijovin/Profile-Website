import { AboutPage } from "../components/about";
import { HeroSection } from "../components/hero";
import { Navbar } from "../components/navbar";
import { SkillsPage } from "../components/skills";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutPage />
      <SkillsPage />
    </>
  );
}
