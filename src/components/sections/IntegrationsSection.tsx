import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { getIntegrations } from '../../data';
import IntegrationCard from '../ui/IntegrationCard';

const IntegrationsSection: React.FC = () => {
  const navigate = useNavigate();
  
  // Get only the first 6 featured integrations for the homepage
  const featuredIntegrations = getIntegrations.featured().slice(0, 6);
  const integrationCount = featuredIntegrations.length;

  const handleViewMore = () => {
    navigate('/integrations');
  };

  const handleIntegrationClick = (integration: any) => {
    navigate(`/integrations/${integration.id}`);
  };

  // Render layout based on integration count
  const renderIntegrationGrid = () => {
    if (integrationCount === 4) {
      // Special layout for 4 integrations: 3 in first row, 1 centered in second row
      return (
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* First row - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredIntegrations.slice(0, 3).map((integration) => (
              <IntegrationCard 
                key={integration.id} 
                integration={integration} 
                variant="preview"
                onClick={() => handleIntegrationClick(integration)}
              />
            ))}
          </div>
          
          {/* Second row - 1 centered item */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg">
              <IntegrationCard 
                key={featuredIntegrations[3].id} 
                integration={featuredIntegrations[3]} 
                variant="preview"
                onClick={() => handleIntegrationClick(featuredIntegrations[3])}
              />
            </div>
          </div>
        </div>
      );
    } else if (integrationCount <= 3) {
      // For 1-3 integrations, use responsive grid that centers them
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {featuredIntegrations.map((integration) => (
            <IntegrationCard 
              key={integration.id} 
              integration={integration} 
              variant="preview"
              onClick={() => handleIntegrationClick(integration)}
            />
          ))}
        </div>
      );
    } else {
      // For 5+ integrations, use standard 3-column grid
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredIntegrations.map((integration) => (
            <IntegrationCard 
              key={integration.id} 
              integration={integration} 
              variant="preview"
              onClick={() => handleIntegrationClick(integration)}
            />
          ))}
        </div>
      );
    }
  };

  return (
    <section id="integrations" className="integrations-section">
      <div className="integrations-bg"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="integrations-header">
          <h1 className="integrations-title">
            <span className="integrations-title-highlight">
              Works With Your Tools
            </span>
          </h1>
          <p className="integrations-subtitle">
            Eva seamlessly integrates with the platforms and tools you already use to streamline your workflow
          </p>
        </header>
        
        {/* Dynamic Integration Grid */}
        {renderIntegrationGrid()}
        
        {/* View More Button */}
        <div className="integrations-cta">
          <button 
            onClick={handleViewMore}
            className="btn-base btn-teal btn-md inline-flex items-center justify-center gap-2 group"
          >
            <span>View More Integrations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;