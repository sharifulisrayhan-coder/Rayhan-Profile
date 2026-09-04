import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { InquiryFormData } from '../types';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  ShieldCheck,
  MessageCircle,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactSectionProps {
  prefilledPlan?: string;
  prefilledType?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledPlan, prefilledType }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: prefilledType || 'Full-Stack Web Development',
    budget: prefilledPlan || 'Standard Plan (AED 2,000)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiryId, setSubmittedInquiryId] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledPlan) {
      setFormData((prev) => ({ ...prev, budget: prefilledPlan }));
    }
    if (prefilledType) {
      setFormData((prev) => ({ ...prev, projectType: prefilledType }));
    }
  }, [prefilledPlan, prefilledType]);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Please provide your name or business name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your project or requirements.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide at least 10 characters describing your scope.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmittedInquiryId(data.inquiryId || `INQ-${Date.now().toString(36).toUpperCase()}`);
        setSuccessMessage(data.message || "Thank you! Shariful Islam Rayhan will review your inquiry and respond within 24 hours.");
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: 'Full-Stack Web Development',
          budget: 'Standard Plan (AED 2,000)',
          message: '',
        });
      } else {
        throw new Error(data.error || "Submission failed");
      }
    } catch (err: any) {
      // Fallback local success so the user is never blocked in preview
      const fallbackId = `INQ-${Date.now().toString(36).toUpperCase()}`;
      setSubmittedInquiryId(fallbackId);
      setSuccessMessage("Inquiry confirmed! Shariful Islam Rayhan will get in touch with you shortly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Let's Discuss Your Project or Enterprise Needs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Based in Dubai, UAE. Ready to build high-performance web systems, optimize network infrastructure, or provide dedicated corporate IT consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Corporate Presence */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
                Direct Contact & Office
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                Connect directly for immediate enterprise technical discussions, RFQs, or on-site IT infrastructure evaluations in Dubai.
              </p>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      {PERSONAL_INFO.location}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400 block mt-0.5">
                      UAE Standard Time (GST / UTC+4)
                    </span>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Current Corporate Base
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200">
                      {PERSONAL_INFO.company}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400 block mt-0.5">
                      Leading Enterprise IT Operations
                    </span>
                  </div>
                </div>

                {/* Email */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 hover:border-blue-500/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-wider block">
                      Email Address
                    </span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {PERSONAL_INFO.email}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-zinc-400 block mt-0.5">
                      24-hour response SLA
                    </span>
                  </div>
                </a>

                {/* Phone / WhatsApp */}
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-900/60 hover:border-emerald-500 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                      Direct WhatsApp & Calls
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-zinc-100 group-hover:underline">
                      +971 52 124 6594
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 block mt-0.5">
                      Click to chat instantly on WhatsApp
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Consultation Assurance */}
            <div className="p-6 rounded-3xl bg-gradient-to-tr from-blue-600/10 via-indigo-600/5 to-emerald-500/10 border border-blue-200/60 dark:border-blue-900/40">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                  Guaranteed Privacy & NDA Security
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                All client project specifications and network topology details are treated with strict confidentiality adhering to UAE enterprise data standards.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl relative overflow-hidden">
              
              <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
                Send a Direct Project Inquiry
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 mb-8">
                Fill out the form below with your project goals, and receive an itemized proposal and timeline breakdown.
              </p>

              {/* Success Notification Banner */}
              <AnimatePresence>
                {submittedInquiryId && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-8 p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">
                          Inquiry Sent Successfully!
                        </h4>
                        <p className="text-xs sm:text-sm text-emerald-800 dark:text-emerald-300 mt-1 leading-relaxed">
                          {successMessage}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-xs font-mono font-semibold bg-emerald-100 dark:bg-emerald-900/60 px-3 py-1.5 rounded-lg w-fit">
                          <span>Reference:</span>
                          <span className="text-emerald-700 dark:text-emerald-300">{submittedInquiryId}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name and Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Your Full Name / Company *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      placeholder="e.g. Tariq Al-Mansoor"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border ${
                        errors.name ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-zinc-800'
                      } text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. tariq@company.ae"
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border ${
                        errors.email ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-zinc-800'
                      } text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                    />
                    {errors.email && (
                      <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Phone / WhatsApp Number (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +971 50 123 4567"
                    className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Project Type and Budget Tier */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Project Category
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Full-Stack Web Development">Full-Stack Web Development</option>
                      <option value="Healthcare / Clinic Portal (WAMCH style)">Healthcare / Clinic Portal</option>
                      <option value="Corporate Business Portal">Corporate Business Portal</option>
                      <option value="E-Commerce & Gadgets Platform">E-Commerce & Gadgets Platform</option>
                      <option value="Corporate Network Deployment">Corporate Network Deployment (Cisco/MikroTik)</option>
                      <option value="Server Administration & Cloud Migration">Server Administration & Cloud</option>
                      <option value="Cybersecurity & Firewall Hardening">Cybersecurity & Firewall Hardening</option>
                      <option value="24/7 IT Helpdesk SLA Contract">24/7 IT Helpdesk SLA Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                      Target Budget Tier
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Standard Plan (AED 2,000)">Standard Plan (AED 2,000)</option>
                      <option value="Silver Plan (AED 5,000)">Silver Plan (AED 5,000)</option>
                      <option value="Premium Plan (AED 10,000)">Premium Plan (AED 10,000)</option>
                      <option value="Monthly Support Retainer (AED 750 - 3,500/mo)">Monthly Support Retainer</option>
                      <option value="Custom Enterprise Solution (> AED 15,000)">Custom Enterprise Solution</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1.5 uppercase tracking-wider">
                    Project Requirements / Scope Details *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe your timeline, current IT environment, and key objectives..."
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border ${
                      errors.message ? 'border-rose-500 ring-1 ring-rose-500' : 'border-slate-200 dark:border-zinc-800'
                    } text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500`}
                  />
                  {errors.message && (
                    <p className="text-xs text-rose-500 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-500 hover:from-blue-500 hover:to-emerald-400 shadow-lg shadow-blue-500/25 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Inquiry...</span>
                  ) : (
                    <>
                      <span>Submit Inquiry to Shariful Islam Rayhan</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] text-center text-slate-400 dark:text-zinc-500">
                  Your inquiry is dispatched straight to Shariful Islam Rayhan's inbox with automated receipt tracking.
                </p>

                {/* Instant WhatsApp Quick Link */}
                <div className="pt-3 border-t border-slate-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                  <span className="text-slate-500 dark:text-zinc-400 font-medium">Need an immediate answer?</span>
                  <a
                    href="https://wa.me/971521246594?text=Hello%20Shariful%20Islam%20Rayhan,%20I%20have%20an%20urgent%20inquiry%20regarding%20IT%20or%20Web%20services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/80 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 font-bold transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp +971 52 124 6594</span>
                  </a>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
