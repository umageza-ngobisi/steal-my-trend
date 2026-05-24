import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Product } from '../lib/mockData';

export const useProduct = (productId: string | null) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!productId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const { data: p, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', productId)
          .single();

        if (error) throw error;

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
        }
      } catch (err: any) {
        console.error('Error fetching product:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  return { product, loading, error };
};
