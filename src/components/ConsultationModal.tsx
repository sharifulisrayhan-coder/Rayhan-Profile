import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Calendar, Clock, Video, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [topic, setTopic] = useState('Enterprise IT Infrastructure & Audit');
  const [preferredDate, setPreferredDate] = useState('2026-09-08');
  const [preferredTime, setPreferredTime] = useState('11:00 AM (GST)');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 z-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-zinc-800 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {!confirmed ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
                    Schedule 1-on-1 Consultation
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-zinc-400">
                    Complimentary 30-min Technical Discovery Call
                  </p>
                </div>
              </div>

              <form onSubmit={handleBook} className="space-y-4 mt-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1 uppercase tracking-wider">
                    Primary Discussion Focus
                  </label>
                  <select
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Enterprise IT Infrastructure & Audit">Corporate IT & Network Infrastructure</option>
                    <option value="Modern Web Platform & Next.js Revamp">Modern Web Platform & Next.js Architecture</option>
                    <option value="Healthcare / Clinic Web Portal (WAMCH style)">Healthcare / Medical Portal Solutions</option>
                    <option value="Firewall, VPN & Cybersecurity Hardening">Firewall, VPN & Cybersecurity</option>
                    <option value="Cloud Migration (AWS/Azure) & DevOps">Cloud Migration & DevOps</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1 uppercase tracking-wider">
                      Target Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1 uppercase tracking-wider">
                      Target Time (UAE Time)
                    </label>
                    <select
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100"
                    >
                      <option value="10:00 AM (GST)">10:00 AM (GST)</option>
                      <option value="11:30 AM (GST)">11:30 AM (GST)</option>
                      <option value="02:00 PM (GST)">02:00 PM (GST)</option>
                      <option value="04:30 PM (GST)">04:30 PM (GST)</option>
                      <option value="06:00 PM (GST)">06:00 PM (GST)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1 uppercase tracking-wider">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Salim Al-Nuaimi"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-zinc-300 mb-1 uppercase tracking-wider">
                    WhatsApp or Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +971 50 987 6543"
                    className="w-full px-3.5 py-2.5 rounded-xl text-sm bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 active:scale-98 transition-all cursor-pointer"
                  >
                    Confirm Consultation Request
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-zinc-100">
                Consultation Request Received!
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-sm mx-auto">
                Thank you, <strong>{fullName}</strong>. Shariful will send a Google Meet link and confirmation for <strong>{preferredDate} at {preferredTime}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/971521246594?text=Hello%20Shariful,%20I%20have%20scheduled%20a%20consultation%20on%20${preferredDate}%20for%20${encodeURIComponent(topic)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Notify Shariful on WhatsApp</span>
                </a>

                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  Done
                </button>
              </div>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
