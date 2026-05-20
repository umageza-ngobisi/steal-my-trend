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
    id: '1',
    name: 'Portable Neck Fan',
    category: 'gadgets',
    viralityScore: 94,
    growth: 125,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400&h=400&fit=crop',
    timestamp: '2 mins ago',
    engagement: '1.2M likes'
  },
  {
    id: '2',
    name: 'Volcanic Stone Oil Roller',
    category: 'beauty',
    viralityScore: 89,
    growth: 85,
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1596462502278-27bf8761e474?w=400&h=400&fit=crop',
    timestamp: '5 mins ago',
    engagement: '450k views'
  },
  {
    id: '3',
    name: 'Resistance Band Set',
    category: 'fitness',
    viralityScore: 78,
    growth: 45,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=400&fit=crop',
    timestamp: '12 mins ago',
    engagement: '89k shares'
  },
  {
    id: '4',
    name: 'Self-Cleaning Cat Litter Box',
    category: 'pets',
    viralityScore: 92,
    growth: 150,
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop',
    timestamp: '15 mins ago',
    engagement: '2.1M views'
  },
  {
    id: '5',
    name: 'Sunset Lamp',
    category: 'home improvement',
    viralityScore: 85,
    growth: 60,
    platform: 'TikTok',
    thumbnail: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?w=400&h=400&fit=crop',
    timestamp: '20 mins ago',
    engagement: '750k likes'
  },
  {
    id: '6',
    name: 'Oversized Linen Shirt',
    category: 'fashion',
    viralityScore: 81,
    growth: 30,
    platform: 'Instagram',
    thumbnail: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    timestamp: '30 mins ago',
    engagement: '120k likes'
  },
  {
    id: '7',
    name: 'Electric Spinach Peeler',
    category: 'gadgets',
    viralityScore: 72,
    growth: 110,
    platform: 'Facebook',
    thumbnail: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?w=400&h=400&fit=crop',
    timestamp: '45 mins ago',
    engagement: '300k reach'
  },
  {
    id: '8',
    name: 'Weighted Blanket',
    category: 'home improvement',
    viralityScore: 88,
    growth: 55,
    platform: 'YouTube',
    thumbnail: 'https://images.unsplash.com/photo-1583335512872-68c4a82b7b1c?w=400&h=400&fit=crop',
    timestamp: '1 hour ago',
    engagement: '1.5M views'
  }
];
