import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowRight, Calendar, Download, ShieldCheck, MapPin, Terminal, ExternalLink, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenCv: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenCv }) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] pt-32 pb-20 flex items-center justify-center overflow-hidden"
    >
      {/* Mesh gradient background */}
      <div className="absolute inset-0 pointer-events-none opacity-80 dark:opacity-100 mesh-gradient-light dark:mesh-gradient-dark"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center w-full"
        >
          {/* Status Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Senior IT Infrastructure & Full-Stack Web Specialist</span>
          </div>

          {/* High-Impact Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white mb-6 max-w-4xl">
            Empowering Businesses through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
              Modern Engineering
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-slate-600 dark:text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed mb-8">
            I'm <strong className="text-slate-900 dark:text-zinc-100 font-semibold">{PERSONAL_INFO.name}</strong>, Senior IT Professional leading operations at <strong className="text-slate-900 dark:text-zinc-100 font-semibold">ICT International LLC</strong> in Dubai. Specializing in cloud systems, full-stack web development, and enterprise IT infrastructure.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
            {/* View Work */}
            <button
              onClick={scrollToProjects}
              className="px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-black dark:hover:bg-zinc-200 font-bold rounded-xl flex items-center gap-2 transition-colors shadow-sm cursor-pointer text-sm"
            >
              <span>View Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Schedule Consultation */}
            <button
              onClick={onOpenConsultation}
              className="px-7 py-3.5 border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900/50 text-slate-800 dark:text-white font-bold rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer text-sm"
            >
              Schedule Call
            </button>

            {/* Download CV */}
            <button
              onClick={onOpenCv}
              className="px-5 py-3.5 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 font-semibold rounded-xl hover:bg-slate-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer text-sm flex items-center gap-1.5"
            >
              <Download className="w-4 h-4 text-emerald-500" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Stats row */}
          <div className="flex items-center justify-center space-x-8 sm:space-x-16 pt-8 border-t border-slate-200 dark:border-zinc-800/60 max-w-xl w-full">
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">6+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500 mt-0.5">Years Exp</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">80+</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500 mt-0.5">Projects Done</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">100%</span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500 mt-0.5">Client Success</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
