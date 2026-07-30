import React from 'react';
import { Droplets, Image as ImageIcon, Sparkles, Upload } from 'lucide-react';

interface ROImagePlaceholderProps {
  customImageUrl?: string;
  title?: string;
  category?: string;
  heightClass?: string;
  className?: string;
  badge?: string;
  onReplaceClick?: () => void;
}

export const ROImagePlaceholder: React.FC<ROImagePlaceholderProps> = ({
  customImageUrl,
  title = "RO Water Purifier",
  category = "RO Purifier Machine",
  heightClass = "h-64",
  className = "",
  badge,
  onReplaceClick
}) => {
  const [imgError, setImgError] = React.useState(false);

  // Helper to convert Google Drive sharing URL to direct image URL
  const processImageUrl = (url?: string) => {
    if (!url) return '';
    if (url.includes('drive.google.com/file/d/')) {
      const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match && match[1]) {
        return `https://lh3.googleusercontent.com/d/${match[1]}`;
      }
    }
    return url;
  };

  const finalSrc = processImageUrl(customImageUrl);

  if (finalSrc && finalSrc.trim() !== '' && !imgError) {
    return (
      <div className={`relative overflow-hidden rounded-2xl group ${className}`}>
        <img
          src={finalSrc}
          alt={title}
          referrerPolicy="no-referrer"
          onError={() => {
            // If primary Google Drive CDN fails, try alternative view export
            if (customImageUrl && customImageUrl.includes('drive.google.com')) {
              const match = customImageUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
              if (match && match[1]) {
                const altSrc = `https://drive.google.com/uc?export=view&id=${match[1]}`;
                if (finalSrc !== altSrc) {
                  // Retry with alt source
                  const img = new Image();
                  img.src = altSrc;
                  return;
                }
              }
            }
            setImgError(true);
          }}
          className={`w-full ${heightClass} object-contain transition-transform duration-500 group-hover:scale-105`}
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-[#00AEEF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {badge}
          </span>
        )}
        {onReplaceClick && (
          <button
            onClick={onReplaceClick}
            className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 hover:bg-[#00AEEF] text-white text-xs px-2.5 py-1.5 rounded-lg flex items-center gap-1 backdrop-blur-sm"
            title="Replace Image"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Change</span>
          </button>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full ${heightClass} rounded-2xl bg-gradient-to-br from-[#EAF9FF] via-white to-[#D0F2FF] border-2 border-dashed border-[#00AEEF]/40 flex flex-col items-center justify-center p-4 text-center group overflow-hidden transition-all duration-300 hover:border-[#00AEEF] hover:shadow-lg ${className}`}
    >
      {/* Decorative Water Effects */}
      <div className="absolute top-2 right-2 opacity-20 group-hover:opacity-40 transition-opacity">
        <Droplets className="w-12 h-12 text-[#00AEEF]" />
      </div>
      <div className="absolute bottom-[-10px] left-[-10px] w-20 h-20 bg-[#00AEEF]/10 rounded-full blur-xl pointer-events-none" />

      {badge && (
        <span className="absolute top-3 left-3 bg-[#00AEEF] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
          {badge}
        </span>
      )}

      {/* Main RO Water Machine Illustration Box */}
      <div className="w-20 h-24 mb-3 rounded-xl bg-white/90 border border-[#00AEEF]/30 shadow-md flex flex-col items-center justify-between p-2.5 relative group-hover:scale-105 transition-transform duration-300">
        {/* Top Water Indicator */}
        <div className="w-full flex justify-between items-center px-1">
          <div className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
          <div className="w-8 h-1 bg-sky-200 rounded-full" />
          <Droplets className="w-3 h-3 text-[#00AEEF]" />
        </div>

        {/* Center Machine Graphic */}
        <div className="flex flex-col items-center justify-center my-1 text-[#00AEEF]">
          <ImageIcon className="w-7 h-7 stroke-[1.5]" />
          <span className="text-[9px] font-bold tracking-wider uppercase text-sky-800 mt-1">RO Machine</span>
        </div>

        {/* Bottom Filter Tank Bar */}
        <div className="w-full h-3 rounded-md bg-[#EAF9FF] border border-[#00AEEF]/20 flex items-center justify-center">
          <div className="w-10 h-1 bg-[#00AEEF]/60 rounded-full" />
        </div>
      </div>

      {/* Text Info */}
      <div className="z-10">
        <p className="text-xs font-bold text-[#0077B6] uppercase tracking-wider mb-0.5">
          {category}
        </p>
        <p className="text-xs font-medium text-slate-500 max-w-[200px] truncate">
          {title}
        </p>
        <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold text-[#00AEEF] bg-white/80 px-2.5 py-1 rounded-full border border-[#00AEEF]/20 shadow-xs">
          <Sparkles className="w-3 h-3" />
          <span>RO Photo Placeholder</span>
        </div>
      </div>

      {/* Interactive Replacement Hint */}
      {onReplaceClick && (
        <button
          onClick={onReplaceClick}
          className="mt-2 text-[10px] text-slate-500 hover:text-[#00AEEF] underline flex items-center gap-1 z-10 cursor-pointer"
        >
          <Upload className="w-3 h-3" />
          <span>Click to upload/set custom RO photo</span>
        </button>
      )}
    </div>
  );
};
