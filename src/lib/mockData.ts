export interface Product {
  id: string;
  name: string;
  image: string;
  viralityScore: number;
  platform: 'TikTok' | 'Instagram' | 'Facebook' | 'YouTube';
  stats: {
    views: string;
    likes: string;
    shares: string;
  };
  trendGrowth: number;
  category: string;
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Crystal Galaxy Projector',
    image: 'https://images.unsplash.com/photo-1614853316476-de00d14cb1fc?w=800&auto=format&fit=crop&q=60',
    viralityScore: 94,
    platform: 'TikTok',
    stats: {
      views: '1.2M',
      likes: '142K',
      shares: '12K',
    },
    trendGrowth: 24,
    category: 'Home Improvement',
  },
  {
    id: '2',
    name: 'Minimalist Air Purifier',
    image: 'https://images.unsplash.com/photo-1585771724684-252702b6442e?w=800&auto=format&fit=crop&q=60',
    viralityScore: 88,
    platform: 'Instagram',
    stats: {
      views: '850K',
      likes: '62K',
      shares: '4.5K',
    },
    trendGrowth: 15,
    category: 'Gadgets',
  },
  {
    id: '3',
    name: 'Portable Espresso Maker',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=800&auto=format&fit=crop&q=60',
    viralityScore: 91,
    platform: 'TikTok',
    stats: {
      views: '2.4M',
      likes: '310K',
      shares: '28K',
    },
    trendGrowth: 42,
    category: 'Gadgets',
  },
  {
    id: '4',
    name: 'Luminous Face Roller',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfac44e016?w=800&auto=format&fit=crop&q=60',
    viralityScore: 82,
    platform: 'Instagram',
    stats: {
      views: '420K',
      likes: '28K',
      shares: '2.1K',
    },
    trendGrowth: -5,
    category: 'Beauty',
  },
  {
    id: '5',
    name: 'Smart Pet Feeder',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&auto=format&fit=crop&q=60',
    viralityScore: 96,
    platform: 'Facebook',
    stats: {
      views: '3.1M',
      likes: '240K',
      shares: '45K',
    },
    trendGrowth: 68,
    category: 'Pets',
  },
  {
    id: '6',
    name: 'Ergonomic Sleep Mask',
    image: 'https://images.unsplash.com/photo-1634568894173-58f001c9b68e?w=800&auto=format&fit=crop&q=60',
    viralityScore: 78,
    platform: 'YouTube',
    stats: {
      views: '210K',
      likes: '12K',
      shares: '1.2K',
    },
    trendGrowth: 8,
    category: 'Fitness',
  },
];
