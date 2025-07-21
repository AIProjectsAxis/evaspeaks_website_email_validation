import React, { useState, useEffect, useRef } from 'react';
import {
  Wrench, Heart, Scale, Building, Phone, MessageSquare,
  CheckCircle2, Clock, Brain, Zap, User, Bot, Play, Pause,
  Mic, Volume2, Calendar, FileText, CreditCard, MapPin, Star,
  Activity, Users, Globe, Shield, Sparkles, PhoneCall
} from 'lucide-react';

interface ProcessingStep {
  step: string;
  icon: React.ReactNode;
  status: 'complete' | 'active' | 'pending';
}

interface ConversationMessage {
  type: 'customer' | 'eva';
  message: string;
  time: string;
  isTyping?: boolean;
  processing?: ProcessingStep[];
}

interface IndustryScenario {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  icon: React.ReactNode;
  accentColor: string;
  glowColor: string;
  gradient: string;
  scenario: string;
  conversation: ConversationMessage[];
}

const industryScenarios: IndustryScenario[] = [
  {
    id: 'construction',
    title: 'Emergency',
    subtitle: 'Plumbing',
    industry: 'Construction Services',
    icon: <Wrench className="w-4 h-4" />,
    accentColor: '#f97316',
    glowColor: 'rgba(249, 115, 22, 0.25)',
    gradient: 'linear-gradient(135deg, #f97316, #ea580c)',
    scenario: 'Emergency Burst Pipe - 2:30 AM',
    conversation: [
      {
        type: 'customer',
        message: "Help! I have a burst pipe in my basement and water is everywhere!",
        time: '2:31 AM'
      },
      {
        type: 'eva',
        message: "I understand this is an emergency. I'm connecting you with our emergency plumber right now. Can you tell me your address?",
        time: '2:31 AM',
        processing: [
          { step: 'Emergency Detected', icon: <Zap className="w-3 h-3" />, status: 'complete' },
          { step: 'Locating Technician', icon: <MapPin className="w-3 h-3" />, status: 'active' },
          { step: 'Route Planning', icon: <Activity className="w-3 h-3" />, status: 'pending' }
        ]
      },
      {
        type: 'customer',
        message: "1247 Oak Street. How quickly can someone get here?",
        time: '2:32 AM'
      },
      {
        type: 'eva',
        message: "Mike is our nearest emergency technician and he's 8 minutes away. In the meantime, please turn off your main water valve to stop the flooding. Mike will call you when he arrives.",
        time: '2:32 AM',
        processing: [
          { step: 'Technician Assigned', icon: <User className="w-3 h-3" />, status: 'complete' },
          { step: 'ETA Calculated', icon: <Clock className="w-3 h-3" />, status: 'complete' },
          { step: 'Emergency Instructions', icon: <FileText className="w-3 h-3" />, status: 'active' }
        ]
      },
      {
        type: 'customer',
        message: "Thank you so much! That's exactly what I needed to hear.",
        time: '2:33 AM'
      },
      {
        type: 'eva',
        message: "You're welcome! I've sent you Mike's contact details via text. He'll be there shortly. Is there anything else I can help you with right now?",
        time: '2:33 AM',
        processing: [
          { step: 'Contact Details Sent', icon: <MessageSquare className="w-3 h-3" />, status: 'complete' },
          { step: 'Follow-up Scheduled', icon: <Calendar className="w-3 h-3" />, status: 'active' }
        ]
      },
      {
        type: 'customer',
        message: "No, that's perfect. Thank you for the quick response!",
        time: '2:34 AM'
      }
    ]
  },
  {
    id: 'healthcare',
    title: 'Healthcare',
    subtitle: 'Appointment',
    industry: 'Medical Practice',
    icon: <Heart className="w-4 h-4" />,
    accentColor: '#06b6d4',
    glowColor: 'rgba(6, 182, 212, 0.25)',
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    scenario: 'New Patient Appointment Booking',
    conversation: [
      {
        type: 'customer',
        message: "Hi, I'd like to schedule a check-up appointment. I'm a new patient.",
        time: '10:15 AM'
      },
      {
        type: 'eva',
        message: "Welcome! I'd be happy to help you schedule an appointment. May I have your name and insurance provider?",
        time: '10:15 AM',
        processing: [
          { step: 'New Patient Process', icon: <User className="w-3 h-3" />, status: 'active' },
          { step: 'Insurance Verification', icon: <CreditCard className="w-3 h-3" />, status: 'pending' },
          { step: 'Scheduling', icon: <Calendar className="w-3 h-3" />, status: 'pending' }
        ]
      },
      {
        type: 'customer',
        message: "Sarah Johnson, and I have Blue Cross Blue Shield.",
        time: '10:16 AM'
      },
      {
        type: 'eva',
        message: "Perfect, Sarah. I've verified your Blue Cross coverage. Dr. Chen has availability this Thursday at 2:30 PM or Friday at 11:00 AM for a comprehensive physical. Which works better for you?",
        time: '10:16 AM',
        processing: [
          { step: 'Insurance Verified', icon: <CreditCard className="w-3 h-3" />, status: 'complete' },
          { step: 'Available Slots Found', icon: <Calendar className="w-3 h-3" />, status: 'complete' },
          { step: 'Doctor Matched', icon: <User className="w-3 h-3" />, status: 'active' }
        ]
      },
      {
        type: 'customer',
        message: "Thursday at 2:30 PM works great for me.",
        time: '10:17 AM'
      },
      {
        type: 'eva',
        message: "Excellent! I've booked your appointment with Dr. Chen for Thursday, March 14th at 2:30 PM. You'll receive a confirmation email with pre-visit forms to complete. Please arrive 15 minutes early for check-in.",
        time: '10:17 AM',
        processing: [
          { step: 'Appointment Confirmed', icon: <CheckCircle2 className="w-3 h-3" />, status: 'complete' },
          { step: 'Forms Sent', icon: <FileText className="w-3 h-3" />, status: 'complete' },
          { step: 'Reminder Set', icon: <Clock className="w-3 h-3" />, status: 'active' }
        ]
      }
    ]
  },
  {
    id: 'legal',
    title: 'Legal',
    subtitle: 'Consultation',
    industry: 'Personal Injury Law',
    icon: <Scale className="w-4 h-4" />,
    accentColor: '#8b5cf6',
    glowColor: 'rgba(139, 92, 246, 0.25)',
    gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
    scenario: 'Personal Injury Case Consultation',
    conversation: [
      {
        type: 'customer',
        message: "I was in a car accident last week. The other driver's insurance offered me $5,000 but my medical bills are already $4,200.",
        time: '3:22 PM'
      },
      {
        type: 'eva',
        message: "I'm sorry to hear about your accident. Based on what you've shared, that settlement offer seems quite low considering your medical expenses alone. Would you like to speak with one of our personal injury attorneys for a free consultation?",
        time: '3:22 PM',
        processing: [
          { step: 'Case Assessment', icon: <Brain className="w-3 h-3" />, status: 'complete' },
          { step: 'Settlement Analysis', icon: <CreditCard className="w-3 h-3" />, status: 'active' },
          { step: 'Attorney Matching', icon: <User className="w-3 h-3" />, status: 'pending'  }
        ]
      },
      {
        type: 'customer',
        message: "Yes, that would be helpful. What would a consultation cost?",
        time: '3:23 PM'
      },
      {
        type: 'eva',
        message: "Our consultations are completely free with no obligation. We work on a contingency basis, meaning you don't pay attorney fees unless we win your case. Attorney Rodriguez specializes in car accidents and can see you tomorrow at 2:00 PM or Thursday at 10:00 AM.",
        time: '3:23 PM',
        processing: [
          { step: 'Fee Structure Explained', icon: <FileText className="w-3 h-3" />, status: 'complete' },
          { step: 'Attorney Available', icon: <User className="w-3 h-3" />, status: 'complete' },
          { step: 'Scheduling Options', icon: <Calendar className="w-3 h-3" />, status: 'active' }
        ]
      },
      {
        type: 'customer',
        message: "Tomorrow at 2:00 PM would be perfect. What should I bring?",
        time: '3:24 PM'
      },
      {
        type: 'eva',
        message: "Great! I've scheduled your consultation with Attorney Rodriguez for tomorrow at 2:00 PM. Please bring your insurance correspondence, medical records, police report, and any photos from the accident. I'm sending you a detailed checklist now.",
        time: '3:24 PM',
        processing: [
          { step: 'Consultation Booked', icon: <Calendar className="w-3 h-3" />, status: 'complete' },
          { step: 'Checklist Sent', icon: <FileText className="w-3 h-3" />, status: 'complete' },
          { step: 'Case File Created', icon: <Shield className="w-3 h-3" />, status: 'active' }
        ]
      }
    ]
  },
  {
    id: 'property',
    title: 'Property',
    subtitle: 'Management',
    industry: 'Residential Property',
    icon: <Building className="w-4 h-4" />,
    accentColor: '#10b981',
    glowColor: 'rgba(16, 185, 129, 0.25)',
    gradient: 'linear-gradient(135deg, #10b981, #059669)',
    scenario: 'AC Repair Request - Hot Day',
    conversation: [
      {
        type: 'customer',
        message: "My air conditioning stopped working overnight in unit 304. It's supposed to be 95 degrees today!",
        time: '1:45 PM'
      },
      {
        type: 'eva',
        message: "Hi Jessica, I see you're in unit 304 at Riverside Apartments. Given today's heat warning, I'm marking this as urgent priority. Let me check our HVAC technician availability right now.",
        time: '1:45 PM',
        processing: [
          { step: 'Tenant Verified', icon: <User className="w-3 h-3" />, status: 'complete' },
          { step: 'Weather Alert Noted', icon: <Activity className="w-3 h-3" />, status: 'complete' },
          { step: 'Priority Escalation', icon: <Zap className="w-3 h-3" />, status: 'active' }
        ]
      },
      {
        type: 'customer',
        message: "Thank you! This heat is really uncomfortable.",
        time: '1:46 PM'
      },
      {
        type: 'eva',
        message: "I completely understand. Tom from AAA HVAC can be there between 3:00 and 5:00 PM today. If it's a simple fix, he'll have you cooling down this afternoon. For complex repairs requiring parts, we'll provide a temporary AC unit within 2 hours.",
        time: '1:46 PM',
        processing: [
          { step: 'HVAC Tech Scheduled', icon: <User className="w-3 h-3" />, status: 'complete' },
          { step: 'Backup Plan Ready', icon: <Shield className="w-3 h-3" />, status: 'complete' },
          { step: 'Work Order Created', icon: <FileText className="w-3 h-3" />, status: 'active' }
        ]
      },
      {
        type: 'customer',
        message: "That sounds perfect. Will I get updates on the technician's arrival?",
        time: '1:47 PM'
      },
      {
        type: 'eva',
        message: "Absolutely! You'll receive text updates when Tom is on his way and when he arrives. I've also noted your preferred contact method. Is there anything else I can help you with while we get this resolved?",
        time: '1:47 PM',
        processing: [
          { step: 'Notifications Set', icon: <MessageSquare className="w-3 h-3" />, status: 'complete' },
          { step: 'Contact Preferences Updated', icon: <Phone className="w-3 h-3" />, status: 'complete' }
        ]
      },
      {
        type: 'customer',
        message: "No, that covers everything. Thank you for the quick response!",
        time: '1:48 PM'
      }
    ]
  }
];

