import React, { useState } from 'react';
import { MapPin, Clock, Search, Sparkles, Navigation, ArrowRight, ShieldCheck, Zap, Phone, MessageSquare } from 'lucide-react';
import { lucknowServiceAreas } from '../data/initialData';
import { useApp } from '../context/AppContext';

export const ServiceLocationsSection: React.FC = () => {
  const { openBookingModal, siteConfig } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAreaId, setSelectedAreaId] = useState<string | null>(null);

  const filteredAreas = lucknowServiceAreas.filter(area =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.pincode.includes(searchQuery) ||
    area.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBookLocation = (areaName: string) => {
    openBookingModal(`RO Service in ${areaName}`);
  };

  const handleWhatsAppLocation = (areaName: string, pincode: string) => {
    const text = `Hi, I need urgent RO Service / Installation in *${areaName} (Pincode: ${pincode}), Lucknow*. Please send a technician.`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-gradient-to-b from-[#EAF9FF]/60 via-white to-[#EAF9FF]/40 relative overflow-hidden">
      {/* Decorative background glow elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200/80 px-4 py-1.5 rounded-full shadow-2xs">
            <MapPin className="w-4 h-4 text-[#00AEEF] animate-bounce" />
            <span className="text-xs font-extrabold text-[#0077B6] tracking-wide uppercase">
              Lucknow Doorstep RO Service Network
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] leading-tight">
            Our Top 15 Popular <span className="bg-gradient-to-r from-[#00AEEF] to-[#0077B6] bg-clip-text text-transparent">Lucknow Service Areas</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            We operate certified technician hubs across all major localities in Lucknow with an average <span className="text-[#0077B6] font-bold">30-minute doorstep arrival guarantee</span>.
          </p>

          {/* Search Box */}
          <div className="pt-3 max-w-md mx-auto">
            <div className="relative flex items-center bg-white/90 backdrop-blur-md rounded-2xl p-1.5 border border-slate-200 shadow-md focus-within:border-[#00AEEF] focus-within:ring-2 focus-within:ring-[#00AEEF]/20 transition-all">
              <Search className="w-5 h-5 text-[#00AEEF] shrink-0 ml-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by area name (e.g. Gomti Nagar, Aliganj) or Pincode..."
                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm font-medium text-slate-800 focus:outline-none placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-600 px-2 py-1 mr-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Areas Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredAreas.map((area, idx) => {
            const isHQ = area.id === 'loc-16';
            const isSelected = selectedAreaId === area.id;

            return (
              <div
                key={area.id}
                onClick={() => setSelectedAreaId(isSelected ? null : area.id)}
                className={`glass-card rounded-2xl sm:rounded-3xl p-5 border transition-all duration-300 relative group flex flex-col justify-between cursor-pointer ${
                  isHQ
                    ? 'border-emerald-300 bg-gradient-to-br from-emerald-50/90 via-white to-sky-50 shadow-lg ring-2 ring-emerald-400/30'
                    : 'border-slate-200/90 bg-white/80 hover:bg-white hover:border-[#00AEEF]/50 hover:shadow-xl hover:-translate-y-1'
                }`}
              >
                <div>
                  {/* Top Header Row */}
                  <div className="flex items-start justify-between gap-2 mb-2.5">
                    <div className="flex items-center gap-2">
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                        isHQ 
                          ? 'bg-emerald-500 text-white shadow-md' 
                          : 'bg-gradient-to-br from-[#00AEEF] to-[#0077B6] text-white shadow-xs'
                      }`}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-heading font-extrabold text-base sm:text-lg text-slate-900 group-hover:text-[#0077B6] transition-colors">
                            {idx + 1}. {area.name}
                          </h3>
                        </div>
                        <p className="text-[11px] font-semibold text-slate-500">
                          Pincode: <span className="font-bold text-slate-700">{area.pincode}</span>
                        </p>
                      </div>
                    </div>

                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border shadow-2xs shrink-0 flex items-center gap-1 ${
                      isHQ
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                        : 'bg-sky-50 text-[#0077B6] border-sky-200'
                    }`}>
                      <Zap className="w-3 h-3 text-[#00AEEF]" />
                      <span>{area.tag}</span>
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                    {area.description}
                  </p>

                  {/* Response Time Badge */}
                  <div className="flex items-center gap-1.5 text-xs text-slate-700 mb-3 bg-slate-50 rounded-xl p-2 border border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span className="text-[11px] font-semibold">
                      Tech Arrival Time: <span className="text-emerald-700 font-extrabold">{area.responseEstimate}</span>
                    </span>
                  </div>

                  {/* Popular Services Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {area.popularServices.map((service, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[10px] font-medium bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1"
                      >
                        <ShieldCheck className="w-2.5 h-2.5 text-[#00AEEF]" />
                        <span>{service}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action Bar */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookLocation(area.name);
                    }}
                    className="flex-1 bg-gradient-to-r from-[#00AEEF] to-[#0077B6] hover:from-[#0077B6] hover:to-[#0a2e3f] text-white py-2 px-3 rounded-xl font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Book Service Here</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppLocation(area.name, area.pincode);
                    }}
                    title="Quick WhatsApp Booking"
                    className="w-9 h-9 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xs hover:shadow-md transition-all shrink-0"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search has no results */}
        {filteredAreas.length === 0 && (
          <div className="text-center py-12 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 max-w-md mx-auto p-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-[#00AEEF] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-slate-800">
              Area Not Found in Quick List?
            </h4>
            <p className="text-xs text-slate-600">
              Don't worry! We cover <span className="font-bold text-slate-800">100% of all localities across Lucknow</span>. Call or WhatsApp our helpline directly.
            </p>
            <div className="pt-2 flex justify-center gap-2">
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                className="bg-[#0077B6] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Helpline</span>
              </a>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-xs font-bold"
              >
                Reset Search
              </button>
            </div>
          </div>
        )}

        {/* Bottom Banner callout */}
        <div className="mt-12 bg-gradient-to-r from-[#0a2e3f] via-[#0077B6] to-[#00AEEF] rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-0.5 rounded-full text-[11px] font-bold text-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>Full Lucknow Metro & Outer District Coverage</span>
            </div>
            <h3 className="font-heading font-extrabold text-lg sm:text-2xl">
              Need Instant Doorstep RO Service Anywhere in Lucknow?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl">
              Our mobile technician vans are equipped with genuine Kent, Aquaguard, Pureit, and Copper RO spare parts, ready to dispatch to your address instantly.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
              className="bg-white text-[#0a2e3f] hover:bg-sky-50 font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#00AEEF]" />
              <span>Call +91 8417985679</span>
            </a>
            <button
              type="button"
              onClick={() => openBookingModal('Urgent RO Service Lucknow')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Book Online (30 Min Visit)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
