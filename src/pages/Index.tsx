import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Expertise } from "@/components/Expertise";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);
  const location = useLocation();

  // Handle hash navigation from other pages
  useEffect(() => {
    if (location.hash && !showIntro) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash, showIntro]);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <div className={`min-h-screen ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <Expertise />
        <Gallery />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Index;
