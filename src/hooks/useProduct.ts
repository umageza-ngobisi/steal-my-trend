import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MOCK_PRODUCTS, type Product } from '../lib/mockData';

const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
);

export const useProduct = (productId: string | null) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);

        if (!isSupabaseConfigured) {
          const mock = MOCK_PRODUCTS.find(p => p.id === productId);
          setProduct(mock || null);
          return;
        }

        const { data: p, error: supabaseError } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId)
          .single();

        if (supabaseError) throw supabaseError;

        if (p) {
          const mappedProduct: Product = {
            id: p.id,
            name: p.name,
            image: p.image_url || '',
            viralityScore: p.virality_score || 0,
            platform: p.platform,
            stats: {
              views: p.engagement >= 1000000 ? `${(p.engagement / 1000000).toFixed(1)}M` : `${(p.engagement / 1000).toFixed(0)}K`,
              likes: p.engagement >= 10000 ? `${(p.engagement / 10000).toFixed(0)}K` : `${p.engagement}`,
              shares: p.engagement >= 100000 ? `${(p.engagement / 100000).toFixed(0)}K` : `${(p.engagement / 10).toFixed(0)}`,
            },
            trendGrowth: p.growth_percentage || 0,
            category: p.category || '',
          };
          setProduct(mappedProduct);
        } else {
          // Try fallback if not found in DB
          const mock = MOCK_PRODUCTS.find(p => p.id === productId);
          setProduct(mock || null);
        }
      } catch (err: any) {
        console.error('Error fetching product from Supabase, falling back to mock data:', err);
        const mock = MOCK_PRODUCTS.find(p => p.id === productId);
        setProduct(mock || null);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error: null };
};
