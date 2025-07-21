import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users } from 'lucide-react';
import { getCaseStudies } from '../../data';
import CaseStudyCard from '../ui/CaseStudyCard';

const CaseStudiesSection: React.FC = () => {
  const navigate = useNavigate();
  const featuredCases = getCaseStudies.featured();
  const caseStudyCount = featuredCases.length;

  const handleViewMoreCaseStudies = () => {
    navigate('/case-studies');
  };

  // Render layout based on case study count
  const renderCaseStudyGrid = () => {
    if (caseStudyCount === 4) {
      // Special layout for 4 case studies: 3 in first row, 1 centered in second row
      return (
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.slice(0, 3).map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                variant="summary"
              />
            ))}
          </div>
          
          {/* Second row - 1 centered item */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
              <CaseStudyCard 
                key={featuredCases[3].id} 
                caseStudy={featuredCases[3]} 
                variant="summary"
              />
            </div>
          </div>
        </div>
      );
    } else if (caseStudyCount === 2) {
      // For 2 case studies, center them with better spacing
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {featuredCases.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              variant="summary"
            />
          ))}
        </div>
      );
    } else if (caseStudyCount === 1) {
      // For 1 case study, center it with optimal width
      return (
        <div className="flex justify-center">
          <div className="w-full max-w-md">
            <CaseStudyCard 
              key={featuredCases[0].id} 
              caseStudy={featuredCases[0]} 
              variant="summary"
            />
          </div>
        </div>
      );
    } else if (caseStudyCount === 5) {
      // For 5 case studies: 3 in first row, 2 centered in second row
      return (
        <div className="space-y-8 max-w-6xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCases.slice(0, 3).map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                variant="summary"
              />
            ))}
          </div>
          
          {/* Second row - 2 centered items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredCases.slice(3, 5).map((caseStudy) => (
              <CaseStudyCard 
                key={caseStudy.id} 
                caseStudy={caseStudy} 
                variant="summary"
              />
            ))}
          </div>
        </div>
      );
    } else {
      // For 3, 6+ case studies, use standard 3-column grid
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredCases.map((caseStudy) => (
            <CaseStudyCard 
              key={caseStudy.id} 
              caseStudy={caseStudy} 
              variant="summary"
            />
          ))}
        </div>
      );
    }
  };

  return (
    <section id="case-studies" className="case-studies-section">
      <div className="case-studies-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Clean Header */}
        <header className="case-studies-header">
          <h1 className="case-studies-title">
            <span className="case-studies-title-highlight">
              Success Stories
            </span>
          </h1>
          <p className="case-studies-subtitle">
            Real businesses, real results. See how Eva AI transforms customer communication across industries.
          </p>
        </header>

        {/* Dynamic Case Study Grid */}
        {renderCaseStudyGrid()}

        <div className="case-studies-cta">
          <div className="text-center">
            <button 
              onClick={handleViewMoreCaseStudies}
              className="btn-base btn-teal btn-lg inline-flex items-center justify-center gap-2 group"
            >
              <Users className="w-5 h-5" />
              <span>Explore All Success Stories</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;