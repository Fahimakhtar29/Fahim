import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, Building, Sparkles, Navigation, Search, RotateCcw } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactSection: React.FC = () => {
  const { siteConfig, addBooking } = useApp();
  const [mapQuery, setMapQuery] = useState(siteConfig.address);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    serviceType: 'RO Service & Repair',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMapQuery(siteConfig.address);
  }, [siteConfig.address]);

  const getWhatsAppMsg = () => {
    return `Hi, I want to book a service / request a callback.%0A%0A*Customer Details:*%0A• Name: ${encodeURIComponent(formData.name || 'Customer')}%0A• Phone: ${encodeURIComponent(formData.phone || 'N/A')}%0A• Location: ${encodeURIComponent(formData.city || 'N/A')}%0A• Service Needed: ${encodeURIComponent(formData.serviceType)}%0A• Message: ${encodeURIComponent(formData.message || 'Callback requested')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addBooking({
      customerName: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city || 'Lucknow',
      address: formData.message || 'Contact Request via Website',
      serviceType: formData.serviceType,
      preferredDate: new Date().toISOString().split('T')[0],
      notes: formData.message
    });

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMsg()}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        city: '',
        serviceType: 'RO Service & Repair',
        message: ''
      });
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Accent Radial Flares */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>24/7 Helpline & Support</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Contact Us & Book Service
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Have a question or need emergency RO repair? Fill the form or call our helpline directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Info & Google Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Contact Details Card */}
            <div className="glass-card rounded-[2rem] p-7 border border-white/80 shadow-xl space-y-6">
              <h3 className="text-xl font-heading font-bold text-[#0a2e3f] pb-3 border-b border-white/50">
                Corporate Office Info
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Head Address</p>
                    <p className="text-slate-600">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Customer Helpline</p>
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
                      className="text-[#00AEEF] font-bold hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">WhatsApp Support</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      +{siteConfig.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Official Email</p>
                    <a href={`mailto:${siteConfig.email}`} className="text-slate-600 hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Business Working Hours</p>
                    <p className="text-slate-600">{siteConfig.businessHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Center Google Map Location Frame */}
            <div className="glass-card rounded-[2rem] p-4 sm:p-5 border border-white/80 shadow-md">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-[#0a2e3f] flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#00AEEF]" />
                  Service Center Google Map Location
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Interactive Frame
                </span>
              </div>

              {/* Location Search / Adjust Bar */}
              <div className="mb-3">
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-xl p-1.5 border border-slate-200/80 shadow-2xs">
                  <Search className="w-4 h-4 text-[#00AEEF] shrink-0 ml-1.5" />
                  <input
                    type="text"
                    value={mapQuery}
                    onChange={(e) => setMapQuery(e.target.value)}
                    placeholder="Adjust location query..."
                    className="flex-1 bg-transparent text-xs font-medium text-slate-800 focus:outline-none placeholder:text-slate-400"
                  />
                  {mapQuery !== siteConfig.address && (
                    <button
                      type="button"
                      onClick={() => setMapQuery(siteConfig.address)}
                      title="Reset to Head Address"
                      className="text-[10px] font-semibold text-slate-600 hover:text-[#00AEEF] px-2 py-1 rounded-md bg-slate-100 flex items-center gap-1 transition-colors"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Embedded Interactive Map */}
              <div className="w-full h-60 rounded-2xl border border-slate-200 relative overflow-hidden bg-slate-100 shadow-inner">
                <iframe
                  title="Service Center Google Map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full rounded-2xl"
                />
              </div>

              {/* Location Address & Navigation Action */}
              <div className="mt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between px-1 gap-2">
                <div className="flex items-start gap-1.5 text-xs text-slate-700 min-w-0 flex-1">
                  <MapPin className="w-3.5 h-3.5 text-[#00AEEF] shrink-0 mt-0.5" />
                  <span className="font-semibold text-slate-800 line-clamp-2">{mapQuery}</span>
                </div>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(mapQuery)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B6] hover:bg-[#00AEEF] text-white px-3.5 py-1.5 rounded-full text-[11px] font-bold shadow-2xs transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking & Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[2rem] p-8 sm:p-10 border border-white/80 shadow-2xl relative">
              
              <h3 className="text-2xl font-heading font-extrabold text-[#0a2e3f] mb-2">
                Book Service or Request Callback
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Fill details below. Our technical supervisor will call you within 10 minutes to confirm doorstep timing.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50/90 backdrop-blur-md border border-emerald-200 rounded-2xl text-center space-y-3 animate-in zoom-in-95 duration-200">
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-heading font-bold text-emerald-900">
                    Booking Request Sent to WhatsApp!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                    Thank you, <span className="font-bold">{formData.name}</span>. Your doorstep RO service request has been opened on WhatsApp (+91 8417985679).
                  </p>
                  <div className="pt-2">
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMsg()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-xs font-bold shadow-md transition-transform hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp (+91 8417985679)</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0a2e3f] mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0a2e3f] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 84179 85679"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0a2e3f] mb-1">
                        City / Location
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Dwarka, New Delhi"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0a2e3f] mb-1">
                        Service Needed
                      </label>
                      <select
                        value={formData.serviceType}
                        onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                        className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs"
                      >
                        <option value="RO Service & Repair">RO Service & Repair</option>
                        <option value="RO Installation">RO Installation</option>
                        <option value="Filter & Membrane Change">Filter & Membrane Change</option>
                        <option value="AMC Plan Subscription">AMC Plan Subscription</option>
                        <option value="Buy New RO Purifier">Buy New RO Purifier</option>
                        <option value="Commercial RO Plant">Commercial RO Plant</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0a2e3f] mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0a2e3f] mb-1">
                      Address / Problem Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention your address and what problem you are facing (e.g. low water flow, taste issue)..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button
                      type="submit"
                      className="flex-1 btn-sky-gradient py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Service Request</span>
                    </button>

                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMsg()}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3.5 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-[1.01]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>WhatsApp (+91 8417985679)</span>
                    </a>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
