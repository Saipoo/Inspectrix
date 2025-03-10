import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { SearchResults } from './components/SearchResults';
import { CategoryTabs } from './components/CategoryTabs';
import { Filters } from './components/Filters';
import { Chatbot } from './components/Chatbot';
import { BestSellers } from './components/BestSellers';
import { BusinessRegistration } from './components/BusinessRegistration';
import { searchData, SearchResult } from './data/searchData';
import { scrapeAllSources } from './utils/scraper';
import { loadCSVData } from './utils/csvLoader';

function App() {
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [rating, setRating] = useState(4);
  const [sortBy, setSortBy] = useState('relevance');
  const [csvProducts, setCsvProducts] = useState<SearchResult[]>([]);
  const [currentBestChoice, setCurrentBestChoice] = useState<SearchResult>();

  useEffect(() => {
    loadCSVData().then(data => {
      setCsvProducts(data);
    });
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setLoading(true);

    try {
      // Search all data sources
      let results = [...searchData, ...csvProducts].filter((item) => {
        const matchesQuery = 
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase());

        const matchesCategory = 
          selectedCategory === 'All' || 
          item.category.toLowerCase() === selectedCategory.toLowerCase();

        const matchesPrice = 
          !item.price || 
          (parseFloat(item.price.replace(/[^0-9.-]+/g, '')) >= priceRange[0] &&
           parseFloat(item.price.replace(/[^0-9.-]+/g, '')) <= priceRange[1]);

        const matchesRating = item.rating >= rating;

        return matchesQuery && matchesCategory && matchesPrice && matchesRating;
      });

      // Get scraped results
      const scrapedResults = await scrapeAllSources(query);
      results = [...results, ...scrapedResults];

      // Apply sorting
      results = results.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'price_low':
            return (parseFloat(a.price?.replace(/[^0-9.-]+/g, '') || '0') -
                   parseFloat(b.price?.replace(/[^0-9.-]+/g, '') || '0'));
          case 'price_high':
            return (parseFloat(b.price?.replace(/[^0-9.-]+/g, '') || '0') -
                   parseFloat(a.price?.replace(/[^0-9.-]+/g, '') || '0'));
          case 'reviews':
            return b.reviews - a.reviews;
          default:
            return (b.rating * Math.log10(b.reviews)) - (a.rating * Math.log10(a.reviews));
        }
      });

      // Mark the best choice
      if (results.length > 0) {
        results.forEach(item => item.isBestChoice = false);
        results[0].isBestChoice = true;
        setCurrentBestChoice(results[0]);
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
          <p className="mt-4 text-gray-600 text-center max-w-md">
            Search for products, services, restaurants, hotels, and more. 
            Get AI-powered recommendations and detailed analysis.
          </p>
          <div className="mt-8">
            <BusinessRegistration />
          </div>
          <div className="mt-12 w-full max-w-4xl">
            <BestSellers products={[...searchData, ...csvProducts]} />
          </div>
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
          
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-6">
              <div className="w-64 flex-shrink-0 space-y-4">
                <Filters
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                  rating={rating}
                  setRating={setRating}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
                <BusinessRegistration />
              </div>
              
              <div className="flex-1 space-y-6">
                <CategoryTabs
                  selectedCategory={selectedCategory}
                  onSelectCategory={handleCategoryChange}
                />
                {loading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-2 text-gray-600">Searching across multiple sources...</p>
                  </div>
                ) : searchResults.length > 0 ? (
                  <SearchResults results={searchResults} />
                ) : (
                  <div className="text-center py-8 text-gray-600">
                    No results found. Try adjusting your filters or search term.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Chatbot onCustomSearch={handleSearch} currentBestChoice={currentBestChoice} />
    </div>
  );
}

export default App;
