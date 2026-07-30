import { Product, ServiceItem, AMCPlan, WhyChooseUsItem, PurificationStep, Testimonial, FAQ, SiteConfig } from '../types';

export const initialSiteConfig: SiteConfig = {
  companyName: "Indian RO Purifier Sales & Services",
  phone: "+91 8417985679",
  whatsapp: "918417985679",
  email: "indianenterprisesghosi@gmail.com",
  address: "Modern HomeZ, Near Swapnlok Residency, Palka Chauraha, Behta, Lucknow",
  businessHours: "Mon - Sun: 8:00 AM - 9:00 PM (365 Days Open)",
  heroHeading: "Pure Water. Healthy Family.",
  heroSubheading: "Complete RO Sales, Service, Installation, Repair & AMC under one roof across India.",
  heroCustomImage: "https://lh3.googleusercontent.com/d/1zZK5my6lBjJXsKYzkJcipXksMKwtO5NW"
};

export const initialProducts: Product[] = [
  {
    id: "prod-1",
    name: "Purelle Copper RO + UV + UF + Alkaline",
    category: "Alkaline Mineral RO",
    price: 12025,
    originalPrice: 18500,
    discountBadge: "35% OFF",
    isBestSeller: true,
    features: [
      "12 Liters High Capacity Storage Tank",
      "Active Copper + Zinc Infusion Technology",
      "Auto TDS Adjuster (up to 2000 ppm)",
      "Food Grade BFA Free Tank",
      "1 Year Complete Doorstep Warranty"
    ],
    capacity: "12 Liters",
    warranty: "1 Year On-site Warranty",
    description: "Our flagship RO Purifier combines Active Copper, Alkaline Minerals, and 8-stage RO filtration to give your family 100% pure, sweet, and immunity-boosting drinking water.",
    purificationStages: "8 Stages (Sediment + Carbon + RO + UV + UF + Copper + Alkaline + TDS Control)",
    rating: 4.9,
    reviewsCount: 342,
    imageUrl: "https://lh3.googleusercontent.com/d/1By9ma9V5bhxfeVVHJsgv7yAJdL8C-kDb"
  },
  {
    id: "prod-2",
    name: "HyCross Mineral RO + UV + UF Purifier",
    category: "Domestic RO",
    price: 14016,
    originalPrice: 21900,
    discountBadge: "36% OFF",
    isBestSeller: false,
    features: [
      "Zero Water Wastage Technology",
      "In-Tank UV LED Disinfection",
      "Wall Mountable Transparent Design",
      "9 Liters Storage Capacity",
      "Save 100% Water Retained"
    ],
    capacity: "9 Liters",
    warranty: "1 Year + 3 Years Free Service",
    description: "Premium Mineral RO water purifier featuring double purification of RO + UV + UF + TDS Control and Save Water Technology.",
    purificationStages: "7 Stages Purification",
    rating: 4.8,
    reviewsCount: 218,
    imageUrl: "https://lh3.googleusercontent.com/d/15C25Ljw211wUgZ_wqEQaRYnfhA8UZCtH"
  },
  {
    id: "prod-3",
    name: "EX-Ter Copper RO + UV",
    category: "Copper RO",
    price: 12000,
    originalPrice: 17000,
    discountBadge: "29% OFF",
    isBestSeller: true,
    features: [
      "100% Stainless Steel Storage Tank",
      "Active Copper & Zinc Technology",
      "Infused Natural Essential Minerals",
      "High GPD Fast Flow Membrane",
      "Smart LED Service Alerts"
    ],
    capacity: "6 Liters SS Tank",
    warranty: "1 Year Comprehensive Warranty",
    description: "Hygienic stainless steel tank purifier with Active Copper Boost, ensuring chemical-free, germ-free crystal clean water.",
    purificationStages: "9 Stages Purification",
    rating: 4.9,
    reviewsCount: 189,
    imageUrl: "https://lh3.googleusercontent.com/d/1Dcjz1JglOSeBYcBPXAAwIX0_2MBzKShB"
  },
  {
    id: "prod-4",
    name: "Altroz Zinc Alkaline 12L Mineral RO",
    category: "Alkaline Mineral RO",
    price: 10499,
    originalPrice: 16999,
    discountBadge: "38% OFF",
    isBestSeller: false,
    features: [
      "Alkaline Balance & Active Zinc Boost",
      "High Performance 80 GPD RO Membrane",
      "Antioxidant Rich Hydrogen Water",
      "Crystal Clear LED Display",
      "Suitable for Borewell & Municipal Water"
    ],
    capacity: "12 Liters",
    warranty: "1 Year On-site Warranty",
    description: "Designed for high-TDS borewell water, this alkaline RO purifier with Active Zinc Boost neutralizes acidity in the body and enhances immunity.",
    purificationStages: "8 Stages Purification",
    rating: 4.7,
    reviewsCount: 156,
    imageUrl: "https://lh3.googleusercontent.com/d/1zUPRkMmAsguyv-EiJEjFykC_xNLEWSuH"
  },
  {
    id: "prod-5",
    name: "Altroz Pure UV+UF Water Purifier (Municipal Water)",
    category: "UV + UF",
    price: 5499,
    originalPrice: 8999,
    discountBadge: "39% OFF",
    isBestSeller: false,
    features: [
      "Zero Water Wastage",
      "High Grade Stainless Steel UV Chamber",
      "Ultrafiltration (UF) Membrane",
      "Ideal for Low TDS Water (< 200 ppm)",
      "Compact Wall Mountable Design"
    ],
    capacity: "7 Liters",
    warranty: "1 Year Warranty",
    description: "Perfect eco-friendly solution for municipal water supply with zero wastewater generation and high flow rate.",
    purificationStages: "5 Stages (Sediment + Carbon + UV + UF + Mineral Cartridge)",
    rating: 4.6,
    reviewsCount: 94,
    imageUrl: "https://lh3.googleusercontent.com/d/1QlMDsJ5v7nD2wgLInb866NM0JDFMFAC0"
  },
  {
    id: "prod-6",
    name: "Commercial 50 LPH Heavy Duty RO Plant",
    category: "Commercial RO",
    price: 18000,
    originalPrice: 25000,
    discountBadge: "28% OFF",
    isBestSeller: true,
    features: [
      "50 Liters Per Hour Flow Rate",
      "Heavy Duty Stainless Steel Skid Frame",
      "Dual 100 GPD Booster Pumps",
      "Ideal for Restaurants, Schools, Offices",
      "TDS Reduction up to 3000 PPM"
    ],
    capacity: "50 LPH Continuous",
    warranty: "1 Year Commercial Warranty",
    description: "Industrial grade 50 LPH commercial RO plant built for heavy daily usage in offices, schools, hostels, and hospitals.",
    purificationStages: "6 Stage Commercial Filtration",
    rating: 4.9,
    reviewsCount: 112,
    imageUrl: "https://lh3.googleusercontent.com/d/1oFDDZQ15FWm5TaYqY9CSbuxSzmk0ZroX"
  },
  {
    id: "prod-7",
    name: "Commercial 100 LPH Stainless Steel RO System",
    category: "Commercial RO",
    price: 22000,
    originalPrice: 29999,
    discountBadge: "27% OFF",
    isBestSeller: false,
    features: [
      "100 Liters Per Hour Flow Capacity",
      "Fully Automatic Control Panel with Auto Flush",
      "High Pressure SS Vessel & Membrane",
      "Low Power Consumption",
      "Free Onsite Installation Included"
    ],
    capacity: "100 LPH Continuous",
    warranty: "1 Year Comprehensive Warranty",
    description: "High capacity 100 LPH commercial water purification system with digital flow meters and automatic flush valve.",
    purificationStages: "7 Stage Industrial Purification",
    rating: 4.9,
    reviewsCount: 87,
    imageUrl: "https://lh3.googleusercontent.com/d/1tg3O6vf7rOeVF7MNhTffk0bYU6uxU4rX"
  },
  {
    id: "prod-8",
    name: "Himalaya Pure",
    category: "Domestic RO",
    price: 11999,
    originalPrice: 17500,
    discountBadge: "31% OFF",
    isBestSeller: false,
    features: [
      "Saves Kitchen Wall Space (Under Sink)",
      "Includes Designer Faucet/Tap",
      "8 Liters Hydrostatic Hydro Tank",
      "Quick-Change Bayonet Filters",
      "Ultra-Silent Operation"
    ],
    capacity: "8 Liters Pressure Tank",
    warranty: "1 Year Doorstep Warranty",
    description: "Elegant under-sink RO purifier that fits neatly below your kitchen counter, connected directly to a stylish chrome tap.",
    purificationStages: "7 Stage Modular RO Filtration",
    rating: 4.8,
    reviewsCount: 143,
    imageUrl: "https://lh3.googleusercontent.com/d/190QzjpH-rkHW6l8a9Mv7hjEypKoddXWI"
  }
];

