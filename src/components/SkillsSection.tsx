import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import {
  Code2,
  FileCode,
  Server,
  Palette,
  Globe,
  Cpu,
  Network,
  HardDrive,
  Cloud,
  ShieldCheck,
  Wrench,
  Database,
  CheckCircle2,
  Layers,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Code2': return <Code2 className="w-5 h-5" />;
      case 'FileCode': return <FileCode className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Network': return <Network className="w-5 h-5" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5" />;
      case 'Cloud': return <Cloud className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      case 'Database': return <Database className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Comprehensive Skills & Tech Stack
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            A dual competency combining modern software engineering with enterprise IT infrastructure and network security.
          </p>

          {/* Interactive Category Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 max-w-md mx-auto">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.category}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === idx
                    ? 'bg-white dark:bg-zinc-800 text-blue-600 dark:text-blue-400 shadow-sm'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat.category.split('&')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6 text-center max-w-xl mx-auto">
              <p className="text-sm text-slate-500 dark:text-zinc-400">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group relative p-6 rounded-2xl bg-white dark:bg-[#121217] border border-slate-200/80 dark:border-zinc-800/80 shadow-xs hover:shadow-lg hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {getIcon(skill.iconName)}
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-zinc-800/80 text-[11px] font-semibold text-slate-600 dark:text-zinc-300">
                      {skill.experience}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 mb-2">
                    {skill.name}
                  </h3>

                  {/* Proficiency Bar */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-500 dark:text-zinc-400">Proficiency</span>
                      <span className="font-semibold text-slate-900 dark:text-zinc-200">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-zinc-800 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-400 transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Skill Sub-Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100 dark:border-zinc-800/60">
                    {skill.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-50 dark:bg-zinc-900 text-slate-600 dark:text-zinc-400 border border-slate-200/60 dark:border-zinc-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
