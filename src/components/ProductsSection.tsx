import React, { useState } from 'react';
import { ShoppingBag, Heart, Star, Sparkles, Filter, Eye, Check, Search, Upload } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';
import { ROImagePlaceholder } from './ROImagePlaceholder';

export const ProductsSection: React.FC = () => {
  const { products, wishlist, toggleWishlist, openBookingModal, openProductModal, openAdminModal } = useApp();
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const categories = ['All', 'Domestic RO', 'Alkaline Mineral RO', 'Copper RO', 'UV + UF', 'Commercial RO'];

  const filteredProducts = products
    .filter(product => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default order
    });

  return (
    <section id="products" className="py-20 frosted-bg relative overflow-hidden">
      {/* Background Decorative Radial Flares */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#4FC3F7]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#00AEEF]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md text-[#00AEEF] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/80 shadow-xs">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Top-Rated RO Water Purifiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0a2e3f] tracking-tight">
            Buy Premium RO Purifiers
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            100% genuine water purifiers with free installation, 1-year doorstep warranty, and copper/alkaline mineral boost.
          </p>
        </div>

        {/* Category Tabs & Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/40">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-[#00AEEF] to-[#4FC3F7] text-white shadow-md shadow-sky-200'
                    : 'bg-white/70 backdrop-blur-md text-slate-700 hover:bg-white border border-white shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <div className="relative flex-1 md:w-60">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search RO model..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/70 backdrop-blur-md border border-white rounded-full pl-9 pr-4 py-2 text-xs focus:outline-hidden focus:ring-2 focus:ring-[#00AEEF] focus:bg-white shadow-xs"
              />
            </div>

            <div className="flex items-center gap-1.5 bg-white/70 backdrop-blur-md border border-white rounded-full px-3 py-1.5 text-xs shadow-xs">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent font-medium text-slate-700 focus:outline-hidden text-xs"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white/50 backdrop-blur-md rounded-3xl border border-white">
            <p className="text-base font-bold text-[#0a2e3f]">No RO models found matching your filter.</p>
            <p className="text-xs text-slate-500 mt-1">Try resetting search or category filters.</p>
            <button
              onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}
              className="mt-4 btn-sky-gradient text-xs px-5 py-2 font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {filteredProducts.map((product: Product) => {
              const isWishlisted = wishlist.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="glass-card glass-card-hover rounded-2xl p-5 border border-white/80 shadow-md flex flex-col justify-between group relative"
                >
                  {/* Top Badges & Wishlist Toggle */}
                  <div className="relative mb-3">
                    {/* RO Machine Image Placeholder */}
                    <ROImagePlaceholder
                      customImageUrl={product.imageUrl}
                      title={product.name}
                      category={product.category}
                      heightClass="h-56"
                      badge={product.discountBadge}
                      onReplaceClick={openAdminModal}
                    />

                    {/* Best Seller Badge */}
                    {product.isBestSeller && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md z-10 flex items-center gap-1">
                        <Sparkles className="w-3 h-3" />
                        Best Seller
                      </span>
                    )}

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product.id)}
                      className={`absolute bottom-3 right-3 p-2 rounded-full shadow-md transition-transform active:scale-95 z-10 ${
                        isWishlisted
                          ? 'bg-red-500 text-white'
                          : 'bg-white/90 text-slate-600 hover:text-red-500'
                      }`}
                      title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>

                  {/* Product Title & Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-semibold text-[#0077B6]">{product.category}</span>
                      <div className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        <span>{product.rating} ({product.reviewsCount})</span>
                      </div>
                    </div>

                    <h3 className="font-heading font-bold text-[#0a2e3f] text-base leading-snug line-clamp-2 group-hover:text-[#00AEEF] transition-colors">
                      {product.name}
                    </h3>

                    {/* Price Block */}
                    <div className="flex items-baseline gap-2 pt-1">
                      <span className="text-xl font-heading font-extrabold text-[#0a2e3f]">
                        ₹{product.price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-slate-400 line-through font-medium">
                        ₹{product.originalPrice.toLocaleString('en-IN')}
                      </span>
                      {product.discountBadge && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-md border border-emerald-200">
                          {product.discountBadge}
                        </span>
                      )}
                    </div>

                    {/* Feature Pills */}
                    <div className="space-y-1.5 pt-2 border-t border-white/50">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                          <Check className="w-3.5 h-3.5 text-[#00AEEF] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="grid grid-cols-2 gap-2 pt-4 mt-3 border-t border-white/50">
                    <button
                      onClick={() => openProductModal(product)}
                      className="btn-sky-outline py-2 text-xs font-bold flex items-center justify-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>

                    <button
                      onClick={() => openBookingModal(`Purchase Order: ${product.name}`)}
                      className="btn-sky-gradient py-2 text-xs font-bold flex items-center justify-center gap-1"
                    >
                      <span>Buy Now</span>
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Upload Custom Image Prompt Note */}
        <div className="mt-12 text-center bg-white/60 backdrop-blur-md border border-white p-4 rounded-2xl max-w-2xl mx-auto flex items-center justify-between gap-4 shadow-sm">
          <div className="text-left text-xs text-slate-700">
            <p className="font-bold text-[#0a2e3f]">Note for RO Machine Image Uploads:</p>
            <p className="text-slate-600">All machine product images currently use clean SVG/CSS placeholders. You can replace them with your own RO machine product photos anytime via the Admin Panel.</p>
          </div>
          <button
            onClick={openAdminModal}
            className="btn-sky-gradient text-xs px-4 py-2 font-bold shrink-0 flex items-center gap-1"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload Photos</span>
          </button>
        </div>

      </div>
    </section>
  );
};
