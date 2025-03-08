import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { CategoryTabs } from './components/CategoryTabs';
import { searchData, SearchResult } from './data/searchData';
import { scrapeAllSources } from './utils/scraper';

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    try {
      // First, search local data
      let results = searchData.filter((item) => {
        const matchesQuery = 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase()) ||
          item.website.toLowerCase().includes(query.toLowerCase());

        const matchesCategory = 
          selectedCategory === 'All' || 
          (selectedCategory === 'Shopping' && item.price) ||
          item.category.toLowerCase() === selectedCategory.toLowerCase();

        return matchesQuery && matchesCategory;
      });

      // Then, fetch additional data from web scraping
      const scrapedResults = await scrapeAllSources(query);
      
      // Combine local and scraped results
      results = [...results, ...scrapedResults];

      // Sort results by rating and mark the highest rated as best choice
      results = results.sort((a, b) => b.rating - a.rating);
      if (results.length > 0) {
        results.forEach(item => item.isBestChoice = false);
        results[0].isBestChoice = true;
      }

      setSearchResults(results);
      setHasSearched(true);
    } catch (error) {
      console.error('Search error:', error);
      setSearchResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    // Re-run the search with the new category
    handleSearch(document.querySelector<HTMLInputElement>('input[type="text"]')?.value || '');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {!hasSearched ? (
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="flex items-center gap-2 mb-8">
            <Search size={40} className="text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Inspectrix</h1>
          </div>
          <SearchBar onSearch={handleSearch} />
        </div>
      ) : (
        <div className="pt-6 px-4">
          <div className="flex items-center gap-4 mb-6 max-w-3xl mx-auto">
            <Search size={30} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Inspectrix</h1>
            <div className="flex-1">
              <SearchBar onSearch={handleSearch} />
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <CategoryTabs
              selectedCategory={selectedCategory}
              onSelectCategory={handleCategoryChange}
            />
            {loading ? (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                <p className="mt-2 text-gray-600">Searching...</p>
              </div>
            ) : searchResults.length > 0 ? (
              <SearchResults results={searchResults} />
            ) : (
              <div className="text-center py-8 text-gray-600">
                No results found. Try a different search term or category.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;