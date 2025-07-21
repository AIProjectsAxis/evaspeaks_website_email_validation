import React, { useState } from 'react';
import { Header, Footer } from '../components';
import { Search, Filter } from 'lucide-react';
import { getCaseStudies } from '../data';
import CaseStudyCard from '../components/ui/CaseStudyCard';
import ToggleWrapper from '../components/ui/ToggleWrapper';

const CaseStudiesPageContent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const allCases = getCaseStudies.all();
  
  // Get unique industries and tags from data
  const industries = Array.from(new Set(allCases.map(study => study.industry)));
  const allTags = Array.from(new Set(allCases.flatMap(study => study.tags)));

  // Filter case studies based on search, industry, and tags
  const filteredCaseStudies = allCases.filter(study => {
    const matchesSearch = searchTerm === '' || 
      study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.challenge.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.solution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.industry.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesIndustry = selectedIndustry === null || study.industry === selectedIndustry;
    
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => study.tags.includes(tag));
    
    return matchesSearch && matchesIndustry && matchesTags;
  });

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  return (
    <ToggleWrapper type="page" name="caseStudies">
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />
        
        <main className="relative py-20">
          {/* Hero Section */}
          <div className="container mx-auto px-4 mb-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extralight text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Case Studies
                </span>
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Discover how businesses across industries leverage Eva AI to transform their customer communication and drive measurable results.
              </p>
            </div>
          </div>

          {/* Filters Section */}
          <div className="container mx-auto px-4 mb-12">
            <div className="max-w-6xl mx-auto">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search case studies..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-colors"
                    />
                  </div>

                  {/* Industry Filter */}
                  <div className="relative">
                    <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 pointer-events-none" />
                    <select
                      value={selectedIndustry || ''}
                      onChange={(e) => setSelectedIndustry(e.target.value || null)}
                      className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">All Industries</option>
                      {industries.map(industry => (
                        <option key={industry} value={industry}>{industry}</option>
                      ))}
                    </select>
                  </div>

                  {/* Results Count */}
                  <div className="flex items-center justify-center lg:justify-end">
                    <span className="text-slate-400">
                      Showing {filteredCaseStudies.length} of {allCases.length} case studies
                    </span>
                  </div>
                </div>

                {/* Tags Filter */}
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h3 className="text-white font-medium mb-3">Filter by Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                            : 'bg-slate-700/50 text-slate-300 border border-slate-600/30 hover:bg-slate-600/50'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Case Studies Grid */}
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {filteredCaseStudies.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredCaseStudies.map((study) => (
                    <CaseStudyCard 
                      key={study.id} 
                      caseStudy={study} 
                      variant="detailed" 
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-800/50 flex items-center justify-center">
                    <Search className="w-8 h-8 text-slate-500" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">No case studies found</h3>
                  <p className="text-slate-400 mb-6">
                    Try adjusting your search terms or filters to find more results.
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedIndustry(null);
                      setSelectedTags([]);
                    }}
                    className="px-6 py-3 bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/30 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </ToggleWrapper>
  );
};

const CaseStudiesPage: React.FC = () => {
  return <CaseStudiesPageContent />;
};

export default CaseStudiesPage;