import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useSearchParams } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MaintenancePage from './pages/MaintenancePage';
import './styles/index.css';

// Lazy load pages for better performance
const CaseStudiesPage = lazy(() => import('./pages/CaseStudiesPage'));
const IntegrationsPage = lazy(() => import('./pages/IntegrationsPage'));
const TeamPage = lazy(() => import('./pages/TeamPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const PressPage = lazy(() => import('./pages/PressPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsOfServicePage = lazy(() => import('./pages/TermsOfServicePage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen bg-slate-950 flex items-center justify-center" role="status" aria-label="Loading page">
    <div className="flex flex-col items-center gap-4">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
      <p className="text-slate-400 text-sm">Loading...</p>
    </div>
  </div>
);

// Simple component to scroll to top on route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

// Simple title configuration - add new pages/sections here
const PAGE_TITLES: { [key: string]: string } = {
  '/': 'Eva Speaks - Next-Gen AI Communication Platform',
  '/pricing': 'Pricing Plans | Eva Speaks',
  '/case-studies': 'Customer Success Stories | Eva Speaks',
  '/integrations': 'Integrations | Eva Speaks',
  '/team': 'Our Team | Eva Speaks',
  '/careers': 'Careers | Eva Speaks',
  '/press': 'Press & Media | Eva Speaks',
  '/security': 'Security | Eva Speaks',
  '/privacy': 'Privacy Policy | Eva Speaks',
  '/terms': 'Terms of Service | Eva Speaks',
  '#features': 'Features | Eva Speaks',
  '#integrations': 'Integrations | Eva Speaks',
  '#pricing': 'Pricing | Eva Speaks',
  '#case-studies': 'Case Studies | Eva Speaks',
  '#faq': 'FAQ | Eva Speaks'
};

// Title Manager Component
const TitleManager = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const isHomePage = location.pathname === '/';

  // Same scroll detection logic as your Header component
  React.useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) return;

      const sections = ['features', 'integrations', 'pricing', 'case-studies', 'faq'];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            return;
          }
        }
      }
      // If no section is in view, clear active section
      setActiveSection(null);
    };

    // Check on mount and on scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  React.useEffect(() => {
    let title = 'Eva Speaks - AI Communication Platform'; // default
    
    if (location.pathname === '/maintenance') {
      const section = searchParams.get('section') || 'Section';
      title = `${section} Under Maintenance | Eva Speaks`;
    } else if (location.pathname === '/' && activeSection) {
      // Use active section from scroll detection
      title = PAGE_TITLES[`#${activeSection}`] || title;
    } else {
      // Use page path
      title = PAGE_TITLES[location.pathname] || title;
    }
    
    document.title = title;
  }, [location.pathname, activeSection, searchParams]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <TitleManager />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/maintenance" element={<MaintenancePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
          <Route path="/integrations/:integrationId" element={<IntegrationsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/press" element={<PressPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          {/* Fallback route for any removed pages */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;