export const initialServices: ServiceItem[] = [
  {
    id: "serv-1",
    title: "RO Installation",
    iconName: "Wrench",
    shortDesc: "Professional unboxing, wall mounting, tap plumbing, and precision TDS calibration.",
    detailedDesc: "Complete doorstep installation by certified RO engineers. Includes unboxing, wall bracket mounting, water inlet tap plumbing connection, wastewater pipe setup, and double TDS adjustment for pure water taste.",
    estimatedPrice: "₹399",
    timeRequired: "45 Minutes",
    features: ["Certified Engineer", "Wall Mount Brackets Included", "TDS Testing & Calibration", "30-Day Service Guarantee"]
  },
  {
    id: "serv-2",
    title: "RO Repair",
    iconName: "Hammer",
    shortDesc: "Fast doorstep diagnosis & repair for low water flow, motor noise, leakages or no power.",
    detailedDesc: "Expert repair service for all major brands (Kent, Aquaguard, Pureit, Livpure, Havells, etc.). We fix motor pump failure, adapter burn, PCB fault, continuous wastewater flow, and water leakage.",
    estimatedPrice: "₹299 + Parts",
    timeRequired: "30 - 60 Minutes",
    features: ["Same Day 2-Hour Arrival", "Original Spare Parts Used", "Transparent Cost Estimate", "Multi-brand Expertise"]
  },
  {
    id: "serv-3",
    title: "RO AMC (Annual Contract)",
    iconName: "ShieldCheck",
    shortDesc: "Year-round protection covering free maintenance visits, filter replacement & spare parts.",
    detailedDesc: "Hassle-free 1-Year Annual Maintenance Contract. Enjoy regular preventive servicing, zero visit charges, free filter replacements, and priority service response whenever you call.",
    estimatedPrice: "Starting ₹1,499/Yr",
    timeRequired: "1 Year Coverage",
    features: ["2 to 4 Free Routine Visits", "Free Filter Replacement", "Zero Labor Charges", "100% Peace of Mind"]
  },
  {
    id: "serv-4",
    title: "Filter Change",
    iconName: "RefreshCw",
    shortDesc: "Replacement of sediment filter, pre-carbon, and post-carbon filter for clean water.",
    detailedDesc: "Removal of choked or old filters and replacement with 100% original food-grade sediment and activated carbon filters. Removes bad odor, chlorine, dirt, mud, and organic toxins.",
    estimatedPrice: "₹599 - ₹999",
    timeRequired: "30 Minutes",
    features: ["100% Genuine Filters", "Improves Water Flow Rate", "Flushing & Sanitation Included", "Protects RO Membrane"]
  },
  {
    id: "serv-5",
    title: "Membrane Replacement",
    iconName: "Layers",
    shortDesc: "High GPD RO Membrane replacement to drastically lower high TDS borewell water.",
    detailedDesc: "Choked RO membrane leads to low water output or high TDS. We replace old membrane with high GPD (75/80/100 GPD) original thin-film composite membrane for crystal pure taste.",
    estimatedPrice: "₹1,299 - ₹1,899",
    timeRequired: "45 Minutes",
    features: ["High TDS Reduction (up to 95%)", "Long-life TFC Membrane", "TDS Meter Verification", "3 Months Warranty"]
  },
  {
    id: "serv-6",
    title: "TDS Adjustment & Mineralization",
    iconName: "Sliders",
    shortDesc: "Fine-tuning total dissolved solids and re-infusing essential Calcium & Magnesium.",
    detailedDesc: "Water that is too low in TDS tastes flat and lacks minerals. We calibrate your TDS level to the WHO recommended range (80-150 PPM) and install active alkaline mineral cartridges.",
    estimatedPrice: "₹349",
    timeRequired: "20 Minutes",
    features: ["WHO Standard TDS Setup", "Taste Enhancement", "Alkaline Cartridge Addition Option", "Free Water Quality Test"]
  },
  {
    id: "serv-7",
    title: "Water Softener Service",
    iconName: "Droplet",
    shortDesc: "Hard water treatment plant installation & resin salt regeneration for home & kitchen.",
    detailedDesc: "Hard water causes scaling on taps, appliances, and skin dryness. We service bathroom & main line water softeners, top up ion-exchange resin, and perform brine regeneration.",
    estimatedPrice: "₹899",
    timeRequired: "60 Minutes",
    features: ["Prevents Hard Water Scale", "Resin Washing & Refill", "Hardness Testing Kit Check", "Extends RO & Appliance Life"]
  },
  {
    id: "serv-8",
    title: "Commercial RO Plant Service",
    iconName: "Building2",
    shortDesc: "Erection, maintenance, chemical washing & membrane cleaning for 50 LPH - 1000 LPH plants.",
    detailedDesc: "Complete solution for commercial RO systems in factories, offices, restaurants, and residential societies. Includes high pressure pump overhauling, antiscalant dosing, and CIP membrane chemical washing.",
    estimatedPrice: "Custom Quote",
    timeRequired: "2 - 4 Hours",
    features: ["Industrial Trained Technicians", "Chemical CIP Washing", "Dosing Pump Calibration", "Dedicated AMC Available"]
  }
];

