import React from 'react';
import { Filter, Wind, Sparkles, Zap, Shield, HeartPulse, CheckCircle, Droplets, AlertTriangle } from 'lucide-react';
import { purificationSteps } from '../data/initialData';

export const WhyROSection: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Filter':
        return <Filter className="w-5 h-5 text-white" />;
      case 'Wind':
        return <Wind className="w-5 h-5 text-white" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-white" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-white" />;
      case 'HeartPulse':
        return <HeartPulse className="w-5 h-5 text-white" />;
      case 'CheckCircle':
        return <CheckCircle className="w-5 h-5 text-white" />;
      default:
        return <Droplets className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="why-ro" className="py-20 frosted-bg relative overflow-hidden">
      {/* Radial Background Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <Droplets className="w-3.5 h-3.5" />
            <span>Water Health Science</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Why Your Family Needs RO Purification?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Unfiltered tap & borewell water contains dangerous invisible contaminants. See how our 7-stage RO system eliminates toxins.
          </p>
        </div>

        {/* Infographic Steps Visual */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-[#00AEEF] to-emerald-500 -translate-y-1/2 z-0 opacity-60" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {purificationSteps.map((step) => (
              <div
                key={step.id}
                className="glass-card glass-card-hover rounded-2xl p-4 border border-white/80 shadow-md text-center flex flex-col items-center justify-between group"
              >
                {/* Stage Number Badge */}
                <div className="w-full flex justify-between items-center mb-3 text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                  <span>Stage {step.id}</span>
                  <div className={`w-2 h-2 rounded-full ${step.color}`} />
                </div>

                {/* Step Icon */}
                <div className={`w-12 h-12 rounded-2xl ${step.color} shadow-md flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                  {getStepIcon(step.iconName)}
                </div>

                {/* Stage Name */}
                <h3 className="font-heading font-bold text-xs sm:text-sm text-[#0a2e3f] mb-1 group-hover:text-[#00AEEF] transition-colors">
                  {step.stageName}
                </h3>

                {/* Impurity Removed */}
                <div className="bg-red-50/80 backdrop-blur-xs text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full mb-2 flex items-center gap-1 border border-red-100">
                  <AlertTriangle className="w-2.5 h-2.5" />
                  <span className="truncate">{step.impurityRemoved}</span>
                </div>

                {/* Short Desc */}
                <p className="text-[11px] text-slate-500 leading-snug">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Result Banner */}
        <div className="mt-12 bg-[#0a2e3f] text-white p-6 sm:p-8 rounded-[2rem] shadow-2xl border border-white/20 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-bold text-[#4FC3F7] uppercase tracking-wider">
              100% Pure Drinking Water Guaranteed
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-bold">
              Sweet, Mineral-Rich & Crystal Clear Water At Home
            </h3>
            <p className="text-xs sm:text-sm text-sky-100/90 max-w-xl">
              Protects your children from waterborne diseases, stomach infection, and toxic metals with every sip.
            </p>
          </div>

          <a
            href="#products"
            className="bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white hover:scale-105 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold shrink-0 shadow-lg transition-transform"
          >
            Explore Pure RO Machines
          </a>
        </div>

      </div>
    </section>
  );
};
