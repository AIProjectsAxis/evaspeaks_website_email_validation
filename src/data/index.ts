// src/data/index.ts - Single source of truth for all content
export const siteData = {
  // Case Studies Data
  caseStudies: [
    {
      id: 'axis-terra-design-studio',
      company: 'AxisTerra Design Studio',
      industry: 'Design & Construction Documents',
      challenge: 'Most new prospects call after business hours or during weekends when they have time to think about their projects. In the design industry, fast response times are crucial - if you don\'t respond quickly, you often lose the client.',
      solution: 'Eva Speaks was implemented to handle prospect inquiries 24/7, capturing leads when they call and integrating with Zoho CRM for immediate follow-up by the team.',
      results: [
        '95% of prospect calls answered immediately',
        'Zero missed leads during evenings and weekends',
        'Automated lead capture and CRM integration',
        'Improved prospect experience with 24/7 availability'
      ],
      image: 'https://axisterra.com/wp-content/uploads/2024/05/AxisTerra-Design-Studio-1.png',
      featured: true,
      metrics: {
        efficiency: 95,
        satisfaction: 92,
        costSavings: 40
      },
      tags: ['Architecture', 'Design', 'CRM Integration', 'Lead Management']
    },
    {
      id: 'Reliant-Rentals-Property-Management',
      company: 'Reliant Rentals & Property Management',
      industry: 'Property Management',
      challenge: 'Tried multiple solutions for maintenance requests - email, web forms, NFC devices - but tenants, especially those not comfortable with technology, found them difficult to use. Many requests went unsubmitted or were unclear.',
      solution: 'Eva Speaks answers maintenance calls like a human receptionist, identifies the caller and their apartment, logs requests clearly, and routes them to the right maintenance team. Available in multiple languages.',
      results: [
        '85% reduction in response time for maintenance requests',
        'Automatic caller identification and apartment detection',
        'Clear request logging with proper routing',
        '98% tenant satisfaction with request process'
      ],
      image: 'https://reliantrentalspm.com/wp-content/uploads/2017/01/reliant-logo-240.png',
      featured: true,
      metrics: {
        efficiency: 85,
        satisfaction: 90,
        costSavings: 50
      },
      tags: ['Property Management', 'Maintenance', 'Multi-language', 'User-Friendly']
    },
  ],

  // Integrations Data
  integrations: [
    {
      id: 'twilio',
      name: 'Twilio',
      category: 'Communication',
      description: 'Voice & SMS communication API',
      detailedDescription: 'Power your AI receptionist with Twilio\'s robust communication infrastructure. Handle voice calls, send SMS notifications, and manage all customer communications through a single platform.',
      logo: '/images/integrations/twilio.svg',
      domain: 'twilio.com',
      fallbackIcon: '📞',
      status: 'active',
      featured: true,
      setupTime: '3 minutes',
      features: [
        'Voice call handling',
        'SMS notifications',
        'Call recording',
        'Phone number provisioning',
        'Global communication',
        'Real-time call analytics'
      ],
      setupSteps: [
        'Create Twilio account',
        'Purchase phone numbers',
        'Configure webhooks',
        'Set up call flows',
        'Test voice & SMS'
      ],
      pricing: 'Pay-per-use starting at $0.0075/min',
      documentation: 'https://www.twilio.com/docs',
      benefits: ['Reliable communication', 'Global reach', 'Scalable infrastructure']
    },
    {
      id: 'zoho-crm',
      name: 'Zoho CRM',
      category: 'CRM',
      description: 'Customer relationship management',
      detailedDescription: 'Sync customer data, track interactions, and manage leads automatically. Eva can update customer records, create new contacts, and trigger workflows based on call outcomes.',
      logo: '/images/integrations/zoho.svg',
      domain: 'zoho.com',
      fallbackIcon: '👥',
      status: 'active',
      featured: true,
      setupTime: '4 minutes',
      features: [
        'Contact management',
        'Lead tracking',
        'Call logging',
        'Workflow automation',
        'Sales pipeline updates',
        'Custom field mapping'
      ],
      setupSteps: [
        'Connect Zoho CRM account',
        'Map data fields',
        'Configure lead routing',
        'Set up automation rules',
        'Test data sync'
      ],
      pricing: 'Starting at $14/user/month',
      documentation: 'https://www.zoho.com/crm/developer/',
      benefits: ['Streamlined lead management', 'Automated data entry', 'Enhanced sales tracking']
    },
    {
      id: 'google-calendar',
      name: 'Google Calendar',
      category: 'Productivity',
      description: 'Automated scheduling & calendar sync',
      detailedDescription: 'Seamlessly integrate with Google Calendar to automatically schedule appointments, check availability, and send calendar invites. Eva can manage your entire scheduling workflow without manual intervention.',
      logo: '/images/integrations/google-calendar.svg',
      domain: 'calendar.google.com',
      fallbackIcon: '📅',
      status: 'active',
      featured: true,
      setupTime: '5 minutes',
      features: [
        'Automatic appointment scheduling',
        'Real-time availability checking',
        'Calendar invite management',
        'Multi-calendar support',
        'Timezone handling',
        'Recurring appointment setup'
      ],
      setupSteps: [
        'Connect your Google account',
        'Select calendars to sync',
        'Configure scheduling preferences',
        'Set availability windows',
        'Test appointment booking'
      ],
      pricing: 'Free with Google Workspace',
      documentation: 'https://developers.google.com/calendar',
      benefits: ['Unified calendar view', 'Automated scheduling', 'Enhanced productivity']
    },
    {
      id: 'outlook-calendar',
      name: 'Outlook Calendar',
      category: 'Productivity',
      description: 'Automated scheduling & calendar sync',
      detailedDescription: 'Seamlessly integrate with Outlook Calendar to automatically schedule appointments, check availability, and send calendar invites. Eva can manage your entire scheduling workflow without manual intervention.',
      logo: '/images/integrations/outlook.svg',
      domain: 'outlook.com/calendar',
      fallbackIcon: '📅',
      status: 'active',
      featured: true,
      setupTime: '5 minutes',
      features: [
        'Automatic appointment scheduling',
        'Real-time availability checking',
        'Calendar invite management',
        'Multi-calendar support',
        'Timezone handling',
        'Recurring appointment setup'
      ],
      setupSteps: [
        'Connect your Outlook account',
        'Select calendars to sync',
        'Configure scheduling preferences',
        'Set availability windows',
        'Test appointment booking'
      ],
      pricing: 'Free with Outlook account',
      documentation: 'https://docs.microsoft.com/en-us/graph/api/resources/calendar',
      benefits: ['Unified calendar view', 'Automated scheduling', 'Enhanced productivity']
    },
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'CRM',
      description: 'Enterprise CRM platform',
      detailedDescription: 'Connect Eva AI with Salesforce to automatically update leads, create opportunities, and maintain comprehensive customer records. Perfect for enterprise sales teams.',
      logo: '/images/integrations/salesforce.svg',
      domain: 'salesforce.com',
      fallbackIcon: '☁️',
      status: 'active',
      featured: false,
      setupTime: '7 minutes',
      features: [
        'Lead management',
        'Opportunity tracking',
        'Account updates',
        'Custom object support',
        'Workflow triggers',
        'Advanced reporting'
      ],
      setupSteps: [
        'Connect Salesforce org',
        'Configure OAuth settings',
        'Map field relationships',
        'Set up automation rules',
        'Test data synchronization'
      ],
      pricing: 'Starting at $25/user/month',
      documentation: 'https://developer.salesforce.com/',
      benefits: ['Enterprise-grade CRM', 'Advanced customization', 'Comprehensive analytics']
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'Communication',
      description: 'Team communication & notifications',
      detailedDescription: 'Get instant notifications in Slack when Eva handles important calls, receives leads, or encounters specific scenarios. Keep your team informed in real-time.',
      logo: '/images/integrations/slack.svg',
      domain: 'slack.com',
      fallbackIcon: '💬',
      status: 'active',
      featured: false,
      setupTime: '2 minutes',
      features: [
        'Real-time call notifications',
        'Lead alerts',
        'Custom message formatting',
        'Channel routing',
        'Team mentions',
        'Call summaries'
      ],
      setupSteps: [
        'Install Slack app',
        'Authorize workspace access',
        'Configure notification channels',
        'Set up alert rules',
        'Test notifications'
      ],
      pricing: 'Free with Slack workspace',
      documentation: 'https://api.slack.com/',
      benefits: ['Instant team updates', 'Centralized notifications', 'Improved collaboration']
    }
  ],

  // Pricing Data
  pricing: {
    plans: [
      {
        id: 'starter',
        name: 'Starter',
        tagline: 'Perfect for small businesses',
        pricing: {
          monthly: 29,
          annual: 24
        },
        savings: 20,
        features: {
          basic: [
            { name: 'Monthly calls', value: '1,000', included: true },
            { name: 'AI accuracy', value: 'Basic', included: true },
            { name: 'Support', value: 'Email', included: true },
            { name: 'Business hours coverage', value: '8AM-6PM', included: true }
          ],
          advanced: [
            { name: 'Call recording', value: 'Limited', included: true },
            { name: 'Basic analytics', value: true, included: true },
            { name: 'API access', value: false, included: false },
            { name: 'Custom training', value: false, included: false },
            { name: 'White-label', value: false, included: false },
            { name: 'HIPAA compliance', value: false, included: false }
          ]
        },
        cta: 'Start Free Trial',
        popular: false,
        color: 'emerald',
        planType: 'emerald'
      },
      {
        id: 'professional',
        name: 'Professional',
        tagline: 'Best for growing companies',
        pricing: {
          monthly: 79,
          annual: 63
        },
        savings: 20,
        features: {
          basic: [
            { name: 'Monthly calls', value: '5,000', included: true },
            { name: 'AI accuracy', value: 'Advanced', included: true },
            { name: 'Support', value: 'Priority', included: true },
            { name: 'Business hours coverage', value: '24/7', included: true }
          ],
          advanced: [
            { name: 'Call recording', value: 'Unlimited', included: true },
            { name: 'Advanced analytics', value: true, included: true },
            { name: 'API access', value: true, included: true },
            { name: 'Custom training', value: 'Basic', included: true },
            { name: 'White-label', value: false, included: false },
            { name: 'HIPAA compliance', value: true, included: true }
          ]
        },
        cta: 'Start Free Trial',
        popular: true,
        color: 'blue',
        planType: 'blue'
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        tagline: 'For large organizations',
        pricing: {
          monthly: 'Custom',
          annual: 'Custom'
        },
        features: {
          basic: [
            { name: 'Monthly calls', value: 'Unlimited', included: true },
            { name: 'AI accuracy', value: 'Custom', included: true },
            { name: 'Support', value: 'Dedicated', included: true },
            { name: 'Business hours coverage', value: '24/7', included: true }
          ],
          advanced: [
            { name: 'Call recording', value: 'Unlimited', included: true },
            { name: 'Advanced analytics', value: true, included: true },
            { name: 'API access', value: 'Full', included: true },
            { name: 'Custom training', value: 'Full', included: true },
            { name: 'White-label', value: true, included: true },
            { name: 'HIPAA compliance', value: true, included: true }
          ]
        },
        cta: 'Contact Sales',
        popular: false,
        color: 'purple',
        planType: 'purple'
      }
    ]
  },

  // Features Data
  features: {
    main: [
      {
        id: 'intelligent-call-handling',
        title: 'Intelligent Call Handling',
        description: 'AI-powered receptionist that understands context and responds naturally to customer inquiries.',
        icon: '🤖',
        benefits: [
          '24/7 availability',
          'Natural conversation flow',
          'Multi-language support',
          'Context-aware responses'
        ]
      },
      {
        id: 'seamless-integrations',
        title: 'Seamless Integrations',
        description: 'Connect with your existing tools and workflows for automated data sync and enhanced productivity.',
        icon: '🔗',
        benefits: [
          'CRM synchronization',
          'Calendar management',
          'Real-time notifications',
          'Custom API connections'
        ]
      },
      {
        id: 'advanced-analytics',
        title: 'Advanced Analytics',
        description: 'Comprehensive insights into call patterns, customer interactions, and business performance.',
        icon: '📊',
        benefits: [
          'Call analytics dashboard',
          'Performance metrics',
          'Customer insights',
          'Custom reporting'
        ]
      }
    ]
  },

  // FAQ Data
  faq: [
    {
      id: 'what-is-eva-ai',
      question: 'What is Eva AI?',
      answer: 'Eva AI is an intelligent virtual receptionist that handles your business calls 24/7. Using advanced AI technology, Eva can answer questions, schedule appointments, capture leads, and integrate with your existing business systems to provide seamless customer service.'
    },
    {
      id: 'how-does-setup-work',
      question: 'How quickly can I set up Eva AI?',
      answer: 'Setup typically takes 15-30 minutes. You\'ll provide information about your business, upload key documents, configure your integrations, and test the system. Our onboarding team guides you through the entire process to ensure Eva is perfectly configured for your needs.'
    },
    {
      id: 'what-integrations-available',
      question: 'What integrations are available?',
      answer: 'Eva AI integrates with popular CRM systems (Salesforce, HubSpot, Zoho), calendar applications (Google Calendar, Outlook), communication tools (Slack, Teams), and many more. We also offer custom API integrations for enterprise clients.'
    },
    {
      id: 'how-accurate-is-ai',
      question: 'How accurate is the AI?',
      answer: 'Our AI achieves 95-99.5% accuracy depending on your plan. Eva is continuously learning and improving based on your specific business context. We also provide custom training to ensure Eva understands your industry terminology and business processes.'
    },
    {
      id: 'data-security',
      question: 'Is my data secure?',
      answer: 'Yes, we take security seriously. All data is encrypted in transit and at rest, we\'re SOC 2 compliant, and offer HIPAA compliance for healthcare clients. We never share your data with third parties and provide detailed audit logs.'
    },
    {
      id: 'pricing-plans',
      question: 'What are the pricing plans?',
      answer: 'We offer three main plans: Starter ($29/month), Professional ($79/month), and Enterprise (custom pricing). Each plan includes different call volumes, features, and support levels. All plans include a free trial period.'
    }
  ]
};

