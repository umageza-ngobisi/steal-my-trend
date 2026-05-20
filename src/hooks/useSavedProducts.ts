import { useState } from 'react';
import type { Product } from '../lib/mockData';

export const useSavedProducts = () => {
  const [savedProducts, setSavedProducts] = useState<Product[]>(() => {
    const stored = localStorage.getItem('savedProducts');
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse saved products', e);
        return [];
      }
    }
    return [];
  });

  const saveProduct = (product: Product) => {
    setSavedProducts((prev) => {
      const isAlreadySaved = prev.some((p) => p.id === product.id);
      if (isAlreadySaved) return prev;
      const updated = [...prev, product];
      localStorage.setItem('savedProducts', JSON.stringify(updated));
      return updated;
    });
  };

  const unsaveProduct = (productId: string) => {
    setSavedProducts((prev) => {
      const updated = prev.filter((p) => p.id !== productId);
      localStorage.setItem('savedProducts', JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (productId: string) => {
    return savedProducts.some((p) => p.id === productId);
  };

  return { savedProducts, saveProduct, unsaveProduct, isSaved };
};
