import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Video, 
  Hash, 
  ArrowLeft,
  RefreshCw,
  Loader2
} from 'lucide-react';
import { useProduct } from '../hooks/useProduct';

const AdGenerator: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const productId = searchParams.get('productId');
  
  const { product, loading: productLoading } = useProduct(productId);
  
  const [isGenerating, setIsGenerating] = useState(true);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);
  const [generationStep, setGenerationStep] = useState(0);

  const steps = useMemo(() => [
    "Analyzing product features...",
    "Identifying target audience...",
    "Scanning TikTok trends...",
    "Generating hooks...",
    "Polishing ad scripts...",
    "Finalizing hashtags..."
  ], []);

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
  }, [isGenerating, steps.length]);

  const copyToClipboard = (text: string, section: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(section);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  const adData = useMemo(() => {
    if (!product) return null;
    return {
      hooks: [
        `Stop scrolling! This ${product.name} is a total game changer. 😱`,
        `I wish I found this ${product.name} sooner... honestly.`,
        `TikTok made me buy it: ${product.name} edition! ✨`,
        `Pov: You just discovered the secret to a perfect ${product.category.toLowerCase()}.`
      ],
      script: `[Scene 1: Hook - Close up of product]\n"I honestly didn't think I needed a ${product.name} until I tried it."\n\n[Scene 2: Demonstration]\n"Just look at how it works. It's so seamless and honestly aesthetic too."\n\n[Scene 3: Benefit]\n"It literally saves me so much time every single day. If you're into ${product.category.toLowerCase()}, you NEED this."\n\n[Scene 4: CTA]\n"Link in bio to grab yours while they're still in stock! 🚀"`,
      captions: [
        `The product you didn't know you needed until now. 😍 #viral #musthave`,
        `Upgrade your life with the ${product.name}. You won't regret it!`,
        `Don't walk, RUN to get this. 🏃‍♂️💨`
      ],
      hashtags: `#${product.name.replace(/\s+/g, '')} #${product.category.replace(/\s+/g, '')} #tiktokmademebuyit #dropshipping #viralproduct #ecommerce`
    };
  }, [product]);

  if (productLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[500px]">
        <Loader2 size={40} className="text-primary animate-spin mb-4" />
        <p className="text-muted-foreground">Loading product data...</p>
      </div>
    );
  }

  if (!product || !adData) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center min-h-[500px]">
        <p className="text-red-400 mb-4">Product not found</p>
        <button onClick={() => navigate('/dashboard')} className="text-primary hover:underline font-bold">Back to Dashboard</button>
      </div>
    );
  }

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
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="w-24 h-24 rounded-full border-2 border-primary/20 border-t-primary"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="text-primary animate-pulse" size={32} />
                </div>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-2xl font-bold">AI is working its magic...</h2>
                <p className="text-muted-foreground max-w-sm mx-auto">Creating highly-engaging ad copy for {product.name} based on viral patterns.</p>
              </div>

              <div className="w-full max-w-xs space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-primary">
                  <span>{steps[generationStep]}</span>
                  <span>{Math.round(((generationStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary shadow-[0_0_15px_rgba(0,242,255,0.5)]"
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
              className="space-y-6"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <h2 className="text-3xl font-bold flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-primary/10 border border-primary/20">
                    <Sparkles size={24} className="text-primary" />
                  </div>
                  Generated Ad Assets
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* TikTok Hooks */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold flex items-center gap-2">
                      <Zap size={18} className="text-accent-lime" />
                      TikTok Hooks
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {adData.hooks.map((hook, i) => (
                      <div key={i} className="group relative bg-white/5 border border-white/5 rounded-xl p-3 hover:border-primary/30 transition-all">
                        <p className="text-sm pr-8">{hook}</p>
                        <button 
                          onClick={() => copyToClipboard(hook, `hook-${i}`)}
                          className="absolute right-2 top-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {copiedSection === `hook-${i}` ? <Check size={16} className="text-accent-lime" /> : <Copy size={16} />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Captions */}
                <div className="glass-card rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <MessageSquare size={18} className="text-accent-cyan" />
                    Captions
                  </h3>
                  <div className="space-y-3">
                    {adData.captions.map((caption, i) => (
                      <div key={i} className="group relative bg-white/5 border border-white/5 rounded-xl p-3 hover:border-primary/30 transition-all">
                        <p className="text-sm pr-8">{caption}</p>
                        <button 
                          onClick={() => copyToClipboard(caption, `caption-${i}`)}
                          className="absolute right-2 top-3 text-muted-foreground hover:text-primary transition-colors"
                        >
                          {copiedSection === `caption-${i}` ? <Check size={16} className="text-accent-lime" /> : <Copy size={16} />}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Video Script */}
                <div className="md:col-span-2 glass-card rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <Video size={18} className="text-accent-purple" />
                    Video Ad Script
                  </h3>
                  <div className="relative bg-white/5 border border-white/5 rounded-xl p-4 font-mono text-sm leading-relaxed whitespace-pre-wrap group hover:border-primary/30 transition-all">
                    {adData.script}
                    <button 
                      onClick={() => copyToClipboard(adData.script, 'script')}
                      className="absolute right-3 top-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedSection === 'script' ? <Check size={18} className="text-accent-lime" /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>

                {/* Hashtags */}
                <div className="md:col-span-2 glass-card rounded-2xl p-6 space-y-4">
                  <h3 className="font-bold flex items-center gap-2">
                    <Hash size={18} className="text-primary" />
                    Recommended Hashtags
                  </h3>
                  <div className="relative bg-white/5 border border-white/5 rounded-xl p-4 group hover:border-primary/30 transition-all">
                    <p className="text-sm text-primary font-medium pr-8">{adData.hashtags}</p>
                    <button 
                      onClick={() => copyToClipboard(adData.hashtags, 'hashtags')}
                      className="absolute right-3 top-4 text-muted-foreground hover:text-primary transition-colors"
                    >
                      {copiedSection === 'hashtags' ? <Check size={18} className="text-accent-lime" /> : <Copy size={18} />}
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

export default AdGenerator;
