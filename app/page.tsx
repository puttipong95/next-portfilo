'use client'

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
import MainProjectsSection from "@/components/MainProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function Home() {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto space-y-10">
        <HomeSection />
        <AboutSection />
        <MainProjectsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
        <Button
          onClick={handleScroll}
          className="fixed flex flex-col items-center bottom-6 right-6 bg-primary hover:bg-secondary hover:text-primary cursor-pointer text-white p-5 rounded-full shadow-lg"
        >
            <ChevronUp />
        </Button>
      </div>
    </>
  );
}
