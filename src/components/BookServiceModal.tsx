import React, { useState, useEffect } from 'react';
import { X, Wrench, CheckCircle2, Calendar, MapPin, User, Phone, Send, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const BookServiceModal: React.FC = () => {
  const { isBookingModalOpen, closeBookingModal, selectedServiceForBooking, addBooking, siteConfig } = useApp();
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    serviceType: 'RO Service & Repair',
    preferredDate: '',
    notes: ''
  });

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (selectedServiceForBooking) {
      setFormData(prev => ({ ...prev, serviceType: selectedServiceForBooking }));
    }
  }, [selectedServiceForBooking]);

  if (!isBookingModalOpen) return null;

  const getWhatsAppMessage = (name = formData.name, phone = formData.phone, serviceType = formData.serviceType) => {
    return `Hi, I want to book an RO service / request a callback.%0A%0A*Customer Details:*%0A• Name: ${encodeURIComponent(name || 'Not provided')}%0A• Phone: ${encodeURIComponent(phone || 'Not provided')}%0A• Service: ${encodeURIComponent(serviceType)}%0A• Date: ${encodeURIComponent(formData.preferredDate || 'Earliest available')}%0A• Location: ${encodeURIComponent(formData.city ? `${formData.city}, ${formData.address}` : formData.address || 'Doorstep')}%0A• Note: ${encodeURIComponent(formData.notes || 'N/A')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    addBooking({
      customerName: formData.name,
      phone: formData.phone,
      email: formData.email,
      city: formData.city || 'New Delhi',
      address: formData.address || 'Address provided on call',
      serviceType: formData.serviceType,
      preferredDate: formData.preferredDate || new Date().toISOString().split('T')[0],
      notes: formData.notes
    });

    const waUrl = `https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMessage()}`;
    window.open(waUrl, '_blank');

    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      closeBookingModal();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-2xl rounded-3xl max-w-xl w-full border border-white shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#00AEEF] to-[#0077B6] p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white/20 flex items-center justify-center">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg leading-tight">
                Doorstep RO Service Booking
              </h3>
              <p className="text-xs text-sky-100">
                Connected to WhatsApp: +91 8417985679
              </p>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSuccess ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-900">
                Booking Sent to WhatsApp!
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                Thank you <span className="font-bold">{formData.name}</span>! Your request details have been opened on WhatsApp (+91 8417985679). Our technician will confirm shortly.
              </p>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-md transition-transform hover:scale-105"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open WhatsApp Chat (+91 8417985679)</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* WhatsApp Quick Connect Banner */}
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMessage('Customer', '', formData.serviceType)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-50 border border-emerald-200 text-emerald-800 hover:bg-emerald-100 p-3 rounded-2xl flex items-center justify-between transition-colors shadow-2xs group"
              >
                <div className="flex items-center gap-2.5 text-xs font-bold">
                  <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-emerald-900 font-extrabold leading-tight">Instant Book via WhatsApp</p>
                    <p className="text-[11px] text-emerald-700 font-normal">Chat directly with +91 8417985679</p>
                  </div>
                </div>
                <span className="text-xs font-bold bg-emerald-600 text-white px-3 py-1 rounded-full group-hover:scale-105 transition-transform">
                  Book on WhatsApp
                </span>
              </a>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 8417985679"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Select Service / Request
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white font-medium text-slate-800"
                  >
                    <option value="RO Service & Repair">RO Service & Repair</option>
                    <option value="RO Installation">RO Installation</option>
                    <option value="Filter Change">Filter Change</option>
                    <option value="Membrane Replacement">Membrane Replacement</option>
                    <option value="AMC Plan Subscription">AMC Plan Subscription</option>
                    <option value="Buy New RO Purifier">Buy New RO Purifier</option>
                    <option value="Water Softener">Water Softener</option>
                    <option value="Commercial RO Plant">Commercial RO Plant</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Dwarka, New Delhi"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-slate-50 border border-sky-200 rounded-xl px-3 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Doorstep Address
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder="House/Flat No, Street"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full bg-slate-50 border border-sky-200 rounded-xl pl-9 pr-3 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Issue / Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe your issue or brand model e.g. Aquaguard low water output..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-sky-200 rounded-xl p-3 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white"
                />
              </div>

              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="flex-1 btn-sky-gradient py-3 text-xs font-bold flex items-center justify-center gap-2 shadow-md hover:scale-[1.01] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Confirm Service Booking</span>
                </button>

                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-[1.01]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Book on WhatsApp (+91 8417985679)</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
