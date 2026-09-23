import { AboutSection } from "./components/about";
import { ExperienceSection } from "./components/experience";
import { HeroSection } from "./components/hero";
import { Navbar } from "./components/navbar";
import { PortofolioSection } from "./components/portofolio";
import { SkillsSection } from "./components/skills";
import { TestimonialsSection } from "./components/testimonials";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <PortofolioSection />
      <ExperienceSection />
      <TestimonialsSection />
    </>
  );
}
