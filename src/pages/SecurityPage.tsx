import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Shield, Lock, Server, Award, AlertTriangle, CheckCircle } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

const SecurityPageContent: React.FC = () => {
  return (
    <PageLayout
      title="Security & Privacy"
      description="Your business data is protected with enterprise-grade security and industry-standard compliance."
    >
      {/* Main Security Content */}
      <section className="py-12">
        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-12 h-12 text-cyan-400" />
            </div>
            <h2 className="text-3xl font-light text-white mb-4">Enterprise-Grade Security</h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              We protect your business communications with industry-leading security practices and comprehensive compliance standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Data Encryption</h3>
              <p className="text-slate-400 text-sm">All data encrypted in transit and at rest using industry-standard protocols</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Server className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Reliable Infrastructure</h3>
              <p className="text-slate-400 text-sm">Built on trusted cloud platforms with enterprise-grade security</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">Industry Standards</h3>
              <p className="text-slate-400 text-sm">Following industry best practices for data protection and security</p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-white text-center mb-8">How We Protect Your Data</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Secure Access</h4>
                  <p className="text-slate-400 text-sm">Role-based access controls ensure only authorized users can access your business data.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Data Privacy</h4>
                  <p className="text-slate-400 text-sm">We never share your data with third parties. Your business information stays private.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Secure Storage</h4>
                  <p className="text-slate-400 text-sm">Your data is stored on trusted cloud platforms with built-in security and encryption.</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-lg font-medium text-white mb-2">Secure Updates</h4>
                  <p className="text-slate-400 text-sm">We use the latest security practices and keep our systems updated with current standards.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-8">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-medium text-white mb-6 text-center">Security Approach</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-medium text-white mb-3">Trusted Partners</h4>
              <p className="text-slate-400 text-sm mb-3">
                We work with leading technology providers to ensure reliable and secure service.
              </p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Enterprise cloud infrastructure</li>
                <li>• Industry-standard encryption</li>
                <li>• Secure data transmission</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium text-white mb-3">Data Protection</h4>
              <p className="text-slate-400 text-sm mb-3">
                Your business information is protected with modern security practices.
              </p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Secure authentication</li>
                <li>• Encrypted communications</li>
                <li>• Privacy-focused design</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Business Control */}
      <section className="py-8">
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-medium text-white mb-4">You Control Your Data</h3>
            <p className="text-slate-300 mb-6">
              Your business data belongs to you. You can export, delete, or modify your information at any time.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="text-center">
                <p className="text-white font-medium">Data Export*</p>
                <p className="text-slate-400">Download your data anytime</p>
              </div>
              <div className="text-center">
                <p className="text-white font-medium">Data Deletion*</p>
                <p className="text-slate-400">Request complete data removal</p>
              </div>
              <div className="text-center">
                <p className="text-white font-medium">Access Control</p>
                <p className="text-slate-400">Manage who can access what</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-600/30">
              <p className="text-slate-500 text-xs text-center">
                * Subject to applicable data retention laws and policies outlined in our Privacy Policy and Terms of Service
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Contact */}
      <section className="py-8">
        <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 text-center max-w-2xl mx-auto">
          <AlertTriangle className="w-8 h-8 text-orange-400 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-white mb-2">Security Questions?</h3>
          <p className="text-slate-400 text-sm mb-4">
            Have security questions or want to report a concern? We're here to help.
          </p>
          <a 
            href="mailto:support@evaspeaks.ai" 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Contact Security Team
          </a>
        </div>
      </section>
    </PageLayout>
  );
};

const SecurityPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="security">
      <SecurityPageContent />
    </ToggleWrapper>
  );
};

export default SecurityPage;