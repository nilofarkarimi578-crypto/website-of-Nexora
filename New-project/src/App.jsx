
import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustSection from "./components/TrustSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ImpactSection from "./components/ImpactSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ResultsSection from "./components/ResultsSection";
import CustomerStoriesSection from "./components/CustomerStoriesSection";
import Faq from "./components/Faq";
import Insights  from "./components/Insights";
import ConsultationCTA from "./components/ConsultationCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#151d1a]">
      <Navbar />

      <Hero />

      <TrustSection />

      <AboutSection />

      <ServicesSection />

      <ImpactSection />

      <CaseStudiesSection />

      <ResultsSection />

      <CustomerStoriesSection />
      <Faq/>
      <Insights/>
      <ConsultationCTA/>
      <Footer/>

    </main>
  )
}
