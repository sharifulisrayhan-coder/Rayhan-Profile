import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, Network, Server, Cloud, ShieldCheck, CheckCircle } from 'lucide-react';
import { IntroPortraitCard } from './IntroPortraitCard';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            Executive Introduction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Meet Shariful Islam Rayhan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed">
            Senior IT Professional and Operations Lead heading enterprise infrastructure, multi-site network architectures, and modern full-stack web engineering at ICT International LLC in Dubai, UAE.
          </p>
        </div>

        {/* Executive Highlight & Intro Portrait Container */}
        <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xl mb-14">
          <div className="p-6 sm:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Executive Portrait of Shariful Islam Rayhan */}
              <div className="lg:col-span-5 xl:col-span-4 flex justify-center">
                <div className="w-full max-w-sm">
                  <IntroPortraitCard />
                </div>
              </div>

              {/* Executive Bio and Operational Details */}
              <div className="lg:col-span-7 xl:col-span-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    Current Position
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-zinc-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    Dubai, United Arab Emirates
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-zinc-50 tracking-tight mb-2">
                  IT Professional & Operations Lead
                </h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400 mb-4">
                  ICT International LLC — Dubai, UAE
                </p>

                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                  Spearheading enterprise IT operations, mission-critical infrastructure architecture, corporate network reliability, and modern full-stack web applications. Delivering uninterrupted connectivity, automated failover systems, and digitized workflow platforms for commercial partners across the GCC.
                </p>

                {/* 4 Core Focus Areas */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                    <Network className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100">Corporate Network Deployment</h4>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400">Cisco, MikroTik, multi-site VPN, VLANs</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                    <Server className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100">Server Administration</h4>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400">Windows Server, Linux, Active Directory</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                    <Cloud className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100">Cloud Integrations & Hosting</h4>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400">AWS, Azure, Docker, Cloudflare, CDN</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60">
                    <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100">Enterprise IT Support</h4>
                      <p className="text-[11px] text-slate-500 dark:text-zinc-400">Hardware rollouts, SLA defense, Helpdesk</p>
                    </div>
                  </div>
                </div>

                {/* Key Metrics Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {PERSONAL_INFO.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-750 text-center"
                    >
                      <p className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                        {stat.value}
                      </p>
                      <p className="text-xs font-semibold text-slate-800 dark:text-zinc-200 mt-0.5">
                        {stat.label}
                      </p>
                      <p className="text-[10px] text-slate-500 dark:text-zinc-400">
                        {stat.subtext}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-zinc-400 font-medium">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    24/7 SLA Support
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    UAE Regulatory Compliance
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    High-Security Standards
                  </span>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
