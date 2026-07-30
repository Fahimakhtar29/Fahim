import React from 'react';
import { PhoneCall, Home, Wrench, GlassWater, ArrowRight } from 'lucide-react';

export const WorkProcessSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Call Us or Book Online',
      desc: 'Submit your service request on our website or call +91 98765 43210.',
      icon: <PhoneCall className="w-6 h-6 text-white" />,
      color: 'bg-[#00AEEF]'
    },
    {
      num: '02',
      title: 'Technician Visit Home',
      desc: 'Our certified engineer arrives at your doorstep in under 60 minutes.',
      icon: <Home className="w-6 h-6 text-white" />,
      color: 'bg-[#0077B6]'
    },
    {
      num: '03',
      title: 'Repair & Filter Service',
      desc: 'Expert diagnosis and replacement with 100% genuine spare parts.',
      icon: <Wrench className="w-6 h-6 text-white" />,
      color: 'bg-[#03045E]'
    },
    {
      num: '04',
      title: 'Enjoy Pure Safe Water',
      desc: 'TDS testing confirmed. Enjoy sweet, mineral-rich healthy drinking water.',
      icon: <GlassWater className="w-6 h-6 text-white" />,
      color: 'bg-emerald-500'
    }
  ];

  return (
    <section className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <span>Fast 4-Step Doorstep Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            How Our RO Service Works
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Hassle-free, rapid 4-step process designed for instant doorstep satisfaction.
          </p>
        </div>

        {/* 4 Step Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/80 shadow-md relative flex flex-col justify-between group"
            >
              <div>
                {/* Step Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${step.color} shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {step.icon}
                  </div>
                  <span className="text-3xl font-heading font-extrabold text-sky-200/80 group-hover:text-[#00AEEF] transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-heading font-bold text-[#0a2e3f] mb-2 group-hover:text-[#00AEEF] transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Step Arrow Connector */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 z-20 text-[#00AEEF]">
                  <ArrowRight className="w-6 h-6 animate-pulse" />
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
