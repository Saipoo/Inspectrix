import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { SearchResult } from '../data/searchData';

interface SearchResultsProps {
  results: SearchResult[];
}

export function SearchResults({ results }: SearchResultsProps) {
  return (
    <div className="w-full max-w-3xl space-y-8">
      {results.map((result) => (
        <div key={result.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <a
                href={result.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-600 hover:underline flex items-center gap-2"
              >
                {result.title}
                <ExternalLink size={16} />
              </a>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">{result.website}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={i < Math.floor(result.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({result.reviews} reviews)</span>
              </div>

              {result.isBestChoice && (
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  Best Choice
                </span>
              )}

              <p className="text-gray-700">{result.description}</p>

              {result.price && (
                <p className="text-lg font-semibold text-gray-900">{result.price}</p>
              )}
            </div>

            {result.imageUrl && (
              <img
                src={result.imageUrl}
                alt={result.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}