const FeaturesSection: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState(0);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTyping, setShowTyping] = useState(false);
  const [allProcessingSteps, setAllProcessingSteps] = useState<ProcessingStep[]>([]);
  const [isCallActive, setIsCallActive] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const messagesRef = useRef<HTMLDivElement>(null);
  const processingRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const currentScenario = industryScenarios[activeScenario];

  // Set CSS custom properties for dynamic theming
  useEffect(() => {
    if (sectionRef.current) {
      const root = sectionRef.current;
      root.style.setProperty('--scenario-accent', currentScenario.accentColor);
      root.style.setProperty('--scenario-glow', currentScenario.glowColor);
      root.style.setProperty('--scenario-gradient', currentScenario.gradient);
      root.style.setProperty('--scenario-border', `${currentScenario.accentColor}33`);
    }
  }, [activeScenario]);

  // Auto-scroll processing steps to show latest
  const scrollToLatestProcessing = () => {
    if (processingRef.current) {
      const container = processingRef.current;
      container.scrollTo({
        left: container.scrollWidth,
        behavior: 'smooth'
      });
    }
  };

  // Smooth container scrolling
  const scrollToCurrentMessage = () => {
    if (messagesRef.current && messagesRef.current.children[currentMessageIndex]) {
      const container = messagesRef.current;
      const messageElement = messagesRef.current.children[currentMessageIndex] as HTMLElement;
      
      const containerHeight = container.clientHeight;
      const messageTop = messageElement.offsetTop;
      const messageHeight = messageElement.clientHeight;
      
      const scrollPosition = messageTop - (containerHeight / 2) + (messageHeight / 2);
      
      container.scrollTo({
        top: Math.max(0, scrollPosition),
        behavior: 'smooth'
      });
    }
  };

  // Auto-play conversation logic
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrentMessageIndex(prev => {
        const conversation = currentScenario.conversation;
        const lastIndex = conversation.length - 1;
        
        if (prev >= lastIndex) {
          setTimeout(() => {
            setActiveScenario(s => (s + 1) % industryScenarios.length);
            setCurrentMessageIndex(0);
            setShowTyping(false);
            setAllProcessingSteps([]);
            setIsCallActive(true);
          }, 3000);
          return prev;
        }

        const nextMessage = conversation[prev + 1];
        
        if (nextMessage && nextMessage.processing) {
          setAllProcessingSteps(current => {
            const newSteps = [...current];
            nextMessage.processing?.forEach(newStep => {
              const existingStepIndex = newSteps.findIndex(step => step.step === newStep.step);
              if (existingStepIndex >= 0) {
                newSteps[existingStepIndex] = { ...newStep };
              } else {
                newSteps.push({ ...newStep });
              }
            });
            return newSteps;
          });
          
          setTimeout(scrollToLatestProcessing, 200);
          
          if (nextMessage.type === 'eva') {
            setShowTyping(true);
            setTimeout(() => setShowTyping(false), 1500);
          }
        }
        
        return prev + 1;
      });
    }, 3800);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying, activeScenario, currentScenario]);

  // Scroll to current message and processing steps
  useEffect(() => {
    const timer = setTimeout(() => {
      scrollToCurrentMessage();
      scrollToLatestProcessing();
    }, 300);
    return () => clearTimeout(timer);
  }, [currentMessageIndex, allProcessingSteps]);

  // Event handlers
  const handleScenarioClick = (index: number) => {
    if (index === activeScenario) return;
    
    setActiveScenario(index);
    setCurrentMessageIndex(0);
    setShowTyping(false);
    setAllProcessingSteps([]);
    setIsCallActive(true);
    
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    
    setTimeout(() => setIsPlaying(true), 200);
  };

  const togglePlayPause = () => setIsPlaying(prev => !prev);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      action();
    }
  };

  return (
    <section ref={sectionRef} id="features" className="features-section">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-900/20 to-slate-950/0 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <header className="features-header">
          <h1 className="features-title">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Eva in Action
            </span>
          </h1>
          <p className="features-subtitle">
            Watch how Eva handles real customer conversations across different industries
          </p>
        </header>

        <div className="max-w-6xl mx-auto">
          {/* Scenario Selector */}
          <div className="features-scenarios-grid mb-8">
            {industryScenarios.map((scenario, index) => (
              <button
                key={scenario.id}
                onClick={() => handleScenarioClick(index)}
                onKeyDown={(e) => handleKeyDown(e, () => handleScenarioClick(index))}
                className={`features-scenario-card ${
                  activeScenario === index ? 'features-scenario-active' : ''
                }`}
                style={activeScenario === index ? {
                  '--card-accent': scenario.accentColor,
                  '--card-glow': scenario.glowColor,
                } as React.CSSProperties : undefined}
                aria-label={`View ${scenario.industry} scenario: ${scenario.title} ${scenario.subtitle}`}
                aria-pressed={activeScenario === index}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-50" />
                
                <div className="relative flex items-start gap-3">
                  <div className={`features-scenario-icon ${
                    activeScenario === index ? 'features-scenario-active' : ''
                  }`}>
                    {scenario.icon}
                  </div>
                  <div className="features-scenario-text">
                    <h3>{scenario.title}</h3>
                    <p>{scenario.subtitle}</p>
                  </div>
                </div>

                {activeScenario === index && (
                  <div className="features-scenario-indicator" />
                )}
              </button>
            ))}
          </div>

          {/* Conversation Window - CONSISTENT WIDTH WITH TOP CONTAINERS */}
          <div className="features-conversation-wrapper">
            {/* SLEEK AI Processing Bar */}
            {allProcessingSteps.length > 0 && (
              <div className="mb-4">
                <div className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-xl p-3 shadow-lg">
                  {/* Compact Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                      <span className="text-xs font-medium text-cyan-400">AI Processing</span>
                    </div>
                    <div className="text-xs text-slate-500">
                      {allProcessingSteps.filter(s => s.status === 'complete').length}/{allProcessingSteps.length}
                    </div>
                  </div>
                  
                  {/* Compact Processing Steps */}
                  <div 
                    ref={processingRef}
                    className="flex gap-2 overflow-x-auto scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    {allProcessingSteps.map((step, idx) => (
                      <div 
                        key={idx} 
                        className={`flex items-center gap-1.5 px-2 py-1 rounded-lg text-xs whitespace-nowrap transition-all duration-300 ${
                          step.status === 'complete' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : step.status === 'active'
                            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 animate-pulse'
                            : 'bg-slate-700/30 text-slate-500 border border-slate-600/30'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {React.cloneElement(step.icon as React.ReactElement, { 
                            className: 'w-3 h-3'
                          })}
                        </div>
                        <span className="font-medium">{step.step}</span>
                        {step.status === 'complete' && (
                          <CheckCircle2 className="w-3 h-3 text-green-400" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Header */}
            <header className="features-conv-header">
              <div className="features-conv-info">
                <div className="features-conv-avatar">
                  <PhoneCall className="w-4 h-4" />
                </div>
                
                <div className="flex-1">
                  <h3>{currentScenario.scenario}</h3>
                </div>

                {showTyping && (
                  <div className="features-live-badge">
                    <div className="features-live-dot" />
                    <span>Eva speaking...</span>
                  </div>
                )}
              </div>
              
              <div className="features-conv-controls">
                <button 
                  onClick={togglePlayPause}
                  onKeyDown={(e) => handleKeyDown(e, togglePlayPause)}
                  className="features-control-btn"
                  aria-label={isPlaying ? 'Pause conversation' : 'Play conversation'}
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                </button>
              </div>
            </header>

            {/* Messages Area */}
            <div ref={messagesRef} className="features-messages" role="log" aria-live="polite" aria-label="Conversation messages">
              {currentScenario.conversation.slice(0, currentMessageIndex + 1).map((message, index) => (
                <div
                  key={index}
                  className={`features-message ${
                    message.type === 'customer' ? 'features-message-customer' : ''
                  }`}
                >
                  <div className={`features-msg-avatar ${
                    message.type === 'customer' ? 'features-avatar-customer' : 'features-avatar-eva'
                  }`}>
                    {message.type === 'customer' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div className="features-msg-content">
                    <div className="features-msg-header">
                      <span className="features-msg-name">
                        {message.type === 'customer' ? 'Customer' : 'Eva'}
                      </span>
                      <span className="features-msg-time">{message.time}</span>
                    </div>
                    <div className={`features-msg-bubble ${
                      message.type === 'customer'
                        ? 'features-bubble-customer'
                        : 'features-bubble-eva'
                    }`}>
                      {message.message}
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing Indicator */}
              {showTyping && (
                <div className="features-typing">
                  <div className="features-conv-avatar">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="features-typing-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;