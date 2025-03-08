import React from 'react';
import { categories } from '../data/searchData';

interface CategoryTabsProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryTabs({ selectedCategory, onSelectCategory }: CategoryTabsProps) {
  return (
    <div className="flex gap-6 border-b border-gray-200 w-full max-w-3xl">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`py-3 px-2 text-sm font-medium border-b-2 transition-colors ${
            selectedCategory === category
              ? 'text-blue-600 border-blue-600'
              : 'text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}