export const initialAMCPlans: AMCPlan[] = [
  {
    id: "amc-silver",
    name: "Silver Plan",
    badge: "Basic Protection",
    price: 1499,
    period: "/ Year",
    isPopular: false,
    features: [
      { text: "2 Free Service Visits Per Year", included: true },
      { text: "Free Filter Cleaning & Flushing", included: true },
      { text: "Free TDS & Water Quality Checking", included: true },
      { text: "20% Discount on Spare Parts", included: true },
      { text: "Free Sediment Filter Replacement", included: false },
      { text: "Free RO Membrane Replacement", included: false },
      { text: "Free Booster Pump & Electricals", included: false }
    ]
  },
  {
    id: "amc-gold",
    name: "Gold Plan",
    badge: "Most Popular",
    price: 2999,
    period: "/ Year",
    isPopular: true,
    features: [
      { text: "3 Free Service Visits Per Year", included: true },
      { text: "Free Replacement of Sediment Filter", included: true },
      { text: "Free Replacement of Carbon Filter", included: true },
      { text: "Free Replacement of Post-Carbon Filter", included: true },
      { text: "Zero Visit & Service Labor Charges", included: true },
      { text: "50% Discount on RO Membrane", included: true },
      { text: "Free Booster Pump & Electricals", included: false }
    ]
  },
  {
    id: "amc-platinum",
    name: "Platinum Plan",
    badge: "100% Zero Extra Cost",
    price: 4499,
    period: "/ Year",
    isPopular: false,
    features: [
      { text: "Unlimited Breakdown Service Calls", included: true },
      { text: "4 Free Scheduled Maintenance Visits", included: true },
      { text: "Free Replacement of ALL Filters (Sediment + Carbon)", included: true },
      { text: "FREE Original RO Membrane Replacement", included: true },
      { text: "FREE Booster Pump & SMPS Adapter Replacement", included: true },
      { text: "FREE SV (Solenoid Valve) & UV Lamp Replacement", included: true },
      { text: "Priority Emergency 2-Hour Response", included: true }
    ]
  }
];

