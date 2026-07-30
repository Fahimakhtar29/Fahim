import React, { useState } from 'react';
import { X, Settings, Plus, Trash2, Edit3, Save, Upload, RotateCcw, Image as ImageIcon, Phone, Wrench, Shield, Check, List } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { Product } from '../types';

export const AdminPanelModal: React.FC = () => {
  const {
    isAdminModalOpen,
    closeAdminModal,
    siteConfig,
    updateSiteConfig,
    products,
    updateProduct,
    addProduct,
    deleteProduct,
    bookings,
    resetToDefaults
  } = useApp();

  const [activeTab, setActiveTab] = useState<'content' | 'products' | 'images' | 'bookings'>('content');

  // Edit Site Config state
  const [configForm, setConfigForm] = useState(siteConfig);

  // Edit or Add Product state
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    category: 'Domestic RO',
    price: 8999,
    originalPrice: 14999,
    discountBadge: '30% OFF',
    capacity: '12 Liters',
    warranty: '1 Year Warranty',
    description: '',
    features: ['12L Food Grade Tank', 'Auto TDS Adjuster', '1 Year Warranty'],
    imageUrl: ''
  });

  const [featureInput, setFeatureInput] = useState('');

  if (!isAdminModalOpen) return null;

  const handleSaveConfig = (e: React.FormEvent) => {
    e.preventDefault();
    updateSiteConfig(configForm);
    alert('Site text and headings updated successfully!');
  };

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name || !productForm.price) return;

    if (editingProductId) {
      updateProduct({
        ...products.find(p => p.id === editingProductId)!,
        ...(productForm as Product)
      });
      alert('Product updated successfully!');
    } else {
      addProduct(productForm as any);
      alert('New RO product added successfully!');
    }

    setEditingProductId(null);
    setProductForm({
      name: '',
      category: 'Domestic RO',
      price: 8999,
      originalPrice: 14999,
      discountBadge: '30% OFF',
      capacity: '12 Liters',
      warranty: '1 Year Warranty',
      description: '',
      features: ['12L Food Grade Tank', 'Auto TDS Adjuster', '1 Year Warranty'],
      imageUrl: ''
    });
  };

  const startEditProduct = (prod: Product) => {
    setEditingProductId(prod.id);
    setProductForm(prod);
    setActiveTab('products');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white/90 backdrop-blur-2xl rounded-3xl max-w-4xl w-full border border-white shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="bg-slate-900 text-white p-5 flex items-center justify-between shrink-0 border-b-2 border-[#00AEEF]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#00AEEF] flex items-center justify-center text-white">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-extrabold text-lg leading-tight">
                Admin CMS & Easy Content Manager
              </h3>
              <p className="text-xs text-sky-300">
                Manage RO machine photos, prices, text & customer bookings
              </p>
            </div>
          </div>

          <button
            onClick={closeAdminModal}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Admin Navigation Tabs */}
        <div className="bg-slate-100 px-6 py-2 border-b border-slate-200 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('content')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'content' ? 'bg-[#00AEEF] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Site Content & Text</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'products' ? 'bg-[#00AEEF] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Wrench className="w-3.5 h-3.5" />
            <span>Product Catalog ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('images')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'images' ? 'bg-[#00AEEF] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>RO Image Replacement</span>
          </button>

          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'bookings' ? 'bg-[#00AEEF] text-white shadow-xs' : 'bg-white text-slate-700 hover:bg-slate-200'
            }`}
          >
            <List className="w-3.5 h-3.5" />
            <span>Service Enquiries ({bookings.length})</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1">
          
          {/* TAB 1: SITE CONTENT & TEXT */}
          {activeTab === 'content' && (
            <form onSubmit={handleSaveConfig} className="space-y-4">
              <h4 className="text-base font-heading font-bold text-slate-900 border-b pb-2">
                Company Details & Main Hero Headings
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                  <input
                    type="text"
                    value={configForm.companyName}
                    onChange={(e) => setConfigForm({ ...configForm, companyName: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Helpline Phone Number</label>
                  <input
                    type="text"
                    value={configForm.phone}
                    onChange={(e) => setConfigForm({ ...configForm, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Number (e.g. 919876543210)</label>
                  <input
                    type="text"
                    value={configForm.whatsapp}
                    onChange={(e) => setConfigForm({ ...configForm, whatsapp: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Support Email</label>
                  <input
                    type="email"
                    value={configForm.email}
                    onChange={(e) => setConfigForm({ ...configForm, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Hero Section Main Heading</label>
                <input
                  type="text"
                  value={configForm.heroHeading}
                  onChange={(e) => setConfigForm({ ...configForm, heroHeading: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Hero Section Subheading</label>
                <textarea
                  rows={2}
                  value={configForm.heroSubheading}
                  onChange={(e) => setConfigForm({ ...configForm, heroSubheading: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-3 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Office Address</label>
                <input
                  type="text"
                  value={configForm.address}
                  onChange={(e) => setConfigForm({ ...configForm, address: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={resetToDefaults}
                  className="text-xs text-red-600 hover:underline flex items-center gap-1"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Content Defaults</span>
                </button>

                <button type="submit" className="btn-sky-gradient px-6 py-2.5 text-xs font-bold flex items-center gap-2">
                  <Save className="w-4 h-4" />
                  <span>Save Text Settings</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: PRODUCTS MANAGEMENT */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              {/* Product Form */}
              <form onSubmit={handleSaveProduct} className="p-4 bg-sky-50 rounded-2xl border border-sky-200 space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center justify-between">
                  <span>{editingProductId ? 'Edit RO Machine Model' : 'Add New RO Machine Product'}</span>
                  {editingProductId && (
                    <button
                      type="button"
                      onClick={() => setEditingProductId(null)}
                      className="text-xs text-slate-500 hover:underline"
                    >
                      Cancel Editing
                    </button>
                  )}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Product Name *</label>
                    <input
                      type="text"
                      required
                      value={productForm.name}
                      onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Category</label>
                    <select
                      value={productForm.category}
                      onChange={(e) => setProductForm({ ...productForm, category: e.target.value as any })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                    >
                      <option value="Domestic RO">Domestic RO</option>
                      <option value="Alkaline Mineral RO">Alkaline Mineral RO</option>
                      <option value="Copper RO">Copper RO</option>
                      <option value="UV + UF">UV + UF</option>
                      <option value="Commercial RO">Commercial RO</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Selling Price (₹) *</label>
                    <input
                      type="number"
                      required
                      value={productForm.price}
                      onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Original Price (₹)</label>
                    <input
                      type="number"
                      value={productForm.originalPrice}
                      onChange={(e) => setProductForm({ ...productForm, originalPrice: Number(e.target.value) })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Discount Badge</label>
                    <input
                      type="text"
                      value={productForm.discountBadge}
                      onChange={(e) => setProductForm({ ...productForm, discountBadge: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-0.5">Custom Image URL (Optional)</label>
                  <input
                    type="url"
                    placeholder="https://example.com/ro-machine.jpg"
                    value={productForm.imageUrl || ''}
                    onChange={(e) => setProductForm({ ...productForm, imageUrl: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                  />
                  <p className="text-[10px] text-slate-500 mt-0.5">
                    Leave blank to use clean default RO machine image placeholder frame.
                  </p>
                </div>

                <div className="flex justify-end pt-1">
                  <button type="submit" className="btn-sky-gradient px-5 py-2 text-xs font-bold flex items-center gap-1">
                    <Save className="w-3.5 h-3.5" />
                    <span>{editingProductId ? 'Update Product' : 'Add Product'}</span>
                  </button>
                </div>
              </form>

              {/* Products Table */}
              <div className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  Current Product Catalog ({products.length})
                </h4>
                <div className="divide-y divide-slate-100 border rounded-2xl overflow-hidden bg-white">
                  {products.map((prod) => (
                    <div key={prod.id} className="p-3.5 flex items-center justify-between text-xs hover:bg-slate-50">
                      <div>
                        <p className="font-bold text-slate-900">{prod.name}</p>
                        <p className="text-slate-500 text-[11px]">
                          {prod.category} • ₹{prod.price.toLocaleString('en-IN')} <span className="line-through">₹{prod.originalPrice.toLocaleString('en-IN')}</span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => startEditProduct(prod)}
                          className="p-1.5 bg-sky-50 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white rounded-lg transition-colors"
                          title="Edit Product"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => {
                            if (confirm(`Delete ${prod.name}?`)) deleteProduct(prod.id);
                          }}
                          className="p-1.5 bg-red-50 text-red-600 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                          title="Delete Product"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: IMAGE REPLACEMENT MANAGER */}
          {activeTab === 'images' && (
            <div className="space-y-6">
              <div className="p-4 bg-[#EAF9FF] rounded-2xl border border-[#00AEEF]/20 text-xs text-slate-700">
                <p className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                  <ImageIcon className="w-4 h-4 text-[#00AEEF]" />
                  RO Machine Photo Upload & Replacement Instructions
                </p>
                <p>
                  As requested, all RO Machine image frames default to clean, high-precision SVG/CSS placeholders so you can upload or link your own custom RO product photographs later!
                </p>
              </div>

              {/* Hero Image Replacement */}
              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  1. Hero Section Machine Photo
                </h4>
                <div>
                  <label className="block text-xs text-slate-600 mb-1">Paste Image URL for Hero Banner RO Purifier:</label>
                  <div className="flex gap-2">
                    <input
                      type="url"
                      placeholder="https://example.com/hero-ro-purifier.jpg"
                      value={configForm.heroCustomImage || ''}
                      onChange={(e) => setConfigForm({ ...configForm, heroCustomImage: e.target.value })}
                      className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs"
                    />
                    <button
                      onClick={() => {
                        updateSiteConfig({ heroCustomImage: configForm.heroCustomImage });
                        alert('Hero RO Machine photo updated!');
                      }}
                      className="btn-sky-gradient px-4 py-2 text-xs font-bold"
                    >
                      Update Hero Image
                    </button>
                  </div>
                </div>
              </div>

              {/* Individual Product Image Replacements */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-slate-900">
                  2. Product Machine Photos ({products.length} Products)
                </h4>

                <div className="space-y-3">
                  {products.map((prod) => (
                    <div key={prod.id} className="p-4 bg-white border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
                      <div className="flex-1">
                        <p className="font-bold text-slate-900">{prod.name}</p>
                        <p className="text-slate-500 text-[11px]">{prod.category}</p>
                      </div>

                      <div className="flex gap-2 w-full sm:w-auto">
                        <input
                          type="url"
                          placeholder="Paste image URL..."
                          value={prod.imageUrl || ''}
                          onChange={(e) => updateProduct({ ...prod, imageUrl: e.target.value })}
                          className="flex-1 sm:w-64 bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs"
                        />
                        {prod.imageUrl && (
                          <button
                            onClick={() => updateProduct({ ...prod, imageUrl: '' })}
                            className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 text-[11px]"
                          >
                            Reset
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SERVICE BOOKINGS & ENQUIRIES LIST */}
          {activeTab === 'bookings' && (
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-sm text-slate-900 flex items-center justify-between">
                <span>Submitted Customer Enquiries ({bookings.length})</span>
              </h4>

              {bookings.length === 0 ? (
                <p className="text-xs text-slate-500 py-8 text-center bg-slate-50 rounded-2xl">
                  No service requests submitted yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {bookings.map((bk) => (
                    <div key={bk.id} className="p-4 bg-white border border-sky-100 rounded-2xl shadow-2xs space-y-2">
                      <div className="flex items-center justify-between border-b pb-2 text-xs">
                        <span className="font-bold text-slate-900">{bk.customerName} ({bk.phone})</span>
                        <span className="bg-emerald-50 text-emerald-600 font-bold px-2.5 py-0.5 rounded-full text-[10px]">
                          {bk.status}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs text-slate-600">
                        <p><span className="font-semibold text-slate-800">Service:</span> {bk.serviceType}</p>
                        <p><span className="font-semibold text-slate-800">City:</span> {bk.city}</p>
                        <p><span className="font-semibold text-slate-800">Date:</span> {bk.preferredDate}</p>
                      </div>

                      {bk.address && (
                        <p className="text-xs text-slate-500">
                          <span className="font-semibold text-slate-700">Address / Notes:</span> {bk.address} {bk.notes ? `(${bk.notes})` : ''}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
