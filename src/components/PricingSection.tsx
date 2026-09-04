import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/portfolioData';
import { PricingPlan } from '../types';
import { Check, Sparkles, ArrowRight, ShieldCheck, HelpCircle, Clock, Zap } from 'lucide-react';
import { motion } from 'motion/react';

interface PricingSectionProps {
  onSelectPlan: (plan: PricingPlan, isMonthly: boolean) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'one-time' | 'monthly'>('one-time');

  return (
    <section id="pricing" className="py-20 relative bg-slate-50/50 dark:bg-zinc-950/50 border-y border-slate-200/60 dark:border-zinc-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-3">
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            Tailored Plans with Zero Hidden Costs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-400">
            Clear, value-driven investment models for businesses in Dubai and the GCC. Choose between project-based delivery or ongoing IT retainer support.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs sm:text-sm font-semibold ${billingCycle === 'one-time' ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 dark:text-zinc-400'}`}>
              One-Time Project
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'one-time' ? 'monthly' : 'one-time')}
              role="switch"
              aria-checked={billingCycle === 'monthly'}
              aria-label="Toggle between one-time and monthly support billing"
              className="relative w-14 h-7 rounded-full bg-slate-200 dark:bg-zinc-800 p-1 transition-colors cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full bg-blue-600 shadow-md transition-transform duration-200 ${
                  billingCycle === 'monthly' ? 'translate-x-7 bg-emerald-500' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center gap-1.5">
              <span className={`text-xs sm:text-sm font-semibold ${billingCycle === 'monthly' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-500 dark:text-zinc-400'}`}>
                Monthly Retainer Support
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300">
                Continuous SLA
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'one-time' ? plan.oneTimeAed : plan.monthlyAed;
            const periodLabel = billingCycle === 'one-time' ? 'per project' : '/month';

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white dark:bg-zinc-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/10 lg:-translate-y-2'
                    : 'bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-extrabold text-slate-900 dark:text-zinc-50">
                      {plan.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                      {plan.idealFor}
                    </span>
                  </div>

                  {/* Price display */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs font-bold text-slate-500 dark:text-zinc-400">AED</span>
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
                        {price.toLocaleString()}
                      </span>
                      <span className="text-xs sm:text-sm font-medium text-slate-500 dark:text-zinc-400">
                        {periodLabel}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  {/* Delivery / Timeline */}
                  <div className="flex items-center gap-2 py-2.5 px-3 rounded-xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/60 dark:border-zinc-800/60 text-xs font-medium text-slate-700 dark:text-zinc-300 mb-6">
                    <Clock className="w-4 h-4 text-blue-500 shrink-0" />
                    <span>Estimated Timeline: {plan.deliveryTime}</span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 block">
                      Included Deliverables
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Plan Selection CTA */}
                <button
                  onClick={() => onSelectPlan(plan, billingCycle === 'monthly')}
                  className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 active:scale-98'
                      : 'bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-900 dark:text-zinc-100 border border-slate-200 dark:border-zinc-700 active:scale-98'
                  }`}
                >
                  <span>Choose {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Custom enterprise inquiry banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-blue-600/5 dark:bg-blue-950/20 border border-blue-200/60 dark:border-blue-900/40 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-zinc-100">
              Need a Custom Corporate IT Architecture or Multi-Year Contract?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1">
              Custom scope for large-scale enterprise server migrations, data center setups, and high-concurrency cloud systems.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-sm"
          >
            Request Custom Quotation
          </a>
        </div>

      </div>
    </section>
  );
};
