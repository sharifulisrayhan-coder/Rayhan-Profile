import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sun, Moon, Menu, X, ArrowRight, Shield, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'services', 'projects', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-zinc-900/40 backdrop-blur-md shadow-sm border-b border-slate-200/80 dark:border-zinc-800 py-3'
          : 'bg-white/60 dark:bg-[#09090b]/40 backdrop-blur-sm border-b border-slate-200/50 dark:border-zinc-800/60 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#hero');
            }}
            className="group flex items-center gap-2.5"
          >
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center font-bold text-white text-[11px] shadow-sm tracking-tighter">
              SIR
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-semibold tracking-tight uppercase text-slate-900 dark:text-zinc-100 group-hover:text-blue-500 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="hidden sm:inline-block text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                Dubai, UAE
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-zinc-400">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`transition-colors duration-150 cursor-pointer ${
                    isActive
                      ? 'text-blue-600 dark:text-blue-400 font-semibold'
                      : 'hover:text-slate-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Theme Switcher */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              className="p-2 rounded-full border border-slate-200 dark:border-zinc-800 bg-slate-100 dark:bg-zinc-900 cursor-pointer text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 transition-colors"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-blue-600 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Hire Me CTA */}
            <button
              onClick={() => scrollToSection('#contact')}
              className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold py-2 px-5 rounded-full uppercase tracking-wider transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>

            {/* Mobile Hamburger */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
                className="p-2 rounded-lg text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#09090b]/95 backdrop-blur-xl border-b border-slate-200 dark:border-zinc-800 px-4 pt-3 pb-6 shadow-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors text-left"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400 dark:text-zinc-500" />
                </button>
              ))}

              <div className="pt-3 border-t border-slate-200 dark:border-zinc-800 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800"
                >
                  Schedule Consultation
                </button>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full py-3 px-4 rounded-xl text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20"
                >
                  Hire Me Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
