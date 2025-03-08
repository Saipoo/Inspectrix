import axios from 'axios';
import * as cheerio from 'cheerio';
import { SearchResult } from '../data/searchData';

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

// Function to scrape Amazon product data
export async function scrapeAmazon(searchQuery: string): Promise<SearchResult[]> {
  try {
    const response = await axios.get(`https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}`);
    const $ = cheerio.load(response.data);
    const results: SearchResult[] = [];

    $('.s-result-item').each((_, element) => {
      const title = $(element).find('h2 span').text().trim();
      const price = $(element).find('.a-price-whole').first().text().trim();
      const rating = extractRating($(element).find('.a-icon-star-small').text().trim());
      const reviews = parseInt($(element).find('.a-size-small .a-size-base').text().trim(), 10) || 0;
      const imageUrl = $(element).find('img').attr('src');

      if (title && price) {
        results.push({
          id: generateId(),
          title,
          description: title,
          category: 'shopping',
          rating: rating || 4.0,
          reviews: reviews || 100,
          price: `$${price}`,
          website: 'Amazon',
          websiteUrl: 'https://amazon.com',
          imageUrl: imageUrl || 'https://images.unsplash.com/photo-1557821552-17105176677c',
          isBestChoice: false
        });
      }
    });

    return results;
  } catch (error) {
    console.error('Error scraping Amazon:', error);
    return [];
  }
}

// Function to scrape Best Buy product data
export async function scrapeBestBuy(searchQuery: string): Promise<SearchResult[]> {
  try {
    const response = await axios.get(`https://www.bestbuy.com/site/searchpage.jsp?st=${encodeURIComponent(searchQuery)}`);
    const $ = cheerio.load(response.data);
    const results: SearchResult[] = [];

    $('.list-item').each((_, element) => {
      const title = $(element).find('.sku-title').text().trim();
      const price = $(element).find('.priceView-customer-price').text().trim();
      const rating = extractRating($(element).find('.rating-reviews').text().trim());
      const reviews = parseInt($(element).find('.rating-reviews').text().trim(), 10) || 0;
      const imageUrl = $(element).find('img').attr('src');

      if (title && price) {
        results.push({
          id: generateId(),
          title,
          description: title,
          category: 'electronics',
          rating: rating || 4.0,
          reviews: reviews || 100,
          price: extractPrice(price),
          website: 'Best Buy',
          websiteUrl: 'https://bestbuy.com',
          imageUrl: imageUrl || 'https://images.unsplash.com/photo-1557821552-17105176677c',
          isBestChoice: false
        });
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