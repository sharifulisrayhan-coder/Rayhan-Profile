import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  FolderKanban, 
  ExternalLink, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Layers,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsSectionProps {
  onInquireProject: (projectTitle: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onInquireProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Web Development', 'IT Infrastructure', 'Enterprise Solutions'];

  const filteredProjects = selectedCategory === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            Featured Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Proven Track Record & Enterprise Deployments
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Delivering mission-critical web platforms, AI integrations, and enterprise IT network backbones across Dubai.
          </p>

          {/* Filter Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                    : 'bg-slate-100 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 border border-slate-200 dark:border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-zinc-700 dark:hover:border-zinc-700 transition-all duration-300"
              >
                {/* Project Image Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                  <img
                    src={project.featuredImage}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

                  {/* Badges on Image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600/90 text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-black/60 text-white backdrop-blur-md border border-white/10">
                      {project.location}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <span className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider block">
                      {project.client}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-white drop-shadow-xs">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed line-clamp-3 mb-5">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200/80 dark:border-zinc-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 rounded-md text-[11px] font-medium text-slate-400 dark:text-zinc-500">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 cursor-pointer"
                    >
                      <FileText className="w-4 h-4" />
                      <span>View Full Case Study</span>
                    </button>

                    {project.liveUrl && project.liveUrl !== '#' ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
                      >
                        <span>Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <span className="text-[11px] font-medium text-slate-400 dark:text-zinc-500">
                        Enterprise Internal
                      </span>
                    )}
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
        onInquire={(title) => onInquireProject(title)}
      />
    </section>
  );
};
