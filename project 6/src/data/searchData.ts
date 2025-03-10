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
  
  {
    id: 'laptop6',
    title: "Apple MacBook Pro 16",
    description: "Premium build, M2 Pro chip, and exceptional battery life.",
    category: "Laptop Brands",
    rating: 4.8,
    reviews: 3200,
    price: "$2499",
    website: "Apple Inc.",
    websiteUrl: "https://www.apple.com/mac/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'laptop7',
    title: "Dell XPS 15",
    description: "High-performance Windows laptop with OLED display.",
    category: "Laptop Brands",
    rating: 4.6,
    reviews: 2800,
    price: "$1899",
    website: "Dell Technologies",
    websiteUrl: "https://www.dell.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop',
    title: "HP Spectre x360",
    description: "Convertible laptop with premium build and great battery.",
    category: "Laptop Brands",
    rating: 4.5,
    reviews: 2500,
    price: "$1599",
    website: "HP Inc.",
    websiteUrl: "https://www.hp.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop8',
    title: "Lenovo ThinkPad X1 Carbon",
    description: "Durable business laptop with an excellent keyboard.",
    category: "Laptop Brands",
    rating: 4.7,
    reviews: 3100,
    price: "$1999",
    website: "Lenovo",
    websiteUrl: "https://www.lenovo.com/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'laptop9',
    title: "Asus ROG Zephyrus G14",
    description: "Compact gaming laptop with AMD Ryzen 9 and RTX 4060.",
    category: "Laptop Brands",
    rating: 4.6,
    reviews: 2900,
    price: "$1799",
    website: "Asus",
    websiteUrl: "https://www.asus.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop10',
    title: "Microsoft Surface Laptop 5",
    description: "Slim and stylish laptop with excellent touch display.",
    category: "Laptop Brands",
    rating: 4.5,
    reviews: 2200,
    price: "$1499",
    website: "Microsoft",
    websiteUrl: "https://www.microsoft.com/surface",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop11',
    title: "Razer Blade 15",
    description: "Premium gaming laptop with high refresh-rate display.",
    category: "Laptop Brands",
    rating: 4.6,
    reviews: 2700,
    price: "$2199",
    website: "Razer",
    websiteUrl: "https://www.razer.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop12',
    title: "Acer Predator Helios 300",
    description: "Affordable gaming laptop with high-end performance.",
    category: "Laptop Brands",
    rating: 4.5,
    reviews: 2400,
    price: "$1299",
    website: "Acer",
    websiteUrl: "https://www.acer.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop13',
    title: "MSI Stealth 14 Studio",
    description: "Powerful gaming and content creation laptop.",
    category: "Laptop Brands",
    rating: 4.7,
    reviews: 2800,
    price: "$2099",
    website: "MSI",
    websiteUrl: "https://www.msi.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'laptop14',
    title: "Samsung Galaxy Book 3 Ultra",
    description: "Ultra-lightweight Windows laptop with AMOLED screen.",
    category: "Laptop Brands",
    rating: 4.6,
    reviews: 2600,
    price: "$1999",
    website: "Samsung",
    websiteUrl: "https://www.samsung.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'phone5',
    title: "Apple iPhone 15 Pro Max",
    description: "Latest flagship iPhone with A17 Pro chip and titanium design.",
    category: "Smartphones",
    rating: 4.9,
    reviews: 12456,
    price: "$1199",
    website: "Apple Inc.",
    websiteUrl: "https://www.apple.com/iphone/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'phone6',
    title: "Samsung Galaxy S23 Ultra",
    description: "Best Android flagship with a 200MP camera and S-Pen.",
    category: "Smartphones",
    rating: 4.8,
    reviews: 9500,
    price: "$1199",
    website: "Samsung Electronics",
    websiteUrl: "https://www.samsung.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'phone7',
    title: "Google Pixel 8 Pro",
    description: "AI-powered Android experience with exceptional camera.",
    category: "Smartphones",
    rating: 4.7,
    reviews: 7000,
    price: "$999",
    website: "Google",
    websiteUrl: "https://store.google.com/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'phone8',
    title: "OnePlus 11",
    description: "Flagship killer with Snapdragon 8 Gen 2 and fast charging.",
    category: "Smartphones",
    rating: 4.6,
    reviews: 6200,
    price: "$799",
    website: "OnePlus",
    websiteUrl: "https://www.oneplus.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'phone9',
    title: "Xiaomi 13 Ultra",
    description: "High-end camera-focused flagship with Leica optics.",
    category: "Smartphones",
    rating: 4.7,
    reviews: 5500,
    price: "$1099",
    website: "Xiaomi",
    websiteUrl: "https://www.mi.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'ride6',
    title: "UberX",
    description: "Affordable everyday rides with professional drivers.",
    category: "Rides",
    rating: 4.7,
    reviews: 8500,
    price: "Varies",
    website: "Uber",
    websiteUrl: "https://www.uber.com/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'ride7',
    title: "Lyft Standard",
    description: "Reliable ride-hailing service with competitive pricing.",
    category: "Rides",
    rating: 4.6,
    reviews: 6200,
    price: "Varies",
    website: "Lyft",
    websiteUrl: "https://www.lyft.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'ride8',
    title: "Ola Mini",
    description: "Budget-friendly rides with convenient booking.",
    category: "Rides",
    rating: 4.5,
    reviews: 5000,
    price: "Varies",
    website: "Ola Cabs",
    websiteUrl: "https://www.olacabs.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'ride9',
    title: "Bolt Ride",
    description: "Fast and affordable rides with transparent pricing.",
    category: "Rides",
    rating: 4.4,
    reviews: 4800,
    price: "Varies",
    website: "Bolt",
    websiteUrl: "https://www.bolt.eu/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'ride10',
    title: "DiDi Express",
    description: "Low-cost ride-sharing with international availability.",
    category: "Rides",
    rating: 4.3,
    reviews: 4500,
    price: "Varies",
    website: "DiDi",
    websiteUrl: "https://www.didiglobal.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'wholesale1',
    title: "Costco Bulk Goods",
    description: "Wholesale pricing on groceries, electronics, and more.",
    category: "Wholesale Items",
    rating: 4.8,
    reviews: 7800,
    price: "Membership Required",
    website: "Costco",
    websiteUrl: "https://www.costco.com/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'wholesale2',
    title: "Sam's Club Deals",
    description: "Exclusive member savings on bulk purchases.",
    category: "Wholesale Items",
    rating: 4.7,
    reviews: 6800,
    price: "Membership Required",
    website: "Sam's Club",
    websiteUrl: "https://www.samsclub.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'wholesale3',
    title: "Metro Cash & Carry",
    description: "Wholesale groceries and FMCG products for businesses.",
    category: "Wholesale Items",
    rating: 4.6,
    reviews: 5000,
    price: "Varies",
    website: "Metro Wholesale",
    websiteUrl: "https://www.metro.co.in/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'wholesale4',
    title: "BJ's Wholesale Club",
    description: "Bulk savings on household and grocery essentials.",
    category: "Wholesale Items",
    rating: 4.5,
    reviews: 4200,
    price: "Membership Required",
    website: "BJ's Wholesale",
    websiteUrl: "https://www.bjs.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'wholesale5',
    title: "Alibaba Wholesale",
    description: "Massive selection of wholesale goods worldwide.",
    category: "Wholesale Items",
    rating: 4.4,
    reviews: 9800,
    price: "Varies",
    website: "Alibaba",
    websiteUrl: "https://www.alibaba.com/",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id:'food1',
    title: "Pizza Margherita",
    description: "Classic Italian pizza with fresh mozzarella and basil.",
    category: "Foods",
    rating: 4.9,
    reviews: 12000,
    price: "$12",
    website: "Local Pizzerias",
    websiteUrl: "#",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'food2',
    title: "Sushi Platter",
    description: "Freshly prepared sushi with a variety of fish and rolls.",
    category: "Foods",
    rating: 4.8,
    reviews: 9500,
    price: "$25",
    website: "Japanese Restaurants",
    websiteUrl: "#",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'food3',
    title: "Biryani",
    description: "Spiced rice dish with tender chicken or lamb.",
    category: "Foods",
    rating: 4.7,
    reviews: 8700,
    price: "$10",
    website: "Indian Restaurants",
    websiteUrl: "#",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'food4',
    title: "Cheeseburger",
    description: "Grilled beef patty with melted cheese and fresh toppings.",
    category: "Foods",
    rating: 4.6,
    reviews: 7800,
    price: "$8",
    website: "Fast Food Chains",
    websiteUrl: "#",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id: 'food5',
    title: "Pasta Alfredo",
    description: "Creamy pasta dish with Parmesan cheese and garlic.",
    category: "Foods",
    rating: 4.5,
    reviews: 6500,
    price: "$15",
    website: "Italian Restaurants",
    websiteUrl: "#",
    imageUrl: "",
    isBestChoice: false
  },
  {
    id:' home1',
    title: "Dyson Vacuum Cleaner",
    description: "Powerful cordless vacuum with advanced filtration.",
    category: "Home Appliances",
    rating: 4.8,
    reviews: 5000,
    price: "$499",
    website: "Dyson",
    websiteUrl: "https://www.dyson.com/",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'grocery1',
    title: "Organic Apples",
    description: "Fresh and organic apples from local farms.",
    category: "Groceries",
    rating: 4.7,
    reviews: 3100,
    price: "$5 per kg",
    website: "Local Grocers",
    websiteUrl: "#",
    imageUrl: "",
    isBestChoice: true
  },
  {
    id: 'snack1',
    title: "Lay's Classic Chips",
    description: "Crispy and lightly salted potato chips.",
    category: "Snacks",
    rating: 4.6,
    reviews: 8000,
    price: "$2",
    website: "Lay's",
    websiteUrl: "https://www.lays.com/",
    imageUrl: "",
    isBestChoice: false
  }
  

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
