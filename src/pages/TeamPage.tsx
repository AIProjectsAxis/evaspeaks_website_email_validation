import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

// Team member data structure
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const teamMembers: TeamMember[] = [
  {
    name: "CEO",
    role: "CEO & Co-Founder",
    bio: "**",
    image: "",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "ceo@evaspeaks.ai"
    }
  },
  {
    name: "CTO",
    role: "CTO & Co-Founder",
    bio: "",
    image: "",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "cto@evaspeaks.ai"
    }
  },
  {
    name: "CPO",
    role: "Chief Product Officer",
    bio: "",
    image: "",
    social: {
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      email: "cpo@evaspeaks.ai"
    }
  }
];

const advisors = [
];

const TeamPageContent: React.FC = () => {
  return (
    <PageLayout
      title="Our Team"
      description="Meet the passionate individuals behind Eva AI who are dedicated to transforming business communication through artificial intelligence."
    >
      {/* Leadership Team */}
      <section className="py-16">
        <h2 className="text-3xl font-light text-white mb-12 text-center">Leadership</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="h-64 relative">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-medium text-white">{member.name}</h3>
                  <p className="text-cyan-400">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-300 mb-4">{member.bio}</p>
                
                <div className="flex space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                      <Twitter size={20} />
                    </a>
                  )}
                  {member.social.email && (
                    <a href={`mailto:${member.social.email}`} className="text-white/60 hover:text-white transition-colors">
                      <Mail size={20} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 bg-slate-800/20 -mx-4 px-4 rounded-xl">
        <h2 className="text-3xl font-light text-white mb-12 text-center">Advisors</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {advisors.map((advisor, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img 
                    src={advisor.image} 
                    alt={advisor.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-medium text-white mb-1">{advisor.name}</h3>
                  <p className="text-cyan-400 mb-3">{advisor.role}</p>
                  <p className="text-slate-300 mb-4">{advisor.bio}</p>
                  
                  <div className="flex space-x-4">
                    {advisor.social.linkedin && (
                      <a href={advisor.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <Linkedin size={20} />
                      </a>
                    )}
                    {advisor.social.twitter && (
                      <a href={advisor.social.twitter} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <Twitter size={20} />
                      </a>
                    )}
                    {advisor.social.email && (
                      <a href={`mailto:${advisor.social.email}`} className="text-white/60 hover:text-white transition-colors">
                        <Mail size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Join the Team CTA */}
      <section className="py-16 text-center">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-light text-white mb-4">Join Our Team</h2>
          <p className="text-slate-300 mb-6">
            We're always looking for talented individuals who are passionate about AI and solving real business problems.
          </p>
          <a href="/careers" className="btn-primary inline-block">View Open Positions</a>
        </div>
      </section>
    </PageLayout>
  );
};

const TeamPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="team">
      <TeamPageContent />
    </ToggleWrapper>
  );
};

export default TeamPage;