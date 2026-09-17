import { Navigation } from "../components/Navigation";
import { Hero } from "../components/Hero";
import { FeaturedProjects } from "../components/FeaturedProjects";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F2EC]">
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <Navigation />
      <main id="main-content">
        <Hero />
        <FeaturedProjects />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
