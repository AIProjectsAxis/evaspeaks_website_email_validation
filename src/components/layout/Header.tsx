import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, LogIn, UserPlus, Sparkles } from 'lucide-react';
// @ts-ignore - toggleConfig.js doesn't have TypeScript declarations
import { toggleConfig } from '../../config/toggleConfig';

const navItems = [
  { name: 'Features', path: '/#features', ariaLabel: 'View Eva AI features', sectionName: 'features' },
  { name: 'Integrations', path: '/#integrations', ariaLabel: 'View available integrations', sectionName: 'integrations' },
  { name: 'Pricing', path: '/#pricing', ariaLabel: 'View pricing plans', sectionName: 'pricing' },
  { name: 'Case Studies', path: '/#case-studies', ariaLabel: 'Read customer success stories', sectionName: 'caseStudies' }
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [logoLoaded, setLogoLoaded] = useState(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (!isHomePage) return;

      const sections = navItems.map(item => item.path.replace('/#', ''));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveItem(section);
            break;
          } else {
            setActiveItem(null);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Handle mobile menu click outside - check both button and menu
      if (menuRef.current && !menuRef.current.contains(e.target as Node) &&
          mobileNavRef.current && !mobileNavRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleNavigation = (item: typeof navItems[0]) => {
    const sectionId = item.path.replace('/#', '');
    
    setIsMenuOpen(false);

    // Check if section is disabled
    const sectionConfig = toggleConfig.sections[item.sectionName];
    if (sectionConfig && !sectionConfig.enabled) {
      navigate(`/maintenance?section=${item.sectionName}&message=${encodeURIComponent(sectionConfig.message)}`);
      return;
    }

    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      navigate('/');
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const contentSelectors = [
        '.section-title',
        '.section-subtitle',
        'h1', 'h2', 'h3',
        '.section-content',
        '.hero-content',
        '.features-grid',
        '.pricing-grid',
        '.case-studies-grid',
        '.integrations-grid',
        '.faq-list',
        '.features-header',
        '.integrations-header',
        '.case-studies-header',
        '.pricing-header',
        '.container > *:first-child'
      ];
      
      let targetElement = element;
      
      for (const selector of contentSelectors) {
        const contentElement = element.querySelector(selector);
        if (contentElement) {
          targetElement = contentElement as HTMLElement;
          break;
        }
      }
      
      if (targetElement === element) {
        const textElements = element.querySelectorAll('h1, h2, h3, h4, h5, h6, p, div');
        for (const textEl of textElements) {
          if (textEl.textContent && textEl.textContent.trim().length > 0) {
            const rect = textEl.getBoundingClientRect();
            if (rect.height > 0) {
              targetElement = textEl as HTMLElement;
              break;
            }
          }
        }
      }
      
      const isMobile = window.innerWidth <= 768;
      const headerHeight = isScrolled ? 70 : 88;
      const bufferSpace = isMobile ? 10 : 20;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - bufferSpace;
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      
      setActiveItem(id);
    }
  };

  const toggleMobileMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  const handleDemoClick = () => {
    setIsMenuOpen(false);
    window.open('https://scheduler.zoom.us/eva-speaks/hello', '_blank', 'noopener,noreferrer');
  };

  const handleSignInClick = () => {
    setIsMenuOpen(false);
    navigate('/signin');
  };

  const handleSignUpClick = () => {
    setIsMenuOpen(false);
    navigate('/signup');
  };

  const handleLogoError = () => {
    setLogoLoaded(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl shadow-slate-950/20' 
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transition-opacity duration-500 ${
        isScrolled ? 'opacity-100' : 'opacity-0'
      }`} />
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="logo-container group relative"
            aria-label="Eva Speaks - Go to homepage"
          >
            <div className="relative flex items-center justify-center transition-all duration-300 group-hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" 
                   style={{ filter: 'blur(12px)' }} />
              
              {logoLoaded && (
                <img
                  src="/images/eva_logo.png"
                  alt="Eva Speaks Logo"
                  className="w-12 h-12 transition-all duration-300 group-hover:brightness-110 relative z-10"
                  onError={handleLogoError}
                  onLoad={() => setLogoLoaded(true)}
                  width="48"
                  height="48"
                  style={{ filter: 'none' }}
                />
              )}
              
              {!logoLoaded && (
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center relative z-10">
                  <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
              )}
              
              <div className="absolute inset-0 rounded-xl border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse -z-5" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center">
            <nav className="flex items-center" role="navigation" aria-label="Main navigation">
              <div className="flex items-center space-x-1 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-1 border border-slate-700/30">
                {navItems.map((item) => {
                  const id = item.path.replace('/#', '');
                  const isActive = isHomePage && activeItem === id;
                  const isHovered = hoveredItem === id;
                  
                  const sectionConfig = toggleConfig.sections[item.sectionName];
                  const isDisabled = sectionConfig && !sectionConfig.enabled;

                  return (
                    <button
                      key={item.name}
                      className={`relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 h-10 ${
                        isActive 
                          ? 'text-white bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 shadow-lg shadow-cyan-500/10' 
                          : isHovered
                          ? 'text-white bg-white/10'
                          : isDisabled
                          ? 'text-slate-500 opacity-60'
                          : 'text-slate-300 hover:text-white'
                      }`}
                      onMouseEnter={() => setHoveredItem(id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      onClick={() => handleNavigation(item)}
                      aria-label={item.ariaLabel}
                      aria-current={isActive ? 'page' : undefined}
                      title={isDisabled ? `${item.name} - Under Maintenance` : item.ariaLabel}
                    >
                      <span className="relative z-10">{item.name}</span>
                      
                      {isDisabled && (
                        <div className="absolute top-1 right-1 w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      )}
                      
                      {isActive && !isDisabled && (
                        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
                
                {/* Demo Call Button in Nav Container */}
                <button 
                  className="relative px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 text-slate-300 hover:text-white hover:bg-white/10 h-10"
                  aria-label="Book a demo with Eva Speaks"
                  onClick={handleDemoClick}
                >
                  <div className="relative flex items-center gap-2 z-10">
                    <Phone size={14} aria-hidden="true" />
                    <span>Book Demo</span>
                  </div>
                </button>
              </div>
            </nav>

            <div className="flex items-center ml-8 space-x-4">
              <button 
                className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 bg-slate-800/30 border border-slate-700/30 text-slate-300 hover:text-white hover:bg-slate-800/50 hover:border-slate-600/50 flex items-center gap-2 h-10"
                onClick={handleSignInClick}
                aria-label="Sign in to your account"
              >
                <LogIn size={16} className="text-cyan-400" aria-hidden="true" />
                <span>Sign In</span>
              </button>

              <button 
                className="btn-base btn-primary btn-md h-10"
                onClick={handleSignUpClick}
                aria-label="Start your free trial"
              >
                <UserPlus size={16} aria-hidden="true" />
                <span>Start for Free</span>
              </button>
            </div>
          </div>

          <div className="lg:hidden flex items-center space-x-3" ref={menuRef}>
            <button 
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                isMenuOpen 
                  ? 'bg-slate-800/60 text-white shadow-lg border border-slate-600/50' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/30 border border-slate-700/30'
              }`}
              onClick={toggleMobileMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              {isMenuOpen ? 
                <X size={18} aria-hidden="true" style={{ pointerEvents: 'none' }} /> : 
                <Menu size={18} aria-hidden="true" style={{ pointerEvents: 'none' }} />
              }
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div 
          ref={mobileNavRef}
          id="mobile-navigation"
          className="lg:hidden absolute top-full left-0 right-0 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 shadow-2xl z-50"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            background: 'rgba(2, 6, 23, 0.98)',
            backdropFilter: 'blur(24px) saturate(180%)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.2)'
          }}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2 mb-6">
              {navItems.map((item, index) => {
                const id = item.path.replace('/#', '');
                const isActive = isHomePage && activeItem === id;
                
                const sectionConfig = toggleConfig.sections[item.sectionName];
                const isDisabled = sectionConfig && !sectionConfig.enabled;

                return (
                  <button
                    key={item.name}
                    className={`flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 ${
                      isActive 
                        ? 'bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-white' 
                        : isDisabled
                        ? 'text-slate-500 opacity-60'
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/30'
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={() => handleNavigation(item)}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center gap-2">
                      {isDisabled && (
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                      )}
                      {isActive && !isDisabled && (
                        <div className="w-2 h-2 bg-cyan-400 rounded-full" aria-hidden="true" />
                      )}
                    </div>
                  </button>
                );
              })}
              
              {/* Demo Call in Mobile Nav */}
              <button 
                className="flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 text-slate-300 hover:text-white hover:bg-slate-800/30"
                style={{ animationDelay: `${navItems.length * 50}ms` }}
                onClick={handleDemoClick}
                aria-label="Book a demo with Eva Speaks"
              >
                <div className="flex items-center gap-3">
                  <Phone size={16} aria-hidden="true" />
                  <span className="font-medium">Book Demo</span>
                </div>
              </button>
            </nav>
            
            <div className="flex flex-col space-y-3">
              <button 
                className="flex items-center p-4 rounded-xl hover:bg-slate-800/50 transition-all duration-300 w-full text-left group border border-slate-700/30"
                onClick={handleSignInClick}
                aria-label="Sign in to your account"
              >
                <div className="p-2.5 bg-cyan-500/10 rounded-xl mr-3 group-hover:bg-cyan-500/20 transition-colors">
                  <LogIn size={16} className="text-cyan-400" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-white text-sm">Sign In</div>
                  <p className="text-xs text-slate-400 mt-0.5">Access your Eva dashboard</p>
                </div>
              </button>
              
              <button 
                className="btn-base btn-primary btn-md w-full"
                onClick={handleSignUpClick}
                aria-label="Start your free trial"
              >
                <UserPlus size={16} aria-hidden="true" />
                <span>Start for Free</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
