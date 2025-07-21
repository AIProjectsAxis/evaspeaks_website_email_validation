import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Linkedin, Youtube, Instagram, Mail, PhoneCall, X } from 'lucide-react';

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleClose = () => {
    setSubmitMessage('');
    setIsSubmitting(false);

    if (formRef.current) {
      formRef.current.reset();
    }

    onClose();
  };

  if (!isOpen) return null;

  // Enhanced email validation regex - requires proper domain with TLD
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

  // Phone formatting and validation
  const formatPhone = (value: string) => {
    const onlyNums = value.replace(/\D/g, '');
    return onlyNums.slice(0, 10); // Limit to 10 digits
  };

  const handleInputValidation = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const field = e.target;
    setCustomValidationMessage(field);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    e.target.value = formatted;
    setCustomValidationMessage(e.target);
  };

  const setCustomValidationMessage = (field: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
    const { name, value, validity } = field;

    // Custom validation messages for HTML5 tooltips
    if (validity.valueMissing) {
      switch (name) {
        case 'name':
          field.setCustomValidity('Please fill out this field.');
          break;
        case 'email':
          field.setCustomValidity('Please fill out this field.');
          break;
        case 'phone':
          field.setCustomValidity('Please fill out this field.');
          break;
        case 'message':
          field.setCustomValidity('Please fill out this field.');
          break;
        default:
          field.setCustomValidity('Please fill out this field.');
      }
      return;
    }

    if (validity.patternMismatch) {
      if (name === 'phone') {
        field.setCustomValidity('Phone number must be exactly 10 digits.');
      } else if (name === 'email') {
        field.setCustomValidity('Please enter a valid email address.');
      }
      return;
    }

    if (validity.tooShort) {
      switch (name) {
        case 'name':
          field.setCustomValidity('Name must be at least 2 characters long.');
          break;
        case 'message':
          field.setCustomValidity('Message must be at least 10 characters long.');
          break;
        default:
          field.setCustomValidity(`This field must be at least ${field.getAttribute('minlength')} characters long.`);
      }
      return;
    }

    if (validity.tooLong) {
      field.setCustomValidity(`This field must be no more than ${field.getAttribute('maxlength')} characters long.`);
      return;
    }

    // Additional email validation with robust regex - requires proper TLD
    if (name === 'email' && value && !emailRegex.test(value.trim())) {
      field.setCustomValidity('Please enter a valid email address.');
      return;
    }

    // Clear custom validity if all checks pass
    field.setCustomValidity('');
  };

  const validateForm = (): boolean => {
    if (!formRef.current) return false;

    // Get all form fields that need validation
    const fields = formRef.current.querySelectorAll('input[required], textarea[required]');
    let isValid = true;

    fields.forEach((field) => {
      const htmlField = field as HTMLInputElement | HTMLTextAreaElement;
      
      // Set custom validation messages
      setCustomValidationMessage(htmlField);
      
      // Check if field is valid
      if (!htmlField.checkValidity()) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitMessage('');

    // Validate form
    if (!validateForm()) {
      // Let HTML5 validation show native tooltips
      formRef.current?.reportValidity();
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        form.reset();
        setTimeout(() => {
          onClose();
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
      <div className="contact-modal-content">
        <button
          onClick={handleClose}
          className="contact-modal-close"
          aria-label="Close contact form"
        >
          <X size={20} />
        </button>

        <h3 id="contact-modal-title" className="contact-modal-title">Get in Touch</h3>

        <form
          ref={formRef}
          className="contact-form"
          onSubmit={handleSubmit}
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />

          <p hidden>
            <label>
              Don't fill this out if you're human: <input name="bot-field" />
            </label>
          </p>

          {submitMessage && (
            <div className={`contact-form-message ${submitMessage.includes('Thank you') ? 'success' : 'error'}`}>
              {submitMessage}
            </div>
          )}

          <div className="contact-form-group">
            <label htmlFor="modal-name" className="contact-form-label">Name *</label>
            <input
              id="modal-name"
              name="name"
              type="text"
              className="contact-form-input"
              placeholder="Your name"
              required
              minLength={2}
              maxLength={100}
              onChange={handleInputValidation}
              aria-required="true"
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="modal-email" className="contact-form-label">Email *</label>
            <input
              id="modal-email"
              name="email"
              type="email"
              className="contact-form-input"
              placeholder="your@email.com"
              required
              maxLength={254}
              pattern="[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$"
              onChange={handleInputValidation}
              aria-required="true"
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="modal-phone" className="contact-form-label">Phone *</label>
            <input
              id="modal-phone"
              name="phone"
              type="tel"
              className="contact-form-input"
              placeholder="1234567890"
              pattern="[0-9]{10}"
              title="Phone number must be exactly 10 digits"
              required
              maxLength={10}
              onChange={handlePhoneChange}
              aria-required="true"
            />
          </div>

          <div className="contact-form-group">
            <label htmlFor="modal-subject" className="contact-form-label">Subject</label>
            <select
              id="modal-subject"
              name="subject"
              className="contact-form-input"
              aria-label="Select inquiry topic"
            >
              <option value="">Select a topic</option>
              <option value="demo">Request Demo</option>
              <option value="pricing">Pricing Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="contact-form-group">
            <label htmlFor="modal-message" className="contact-form-label">Message *</label>
            <textarea
              id="modal-message"
              name="message"
              rows={3}
              className="contact-form-textarea"
              placeholder="Tell us how we can help..."
              required
              minLength={10}
              maxLength={1000}
              onChange={handleInputValidation}
              aria-required="true"
            />
          </div>

          <button
            type="submit"
            className="btn-base btn-primary btn-md w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        <div className="contact-modal-divider">
          <p className="contact-modal-info">Or reach us directly:</p>
          <div className="contact-modal-details">
            <div className="contact-modal-detail-item">
              <Mail size={16} className="contact-modal-icon" aria-hidden="true" />
              <a href="mailto:hello@evaspeaks.ai" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                hello@evaspeaks.ai
              </a>
            </div>
            <div className="contact-modal-detail-item">
              <PhoneCall size={16} className="contact-modal-icon" aria-hidden="true" />
              <a href="tel:+16503744160" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                +1 (650) 374-4160
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer: React.FC = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <>
      <footer className="footer-container" role="contentinfo">
        <div className="footer-bg" aria-hidden="true"></div>
        <div className="container mx-auto relative">
          <div className="footer-main">
            <div className="footer-brand">
              <div className="footer-brand-title">
                <span className="footer-brand-text text-cyan-400">eva speaks</span>
              </div>
              <p className="footer-brand-description">
                The next generation AI virtual receptionist for modern businesses.
              </p>
              <div className="footer-social-links" role="list" aria-label="Social media links">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow Eva Speaks on LinkedIn"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Subscribe to Eva Speaks on YouTube"
                >
                  <Youtube size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow Eva Speaks on Facebook"
                >
                  <Facebook size={18} aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label="Follow Eva Speaks on Instagram"
                >
                  <Instagram size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">About</h3>
              <ul className="footer-column-list" role="list">
                <li><Link to="/team" className="footer-column-link">Our Team</Link></li>
                <li><Link to="/careers" className="footer-column-link">Careers</Link></li>
                <li><Link to="/press" className="footer-column-link">Press & Media</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-column-title">Legal</h3>
              <ul className="footer-column-list" role="list">
                <li><Link to="/security" className="footer-column-link">Security</Link></li>
                <li><Link to="/privacy" className="footer-column-link">Privacy Policy</Link></li>
                <li><Link to="/terms" className="footer-column-link">Terms of Service</Link></li>
              </ul>
            </div>

            <div className="footer-contact-card">
              <div className="footer-contact-bg" aria-hidden="true"></div>
              <div className="footer-contact-content">
                <h3 className="footer-column-title">Contact</h3>
                <ul className="footer-contact-list" role="list">
                  <li className="footer-contact-item">
                    <Mail size={16} className="footer-contact-icon" aria-hidden="true" />
                    <a href="mailto:hello@evaspeaks.ai" className="text-white/60 hover:text-white transition-colors">
                      hello@evaspeaks.ai
                    </a>
                  </li>
                  <li className="footer-contact-item">
                    <PhoneCall size={16} className="footer-contact-icon" aria-hidden="true" />
                    <a href="tel:+16503744160" className="text-white/60 hover:text-white transition-colors">
                      +1 (650) 374-4160
                    </a>
                  </li>
                </ul>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="btn-base btn-primary btn-sm w-full"
                  aria-label="Open contact form"
                >
                  Get in Touch
                </button>
              </div>
            </div>
          </div>

          <div className="footer-copyright">
            <p>© {new Date().getFullYear()} Eva Speaks. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
};

export default Footer;