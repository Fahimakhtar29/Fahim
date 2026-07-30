export interface Product {
  id: string;
  name: string;
  category: 'Domestic RO' | 'UV + UF' | 'Alkaline Mineral RO' | 'Commercial RO' | 'Copper RO';
  price: number;
  originalPrice: number;
  discountBadge?: string;
  isBestSeller?: boolean;
  features: string[];
  capacity: string;
  warranty: string;
  imageUrl?: string; // Optional custom URL uploaded by user; if undefined, uses clean SVG/CSS placeholder frame
  description: string;
  purificationStages: string;
  rating: number;
  reviewsCount: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string;
  shortDesc: string;
  detailedDesc: string;
  estimatedPrice: string;
  timeRequired: string;
  features: string[];
}

export interface AMCPlan {
  id: string;
  name: 'Silver Plan' | 'Gold Plan' | 'Platinum Plan';
  badge?: string;
  price: number;
  period: string;
  isPopular?: boolean;
  features: {
    text: string;
    included: boolean;
  }[];
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface PurificationStep {
  id: number;
  stageName: string;
  impurityRemoved: string;
  description: string;
  iconName: string;
  color: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  location: string;
  rating: number;
  reviewText: string;
  verifiedBuyer: boolean;
  date: string;
  serviceUsed: string;
  avatarUrl?: string;
}

export interface FAQ {
  id: string;
  category: 'General' | 'RO Service' | 'AMC' | 'Buying Guide' | 'Maintenance';
  question: string;
  answer: string;
}

export interface ServiceBooking {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  city: string;
  address: string;
  serviceType: string;
  preferredDate: string;
  notes?: string;
  status: 'Pending' | 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface SiteConfig {
  companyName: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  businessHours: string;
  heroHeading: string;
  heroSubheading: string;
  heroCustomImage?: string;
}
