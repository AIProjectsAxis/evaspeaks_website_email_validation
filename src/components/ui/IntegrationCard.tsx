import React, { useState, useEffect } from 'react';
import { ArrowRight, ExternalLink, Check } from 'lucide-react';

interface Integration {
  id: string;
  name: string;
  category: string;
  description: string;
  detailedDescription?: string;
  logo?: string;
  domain: string;
  fallbackIcon: string;
  status: string;
  featured: boolean;
  setupTime: string;
  features: string[];
  setupSteps?: string[];
  pricing?: string;
  documentation?: string;
  benefits?: string[];
}

interface IntegrationCardProps {
  integration: Integration;
  variant?: 'preview' | 'detailed';
  onClick?: () => void;
}

// Logo component with multiple fallback strategies
const IntegrationLogo: React.FC<{
  integration: Integration;
  size?: number;
}> = ({ integration, size = 40 }) => {
  const [logoSrc, setLogoSrc] = useState<string>('');
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [useEmoji, setUseEmoji] = useState(false);

  useEffect(() => {
    const clearbitUrl = `https://logo.clearbit.com/${integration.domain}`;
    const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${integration.domain}&sz=64`;
    const duckduckgoUrl = `https://icons.duckduckgo.com/ip3/${integration.domain}.ico`;

    const tryLoadLogo = async (url: string): Promise<boolean> => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLogoSrc(url);
          setLogoLoaded(true);
          resolve(true);
        };
        img.onerror = () => resolve(false);
        img.src = url;
      });
    };

    const loadLogo = async () => {
      if (await tryLoadLogo(clearbitUrl)) return;
      if (await tryLoadLogo(googleFaviconUrl)) return;
      if (await tryLoadLogo(duckduckgoUrl)) return;
      setUseEmoji(true);
    };

    loadLogo();
  }, [integration.domain]);

  if (useEmoji || !logoLoaded) {
    return (
      <div 
        className="flex items-center justify-center rounded-lg font-medium text-2xl"
        style={{ 
          width: size, 
          height: size,
          backgroundColor: `rgba(6, 182, 212, 0.1)`,
          border: `1px solid rgba(6, 182, 212, 0.2)`
        }}
      >
        {integration.fallbackIcon}
      </div>
    );
  }

  return (
    <div 
      className="flex items-center justify-center rounded-lg overflow-hidden"
      style={{ 
        width: size, 
        height: size,
        backgroundColor: `rgba(6, 182, 212, 0.1)`,
        border: `1px solid rgba(6, 182, 212, 0.2)`
      }}
    >
      <img
        src={logoSrc}
        alt={`${integration.name} logo`}
        className="w-full h-full object-contain p-1"
        style={{ filter: 'brightness(1.1) contrast(1.1)' }}
        onError={() => setUseEmoji(true)}
        width={size}
        height={size}
      />
    </div>
  );
};

const IntegrationCard: React.FC<IntegrationCardProps> = ({ integration, variant = 'preview', onClick }) => {
  const getStatusColor = (status: string) => {
    return status === 'active' ? 'bg-green-400' : 'bg-yellow-400';
  };

  const handleCardClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const handleLearnMoreClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  if (variant === 'preview') {
    // Homepage section version
    return (
      <div 
        className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10 touch-target"
        onClick={handleCardClick}
        onKeyDown={(e) => handleKeyDown(e, handleCardClick)}
        role="button"
        tabIndex={0}
        aria-label={`Learn more about ${integration.name} integration`}
      >
        <div className="flex items-center gap-4 mb-4">
          <IntegrationLogo integration={integration} size={48} />
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg mb-1 truncate text-white">
              {integration.name}
            </h3>
            <span 
              className="text-xs px-2 py-1 rounded-full border font-medium"
              style={{ 
                backgroundColor: `rgba(6, 182, 212, 0.1)`,
                borderColor: `rgba(6, 182, 212, 0.3)`,
                color: '#06b6d4'
              }}
            >
              {integration.category}
            </span>
          </div>
        </div>
        
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {integration.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full animate-pulse ${getStatusColor(integration.status)}`}></div>
            <span className="text-xs text-slate-500">
              Ready to connect
            </span>
          </div>
          {/* <span className="text-xs text-slate-500">
            {integration.setupTime} setup
          </span> */}
        </div>
        
        <button 
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-gradient-to-r hover:from-cyan-500/30 hover:to-blue-500/30 transition-all text-sm touch-target"
          onClick={handleLearnMoreClick}
          onKeyDown={(e) => handleKeyDown(e, handleLearnMoreClick)}
          aria-label={`Learn more about ${integration.name}`}
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  if (variant === 'detailed') {
    // Full page version
    return (
      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
        <div className="flex items-start gap-6 mb-6">
          <IntegrationLogo integration={integration} size={64} />
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-2">
              <h3 className="text-2xl font-bold text-white">{integration.name}</h3>
              <span 
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ 
                  backgroundColor: `rgba(6, 182, 212, 0.2)`,
                  borderColor: `rgba(6, 182, 212, 0.4)`,
                  color: '#06b6d4',
                  border: `1px solid`
                }}
              >
                {integration.category}
              </span>
            </div>
            <p className="text-slate-300 text-lg mb-4">{integration.detailedDescription || integration.description}</p>
            {/* <div className="flex items-center gap-4 text-sm text-slate-400">
              {integration.pricing && <span>Pricing: {integration.pricing}</span>}
              {integration.documentation && (
                <a 
                  href={integration.documentation}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors touch-target"
                  onClick={(e) => e.stopPropagation()}
                  aria-label={`View ${integration.name} documentation (opens in new tab)`}
                >
                  Documentation <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div> */}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Features */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">Features</h4>
            <ul className="space-y-2">
              {integration.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Setup Steps or Benefits */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              {integration.setupSteps ? 'Setup Steps' : 'Benefits'}
            </h4>
            <ul className="space-y-2">
              {(integration.setupSteps || integration.benefits || []).map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300">
                  {integration.setupSteps ? (
                    <span 
                      className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5"
                      style={{ 
                        backgroundColor: `rgba(6, 182, 212, 0.2)`,
                        color: '#06b6d4'
                      }}
                    >
                      {idx + 1}
                    </span>
                  ) : (
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  )}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex gap-4">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity touch-target">
            Start Integration
          </button>
          {integration.documentation && (
            <a 
              href={integration.documentation}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-600 text-slate-300 px-6 py-3 rounded-lg font-medium hover:bg-slate-700/50 transition-colors inline-flex items-center gap-2 touch-target"
              onClick={(e) => e.stopPropagation()}
              aria-label={`View ${integration.name} documentation (opens in new tab)`}
            >
              View Documentation
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    );
  }

  return null;
};

export default IntegrationCard;