// Helper functions for easy data access throughout the application
export const getCaseStudies = {
  all: () => siteData.caseStudies,
  featured: () => siteData.caseStudies.filter(study => study.featured),
  byId: (id: string) => siteData.caseStudies.find(study => study.id === id),
  byIndustry: (industry: string) => siteData.caseStudies.filter(study => study.industry === industry),
  byTag: (tag: string) => siteData.caseStudies.filter(study => study.tags.includes(tag)),
  getMetrics: () => {
    const all = siteData.caseStudies;
    return {
      totalCases: all.length,
      featuredCases: all.filter(c => c.featured).length,
      industries: [...new Set(all.map(c => c.industry))],
      averageEfficiency: Math.round(all.reduce((sum, c) => sum + c.metrics.efficiency, 0) / all.length),
      averageSatisfaction: Math.round(all.reduce((sum, c) => sum + c.metrics.satisfaction, 0) / all.length)
    };
  }
};

export const getIntegrations = {
  all: () => siteData.integrations,
  featured: () => siteData.integrations.filter(integration => integration.featured),
  byId: (id: string) => siteData.integrations.find(integration => integration.id === id),
  byCategory: (category: string) => siteData.integrations.filter(integration => integration.category === category),
  byStatus: (status: string) => siteData.integrations.filter(integration => integration.status === status),
  getCategories: () => [...new Set(siteData.integrations.map(i => i.category))],
  getStats: () => {
    const all = siteData.integrations;
    return {
      total: all.length,
      active: all.filter(i => i.status === 'active').length,
      featured: all.filter(i => i.featured).length,
      categories: [...new Set(all.map(i => i.category))]
    };
  }
};

