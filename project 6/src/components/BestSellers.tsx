import React from 'react';
import { Trophy, ThumbsUp } from 'lucide-react';
import { SearchResult } from '../data/searchData';

interface BestSellersProps {
  products: SearchResult[];
}

export function BestSellers({ products }: BestSellersProps) {
  const bestSellers = products
    .filter(product => product.rating >= 4.7 && product.reviews > 1000)
    .sort((a, b) => b.reviews - a.reviews)
    .slice(0, 5);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="text-yellow-500" size={24} />
        <h2 className="text-xl font-semibold">Inspectrix Bestsellers</h2>
      </div>

      <div className="space-y-4">
        {bestSellers.map((product) => (
          <div key={product.id} className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50">
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-20 h-20 object-cover rounded-lg"
              />
            )}
            <div className="flex-1">
              <a
                href={product.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium text-blue-600 hover:underline"
              >
                {product.title}
              </a>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-yellow-500">★</span>
                <span>{product.rating}</span>
                <span className="text-gray-500">({product.reviews} reviews)</span>
              </div>
              {product.price && (
                <div className="mt-1 font-medium">{product.price}</div>
              )}
              <div className="mt-2 flex items-center gap-1 text-green-600">
                <ThumbsUp size={16} />
                <span className="text-sm">{product.aiAnalysis}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
