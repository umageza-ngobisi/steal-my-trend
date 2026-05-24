import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import ProductCard from '../components/ProductCard';
import AnalyticsSection from '../components/AnalyticsSection';
import type { Product } from '../lib/mockData';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, HeartOff, Sparkles, TrendingUp, Loader2 } from 'lucide-react';
import { useSavedProducts } from '../hooks/useSavedProducts';
import { useProducts } from '../hooks/useProducts';
import TrendScanner from './TrendScanner';
import AdGenerator from './AdGenerator';
import StoreGenerator from './StoreGenerator';

const Overview = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  
  const { products, loading, error } = useProducts(undefined, selectedPlatform, searchQuery);
  const { isSaved, saveProduct, unsaveProduct } = useSavedProducts();

  const handleSaveToggle = (product: Product) => {
    if (isSaved(product.id)) {
      unsaveProduct(product.id);
    } else {
      saveProduct(product);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Product Discovery</h1>
          <p className="text-muted text-sm mt-1">Discover what's trending across social media platforms.</p>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary text-xs font-bold"
        >
          <Sparkles size={14} className="animate-pulse" />
          AI ANALYZING 12,482 TRENDS IN REAL-TIME
        </motion.div>
      </div>

      <AnalyticsSection />

      <div className="pt-8 border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
            <TrendingUp size={20} className="text-primary" />
            Trending Products
          </h2>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search products..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all w-full md:w-64"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <select 
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none appearance-none cursor-pointer hover:bg-white/10 transition-colors pr-10 relative"
                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23a1a1aa\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
              >
                <option>All Platforms</option>
                <option>TikTok</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>YouTube</option>
              </select>
              
              <button className="p-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <SlidersHorizontal size={18} className="text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <Loader2 size={40} className="text-primary animate-spin mb-4" />
            <p className="text-muted-foreground">Scanning for viral products...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-red-400 mb-2">Error loading products</p>
            <p className="text-muted-foreground text-sm">{error}</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product, i) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                index={i} 
                isSaved={isSaved(product.id)}
                onSaveToggle={handleSaveToggle}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
              <Search size={24} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-bold">No products found</h3>
            <p className="text-muted-foreground mt-2 max-w-xs">Try adjusting your search or filters to find what you're looking for.</p>
            <button 
              onClick={() => {setSearchQuery(''); setSelectedPlatform('All Platforms');}}
              className="mt-6 text-primary text-sm font-bold hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const SavedProducts = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms');
  const { savedProducts, unsaveProduct, loading } = useSavedProducts();

  const filteredProducts = savedProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPlatform = selectedPlatform === 'All Platforms' || product.platform === selectedPlatform;
    return matchesSearch && matchesPlatform;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Saved Products</h1>
          <p className="text-muted text-sm mt-1">Manage and access your saved trending products.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search saved products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all w-full md:w-64"
            />
          </div>
          
          <div className="flex items-center gap-2">
            <select 
              value={selectedPlatform}
              onChange={(e) => setSelectedPlatform(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none appearance-none cursor-pointer hover:bg-white/10 transition-colors pr-10 relative"
              style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23a1a1aa\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center', backgroundSize: '16px' }}
            >
              <option>All Platforms</option>
              <option>TikTok</option>
              <option>Instagram</option>
              <option>Facebook</option>
              <option>YouTube</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 size={40} className="text-primary animate-spin mb-4" />
          <p className="text-muted-foreground">Loading saved products...</p>
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredProducts.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <ProductCard 
                  product={product} 
                  index={i} 
                  isSaved={true}
                  onSaveToggle={() => unsaveProduct(product.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <HeartOff size={24} className="text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold">No saved products</h3>
          <p className="text-muted-foreground mt-2 max-w-xs">You haven't saved any products yet. Go to Discovery to find some trends!</p>
        </div>
      )}
    </div>
  );
};

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/scanner" element={<TrendScanner />} />
        <Route path="/saved" element={<SavedProducts />} />
        <Route path="/ad-generator" element={<AdGenerator />} />
        <Route path="/store-generator" element={<StoreGenerator />} />
        <Route path="/settings" element={<div className="text-2xl font-bold">Settings (Coming Soon)</div>} />
      </Routes>
    </DashboardLayout>
  );
};

export default Dashboard;
