import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { ServiceLocationsSection } from './components/ServiceLocationsSection';
import { ProductsSection } from './components/ProductsSection';
import { AMCSection } from './components/AMCSection';
import { WhyROSection } from './components/WhyROSection';
import { WorkProcessSection } from './components/WorkProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { BookServiceModal } from './components/BookServiceModal';
import { ProductDetailModal } from './components/ProductDetailModal';
import { AdminPanelModal } from './components/AdminPanelModal';

function AppContent() {
  return (
    <div className="min-h-screen flex flex-col bg-[#EAF9FF]/40 text-slate-800 selection:bg-[#00AEEF] selection:text-white relative">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <ServicesSection />
        <ServiceLocationsSection />
        <ProductsSection />
        <AMCSection />
        <WhyROSection />
        <WorkProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call / WhatsApp / Book / Scroll Top Actions */}
      <FloatingButtons />

      {/* Modals */}
      <BookServiceModal />
      <ProductDetailModal />
      <AdminPanelModal />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
