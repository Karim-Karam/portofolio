'use client'
import { useEffect, useRef, useState } from "react";
import NavBar from "../components/navBar";
import HeroSection from "../components/heroSection";
import ProjectsSection from "@/components/projectsSection";
import ServicesSection from "@/components/servicesSection";
import ExperienceSection from "@/components/experienceSection";
import ContactSection from "@/components/contactSection";

export default function Home() {
  const [activeSection, setActiveSection] = useState(null);
  const heroRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    if (isClient) {
      const sections = [
        { id: "hero", ref: heroRef },
        { id: "projects", ref: projectsRef },
        { id: "services", ref: servicesRef },
        { id: "experience", ref: experienceRef },
        { id: "contact", ref: contactRef },
      ];

      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.3, // Reduced threshold for better responsiveness
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.getAttribute("data-section"));
          }
        });
      }, observerOptions);

      sections.forEach(({ ref, id }) => {
        if (ref.current) {
          ref.current.setAttribute("data-section", id); // Ensure data-section attribute is set
          observer.observe(ref.current);
        }
      });

      return () => {
        sections.forEach(({ ref }) => {
          if (ref.current) observer.unobserve(ref.current);
        });
      };
    }
  }, [isClient]);

  const handleScrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };


  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }
  return (
    <div>
      <NavBar
        activeSection={activeSection}
        onScrollToHero={() => handleScrollTo(heroRef)}
        onScrollToProjects={() => handleScrollTo(projectsRef)}
        onScrollToServices={() => handleScrollTo(servicesRef)}
        onScrollToExperience={() => handleScrollTo(experienceRef)}
        onScrollToContact={() => handleScrollTo(contactRef)}
      />

      <div className="mx-[10%] overflow-hidden">
        <section ref={heroRef} data-section="hero">
          <HeroSection onScrollToProjects={() => handleScrollTo(projectsRef)} />
        </section>

        <section ref={projectsRef} data-section="projects">
          <ProjectsSection />
        </section>

        <section ref={servicesRef} data-section="services">
          <ServicesSection />
        </section>

        <section ref={experienceRef} data-section="experience">
          <ExperienceSection />
        </section>

        <section ref={contactRef} data-section="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
}
