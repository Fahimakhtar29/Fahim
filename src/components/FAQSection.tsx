import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Search, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FAQSection: React.FC = () => {
  const { faqs } = useApp();
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'General', 'RO Service', 'AMC', 'Buying Guide', 'Maintenance'];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'All' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Accent Flares */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Frequently Asked Questions (15 Q&As)
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Find quick answers about RO servicing, membrane replacements, AMC plans, and TDS levels.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search questions e.g. TDS, AMC, membrane..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/70 backdrop-blur-md border border-white rounded-full pl-11 pr-4 py-2.5 text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-xs"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white shadow-xs'
                    : 'bg-white/70 backdrop-blur-md text-slate-600 border border-white hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white/60 backdrop-blur-md rounded-2xl border border-white">
              <p className="text-sm font-bold text-[#0a2e3f]">No matching questions found.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                className="mt-3 btn-sky-gradient text-xs px-4 py-2 font-bold"
              >
                Clear Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border backdrop-blur-md ${
                    isOpen
                      ? 'bg-white/90 border-[#00AEEF] shadow-lg'
                      : 'bg-white/60 border-white/80 hover:border-white hover:bg-white/80 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-heading font-bold text-[#0a2e3f] text-sm sm:text-base focus:outline-hidden"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-[#00AEEF] bg-white/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-white shadow-2xs">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#00AEEF] shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-white/50 animate-in fade-in-50 duration-200">
                      <p className="pt-3">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </section>
  );
};
