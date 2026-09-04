import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, MapPin, Building2, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white dark:bg-[#09090b] border-t border-slate-200 dark:border-zinc-800/80 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200/80 dark:border-zinc-800/80">
          
          {/* Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-emerald-500 p-[2px]">
                <div className="w-full h-full bg-white dark:bg-zinc-950 rounded-[10px] flex items-center justify-center font-bold text-lg text-blue-600 dark:text-blue-400">
                  SR
                </div>
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-zinc-100">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed max-w-sm">
              Empowering businesses across Dubai and the UAE with high-performance web engineering, corporate network architectures, and 24/7 mission-critical IT infrastructure.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Leading IT Operations at ICT International LLC (Dubai, UAE)</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-100 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              <li>
                <a href="#hero" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About & Background
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Skills & Tech Stack
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Case Studies */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-100 mb-4">
              Case Studies
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  WAMCH Medical Center Portal
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  ICT International Corporate
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Al-Sahra Gadgets Platform
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Business Bay Enterprise Network
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-100 mb-4">
              Connect & Verify
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
              <li>
                <a
                  href={PERSONAL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  <span>WhatsApp: {PERSONAL_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {PERSONAL_INFO.email}
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  <span>GitHub Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Professional Polish Highlight Banner */}
        <div className="my-8 py-3.5 px-6 rounded-2xl border border-slate-200 dark:border-zinc-800 bg-slate-50/80 dark:bg-zinc-900/30 backdrop-blur-sm flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">FEATURED SOLUTION:</span>
            <span className="text-slate-700 dark:text-zinc-300 font-medium">Enterprise Cloud Infrastructure & Hybrid AD Systems</span>
          </div>
          <div className="flex items-center space-x-3">
            <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-bold uppercase tracking-wider">SERVICE MODEL:</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">On-Site Dubai & Remote Global</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
          <p>
            &copy; {new Date().getFullYear()} Shariful Islam Rayhan. All rights reserved. Operating in Dubai, United Arab Emirates.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-300 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