export const initialWhyChooseUs: WhyChooseUsItem[] = [
  {
    id: "why-1",
    title: "Same Day Service",
    description: "Guaranteed 2-hour doorstep response across major cities so your family never runs out of pure water.",
    iconName: "Clock"
  },
  {
    id: "why-2",
    title: "Certified Technician",
    description: "100% background-verified, company trained, and uniform-wearing expert RO service engineers.",
    iconName: "UserCheck"
  },
  {
    id: "why-3",
    title: "Original Spare Parts",
    description: "We strictly use 100% genuine, food-grade membranes, booster pumps, and active carbon filters.",
    iconName: "Award"
  },
  {
    id: "why-4",
    title: "Affordable Price",
    description: "Transparent rate card with no hidden charges. Upfront quotation provided before starting work.",
    iconName: "Tag"
  },
  {
    id: "why-5",
    title: "Doorstep Service",
    description: "Hassle-free service right at your home with mess-free execution and sanitary protocols.",
    iconName: "Home"
  },
  {
    id: "why-6",
    title: "1 Year AMC",
    description: "Comprehensive annual maintenance plans giving you 365 days of zero maintenance worries.",
    iconName: "Shield"
  }
];

export const purificationSteps: PurificationStep[] = [
  {
    id: 1,
    stageName: "Sediment Filter",
    impurityRemoved: "Sand, Mud, Dirt & Rust",
    description: "Removes coarse physical particles up to 5 microns, protecting internal membranes.",
    iconName: "Filter",
    color: "bg-blue-500"
  },
  {
    id: 2,
    stageName: "Activated Carbon Filter",
    impurityRemoved: "Chlorine, Pesticides & Bad Odor",
    description: "Absorbs harmful chemicals, organic contaminants, foul smell, and restores natural water clarity.",
    iconName: "Wind",
    color: "bg-cyan-500"
  },
  {
    id: 3,
    stageName: "High GPD RO Membrane",
    impurityRemoved: "Heavy Metals, Lead & Arsenic",
    description: "Filters ultra-fine impurities down to 0.0001 micron, removing dissolved salts and toxic metals.",
    iconName: "Sparkles",
    color: "bg-sky-500"
  },
  {
    id: 4,
    stageName: "UV Disinfection Chamber",
    impurityRemoved: "Bacteria, Viruses & Pathogens",
    description: "Ultraviolet rays deactivate 99.99% of disease-causing microorganisms without added chemicals.",
    iconName: "Zap",
    color: "bg-indigo-500"
  },
  {
    id: 5,
    stageName: "Ultrafiltration (UF)",
    impurityRemoved: "Dead Microbes & Cysts",
    description: "Moulded membrane block removes physical cysts and remaining tiny suspended particles.",
    iconName: "Shield",
    color: "bg-teal-500"
  },
  {
    id: 6,
    stageName: "Active Copper + Zinc",
    impurityRemoved: "Low Immunity & Flat Taste",
    description: "Infuses optimum copper and zinc ions into water to boost digestion, immunity, and overall health.",
    iconName: "HeartPulse",
    color: "bg-amber-500"
  },
  {
    id: 7,
    stageName: "Alkaline & TDS Balance",
    impurityRemoved: "Acidity & Low pH Level",
    description: "Maintains optimum alkaline pH (7.5 - 8.5) and retains essential natural minerals for healthy drinking.",
    iconName: "CheckCircle",
    color: "bg-emerald-500"
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: "test-1",
    customerName: "Rajesh Sharma",
    location: "Dwarka, New Delhi",
    rating: 5,
    reviewText: "Outstanding service! Called them at 10 AM for Kent RO membrane replacement and technician Ramesh reached by 11:30 AM. Genuine parts used and TDS dropped from 850 to 90 PPM. Highly recommended!",
    verifiedBuyer: true,
    date: "12 July 2026",
    serviceUsed: "Membrane Replacement & Filter Service"
  },
  {
    id: "test-2",
    customerName: "Priya Venkatesh",
    location: "Koramangala, Bengaluru",
    rating: 5,
    reviewText: "Took their Platinum AMC Plan for our Aquaguard RO. They perform regular scheduled servicing automatically without even calling. Zero extra charges when pump adapter burnt out. Very professional company!",
    verifiedBuyer: true,
    date: "28 June 2026",
    serviceUsed: "Platinum AMC Plan"
  },
  {
    id: "test-3",
    customerName: "Sanjay Patel",
    location: "SG Highway, Ahmedabad",
    rating: 5,
    reviewText: "Bought the AquaPure Grand Copper RO from Indian RO Purifier. Water taste is incredibly sweet and alkaline. Installation was completely free and done within 3 hours of order. 10/10 service!",
    verifiedBuyer: true,
    date: "04 May 2026",
    serviceUsed: "Product Purchase & Free Installation"
  },
  {
    id: "test-4",
    customerName: "Ananya Kulkarni",
    location: "Viman Nagar, Pune",
    rating: 5,
    reviewText: "Installed 50 LPH Commercial RO plant for our IT office cafeteria. Excellent build quality, stainless steel frame, and crystal clear water output. Great job by the technical team!",
    verifiedBuyer: true,
    date: "19 March 2026",
    serviceUsed: "Commercial 50 LPH RO Plant"
  },
  {
    id: "test-5",
    customerName: "Vikram Singh Rathore",
    location: "Vaishali Nagar, Jaipur",
    rating: 5,
    reviewText: "Best RO service in Jaipur! They checked TDS right in front of me with digital meter before and after service. Very polite behavior and reasonable price.",
    verifiedBuyer: true,
    date: "15 February 2026",
    serviceUsed: "RO Servicing & TDS Adjustment"
  },
  {
    id: "test-6",
    customerName: "Meenakshi Sundaram",
    location: "Andheri West, Mumbai",
    rating: 5,
    reviewText: "Water quality in our building was making kids sick due to high chlorine. Called Indian RO Purifier for filter change. Problem resolved immediately. Very satisfied customer!",
    verifiedBuyer: true,
    date: "08 January 2026",
    serviceUsed: "Filter Replacement & UV Check"
  }
];

