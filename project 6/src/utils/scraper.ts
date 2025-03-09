import axios from 'axios';
import * as cheerio from 'cheerio';
import { SearchResult } from '../data/searchData';
import { format } from 'date-fns';

// Function to generate a unique ID
const generateId = () => Math.random().toString(36).substr(2, 9);

// Function to extract rating from text (e.g., "4.5 out of 5")
const extractRating = (text: string): number => {
  const match = text.match(/(\d+(\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
};

// Function to extract price from text
const extractPrice = (text: string): string | undefined => {
  const match = text.match(/\$\d+(\.\d{2})?/);
  return match ? match[0] : undefined;
};

// Function to generate AI analysis based on product data
const generateAIAnalysis = (title: string, price: string | undefined, rating: number, reviews: number): string => {
  const pricePoint = price ? parseFloat(price.replace(/[^0-9.-]+/g, '')) : 0;
  let analysis = '';

  if (rating >= 4.5 && reviews > 1000) {
    analysis += 'Highly recommended based on exceptional user feedback. ';
  }

  if (pricePoint > 500) {
    analysis += 'Premium product with high-end features. ';
  } else if (pricePoint > 100) {
    analysis += 'Good value for money. ';
  } else {
    analysis += 'Budget-friendly option. ';
  }

  return analysis;
};

// Enhanced Amazon scraper with more detailed information
export async function scrapeAmazon(searchQuery: string): Promise<SearchResult[]> {
  try {
    const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const results: SearchResult[] = [];

    $('.s-result-item').each((_, element) => {
      const title = $(element).find('h2 span').text().trim();
      const price = $(element).find('.a-price-whole').first().text().trim();
      const rating = extractRating($(element).find('.a-icon-star-small').text().trim());
      const reviews = parseInt($(element).find('.a-size-small .a-size-base').text().trim(), 10) || 0;
      const imageUrl = $(element).find('img').attr('src');
      const productUrl = 'https://amazon.com' + $(element).find('a.a-link-normal').attr('href');

      if (title && price) {
        const result: SearchResult = {
          id: generateId(),
          title,
          description: title,
          category: 'shopping',
          rating: rating || 4.0,
          reviews: reviews || 100,
          price: `$${price}`,
          website: 'Amazon',
          websiteUrl: productUrl,
          imageUrl: imageUrl || 'https://images.unsplash.com/photo-1557821552-17105176677c',
          bestPaymentMethod: 'Amazon Prime Card - 5% cashback',
          aiAnalysis: generateAIAnalysis(title, `$${price}`, rating || 4.0, reviews || 100),
          lastUpdated: format(new Date(), 'PPP')
        };

        results.push(result);
      }
    });

    return results;
  } catch (error) {
    console.error('Error scraping Amazon:', error);
    return [];
  }
}

// Enhanced Best Buy scraper
export async function scrapeBestBuy(searchQuery: string): Promise<SearchResult[]> {
  try {
    const response = await axios.get(`https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(searchQuery)}`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    
    const $ = cheerio.load(response.data);
    const results: SearchResult[] = [];

    $('.list-item').each((_, element) => {
      const title = $(element).find('.sku-title').text().trim();
      const price = $(element).find('.priceView-customer-price').text().trim();
      const rating = extractRating($(element).find('.rating-reviews').text().trim());
      const reviews = parseInt($(element).find('.rating-reviews').text().trim(), 10) || 0;
      const imageUrl = $(element).find('img').attr('src');
      const productUrl = 'https://bestbuy.com' + $(element).find('a').attr('href');

      if (title && price) {
        const result: SearchResult = {
          id: generateId(),
          title,
          description: title,
          category: 'electronics',
          rating: rating || 4.0,
          reviews: reviews || 100,
          price: extractPrice(price),
          website: 'Best Buy',
          websiteUrl: productUrl,
          imageUrl: imageUrl || 'https://images.unsplash.com/photo-1557821552-17105176677c',
          bestPaymentMethod: 'Best Buy Credit Card - 5% back in rewards',
          aiAnalysis: generateAIAnalysis(title, extractPrice(price), rating || 4.0, reviews || 100),
          lastUpdated: format(new Date(), 'PPP')
        };

        results.push(result);
      }
    });

    return results;
  } catch (error) {
    console.error('Error scraping Best Buy:', error);
    return [];
  }
}

// Main scraping function that combines results from multiple sources
export async function scrapeAllSources(searchQuery: string): Promise<SearchResult[]> {
  try {
    const [amazonResults, bestBuyResults] = await Promise.all([
      scrapeAmazon(searchQuery),
      scrapeBestBuy(searchQuery)
    ]);

    // Combine and sort results by rating and reviews
    const allResults = [...amazonResults, ...bestBuyResults]
      .sort((a, b) => {
        if (b.rating === a.rating) {
          return b.reviews - a.reviews;
        }
        return b.rating - a.rating;
      });

    // Mark the highest-rated item as best choice
    if (allResults.length > 0) {
      allResults[0].isBestChoice = true;
    }

    return allResults;
  } catch (error) {
    console.error('Error scraping all sources:', error);
    return [];
  }
}
