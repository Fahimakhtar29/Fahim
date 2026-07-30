import React from 'react';
import { Clock, UserCheck, Award, Tag, Home, Shield, Sparkles } from 'lucide-react';
import { initialWhyChooseUs } from '../data/initialData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-7 h-7 text-[#00AEEF]" />;
      case 'UserCheck':
        return <UserCheck className="w-7 h-7 text-[#00AEEF]" />;
      case 'Award':
        return <Award className="w-7 h-7 text-[#00AEEF]" />;
      case 'Tag':
        return <Tag className="w-7 h-7 text-[#00AEEF]" />;
      case 'Home':
        return <Home className="w-7 h-7 text-[#00AEEF]" />;
      case 'Shield':
        return <Shield className="w-7 h-7 text-[#00AEEF]" />;
      default:
        return <Sparkles className="w-7 h-7 text-[#00AEEF]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 relative frosted-bg overflow-hidden">
      {/* Background Radial Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            India’s Most Trusted RO Water Purifier Company
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            We prioritize family health, water purity, and transparent pricing with certified doorstep service experts.
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {initialWhyChooseUs.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-white/80 shadow-md group relative overflow-hidden"
            >
              {/* Card Water Wave Gradient Accent */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#00AEEF] via-[#4FC3F7] to-[#0077B6] opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="w-14 h-14 rounded-2xl bg-white/80 group-hover:bg-[#00AEEF] transition-colors duration-300 flex items-center justify-center mb-6 shadow-xs border border-white group-hover:border-transparent">
                <div className="group-hover:text-white transition-colors duration-300">
                  {getIcon(item.iconName)}
                </div>
              </div>

              <h3 className="text-xl font-heading font-bold text-[#0a2e3f] mb-2 group-hover:text-[#00AEEF] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
