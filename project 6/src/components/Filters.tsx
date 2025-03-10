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
    const newMin = Math.max(0, Math.min(Number(value), priceRange[1]));
    setPriceRange([newMin, priceRange[1]]);
  };

  const handleMaxPriceChange = (value: string) => {
    const newMax = Math.max(priceRange[0], Number(value));
    setPriceRange([priceRange[0], newMax]);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-5 space-y-5 border border-gray-200">
      <div className="flex items-center gap-2 border-b pb-3">
        <SlidersHorizontal size={22} className="text-blue-600" />
        <h3 className="font-semibold text-lg">Filters</h3>
      </div>

      <div className="space-y-5">
        {/* Price Range Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Price Range (USD)
          </label>
          <div className="flex gap-3 items-center">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                min={0}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => handleMinPriceChange(e.target.value)}
                className="w-full pl-7 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Min ($)"
              />
            </div>
            <span className="text-gray-500">to</span>
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
              <input
                type="number"
                min={priceRange[0]}
                max={10000}
                value={priceRange[1]}
                onChange={(e) => handleMaxPriceChange(e.target.value)}
                className="w-full pl-7 pr-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                placeholder="Max ($)"
              />
            </div>
          </div>
        </div>

        {/* Rating Filter */}
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

        {/* Sorting Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sort By
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-md border border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
