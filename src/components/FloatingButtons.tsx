import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, Wrench, ArrowUp } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FloatingButtons: React.FC = () => {
  const { siteConfig, openBookingModal } = useApp();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto bg-slate-900 hover:bg-[#00AEEF] text-white p-3 rounded-full shadow-xl transition-all duration-300 hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Book Service Floating Badge */}
      <button
        onClick={() => openBookingModal()}
        className="pointer-events-auto btn-sky-gradient px-4 py-2.5 shadow-xl flex items-center gap-2 text-xs font-bold animate-bounce hover:animate-none"
      >
        <Wrench className="w-4 h-4" />
        <span className="hidden sm:inline">Book RO Service</span>
        <span className="sm:hidden">Book</span>
      </button>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${siteConfig.whatsapp}?text=Hi,%20I%20want%20to%20book%20an%20RO%20Service.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          WhatsApp Support
        </span>
      </a>

      {/* Call Floating Button */}
      <a
        href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
        className="pointer-events-auto bg-[#00AEEF] hover:bg-[#0077B6] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center relative group"
        title="Call Helpline"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute right-14 bg-slate-900 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Call {siteConfig.phone}
        </span>
      </a>

    </div>
  );
};
