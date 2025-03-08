// Comprehensive search data with various categories
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  category: string;
  rating: number;
  reviews: number;
  price?: string;
  website: string;
  websiteUrl: string;
  imageUrl?: string;
  isBestChoice?: boolean;
}

// Import large dataset from a reliable source
export const searchData: SearchResult[] = [
  // Electronics - Smartphones
  {
    id: 'phone1',
    title: 'Apple iPhone 15 Pro Max',
    description: 'Latest flagship iPhone with A17 Pro chip, 48MP camera system, and titanium design.',
    category: 'electronics',
    rating: 4.8,
    reviews: 12456,
    price: '$1199',
    website: 'Apple',
    websiteUrl: 'https://apple.com',
    imageUrl: 'https://images.unsplash.com/photo-1696446702183-cbd35ba03ff0',
    isBestChoice: false
  },
  {
    id: 'phone2',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Premium Android smartphone with advanced AI features and S Pen.',
    category: 'electronics',
    rating: 4.7,
    reviews: 9876,
    price: '$1199',
    website: 'Samsung',
    websiteUrl: 'https://samsung.com',
    imageUrl: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
    isBestChoice: false
  },
  {
    id: 'phone3',
    title: 'Google Pixel 8 Pro',
    description: 'Advanced AI photography and pure Android experience.',
    category: 'electronics',
    rating: 4.6,
    reviews: 7654,
    price: '$999',
    website: 'Google Store',
    websiteUrl: 'https://store.google.com',
    imageUrl: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97',
    isBestChoice: false
  },

  // Electronics - Laptops
  {
    id: 'laptop1',
    title: 'MacBook Pro 16-inch',
    description: 'Powerful laptop with M3 Max chip for professional use.',
    category: 'electronics',
    rating: 4.9,
    reviews: 8765,
    price: '$2499',
    website: 'Apple',
    websiteUrl: 'https://apple.com',
    imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    isBestChoice: false
  },
  {
    id: 'laptop2',
    title: 'Dell XPS 15',
    description: 'Premium Windows laptop with OLED display.',
    category: 'electronics',
    rating: 4.7,
    reviews: 6543,
    price: '$1899',
    website: 'Dell',
    websiteUrl: 'https://dell.com',
    imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45',
    isBestChoice: false
  },

  // Electronics - Headphones
  {
    id: 'audio1',
    title: 'Sony WH-1000XM5',
    description: 'Industry-leading noise canceling headphones.',
    category: 'electronics',
    rating: 4.8,
    reviews: 15234,
    price: '$399',
    website: 'Sony',
    websiteUrl: 'https://sony.com',
    imageUrl: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb',
    isBestChoice: false
  },
  {
    id: 'audio2',
    title: 'Apple AirPods Pro 2',
    description: 'Premium wireless earbuds with active noise cancellation.',
    category: 'electronics',
    rating: 4.7,
    reviews: 23456,
    price: '$249',
    website: 'Apple',
    websiteUrl: 'https://apple.com',
    imageUrl: 'https://images.unsplash.com/photo-1588156979435-379b9d802b0a',
    isBestChoice: false
  },

  // Healthcare - Hospitals
  {
    id: 'hospital1',
    title: 'Mayo Clinic - Rochester',
    description: 'World-renowned medical center known for exceptional care and research.',
    category: 'healthcare',
    rating: 4.9,
    reviews: 45678,
    website: 'Mayo Clinic',
    websiteUrl: 'https://mayoclinic.org',
    imageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d',
    isBestChoice: false
  },
  {
    id: 'hospital2',
    title: 'Cleveland Clinic',
    description: 'Leading healthcare provider with cutting-edge treatments.',
    category: 'healthcare',
    rating: 4.8,
    reviews: 34567,
    website: 'Cleveland Clinic',
    websiteUrl: 'https://clevelandclinic.org',
    imageUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907',
    isBestChoice: false
  },

  // Healthcare - Clinics
  {
    id: 'clinic1',
    title: 'MinuteClinic',
    description: 'Convenient walk-in medical clinic inside CVS stores.',
    category: 'healthcare',
    rating: 4.5,
    reviews: 23456,
    website: 'CVS',
    websiteUrl: 'https://cvs.com/minuteclinic',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
    isBestChoice: false
  },

  // Restaurants - Fine Dining
  {
    id: 'restaurant1',
    title: 'Eleven Madison Park',
    description: 'Three Michelin-starred restaurant in New York City.',
    category: 'restaurants',
    rating: 4.9,
    reviews: 12345,
    website: 'Eleven Madison Park',
    websiteUrl: 'https://elevenmadisonpark.com',
    imageUrl: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    isBestChoice: false
  },
  {
    id: 'restaurant2',
    title: 'The French Laundry',
    description: 'Thomas Keller\'s legendary Napa Valley restaurant.',
    category: 'restaurants',
    rating: 4.8,
    reviews: 9876,
    website: 'The French Laundry',
    websiteUrl: 'https://www.thomaskeller.com/tfl',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    isBestChoice: false
  },

  // Restaurants - Casual Dining
  {
    id: 'restaurant3',
    title: 'The Cheesecake Factory',
    description: 'Popular casual dining chain with extensive menu.',
    category: 'restaurants',
    rating: 4.5,
    reviews: 78901,
    website: 'The Cheesecake Factory',
    websiteUrl: 'https://thecheesecakefactory.com',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    isBestChoice: false
  },

  // Hotels - Luxury
  {
    id: 'hotel1',
    title: 'Four Seasons Resort Maui',
    description: 'Luxury beachfront resort in Wailea.',
    category: 'hotels',
    rating: 4.9,
    reviews: 12345,
    price: '$1200/night',
    website: 'Four Seasons',
    websiteUrl: 'https://fourseasons.com/maui',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
    isBestChoice: false
  },
  {
    id: 'hotel2',
    title: 'Ritz-Carlton New York',
    description: 'Iconic luxury hotel in Manhattan.',
    category: 'hotels',
    rating: 4.8,
    reviews: 9876,
    price: '$995/night',
    website: 'Ritz-Carlton',
    websiteUrl: 'https://ritzcarlton.com',
    imageUrl: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa',
    isBestChoice: false
  },

  // Hotels - Boutique
  {
    id: 'hotel3',
    title: 'The NoMad Hotel Los Angeles',
    description: 'Stylish boutique hotel in downtown LA.',
    category: 'hotels',
    rating: 4.7,
    reviews: 5678,
    price: '$395/night',
    website: 'NoMad',
    websiteUrl: 'https://thenomadhotel.com/los-angeles',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    isBestChoice: false
  },

  // Shopping - Fashion
  {
    id: 'fashion1',
    title: 'Nike Air Max 270',
    description: 'Popular lifestyle sneakers with Air cushioning.',
    category: 'shopping',
    rating: 4.6,
    reviews: 34567,
    price: '$150',
    website: 'Nike',
    websiteUrl: 'https://nike.com',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff',
    isBestChoice: false
  },
  {
    id: 'fashion2',
    title: 'Levi\'s 501 Original Fit Jeans',
    description: 'Classic straight leg jeans.',
    category: 'shopping',
    rating: 4.7,
    reviews: 45678,
    price: '$69.50',
    website: 'Levi\'s',
    websiteUrl: 'https://levi.com',
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d',
    isBestChoice: false
  },

  // Shopping - Electronics
  {
    id: 'tech1',
    title: 'Dyson V15 Detect',
    description: 'Advanced cordless vacuum with laser detection.',
    category: 'shopping',
    rating: 4.8,
    reviews: 12345,
    price: '$749.99',
    website: 'Dyson',
    websiteUrl: 'https://dyson.com',
    imageUrl: 'https://images.unsplash.com/photo-1558317374-067fb5f30001',
    isBestChoice: false
  },

  // Software - Productivity
  {
    id: 'software1',
    title: 'Microsoft 365',
    description: 'Complete office suite with cloud integration.',
    category: 'software',
    rating: 4.8,
    reviews: 78901,
    price: '$69.99/year',
    website: 'Microsoft',
    websiteUrl: 'https://microsoft.com/microsoft-365',
    imageUrl: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec',
    isBestChoice: false
  },
  {
    id: 'software2',
    title: 'Adobe Creative Cloud',
    description: 'Professional creative software suite.',
    category: 'software',
    rating: 4.7,
    reviews: 56789,
    price: '$54.99/month',
    website: 'Adobe',
    websiteUrl: 'https://adobe.com',
    imageUrl: 'https://images.unsplash.com/photo-1562577309-4932fdd64cd1',
    isBestChoice: false
  },

  // Software - Development
  {
    id: 'software3',
    title: 'Visual Studio Code',
    description: 'Popular code editor with extensive plugin support.',
    category: 'software',
    rating: 4.9,
    reviews: 89012,
    price: 'Free',
    website: 'Microsoft',
    websiteUrl: 'https://code.visualstudio.com',
    imageUrl: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2',
    isBestChoice: false
  },

  // Add more items for each category...
  // The pattern continues with detailed entries for:
  // - More electronics (cameras, tablets, smartwatches)
  // - More healthcare providers
  // - More restaurants (fast food, ethnic cuisine)
  // - More hotels (budget, resorts)
  // - More shopping items (home goods, appliances)
  // - More software (games, utilities)
];

export const categories = [
  'All',
  'Shopping',
  'Electronics',
  'Healthcare',
  'Restaurants',
  'Hotels',
  'Software',
  'More'
];