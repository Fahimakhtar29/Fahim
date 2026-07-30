import React from 'react';
import { ShieldCheck, Phone, ArrowRight, Wrench, Sparkles, CheckCircle2, Star, Droplets } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ROImagePlaceholder } from './ROImagePlaceholder';

export const Hero: React.FC = () => {
  const { siteConfig, openBookingModal, openAdminModal } = useApp();

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-28 md:pb-24 overflow-hidden frosted-bg">
      {/* Radial Gradient Accent Flares */}
      <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none opacity-40 bg-[radial-gradient(circle_at_10%_20%,#4FC3F7_0%,transparent_40%),radial-gradient(circle_at_90%_80%,#00AEEF_0%,transparent_40%)]" />

      {/* Water Wave SVG Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none overflow-hidden opacity-25">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-[#00AEEF] fill-current">
          <path d="M0,0 C150,90 350,-40 500,50 C650,140 900,10 1200,40 L1200,120 L0,120 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Calls to Action */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-white/60 px-4 py-1.5 rounded-full shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00AEEF] animate-ping" />
              <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-[#00AEEF]" />
                India's #1 Trusted RO Service & Sales Partner
              </span>
            </div>

            {/* Big Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0a2e3f] tracking-tight leading-[1.15]">
              <span className="block text-[#0a2e3f]">{siteConfig.heroHeading.split('.')[0]}.</span>
              <span className="text-[#00AEEF]">
                {siteConfig.heroHeading.split('.')[1] || "Healthy Family."}
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {siteConfig.heroSubheading}
            </p>

            {/* Quick Benefits Bullet Grid - Glass Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-left">
              <div className="bg-white/50 backdrop-blur-md p-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#00AEEF] shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-[#00AEEF]" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs text-[#0a2e3f]">Same Day</span>
                  <span className="text-[10px] text-slate-500">Service Guarantee</span>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-md p-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#00AEEF] shrink-0">
                  <ShieldCheck className="w-5 h-5 text-[#00AEEF]" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs text-[#0a2e3f]">Original</span>
                  <span className="text-[10px] text-slate-500">Spare Parts</span>
                </div>
              </div>

              <div className="bg-white/50 backdrop-blur-md p-3 rounded-2xl border border-white shadow-sm flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100/80 flex items-center justify-center text-[#00AEEF] shrink-0">
                  <Wrench className="w-5 h-5 text-[#00AEEF]" />
                </div>
                <div className="leading-tight">
                  <span className="block font-bold text-xs text-[#0a2e3f]">Certified</span>
                  <span className="text-[10px] text-slate-500">Technicians</span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => openBookingModal()}
                className="bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-200/80 hover:scale-105 transition-all flex items-center gap-2 text-sm"
              >
                <Wrench className="w-4 h-4" />
                <span>Book Service Now</span>
              </button>

              <a
                href="#products"
                className="bg-white/80 backdrop-blur-md border border-white text-[#00AEEF] px-8 py-4 rounded-full font-bold shadow-sm hover:bg-white hover:scale-105 transition-all flex items-center gap-2 text-sm"
              >
                <span>View Products</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="bg-white/70 backdrop-blur-md hover:bg-white text-slate-800 border border-white/80 px-5 py-4 rounded-full text-sm font-bold flex items-center gap-2 shadow-xs transition-all"
              >
                <Phone className="w-4 h-4 text-[#00AEEF]" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>

            {/* Social Proof Bar */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                ))}
              </div>
              <span className="font-bold text-slate-800">4.9 / 5.0 Rating</span>
              <span className="text-slate-400">•</span>
              <span>15,000+ Happy Households Served</span>
            </div>
          </div>

          {/* Right Column: Hero RO Machine Display in Frosted Glass Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              <div className="bg-white/40 border border-white/60 rounded-[2.5rem] p-6 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                {/* Header Tag inside card */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/40">
                  <div className="flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-[#00AEEF]" />
                    <span className="font-heading font-bold text-sm text-[#0a2e3f]">Featured RO Purifier</span>
                  </div>
                  <span className="text-[10px] bg-[#00AEEF] text-white font-bold px-3 py-1 rounded-full shadow-xs">
                    Pure Alkaline RO
                  </span>
                </div>

                {/* Main RO Machine Placeholder Frame */}
                <ROImagePlaceholder
                  customImageUrl={siteConfig.heroCustomImage}
                  title="Your Custom RO Purifier Machine Photo"
                  category="RO Purifier Machine"
                  heightClass="h-72 sm:h-80"
                  badge="20% OFF"
                  onReplaceClick={openAdminModal}
                />

                {/* Sub Features Banner under image */}
                <div className="mt-4 pt-3 border-t border-white/40 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>100% Pure Water</span>
                  </div>
                  <div className="text-[#00AEEF] font-bold">
                    TDS Control Tech
                  </div>
                  <button
                    onClick={openAdminModal}
                    className="text-[11px] text-sky-700 hover:underline flex items-center gap-1"
                  >
                    <span>Edit Image</span>
                  </button>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -top-6 left-2 sm:left-auto sm:-left-6 lg:-left-8 bg-white/90 backdrop-blur-md px-3.5 py-2.5 rounded-2xl shadow-xl border border-white flex items-center gap-2.5 z-20 animate-float">
                <div className="w-8 h-8 rounded-xl bg-[#00AEEF] text-white flex items-center justify-center font-bold text-xs shrink-0">
                  2h
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-xs font-bold text-[#0a2e3f] leading-tight">Doorstep Arrival</p>
                  <p className="text-[10px] text-slate-500 leading-tight">Fast Express Service</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-8 sm:-bottom-10 -right-2 sm:-right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-white flex items-center gap-3 z-20">
                <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
                  ✓
                </div>
                <div className="whitespace-nowrap">
                  <p className="text-xs font-bold text-[#0a2e3f]">Genuine Spare Parts</p>
                  <p className="text-[10px] text-slate-500">100% Original Guarantee</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
