import { AboutSection } from "./components/about";
import { ExperienceSection } from "./components/experience";
import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { PortofolioSection } from "./components/portofolio";
import { SkillsSection } from "./components/skills";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortofolioSection />
      <ExperienceSection />
    </>
  );
}
