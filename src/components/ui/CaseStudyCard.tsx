import React from 'react';

interface CaseStudy {
  id: string;
  company: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  featured?: boolean;
  tags: string[];
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  variant?: 'summary' | 'detailed';
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ caseStudy, variant = 'summary' }) => {
  if (variant === 'summary') {
    // Homepage section version - clean and focused
    return (
      <div className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
        {/* Company Header */}
        <div className="relative p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform">
              <span className="text-lg font-bold text-cyan-400">{caseStudy.company.charAt(0)}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{caseStudy.company}</h3>
              <p className="text-cyan-400 text-sm font-medium">{caseStudy.industry}</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {/* Challenge */}
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-orange-400"></div>
              Challenge
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{caseStudy.challenge}</p>
          </div>

          {/* Solution */}
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-blue-400"></div>
              Solution
            </h4>
            <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">{caseStudy.solution}</p>
          </div>

          {/* Results - Show top 3 only */}
          <div>
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Key Results
            </h4>
            <div className="space-y-2">
              {caseStudy.results.slice(0, 3).map((result, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 rounded-lg bg-green-500/5 border border-green-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></div>
                  <span className="text-slate-300 text-sm">{result}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags - Show top 3 only */}
          <div className="pt-4 border-t border-slate-700/30">
            <div className="flex flex-wrap gap-2">
              {caseStudy.tags.slice(0, 3).map((tag, idx) => (
                <span 
                  key={idx}
                  className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
              {caseStudy.tags.length > 3 && (
                <span className="text-xs text-slate-500 px-2 py-1">
                  +{caseStudy.tags.length - 3} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For 'detailed' variant - used in case studies page
  if (variant === 'detailed') {
    return (
      <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
        <div className="relative">
          <img 
            src={caseStudy.image} 
            alt={caseStudy.company}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <h3 className="text-lg font-bold text-white">{caseStudy.company}</h3>
            <p className="text-cyan-400">{caseStudy.industry}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Challenge:</h4>
            <p className="text-slate-400 text-sm">{caseStudy.challenge}</p>
          </div>

          <div className="mb-4">
            <h4 className="text-white font-medium mb-2">Solution:</h4>
            <p className="text-slate-400 text-sm">{caseStudy.solution}</p>
          </div>

          <div className="mb-6">
            <h4 className="text-white font-medium mb-2">Results:</h4>
            <ul className="text-slate-400 space-y-1">
              {caseStudy.results.map((result, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  {result}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="text-xs bg-slate-700/50 text-slate-300 px-2 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default CaseStudyCard;