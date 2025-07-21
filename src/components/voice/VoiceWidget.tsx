// src/components/VoiceWidget.tsx
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, PhoneOff, Waves, ArrowRight, X, User, Mail } from 'lucide-react';

interface VoiceWidgetProps {
  publicKey?: string;
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
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    name: '',
    email: '',
    agreedToTerms: false
  });
  const [formErrors, setFormErrors] = useState<Partial<CustomerInfo>>({});
  const [isValidatingEmail, setIsValidatingEmail] = useState(false);

  const voiceRef = useRef<any>(null);
  const durationRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isOpen && !showForm) {
      loadVoiceService();
    }
    return () => cleanup();
  }, [isOpen, showForm]);

  const freeEmailProviders = [
    'gmail.com','yahoo.com','hotmail.com','outlook.com','aol.com',
    'icloud.com','me.com','live.com','msn.com','ymail.com',
    'rocketmail.com','mail.com','protonmail.com','tutanota.com'
  ];

  const validateEmailDomain = async (email: string): Promise<{ isValid: boolean; error?: string }> => {
    const domain = email.split('@')[1]?.toLowerCase();
    if (!domain) return { isValid: false, error: 'Invalid email format' };
    if (freeEmailProviders.includes(domain)) {
      return { isValid: false, error: 'Please use a business email address' };
    }
    const suspicious = ['test.com','example.com','demo.com','fake.com','temp.com'];
    if (suspicious.includes(domain)) {
      return { isValid: false, error: 'Please use a valid business email address' };
    }
    if (window.location.hostname === 'localhost') {
      const domainRegex = /^[a-zA-Z0-9][a-zA-Z0-9-]{0,61}[a-zA-Z0-9]?\.[a-zA-Z]{2,}$/;
      return domainRegex.test(domain)
        ? { isValid: true }
        : { isValid: false, error: 'Invalid domain format' };
    }
    try {
      const res = await fetch(`/api/validate-email?email=${encodeURIComponent(email)}`);
      const json = await res.json();
      return json.valid
        ? { isValid: true }
        : { isValid: false, error: json.error || 'Invalid email domain' };
    } catch {
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
      setIsValidatingEmail(true);
      const dv = await validateEmailDomain(customerInfo.email.trim());
      setIsValidatingEmail(false);
      if (!dv.isValid) errors.email = dv.error;
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
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const loadVoiceService = async () => {
    try {
      const { default: VoiceService } = await import('@vapi-ai/web');
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
        console.error('Voice error:', err);
        setError('Connection failed');
        setIsConnecting(false);
      });
    } catch (err) {
      console.error('Failed to load voice service:', err);
      setError('Failed to load voice service');
    }
  };

  const startCall = async () => {
    setError('');
    setIsConnecting(true);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(t => t.stop());

      const resp = await fetch('/api/start-call', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerName: customerInfo.name,
          customerEmail: customerInfo.email
        }),
      });
      const data = await resp.json();
      if (!resp.ok) throw new Error(data.error || 'Call failed');

      setIsConnected(true);
      setIsConnecting(false);
      startTimer();
    } catch (err: any) {
      console.error('Error starting call:', err);
      setError(err.message || 'Failed to start call');
      setIsConnecting(false);
    }
  };

  const endCall = () => {
    if (voiceRef.current) voiceRef.current.stop();
    cleanup();
    handleClose();
  };

  const toggleMute = () => {
    if (voiceRef.current && isConnected) {
      const m = !isMuted;
      voiceRef.current.setMuted(m);
      setIsMuted(m);
    }
  };

  const startTimer = () => {
    setDuration(0);
    durationRef.current = setInterval(() => setDuration(d => d + 1), 1000);
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

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  if (!isOpen) {
    return (
      <button onClick={() => setIsOpen(true)} className="btn-base btn-primary btn-lg">
        <Mic size={16} />
        <span>{buttonText}</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="relative card-base p-8 w-full max-w-sm">
        <button onClick={handleClose} className="absolute top-4 right-4 w-8 h-8 bg-slate-700/50 hover:bg-slate-600/50 rounded-full flex items-center justify-center">
          <X className="w-4 h-4 text-slate-300" />
        </button>

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
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    value={customerInfo.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    placeholder="Full name"
                    className={`form-input ${formErrors.name ? 'border-red-500' : ''}`}
                    style={{ paddingLeft: '2.5rem' }}
                    onKeyPress={async e => e.key === 'Enter' && handleFormSubmit(e as any)}
                  />
                </div>
                {formErrors.name && <p className="text-red-400 text-xs mt-1">{formErrors.name}</p>}
              </div>

              <div>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    value={customerInfo.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    placeholder="Email address"
                    className={`form-input ${formErrors.email ? 'border-red-500' : ''}`}
                    style={{ paddingLeft: '2.5rem' }}
                    onKeyPress={async e => e.key === 'Enter' && handleFormSubmit(e as any)}
                  />
                </div>
                {formErrors.email && <p className="text-red-400 text-xs mt-1">{formErrors.email}</p>}
              </div>

              <label className="flex items-start space-x-3 pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={customerInfo.agreedToTerms}
                  onChange={e => handleInputChange('agreedToTerms', e.target.checked)}
                  className="mt-0.5 w-4 h-4 text-cyan-500 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500 focus:ring-2"
                />
                <span className="text-xs text-slate-400">
                  I accept the{' '}
                  <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms" target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
                    Terms of Service
                  </a>
                </span>
              </label>
              {formErrors.agreedToTerms && <p className="text-red-400 text-xs mt-1">Please accept the terms</p>}

              <button
                onClick={handleFormSubmit}
                disabled={isValidatingEmail}
                className="btn-base btn-primary btn-md w-full mt-4"
              >
                {isValidatingEmail ? (
                  <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />Validating...</>
                ) : (
                  <>Start Voice Call<ArrowRight className="w-4 h-4 ml-2" /></>
                )}
              </button>
            </div>
          </div>
        )}

        {!showForm && isConnecting && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
            <h2 className="text-xl font-semibold text-white">Connecting...</h2>
            <p className="text-slate-400">Please allow microphone access</p>
          </div>
        )}

        {!showForm && isConnected && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-400 rounded-full flex items-center justify-center mx-auto">
              <Waves className="w-8 h-8 text-white animate-pulse" />
            </div>
            <h2 className="text-xl font-semibold mb-1 text-white">Connected with Eva</h2>
            <p className="text-slate-400 text-sm mb-2">Hi {customerInfo.name}!</p>
            <div className="text-2xl font-mono text-teal-400">{formatTime(duration)}</div>
            <div className="flex justify-center space-x-4">
              <button onClick={toggleMute} className={`p-3 rounded-full ${isMuted ? 'bg-red-500/20 text-red-400' : 'bg-slate-700/50 text-slate-300'}`}>
                {isMuted ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
            </div>
            <button onClick={endCall} className="btn-base btn-danger btn-md w-full">
              <PhoneOff className="w-5 h-5" /><span>End Call</span>
            </button>
          </div>
        )}

        {!showForm && !isConnecting && !isConnected && error && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto">
              <PhoneOff className="w-8 h-8 text-red-400" />
            </div>
            <h2 className="text-xl font-semibold text-white">Connection Error</h2>
            <p className="text-slate-400">{error}</p>
            <button onClick={() => { setError(''); startCall(); }} className="btn-base btn-primary btn-md w-full">
              Try Again
            </button>
          </div>
        )}

        {!showForm && !isConnecting && !isConnected && !error && (
          <div className="text-center space-y-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-semibold mb-2 text-white">Ready to Connect</h2>
            <p className="text-slate-400 text-sm">Hi {customerInfo.name}, let's start your voice conversation with Eva</p>
            <button onClick={startCall} className="btn-base btn-primary btn-md w-full">
              <Mic className="w-5 h-5" /><span>Start Call</span><ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VoiceWidget;