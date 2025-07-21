import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, Check, X } from 'lucide-react';
import PricingToggle from '../shared/PricingToggle';
import { pricingPlans } from '../../data/pricingData';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      return () => container.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const getPrice = (plan: typeof pricingPlans[0]): string => {
    if (!plan.monthlyPrice) return 'Custom';
    return String(isAnnual ? plan.annualPrice : plan.monthlyPrice);
  };

  const getSavingsPercentage = (plan: typeof pricingPlans[0]): number => {
    if (!plan.monthlyPrice || !plan.annualPrice || !isAnnual) return 0;
    return Math.round(((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100);
  };

  const handleCompareFeatures = () => {
    navigate('/pricing');
    setTimeout(() => {
      const comparisonSection = document.getElementById('detailed-feature-comparison');
      if (comparisonSection) {
        const headerHeight = 100;
        const elementPosition = comparisonSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  // Key features to display in the table
  const keyFeatures = [
    { 
      name: 'Monthly Calls', 
      starter: '1,000 calls', 
      professional: '5,000 calls', 
      enterprise: 'Unlimited' 
    },
    { 
      name: 'AI Accuracy', 
      starter: '95%', 
      professional: '98%', 
      enterprise: '99.5%' 
    },
    { 
      name: 'Support Level', 
      starter: 'Email support', 
      professional: 'Priority support', 
      enterprise: 'Dedicated manager' 
    },
    { 
      name: 'CRM Integration', 
      starter: 'Basic (3)', 
      professional: 'Advanced (10+)', 
      enterprise: 'Custom unlimited' 
    },
    { 
      name: '24/7 Availability', 
      starter: false, 
      professional: true, 
      enterprise: true 
    },
    { 
      name: 'Custom AI Training', 
      starter: false, 
      professional: true, 
      enterprise: true 
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
            <Check className="w-3 h-3 text-green-400" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="w-5 h-5 rounded-full bg-slate-700/50 flex items-center justify-center">
            <X className="w-3 h-3 text-slate-500" />
          </div>
        </div>
      );
    }
    return (
      <div className="text-center">
        <span className="text-slate-300 text-sm font-medium">{value}</span>
      </div>
    );
  };

  return (
    <section 
      ref={containerRef}
      id="pricing" 
      className="pricing-section"
      style={{ 
        '--mouse-x': `${mousePosition.x}%`,
        '--mouse-y': `${mousePosition.y}%`
      } as React.CSSProperties & { [key: string]: string }}
    >
      <div className="pricing-spotlight" />

      <div className="pricing-container">
        {/* Header */}
        <div className="pricing-header">
          <h1 className="pricing-title">
            <span className="pricing-title-highlight">
              <span className="pricing-title-text">Pricing that scales</span>
              <div className="pricing-title-glow" />
            </span>
          </h1>
          
          <div className="pricing-subtitle-wrapper">
            <p className="pricing-subtitle">
              From startups to enterprises, our AI receptionist grows with your business.
            </p>
          </div>
        </div>

        {/* Toggle */}
        <div className="mb-12">
          <PricingToggle 
            isAnnual={isAnnual} 
            onToggle={setIsAnnual} 
          />
        </div>

        {/* Horizontal Pricing Table */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/30 rounded-3xl overflow-hidden shadow-2xl">
            {/* Plan Headers */}
            <div className="grid grid-cols-4 bg-slate-800/50 border-b border-slate-700/30">
              <div className="p-6">
                <div className="text-2xl font-light text-white mb-2">Plans</div>
                <p className="text-slate-400 text-sm">Choose your perfect fit</p>
              </div>
              
              {pricingPlans.map((plan) => {
                const price = getPrice(plan);
                const savings = getSavingsPercentage(plan);
                
                return (
                  <div key={plan.id} className="p-6 text-center border-l border-slate-700/30 relative">
                    {/* Small Corner Badge for Popular Plan */}
                    {plan.popular && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-10 shadow-lg">
                        Popular
                      </div>
                    )}
                    
                    <div className={`inline-flex w-12 h-12 rounded-xl items-center justify-center mb-3 shadow-lg ${
                      plan.planType === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                      plan.planType === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-500' :
                      'bg-gradient-to-r from-purple-500 to-pink-500'
                    }`}>
                      {plan.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{plan.tagline}</p>
                    
                    <div className="mb-4">
                      {price === 'Custom' ? (
                        <div className="text-2xl font-bold text-white">Contact Sales</div>
                      ) : (
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-lg text-slate-400">$</span>
                          <span className="text-3xl font-bold text-white">{price}</span>
                          <span className="text-sm text-slate-400">/mo</span>
                        </div>
                      )}
                      
                      {savings > 0 && (
                        <div className="text-xs text-green-400 font-medium mt-1">
                          Save {savings}% annually
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Feature Rows */}
            <div className="divide-y divide-slate-700/30">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="grid grid-cols-4 hover:bg-slate-700/10 transition-colors">
                  <div className="p-4 font-medium text-slate-300 border-r border-slate-700/20">
                    {feature.name}
                  </div>
                  <div className="p-4 border-r border-slate-700/20">
                    {renderFeatureValue(feature.starter)}
                  </div>
                  <div className="p-4 border-r border-slate-700/20">
                    {renderFeatureValue(feature.professional)}
                  </div>
                  <div className="p-4">
                    {renderFeatureValue(feature.enterprise)}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="grid grid-cols-4 bg-slate-800/30 border-t border-slate-700/30">
              <div className="p-6"></div>
              {pricingPlans.map((plan) => (
                <div key={plan.id} className="p-6 border-l border-slate-700/30">
                  <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl ${
                    plan.planType === 'emerald' ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white' :
                    plan.planType === 'blue' ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' :
                    'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="pricing-footer">
          <div className="pricing-footer-indicators">
            <span className="pricing-footer-item">
              <div className="pricing-footer-dot green" />
              14-day free trial
            </span>
            <span className="pricing-footer-item">
              <div className="pricing-footer-dot blue" />
              No setup fees
            </span>
            <span className="pricing-footer-item">
              <div className="pricing-footer-dot purple" />
              Cancel anytime
            </span>
          </div>
          
          <div className="pricing-section-footer mt-8">
            <button 
              onClick={handleCompareFeatures}
              className="btn-base btn-teal btn-md inline-flex items-center gap-2 group"
            >
              <Sparkles className="w-4 h-4" />
              Compare All Features & Plans
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="pricing-footer-text text-slate-400 text-sm mt-3">
              Need help choosing? View our detailed comparison table
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;