export const initialFAQs: FAQ[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How quickly can your technician visit my home for RO service or repair?",
    answer: "We guarantee 2-hour doorstep service in major metro cities. Once you book online or call +91 8417985679, our nearest certified RO engineer is assigned instantly."
  },
  {
    id: "faq-2",
    category: "RO Service",
    question: "How often should an RO Water Purifier be serviced?",
    answer: "Standard domestic RO purifiers should be serviced every 3 to 4 months. Regular filter cleaning prevents membrane choking and maintains safe, mineral-rich drinking water."
  },
  {
    id: "faq-3",
    category: "RO Service",
    question: "When should I replace the filters and RO membrane?",
    answer: "Sediment and Pre-Carbon filters should be replaced every 6 to 9 months. The RO Membrane generally lasts 12 to 18 months depending on the TDS level of your input water."
  },
  {
    id: "faq-4",
    category: "AMC",
    question: "What is an RO AMC (Annual Maintenance Contract) and why should I get one?",
    answer: "An AMC is an annual plan that covers all routine servicing, emergency breakdown calls, filter replacements, and spare parts. It saves you up to 50% compared to paying per service visit."
  },
  {
    id: "faq-5",
    category: "Buying Guide",
    question: "What is the recommended TDS level for safe drinking water?",
    answer: "According to WHO standards, drinking water TDS between 80 PPM and 150 PPM is ideal and rich in essential minerals. Our purifiers feature automatic TDS controllers to maintain this optimal range."
  },
  {
    id: "faq-6",
    category: "RO Service",
    question: "Do you provide service for all major RO brands?",
    answer: "Yes! We service all leading brands including Kent, Aquaguard, Pureit, Livpure, Havells, Bluestar, LG, AO Smith, and unbranded assembled RO purifiers using 100% genuine spare parts."
  },
  {
    id: "faq-7",
    category: "Maintenance",
    question: "Why is water coming out very slowly from my RO tap?",
    answer: "Slow flow can be caused by choked sediment filters, clogged RO membrane, low water inlet pressure, or low air pressure in the hydrostatic storage tank. Our technician can resolve this in 30 minutes."
  },
  {
    id: "faq-8",
    category: "General",
    question: "Are your technicians background verified?",
    answer: "Yes, 100% of our technicians undergo police background verification, technical training, and strictly follow safety and sanitary guidelines."
  },
  {
    id: "faq-9",
    category: "Buying Guide",
    question: "What is the difference between RO, UV, UF, and Alkaline purifiers?",
    answer: "RO removes dissolved salts & heavy metals; UV kills bacteria & viruses; UF removes physical micro-particles; Alkaline balances pH and adds healthy minerals. Our top models combine all 4 technologies!"
  },
  {
    id: "faq-10",
    category: "AMC",
    question: "Is RO membrane replacement covered in the AMC plan?",
    answer: "Yes! Our Platinum AMC Plan includes 100% FREE RO membrane replacement, along with free sediment/carbon filter changes and electrical spare replacement."
  },
  {
    id: "faq-11",
    category: "Maintenance",
    question: "Why is wastewater flowing continuously even when the storage tank is full?",
    answer: "Continuous wastewater flow is usually due to a faulty Solenoid Valve (SV) or broken Auto-Flush valve. Replacing the defective SV valve solves this issue instantly."
  },
  {
    id: "faq-12",
    category: "General",
    question: "Do you offer doorstep RO installation for purifiers bought online (Amazon/Flipkart)?",
    answer: "Yes! If you purchased an RO purifier from Amazon, Flipkart, or another platform, our technicians will unbox, wall-mount, install, and calibrate TDS for just ₹399."
  },
  {
    id: "faq-13",
    category: "Buying Guide",
    question: "What capacity commercial RO plant do I need for my office?",
    answer: "For an office of 15-30 people, a 25 LPH or 50 LPH plant is ideal. For 50+ staff, restaurants, or schools, we recommend 100 LPH to 250 LPH heavy-duty plants."
  },
  {
    id: "faq-14",
    category: "Maintenance",
    question: "What causes bad taste or smell in RO water?",
    answer: "Bad taste or smell happens when the activated carbon filter gets saturated or bacterial growth occurs in an uncleaned tank. Servicing and sanitizing the tank eliminates bad taste."
  },
  {
    id: "faq-15",
    category: "RO Service",
    question: "What payment methods do you accept for service and products?",
    answer: "We accept Cash on Delivery, UPI (GPay, PhonePe, Paytm), Credit/Debit Cards, Net Banking, and zero-cost EMI options for new purifiers."
  }
];
