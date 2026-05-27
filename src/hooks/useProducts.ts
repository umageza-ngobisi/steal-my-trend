import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MOCK_PRODUCTS, type Product } from '../lib/mockData';

const isSupabaseConfigured = Boolean(
  import.meta.env.VITE_SUPABASE_URL && 
  import.meta.env.VITE_SUPABASE_ANON_KEY &&
  import.meta.env.VITE_SUPABASE_URL !== 'YOUR_SUPABASE_URL' &&
  import.meta.env.VITE_SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY'
);

export const useProducts = (category?: string, platform?: string, search?: string) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const applyMockFilters = () => {
      let filtered = [...MOCK_PRODUCTS];
      if (category && category !== 'All Categories') {
        filtered = filtered.filter(p => p.category.toLowerCase() === category.toLowerCase());
      }
      if (platform && platform !== 'All Platforms') {
        filtered = filtered.filter(p => p.platform.toLowerCase() === platform.toLowerCase());
      }
      if (search) {
        filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));
      }
      setProducts(filtered);
    };

    const fetchProducts = async () => {
      try {
        setLoading(true);
        
        if (!isSupabaseConfigured) {
          applyMockFilters();
          return;
        }

        let query = supabase.from('products').select('*');

        if (category && category !== 'All Categories') {
          query = query.eq('category', category.toLowerCase());
        }
        if (platform && platform !== 'All Platforms') {
          query = query.eq('platform', platform);
        }
        if (search) {
          query = query.ilike('name', `%${search}%`);
        }

        const { data, error: supabaseError } = await query.order('created_at', { ascending: false });

        if (supabaseError) throw supabaseError;

        if (!data || data.length === 0) {
          applyMockFilters();
          return;
        }

        // Map database fields to frontend Product interface
        const mappedProducts: Product[] = data.map((p: any) => ({
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
        }));

        setProducts(mappedProducts);
      } catch (err: any) {
        console.error('Error fetching products from Supabase, falling back to mock data:', err);
        applyMockFilters();
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, platform, search]);

  return { products, loading, error: null };
};
