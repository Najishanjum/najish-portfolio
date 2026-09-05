import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { GitHubActivity } from "@/components/GitHubActivity";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { VisitingCard } from "@/components/VisitingCard";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { IntroAnimation } from "@/components/IntroAnimation";
import { ViewCounter } from "@/components/ViewCounter";
import { NAChatBot } from "@/components/NAChatBot";
import { VoiceIntro } from "@/components/VoiceIntro";

const Index = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("na_intro_played");
    }
    return true;
  });

  const handleCompleteIntro = () => {
    setShowIntro(false);
    sessionStorage.setItem("na_intro_played", "true");
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
  };

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
      {showIntro && <IntroAnimation onComplete={handleCompleteIntro} />}
      <div className={`min-h-screen ${showIntro ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
        <Navigation onReplayIntro={handleReplayIntro} />
        <Hero onReplayIntro={handleReplayIntro} />
        <About />
        <Projects />
        <Experience />
        <TechStack />
        <GitHubActivity />
        <FeaturedVideo />
        <Gallery />
        <Testimonials />
        <VisitingCard />
        <Contact />
        <Footer />
        <ViewCounter />
        <NAChatBot />
        <VoiceIntro />
      </div>
    </>
  );
};

export default Index;
