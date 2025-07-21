import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import { ArrowUpRight, FileText, X } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

interface PressRelease {
  title: string;
  date: string;
  summary: string;
  link: string;
  fullContent?: string;
}

// Sample press releases
const pressReleases: PressRelease[] = [
  {
    title: "Eva AI Raises Pre-Seed funding to Transform Business Communication",
    date: "April 15, 2025",
    summary: "Funding will accelerate product development and international expansion of Eva's AI receptionist technology.",
    link: "#",
    fullContent: `Eva AI, the leading conversational AI platform for business communication, today announced it has raised a Pre-Seed funding round led by Acme Ventures. The funding will accelerate product development and support international expansion of Eva's AI receptionist technology.

The company's AI-powered receptionist technology has shown remarkable results, with early customers reporting 40% reduction in operational costs while simultaneously improving customer satisfaction scores. Eva AI's platform uses advanced natural language processing to handle incoming calls, schedule appointments, and provide customer support with human-like conversation quality.

"We're thrilled to partner with Acme Ventures to bring Eva AI's revolutionary technology to businesses worldwide," said Sarah Johnson, CEO of Eva AI. "This funding allows us to scale our engineering team and accelerate the development of new features that will transform how businesses handle customer communications."

The funding comes at a time of rapid growth for Eva AI, which has seen a 300% increase in customer adoption over the past six months. The company plans to use the funding to expand its engineering team, enhance its AI capabilities, and enter new international markets.

Eva AI's platform integrates seamlessly with existing business systems and supports over 25 languages, making it ideal for global enterprises looking to improve their customer service operations while reducing costs.`
  },
  {
    title: "Eva AI Announces Integration with Major CRM Platforms",
    date: "February 28, 2025",
    summary: "New integrations with Salesforce, HubSpot, and Microsoft Dynamics enable seamless customer data flow.",
    link: "#",
    fullContent: `Eva AI today announced comprehensive integrations with leading CRM platforms including Salesforce, HubSpot, and Microsoft Dynamics 365. These integrations enable seamless bidirectional data flow between Eva AI's conversational AI platform and customers' existing business systems.

The new integrations allow Eva AI to automatically log call summaries, update customer records, create follow-up tasks, and trigger workflows based on conversation outcomes. This eliminates manual data entry and ensures that all customer interactions are properly documented and actionable.

"Our customers have been asking for deeper CRM integration, and we're excited to deliver solutions that make their workflows even more efficient," said Michael Chen, CTO of Eva AI. "These integrations represent a significant step forward in our mission to create truly intelligent business communication systems."

Key features of the CRM integrations include:
- Automatic contact creation and updates
- Real-time call logging and transcription
- Intelligent lead scoring based on conversation analysis
- Automated follow-up task creation
- Custom field mapping and data synchronization

The integrations are available immediately to all Eva AI customers and can be configured through the platform's administrative dashboard. Setup typically takes less than 30 minutes and requires no technical expertise.`
  },
  {
    title: "Eva AI Launches Advanced Voice Recognition Features",
    date: "January 10, 2025",
    summary: "New capabilities include improved multilingual support and industry-specific terminology recognition.",
    link: "#",
    fullContent: `Eva AI has unveiled significant enhancements to its voice recognition technology, introducing advanced features that dramatically improve accuracy across multiple languages and industry-specific terminology. The updates represent months of development and testing with customers across various sectors.

The enhanced voice recognition system now supports over 35 languages and dialects, with particular improvements in accent recognition and context understanding. The system can seamlessly switch between languages within a single conversation and maintains context across language transitions.

Industry-specific terminology recognition has been expanded to cover healthcare, legal, financial services, real estate, and technology sectors. The system now understands specialized vocabulary and can provide appropriate responses within professional contexts.

"Voice recognition accuracy is critical for building trust with customers," explained Dr. Lisa Rodriguez, Head of AI Research at Eva AI. "Our latest improvements bring us closer to human-level understanding while maintaining the speed and efficiency that businesses require."

Performance improvements include:
- 15% improvement in overall accuracy
- 25% better performance with accented speech
- Support for industry-specific jargon and terminology
- Enhanced noise cancellation for clearer conversations
- Faster response times under 200ms

The voice recognition updates are being rolled out gradually to all Eva AI customers over the next two weeks, with enterprise customers receiving priority access to the new features.`
  },
  {
    title: "Eva AI Named to Forbes AI 50 List",
    date: "December 5, 2024",
    summary: "Recognition highlights Eva's innovative approach to conversational AI for business communication.",
    link: "#",
    fullContent: `Eva AI has been selected for Forbes' prestigious AI 50 list, recognizing the company's innovative approach to conversational artificial intelligence for business communication. The annual list highlights the most promising AI companies that are transforming industries through cutting-edge technology.

Forbes recognized Eva AI for its breakthrough work in developing human-like conversational AI that can handle complex business communications with remarkable accuracy and empathy. The company's technology has been particularly praised for its ability to understand context, manage multi-turn conversations, and provide personalized responses at scale.

"Being named to the Forbes AI 50 list is an incredible honor and validation of our team's hard work," said Sarah Johnson, CEO of Eva AI. "This recognition reflects our commitment to building AI technology that genuinely improves how businesses communicate with their customers."

The Forbes selection committee noted Eva AI's impressive growth metrics, including:
- 500% year-over-year revenue growth
- 98% customer satisfaction rating
- Deployment across 15+ industries
- Processing over 1 million conversations monthly
- 40% average cost reduction for customers

Eva AI joins a distinguished group of AI innovators on the Forbes list, including companies working on autonomous vehicles, drug discovery, and financial technology. The recognition comes as Eva AI prepares for its next phase of growth, including international expansion and new product launches.

The company plans to use this momentum to continue advancing the state of conversational AI and helping more businesses transform their customer communication strategies.`
  }
];

