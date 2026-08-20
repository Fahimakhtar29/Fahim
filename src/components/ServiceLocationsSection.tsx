import React, { useState } from 'react';
import { MapPin, Clock, Search, Sparkles, Navigation, ArrowRight, ShieldCheck, Zap, Phone, MessageSquare, Building2, CheckCircle2 } from 'lucide-react';
import { lucknowServiceAreas, branchOffices } from '../data/initialData';
import { useApp } from '../context/AppContext';

export const ServiceLocationsSection: React.FC = () => {
  const { openBookingModal, siteConfig } = useApp();
  const [activeTab, setActiveTab] = useState<'all' | 'branches' | 'lucknow'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLucknowAreas = lucknowServiceAreas.filter(area =>
    area.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.pincode.includes(searchQuery) ||
    area.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    area.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredBranches = branchOffices.filter(branch =>
    branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.district.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.branchName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.pincode.includes(searchQuery) ||
    branch.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.coverageAreas.some(cov => cov.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleBookLocation = (areaName: string) => {
    openBookingModal(`RO Service in ${areaName}`);
  };

  const handleWhatsAppLocation = (areaName: string, pincode: string) => {
    const text = `Hi, I need urgent RO Service / Installation in *${areaName} (Pincode: ${pincode})*. Please send a technician.`;
    window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="service-areas" className="py-16 sm:py-20 bg-gradient-to-b from-[#EAF9FF]/60 via-white to-[#EAF9FF]/40 relative overflow-hidden">
      {/* Decorative background glow elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-50 to-cyan-50 border border-sky-200/80 px-4 py-1.5 rounded-full shadow-2xs">
            <Building2 className="w-4 h-4 text-[#00AEEF] animate-bounce" />
            <span className="text-xs font-extrabold text-[#0077B6] tracking-wide uppercase">
              Lucknow, Ghosi, Mau & Azamgarh Service Network
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] leading-tight">
            Our Branches & <span className="bg-gradient-to-r from-[#00AEEF] to-[#0077B6] bg-clip-text text-transparent">Service Coverage Hubs</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Certified technical centers and rapid-response technician teams operating across <span className="text-[#0077B6] font-bold">Lucknow, Ghosi, Mau, and Azamgarh</span> with genuine spare parts and doorstep warranty.
          </p>

          {/* Filter Tabs & Search Bar */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto">
            {/* Tabs */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-2xl border border-slate-200/80 shrink-0 shadow-2xs">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'all'
                    ? 'bg-white text-[#0077B6] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Locations
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('branches')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                  activeTab === 'branches'
                    ? 'bg-[#0077B6] text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>Branch Offices</span>
                <span className="bg-white/20 text-[10px] px-1.5 py-0.2 rounded-full">4</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('lucknow')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'lucknow'
                    ? 'bg-white text-[#0077B6] shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Lucknow Localities (15+)
              </button>
            </div>

            {/* Search Box */}
            <div className="relative flex items-center bg-white/90 backdrop-blur-md rounded-2xl p-1 border border-slate-200 shadow-xs focus-within:border-[#00AEEF] focus-within:ring-2 focus-within:ring-[#00AEEF]/20 transition-all w-full sm:w-72">
              <Search className="w-4 h-4 text-[#00AEEF] shrink-0 ml-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Ghosi, Mau, Azamgarh, Lucknow..."
                className="w-full bg-transparent px-2.5 py-1.5 text-xs font-medium text-slate-800 focus:outline-none placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[10px] font-semibold text-slate-400 hover:text-slate-600 px-1.5 py-0.5 mr-1"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 1. BRANCH OFFICES SHOWCASE (Ghosi, Mau, Azamgarh, Lucknow) */}
        {(activeTab === 'all' || activeTab === 'branches') && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#0077B6]" />
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                  Regional Branch Offices & Main Distribution Hubs
                </h3>
              </div>
              <span className="text-xs font-bold text-[#0077B6] bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                Ghosi • Mau • Azamgarh • Lucknow
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {filteredBranches.map((branch) => {
                const isHQ = branch.type === 'Headquarters';
                const isGhosi = branch.city === 'Ghosi';

                return (
                  <div
                    key={branch.id}
                    className={`rounded-3xl p-5 sm:p-6 border transition-all duration-200 relative overflow-hidden flex flex-col justify-between ${
                      isHQ
                        ? 'border-sky-300 bg-gradient-to-br from-sky-50/90 via-white to-blue-50 shadow-md ring-1 ring-sky-300/40'
                        : isGhosi
                        ? 'border-emerald-300 bg-gradient-to-br from-emerald-50/90 via-white to-sky-50 shadow-md ring-1 ring-emerald-300/40'
                        : 'border-slate-200/90 bg-white/95 hover:border-[#00AEEF]/60 hover:shadow-lg'
                    }`}
                  >
                    <div>
                      {/* Top Badges & Title */}
                      <div className="flex items-start justify-between gap-2 mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`w-11 h-11 rounded-2xl flex items-center justify-center font-bold text-white shadow-xs shrink-0 ${
                            isHQ
                              ? 'bg-gradient-to-br from-[#0a2e3f] to-[#0077B6]'
                              : isGhosi
                              ? 'bg-emerald-600'
                              : 'bg-[#00AEEF]'
                          }`}>
                            <Building2 className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                                {branch.city} Branch
                              </h4>
                            </div>
                            <p className="text-xs font-semibold text-slate-500">
                              {branch.district} • PIN: <span className="font-bold text-slate-800">{branch.pincode}</span>
                            </p>
                          </div>
                        </div>

                        <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full border shadow-2xs shrink-0 ${
                          isHQ
                            ? 'bg-[#0a2e3f] text-white border-transparent'
                            : isGhosi
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                            : 'bg-sky-50 text-[#0077B6] border-sky-200'
                        }`}>
                          {branch.type}
                        </span>
                      </div>

                      {/* Full Branch Address */}
                      <div className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50/90 p-2.5 rounded-xl border border-slate-100 mb-3">
                        <MapPin className="w-4 h-4 text-[#00AEEF] shrink-0 mt-0.5" />
                        <span className="font-medium">{branch.address}</span>
                      </div>

                      {/* Hours & Contact */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3 text-xs">
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span className="text-[11px] font-semibold">{branch.timing}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Phone className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                          <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="text-[11px] font-bold text-[#0077B6] hover:underline">
                            {branch.phone}
                          </a>
                        </div>
                      </div>

                      {/* Coverage Towns / Sectors */}
                      <div className="mb-4">
                        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                          Doorstep Service Coverage:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {branch.coverageAreas.map((town, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-medium bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1"
                            >
                              <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                              <span>{town}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => handleBookLocation(`${branch.city} Branch (${branch.district})`)}
                        className="flex-1 bg-gradient-to-r from-[#00AEEF] to-[#0077B6] hover:from-[#0077B6] hover:to-[#0a2e3f] text-white py-2.5 px-4 rounded-xl font-bold text-xs shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>Book Service in {branch.city}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleWhatsAppLocation(branch.city, branch.pincode)}
                        title={`WhatsApp booking for ${branch.city}`}
                        className="w-10 h-10 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xs hover:shadow-md transition-all shrink-0"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 2. LUCKNOW LOCALITIES LIST VIEW (15+ Areas) */}
        {(activeTab === 'all' || activeTab === 'lucknow') && (
          <div>
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-slate-200">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#00AEEF]" />
                <h3 className="font-heading font-extrabold text-lg sm:text-xl text-slate-900">
                  Top 15 Popular Lucknow City Service Hubs
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>30-Min Doorstep Guarantee</span>
              </span>
            </div>

            <div className="flex flex-col space-y-3 max-w-5xl mx-auto">
              {filteredLucknowAreas.map((area, idx) => {
                const isHQ = area.id === 'loc-16';

                return (
                  <div
                    key={area.id}
                    className={`rounded-2xl p-4 sm:p-5 border transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                      isHQ
                        ? 'border-emerald-300 bg-gradient-to-r from-emerald-50/90 via-white to-sky-50 shadow-md ring-1 ring-emerald-400/40'
                        : 'border-slate-200/90 bg-white/90 hover:bg-white hover:border-[#00AEEF]/60 hover:shadow-md'
                    }`}
                  >
                    {/* Left Area Details */}
                    <div className="flex items-start gap-3.5 flex-1 min-w-0">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 font-extrabold text-sm ${
                        isHQ 
                          ? 'bg-emerald-500 text-white shadow-xs' 
                          : 'bg-gradient-to-br from-[#00AEEF] to-[#0077B6] text-white shadow-xs'
                      }`}>
                        {idx + 1}
                      </div>

                      <div className="flex-1 min-w-0 space-y-1.5">
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="font-heading font-extrabold text-base sm:text-lg text-slate-900">
                            {area.name}
                          </h4>
                          <span className="text-xs font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                            PIN: {area.pincode}
                          </span>
                          <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border flex items-center gap-1 ${
                            isHQ
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : 'bg-sky-50 text-[#0077B6] border-sky-200'
                          }`}>
                            <Zap className="w-3 h-3 text-[#00AEEF]" />
                            <span>{area.tag}</span>
                          </span>
                          <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md flex items-center gap-1">
                            <Clock className="w-3 h-3 text-emerald-600" />
                            <span>Arrival: {area.responseEstimate}</span>
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {area.description}
                        </p>

                        {/* Popular Services Chips */}
                        <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mr-1">Services:</span>
                          {area.popularServices.map((service, sIdx) => (
                            <span
                              key={sIdx}
                              className="text-[11px] font-medium bg-slate-50 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/80 flex items-center gap-1"
                            >
                              <ShieldCheck className="w-3 h-3 text-[#00AEEF]" />
                              <span>{service}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Action Buttons */}
                    <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <button
                        type="button"
                        onClick={() => handleBookLocation(area.name)}
                        className="flex-1 md:flex-initial bg-gradient-to-r from-[#00AEEF] to-[#0077B6] hover:from-[#0077B6] hover:to-[#0a2e3f] text-white py-2 px-4 rounded-xl font-bold text-xs shadow-2xs hover:shadow-md transition-all flex items-center justify-center gap-1.5 whitespace-nowrap"
                      >
                        <span>Book Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleWhatsAppLocation(area.name, area.pincode)}
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
          </div>
        )}

        {/* Empty state if search has no results */}
        {filteredLucknowAreas.length === 0 && filteredBranches.length === 0 && (
          <div className="text-center py-12 bg-white/70 backdrop-blur-md rounded-3xl border border-slate-200 max-w-md mx-auto p-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-sky-100 text-[#00AEEF] flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h4 className="font-heading font-bold text-base text-slate-800">
              Location Not Found in Search?
            </h4>
            <p className="text-xs text-slate-600">
              Don't worry! We cover <span className="font-bold text-slate-800">all areas in Lucknow, Ghosi, Mau, and Azamgarh</span>. Call or WhatsApp our helpline directly.
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
              <span>Lucknow • Ghosi • Mau • Azamgarh Coverage</span>
            </div>
            <h3 className="font-heading font-extrabold text-lg sm:text-2xl">
              Need Instant Doorstep RO Service in Lucknow, Ghosi, Mau or Azamgarh?
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 max-w-2xl">
              Our mobile technician vans are stocked with genuine Kent, Aquaguard, Pureit, and Copper RO spare parts, ready to reach your doorstep within 30 to 45 minutes.
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
              onClick={() => openBookingModal('Urgent RO Service')}
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm px-5 py-3 rounded-2xl shadow-lg transition-all flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Book Online (Fast Visit)</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

