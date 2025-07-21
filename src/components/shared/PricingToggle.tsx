import React from 'react';

interface PricingToggleProps {
  isAnnual: boolean;
  onToggle: (isAnnual: boolean) => void;
  compact?: boolean;
}

const PricingToggle: React.FC<PricingToggleProps> = ({ isAnnual, onToggle, compact = false }) => {
  // FIXED: Remove compact mode - use consistent design everywhere
  return (
    <div className="flex items-center justify-center gap-4 p-1 bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-full w-fit mx-auto">
      <span className={`text-sm font-medium px-4 py-2 transition-colors ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
        Monthly
      </span>
      <button 
        className="relative w-12 h-6 bg-slate-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500"
        onClick={() => onToggle(!isAnnual)}
        aria-label="Toggle between monthly and annual pricing"
      >
        <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${isAnnual ? 'transform translate-x-6' : ''}`} />
      </button>
      <span className={`text-sm font-medium px-4 py-2 transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
        Annual
        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">Save 20%</span>
      </span>
    </div>
  );
};

export default PricingToggle;