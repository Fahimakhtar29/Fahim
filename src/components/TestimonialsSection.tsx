import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, User } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const TestimonialsSection: React.FC = () => {
  const { testimonials } = useApp();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Accent Radial Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#4FC3F7]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <span>Customer Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            What Our Verified Customers Say
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Over 15,000+ satisfied families across Lucknow trust us for pure, healthy water every single day.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="glass-card rounded-[2.5rem] p-8 sm:p-12 border border-white/80 shadow-2xl relative overflow-hidden">
            {/* Quote Icon watermark */}
            <Quote className="w-24 h-24 text-[#00AEEF]/10 absolute -top-4 -right-4 pointer-events-none" />

            <div className="relative z-10 space-y-6">
              
              {/* Stars & Service Used */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 stroke-amber-500" />
                  ))}
                </div>

                <span className="text-xs font-bold text-[#0077B6] bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white shadow-2xs">
                  {current.serviceUsed}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-base sm:text-xl text-[#0a2e3f] font-medium leading-relaxed italic">
                "{current.reviewText}"
              </p>

              {/* Customer Avatar & Bio */}
              <div className="flex items-center justify-between pt-6 border-t border-white/50">
                <div className="flex items-center gap-4">
                  {/* Avatar Placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00AEEF] to-[#4FC3F7] text-white flex items-center justify-center font-bold text-lg shadow-md">
                    {current.avatarUrl ? (
                      <img src={current.avatarUrl} alt={current.customerName} className="w-full h-full rounded-full object-cover" />
                    ) : (
                      <User className="w-6 h-6" />
                    )}
                  </div>

                  <div>
                    <h4 className="font-heading font-bold text-[#0a2e3f] text-base flex items-center gap-1.5">
                      {current.customerName}
                      {current.verifiedBuyer && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" title="Verified Customer" />
                      )}
                    </h4>
                    <p className="text-xs text-slate-500">
                      {current.location} • <span className="text-slate-400">{current.date}</span>
                    </p>
                  </div>
                </div>

                {/* Counter indicator */}
                <span className="text-xs font-bold text-slate-400">
                  {currentIndex + 1} / {testimonials.length}
                </span>
              </div>

            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-[-20px] sm:left-[-28px] top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-[#00AEEF] text-slate-700 hover:text-white w-12 h-12 rounded-full shadow-lg border border-white flex items-center justify-center transition-all z-20"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-[-20px] sm:right-[-28px] top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md hover:bg-[#00AEEF] text-slate-700 hover:text-white w-12 h-12 rounded-full shadow-lg border border-white flex items-center justify-center transition-all z-20"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'w-8 bg-[#00AEEF]' : 'w-2 bg-sky-200/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
