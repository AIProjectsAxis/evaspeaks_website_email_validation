import React, { useState, useEffect } from 'react';
import PageLayout from '../components/layout/PageLayout';
import PricingToggle from '../components/shared/PricingToggle';
import { pricingPlans, featureCategories } from '../data/pricingData';
import { Check, X, Star, Phone, Users, Zap, Shield, Crown, Rocket, Building, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

const faqs = [
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments."
  },
  {
    question: "What happens if I exceed my call limit?",
    answer: "We'll notify you when you're approaching your limit. You can either upgrade your plan or pay for additional calls at competitive rates."
  },
  {
    question: "Do you offer custom pricing for large teams?",
    answer: "Yes, our Enterprise plan includes custom pricing based on your specific needs and call volume requirements."
  },
  {
    question: "Is there a free trial?",
    answer: "Yes, we offer a 14-day free trial on all plans. No credit card required to start, and you can cancel anytime."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans. All payments are processed securely."
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time. There are no cancellation fees or long-term commitments."
  },
  {
    question: "Do you offer discounts for nonprofits?",
    answer: "Yes, we offer special pricing for qualified nonprofit organizations. Contact our sales team for more information."
  },
  {
    question: "What's included in the setup process?",
    answer: "All plans include basic setup assistance. Professional and Enterprise plans include dedicated onboarding and training sessions."
  }
];

const PricingPageContent: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#detailed-feature-comparison') {
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

  // Key features for main table
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
    },
    { 
      name: 'Multi-language Support', 
      starter: '5 languages', 
      professional: '25 languages', 
      enterprise: '50+ languages' 
    },
    { 
      name: 'API Access', 
      starter: false, 
      professional: 'Limited', 
      enterprise: 'Full access' 
    }
  ];

  return (
    <PageLayout
      title="Pricing Plans"
      description="Choose the perfect plan for your business needs. All plans include our core AI communication features with scalable options."
      backLink="/"
      backLinkText="Back to Home"
    >
      {/* Toggle */}
      <div className="mb-12">
        <PricingToggle isAnnual={isAnnual} onToggle={setIsAnnual} />
      </div>

      {/* Main Horizontal Pricing Table */}
      <div className="mb-20">
        <div className="max-w-6xl mx-auto">
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
      </div>

      {/* Detailed Feature Comparison Table */}
      <div id="detailed-feature-comparison" className="mb-20 scroll-mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-white mb-4">Complete Feature Comparison</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore all features across our pricing plans in detail.
          </p>
        </div>

        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-4 bg-slate-700/30 border-b border-slate-700/50">
            <div className="p-6 font-semibold text-white">Features</div>
            <div className="p-6 text-center border-l border-slate-700/30 relative">
              {/* Small Corner Badge for Popular Plan in detailed table too */}
              <div className="flex items-center justify-center gap-2 text-emerald-400 font-semibold">
                <Rocket className="w-5 h-5" />
                <span>Starter</span>
              </div>
            </div>
            <div className="p-6 text-center border-l border-slate-700/30 relative">
              <div className="absolute top-2 right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-md text-xs font-semibold z-10 shadow-lg">
                Popular
              </div>
              <div className="flex items-center justify-center gap-2 text-blue-400 font-semibold">
                <Building className="w-5 h-5" />
                <span>Professional</span>
              </div>
            </div>
            <div className="p-6 text-center border-l border-slate-700/30">
              <div className="flex items-center justify-center gap-2 text-purple-400 font-semibold">
                <Crown className="w-5 h-5" />
                <span>Enterprise</span>
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-700/30">
            {featureCategories.map((category, categoryIdx) => (
              <div key={categoryIdx}>
                {/* Category Header */}
                <div className="bg-slate-700/20 p-4">
                  <h3 className="font-semibold text-white text-lg">{category.name}</h3>
                </div>
                
                {/* Category Features */}
                {category.features.map((feature, featureIdx) => (
                  <div key={featureIdx} className="grid grid-cols-4 hover:bg-slate-700/10 transition-colors">
                    <div className="p-4 text-slate-300 font-medium border-r border-slate-700/20">
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
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-light text-white text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden">
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/20 transition-colors"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                aria-expanded={expandedFaq === index}
              >
                <span className="text-white font-medium">{faq.question}</span>
                <ChevronDown className={`text-slate-400 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`} />
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-6 text-slate-300 border-t border-slate-700/30 pt-4">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="text-center bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-4">Ready to Transform Your Business Communication?</h2>
          <p className="text-slate-400 mb-8">
            Join thousands of businesses already using Eva AI to improve their customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-base btn-primary btn-lg">
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-base btn-secondary btn-lg">
              Schedule Demo
              <Phone className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

const PricingPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="pricing">
      <PricingPageContent />
    </ToggleWrapper>
  );
};

export default PricingPage;