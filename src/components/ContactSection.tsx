import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Clock, Send, CheckCircle2, Building, Sparkles, Navigation, Search, RotateCcw, Building2 } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { branchOffices } from '../data/initialData';

export const ContactSection: React.FC = () => {
  const { siteConfig, addBooking } = useApp();
  const [selectedBranchId, setSelectedBranchId] = useState<string>('branch-lucknow');
  const [mapQuery, setMapQuery] = useState(siteConfig.address);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Lucknow',
    serviceType: 'RO Service & Repair',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const selectedBranch = branchOffices.find(b => b.id === selectedBranchId) || branchOffices[3] || branchOffices[0];

  useEffect(() => {
    if (selectedBranch) {
      setMapQuery(selectedBranch.mapEmbedQuery || selectedBranch.address);
    }
  }, [selectedBranchId]);

  const handleBranchSelect = (branchId: string, branchCity: string) => {
    setSelectedBranchId(branchId);
    setFormData(prev => ({ ...prev, city: branchCity }));
  };

  const getWhatsAppMsg = () => {
    return `Hi, I want to book a service / request a callback.%0A%0A*Customer Details:*%0A• Name: ${encodeURIComponent(formData.name || 'Customer')}%0A• Phone: ${encodeURIComponent(formData.phone || 'N/A')}%0A• Branch/Location: ${encodeURIComponent(formData.city || selectedBranch?.city || 'Lucknow')}%0A• Service Needed: ${encodeURIComponent(formData.serviceType)}%0A• Message: ${encodeURIComponent(formData.message || 'Callback requested')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addBooking({
      customerName: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city || selectedBranch?.city || 'Lucknow',
      address: formData.message || `Contact Request for ${selectedBranch?.city} Branch`,
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
        city: selectedBranch?.city || 'Lucknow',
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
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <Mail className="w-3.5 h-3.5" />
            <span>24/7 Helpline & Branch Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Contact Us & Visit Our Branches
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Headquartered in Lucknow with active service branches in <span className="font-bold text-[#0077B6]">Ghosi, Mau, and Azamgarh</span>. Book a technician or visit us in person.
          </p>
        </div>

        {/* Branch Quick Switcher Buttons */}
        <div className="mb-10 max-w-4xl mx-auto">
          <div className="text-center mb-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
              Select Branch Office to View Location & Details:
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {branchOffices.map((branch) => {
              const isSelected = selectedBranchId === branch.id;
              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => handleBranchSelect(branch.id, branch.city)}
                  className={`p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-2.5 shadow-2xs ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#00AEEF] to-[#0077B6] text-white border-[#0077B6] shadow-md ring-2 ring-[#00AEEF]/40'
                      : 'bg-white/80 hover:bg-white text-slate-800 border-slate-200 hover:border-[#00AEEF]/50'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-sky-50 text-[#0077B6]'
                  }`}>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-extrabold truncate">{branch.city} Branch</p>
                    <p className={`text-[10px] truncate ${isSelected ? 'text-sky-100' : 'text-slate-500'}`}>
                      {branch.district}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Info & Google Map Placeholder */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="glass-card rounded-[2rem] p-6 sm:p-7 border border-white/80 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-white/50">
                <div>
                  <h3 className="text-lg font-heading font-bold text-[#0a2e3f]">
                    {selectedBranch?.branchName || 'Branch Office'}
                  </h3>
                  <p className="text-xs text-slate-500 font-semibold">
                    {selectedBranch?.district} • PIN: {selectedBranch?.pincode}
                  </p>
                </div>
                <span className="text-[10px] font-extrabold bg-sky-100 text-[#0077B6] px-2.5 py-1 rounded-full border border-sky-200">
                  {selectedBranch?.type}
                </span>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Address</p>
                    <p className="text-slate-600 leading-snug">{selectedBranch?.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Helpline</p>
                    <a
                      href={`tel:${(selectedBranch?.phone || siteConfig.phone).replace(/[^0-9+]/g, '')}`}
                      className="text-[#00AEEF] font-bold hover:underline"
                    >
                      {selectedBranch?.phone || siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200 shadow-2xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">WhatsApp Support</p>
                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=Hi%20${encodeURIComponent(selectedBranch?.city || '')}%20Branch%2C%20I%20need%20RO%20Service`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >
                      +{siteConfig.whatsapp}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Email</p>
                    <a href={`mailto:${selectedBranch?.email || siteConfig.email}`} className="text-slate-600 hover:underline">
                      {selectedBranch?.email || siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/80 backdrop-blur-md text-[#00AEEF] flex items-center justify-center shrink-0 border border-white shadow-2xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a2e3f] mb-0.5">Working Hours</p>
                    <p className="text-slate-600">{selectedBranch?.timing || siteConfig.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Covered Areas in this branch */}
              {selectedBranch?.coverageAreas && (
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                    {selectedBranch.city} Coverage Localities:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {selectedBranch.coverageAreas.slice(0, 6).map((area, aIdx) => (
                      <span key={aIdx} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Service Center Google Map Location Frame */}
            <div className="glass-card rounded-[2rem] p-4 sm:p-5 border border-white/80 shadow-md">
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-bold text-[#0a2e3f] flex items-center gap-1.5">
                  <Building className="w-4 h-4 text-[#00AEEF]" />
                  {selectedBranch?.city} Google Map Location
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200 shadow-2xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Interactive Map
                </span>
              </div>

              {/* Embedded Interactive Map */}
              <div className="w-full h-56 rounded-2xl border border-slate-200 relative overflow-hidden bg-slate-100 shadow-inner">
                <iframe
                  title={`${selectedBranch?.city} Map`}
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
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
                  <span className="font-semibold text-slate-800 line-clamp-2">{selectedBranch?.address}</span>
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
                Fill details below. Our technical supervisor for <span className="font-bold text-[#0077B6]">{formData.city || 'your area'}</span> will call you within 10 minutes.
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
                    Thank you, <span className="font-bold">{formData.name}</span>. Your doorstep RO service request for <span className="font-bold">{formData.city}</span> has been forwarded to our WhatsApp helpline (+91 8417985679).
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
                        Select City / Branch *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => {
                          const val = e.target.value;
                          setFormData({ ...formData, city: val });
                          const matchedBranch = branchOffices.find(b => b.city.toLowerCase() === val.toLowerCase());
                          if (matchedBranch) setSelectedBranchId(matchedBranch.id);
                        }}
                        className="w-full bg-white/70 backdrop-blur-md border border-white rounded-xl px-3.5 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-2xs font-semibold text-slate-800"
                      >
                        <option value="Lucknow">Lucknow (Head Office & 15+ Areas)</option>
                        <option value="Ghosi">Ghosi Branch (Mau District)</option>
                        <option value="Mau">Mau Branch (Mau Nath Bhanjan)</option>
                        <option value="Azamgarh">Azamgarh Branch (Division Hub)</option>
                      </select>
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
                        <option value="Commercial RO Plant">Commercial RO Plant (50-1000 LPH)</option>
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
                      Complete Address / Problem Details
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention your exact colony/locality name and issue faced (e.g. Near Madhuban Road Ghosi / Sadar Bazar, low water pressure, bad taste)..."
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

