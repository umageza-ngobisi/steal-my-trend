import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Trend } from '../data/mockTrends';

export const useTrends = (category?: string) => {
  const [trends, setTrends] = useState<Trend[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        setLoading(true);
        let query = supabase.from('trends').select('*');

        if (category && category !== 'all') {
          query = query.eq('category', category.toLowerCase());
        }

        const { data, error } = await query.order('timestamp', { ascending: false });

        if (error) throw error;

        // Map database fields to frontend Trend interface
        const mappedTrends: Trend[] = (data || []).map((t: any) => ({
          id: t.id,
          name: t.name,
          category: t.category,
          viralityScore: t.virality_score || 0,
          growth: t.growth_percentage || 0,
          platform: t.platform,
          thumbnail: t.thumbnail_url || '',
          timestamp: formatTimestamp(t.timestamp),
          engagement: formatEngagement(t.engagement),
        }));

        setTrends(mappedTrends);
      } catch (err: any) {
        console.error('Error fetching trends:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrends();
  }, [category]);

  return { trends, loading, error };
};

// Helper to format timestamp into human readable "X mins ago" etc
function formatTimestamp(timestamp: string) {
  const now = new Date();
  const then = new Date(timestamp);
  const diffInMinutes = Math.floor((now.getTime() - then.getTime()) / (1000 * 60));

  if (diffInMinutes < 1) return 'Just now';
  if (diffInMinutes < 60) return `${diffInMinutes} mins ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
  return then.toLocaleDateString();
}

// Helper to format engagement numbers
function formatEngagement(engagement: number) {
  if (engagement >= 1000000) return `${(engagement / 1000000).toFixed(1)}M likes`;
  if (engagement >= 1000) return `${(engagement / 1000).toFixed(0)}k views`;
  return `${engagement} reach`;
}
