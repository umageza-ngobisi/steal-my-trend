import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import type { Product } from '../lib/mockData';

export const useSavedProducts = () => {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchSavedProducts = async () => {
    if (!user) {
      setSavedProducts([]);
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('saved_products')
        .select(`
          product_id,
          products (*)
        `)
        .eq('user_id', user.id);

      if (error) throw error;

      const mappedProducts: Product[] = (data || []).map((item: any) => {
        const p = item.products;
        return {
          id: p.id,
          name: p.name,
          image: p.image_url || '',
          viralityScore: p.virality_score || 0,
          platform: p.platform,
          stats: {
            views: `${(p.engagement / 1000000).toFixed(1)}M`,
            likes: `${(p.engagement / 10000).toFixed(0)}K`,
            shares: `${(p.engagement / 100000).toFixed(0)}K`,
          },
          trendGrowth: p.growth_percentage || 0,
          category: p.category || '',
        };
      });

      setSavedProducts(mappedProducts);
    } catch (err) {
      console.error('Error fetching saved products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedProducts();
  }, [user]);

  const saveProduct = async (product: Product) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('saved_products')
        .insert({
          user_id: user.id,
          product_id: product.id,
        });

      if (error) throw error;
      
      // Update local state
      setSavedProducts(prev => [...prev, product]);
    } catch (err) {
      console.error('Error saving product:', err);
    }
  };

  const unsaveProduct = async (productId: string) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('saved_products')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;

      // Update local state
      setSavedProducts(prev => prev.filter(p => p.id !== productId));
    } catch (err) {
      console.error('Error unsaving product:', err);
    }
  };

  const isSaved = (productId: string) => {
    return savedProducts.some((p) => p.id === productId);
  };

  return { savedProducts, saveProduct, unsaveProduct, isSaved, loading, refresh: fetchSavedProducts };
};
