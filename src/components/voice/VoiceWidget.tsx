import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, PhoneOff, Waves, ArrowRight, X, User, Mail } from 'lucide-react';

interface VoiceWidgetProps {
  publicKey?: string;
  assistantId?: string;
  onClose?: () => void;
  trigger?: 'button' | 'inline';
  buttonText?: string;
}

interface CustomerInfo {
  name: string;
  email: string;
  agreedToTerms: boolean;
}

const VoiceWidget: React.FC<VoiceWidgetProps> = ({ 
  publicKey = import.meta.env.VITE_VOICE_PUBLIC_KEY || "", 
  assistantId = import.meta.env.VITE_VOICE_ASSISTANT_ID || "",
  onClose,
  trigger = 'button',
  buttonText = 'Talk to Eva'
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(true);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({ name: '', email: '', agreedToTerms: false });
  const [formErrors, setFormErrors] = useState<Partial<CustomerInfo>>({});
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);
  
  const voiceRef = useRef<any>(null);
  const durationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && !showForm) {
      loadVoiceService();
    }
    return () => {
      cleanup();
    };
  }, [isOpen, showForm]);

  // Common free email providers to exclude
  const freeEmailProviders = [
    'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com',
    'icloud.com', 'me.com', 'live.com', 'msn.com', 'ymail.com',
    'rocketmail.com', 'mail.com', 'protonmail.com', 'tutanota.com'
  ];

  const validateEmailDomain = async (email: string): Promise<{ isValid: boolean; error?: string }> => {
    try {
      const domain = email.split('@')[1]?.toLowerCase();
      if (!domain) return { isValid: false, error: 'Invalid email format' };

      // Check if it's a free email provider
      if (freeEmailProviders.includes(domain)) {
        return { isValid: false, error: 'Please use a business email address' };
      }

      // Check for obviously fake/test domains
      const suspiciousDomains = ['test.com', 'example.com', 'demo.com', 'fake.com', 'temp.com'];
      if (suspiciousDomains.includes(domain)) {
        return { isValid: false, error: 'Please use a valid business email address' };
      }

      // Skip MX validation in development
      if (window.location.hostname === 'localhost') {
        console.log('Skipping MX validation in development');
        // Just do basic domain check in dev
        const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/;
        if (!domainRegex.test(domain)) {
          return { isValid: false, error: 'Invalid domain format' };
        }
        return { isValid: true }; // Pass in development
      }

      // Use Netlify function for MX validation in production
      const response = await fetch(`/api/validate-email?email=${encodeURIComponent(email)}`);
      const result = await response.json();
      
      if (result.valid) {
        return { isValid: true };
      } else {
        return { isValid: false, error: result.error || 'Invalid email domain' };
      }

    } catch (error) {
      return { isValid: false, error: 'Unable to verify domain - please check and try again' };
    }
  };

  const validateForm = async (): Promise<boolean> => {
    const errors: Partial<CustomerInfo> = {};
    
    if (!customerInfo.name.trim()) {
      errors.name = 'Name is required';
    } else if (customerInfo.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }
    
    if (!customerInfo.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerInfo.email.trim())) {
      errors.email = 'Please enter a valid email address';
    } else {
      // Validate domain if email format is correct
      setIsValidatingEmail(true);
      const domainValidation = await validateEmailDomain(customerInfo.email.trim());
      setIsValidatingEmail(false);
      
      if (!domainValidation.isValid) {
        errors.email = domainValidation.error;
      }
    }
    
    if (!customerInfo.agreedToTerms) {
      errors.agreedToTerms = true;
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (await validateForm()) {
      setShowForm(false);
      setFormErrors({});
    }
  };

  const handleInputChange = (field: keyof CustomerInfo, value: string | boolean) => {
    setCustomerInfo(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing/interacting
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const loadVoiceService = async () => {
    try {
      // Try direct import first, then fallback to obfuscated
      let VoiceService;
      
      try {
        const VoiceModule = await import('@vapi-ai/web');
        VoiceService = VoiceModule.default;
      } catch (directImportError) {
        console.log('Direct import failed, trying alternative method...');
        // Fallback to obfuscated import
        const moduleId = ['@', 'v', 'a', 'p', 'i', '-', 'a', 'i', '/', 'w', 'e', 'b'].join('');
        const VoiceModule = await import(moduleId);
        VoiceService = VoiceModule.default;
      }
      
      if (!VoiceService) {
        throw new Error('Voice service constructor not found');
      }
      
      voiceRef.current = new VoiceService(publicKey);
      
      voiceRef.current.on('call-start', () => {
        setIsConnected(true);
        setIsConnecting(false);
        startTimer();
      });

      voiceRef.current.on('call-end', () => {
        setIsConnected(false);
        setIsConnecting(false);
        stopTimer();
        handleClose();
      });

      voiceRef.current.on('error', (err: any) => {
        console.error('Voice service error:', err);
        setError('Connection failed');
        setIsConnecting(false);
        setIsConnected(false);
      });

    } catch (err) {
      console.error('Failed to load voice service:', err);
      setError('Failed to load voice service');
    }
  };

  const startCall = async () => {
    if (!voiceRef.current || !assistantId) return;
    
    setError('');
    setIsConnecting(true);
    
    try {
      // Request microphone permission
      console.log('Requesting microphone permission...');
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      console.log('Microphone permission granted');
      
      // Stop the test stream immediately
      stream.getTracks().forEach(track => track.stop());
      
      // Pass customer information to the assistant
      const callOptions = {
        metadata: {
          customerName: customerInfo.name,
          customerEmail: customerInfo.email
        }
      };
      
      // Start voice service with customer information
      await voiceRef.current.start(assistantId, callOptions);
      
    } catch (err: any) {
      console.error('Error:', err);
      
      if (err.name === 'NotAllowedError') {
        setError('Microphone permission denied. Please allow and try again.');
      } else if (err.name === 'NotFoundError') {
        setError('No microphone found. Please connect a microphone.');
      } else {
        setError(err.message || 'Failed to start call');
      }
      
      setIsConnecting(false);
    }
  };

  const endCall = () => {
    if (voiceRef.current) {
      voiceRef.current.stop();
    }
    cleanup();
    handleClose();
  };

  const toggleMute = () => {
    if (voiceRef.current && isConnected) {
      const newMuted = !isMuted;
      voiceRef.current.setMuted(newMuted);
      setIsMuted(newMuted);
    }
  };

  const startTimer = () => {
    setDuration(0);
    durationRef.current = setInterval(() => {
      setDuration(prev => prev + 1);
    }, 1000);
  };

  const stopTimer = () => {
    if (durationRef.current) {
      clearInterval(durationRef.current);
      durationRef.current = null;
    }
  };

  const cleanup = () => {
    setIsConnected(false);
    setIsConnecting(false);
    setDuration(0);
    setError('');
    setIsMuted(false);
    stopTimer();
  };

  const handleClose = () => {
    cleanup();
    setIsOpen(false);
    setShowForm(true);
    setCustomerInfo({ name: '', email: '', agreedToTerms: false });
    setFormErrors({});
    onClose?.();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)} 
        className="btn-base btn-primary btn-lg"
      >
        <Mic size={16} />
        <span>{buttonText}</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      
      <div className="relative card-base p-8 w-full max-w-sm">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-slate-300" />
        </button>

        {/* Customer Information Form */}
        {showForm && (
          <div className="space-y-5">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-lg font-semibold mb-1 text-white">Connect with Eva</h2>
              <p className="text-slate-400 text-xs">Please provide your details</p>
            </div>

            <div className="space-y-3">
              <div>
                <div className="relative" style={{ position: 'relative' }}>
                  <User 
                    className="w-4 h-4 text-slate-400" 
                    style={{ 
                      position: 'absolute', 
                      left: '12px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      zIndex: 1,
                      pointerEvents: 'none'
                    }} 
                  />
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`form-input ${
                      formErrors.name ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    style={{ paddingLeft: '40px' }}
                    placeholder="Full name"
                    onKeyPress={async (e) => {
                      if (e.key === 'Enter') {
                        await handleFormSubmit(e);
                      }
                    }}
                  />
                </div>
                {formErrors.name && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              <div>
                <div className="relative" style={{ position: 'relative' }}>
                  <Mail 
                    className="w-4 h-4 text-slate-400" 
                    style={{ 
                      position: 'absolute', 
                      left: '12px', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      zIndex: 1,
                      pointerEvents: 'none'
                    }} 
                  />
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`form-input ${
                      formErrors.email ? 'border-red-500 focus:border-red-500' : ''
                    }`}
                    style={{ paddingLeft: '40px' }}
                    placeholder="Email address"
                    onKeyPress={async (e) => {
                      if (e.key === 'Enter') {
                        await handleFormSubmit(e);
                      }
                    }}
                  />
                </div>
                {formErrors.email && (
                  <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              <div className="pt-2">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customerInfo.agreedToTerms}
                    onChange={(e) => handleInputChange('agreedToTerms', e.target.checked)}
                    className="mt-0.5 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                  />
                  <span className="text-xs text-slate-400 leading-relaxed">
                    I accept the{' '}
                    <a 
                      href="/privacy" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Privacy Policy
                    </a>
                    {' '}and{' '}
                    <a 
                      href="/terms" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 underline"
                    >
                      Terms of Service
                    </a>
                  </span>
                </label>
                {formErrors.agreedToTerms && (
                  <p className="text-red-400 text-xs mt-1">Please accept the terms to continue</p>
                )}
              </div>

              <button
                onClick={handleFormSubmit}
                disabled={isValidatingEmail}
                className="btn-base btn-primary btn-md w-full mt-4"
              >
                {isValidatingEmail ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Validating...</span>
                  </>
                ) : (
                  <>
                    <span>Start Voice Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Connected State */}
        {!showForm && isConnected && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full flex items-center justify-center mx-auto">
              <Waves className="w-8 h-8 text-white animate-pulse" />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-1 text-white">Connected with Eva</h2>
              <p className="text-slate-400 text-sm mb-2">Hi {customerInfo.name}!</p>
              <div className="text-2xl font-mono text-teal-400">{formatTime(duration)}</div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={toggleMute}
                className={`p-3 rounded-full transition-colors ${
                  isMuted ? 'bg-red-500/20 text-red-400' : 'bg-slate-700/50 text-slate-300'
                }`}
              >
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            </div>

            <button
              onClick={endCall}
              className="btn-base btn-danger btn-md w-full"
            >
              <PhoneOff className="w-5 h-5" />
              <span>End Call</span>
            </button>
          </div>
        )}

        {/* Connecting State */}
        {!showForm && isConnecting && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
            <h2 className="text-xl font-semibold text-white">Connecting {customerInfo.name}...</h2>
            <p className="text-slate-400">Please allow microphone access</p>
          </div>
        )}

        {/* Error State */}
        {!showForm && error && !isConnecting && !isConnected && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
              <PhoneOff className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Connection Error</h2>
            <p className="text-slate-400">{error}</p>
            <button
              onClick={() => { setError(''); startCall(); }}
              className="btn-base btn-primary btn-md w-full"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Initial State - Ready to Start Call */}
        {!showForm && !isConnecting && !isConnected && !error && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <Mic className="w-8 h-8 text-white" />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">Ready to Connect</h2>
              <p className="text-slate-400 text-sm">Hi {customerInfo.name}, let's start your voice conversation with Eva</p>
            </div>

            <button
              onClick={startCall}
              className="btn-base btn-primary btn-md w-full"
            >
              <Mic className="w-5 h-5" />
              <span>Start Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceWidget;