"use client";

import Hero from "./Home/hero";
import ParallaxAbout from "./Home/AboutUs";
import AboutSection from "./Home/AboutSection";
import Section from "./Home/section";
import BranchesSection from "./Home/BranchesSection";
import ServicesSection from "@/components/branch/ServicesSection";
import ThreeSteps from "@/components/branch/ThreeSteps";
import ContactInfoSection from "./contact/ContactInfoSection";



export default function Home() {
  return (
    <div className="page">
      <Hero />
      <ParallaxAbout/>
      <AboutSection />
       <Section />
      <ContactInfoSection/>
      <BranchesSection/>
        <ServicesSection />
        <ThreeSteps />
    </div>
  );
}
