import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { ChevronDown, MapPin, Search, Filter, Users, Briefcase, Code, Cpu, HeadphonesIcon, TrendingUp } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: 'Remote' | 'Hybrid' | 'On-site';
  level: 'Entry' | 'Mid' | 'Senior';
  description: string;
  requirements: string[];
  benefits: string[];
}

// Department icons mapping
const departmentIcons = {
  'Engineering': <Code className="w-5 h-5" />,
  'AI Research': <Cpu className="w-5 h-5" />,
  'Product': <Briefcase className="w-5 h-5" />,
  'Customer Success': <HeadphonesIcon className="w-5 h-5" />,
  'Sales & Marketing': <TrendingUp className="w-5 h-5" />,
};

// Sample job listings data
const jobListings: JobListing[] = [
  {
    id: 'eng-001',
    title: 'Senior Full-Stack Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    level: 'Senior',
    description: "We're looking for an experienced full-stack engineer to help build and scale our AI communication platform. You'll be working on both frontend and backend systems, collaborating with our AI and product teams.",
    requirements: [
      '5+ years of experience in full-stack development',
      'Proficiency in React, TypeScript, and Node.js',
      'Experience with cloud services (AWS/GCP/Azure)',
      'Background in building scalable, production-grade applications',
      'Excellent problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible remote work options',
      'Learning and development stipend',
      'Generous paid time off'
    ]
  },
];

