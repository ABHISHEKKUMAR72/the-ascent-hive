import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveExperienceSection from "@/components/LiveExperienceSection";
import ApplySection from "@/components/ApplySection";
import FoundersSection from "@/components/FoundersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-grid-pattern relative">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <FeaturesSection />
    <LiveExperienceSection />
    <ApplySection />
    <FoundersSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
