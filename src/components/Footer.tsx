import React from 'react';
import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ShieldCheck, Heart, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { siteConfig, openAdminModal } = useApp();

  return (
    <footer className="bg-[#05131a]/90 backdrop-blur-xl text-slate-300 pt-16 pb-8 relative overflow-hidden border-t border-white/10 shadow-2xl">
      {/* Background Decorative Water Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4FC3F7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#00AEEF] to-[#4FC3F7] p-2 flex items-center justify-center text-white shadow-lg">
                <Droplets className="w-6 h-6 animate-pulse" />
              </div>
              <span className="font-heading font-extrabold text-lg text-white tracking-tight">
                {siteConfig.companyName}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              India's premier RO water purifier sales, installation, repair, filter replacement, and AMC service provider. Protecting family health with pure, mineral-balanced water.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00AEEF] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00AEEF] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00AEEF] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md"
                title="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00AEEF] text-slate-300 hover:text-white flex items-center justify-center transition-all border border-white/10 backdrop-blur-md"
                title="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#4FC3F7]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products & Machines</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Doorstep RO Services</a></li>
              <li><a href="#amc" className="hover:text-white transition-colors">Annual AMC Plans</a></li>
              <li><a href="#why-ro" className="hover:text-white transition-colors">Why RO Purification</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">About Company</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ Answers</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#4FC3F7]">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">RO Installation & Unboxing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency RO Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Genuine Filter Change</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">RO Membrane Replacement</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">TDS & Mineral Adjustment</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Hard Water Softeners</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">50-1000 LPH Commercial RO</a></li>
            </ul>
          </div>

          {/* Col 4: Regional Branch Offices */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#4FC3F7]">
              Regional Branches
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <p className="font-bold text-white">Ghosi Branch (Mau)</p>
                <p className="text-[11px] text-slate-400">Madhuban Rd, Sadar Bazar</p>
                <p className="text-[11px] text-[#4FC3F7]">PIN: 275304 • Doorstep Support</p>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <p className="font-bold text-white">Mau Branch</p>
                <p className="text-[11px] text-slate-400">Near Railway Station / Ghazipur Rd</p>
                <p className="text-[11px] text-[#4FC3F7]">PIN: 275101 • 7 Days Open</p>
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">
                <p className="font-bold text-white">Azamgarh Branch</p>
                <p className="text-[11px] text-slate-400">Civil Lines / Sidhari Road</p>
                <p className="text-[11px] text-[#4FC3F7]">PIN: 276001 • Fast Repair</p>
              </div>
            </div>
          </div>

          {/* Col 5: Contact & Legal */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-sm uppercase tracking-wider text-[#4FC3F7]">
              Head Office Support
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <a
                href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#4FC3F7]" />
                <span>{siteConfig.phone}</span>
              </a>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#4FC3F7]" />
                <span>{siteConfig.email}</span>
              </p>
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4FC3F7] shrink-0 mt-0.5" />
                <span>{siteConfig.address}</span>
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-1.5 text-xs">
              <a href="#contact" className="text-slate-400 hover:text-white">Privacy Policy</a>
              <a href="#contact" className="text-slate-400 hover:text-white">Terms & Conditions</a>
              <a href="#contact" className="text-slate-400 hover:text-white">Warranty Guidelines</a>
              <button
                onClick={openAdminModal}
                className="text-left text-[#4FC3F7] font-bold flex items-center gap-1 hover:underline pt-1"
              >
                <Settings className="w-3 h-3" />
                <span>Admin CMS Portal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Lucknow & Branch Service Hubs Bar */}
        <div className="py-6 border-b border-white/10 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#4FC3F7]" />
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-white">
                Service Hubs & Branches:
              </h4>
            </div>
            <span className="text-[11px] text-[#4FC3F7] font-semibold">
              Lucknow HQ • Ghosi • Mau • Azamgarh
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-300">
            {[
              "Ghosi Branch (Mau)", "Mau Nath Bhanjan", "Azamgarh Division Hub", "Gomti Nagar", "Hazratganj", "Aliganj", "Indira Nagar", "Mahanagar",
              "Ashiyana", "Rajajipuram", "Jankipuram", "Vikas Nagar", "Chowk",
              "Transport Nagar", "Charbagh", "Sushant Golf City", "Vrindavan Yojna", "Chinhat / BBD Area", "Behta / Palka Chauraha"
            ].map((areaName, aIdx) => (
              <a
                key={aIdx}
                href="#service-areas"
                className="bg-white/5 hover:bg-[#00AEEF] hover:text-white px-2.5 py-1 rounded-lg border border-white/10 transition-all text-slate-300"
              >
                {areaName}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-bold">{siteConfig.companyName}</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>ISO 9001:2015 Certified Water Purification Company</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
