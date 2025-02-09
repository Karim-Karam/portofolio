'use client'
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";
import ProjectsSection from "@/components/projectsSection";
import ServicesSection from "@/components/servicesSection";
import ExperirnceSection from "@/components/experienceSection";
import ContactSection from "@/components/contactSection";


export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = [
      { id: "hero", ref: heroRef },
      { id: "projects", ref: projectsRef },
      { id: "services", ref: servicesRef },
      { id: "experience", ref: experienceRef },
      { id: "contact", ref: contactRef },
    ];

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const options = {
      threshold: 0.6,
    };
    const observer = new IntersectionObserver(handleIntersect, options);
    sections.forEach(({ id, ref }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });
    return () => {
      sections.forEach(({ ref }) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);


  return (
    <div>
      <NavBar
        activeSection={activeSection}
        onScrollToHero={() => handleScrollTo(heroRef)}
        onScrollToProjects={() => handleScrollTo(projectsRef)}
        onScrollToServices={() => handleScrollTo(servicesRef)}
        onScrollToExperirnce={() => handleScrollTo(experienceRef)}
        onScrollToContact={() => handleScrollTo(contactRef)}
      />

      <div className="mx-[10%] overflow-hidden">

        <div ref={heroRef}>
          <HeroSection />
        </div>

        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <div ref={servicesRef}>
          <ServicesSection />
        </div>
        <div ref={experienceRef}>
          <ExperirnceSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
