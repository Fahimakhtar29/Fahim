import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Wrench, Droplets, Menu, X, ShieldCheck, Clock, Settings, Heart } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const Navbar: React.FC = () => {
  const { siteConfig, openBookingModal, openAdminModal, wishlist } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Lucknow Hubs', href: '#service-areas' },
    { name: 'Products', href: '#products' },
    { name: 'RO Service', href: '#services' },
    { name: 'AMC Plans', href: '#amc' },
    { name: 'Installation', href: '#services' },
    { name: 'Repair', href: '#services' },
    { name: 'Commercial RO', href: '#products' },
    { name: 'Why RO?', href: '#why-ro' },
    { name: 'About', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-[#00AEEF] via-[#0077B6] to-[#03045E] text-white text-[11px] py-1 px-4 shadow-2xs hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-3 h-3 text-[#4FC3F7]" />
              2-Hour Guaranteed Doorstep Service
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-3 h-3 text-[#4FC3F7]" />
              100% Genuine Spare Parts & Certified Engineers
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-white/80">Hours: {siteConfig.businessHours}</span>
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1 hover:text-[#4FC3F7] font-semibold transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3" />
              <span>{siteConfig.phone}</span>
            </a>
            <button
              onClick={openAdminModal}
              className="bg-white/10 hover:bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 transition-colors border border-white/20"
              title="Easy Admin CMS & Product Manager"
            >
              <Settings className="w-2.5 h-2.5" />
              <span>CMS Admin</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-header py-1.5 shadow-sm border-b border-white/60'
            : 'bg-white/70 backdrop-blur-md py-2 border-b border-white/80 shadow-2xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Company Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#00AEEF] to-[#4FC3F7] p-1.5 flex items-center justify-center text-white shadow-xs group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-sm md:text-base text-slate-900 tracking-tight leading-tight group-hover:text-[#00AEEF] transition-colors">
                {siteConfig.companyName}
              </span>
              <span className="text-[9px] font-bold tracking-wider text-[#00AEEF] uppercase leading-none">
                Sales • Service • AMC • Repairs
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-xs font-semibold text-slate-700 hover:text-[#00AEEF] px-2 py-1 rounded-md hover:bg-white/80 transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Header Action Buttons (Right Side) */}
          <div className="hidden sm:flex items-center gap-2">
            {/* Wishlist Button */}
            <a
              href="#products"
              className="p-1.5 rounded-full text-slate-600 hover:text-red-500 hover:bg-red-50 relative transition-colors"
              title="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </a>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi,%20I%20want%20to%20book%20an%20RO%20Service/Purchase.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-full shadow-2xs transition-transform hover:scale-105 flex items-center justify-center"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </a>

            {/* Call Now Button */}
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="btn-sky-outline px-3 py-1.5 text-xs font-bold flex items-center gap-1"
            >
              <Phone className="w-3 h-3" />
              <span>Call Now</span>
            </a>

            {/* Book Service Button */}
            <button
              onClick={() => openBookingModal()}
              className="btn-sky-gradient px-3.5 py-1.5 text-xs font-bold flex items-center gap-1 shadow-xs"
            >
              <Wrench className="w-3 h-3" />
              <span>Book Service</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => openBookingModal()}
              className="btn-sky-gradient px-3 py-1.5 text-xs font-bold sm:hidden"
            >
              Book Service
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/85 backdrop-blur-xl border-b border-white shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-5 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-slate-700 hover:text-[#00AEEF] px-3 py-2 rounded-lg hover:bg-sky-50"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5 pt-2">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="w-full btn-sky-outline py-2.5 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now: {siteConfig.phone}</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openBookingModal();
              }}
              className="w-full btn-sky-gradient py-2.5 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Wrench className="w-4 h-4" />
              <span>Book Service Now</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=Hi,%20I%20want%20to%20book%20an%20RO%20Service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 text-white py-2.5 rounded-full text-xs font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openAdminModal();
              }}
              className="w-full bg-slate-100 text-slate-700 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Settings className="w-4 h-4" />
              <span>Admin Product & Content CMS</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
