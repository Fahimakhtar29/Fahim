import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, ServiceItem, AMCPlan, Testimonial, FAQ, ServiceBooking, SiteConfig } from '../types';
import { initialProducts, initialServices, initialAMCPlans, initialTestimonials, initialFAQs, initialSiteConfig } from '../data/initialData';

interface AppContextType {
  siteConfig: SiteConfig;
  products: Product[];
  services: ServiceItem[];
  amcPlans: AMCPlan[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  bookings: ServiceBooking[];
  wishlist: string[];
  
  // Modals & Selections
  isBookingModalOpen: boolean;
  selectedServiceForBooking: string | null;
  selectedProductForModal: Product | null;
  isAdminModalOpen: boolean;
  
  // Actions
  openBookingModal: (serviceName?: string) => void;
  closeBookingModal: () => void;
  openProductModal: (product: Product) => void;
  closeProductModal: () => void;
  openAdminModal: () => void;
  closeAdminModal: () => void;
  
  toggleWishlist: (productId: string) => void;
  addBooking: (bookingData: Omit<ServiceBooking, 'id' | 'createdAt' | 'status'>) => void;
  
  // Admin Operations
  updateProduct: (product: Product) => void;
  addProduct: (product: Omit<Product, 'id' | 'rating' | 'reviewsCount'>) => void;
  deleteProduct: (id: string) => void;
  updateSiteConfig: (config: Partial<SiteConfig>) => void;
  resetToDefaults: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(() => {
    const saved = localStorage.getItem('ro_site_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      parsed.phone = initialSiteConfig.phone;
      parsed.whatsapp = initialSiteConfig.whatsapp;
      parsed.email = initialSiteConfig.email;
      parsed.address = initialSiteConfig.address;
      parsed.businessHours = initialSiteConfig.businessHours;
      if (!parsed.heroCustomImage) {
        parsed.heroCustomImage = initialSiteConfig.heroCustomImage;
      }
      return parsed;
    }
    return initialSiteConfig;
  });

  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ro_products');
    if (saved) {
      const parsed: Product[] = JSON.parse(saved);
      return parsed.map(p => {
        if (p.id === 'prod-1') {
          return { 
            ...p, 
            name: initialProducts[0].name,
            price: initialProducts[0].price,
            originalPrice: initialProducts[0].originalPrice,
            discountBadge: initialProducts[0].discountBadge,
            imageUrl: initialProducts[0].imageUrl 
          };
        }
        if (p.id === 'prod-2') {
          return { 
            ...p, 
            name: initialProducts[1].name,
            price: initialProducts[1].price,
            originalPrice: initialProducts[1].originalPrice,
            discountBadge: initialProducts[1].discountBadge,
            imageUrl: initialProducts[1].imageUrl 
          };
        }
        if (p.id === 'prod-3') {
          return { 
            ...p, 
            name: initialProducts[2].name,
            price: initialProducts[2].price,
            originalPrice: initialProducts[2].originalPrice,
            discountBadge: initialProducts[2].discountBadge,
            imageUrl: initialProducts[2].imageUrl 
          };
        }
        if (p.id === 'prod-4') {
          return { 
            ...p, 
            name: initialProducts[3].name,
            imageUrl: initialProducts[3].imageUrl 
          };
        }
        if (p.id === 'prod-5') {
          return { 
            ...p, 
            name: initialProducts[4].name,
            imageUrl: initialProducts[4].imageUrl 
          };
        }
        if (p.id === 'prod-6') {
          return { 
            ...p, 
            name: initialProducts[5].name,
            price: initialProducts[5].price,
            originalPrice: initialProducts[5].originalPrice,
            discountBadge: initialProducts[5].discountBadge,
            imageUrl: initialProducts[5].imageUrl 
          };
        }
        if (p.id === 'prod-7') {
          return { 
            ...p, 
            name: initialProducts[6].name,
            price: initialProducts[6].price,
            originalPrice: initialProducts[6].originalPrice,
            discountBadge: initialProducts[6].discountBadge,
            imageUrl: initialProducts[6].imageUrl 
          };
        }
        if (p.id === 'prod-8') {
          return { 
            ...p, 
            name: initialProducts[7].name,
            imageUrl: initialProducts[7].imageUrl 
          };
        }
        return p;
      });
    }
    return initialProducts;
  });

  const [services] = useState<ServiceItem[]>(initialServices);
  const [amcPlans] = useState<AMCPlan[]>(initialAMCPlans);
  const [testimonials] = useState<Testimonial[]>(initialTestimonials);
  const [faqs] = useState<FAQ[]>(initialFAQs);

  const [bookings, setBookings] = useState<ServiceBooking[]>(() => {
    const saved = localStorage.getItem('ro_bookings');
    return saved ? JSON.parse(saved) : [
      {
        id: 'bk-101',
        customerName: 'Amit Sharma',
        phone: '9876543210',
        city: 'Lucknow',
        address: 'Gomti Nagar, Lucknow',
        serviceType: 'RO Service & Filter Change',
        preferredDate: '2026-07-28',
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      }
    ];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('ro_wishlist');
    return saved ? JSON.parse(saved) : ['prod-1'];
  });

  // Modal states
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedServiceForBooking, setSelectedServiceForBooking] = useState<string | null>(null);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [isAdminModalOpen, setIsAdminModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('ro_site_config', JSON.stringify(siteConfig));
  }, [siteConfig]);

  useEffect(() => {
    localStorage.setItem('ro_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('ro_bookings', JSON.stringify(bookings));
  }, [bookings]);

  useEffect(() => {
    localStorage.setItem('ro_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const openBookingModal = (serviceName?: string) => {
    setSelectedServiceForBooking(serviceName || 'RO Service & Repair');
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedServiceForBooking(null);
  };

  const openProductModal = (product: Product) => {
    setSelectedProductForModal(product);
  };

  const closeProductModal = () => {
    setSelectedProductForModal(null);
  };

  const openAdminModal = () => {
    setIsAdminModalOpen(true);
  };

  const closeAdminModal = () => {
    setIsAdminModalOpen(false);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const addBooking = (bookingData: Omit<ServiceBooking, 'id' | 'createdAt' | 'status'>) => {
    const newBooking: ServiceBooking = {
      ...bookingData,
      id: `bk-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'Pending'
    };
    setBookings(prev => [newBooking, ...prev]);
  };

  const updateProduct = (updatedProduct: Product) => {
    setProducts(prev => prev.map(p => p.id === updatedProduct.id ? updatedProduct : p));
  };

  const addProduct = (newProductData: Omit<Product, 'id' | 'rating' | 'reviewsCount'>) => {
    const newProd: Product = {
      ...newProductData,
      id: `prod-${Date.now()}`,
      rating: 5.0,
      reviewsCount: 1
    };
    setProducts(prev => [newProd, ...prev]);
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateSiteConfig = (config: Partial<SiteConfig>) => {
    setSiteConfig(prev => ({ ...prev, ...config }));
  };

  const resetToDefaults = () => {
    setSiteConfig(initialSiteConfig);
    setProducts(initialProducts);
    localStorage.removeItem('ro_site_config');
    localStorage.removeItem('ro_products');
  };

  return (
    <AppContext.Provider
      value={{
        siteConfig,
        products,
        services,
        amcPlans,
        testimonials,
        faqs,
        bookings,
        wishlist,
        isBookingModalOpen,
        selectedServiceForBooking,
        selectedProductForModal,
        isAdminModalOpen,
        openBookingModal,
        closeBookingModal,
        openProductModal,
        closeProductModal,
        openAdminModal,
        closeAdminModal,
        toggleWishlist,
        addBooking,
        updateProduct,
        addProduct,
        deleteProduct,
        updateSiteConfig,
        resetToDefaults
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
