import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  Building2, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Facebook, 
  Instagram,
  ArrowUpRight,
  Camera
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { RayhanPortraitFallback } from './RayhanPortraitFallback';
import { getStoredRayhanPhoto, saveRayhanPhoto } from '../utils/photoManager';

interface IntroPortraitCardProps {
  className?: string;
}

// Fallback photo URLs to cycle through
const FIXED_RAYHAN_PHOTOS = [
  '/Rayhan.jpg',
  '/rayhan.jpg',
  '/profile.jpg'
];

export const IntroPortraitCard: React.FC<IntroPortraitCardProps> = ({ 
  className = "" 
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [currentSrc, setCurrentSrc] = useState<string>(() => {
    return getStoredRayhanPhoto() || '/Rayhan.jpg';
  });
  const [photoCandidateIndex, setPhotoCandidateIndex] = useState(0);
  const [hasFailed, setHasFailed] = useState(false);

  // Synchronize on mount and listen to updates
  useEffect(() => {
    const stored = getStoredRayhanPhoto();
    if (stored) {
      setCurrentSrc(stored);
      setHasFailed(false);

      // Auto-sync stored base64 with server disk if not already present
      fetch('/api/photo-status')
        .then(res => res.json())
        .then(data => {
          if (!data.exists) {
            saveRayhanPhoto(stored);
          }
        })
        .catch(() => {});
    }

    const handlePhotoUpdated = (e: any) => {
      if (e.detail) {
        setCurrentSrc(e.detail);
        setHasFailed(false);
      }
    };

    window.addEventListener('rayhan-photo-updated', handlePhotoUpdated);
    return () => window.removeEventListener('rayhan-photo-updated', handlePhotoUpdated);
  }, []);

  const handleImageError = () => {
    // If current source was a stored photo or /Rayhan.jpg, cycle through candidate paths
    if (photoCandidateIndex < FIXED_RAYHAN_PHOTOS.length) {
      const nextCandidate = FIXED_RAYHAN_PHOTOS[photoCandidateIndex];
      setPhotoCandidateIndex(prev => prev + 1);
      if (nextCandidate !== currentSrc) {
        setCurrentSrc(nextCandidate);
        return;
      }
    }
    setHasFailed(true);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setCurrentSrc(dataUrl);
        setHasFailed(false);
        await saveRayhanPhoto(dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  // Social media and contact channels
  const socialChannels = [
    {
      name: 'LinkedIn',
      url: PERSONAL_INFO.linkedin,
      icon: Linkedin,
      label: 'LinkedIn Profile',
      colorClass: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
      isExternal: true,
    },
    {
      name: 'GitHub',
      url: PERSONAL_INFO.github,
      icon: Github,
      label: 'GitHub Code',
      colorClass: 'hover:bg-slate-900 hover:text-white dark:hover:bg-zinc-700 hover:border-slate-900',
      isExternal: true,
    },
    {
      name: 'Facebook',
      url: PERSONAL_INFO.facebook || 'https://facebook.com',
      icon: Facebook,
      label: 'Facebook Profile',
      colorClass: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
      isExternal: true,
    },
    {
      name: 'Instagram',
      url: PERSONAL_INFO.instagram || 'https://instagram.com',
      icon: Instagram,
      label: 'Instagram Profile',
      colorClass: 'hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:text-white hover:border-pink-500',
      isExternal: true,
    },
    {
      name: 'Email',
      url: `mailto:${PERSONAL_INFO.email}`,
      icon: Mail,
      label: 'Send Email',
      colorClass: 'hover:bg-blue-600 hover:text-white hover:border-blue-600',
      isExternal: false,
    },
    {
      name: 'Call',
      url: `tel:${PERSONAL_INFO.phone}`,
      icon: Phone,
      label: 'Direct Phone',
      colorClass: 'hover:bg-emerald-600 hover:text-white hover:border-emerald-600',
      isExternal: false,
    },
  ];

  return (
    <div 
      className={`relative rounded-3xl p-3.5 sm:p-4 bg-gradient-to-b from-slate-100 via-white to-slate-200 dark:from-zinc-800 dark:via-zinc-850 dark:to-zinc-900 border border-slate-200 dark:border-zinc-750 shadow-xl overflow-hidden ${className}`}
    >
      {/* Hidden File Input for Shariful to pick / upload Rayhan.jpg */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="image/*" 
        className="hidden" 
      />

      {/* Fixed Portrait Frame (3:4 ratio) */}
      <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-zinc-950 border border-slate-200 dark:border-zinc-700/80 shadow-inner group">
        {!hasFailed ? (
          <img
            src={currentSrc}
            onError={handleImageError}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover object-top transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
        ) : (
          <RayhanPortraitFallback 
            className="w-full h-full" 
            onSelectPhoto={() => fileInputRef.current?.click()} 
          />
        )}

        {/* Ambient Dark Gradient for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

        {/* Top Badges & Photo Selector */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Dubai, UAE</span>
          </div>

          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-600/80 backdrop-blur-md border border-blue-400/30 text-white text-[10px] font-bold">
              <Building2 className="w-3 h-3" />
              <span>ICT International</span>
            </div>

            {/* Discreet Photo Update Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              title="Upload / Change Portrait (Rayhan.jpg)"
              className="p-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white/80 hover:text-emerald-400 transition-all cursor-pointer shadow-sm"
              aria-label="Upload photo"
            >
              <Camera className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Identification */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10 text-white">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Senior IT Professional</span>
          </div>
          <h4 className="text-xl font-extrabold tracking-tight text-white leading-tight">
            {PERSONAL_INFO.name}
          </h4>
          <p className="text-xs text-slate-200 font-medium mt-0.5">
            {PERSONAL_INFO.company} — Dubai Operations
          </p>
        </div>
      </div>

      {/* Primary Action: Direct WhatsApp */}
      <div className="mt-3">
        <a
          href={PERSONAL_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.99] cursor-pointer group"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>Chat on WhatsApp</span>
          <span className="text-[11px] opacity-90 font-normal">({PERSONAL_INFO.phoneFormatted})</span>
        </a>
      </div>

      {/* Social Media & Direct Channels Section */}
      <div className="mt-3.5 pt-3 border-t border-slate-200/80 dark:border-zinc-800">
        <div className="flex items-center justify-between mb-2.5 px-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-zinc-400">
            Social & Connect Channels
          </span>
          <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
            Direct Access
          </span>
        </div>

        {/* 6-Channel Grid */}
        <div className="grid grid-cols-3 gap-2">
          {socialChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.name}
                href={channel.url}
                target={channel.isExternal ? "_blank" : undefined}
                rel={channel.isExternal ? "noopener noreferrer" : undefined}
                title={channel.label}
                aria-label={channel.label}
                className={`flex flex-col items-center justify-center py-2 px-1.5 rounded-xl border border-slate-200/80 dark:border-zinc-700/80 bg-white dark:bg-zinc-800/70 text-slate-700 dark:text-zinc-300 text-[11px] font-semibold transition-all shadow-sm active:scale-95 group cursor-pointer ${channel.colorClass}`}
              >
                <div className="flex items-center gap-0.5">
                  <Icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  {channel.isExternal && (
                    <ArrowUpRight className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100" />
                  )}
                </div>
                <span className="text-[10px] mt-1 font-medium tracking-tight">
                  {channel.name}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
