import React, { useState } from 'react';
import { Wrench, Hammer, ShieldCheck, RefreshCw, Layers, Sliders, Droplet, Building2, Clock, Check, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServiceItem } from '../types';

export const ServicesSection: React.FC = () => {
  const { services, openBookingModal } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-6 h-6 text-[#00AEEF]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#00AEEF]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#00AEEF]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-[#00AEEF]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#00AEEF]" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-[#00AEEF]" />;
      case 'Droplet':
        return <Droplet className="w-6 h-6 text-[#00AEEF]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#00AEEF]" />;
      default:
        return <Wrench className="w-6 h-6 text-[#00AEEF]" />;
    }
  };

  const categories = ['All', 'Domestic RO', 'Filters & Spares', 'Commercial & Softener'];

  const filteredServices = services.filter((serv: ServiceItem) => {
    if (selectedCategory === 'All') return true;
    if (selectedCategory === 'Domestic RO') {
      return ['RO Installation', 'RO Repair', 'RO AMC'].includes(serv.title);
    }
    if (selectedCategory === 'Filters & Spares') {
      return ['Filter Change', 'Membrane Replacement', 'TDS Adjustment'].includes(serv.title);
    }
    if (selectedCategory === 'Commercial & Softener') {
      return ['Water Softener', 'Commercial RO'].includes(serv.title);
    }
    return true;
  });

  return (
    <section id="services" className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Accent Radial Glow */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <Wrench className="w-3.5 h-3.5" />
            <span>Complete Doorstep Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Our Professional RO Services
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            From installation and emergency repair to genuine filter replacement and AMC protection.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white shadow-md shadow-sky-200'
                    : 'bg-white/70 backdrop-blur-md text-slate-700 hover:bg-white border border-white shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/80 shadow-md flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Price Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 group-hover:bg-[#00AEEF] transition-colors duration-300 flex items-center justify-center shadow-xs border border-white group-hover:border-transparent">
                    <div className="group-hover:text-white transition-colors duration-300">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>
                  <span className="text-xs font-bold bg-white/80 backdrop-blur-md text-[#0077B6] px-2.5 py-1 rounded-full border border-white/90 shadow-2xs">
                    {service.estimatedPrice}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-heading font-bold text-[#0a2e3f] mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Features Bullets */}
                <ul className="space-y-1.5 mb-6 text-[11px] text-slate-600">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-3 border-t border-white/50 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#00AEEF]" />
                  {service.timeRequired}
                </span>

                <button
                  onClick={() => openBookingModal(service.title)}
                  className="btn-sky-gradient text-xs px-3.5 py-1.5 font-bold flex items-center gap-1 shadow-xs hover:scale-105"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
