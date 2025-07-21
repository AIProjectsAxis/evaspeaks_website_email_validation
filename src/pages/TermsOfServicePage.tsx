import React from 'react';
import PageLayout from '../components/layout/PageLayout';
import { Calendar, ChevronUp } from 'lucide-react';
import ToggleWrapper from '../components/ui/ToggleWrapper';

const TermsOfServicePageContent: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <PageLayout
      title="Terms of Service"
      description="Please read these terms carefully before using our AI-powered receptionist services."
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
            This website at www.evaspeaks.ai (the "Site") and all content contained herein are owned by Eva Speaks. ("Company", "us", "our", and "we") and protected by applicable copyright laws. Specific features or services may be governed by supplemental terms, policies, or guidelines that will be made available in connection with such features. Any supplemental terms are incorporated into and form part of these Terms of Service.
          </p>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-white mb-3">Key Definitions</h3>
            <p className="text-slate-300 mb-3">For clarity throughout this agreement:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li><span className="text-white font-medium">"Company", "us", "our", and "we"</span> refer to Eva Speaks.</li>
              <li><span className="text-white font-medium">"You", "your", and "user"</span> refer to the individual person or business entity accessing or using our Site or Services</li>
              <li><span className="text-white font-medium">"Services"</span> means our AI-powered receptionist platform, website, software applications, APIs, and all related features and functionalities</li>
              <li><span className="text-white font-medium">"Account"</span> means your registered user account that provides access to our Services</li>
              <li><span className="text-white font-medium">"User Content"</span> means all business information, data, content, and materials that you provide to us or upload to our platform</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-medium text-white mb-3">Important Notice</h3>
            <p className="text-slate-300 mb-4">
              SECTION 13 OF THESE TERMS CONTAINS MANDATORY ARBITRATION PROVISIONS AND CLASS ACTION WAIVER REQUIREMENTS THAT SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS. THESE PROVISIONS REQUIRE THAT DISPUTES BE RESOLVED THROUGH INDIVIDUAL ARBITRATION RATHER THAN COURT PROCEEDINGS OR CLASS ACTIONS. PLEASE REVIEW SECTION 13 THOROUGHLY.
            </p>
            <p className="text-slate-300">
              BY CONTINUING TO USE OUR SERVICES, YOU AGREE THAT: (1) ANY LEGAL DISPUTES WILL BE RESOLVED ON AN INDIVIDUAL BASIS THROUGH BINDING ARBITRATION, NOT THROUGH COURT LITIGATION OR CLASS ACTION PROCEEDINGS; AND (2) YOU WAIVE YOUR RIGHTS TO PARTICIPATE IN CLASS ACTION LAWSUITS OR JURY TRIALS. YOU HAVE 30 DAYS FROM FIRST ACCEPTING THESE TERMS TO OPT OUT OF THE ARBITRATION AGREEMENT BY FOLLOWING THE PROCEDURES OUTLINED IN SECTION 13.
            </p>
          </div>
          
          <p className="text-slate-300">
            By creating an account, accessing our website, or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. You confirm that you possess the legal authority to enter into this agreement, whether on your own behalf or as an authorized representative of an organization. Our services are intended for individuals who are at least 18 years of age. If you do not accept these terms in their entirety, please do not access and/or use our services.
          </p>
        </section>

        {/* 1. Accounts */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">1. Accounts</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">1.1 Account Creation</h3>
            <p className="text-slate-300 mb-4">
              In order to use certain features of our AI receptionist Services, you must register for an account ("Account") and provide certain information about yourself as prompted by the account registration form during our guided onboarding process. You represent and warrant that: (a) all required registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information; and (c) if you're creating an account on behalf of a business entity, you have the authority to bind that organization to these terms.
            </p>
            <p className="text-slate-300">
              You may delete your Account at any time, for any reason, by following the instructions on the Site or contacting our support team. Company may suspend or terminate your Account in accordance with Section 8.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">1.2 Account Responsibilities</h3>
            <p className="text-slate-300">
              You are responsible for maintaining the confidentiality of your Account login information and are fully responsible for all activities that occur under your Account. You agree to immediately notify Company of any unauthorized use, or suspected unauthorized use of your Account or any other breach of security. Company cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">1.3 Eligible Businesses</h3>
            <p className="text-slate-300 mb-4">
              Our platform is designed to serve legitimate businesses operating in compliance with applicable laws. To ensure regulatory compliance and maintain service quality, we reserve the right to decline service to businesses that do not meet our operational standards or legal requirements.
            </p>
            <p className="text-slate-300 mb-4">
              We evaluate each business application individually and may decline to provide services to businesses that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Operate in violation of applicable federal laws or regulations</li>
              <li>Engage in activities that are prohibited in the primary jurisdiction where our services are delivered</li>
              <li>Operate in industries that conflict with our service capabilities, third-party provider requirements, or regulatory obligations</li>
              <li>Engage in deceptive, fraudulent, or harmful business practices</li>
              <li>Present compliance risks that could impact our ability to provide services lawfully</li>
            </ul>
          </div>
        </section>

        {/* 2. Access to the Site and Services */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">2. Access to the Site and Services</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">2.1 License</h3>
            <p className="text-slate-300">
              Subject to these Terms, Company grants you a non-transferable, non-exclusive, revocable, limited license to use and access the Site and Services solely for your own business use in accordance with these Terms.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">2.2 Our Services and Platform</h3>
            <p className="text-slate-300 mb-4">
              Our platform offers businesses an intelligent virtual receptionist powered by advanced AI technology. The service handles inbound telephone calls, schedules appointments, manages customer inquiries, and integrates with your existing business systems like CRMs and calendars. We currently focus on inbound call handling within the United States and support multiple languages to serve diverse customer bases.
            </p>
            <p className="text-slate-300">
              You can access our services through our website and platform interface, where you can configure your AI assistant, upload business information, manage integrations, and access analytics and reporting features.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">2.3 Service Evolution and Updates</h3>
            <p className="text-slate-300">
              We regularly update our platform with new features, improvements, and optimizations. While we strive to enhance your experience, we may occasionally need to modify or discontinue certain features for technical, business, or regulatory reasons. When significant changes occur that might impact your usage, we'll provide reasonable advance notice through your account (in-platform notifications) or email communications.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">2.4 Certain Restrictions</h3>
            <p className="text-slate-300 mb-4">
              The rights granted to you in these Terms are subject to the following restrictions:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>You shall not license, sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site or Services, whether in whole or in part, or any content displayed on the Site</li>
              <li>You shall not modify, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site or Services</li>
              <li>You shall not access the Site or Services in order to build a similar or competitive website, product, or service</li>
              <li>Except as expressly stated herein, no part of the Site or Services may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">2.5 Modification</h3>
            <p className="text-slate-300">
              Company reserves the right, at any time, to modify, suspend, or discontinue the Site or Services (in whole or in part) with or without notice to you. You agree that Company will not be liable to you or to any third party for any modification, suspension, or discontinuation of the Site or Services or any part thereof.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">2.6 Service Level and Availability</h3>
            <p className="text-slate-300">
              We work diligently to maintain high service availability, though we cannot guarantee uninterrupted operation. Like all software-as-a-service platforms, our systems may experience occasional interruptions due to scheduled maintenance, software updates, third-party service failures, or other technical challenges. We do not assume responsibility for any service interruptions, regardless of their cause or duration.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">2.7 Support and Maintenance</h3>
            <p className="text-slate-300">
              We provide customer support through email, our in-platform messaging system, or any other appropriate method during business hours. Response times and availability vary based on your subscription plan and the nature of your inquiry. You acknowledge and agree that Company will have no obligation to provide support or maintenance beyond what's specified in your subscription plan.
            </p>
          </div>
        </section>

        {/* 3. Subscription Plans and Billing */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">3. Subscription Plans and Billing</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">3.1 Plan Structure and Pricing</h3>
            <p className="text-slate-300">
              We offer flexible subscription plans with monthly and annual billing options, with current pricing posted on our website. We reserve the right to modify pricing with 30 days' advance notice to existing subscribers. Price changes will take effect on your next renewal cycle, giving you the opportunity to cancel if you don't agree to the increase.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">3.2 Payment Terms</h3>
            <p className="text-slate-300 mb-4">
              Subscription fees are charged in advance based on your selected billing cycle. You must provide complete and accurate billing information, including a valid payment method, and authorize us to charge that method for all applicable fees.
            </p>
            <p className="text-slate-300">
              If a payment fails, we'll notify you and provide a reasonable opportunity to update your payment information before any service interruption occurs. You remain responsible for all charges incurred before any account termination or service suspension.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">3.3 Refunds and Cancellation</h3>
            <p className="text-slate-300">
              Payments made for our services are non-refundable, except where required by applicable law or as otherwise stated in these terms. You may cancel your subscription at any time, and cancellation will be effective at the end of your current billing period. No prorated refunds will be provided for partial billing periods.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">3.4 Taxes and Currency</h3>
            <p className="text-slate-300">
              All fees are stated in US Dollars and exclusive of applicable taxes, which vary by location and are your responsibility. You are responsible for determining and paying any applicable taxes, duties, or other governmental charges related to your use of our Services.
            </p>
          </div>
        </section>

        {/* 4. Ownership */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">4. Ownership</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">4.1 Our Technology and Brand Rights</h3>
            <p className="text-slate-300">
              Excluding any User Content that you may provide, you acknowledge that all the intellectual property rights, including copyrights, patents, trade marks, and trade secrets, in the Site and Services and their content are owned by Company or Company's suppliers. Neither these Terms (nor your access to the Site or Services) transfers to you or any third party any rights, title or interest in or to such intellectual property rights, except for the limited access rights expressly set forth in Section 2.1.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">4.2 Your Business Content and Data</h3>
            <p className="text-slate-300 mb-4">
              You retain full ownership of your business information, customer data, and any content you upload to our platform ("User Content"). This includes business details, knowledge base documents, call scripts, customer information, and any other materials you provide to help our AI serve your customers effectively.
            </p>
            <p className="text-slate-300">
              By using our services, you grant us a limited, non-exclusive, royalty-free license to use, process, and store your User Content as necessary to operate, maintain, and improve our services. We may also use your data in aggregated or anonymized form for analytics, service improvement, and AI training purposes, as further described in our <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">4.3 Feedback</h3>
            <p className="text-slate-300">
              If you provide Company with any feedback or suggestions regarding the Site or Services ("Feedback"), you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it deems appropriate.
            </p>
          </div>
        </section>

        {/* 5. User Content */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">5. User Content</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">5.1 User Content Definition</h3>
            <p className="text-slate-300">
              "User Content" means any and all information and content that a user submits to, or uses with, the Site or Services (e.g., business information, data, content, documents, call scripts, knowledge base materials). You are solely responsible for your User Content and assume all risks associated with its use.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">5.2 License</h3>
            <p className="text-slate-300">
              You hereby grant (and you represent and warrant that you have the right to grant) to Company an irrevocable, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use and exploit your User Content, solely for the purposes of providing our AI receptionist Services to you.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">5.3 Acceptable Use Policy</h3>
            <p className="text-slate-300 mb-4">
              You agree to use our website and platform for legitimate business purposes related to evaluating and using our AI receptionist Services. You agree not to use the Site or Services to collect, upload, transmit, display, or distribute any User Content that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300 mb-4">
              <li>Violates any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right</li>
              <li>Is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another's privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm</li>
              <li>Is harmful to minors in any way</li>
              <li>Is in violation of any law, regulation, or obligations or restrictions imposed by any third party</li>
            </ul>
            <p className="text-slate-300 mb-4">
              In addition, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-300">
              <li>Use our platform for any illegal purposes, harassment, discrimination, or fraudulent activities</li>
              <li>Attempt to reverse engineer our software or interfere with our Services</li>
              <li>Use our platform to build competing services without permission</li>
              <li>Make unsolicited marketing calls without proper consent or use our Services for illegal telemarketing</li>
              <li>Upload, transmit, or distribute any malicious software, viruses, or harmful code</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">5.4 Enforcement</h3>
            <p className="text-slate-300">
              We reserve the right (but have no obligation) to review, refuse and/or remove any User Content in our sole discretion, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms.
            </p>
          </div>
        </section>

        {/* 6. Understanding AI Technology and Data Processing */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">6. Understanding AI Technology and Data Processing</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">6.1 How Our AI Technology Works</h3>
            <p className="text-slate-300">
              Our platform uses sophisticated artificial intelligence and machine learning technologies provided by leading third-party providers. The AI generates responses based on patterns learned from large datasets and your specific business information. While remarkably capable, AI-generated responses are probabilistic in nature, meaning they may not always be perfectly accurate or appropriate for every situation.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">6.2 AI Accuracy and Your Oversight Responsibilities</h3>
            <p className="text-slate-300">
              Artificial intelligence technology, while advanced, is not infallible. Our AI-powered receptionist may not always function with complete accuracy or appropriateness. You should implement appropriate oversight and monitoring of AI interactions and not rely solely on AI-generated information for critical business decisions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">6.3 Data Retention and Deletion</h3>
            <p className="text-slate-300">
              We retain your data as necessary to provide our Services and as required by law or legitimate business interests. When your account is terminated, we may delete your account data after a reasonable retention period. You are solely responsible for creating and maintaining backup copies of your data if desired.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">6.4 Security and Data Protection</h3>
            <p className="text-slate-300">
              We implement industry-standard security measures to protect your data, including encryption, access controls, and regular security assessments. However, no system can guarantee absolute security. You agree to implement appropriate security practices for your business, including using strong passwords and maintaining secure integration credentials.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">6.5 Compliance Obligations</h3>
            <p className="text-slate-300">
              When using our Services, you're responsible for complying with all applicable laws and regulations, including but not limited to the Telephone Consumer Protection Act (TCPA), privacy laws, and consumer protection regulations. You must provide appropriate privacy notices to your customers about AI processing and call recording, and obtain necessary consent where required by law.
            </p>
          </div>
        </section>

        {/* 7. Third-Party Services and Integrations */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">7. Third-Party Services and Integrations</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">7.1 Integration Capabilities</h3>
            <p className="text-slate-300">
              Our platform integrates with numerous third-party services including CRMs, calendar systems, and business applications. You're responsible for managing these connections, including maintaining valid credentials, ensuring compliance with each service provider's terms, and securing your integration settings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">7.2 Third-Party Responsibilities and Limitations</h3>
            <p className="text-slate-300">
              The Site may contain links to third-party websites and services, and/or display advertisements for third parties (collectively, "Third-Party Links & Ads"). Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads. We don't control third-party services and can't guarantee their availability, performance, or security. When you connect external services to our platform, your use of those services remains governed by their respective terms and conditions.
            </p>
          </div>
        </section>

        {/* 8. Termination */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">8. Termination</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">8.1 Ending Your Account</h3>
            <p className="text-slate-300">
              You can terminate your account and stop using our services at any time by following the instructions in your account settings or contacting our support team. Termination becomes effective at the end of your current billing period, and you remain responsible for any charges incurred before termination.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">8.2 Suspension vs. Termination</h3>
            <p className="text-slate-300">
              We may suspend your account temporarily for minor violations or payment issues, allowing you opportunity to cure the violation. We may terminate accounts immediately for serious violations including illegal activities, security risks, or repeated policy violations. We'll provide reasonable notice when possible, though immediate action may be necessary to protect our systems and other users.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">8.3 When We May End Service</h3>
            <p className="text-slate-300">
              We may suspend or terminate your access to the Services if we reasonably determine that you have violated these Terms or our Acceptable Use Policy, engaged in unlawful or harmful activities, failed to pay required fees after receiving notice, posed a security risk to the Services or other users, or used the Services in a way that could negatively affect our operations, reputation, or other customers. Where practical, we will provide advance notice before taking such action, unless immediate steps are necessary for legal compliance, security, or to prevent harm.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">8.4 Effect of Termination</h3>
            <p className="text-slate-300">
              When your account ends, your right to use our services immediately ceases, and we may delete your account data after a reasonable retention period for business, legal, or regulatory purposes. You may request data export prior to termination subject to technical feasibility. Certain obligations such as payment responsibilities, indemnification requirements, intellectual property protections, and confidentiality obligations survive termination.
            </p>
          </div>
        </section>

        {/* 9. Other Users */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">9. Other Users</h2>
          <p className="text-slate-300">
            Each Site user is solely responsible for any and all of its own User Content. Since we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others. We make no guarantees regarding the accuracy, currency, suitability, appropriateness, or quality of any User Content. Your interactions with other Site users are solely between you and such users. You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.
          </p>
        </section>

        {/* 10. Indemnification */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">10. Indemnification</h2>
          <p className="text-slate-300">
            You agree to indemnify and hold Company (and its officers, employees, and agents) harmless, including costs and attorneys' fees, from any claim or demand made by any third party due to or arising out of (a) your use of the Site or Services, (b) your violation of these Terms, (c) your violation of applicable laws or regulations, (d) your User Content, or (e) any calls, messages, or campaigns conducted using our services. Company reserves the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims.
          </p>
        </section>

        {/* 11. Release */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">11. Release</h2>
          <p className="text-slate-300">
            You hereby release and forever discharge Company (and our officers, employees, agents, successors, and assigns) from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature (including personal injuries, death, and property damage), that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site or Services (including any interactions with, or act or omission of, other Site users or any Third-Party Links & Ads).
          </p>
        </section>

        {/* 12. Disclaimers */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">12. Disclaimers</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">12.1 Service Disclaimers</h3>
            <p className="text-slate-300 mb-4">
              THE SERVICES ARE PROVIDED BY EVA SPEAKS ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE MAXIMUM EXTENT PERMITTED UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, ACCURACY, AND SYSTEM INTEGRATION.
            </p>
            <p className="text-slate-300 mb-4">
              WE DO NOT GUARANTEE THAT THE SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE FROM HARMFUL CODE OR VULNERABILITIES. FUNCTIONALITY MAY BE LIMITED OR INTERRUPTED BY MAINTENANCE, UPDATES, NETWORK ISSUES, OR FACTORS OUTSIDE OUR CONTROL. WE ARE NOT RESPONSIBLE FOR ANY UNAUTHORIZED ACCESS TO OR ALTERATION OF THE SERVICES OR CONTENT PROVIDED THROUGH YOUR ACCOUNT.
            </p>
            <p className="text-slate-300">
              YOU ACKNOWLEDGE THAT THE SERVICES ARE DESIGNED FOR TECHNICAL TELECOMMUNICATIONS PURPOSES ONLY, AND DO NOT INCLUDE ANY LEGAL, MEDICAL, FINANCIAL, OR PROFESSIONAL ADVICE. YOU AGREE NOT TO RELY ON THE SERVICES FOR ANY PURPOSE REQUIRING PRECISE OR REAL-TIME COMMUNICATIONS, OR FOR ANY USE CASE WHERE FAILURE COULD RESULT IN DAMAGE OR HARM.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">12.2 Emergency Services Limitation</h3>
            <p className="text-slate-300 mb-4">
              Our Services are limited to inbound calling only and do not provide any outbound calling capabilities, including access to emergency services such as 911 or equivalent numbers. By using the Services, you acknowledge and agree that it is your responsibility to maintain alternative means for contacting emergency services and to inform all users of your phone system that such services are not available through our platform.
            </p>
            <p className="text-slate-300">
              We disclaim any responsibility or liability for any reliance on the Services for emergency communication.
            </p>
          </div>
        </section>

        {/* 13. Legal Framework and Dispute Resolution */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">13. Legal Framework and Dispute Resolution</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">13.1 Governing Law and Jurisdiction</h3>
            <p className="text-slate-300">
              These terms are governed by California state law and applicable federal law. Any legal proceedings that cannot be resolved through arbitration will be conducted in the state or federal courts located in Alameda County, California.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">13.2 Informal Dispute Resolution</h3>
            <p className="text-slate-300">
              Before initiating any formal dispute resolution process, including arbitration, both parties agree to attempt to resolve any dispute through good faith informal discussions. You must first contact our support team at <a href="mailto:support@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">support@evaspeaks.ai</a> with a detailed description of the issue. We will work with you to schedule a conference call or video meeting within 30 days to discuss the matter and attempt to reach a mutually satisfactory resolution.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">13.3 Arbitration Process</h3>
            <p className="text-slate-300">
              Disputes that cannot be resolved through informal dispute resolution will be settled through binding arbitration conducted in Hayward, California, USA (unless the parties agree to proceed online). The arbitration shall be conducted by a single, neutral arbitrator mutually agreed upon by the parties. All arbitration proceedings will be conducted on an individual basis rather than as part of any class action or group proceeding. You waive any right to participate in class actions, representative proceedings, or collective arbitrations. The arbitrator's decision will be final and binding on both parties.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">13.4 Opt-Out Rights</h3>
            <p className="text-slate-300">
              You have 30 days from the time you agree to these terms to opt out of the arbitration process by sending written notice to our legal department. If you opt out, any disputes will be resolved in the courts of Alameda County, California.
            </p>
          </div>
        </section>

        {/* 14. Limitation on Liability */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">14. Limitation on Liability</h2>
          <p className="text-slate-300 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COMPANY, ITS AFFILIATES, DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, PARTNERS, LICENSORS, OR SUPPLIERS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES — INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOST REVENUE, LOSS OF DATA, LOSS OF GOODWILL, SERVICE INTERRUPTION, DEVICE OR SYSTEM FAILURE, OR THE COST OF SUBSTITUTE GOODS OR SERVICES — ARISING OUT OF OR IN CONNECTION WITH YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SITE OR SERVICES.
          </p>
          <p className="text-slate-300 mb-4">
            THIS LIMITATION APPLIES REGARDLESS OF THE LEGAL THEORY, WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), WARRANTY, STATUTE, OR OTHERWISE, AND EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </p>
          <p className="text-slate-300 mb-4">
            YOU ACKNOWLEDGE AND AGREE THAT YOUR USE OF THE SITE AND SERVICES IS AT YOUR SOLE RISK AND DISCRETION. YOU ARE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR DEVICE, COMPUTER SYSTEM, OR LOSS OF DATA THAT RESULTS FROM SUCH USE.
          </p>
          <p className="text-slate-300 mb-4">
            IN NO EVENT SHALL COMPANY'S TOTAL CUMULATIVE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES EXCEED FIFTY U.S. DOLLARS (US $50), REGARDLESS OF THE NATURE OR NUMBER OF CLAIMS.
          </p>
          <p className="text-slate-300">
            YOU FURTHER AGREE THAT COMPANY'S SUPPLIERS AND LICENSORS SHALL HAVE NO LIABILITY WHATSOEVER ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OR THE SERVICES. NOTHING IN THIS SECTION SHALL LIMIT ANY LIABILITY THAT CANNOT BE LIMITED UNDER APPLICABLE LAW.
          </p>
        </section>

        {/* 15. Copyright Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">15. Copyright Policy</h2>
          <p className="text-slate-300 mb-4">
            Company respects the intellectual property of others and asks that users of our Site do the same. In connection with our Site and Services, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination, in appropriate circumstances, of users who are repeat infringers of intellectual property rights, including copyrights.
          </p>
          <p className="text-slate-300 mb-4">
            If you believe that one of our users is, through the use of our Site or Services, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-slate-300">
            <li>Your physical or electronic signature</li>
            <li>Identification of the copyrighted work(s) that you claim to have been infringed</li>
            <li>Identification of the material on our services that you claim is infringing and that you request us to remove</li>
            <li>Sufficient information to permit us to locate such material</li>
            <li>Your address, telephone number, and e-mail address</li>
            <li>A statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law</li>
            <li>A statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner</li>
          </ul>
        </section>

        {/* 16. General */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">16. General</h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.1 Changes</h3>
            <p className="text-slate-300">
              These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us (if any), and/or by prominently posting notice of the changes on our Site. Continued use of our Site or Services following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.2 Export Controls</h3>
            <p className="text-slate-300">
              Our services may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, reexport, or transfer, directly or indirectly, any U.S. technical data acquired from us, or any products utilizing such data, in violation of United States export laws or regulations.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.3 Electronic Communications</h3>
            <p className="text-slate-300">
              The communications between you and Company use electronic means. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal requirement that such communications would satisfy if it were be in a hardcopy writing.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.4 Force Majeure</h3>
            <p className="text-slate-300">
              We're not liable for delays or failures in performance due to circumstances beyond our reasonable control, including natural disasters, government actions, network outages, pandemics, or other force majeure events. During such events, we will make commercially reasonable efforts to minimize service disruptions.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.5 Age Restrictions</h3>
            <p className="text-slate-300">
              Our platform is designed for business use and is restricted to individuals who are at least 18 years old. We do not intentionally collect personal information from individuals under 18 years of age. If you believe we have inadvertently collected information from someone under 18, please contact us immediately at support@evaspeaks.ai.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.6 Geographic Restrictions</h3>
            <p className="text-slate-300">
              Our services are specifically designed for businesses operating within the United States. All call handling capabilities are currently limited to inbound calls originating from within the United States. Our website and platform are controlled and operated from the United States.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-medium text-white mb-3">16.7 Beta and Trial Features</h3>
            <p className="text-slate-300">
              We may offer beta features or trial functionality from time to time. These features are provided "as-is" without warranties and may be modified or discontinued at any time. Beta features should not be used for critical business operations.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium text-white mb-3">16.8 Entire Terms</h3>
            <p className="text-slate-300">
              These Terms constitute the entire agreement between you and us regarding the use of the Site and Services. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. If any provision of these Terms is, for any reason, held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law. These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company's prior written consent. Company may freely assign these Terms.
            </p>
          </div>
        </section>

        {/* 17. Contact Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-medium text-white mb-4">17. Contact Information</h2>
          <p className="text-slate-300 mb-4">
            For questions about these terms or to exercise any rights described herein, please contact us at:
          </p>
          
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6">
            <div className="overflow-x-auto">
              <table className="w-full" role="table" aria-label="Contact information">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="text-left py-2 text-white font-medium w-1/3 sm:w-auto">Contact Type</th>
                    <th className="text-left py-2 text-white font-medium">Details</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300 text-sm sm:text-base">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">General Legal</td>
                    <td className="py-3">
                      <a href="mailto:support@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">support@evaspeaks.ai</a>
                    </td>
                  </tr>

                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 font-medium text-white">Support</td>
                    <td className="py-3">
                      <a href="mailto:support@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 focus:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded transition-colors">support@evaspeaks.ai</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-white">Mailing Address</td>
                    <td className="py-3">
                      Eva Speaks.<br />
                      22693 Hesperian Blvd #205<br />
                      Hayward CA 94541<br />
                      Phone: (650)374-4160
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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

const TermsOfServicePage: React.FC = () => {
  return (
    <ToggleWrapper type="page" name="terms">
      <TermsOfServicePageContent />
    </ToggleWrapper>
  );
};

export default TermsOfServicePage;