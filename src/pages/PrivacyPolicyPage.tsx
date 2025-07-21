import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Calendar, Mail, ChevronUp } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

const PrivacyPolicyPageContent: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout
      title="Privacy Policy"
      description="Learn how we collect, use, and protect your information with our AI-powered communication services."
    >
      <div className="max-w-4xl mx-auto">
        {/* Last Updated Notice */}
        <div className="flex items-center gap-2 mb-8 text-slate-400">
          <Calendar className="w-4 h-4" />
          <span>Last Updated: Jul 15, 2025</span>
        </div>
        
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Introduction</h2>
          <p className="text-slate-300 mb-4">
            Eva Speaks. and its affiliates ("Company," "we," "us," or "our") provide AI-enabled telephone answering, call routing, transcription, and related communication services (the "Services"). This Privacy Policy explains how we collect, use, disclose, and protect personal information when you or your customers:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
            <li>Visit or interact with www.evaspeaks.ai and related subdomains (the "Site");</li>
            <li>Create an account or subscribe to our Services ("Customer"); or</li>
            <li>Use the Services on behalf of a Customer ("End User").</li>
          </ul>
          <p className="text-slate-300 mb-4">
            By accessing or using the Site or Services, you acknowledge this Privacy Policy and consent to our collection, use, and disclosure of your information as described herein. We strive to comply with all applicable U.S. federal and state privacy laws and regulations.
          </p>
          <p className="text-slate-300">
            <span className="text-white font-medium">Customer Responsibility:</span> If you use our Services to interact with your customers, clients, or patients, you are responsible for obtaining any necessary consents from them and providing appropriate privacy notices about how their information will be collected and used through our AI receptionist service.
          </p>
          <p className="text-slate-300 mt-4">
            If you do not agree with this Privacy Policy, please do not use the Services. We may update this Policy periodically to reflect changes in our Services, legal requirements, or industry standards. Continued use of the Services after updates indicates acceptance.
          </p>
        </section>

        {/* Key Definitions */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Key Definitions</h2>
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="Key definitions and terms">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 text-white font-medium w-1/4 sm:w-auto">Term</th>
                    <th className="text-left py-2 text-white font-medium">Definition</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-sm sm:text-base">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Aggregated Data</td>
                    <td className="py-3">Data combined and summarized from multiple individual records such that no specific individual can be identified. It reflects overall trends or statistics without including personal identifiers or allowing reasonable re-identification.</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Anonymized Data</td>
                    <td className="py-3">Data processed to irreversibly remove or alter all personal identifiers so that the individual cannot be identified by any means reasonably likely to be used, ensuring no link back to the individual.</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">AI Communication Services</td>
                    <td className="py-3">Conversational AI, voice, and messaging functions, including third-party integrations with large language models (LLMs), text-to-speech (TTS), and speech-to-text (STT) technologies.</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Personal Information (PI)</td>
                    <td className="py-3">Any information that identifies, relates to, describes, or can reasonably be associated with an individual or household.</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Platform</td>
                    <td className="py-3">Our web dashboard, mobile applications, APIs, and downloadable software provided by us.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        
        {/* Information We Collect */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Information We Collect</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Information You Provide</h3>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full" role="table" aria-label="Information you provide to us">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-2 text-white font-medium w-1/4 sm:w-auto">Category</th>
                      <th className="text-left py-2 text-white font-medium hidden sm:table-cell">Examples</th>
                      <th className="text-left py-2 text-white font-medium hidden sm:table-cell">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300 text-sm sm:text-base">
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Account Data</td>
                      <td className="py-3 hidden sm:table-cell">Name, business name, email, phone, billing address, login credentials</td>
                      <td className="py-3 hidden sm:table-cell">Account setup, authentication, and support</td>
                    </tr>
                    {/* Mobile-friendly stacked layout */}
                    <tr className="sm:hidden border-b border-slate-700/50">
                      <td colSpan={3} className="py-2">
                        <div className="space-y-2">
                          <div><span className="font-medium text-white">Examples:</span> Name, business name, email, phone, billing address, login credentials</div>
                          <div><span className="font-medium text-white">Purpose:</span> Account setup, authentication, and support</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Business Configuration</td>
                      <td className="py-3 hidden sm:table-cell">Call-flow scripts, routing rules, office hours, contact lists, third-party integration tokens</td>
                      <td className="py-3 hidden sm:table-cell">Service configuration and customization</td>
                    </tr>
                    <tr className="sm:hidden border-b border-slate-700/50">
                      <td colSpan={3} className="py-2">
                        <div className="space-y-2">
                          <div><span className="font-medium text-white">Examples:</span> Call-flow scripts, routing rules, office hours, contact lists, third-party integration tokens</div>
                          <div><span className="font-medium text-white">Purpose:</span> Service configuration and customization</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Payment Data</td>
                      <td className="py-3 hidden sm:table-cell">Tokenized card information and billing contact processed through PCI-compliant processors (we do not store full card numbers)</td>
                      <td className="py-3 hidden sm:table-cell">Subscription billing and payment processing</td>
                    </tr>
                    <tr className="sm:hidden border-b border-slate-700/50">
                      <td colSpan={3} className="py-2">
                        <div className="space-y-2">
                          <div><span className="font-medium text-white">Examples:</span> Tokenized card information and billing contact processed through PCI-compliant processors (we do not store full card numbers)</div>
                          <div><span className="font-medium text-white">Purpose:</span> Subscription billing and payment processing</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Support & Feedback</td>
                      <td className="py-3 hidden sm:table-cell">Support tickets, surveys, and attachments</td>
                      <td className="py-3 hidden sm:table-cell">Troubleshooting and product improvements</td>
                    </tr>
                    <tr className="sm:hidden border-b border-slate-700/50">
                      <td colSpan={3} className="py-2">
                        <div className="space-y-2">
                          <div><span className="font-medium text-white">Examples:</span> Support tickets, surveys, and attachments</div>
                          <div><span className="font-medium text-white">Purpose:</span> Troubleshooting and product improvements</div>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="py-3 font-medium text-white">Third-Party Authentication Data</td>
                      <td className="py-3 hidden sm:table-cell">Basic profile data (e.g., name, email) from services like Google used for authentication</td>
                      <td className="py-3 hidden sm:table-cell">Account management and authentication</td>
                    </tr>
                    <tr className="sm:hidden">
                      <td colSpan={3} className="py-2">
                        <div className="space-y-2">
                          <div><span className="font-medium text-white">Examples:</span> Basic profile data (e.g., name, email) from services like Google used for authentication</div>
                          <div><span className="font-medium text-white">Purpose:</span> Account management and authentication</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Information Collected Automatically</h3>
            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
              <div className="overflow-x-auto">
                <table className="w-full" role="table" aria-label="Information collected automatically">
                  <thead>
                    <tr className="border-b border-slate-600">
                      <th className="text-left py-2 text-white font-medium w-1/3 sm:w-auto">Category</th>
                      <th className="text-left py-2 text-white font-medium">Examples</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-300 text-sm sm:text-base">
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Call & Message Metadata</td>
                      <td className="py-3">Caller ID, call duration, audio recordings, transcriptions, routing outcomes</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Usage Analytics</td>
                      <td className="py-3">Feature usage data, clickstreams, session durations, crash reports</td>
                    </tr>
                    <tr className="border-b border-slate-700/50">
                      <td className="py-3 font-medium text-white">Device & Technical</td>
                      <td className="py-3">IP address, browser type, operating system, device identifiers</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium text-white">Cookies & Similar Technology</td>
                      <td className="py-3">Session and preference cookies, web beacons, pixels</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-slate-300 mt-3">
              You may disable non-essential cookies via our cookie banner or browser settings. Essential cookies required for security and functionality remain active.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Third-Party Integrations</h3>
            <p className="text-slate-300">
              When you authenticate or connect through third-party services (e.g., Google Sign-In), we receive only the information you authorize and use it solely to provide requested functionality and manage your account.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">Voice Data</h3>
            <p className="text-slate-300">
              Our Services capture voice conversations for the purpose of providing AI-enabled call handling and transcription services. Voice recordings are processed to provide real-time AI responses and may be retained for service delivery, quality assurance, and product improvement purposes in accordance with this Privacy Policy.
            </p>
          </div>
        </section>
        
        {/* How We Use Personal Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">How We Use Personal Information</h2>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="How we use personal information">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 text-white font-medium w-1/3 sm:w-auto">Purpose</th>
                    <th className="text-left py-2 text-white font-medium">Description</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-sm sm:text-base">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Service Delivery</td>
                    <td className="py-3">Answering calls, routing messages, transcription, notifications</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Account & Billing</td>
                    <td className="py-3">Account management, payment processing, fraud prevention</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">AI Model Operation</td>
                    <td className="py-3">Real-time AI processing with pseudonymized or truncated data where feasible</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Product Improvement</td>
                    <td className="py-3">Improving AI models and features using aggregated or anonymized data</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Marketing Communications (Opt-In)</td>
                    <td className="py-3">Sending newsletters, promotions, product updates</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Security & Compliance</td>
                    <td className="py-3">Detecting security incidents, enforcing Terms of Service, complying with legal obligations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-xl font-medium text-white mb-3">Opt-Out of Model Training</h3>
            <p className="text-slate-300">
              Customers may opt out of manual quality assurance reviews and inclusion of their data in AI model training by contacting <a href="mailto:privacy@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">privacy@evaspeaks.ai</a>. Verified requests are processed promptly.
            </p>
          </div>
        </section>

        {/* Marketing Communications */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Marketing Communications (With Consent)</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>We send promotional emails only with your explicit consent.</li>
            <li>Each marketing email includes an unsubscribe option. You may also update preferences in your account or contact <a href="mailto:privacy@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">privacy@evaspeaks.ai</a>. Critical service notices will still be delivered.</li>
          </ul>
        </section>
        
        {/* Sharing & Disclosure */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Sharing & Disclosure</h2>
          
          <p className="text-slate-300 mb-4">
            We do not sell Personal Information or share it for cross-context behavioral advertising without your consent. We share Personal Information only as necessary and consistent with this Privacy Policy:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><span className="text-white font-medium">Service Providers:</span> We engage trusted third-party service providers (e.g., cloud hosting, telephony carriers, payment processors, analytics, AI providers) who are contractually obligated to protect your data and process it only on our instructions.</li>
            <li><span className="text-white font-medium">Integrated Platforms:</span> When you link third-party applications or platforms, we share only the data necessary to enable requested functionality and only as directed by you.</li>
            <li><span className="text-white font-medium">Legal and Safety Reasons:</span> We may disclose Personal Information to comply with lawful requests, enforce Terms of Service, protect rights and safety, or prevent fraud or security breaches.</li>
            <li><span className="text-white font-medium">Business Transfers:</span> In mergers, acquisitions, or sales, your Personal Information may be transferred as part of the transaction. We will provide advance notice (where feasible) if your PI will become subject to materially different privacy policies.</li>
          </ul>
        </section>

        {/* Data Storage, Security & Transfers */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Data Storage, Security & Transfers</h2>
          <p className="text-slate-300 mb-4">
            Your data is primarily stored and processed in United States data centers. We may use infrastructure in other locations solely to optimize performance and availability. We implement industry-standard security measures and regularly review and improve them. However, no system can guarantee absolute security.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Data Retention</h2>
          
          <p className="text-slate-300 mb-4">
            We retain Personal Information only as long as necessary to provide Services, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods vary by data type:
          </p>

          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-4">
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="Data retention periods">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 text-white font-medium w-1/4 sm:w-auto">Data Category</th>
                    <th className="text-left py-2 text-white font-medium hidden sm:table-cell">Retention Period</th>
                    <th className="text-left py-2 text-white font-medium hidden sm:table-cell">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-sm sm:text-base">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Account & Billing</td>
                    <td className="py-3 hidden sm:table-cell">Duration of account plus applicable legal retention periods</td>
                    <td className="py-3 hidden sm:table-cell">Legal compliance, tax, and audit purposes</td>
                  </tr>
                  <tr className="sm:hidden border-b border-slate-700/50">
                    <td colSpan={3} className="py-2">
                      <div className="space-y-2">
                        <div><span className="font-medium text-white">Retention:</span> Duration of account plus applicable legal retention periods</div>
                        <div><span className="font-medium text-white">Purpose:</span> Legal compliance, tax, and audit purposes</div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Call Recordings & Transcripts</td>
                    <td className="py-3 hidden sm:table-cell">As needed for service delivery and quality assurance</td>
                    <td className="py-3 hidden sm:table-cell">Service delivery and improvement</td>
                  </tr>
                  <tr className="sm:hidden border-b border-slate-700/50">
                    <td colSpan={3} className="py-2">
                      <div className="space-y-2">
                        <div><span className="font-medium text-white">Retention:</span> As needed for service delivery and quality assurance</div>
                        <div><span className="font-medium text-white">Purpose:</span> Service delivery and improvement</div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Logs & Analytics</td>
                    <td className="py-3 hidden sm:table-cell">As needed for operational purposes, then anonymized or deleted</td>
                    <td className="py-3 hidden sm:table-cell">Performance monitoring and troubleshooting</td>
                  </tr>
                  <tr className="sm:hidden border-b border-slate-700/50">
                    <td colSpan={3} className="py-2">
                      <div className="space-y-2">
                        <div><span className="font-medium text-white">Retention:</span> As needed for operational purposes, then anonymized or deleted</div>
                        <div><span className="font-medium text-white">Purpose:</span> Performance monitoring and troubleshooting</div>
                      </div>
                    </td>
                  </tr>
                  
                  <tr>
                    <td className="py-3 font-medium text-white">Backup Archives</td>
                    <td className="py-3 hidden sm:table-cell">As needed for disaster recovery</td>
                    <td className="py-3 hidden sm:table-cell">Data availability and resilience</td>
                  </tr>
                  <tr className="sm:hidden">
                    <td colSpan={3} className="py-2">
                      <div className="space-y-2">
                        <div><span className="font-medium text-white">Retention:</span> As needed for disaster recovery</div>
                        <div><span className="font-medium text-white">Purpose:</span> Data availability and resilience</div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-slate-300">
            Upon account closure or verified deletion requests, we delete or anonymize your Personal Information within a reasonable timeframe, except where legal obligations require longer retention.
          </p>
        </section>
        
        {/* Your Choices & Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Your Choices & Rights</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">State Privacy Rights</h3>
            <p className="text-slate-300 mb-3">
              Residents of applicable states (e.g., California, Colorado, Connecticut, Utah, Virginia, Texas, Tennessee, Oregon, Montana) have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Access categories and specific pieces of PI we hold.</li>
              <li>Request deletion of PI, subject to exceptions.</li>
              <li>Correct inaccurate PI.</li>
              <li>Port PI in a usable format.</li>
              <li>Opt-out of the sale or sharing of PI for behavioral advertising and profiling.</li>
              <li>Be protected from discrimination for exercising their rights.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Exercising Your Rights</h3>
            <p className="text-slate-300">
              Submit requests through our privacy portal or at <a href="mailto:privacy@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">privacy@evaspeaks.ai</a>. We verify identity and respond within 45 days, with a possible 45-day extension if necessary.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">Opt-Out of Sale/Sharing</h3>
            <p className="text-slate-300">
              We do not sell PI in the conventional sense. Should cross-context behavioral advertising be introduced, you may opt out by sending an email to <a href="mailto:privacy@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">privacy@evaspeaks.ai</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">Cookie Controls</h3>
            <p className="text-slate-300">
              You can disable non-essential cookies via your browser settings. We respect user preferences regarding data collection where technically feasible.
            </p>
          </div>
        </section>

        {/* Children's Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Children's Privacy</h2>
          <p className="text-slate-300">
            Our Services are intended for users aged 18 and older. We do not knowingly collect Personal Information from children under 18. If you believe we have inadvertently collected such information, please contact <a href="mailto:privacy@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">privacy@evaspeaks.ai</a>, and we will promptly delete it consistent with applicable law.
          </p>
        </section>

        {/* Policy Updates */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Policy Updates</h2>
          <p className="text-slate-300 mb-3">
            We may update this Privacy Policy as our Services or legal requirements evolve.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li><span className="text-white font-medium">Material Changes:</span> We notify account administrators and post a notice on our Site at least 30 days before changes take effect, where feasible.</li>
            <li><span className="text-white font-medium">Minor Updates:</span> Reflected by updating the "Last Updated" date.</li>
          </ul>
          <p className="text-slate-300 mt-3">
            Continued use after changes indicates acceptance of the revised Policy.
          </p>
        </section>
        
        {/* Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">Contact Information</h2>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="Contact information">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 text-white font-medium w-1/3 sm:w-auto">Role</th>
                    <th className="text-left py-2 text-white font-medium">Contact</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-sm sm:text-base">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Privacy Officer</td>
                    <td className="py-3">
                      <a href="mailto:privacy@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">privacy@evaspeaks.ai</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Mailing Address</td>
                    <td className="py-3">
                      Eva Speaks<br />
                      22693 Hesperian Blvd #205<br />
                      Hayward CA 94541
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-slate-300 mt-4">
            This Privacy Policy supersedes all prior versions and is effective as of the date indicated above. We remain committed to safeguarding your privacy and updating our practices as laws and technology evolve.
          </p>
        </section>

        {/* Back to Top Button */}
        <div className="text-center mt-12">
          <button 
            onClick={scrollToTop}
            className="btn-secondary inline-flex items-center gap-2 hover:transform hover:scale-105 transition-all duration-200"
            aria-label="Scroll to top of page"
          >
            <ChevronUp className="w-5 h-5" />
            Back to Top
          </button>
        </div>
      </div>
    </PageLayout>
  );
};

const PrivacyPolicyPage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="privacy">
      <PrivacyPolicyPageContent />
    </ToggleWrapper>
  );
};

export default PrivacyPolicyPage;