const PressPageContent: React.FC = () => {
  const [selectedRelease, setSelectedRelease] = useState<PressRelease | null>(null);

  const handleReadRelease = (release: PressRelease) => {
    setSelectedRelease(release);
  };

  const closePopup = () => {
    setSelectedRelease(null);
  };

  return (
    <PageLayout
      title="Press Releases"
      description="Stay up to date with the latest press releases from Eva AI."
    >
      
      {/* Press Releases */}
      <section className="py-12">
        <h2 className="text-3xl font-light text-white mb-8">Press Releases</h2>
        
        <div className="flex gap-6 relative">
          {/* Press Releases List */}
          <div className={`space-y-6 transition-all duration-300 ${selectedRelease ? 'w-1/2' : 'w-full'}`}>
            {pressReleases.map((release, index) => (
              <div 
                key={index}
                className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <FileText size={18} className="text-cyan-400" />
                      <span className="text-slate-400">{release.date}</span>
                    </div>
                    <h3 className="text-xl font-medium text-white mb-2">{release.title}</h3>
                    <p className="text-slate-300">{release.summary}</p>
                  </div>
                  <button 
                    onClick={() => handleReadRelease(release)}
                    className="mt-4 md:mt-0 btn-secondary inline-flex items-center gap-2 py-2 px-4 hover:bg-cyan-500/20 transition-colors"
                  >
                    Read Full Release
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Popup Panel */}
          {selectedRelease && (
            <div className="w-1/2 fixed right-4 top-24 bottom-4 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl z-50 overflow-hidden">
              <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
                <h3 className="text-lg font-medium text-white pr-4">{selectedRelease.title}</h3>
                <button
                  onClick={closePopup}
                  className="p-2 hover:bg-slate-700/50 rounded-lg transition-colors flex-shrink-0"
                >
                  <X size={20} className="text-slate-400 hover:text-white" />
                </button>
              </div>
              <div className="p-6 overflow-y-auto h-full pb-20">
                <div className="flex items-center gap-2 mb-4">
                  <FileText size={16} className="text-cyan-400" />
                  <span className="text-slate-400 text-sm">{selectedRelease.date}</span>
                </div>
                <div className="prose prose-slate prose-invert max-w-none">
                  {selectedRelease.fullContent?.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-slate-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

const PressPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="press">
      <PressPageContent />
    </ToggleWrapper>
  );
};

export default PressPage;