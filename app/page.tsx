import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import NavBar from "@/components/NavBar";
import MainProjectsSection from "@/components/MainProjectsSection";
import ProjectsSection from "@/components/ProjectsSection";

export default function Home() {
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
      </div>
    </>
  );
}
