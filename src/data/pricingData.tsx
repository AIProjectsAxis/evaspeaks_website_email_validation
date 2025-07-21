import { Rocket, Building, Crown } from 'lucide-react';
import { PricingPlan } from '../components/shared/PricingCard';

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Perfect for small businesses',
    monthlyPrice: 29,
    annualPrice: 24,
    planType: 'emerald',
    icon: <Rocket className="w-6 h-6 text-white" />,
    features: [
      '1,000 calls per month',
      'Basic AI responses',
      'Email support',
      'Call recording & transcripts',
      'Basic analytics dashboard'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'professional',
    name: 'Professional',
    tagline: 'Best for growing companies',
    monthlyPrice: 79,
    annualPrice: 63,
    planType: 'blue',
    icon: <Building className="w-6 h-6 text-white" />,
    popular: true,
    features: [
      '5,000 calls per month',
      'Advanced AI with learning',
      'Priority support',
      'Full CRM integration',
      'Advanced analytics',
      'Custom workflows',
      'Multi-language support'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    tagline: 'For large organizations',
    monthlyPrice: null,
    annualPrice: null,
    planType: 'purple',
    icon: <Crown className="w-6 h-6 text-white" />,
    features: [
      'Unlimited calls',
      'Custom AI training',
      'Dedicated support manager',
      'White-label solution',
      'API access',
      'Custom integrations',
      'SLA guarantees'
    ],
    cta: 'Contact Sales'
  }
];

export interface FeatureCategory {
  name: string;
  features: {
    name: string;
    starter: boolean | string;
    professional: boolean | string;
    enterprise: boolean | string;
  }[];
}

export const featureCategories: FeatureCategory[] = [
  {
    name: 'Core Features',
    features: [
      { name: 'Monthly call volume', starter: '1,000', professional: '5,000', enterprise: 'Unlimited' },
      { name: 'AI response accuracy', starter: '95%', professional: '98%', enterprise: '99.5%' },
      { name: 'Business hours coverage', starter: true, professional: true, enterprise: true },
      { name: '24/7 availability', starter: false, professional: true, enterprise: true },
      { name: 'Multi-language support', starter: '5 languages', professional: '25 languages', enterprise: '50+ languages' },
      { name: 'Call recording & transcripts', starter: true, professional: true, enterprise: true },
      { name: 'Voice customization', starter: false, professional: 'Basic', enterprise: 'Advanced' }
    ]
  },
  {
    name: 'Integrations',
    features: [
      { name: 'CRM integrations', starter: 'Basic (3)', professional: 'Advanced (10+)', enterprise: 'Custom unlimited' },
      { name: 'Calendar sync', starter: true, professional: true, enterprise: true },
      { name: 'Email notifications', starter: true, professional: true, enterprise: true },
      { name: 'Webhook support', starter: false, professional: true, enterprise: true },
      { name: 'API access', starter: false, professional: 'Limited', enterprise: 'Full access' },
      { name: 'Custom integrations', starter: false, professional: false, enterprise: true }
    ]
  },
  {
    name: 'Support & Training',
    features: [
      { name: 'Support level', starter: 'Email', professional: 'Priority', enterprise: 'Dedicated manager' },
      { name: 'Response time', starter: '24-48 hours', professional: '4-8 hours', enterprise: '1-2 hours' },
      { name: 'Account manager', starter: false, professional: false, enterprise: true },
      { name: 'Training sessions', starter: false, professional: '2 sessions', enterprise: 'Unlimited' },
      { name: 'Custom setup assistance', starter: false, professional: true, enterprise: true }
    ]
  },
  {
    name: 'Advanced Features',
    features: [
      { name: 'Custom AI training', starter: false, professional: 'Basic', enterprise: 'Advanced' },
      { name: 'White-label options', starter: false, professional: false, enterprise: true },
      { name: 'Advanced analytics', starter: false, professional: true, enterprise: true },
      { name: 'Custom reporting', starter: false, professional: false, enterprise: true },
      { name: 'HIPAA compliance', starter: false, professional: 'Add-on', enterprise: true },
      { name: 'SSO integration', starter: false, professional: false, enterprise: true }
    ]
  }
];