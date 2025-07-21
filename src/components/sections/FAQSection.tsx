import React, { useState } from 'react';

interface FAQ {
  question: string;
  answer: string;
  isOpen: boolean;
}

const FAQSection: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([
    {
      question: "How secure is my business data?",
      answer: "We use enterprise-grade cloud services with end-to-end encryption to ensure your sensitive information is protected. All data is stored securely with role-based access controls, and we're fully compliant with industry security standards.",
      isOpen: false
    },
    {
      question: "I don't have technical experience. How easy is it to set up my AI receptionist?",
      answer: "Our no-code platform is designed for everyone! Simply answer a few questions about your business, requirements, and what you want your AI agent to handle. Our step-by-step wizard walks you through the entire setup process - no technical knowledge required.",
      isOpen: false
    },
    {
      question: "How long does it take to get my AI receptionist up and running?",
      answer: "Most businesses are up and running within 15-30 minutes. Our guided onboarding process helps you configure your AI receptionist quickly, and you can start receiving calls immediately after setup.",
      isOpen: false
    },
    {
      question: "Can I connect my existing business tools?",
      answer: "Absolutely! Eva AI integrates seamlessly with popular CRMs (Zoho CRM), calendars (Google, Outlook), and other business tools. Most integrations can be set up with just a few clicks.",
      isOpen: false
    },
    {
      question: "Can I control when my AI receptionist is active?",
      answer: "Yes, you have complete control. You can set business hours, enable after-hours emergency handling, or turn your AI receptionist on/off based on your needs. You can also connect it to existing phone systems or set up new ones.",
      isOpen: false
    },
    {
      question: "What industries does Eva AI work best for?",
      answer: "Eva AI works great for healthcare practices, construction services (plumbing, HVAC, electrical), legal services, property management, restaurants, and many more. Each setup is customized to your specific industry requirements.",
      isOpen: false
    },
    {
      question: "Does Eva AI support multiple languages?",
      answer: "Yes! Eva AI offers multi-language support to help you serve diverse customer bases. This is especially valuable for property management, healthcare practices, and service businesses with multilingual customers.",
      isOpen: false
    }
  ]);
  
  const toggleFaq = (index: number) => {
    setFaqs(faqs.map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : faq
    ));
  };

  return (
    <section className="faq-container">
      <div className="container mx-auto">
        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="faq-header">
            <h3 className="faq-title">Frequently Asked Questions</h3>
            <button
              onClick={() => {
                const allClosed = faqs.every(faq => !faq.isOpen);
                setFaqs(faqs.map(faq => ({ ...faq, isOpen: allClosed })));
              }}
              className="faq-toggle-all"
            >
              <span>{faqs.every(faq => !faq.isOpen) ? 'Expand All' : 'Collapse All'}</span>
            </button>
          </div>
          
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button
                  onClick={() => toggleFaq(index)}
                  className="faq-button"
                >
                  <h4 className="faq-question">{faq.question}</h4>
                  <div className={`faq-toggle-icon ${faq.isOpen ? 'faq-toggle-icon-open' : ''}`}>
                    <svg 
                      className={`faq-icon ${faq.isOpen ? 'faq-icon-open' : 'faq-icon-closed'}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`faq-answer-container ${faq.isOpen ? 'faq-answer-open' : 'faq-answer-closed'}`}>
                  <div className="faq-answer-content">
                    <div className="faq-answer-divider">
                      <p className="faq-answer">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;