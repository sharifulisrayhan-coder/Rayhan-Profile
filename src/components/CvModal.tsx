import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, WORK_EXPERIENCE, SKILL_CATEGORIES } from '../data/portfolioData';
import { X, Download, Printer, CheckCircle2, Award, Briefcase, GraduationCap, MapPin, Mail, Phone, ExternalLink, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CANDIDATE_PHOTO_URLS, getStoredRayhanPhoto } from '../utils/photoManager';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal: React.FC<CvModalProps> = ({ isOpen, onClose }) => {
  const [photoSrc, setPhotoSrc] = useState<string | null>(getStoredRayhanPhoto());
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoSrc(customEvent.detail);
        setImgFailed(false);
      }
    };
    window.addEventListener('rayhan-photo-updated', handleSync);
    return () => window.removeEventListener('rayhan-photo-updated', handleSync);
  }, []);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const activeSrc = photoSrc || CANDIDATE_PHOTO_URLS[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm print:hidden"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl max-h-[92vh] rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl z-10 flex flex-col overflow-hidden my-4 print:max-h-none print:shadow-none print:border-none print:rounded-none"
        >
          {/* Header Bar */}
          <div className="p-4 sm:p-5 bg-slate-100 dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between shrink-0 print:hidden">
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="font-bold text-sm sm:text-base text-slate-900 dark:text-zinc-100">
                Shariful Islam Rayhan — Official Curriculum Vitae
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-700 dark:text-zinc-200 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 hover:bg-slate-50 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / Save as PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-zinc-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* CV Content Area */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-8">
            
            {/* CV Header */}
            <div className="border-b border-slate-200 dark:border-zinc-800 pb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  {/* Portrait Thumbnail */}
                  <div className="w-16 h-20 sm:w-20 sm:h-24 rounded-2xl overflow-hidden bg-zinc-900 border-2 border-blue-500/40 shrink-0 shadow-md">
                    {!imgFailed ? (
                      <img
                        src={activeSrc}
                        alt={PERSONAL_INFO.name}
                        onError={() => setImgFailed(true)}
                        className="w-full h-full object-cover object-top"
                        referrerPolicy="no-referrer"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-800 text-zinc-400">
                        <User className="w-8 h-8" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50">
                      {PERSONAL_INFO.name}
                    </h1>
                    <p className="text-base font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {PERSONAL_INFO.title}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 mt-0.5">
                      Currently: {PERSONAL_INFO.company} • Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>

                <div className="text-xs space-y-1 sm:text-right text-slate-600 dark:text-zinc-400">
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-blue-500" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center sm:justify-end gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                    <span>Dubai, United Arab Emirates</span>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                  Professional Experience
                </h3>
              </div>

              <div className="space-y-6">
                {WORK_EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-5 border-l-2 border-blue-500/40 space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-zinc-100">
                        {exp.role}
                      </h4>
                      <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-xs font-medium text-slate-700 dark:text-zinc-300">
                      {exp.company} — {exp.location}
                    </p>

                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-1 mt-2">
                      {exp.highlights.map((item, i) => (
                        <li key={i} className="text-xs text-slate-600 dark:text-zinc-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Matrix */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                  Technical Core Competencies
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 mb-2 uppercase text-blue-600 dark:text-blue-400">
                    Web & Software Engineering
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    React, Next.js (App Router, SSR), TypeScript, JavaScript (ESNext), Node.js, Express, Tailwind CSS, WordPress/WooCommerce, RESTful APIs, PostgreSQL, Redis.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 mb-2 uppercase text-emerald-600 dark:text-emerald-400">
                    Enterprise IT & Infrastructure
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    Cisco Routing & Switching, MikroTik RouterOS, Site-to-Site IPsec VPN, FortiGate Next-Gen Firewalls, Windows Server 2022/2019, Active Directory, Cloud (AWS, Azure), VMware ESXi.
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications & Education */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                    Certifications & Credentials
                  </h3>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-300">
                  <li>• Cisco Certified Network Associate (CCNA Routing & Switching)</li>
                  <li>• MikroTik Certified Network Associate (MTCNA)</li>
                  <li>• Microsoft Certified: Windows Server & Active Directory Infrastructure</li>
                  <li>• Advanced Full-Stack Web Development & Modern Architecture</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 uppercase tracking-wider">
                    Education & Languages
                  </h3>
                </div>
                <div className="text-xs text-slate-600 dark:text-zinc-300 space-y-1">
                  <p className="font-semibold text-slate-800 dark:text-zinc-200">
                    Bachelor of Science in Computer Science & Information Technology
                  </p>
                  <p>Languages: English (Professional Working), Arabic (Basic Corporate), Bengali (Native)</p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
