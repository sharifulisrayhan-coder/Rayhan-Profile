import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { AIChatWidget } from './components/AIChatWidget';
import { ConsultationModal } from './components/ConsultationModal';
import { CvModal } from './components/CvModal';
import { Footer } from './components/Footer';
import { PricingPlan } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>('Standard Plan (AED 2,000)');
  const [selectedType, setSelectedType] = useState<string>('Full-Stack Web Development');

  const handleSelectPlan = (plan: PricingPlan, isMonthly: boolean) => {
    const planText = isMonthly 
      ? `${plan.name} Monthly Support (AED ${plan.monthlyAed.toLocaleString()}/mo)`
      : `${plan.name} (AED ${plan.oneTimeAed.toLocaleString()})`;
    setSelectedPlan(planText);
    
    // Scroll to contact section
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedType(serviceName);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInquireProject = (projectTitle: string) => {
    setSelectedType(`Similar to ${projectTitle}`);
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f8fafc] dark:bg-[#09090b] text-slate-900 dark:text-zinc-100 selection:bg-blue-500/30 selection:text-white transition-colors duration-300 relative">
        
        {/* Top Navbar */}
        <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

        <main>
          {/* Hero Section */}
          <Hero 
            onOpenConsultation={() => setIsConsultationOpen(true)} 
            onOpenCv={() => setIsCvOpen(true)} 
          />

          {/* Professional Background & Highlights */}
          <AboutSection />

          {/* Technical Skills & Dual Competency Grid */}
          <SkillsSection />

          {/* Services Offered */}
          <ServicesSection onSelectService={handleSelectService} />

          {/* Featured Case Studies / Projects */}
          <ProjectsSection onInquireProject={handleInquireProject} />

          {/* Transparent Service Packages & Pricing */}
          <PricingSection onSelectPlan={handleSelectPlan} />

          {/* Direct Inquiry & Contact */}
          <ContactSection 
            prefilledPlan={selectedPlan} 
            prefilledType={selectedType} 
          />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating AI Chatbot Widget */}
        <AIChatWidget />

        {/* Interactive Modals */}
        <ConsultationModal 
          isOpen={isConsultationOpen} 
          onClose={() => setIsConsultationOpen(false)} 
        />

        <CvModal 
          isOpen={isCvOpen} 
          onClose={() => setIsCvOpen(false)} 
        />

      </div>
    </ThemeProvider>
  );
}
