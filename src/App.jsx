import React from "react";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import MinimalistSection from "./components/sections/MinimalistSection";
import ModernStyleSection from "./components/sections/ModernStyleSection";
import CollectionSection from "./components/sections/CollectionSection";
import EngageSection from "./components/sections/EngageSection";
import StatsSection from "./components/sections/StatsSection";
import CustomMenu from "./components/layout/CustomMenu";
import ContactSection from "./components/sections/ContactSection";
import { useSmoothScroll } from "./hooks/useSmoothScroll";
import "./styles/CustomMenu.css";
import AboutUs from "./components/sections/AboutUs";

const App = () => {
  // Initialize smooth scroll behavior
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-black">
      {/* Custom Menu */}
      <CustomMenu />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section with Parallax */}
        <div id="home">
          <HeroSection />
        </div>

        <div id="about">
          <AboutUs />
        </div>

        {/* Services Section */}
        <div id="services">
          <EngageSection />
        </div>

        {/* Expertise Section */}
        <div id="expertise">
          <MinimalistSection />
        </div>

        {/* About Section */}
        <div id="">
          <StatsSection />
        </div>

        {/* Why Choose Us */}
        <div id="why-choose-us">
          <ModernStyleSection />
        </div>

        {/* Projects Section */}
        <div id="projects">
          <CollectionSection />
        </div>

        {/* Contact Section */}
        <div id="contact">
          <ContactSection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;