import React from 'react';
import { SlidersHorizontal } from 'lucide-react';

interface FiltersProps {
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  rating: number;
  setRating: (rating: number) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
}

export function Filters({
  priceRange,
  setPriceRange,
  rating,
  setRating,
  sortBy,
  setSortBy
}: FiltersProps) {
  const handleMinPriceChange = (value: string) => {
    const newMin = Math.min(Number(value), priceRange[1]);
    setPriceRange([newMin, priceRange[1]]);
  };

  const handleMaxPriceChange = (value: string) => {
    const newMax = Math.max(Number(value), priceRange[0]);
    setPriceRange([priceRange[0], newMax]);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 space-y-4">
      <div className="flex items-center gap-2 border-b pb-2">
        <SlidersHorizontal size={20} className="text-blue-600" />
        <h3 className="font-semibold">Filters</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <div className="flex gap-2 items-center">
            <div className="flex-1">
              <input
                type="number"
                min={0}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => handleMinPriceChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Min"
              />
            </div>
            <span className="text-gray-500">to</span>
            <div className="flex-1">
              <input
                type="number"
                min={priceRange[0]}
                max={10000}
                value={priceRange[1]}
                onChange={(e) => handleMaxPriceChange(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                placeholder="Max"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Rating ({rating}★)
          </label>
          <input
            type="range"
            min={0}
            max={5}
            step={0.5}
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0★</span>
            <span>5★</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
          >
            <option value="relevance">Relevance</option>
            <option value="rating">Rating</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
            <option value="reviews">Most Reviews</option>
          </select>
        </div>
      </div>
    </div>
  );
}
