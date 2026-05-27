export interface Trend {
  id: string;
  name: string;
  category: 'fitness' | 'beauty' | 'gadgets' | 'pets' | 'home improvement' | 'fashion';
  viralityScore: number;
  growth: number;
  platform: 'TikTok' | 'Instagram' | 'Facebook' | 'YouTube';
  thumbnail: string;
  timestamp: string;
  engagement: string;
}

export const mockTrends: Trend[] = [
  {
    id: 't1',
    name: '75 Soft Challenge',
    category: 'fitness',
    viralityScore: 94,
    growth: 45,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400',
    timestamp: '2 hours ago',
    engagement: 'High'
  },
  {
    id: 't2',
    name: 'Quiet Luxury Aesthetic',
    category: 'fashion',
    viralityScore: 88,
    growth: 32,
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1539109132381-31512579f455?auto=format&fit=crop&q=80&w=400',
    timestamp: '5 hours ago',
    engagement: 'Medium'
  },
  {
    id: 't3',
    name: 'Mewing Technique',
    category: 'beauty',
    viralityScore: 96,
    growth: 124,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=400',
    timestamp: '1 hour ago',
    engagement: 'Extreme'
  },
  {
    id: 't4',
    name: 'AI Home Decorating',
    category: 'home improvement',
    viralityScore: 85,
    growth: 56,
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1523213139764-647bb239534d?auto=format&fit=crop&q=80&w=400',
    timestamp: '3 hours ago',
    engagement: 'Medium'
  },
  {
    id: 't5',
    name: 'Smart Pet Tracking',
    category: 'pets',
    viralityScore: 91,
    growth: 78,
    platform: 'Facebook',
    thumbnail: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400',
    timestamp: '6 hours ago',
    engagement: 'High'
  },
  {
    id: 't6',
    name: 'MagSafe Car Accessories',
    category: 'gadgets',
    viralityScore: 82,
    growth: 15,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400',
    timestamp: '4 hours ago',
    engagement: 'Medium'
  },
  {
    id: 't7',
    name: 'Sustainable Activewear',
    category: 'fashion',
    viralityScore: 89,
    growth: 42,
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1506152983658-59248c80c856?auto=format&fit=crop&q=80&w=400',
    timestamp: '8 hours ago',
    engagement: 'High'
  },
  {
    id: 't8',
    name: 'Clean Girl Makeup',
    category: 'beauty',
    viralityScore: 93,
    growth: 24,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=400',
    timestamp: '10 hours ago',
    engagement: 'High'
  },
  {
    id: 't9',
    name: 'Hybrid Home Offices',
    category: 'home improvement',
    viralityScore: 78,
    growth: 12,
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1593062096033-9a26b09da705?auto=format&fit=crop&q=80&w=400',
    timestamp: '12 hours ago',
    engagement: 'Medium'
  },
  {
    id: 't10',
    name: 'Biohacking for Focus',
    category: 'fitness',
    viralityScore: 87,
    growth: 64,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400',
    timestamp: '1 hour ago',
    engagement: 'High'
  }
];
