import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Wrench, Clock, Home } from 'lucide-react';
import { Header, Footer } from '@/components';

const MaintenancePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const section = searchParams.get('section');
  const message = searchParams.get('message') || 'This section is currently under maintenance.';
  
  const sectionNames: { [key: string]: string } = {
    features: 'Features',
    integrations: 'Integrations', 
    pricing: 'Pricing',
    caseStudies: 'Case Studies',
    faq: 'FAQ'
  };
  
  const sectionDisplayName = section ? sectionNames[section] || section : 'Section';

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-lg w-full">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <Wrench className="w-10 h-10 text-orange-400" />
            </div>

            {/* Title */}
            <h1 className="text-3xl font-light text-white mb-4">
              {sectionDisplayName} Under Maintenance
            </h1>

            {/* Message */}
            <p className="text-slate-300 mb-8 leading-relaxed text-lg">
              {decodeURIComponent(message)}
            </p>

            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-3 text-slate-400 mb-8">
              <div className="w-3 h-3 rounded-full bg-orange-400 animate-pulse"></div>
              <span className="text-sm font-medium">We're working on improvements</span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGoHome}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg inline-flex items-center justify-center gap-2"
              >
                <Home className="w-4 h-4" />
                Go to Homepage
              </button>
              
              <button 
                onClick={handleGoBack}
                className="border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-slate-700/50">
              <p className="text-slate-500 text-sm">
                Expected completion: Soon™
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaintenancePage;