import React from 'react';

interface RayhanPortraitFallbackProps {
  className?: string;
  onSelectPhoto?: () => void;
}

export const RayhanPortraitFallback: React.FC<RayhanPortraitFallbackProps> = ({ 
  className = "w-full h-full",
  onSelectPhoto 
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-end overflow-hidden bg-gradient-to-b from-slate-800 via-zinc-900 to-black ${className}`}>
      {/* Subtle interior lighting backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.15),transparent_70%)]" />
      <div className="absolute top-6 left-4 right-4 h-32 border-b border-zinc-800/40" />

      {/* Styled Vector Silhouette of Shariful Islam Rayhan in Black Suit with Glasses */}
      <svg
        viewBox="0 0 240 320"
        className="w-full h-full object-contain relative z-10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ambient room glow */}
        <ellipse cx="120" cy="90" rx="70" ry="60" fill="#3b82f6" fillOpacity="0.08" />

        {/* Shoulders & Black Suit Jacket */}
        <path
          d="M30 320 C32 230 55 190 85 170 L105 160 L120 185 L135 160 L155 170 C185 190 208 230 210 320 Z"
          fill="#111317"
        />
        {/* Suit Lapels & Shoulders Shading */}
        <path
          d="M85 170 L102 245 L120 270 L138 245 L155 170 L140 162 L120 185 L100 162 Z"
          fill="#181a20"
        />
        <path
          d="M50 320 L75 210 L102 245 L90 320 Z"
          fill="#0c0d10"
        />
        <path
          d="M190 320 L165 210 L138 245 L150 320 Z"
          fill="#0c0d10"
        />

        {/* Crisp White Shirt (V-neck collar) */}
        <path
          d="M102 160 L120 220 L138 160 L130 145 L110 145 Z"
          fill="#ffffff"
        />
        <path
          d="M115 155 L120 175 L125 155 Z"
          fill="#f1f5f9"
        />
        <line x1="120" y1="175" x2="120" y2="220" stroke="#cbd5e1" strokeWidth="1.5" />

        {/* Neck */}
        <path
          d="M106 125 L106 150 L120 155 L134 150 L134 125 Z"
          fill="#cda588"
        />
        <path
          d="M106 138 C112 144 128 144 134 138 L134 150 L120 155 L106 150 Z"
          fill="#b88f72"
        />

        {/* Head / Face Base */}
        <ellipse cx="120" cy="100" rx="32" ry="38" fill="#d9b496" />

        {/* Groomed Dark Beard & Mustache */}
        <path
          d="M94 98 C94 128 102 142 120 142 C138 142 146 128 146 98 C146 92 143 88 140 92 C137 114 133 130 120 130 C107 130 103 114 100 92 C97 88 94 92 94 98 Z"
          fill="#171717"
        />
        {/* Mustache */}
        <path
          d="M107 112 C113 109 118 111 120 114 C122 111 127 109 133 112 C135 116 130 120 120 121 C110 120 105 116 107 112 Z"
          fill="#141414"
        />

        {/* Wavy Styled Black Hair */}
        <path
          d="M87 90 C84 66 98 48 120 48 C142 48 156 66 153 90 C151 78 142 62 120 62 C98 62 89 78 87 90 Z"
          fill="#121212"
        />
        <path
          d="M92 78 C95 62 108 52 120 52 C132 52 145 62 148 78 C143 70 133 66 120 66 C107 66 97 70 92 78 Z"
          fill="#1f1f1f"
        />

        {/* Modern Black Spectacles / Glasses */}
        <rect x="99" y="88" width="18" height="12" rx="2.5" stroke="#09090b" strokeWidth="2.5" fill="none" />
        <rect x="123" y="88" width="18" height="12" rx="2.5" stroke="#09090b" strokeWidth="2.5" fill="none" />
        <line x1="117" y1="92" x2="123" y2="92" stroke="#09090b" strokeWidth="2" />
        <line x1="94" y1="91" x2="99" y2="92" stroke="#09090b" strokeWidth="1.5" />
        <line x1="141" y1="92" x2="146" y2="91" stroke="#09090b" strokeWidth="1.5" />
        
        {/* Subtle glasses lens reflection */}
        <line x1="102" y1="97" x2="108" y2="91" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="126" y1="97" x2="132" y2="91" stroke="#60a5fa" strokeWidth="1" strokeOpacity="0.4" />

        {/* Confident expression eyes */}
        <ellipse cx="108" cy="94" rx="2" ry="1.5" fill="#2d1e18" />
        <ellipse cx="132" cy="94" rx="2" ry="1.5" fill="#2d1e18" />

        {/* Subtle eyebrows */}
        <path d="M102 85 Q108 83 114 85" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
        <path d="M126 85 Q132 83 138 85" stroke="#1c1917" strokeWidth="2" strokeLinecap="round" />
      </svg>

      {/* Floating Tag or Photo Selector */}
      <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-center z-20 flex flex-col items-center gap-1">
        <p className="text-[11px] font-bold text-slate-100">Shariful Islam Rayhan</p>
        {onSelectPhoto && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onSelectPhoto();
            }}
            className="w-full py-1.5 px-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-bold shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>Upload Rayhan.jpg (Suit Photo)</span>
          </button>
        )}
      </div>
    </div>
  );
};
