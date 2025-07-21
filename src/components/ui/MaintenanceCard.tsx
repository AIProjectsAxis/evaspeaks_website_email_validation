import React from 'react';
import { Wrench, Clock } from 'lucide-react';

interface MaintenanceCardProps {
  message: string;
  type?: 'section' | 'page';
}

const MaintenanceCard: React.FC<MaintenanceCardProps> = ({ message, type = 'section' }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full">
        <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
          {/* Icon */}
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
            {type === 'section' ? (
              <Wrench className="w-8 h-8 text-cyan-400" />
            ) : (
              <Clock className="w-8 h-8 text-cyan-400" />
            )}
          </div>

          {/* Title */}
          <h2 className="text-2xl font-light text-white mb-4">
            {type === 'section' ? 'Section Under Maintenance' : 'Page Coming Soon'}
          </h2>

          {/* Message */}
          <p className="text-slate-300 mb-6 leading-relaxed">
            {message}
          </p>

          {/* Status Indicator */}
          <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span>We're working on it</span>
          </div>

          {/* Back Button for Pages */}
          {type === 'page' && (
            <div className="mt-8">
              <button 
                onClick={() => window.history.back()}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-all duration-300 shadow-lg"
              >
                Go Back
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaintenanceCard;