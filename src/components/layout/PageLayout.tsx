import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '..';
import { ArrowLeft } from 'lucide-react';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  backLink?: string;
  backLinkText?: string;
  backgroundClass?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ 
  title, 
  description, 
  children, 
  backLink = "/", 
  backLinkText = "Back to Home",
  backgroundClass = "bg-slate-900"
}) => {
  return (
    <div className={`page-layout ${backgroundClass}`}>
      <Header />
      
      {/* Page Header */}
      <div className="page-header">
        <div className="page-header-content">
          {backLink && (
            <Link 
              to={backLink} 
              className="page-back-link"
            >
              <ArrowLeft size={20} />
              {backLinkText}
            </Link>
          )}
          <h1 className="page-title">
            {title}
          </h1>
          {description && (
            <p className="page-description">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="page-content">
        {children}
      </div>

      <Footer />
    </div>
  );
};

export default PageLayout;