const CareersPageContent: React.FC = () => {
  // State for filters
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string | 'All'>('All');
  const [selectedLocationType, setSelectedLocationType] = useState<string | 'All'>('All');
  
  // Get unique departments and location types for filter options
  const departments = ['All', ...Array.from(new Set(jobListings.map(job => job.department)))];
  const locationTypes = ['All', ...Array.from(new Set(jobListings.map(job => job.locationType)))];
  
  // Filtered job listings based on search and filters
  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = searchTerm === '' || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    
    const matchesLocationType = selectedLocationType === 'All' || job.locationType === selectedLocationType;
    
    return matchesSearch && matchesDepartment && matchesLocationType;
  });
  
  // State for expanded job listings
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  
  return (
    <PageLayout
      title="Careers at Eva AI"
      description="Join our team of passionate individuals working to transform business communication through artificial intelligence."
    >
      {/* Company Culture Section */}
      <section className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-light text-white mb-6">Our Culture</h2>
            <p className="text-slate-300 mb-4">
              At Eva AI, we're building the future of business communication. Our diverse team brings together expertise in artificial intelligence, product design, and customer success to create technology that makes a real difference for businesses.
            </p>
            <p className="text-slate-300 mb-4">
              We value innovation, collaboration, and impact. We believe in creating an inclusive environment where everyone can contribute their best work and grow professionally. We're committed to work-life balance and offer flexible arrangements that support our team members' wellbeing.
            </p>
            <p className="text-slate-300">
              If you're passionate about AI, solving complex problems, and building products that delight users, we'd love to hear from you!
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Office environment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Team discussion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-12 bg-slate-800/20 -mx-4 px-4 rounded-xl">
        <h2 className="text-3xl font-light text-white mb-10 text-center">Benefits & Perks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
              <Users className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Competitive Compensation</h3>
            <p className="text-slate-300">Competitive salary, equity packages, and performance bonuses to reward your contributions.</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
              <MapPin className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Flexible Work</h3>
            <p className="text-slate-300">Remote-first culture with flexible hours and the option for hybrid work in our office locations.</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
              <HeadphonesIcon className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Health & Wellness</h3>
            <p className="text-slate-300">Comprehensive health, dental, and vision insurance, plus wellness programs to support your wellbeing.</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
              <Code className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Professional Growth</h3>
            <p className="text-slate-300">Learning stipends, conference attendance, and career development opportunities to help you grow.</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
              <Briefcase className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">Paid Time Off</h3>
            <p className="text-slate-300">Generous PTO policy, paid holidays, and parental leave to ensure you can recharge and spend time with loved ones.</p>
          </div>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4">
              <TrendingUp className="text-cyan-400" />
            </div>
            <h3 className="text-xl font-medium text-white mb-2">401(k) Matching</h3>
            <p className="text-slate-300">Retirement planning support with matching contributions to help you secure your financial future.</p>
          </div>
        </div>
      </section>
      
      {/* Open Positions Section */}
      <section className="py-12">
        <h2 className="text-3xl font-light text-white mb-12 text-center">Open Positions</h2>
        
        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search positions..."
              className="form-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute right-4 top-3.5 text-slate-400" size={20} />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <select
                className="form-input appearance-none pr-10"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
              <Filter className="absolute right-4 top-3.5 text-slate-400" size={16} />
            </div>
            
            <div className="relative">
              <select
                className="form-input appearance-none pr-10"
                value={selectedLocationType}
                onChange={(e) => setSelectedLocationType(e.target.value)}
              >
                {locationTypes.map((locType) => (
                  <option key={locType} value={locType}>{locType}</option>
                ))}
              </select>
              <Filter className="absolute right-4 top-3.5 text-slate-400" size={16} />
            </div>
          </div>
        </div>
        
        {/* Job Listings */}
        {filteredJobs.length > 0 ? (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedJobId(expandedJobId === job.id ? null : job.id)}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex-shrink-0 flex items-center justify-center">
                        {departmentIcons[job.department as keyof typeof departmentIcons] || <Briefcase className="text-cyan-400" />}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium text-white">{job.title}</h3>
                        <div className="flex flex-wrap gap-3 mt-2">
                          <span className="text-sm text-slate-300 flex items-center gap-1">
                            <Briefcase size={14} className="text-slate-400" />
                            {job.department}
                          </span>
                          <span className="text-sm text-slate-300 flex items-center gap-1">
                            <MapPin size={14} className="text-slate-400" />
                            {job.location}
                          </span>
                          <span className="text-sm bg-slate-700/50 text-white px-2 py-0.5 rounded-full">
                            {job.locationType}
                          </span>
                          <span className="text-sm bg-slate-700/50 text-white px-2 py-0.5 rounded-full">
                            {job.level} Level
                          </span>
                        </div>
                      </div>
                    </div>
                    <ChevronDown 
                      className={`w-5 h-5 text-slate-400 transition-transform ${expandedJobId === job.id ? 'rotate-180' : ''}`} 
                    />
                  </div>
                </div>
                
                {/* Expanded Job Details */}
                {expandedJobId === job.id && (
                  <div className="px-6 pb-6 border-t border-slate-700/50 pt-4">
                    <p className="text-slate-300 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="btn-primary">Apply Now</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-slate-800/30 max-w-md mx-auto p-6 rounded-xl">
              <h3 className="text-xl font-medium text-white mb-2">No positions found</h3>
              <p className="text-slate-400">
                Try adjusting your search or filters to find what you're looking for.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('All');
                  setSelectedLocationType('All');
                }}
                className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          </div>
        )}
      </section>
      
      {/* Application Process */}
      <section className="py-12 text-center">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-4">Our Application Process</h2>
          <p className="text-slate-300 mb-6">
            We've designed our hiring process to be thorough yet efficient, typically completing the entire process within 2-3 weeks.
          </p>
          
          <div className="space-y-6 text-left mt-8">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">1</div>
              <div>
                <h3 className="text-white font-medium">Application Review</h3>
                <p className="text-slate-400">Our team reviews your application and reaches out if there's a potential fit.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">2</div>
              <div>
                <h3 className="text-white font-medium">Initial Conversation</h3>
                <p className="text-slate-400">A 30-minute call with a recruiter to discuss your background and the role.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">3</div>
              <div>
                <h3 className="text-white font-medium">Technical or Skills Assessment</h3>
                <p className="text-slate-400">A practical evaluation relevant to the role you're applying for.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">4</div>
              <div>
                <h3 className="text-white font-medium">Team Interviews</h3>
                <p className="text-slate-400">Meet with potential teammates and cross-functional partners.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0">5</div>
              <div>
                <h3 className="text-white font-medium">Final Decision & Offer</h3>
                <p className="text-slate-400">We make a decision and extend an offer if there's a match.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const CareersPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="careers">
      <CareersPageContent />
    </ToggleWrapper>
  );
};

export default CareersPage;