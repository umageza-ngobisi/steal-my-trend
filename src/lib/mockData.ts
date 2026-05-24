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

export const MOCK_PRODUCTS: Product[] = [];
