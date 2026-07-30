import React from 'react';
import { Shield, Check, X, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AMCSection: React.FC = () => {
  const { amcPlans, openBookingModal } = useApp();

  return (
    <section id="amc" className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>365 Days Worry-Free Protection</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Annual Maintenance Contracts (AMC Plans)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Ensure 100% pure water all year round. Save up to 50% on filter replacements and service visits.
          </p>
        </div>

        {/* AMC Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {amcPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[2rem] p-8 transition-all duration-300 relative flex flex-col justify-between ${
                plan.isPopular
                  ? 'bg-[#0a2e3f] text-white shadow-2xl scale-105 z-10 border border-white/20 backdrop-blur-xl'
                  : 'glass-card border border-white/80 hover:border-[#00AEEF] shadow-lg text-slate-800'
              }`}
            >
              {/* Badge for Popular Plan */}
              {plan.badge && (
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white'
                      : 'bg-slate-800 text-white'
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className={`text-center pb-6 ${plan.isPopular ? 'border-b border-white/10' : 'border-b border-white/40'}`}>
                  <div className={`w-12 h-12 mx-auto rounded-2xl flex items-center justify-center mb-3 ${
                    plan.isPopular ? 'bg-white/10 text-[#4FC3F7]' : 'bg-white/80 text-[#00AEEF] shadow-xs'
                  }`}>
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className={`text-2xl font-heading font-extrabold mb-2 ${plan.isPopular ? 'text-white' : 'text-[#0a2e3f]'}`}>
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-heading font-extrabold ${plan.isPopular ? 'text-[#4FC3F7]' : 'text-[#0a2e3f]'}`}>
                      ₹{plan.price.toLocaleString('en-IN')}
                    </span>
                    <span className={`text-xs font-semibold ${plan.isPopular ? 'text-white/70' : 'text-slate-500'}`}>{plan.period}</span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="py-6 space-y-3">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                      {feat.included ? (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-[#4FC3F7]/20 text-[#4FC3F7]' : 'bg-emerald-100 text-emerald-600'
                        }`}>
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.isPopular ? 'bg-white/10 text-white/40' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <X className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                      )}
                      <span className={
                        feat.included 
                          ? (plan.isPopular ? 'text-white/90 font-medium' : 'text-slate-700 font-medium')
                          : (plan.isPopular ? 'text-white/40 line-through' : 'text-slate-400 line-through')
                      }>
                        {feat.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className={`pt-4 ${plan.isPopular ? 'border-t border-white/10' : 'border-t border-white/40'}`}>
                <button
                  onClick={() => openBookingModal(`AMC Plan: ${plan.name}`)}
                  className={`w-full py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                    plan.isPopular
                      ? 'bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white rounded-full shadow-lg hover:scale-105'
                      : 'btn-sky-outline'
                  }`}
                >
                  <Zap className="w-4 h-4" />
                  <span>Book {plan.name}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
