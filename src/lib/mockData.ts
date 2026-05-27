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
    name: 'Portable Mini Blender',
    image: 'https://images.unsplash.com/photo-1585238341267-1cfec2046a55?auto=format&fit=crop&q=80&w=800',
    viralityScore: 98,
    platform: 'TikTok',
    stats: { views: '2.4M', likes: '150K', shares: '45K' },
    trendGrowth: 156,
    category: 'gadgets'
  },
  {
    id: '2',
    name: 'Galaxy Star Projector',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?auto=format&fit=crop&q=80&w=800',
    viralityScore: 95,
    platform: 'Instagram',
    stats: { views: '1.8M', likes: '210K', shares: '12K' },
    trendGrowth: 85,
    category: 'home improvement'
  },
  {
    id: '3',
    name: 'Deep Tissue Massage Gun',
    image: 'https://images.unsplash.com/photo-1621905252509-b333ee99748e?auto=format&fit=crop&q=80&w=800',
    viralityScore: 92,
    platform: 'TikTok',
    stats: { views: '3.1M', likes: '89K', shares: '22K' },
    trendGrowth: 45,
    category: 'fitness'
  },
  {
    id: '4',
    name: 'Smart WiFi Pet Feeder',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800',
    viralityScore: 89,
    platform: 'Facebook',
    stats: { views: '950K', likes: '45K', shares: '8K' },
    trendGrowth: 120,
    category: 'pets'
  },
  {
    id: '5',
    name: 'Air Fryer Cheat Sheet',
    image: 'https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&q=80&w=800',
    viralityScore: 87,
    platform: 'TikTok',
    stats: { views: '5.6M', likes: '320K', shares: '110K' },
    trendGrowth: 210,
    category: 'home improvement'
  },
  {
    id: '6',
    name: 'Facial Ice Roller',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&q=80&w=800',
    viralityScore: 94,
    platform: 'Instagram',
    stats: { views: '1.2M', likes: '95K', shares: '15K' },
    trendGrowth: 65,
    category: 'beauty'
  },
  {
    id: '7',
    name: 'Sleep Headphones Headband',
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=800',
    viralityScore: 91,
    platform: 'TikTok',
    stats: { views: '2.1M', likes: '180K', shares: '34K' },
    trendGrowth: 140,
    category: 'gadgets'
  },
  {
    id: '8',
    name: 'Reusable Smart Notebook',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800',
    viralityScore: 85,
    platform: 'YouTube',
    stats: { views: '450K', likes: '22K', shares: '5K' },
    trendGrowth: 30,
    category: 'gadgets'
  },
  {
    id: '9',
    name: 'Multi-Function Veggie Chopper',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?auto=format&fit=crop&q=80&w=800',
    viralityScore: 96,
    platform: 'TikTok',
    stats: { views: '8.4M', likes: '560K', shares: '180K' },
    trendGrowth: 320,
    category: 'home improvement'
  },
  {
    id: '10',
    name: 'Car Handheld Vacuum',
    image: 'https://images.unsplash.com/photo-1563161437-013110996843?auto=format&fit=crop&q=80&w=800',
    viralityScore: 88,
    platform: 'Facebook',
    stats: { views: '1.1M', likes: '64K', shares: '12K' },
    trendGrowth: 75,
    category: 'gadgets'
  },
  {
    id: '11',
    name: 'Resistance Band Set',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917a63e?auto=format&fit=crop&q=80&w=800',
    viralityScore: 82,
    platform: 'YouTube',
    stats: { views: '320K', likes: '15K', shares: '2K' },
    trendGrowth: 25,
    category: 'fitness'
  },
  {
    id: '12',
    name: 'Oversized Wearable Blanket',
    image: 'https://images.unsplash.com/photo-1523381235208-1f606a38a75b?auto=format&fit=crop&q=80&w=800',
    viralityScore: 97,
    platform: 'TikTok',
    stats: { views: '4.2M', likes: '410K', shares: '95K' },
    trendGrowth: 180,
    category: 'fashion'
  },
  {
    id: '13',
    name: 'Sunset Projection Lamp',
    image: 'https://images.unsplash.com/photo-1619191163420-4a7c0f99b92e?auto=format&fit=crop&q=80&w=800',
    viralityScore: 93,
    platform: 'TikTok',
    stats: { views: '2.7M', likes: '185K', shares: '28K' },
    trendGrowth: 95,
    category: 'gadgets'
  },
  {
    id: '14',
    name: 'Magnetic Charging Cable',
    image: 'https://images.unsplash.com/photo-1588505794041-7c442270bb31?auto=format&fit=crop&q=80&w=800',
    viralityScore: 86,
    platform: 'Instagram',
    stats: { views: '850K', likes: '32K', shares: '4K' },
    trendGrowth: 40,
    category: 'gadgets'
  },
  {
    id: '15',
    name: 'Electric Foot Callus Remover',
    image: 'https://images.unsplash.com/photo-1519415510236-85592ac59c97?auto=format&fit=crop&q=80&w=800',
    viralityScore: 90,
    platform: 'Facebook',
    stats: { views: '1.5M', likes: '78K', shares: '19K' },
    trendGrowth: 110,
    category: 'beauty'
  },
  {
    id: '16',
    name: 'Self-Cleaning Hair Brush',
    image: 'https://images.unsplash.com/photo-1522338140262-f46f5913618a?auto=format&fit=crop&q=80&w=800',
    viralityScore: 99,
    platform: 'TikTok',
    stats: { views: '12.4M', likes: '890K', shares: '310K' },
    trendGrowth: 450,
    category: 'beauty'
  },
  {
    id: '17',
    name: 'Adjustable Dumbbell Set',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2ec617?auto=format&fit=crop&q=80&w=800',
    viralityScore: 84,
    platform: 'YouTube',
    stats: { views: '580K', likes: '29K', shares: '3K' },
    trendGrowth: 15,
    category: 'fitness'
  },
  {
    id: '18',
    name: 'Silicone Stretch Lids',
    image: 'https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=800',
    viralityScore: 88,
    platform: 'Facebook',
    stats: { views: '2.2M', likes: '115K', shares: '55K' },
    trendGrowth: 80,
    category: 'home improvement'
  },
  {
    id: '19',
    name: 'Calming Dog Bed',
    image: 'https://images.unsplash.com/photo-1541599540903-21bdf53867a7?auto=format&fit=crop&q=80&w=800',
    viralityScore: 95,
    platform: 'Instagram',
    stats: { views: '3.8M', likes: '420K', shares: '88K' },
    trendGrowth: 130,
    category: 'pets'
  },
  {
    id: '20',
    name: 'Electric Salt & Pepper Mills',
    image: 'https://images.unsplash.com/photo-1589533610925-1cffc309ebaa?auto=format&fit=crop&q=80&w=800',
    viralityScore: 92,
    platform: 'TikTok',
    stats: { views: '4.1M', likes: '230K', shares: '62K' },
    trendGrowth: 175,
    category: 'home improvement'
  }
];
