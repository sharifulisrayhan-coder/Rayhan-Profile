import React from 'react';
import { Project } from '../types';
import { X, ExternalLink, MapPin, Building, CheckCircle2, Shield, Calendar, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#121217] border border-slate-200 dark:border-zinc-800 shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Modal Header with Project Image Banner */}
          <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-slate-900">
            <img
              src={project.featuredImage}
              alt={project.title}
              className="w-full h-full object-cover object-center brightness-90"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black/80 text-white backdrop-blur-md transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* In-banner Title & Category */}
            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                  {project.category}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/20 text-white backdrop-blur-md">
                  {project.status}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Body: Scrollable Content */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
            
            {/* Meta bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/70 border border-slate-200/60 dark:border-zinc-800/60 text-xs">
              <div>
                <span className="text-slate-400 dark:text-zinc-500 font-medium block">Client</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">{project.client}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-zinc-500 font-medium block">Location</span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">{project.location}</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="text-slate-400 dark:text-zinc-500 font-medium block">Live Project</span>
                {project.liveUrl && project.liveUrl !== '#' ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-bold hover:underline"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="font-semibold text-slate-600 dark:text-zinc-400">Enterprise Network</span>
                )}
              </div>
            </div>

            {/* Overview */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Executive Overview
              </h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40">
                <h5 className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-1.5">
                  The Challenge
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-900/40">
                <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1.5">
                  The Engineering Solution
                </h5>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Deliverables / Results */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-zinc-100 mb-3">
                Key Quantifiable Results
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2">
                Technologies & Tools Implemented
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Footer inside Modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <span>Request Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-600 dark:text-zinc-400 hover:bg-slate-100 dark:hover:bg-zinc-800 cursor-pointer"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
