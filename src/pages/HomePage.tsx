import React, { useEffect } from 'react';
import { 
  Header, 
  Footer, 
  HeroSection, 
  FeaturesSection, 
  IntegrationsSection, 
  PricingSection, 
  CaseStudiesSection,
  FAQSection,
  Canvas3D,
  ScrollToTopButton
} from '@/components';
import ToggleWrapper from '@/components/ui/ToggleWrapper';
import { MessageSquare } from 'lucide-react';

const HomePage: React.FC = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white relative overflow-hidden">
      {/* 3D Background Canvas */}
      <Canvas3D />
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main id="main-content" role="main">
          <ToggleWrapper type="section" name="hero">
            <HeroSection />
          </ToggleWrapper>
          
          <ToggleWrapper type="section" name="features">
            <FeaturesSection />
          </ToggleWrapper>
          
          <ToggleWrapper type="section" name="integrations">
            <IntegrationsSection />
          </ToggleWrapper>
          
          <ToggleWrapper type="section" name="pricing">
            <PricingSection />
          </ToggleWrapper>
          
          <ToggleWrapper type="section" name="caseStudies">
            <CaseStudiesSection />
          </ToggleWrapper>
          
          <ToggleWrapper type="section" name="faq">
            <FAQSection />
          </ToggleWrapper>
        </main>
        <Footer />
      </div>
      
      {/* Fixed Elements */}
      <ScrollToTopButton />
      
      {/* Chat Button */}
      {/* <div className="fixed bottom-6 right-6 z-50">
        <button 
          className="btn-base btn-primary btn-icon-only btn-lg rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/30"
          aria-label="Open chat support"
        >
          <MessageSquare className="w-6 h-6" aria-hidden="true" />
        </button>
      </div> */}
    </div>
  );
};

export default HomePage;