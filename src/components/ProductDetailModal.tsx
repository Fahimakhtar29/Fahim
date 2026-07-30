import React from 'react';
import { X, Star, ShieldCheck, Check, ShoppingBag, Sparkles, Phone, Droplets } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ROImagePlaceholder } from './ROImagePlaceholder';

export const ProductDetailModal: React.FC = () => {
  const { selectedProductForModal, closeProductModal, openBookingModal, openAdminModal, siteConfig } = useApp();

  if (!selectedProductForModal) return null;

  const product = selectedProductForModal;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-2xl rounded-3xl max-w-2xl w-full border border-white shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#00AEEF] to-[#0077B6] p-5 text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <Droplets className="w-5 h-5 text-white" />
            <span className="font-heading font-bold text-sm tracking-wide">
              Product Specifications & Details
            </span>
          </div>
          <button
            onClick={closeProductModal}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* Left RO Machine Image Placeholder */}
            <div>
              <ROImagePlaceholder
                customImageUrl={product.imageUrl}
                title={product.name}
                category={product.category}
                heightClass="h-64"
                badge={product.discountBadge}
                onReplaceClick={openAdminModal}
              />
              <p className="text-[10px] text-center text-slate-400 mt-2">
                * Machine photo placeholder. Custom photos can be uploaded anytime.
              </p>
            </div>

            {/* Right Product Overview */}
            <div className="space-y-3">
              <span className="text-xs font-bold text-[#0077B6] bg-sky-50 px-2.5 py-1 rounded-full border border-sky-100">
                {product.category}
              </span>

              <h3 className="font-heading font-extrabold text-xl text-slate-900 leading-tight">
                {product.name}
              </h3>

              <div className="flex items-center gap-2 text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-4 h-4 fill-amber-400 stroke-amber-500" />
                  <span>{product.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 font-medium">{product.reviewsCount} Verified Ratings</span>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-2 pt-1">
                <span className="text-2xl font-heading font-extrabold text-slate-900">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-sm text-slate-400 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {product.discountBadge || 'Special Price'}
                </span>
              </div>

              <div className="space-y-1 text-xs text-slate-600 pt-1">
                <p><span className="font-bold text-slate-800">Capacity:</span> {product.capacity}</p>
                <p><span className="font-bold text-slate-800">Warranty:</span> {product.warranty}</p>
                <p><span className="font-bold text-slate-800">Purification:</span> {product.purificationStages}</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2 pt-4 border-t border-sky-100">
            <h4 className="font-heading font-bold text-sm text-slate-900">
              Product Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features Grid */}
          <div className="space-y-2">
            <h4 className="font-heading font-bold text-sm text-slate-900">
              Key Features & Benefits
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-sky-50/60 p-2.5 rounded-xl border border-sky-100 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-[#00AEEF] shrink-0" />
                  <span className="font-medium">{feat}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-sky-50/80 border-t border-sky-100 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="text-xs text-slate-600">
            <span className="font-bold text-emerald-600 flex items-center gap-1">
              <ShieldCheck className="w-4 h-4" />
              Free Onsite Installation + 1 Year Warranty
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href={`tel:${siteConfig.phone.replace(/[^0-9+]/g, '')}`}
              className="btn-sky-outline px-4 py-2.5 text-xs font-bold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => {
                closeProductModal();
                openBookingModal(`Order Enquiry: ${product.name}`);
              }}
              className="w-full sm:w-auto btn-sky-gradient px-6 py-2.5 text-xs font-bold flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Buy / Order Now</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
