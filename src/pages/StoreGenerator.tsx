import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Layout, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowLeft,
  RefreshCw,
  ShoppingCart,
  ListChecks,
  HelpCircle,
  Search as SearchIcon
} from 'lucide-react';
import { MOCK_PRODUCTS } from '../lib/mockData';

const StoreGenerator: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('productId');
  
  const product = MOCK_PRODUCTS.find(p => p.id === productId) || MOCK_PRODUCTS[0];
  
  const [isGenerating, setIsGenerating] = useState(true);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [generationStep, setGenerationStep] = useState(0);

  const steps = [
    "Analyzing product specs...",
    "Extracting key benefits...",
    "Writing high-converting description...",
    "Formulating FAQ section...",
    "Optimizing for SEO...",
    "Finalizing store layout..."
  ];

  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setGenerationStep((prev) => {
          if (prev >= steps.length - 1) {
            clearInterval(interval);
            setTimeout(() => setIsGenerating(false), 500);
            return prev;
          }
          return prev + 1;
        });
      }, 600);
      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const storeData = {
    description: `Transform your space with the ${product.name}. Designed with both function and style in mind, this viral ${product.category.toLowerCase()} essential is perfect for anyone looking to upgrade their daily routine. Whether you're at home or on the go, the ${product.name} delivers consistent results every time.`,
    benefits: [
      "Effortless Integration: Fits perfectly into your modern lifestyle.",
      "Premium Quality: Built with durable, high-end materials that last.",
      "Viral Design: As seen on TikTok and Instagram - get the aesthetic everyone is talking about.",
      "Eco-Friendly: Sustainable manufacturing process you can feel good about."
    ],
    features: [
      "Intuitive one-touch operation",
      "Sleek, minimalist design",
      "Universal compatibility",
      "Long-lasting battery life (where applicable)"
    ],
    faq: [
      { q: `Is the ${product.name} easy to use?`, a: "Absolutely! We designed it to be user-friendly right out of the box." },
      { q: "How long does shipping take?", a: "Most orders arrive within 5-10 business days depending on your location." }
    ],
    seo: {
      title: `${product.name} | The Ultimate ${product.category} Upgrade`,
      description: `Buy the viral ${product.name} today. Free shipping on all orders. Discover why this ${product.category.toLowerCase()} essential is taking social media by storm.`
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 text-muted-foreground hover:text-white transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Discovery
          </button>
          
          <div className="flex items-center gap-3">
             <div className="text-right hidden sm:block">
                <p className="text-xs text-muted-foreground">Product Selected</p>
                <p className="text-sm font-bold">{product.name}</p>
             </div>
             <img src={product.image} alt="" className="w-10 h-10 rounded-lg object-cover border border-white/10" />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {isGenerating ? (
            <motion.div 
              key="generating"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-8 min-h-[500px]"
            >
              <div className="relative">
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 rounded-full border-2 border-accent-purple/20 border-t-accent-purple"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layout className="text-accent-purple animate-pulse" size={32} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">Building your store page...</h2>
                <p className="text-muted-foreground max-w-sm mx-auto">Generating Shopify-ready descriptions and optimized SEO content.</p>
              </div>

              <div className="w-full max-w-xs space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-accent-purple">
                  <span>{steps[generationStep]}</span>
                  <span>{Math.round(((generationStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-accent-purple shadow-[0_0_15px_rgba(188,19,254,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((generationStep + 1) / steps.length) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8 pb-12"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent-purple/10 border border-accent-purple/20">
                    <Sparkles size={24} className="text-accent-purple" />
                  </div>
                  Shopify Assets
                </h2>
                <button 
                  onClick={() => {
                    setIsGenerating(true);
                    setGenerationStep(0);
                  }}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-sm font-bold"
                >
                  <RefreshCw size={16} />
                  Regenerate
                </button>
              </div>

              {/* Description Section */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold flex items-center gap-2">
                    <ShoppingCart size={18} className="text-primary" />
                    Product Description
                  </h3>
                  <button 
                    onClick={() => copyToClipboard(storeData.description, 'desc')}
                    className="flex items-center gap-1.5 text-xs font-bold text-muted-foreground hover:text-primary transition-colors"
                  >
                    {copiedSection === 'desc' ? <Check size={14} className="text-accent-lime" /> : <Copy size={14} />}
                    {copiedSection === 'desc' ? 'Copied' : 'Copy HTML'}
                  </button>
                </div>
                <div className="bg-white/5 border border-white/5 rounded-xl p-4 text-sm text-muted-foreground leading-relaxed">
                  {storeData.description}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {/* Benefits */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                      <ListChecks size={18} className="text-accent-lime" />
                      Key Benefits
                    </h3>
                    <button 
                      onClick={() => copyToClipboard(storeData.benefits.join('\n'), 'benefits')}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedSection === 'benefits' ? <Check size={16} className="text-accent-lime" /> : <Copy size={16} />}
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {storeData.benefits.map((b, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex gap-2">
                        <span className="text-accent-lime">•</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* FAQ */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                      <HelpCircle size={18} className="text-accent-cyan" />
                      FAQ Section
                    </h3>
                    <button 
                      onClick={() => copyToClipboard(JSON.stringify(storeData.faq), 'faq')}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedSection === 'faq' ? <Check size={16} className="text-accent-lime" /> : <Copy size={16} />}
                    </button>
                  </div>
                  <div className="space-y-3">
                    {storeData.faq.map((item, i) => (
                      <div key={i} className="space-y-1">
                        <p className="text-xs font-bold text-white">Q: {item.q}</p>
                        <p className="text-[11px] text-muted-foreground">A: {item.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* SEO Section */}
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <h3 className="font-bold flex items-center gap-2">
                  <SearchIcon size={18} className="text-accent-purple" />
                  Search Engine Optimization
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 relative group">
                    <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest mb-1">Page Title</p>
                    <p className="text-sm font-medium pr-8">{storeData.seo.title}</p>
                    <button 
                      onClick={() => copyToClipboard(storeData.seo.title, 'seo-title')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedSection === 'seo-title' ? <Check size={16} className="text-accent-lime" /> : <Copy size={16} />}
                    </button>
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-xl p-4 relative group">
                    <p className="text-[10px] font-bold text-accent-purple uppercase tracking-widest mb-1">Meta Description</p>
                    <p className="text-sm font-medium pr-8 text-muted-foreground">{storeData.seo.description}</p>
                    <button 
                      onClick={() => copyToClipboard(storeData.seo.description, 'seo-desc')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedSection === 'seo-desc' ? <Check size={16} className="text-accent-lime" /> : <Copy size={16} />}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
  );
};

export default StoreGenerator;
