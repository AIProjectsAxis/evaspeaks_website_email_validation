import React from 'react';
import { Check, ArrowRight, Star } from 'lucide-react';

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number | null;
  annualPrice: number | null;
  planType: 'emerald' | 'blue' | 'purple';
  icon: React.ReactNode;
  popular?: boolean;
  features: string[];
  cta: string;
}

interface PricingCardProps {
  plan: PricingPlan;
  isAnnual: boolean;
  isActive?: boolean;
  onMouseEnter?: () => void;
  compact?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  plan, 
  isAnnual, 
  isActive = false, 
  onMouseEnter
  // FIXED: Remove compact prop - use consistent design
}) => {
  const getPrice = (): string => {
    if (!plan.monthlyPrice) return 'Custom';
    return String(isAnnual ? plan.annualPrice : plan.monthlyPrice);
  };

  const getSavingsPercentage = (): number => {
    if (!plan.monthlyPrice || !plan.annualPrice || !isAnnual) return 0;
    return Math.round(((plan.monthlyPrice - plan.annualPrice) / plan.monthlyPrice) * 100);
  };

  const price = getPrice();
  const savings = getSavingsPercentage();

  return (
    <div
      className={`pricing-card-wrapper ${plan.planType} ${isActive ? 'active' : ''}`}
      onMouseEnter={onMouseEnter}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 z-10">
          <Star className="w-4 h-4" />
          Most Popular
        </div>
      )}

      {/* Main Card */}
      <div className={`pricing-card ${plan.planType}`}>
        <div className="pricing-card-glow" />
        
        {/* Card Content */}
        <div className="pricing-card-content">
          {/* Header */}
          <div className="pricing-card-header">
            <div className={`pricing-card-icon ${plan.planType}`}>
              {plan.icon}
            </div>
            <h3 className="pricing-card-name">{plan.name}</h3>
            <p className="pricing-card-tagline">{plan.tagline}</p>
          </div>

          {/* Pricing */}
          <div className="pricing-card-price-section">
            <div className="pricing-card-price">
              {price === 'Custom' ? (
                <span className="pricing-card-custom">Contact Sales</span>
              ) : (
                <>
                  <span className="pricing-card-currency">$</span>
                  <span className="pricing-card-amount">{price}</span>
                  <span className="pricing-card-period">/mo</span>
                </>
              )}
            </div>
            
            {savings > 0 && (
              <div className="pricing-savings-indicator">
                Save {savings}% annually
              </div>
            )}
          </div>

          {/* Features - FIXED: Always use two-column layout */}
          <div className="pricing-features">
            <div className="pricing-features-grid">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="pricing-feature">
                  <div className={`pricing-feature-check ${plan.planType}`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="pricing-feature-text">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button className={`pricing-cta ${plan.planType}`}>
            <div className="pricing-cta-shimmer" />
            <div className="pricing-cta-content">
              {plan.cta}
              <ArrowRight className="w-4 h-4 pricing-cta-arrow" />
            </div>
          </button>
        </div>

        {/* Gradient Border */}
        <div className={`pricing-card-border ${plan.planType}`}>
          <div className="pricing-card-border-bg" />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;