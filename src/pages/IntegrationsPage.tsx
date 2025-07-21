import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageLayout from '../components/layout/PageLayout';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { getIntegrations } from '../data';
import IntegrationCard from '../components/ui/IntegrationCard';
import ToggleWrapper from '../components/ui/ToggleWrapper';

const IntegrationsPageContent: React.FC = () => {
  const { integrationId } = useParams();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIntegration, setSelectedIntegration] = useState<any>(null);
  
  const allIntegrations = getIntegrations.all();
  const categories = ['all', ...Array.from(new Set(allIntegrations.map(int => int.category)))];
  
  const filteredIntegrations = allIntegrations.filter(integration => {
    const matchesSearch = integration.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         integration.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || integration.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Handle direct navigation to specific integration
  useEffect(() => {
    if (integrationId) {
      const integration = getIntegrations.byId(integrationId);
      if (integration) {
        setSelectedIntegration(integration);
        setTimeout(() => {
          const detailedView = document.getElementById('detailed-integration-view');
          if (detailedView) {
            const headerHeight = 100;
            const elementPosition = detailedView.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          }
        }, 200);
      } else {
        navigate('/integrations', { replace: true });
      }
    } else {
      setSelectedIntegration(null);
    }
  }, [integrationId, navigate]);

  const handleLearnMore = (integration: any) => {
    setSelectedIntegration(integration);
    navigate(`/integrations/${integration.id}`, { replace: true });
    setTimeout(() => {
      const detailedView = document.getElementById('detailed-integration-view');
      if (detailedView) {
        const headerHeight = 100;
        const elementPosition = detailedView.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const handleBackToGrid = () => {
    setSelectedIntegration(null);
    navigate('/integrations', { replace: true });
    setTimeout(() => {
      const grid = document.getElementById('integrations-grid');
      if (grid) {
        const headerHeight = 100;
        const elementPosition = grid.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  return (
    <PageLayout
      title="All Integrations"
      description="Connect Eva AI with your favorite tools and platforms. Set up integrations in minutes, not hours."
    >
      <div className="max-w-7xl mx-auto">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search integrations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="text-slate-400 w-5 h-5" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Integration Grid */}
        <div id="integrations-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredIntegrations.map((integration) => (
            <IntegrationCard 
              key={integration.id}
              integration={integration} 
              variant="preview"
              onClick={() => handleLearnMore(integration)}
            />
          ))}
        </div>

        {/* Detailed Integration View */}
        {selectedIntegration && (
          <div id="detailed-integration-view" className="scroll-mt-8 mb-12">
            <div className="mb-6">
              <button 
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                onClick={handleBackToGrid}
              >
                <ArrowRight className="w-4 h-4 rotate-180" />
                Back to All Integrations
              </button>
            </div>
            
            <IntegrationCard 
              integration={selectedIntegration} 
              variant="detailed" 
            />
          </div>
        )}

        {/* No Results */}
        {filteredIntegrations.length === 0 && (
          <div className="text-center py-12">
            <div className="text-slate-400 mb-4">
              <Search className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No integrations found</p>
              <p className="text-sm">Try adjusting your search or filter criteria</p>
            </div>
            <button 
              className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Integration Request */}
        <div className="mt-16 text-center bg-slate-800/30 rounded-xl p-8">
          <h3 className="text-2xl font-medium text-white mb-4">Don't see your tool?</h3>
          <p className="text-slate-400 mb-6">
            Request a new integration and we'll prioritize it for development.
          </p>
          <button className="btn-base btn-primary btn-md">
            Request Integration
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

const IntegrationsPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="integrations">
      <IntegrationsPageContent />
    </ToggleWrapper>
  );
};

export default IntegrationsPage;