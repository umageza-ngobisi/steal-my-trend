import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Heart, 
  Eye, 
  Zap,
  Layout,
} from 'lucide-react';
import type { Product } from '../lib/mockData';
import { cn } from '../lib/utils';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
  index: number;
  isSaved?: boolean;
  onSaveToggle?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  index, 
  isSaved = false, 
  onSaveToggle 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="glass-card rounded-2xl overflow-hidden group hover:shadow-[0_0_30px_rgba(0,242,255,0.15)] transition-all duration-500 border-white/5 hover:border-primary/20"
    >
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Virality Score Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-white/10 flex items-center gap-1.5 shadow-xl">
          <Zap size={14} className="text-primary fill-current" />
          <span className="text-xs font-bold">{product.viralityScore}% Viral</span>
        </div>

        {/* Platform Badge */}
        <div className="absolute top-4 right-4 p-2 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-xl">
           <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{product.platform}</span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-4">
        <div>
          <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
          <p className="text-xs text-muted-foreground mt-1">{product.category}</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-2">
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5">
            <Eye size={14} className="text-muted-foreground mb-1" />
            <span className="text-xs font-bold">{product.stats.views}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5">
            <Heart size={14} className={cn("mb-1", isSaved ? "text-red-500 fill-current" : "text-muted-foreground")} />
            <span className="text-xs font-bold">{product.stats.likes}</span>
          </div>
          <div className="flex flex-col items-center p-2 rounded-xl bg-white/5 border border-white/5">
            <div className={cn(
              "flex items-center gap-0.5 mb-1",
              product.trendGrowth > 0 ? "text-accent-lime" : "text-red-400"
            )}>
              {product.trendGrowth > 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
            </div>
            <span className={cn(
              "text-xs font-bold",
              product.trendGrowth > 0 ? "text-accent-lime" : "text-red-400"
            )}>
              {product.trendGrowth > 0 ? '+' : ''}{product.trendGrowth}%
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2 pt-2">
          <div className="flex gap-2">
            <Link 
              to={`/dashboard/ad-generator?productId=${product.id}`}
              className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-primary hover:text-black border border-white/10 hover:border-primary transition-all duration-300 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Zap size={14} />
              Ad Copy
            </Link>
            <Link 
              to={`/dashboard/store-generator?productId=${product.id}`}
              className="flex-1 py-2 px-3 rounded-xl bg-white/5 hover:bg-accent-purple hover:text-white border border-white/10 hover:border-accent-purple transition-all duration-300 text-xs font-bold flex items-center justify-center gap-2"
            >
              <Layout size={14} />
              Store
            </Link>
          </div>
          <button 
            onClick={() => onSaveToggle?.(product)}
            className={cn(
              "w-full py-2 px-3 rounded-xl border transition-all duration-300 text-xs font-bold flex items-center justify-center gap-2",
              isSaved 
                ? "bg-red-500/10 text-red-500 border-red-500/20 hover:bg-red-500/20" 
                : "bg-white/5 hover:bg-white/10 border-white/10"
            )}
          >
            <Heart size={14} className={isSaved ? "fill-current" : ""} />
            {isSaved ? 'Unsave Product' : 'Save Product'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
