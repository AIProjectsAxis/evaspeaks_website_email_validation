// src/components/sections/HeroSection.tsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, X } from 'lucide-react';
import VoiceWidget from '../voice/VoiceWidget';

const HeroSection: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);
  
  // New looping animation state
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const [typedFeature, setTypedFeature] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  
  // Static description that shows immediately - removes redundant "Eva" mention
  const staticDescription = 'The intelligent virtual receptionist that transforms your business communication.';
  
  // Features for the looping animation - concise capabilities without repetitive "Eva can"
  const features = [
    'updates your CRM automatically!',
    'accesses your knowledge base instantly!', 
    'qualifies leads in real time!',
    'sends timely confirmations!'
  ];

  // Load components immediately
  useEffect(() => {
    setComponentsLoaded(true);
  }, []);

  // Handle looping feature typing animation with smoother transitions
  useEffect(() => {
    if (!componentsLoaded) return;

    const currentFeature = features[currentFeatureIndex];
    const typingSpeed = 60; // Faster, more polished typing
    const deletingSpeed = 30; // Faster deleting
    const pauseDuration = 2000; // Slightly longer pause to appreciate the text
    
    let timeout: NodeJS.Timeout;
    
    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
    } else if (!isDeleting && typedFeature.length < currentFeature.length) {
      // Typing forward with slight randomization for natural feel
      const variance = Math.random() * 20 - 10; // ±10ms variance
      timeout = setTimeout(() => {
        setTypedFeature(currentFeature.substring(0, typedFeature.length + 1));
      }, typingSpeed + variance);
    } else if (!isDeleting && typedFeature.length === currentFeature.length) {
      // Finished typing, start pause
      timeout = setTimeout(() => {
        setIsPaused(true);
      }, 200);
    } else if (isDeleting && typedFeature.length > 0) {
      // Deleting with slight acceleration
      const acceleratedSpeed = deletingSpeed * (1 - typedFeature.length / currentFeature.length * 0.3);
      timeout = setTimeout(() => {
        setTypedFeature(typedFeature.substring(0, typedFeature.length - 1));
      }, acceleratedSpeed);
    } else if (isDeleting && typedFeature.length === 0) {
      // Finished deleting, move to next feature
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentFeatureIndex((prev) => (prev + 1) % features.length);
      }, 300);
    }
    
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [typedFeature, isDeleting, isPaused, currentFeatureIndex, componentsLoaded]);

  // Handle cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowVideoModal(false);
      }
    };

    if (showVideoModal) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [showVideoModal]);

  // Format the static description with highlighted text
  const formattedDescription = () => {
    const highlight = 'intelligent virtual receptionist';
    const highlightIndex = staticDescription.indexOf(highlight);
    
    if (highlightIndex === -1) {
      return staticDescription;
    }
    
    const beforeHighlight = staticDescription.substring(0, highlightIndex);
    const highlightText = staticDescription.substring(highlightIndex, highlightIndex + highlight.length);
    const afterHighlight = staticDescription.substring(highlightIndex + highlight.length);
    
    return (
      <>
        {beforeHighlight}
        <span className="gradient-text font-medium">
          {highlightText}
        </span>
        {afterHighlight}
      </>
    );
  };

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToFeatures();
    }
  };

  const openVideoModal = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };

  return (
    <>
      <section id="hero" className="hero-container" role="banner">
        {/* Background gradient */}
        <div className="hero-bg-gradient" aria-hidden="true"></div>
        
        <div className="hero-content text-center max-w-4xl mx-auto relative z-10">
          {/* Main logo/title with glow effect - more reasonable size */}
          <div className="relative mb-6 sm:mb-8">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extralight mb-6 tracking-wide opacity-0 animate-fadeIn bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">
              eva speaks
            </h1>
            <div className="hero-title-glow" aria-hidden="true"></div>
          </div>
          
          {/* Main description moved up - replaces tagline */}
          <div className="mb-6 sm:mb-8">
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 max-w-3xl mx-auto leading-relaxed">
              {formattedDescription()}
            </p>
            <div className="hero-dots-container" aria-hidden="true">
              <div className="hero-dot bg-cyan-400"></div>
              <div className="hero-dot bg-teal-400 delay-100"></div>
              <div className="hero-dot bg-cyan-400 delay-200"></div>
            </div>
          </div>
          
          {/* Enhanced typing animation with consistent gradient styling */}
          <div className={`mb-8 sm:mb-10 transition-all duration-700 ${componentsLoaded ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <div className="min-h-[3rem] flex items-center justify-center">
              <p className="text-lg sm:text-xl font-light" aria-live="polite">
                <span className="text-white font-medium">Eva </span>
                <span className="gradient-text font-medium min-w-0 inline-block">
                  {typedFeature}
                </span>
                {componentsLoaded && (
                  <span 
                    className={`${cursorVisible ? 'opacity-100' : 'opacity-0'} transition-opacity text-cyan-400 ml-1`}
                    aria-hidden="true"
                  >|</span>
                )}
              </p>
            </div>
          </div>
          
          {/* CTA buttons - show immediately with components */}
          <div className={`hero-cta-container transition-all duration-700 ${componentsLoaded ? 'hero-cta-visible' : 'hero-cta-hidden'}`}>
            <button 
              onClick={openVideoModal}
              className="btn-base btn-secondary btn-lg group overflow-hidden"
              aria-label="Watch Eva Speaks demo video"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></div>
              <div className="relative flex items-center">
                <span className="relative flex items-center justify-center w-5 h-5 mr-2">
                  <Play size={14} className="group-hover:scale-110 transition-transform relative z-10" aria-hidden="true" />
                  <div className="absolute inset-0 bg-cyan-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform" aria-hidden="true"></div>
                </span>
                <span>Watch Demo</span>
              </div>
            </button>
            
            {/* Voice Widget Button */}
            <VoiceWidget 
              trigger="button"
              buttonText="Talk to Eva"
              publicKey={import.meta.env.VITE_VAPI_PUBLIC_KEY}
              assistantId={import.meta.env.VITE_VAPI_ASSISTANT_ID}
            />
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div 
          className={`scroll-indicator ${componentsLoaded ? 'opacity-100' : 'opacity-0'}`}
          onClick={scrollToFeatures}
          role="button"
          tabIndex={0}
          aria-label="Scroll to explore features"
          onKeyDown={handleKeyDown}
        >
          <div className="scroll-indicator-content">
            <span className="text-xs sm:text-sm">Scroll to explore</span>
            <div className="scroll-mouse" aria-hidden="true">
              <div className="scroll-dot"></div>
            </div>
            <ChevronDown className="mt-1 animate-bounce" size={14} aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeVideoModal}
        >
          <div 
            className="relative w-full max-w-4xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl border-2 border-cyan-400/30"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            
            {/* YouTube iframe */}
            <div className="relative w-full h-full">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/1I-QzeOYSb0?autoplay=1&controls=1&rel=0&modestbranding=1"
                title="Eva Speaks Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;