export const getPricing = {
  all: () => siteData.pricing.plans,
  byId: (id: string) => siteData.pricing.plans.find(plan => plan.id === id),
  popular: () => siteData.pricing.plans.find(plan => plan.popular),
  getFeatureComparison: () => {
    const plans = siteData.pricing.plans;
    const allFeatures = new Set();
    
    // Collect all unique features
    plans.forEach(plan => {
      plan.features.basic.forEach(f => allFeatures.add(f.name));
      plan.features.advanced.forEach(f => allFeatures.add(f.name));
    });
    
    return Array.from(allFeatures);
  }
};

export const getFeatures = {
  all: () => siteData.features.main,
  byId: (id: string) => siteData.features.main.find(feature => feature.id === id)
};

export const getFAQ = {
  all: () => siteData.faq,
  byId: (id: string) => siteData.faq.find(item => item.id === id),
  getCategories: () => {
    // Can be extended to categorize FAQ items if needed
    return ['General', 'Technical', 'Pricing', 'Security'];
  }
};

// Additional utility functions
export const getSearchResults = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  const results = {
    caseStudies: siteData.caseStudies.filter(study => 
      study.company.toLowerCase().includes(lowercaseQuery) ||
      study.industry.toLowerCase().includes(lowercaseQuery) ||
      study.challenge.toLowerCase().includes(lowercaseQuery) ||
      study.solution.toLowerCase().includes(lowercaseQuery) ||
      study.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    ),
    integrations: siteData.integrations.filter(integration =>
      integration.name.toLowerCase().includes(lowercaseQuery) ||
      integration.category.toLowerCase().includes(lowercaseQuery) ||
      integration.description.toLowerCase().includes(lowercaseQuery) ||
      integration.features.some(feature => feature.toLowerCase().includes(lowercaseQuery))
    ),
    faq: siteData.faq.filter(item =>
      item.question.toLowerCase().includes(lowercaseQuery) ||
      item.answer.toLowerCase().includes(lowercaseQuery)
    )
  };
  
  return results;
};

// Analytics and insights
export const getInsights = () => {
  return {
    caseStudies: getCaseStudies.getMetrics(),
    integrations: getIntegrations.getStats(),
    totalFeatures: siteData.features.main.length,
    faqCount: siteData.faq.length
  };
};