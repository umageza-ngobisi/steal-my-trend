import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useAuth } from './useAuth';
import type { Product } from '../lib/mockData';

const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
);

const LOCAL_STORAGE_KEY = 'steal_my_trend_saved_products';

export const useSavedProducts = () => {
  const [savedProducts, setSavedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  const fetchSavedProducts = async () => {
    if (!isSupabaseConfigured || !user) {
      const local = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (local) {
        try {
          setSavedProducts(JSON.parse(local));
        } catch (e) {
          setSavedProducts([]);
        }
      } else {
        setSavedProducts([]);
      }
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

      const mappedProducts: Product[] = (data || [])
        .filter((item: any) => item.products) // Ensure products exist
        .map((item: any) => {
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
      // Sync local storage as well for backup
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mappedProducts));
    } catch (err) {
      console.error('Error fetching saved products from Supabase:', err);
      // Fallback to local storage on error
      const local = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (local) {
        try {
          setSavedProducts(JSON.parse(local));
        } catch (e) {}
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedProducts();
  }, [user]);

  const saveProduct = async (product: Product) => {
    if (isSaved(product.id)) return;

    // Update local state first for responsiveness
    const newSaved = [...savedProducts, product];
    setSavedProducts(newSaved);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSaved));

    if (!user || !isSupabaseConfigured) return;

    try {
      const { error } = await supabase
        .from('saved_products')
        .insert({
          user_id: user.id,
          product_id: product.id,
        });

      if (error) throw error;
    } catch (err) {
      console.error('Error saving product to Supabase:', err);
    }
  };

  const unsaveProduct = async (productId: string) => {
    // Update local state first
    const newSaved = savedProducts.filter(p => p.id !== productId);
    setSavedProducts(newSaved);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newSaved));

    if (!user || !isSupabaseConfigured) return;

    try {
      const { error } = await supabase
        .from('saved_products')
        .delete()
        .eq('user_id', user.id)
        .eq('product_id', productId);

      if (error) throw error;
    } catch (err) {
      console.error('Error unsaving product from Supabase:', err);
    }
  };

  const isSaved = (productId: string) => {
    return savedProducts.some((p) => p.id === productId);
  };

  return { savedProducts, saveProduct, unsaveProduct, isSaved, loading, refresh: fetchSavedProducts };
};
