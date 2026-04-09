import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import LiveExperienceSection from "@/components/LiveExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ApplySection from "@/components/ApplySection";
import FoundersSection from "@/components/FoundersSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => (
  <div className="min-h-screen bg-grid-pattern relative">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <HowItWorksSection />
    <FeaturesSection />
    <LiveExperienceSection />
    <TestimonialsSection />
    <ApplySection />
    <FoundersSection />
    <FAQSection />
    <ContactSection />
    <Footer />
    <ScrollToTop />
  </div>
);

export default Index;
