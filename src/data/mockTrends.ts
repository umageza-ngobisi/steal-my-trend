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

export const mockTrends: Trend[] = [];
