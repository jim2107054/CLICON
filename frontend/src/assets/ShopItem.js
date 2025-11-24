import shopImg1 from './ShopItem/image1.png';
import shopImg2 from './ShopItem/image2.png';
import shopImg3 from './ShopItem/image3.png';
import shopImg4 from './ShopItem/Image4.png';
import shopImg5 from './ShopItem/Image5.png';
import shopImg6 from './ShopItem/Image6.png';
import shopImg7 from './ShopItem/Image7.png';
import shopImg8 from './ShopItem/Image8.png';
import shopImg9 from './ShopItem/Image9.png';
import shopImg10 from './ShopItem/Image10.png';
import shopImg11 from './ShopItem/Image11.png';
import shopImg12 from './ShopItem/Image12.png';
import shopImg13 from './ShopItem/Image13.png';
import shopImg14 from './ShopItem/Image14.png';
import shopImg15 from './ShopItem/Image15.png';
import shopImg16 from './ShopItem/Image16.png';
import shopImg17 from './ShopItem/Image17.png';
import shopImg18 from './ShopItem/Image18.png';
import shopImg19 from './ShopItem/Image19.png';
import shopImg20 from './ShopItem/Image20.png';
import shopImg21 from './ShopItem/Image21.png';
import shopImg22 from './ShopItem/Image22.png';
import shopImg23 from './ShopItem/Image23.png';
import shopImg24 from './ShopItem/Image24.png';

const shopItems = [
  {
    id: 1,
    image: shopImg1,
    rating: 5,
    sell: 738,
    title: 'TOZO T6 Wireless Earbuds Bluetooth Headphones',
    price: 29.99,
    offer: 'HOT',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Sony',
    sku: 'TOZO-T6-BLK',
    description: 'Premium wireless earbuds with advanced Bluetooth 5.3 technology, delivering crystal-clear sound quality and deep bass. IPX8 waterproof rating makes them perfect for workouts and outdoor activities. Touch controls allow easy management of music and calls.',
    specifications: {
      'Bluetooth Version': '5.3',
      'Driver Size': '6mm',
      'Battery Life': 'Up to 10 hours',
      'Charging Time': '1.5 hours',
      'Waterproof Rating': 'IPX8',
      'Weight': '4.5g per earbud',
      'Connectivity': 'Wireless',
      'Noise Cancellation': 'Active ANC'
    },
    additionalInfo: {
      'Warranty': '1 Year Manufacturer Warranty',
      'Return Policy': '30-day return policy',
      'Package Includes': 'Earbuds, Charging Case, USB-C Cable, 3 Ear Tips Sizes, User Manual',
      'Color Options': 'Black, White, Blue',
      'In The Box': '1x Pair of Earbuds, 1x Charging Case, 1x USB-C Cable, 3x Ear Tips'
    },
    features: [
      'Advanced Bluetooth 5.3 Technology',
      'IPX8 Waterproof Rating',
      'Touch Control',
      'Voice Assistant Compatible',
      '10-Hour Battery Life',
      'Fast Charging Support'
    ],
    colors: ['Black', 'White', 'Blue'],
    dimensions: '2.5 x 2.1 x 1.2 inches',
    weight: '45g (with case)',
    material: 'ABS Plastic, Silicone Ear Tips'
  },
  {
    id: 2,
    image: shopImg2,
    rating: 5,
    sell: 536,
    title: 'Samsung Electronics Samsung Galaxy S21 5G',
    price: 2300,
    offer: '10% OFF',
    status: 'In Stock',
    category: 'smartphone',
    brand: 'Samsung',
    sku: 'SAM-S21-5G-256',
    description: 'Experience the power of 5G with the Samsung Galaxy S21. Featuring a stunning 6.2-inch Dynamic AMOLED display, professional-grade camera system with 64MP telephoto lens, and all-day battery life.',
    specifications: {
      'Display': '6.2" Dynamic AMOLED 2X',
      'Resolution': '2400 x 1080 pixels',
      'Processor': 'Snapdragon 888',
      'RAM': '8GB',
      'Storage': '256GB',
      'Battery': '4000mAh',
      'Rear Camera': '64MP + 12MP + 12MP',
      'Front Camera': '10MP'
    },
    additionalInfo: {
      'Warranty': '1 Year Manufacturer Warranty',
      'Return Policy': '15-day return policy',
      'Package Includes': 'Phone, USB-C Cable, SIM Ejector Tool, Quick Start Guide',
      'Network': '5G, 4G LTE'
    },
    features: [
      '5G Connectivity',
      '120Hz Refresh Rate',
      '8K Video Recording',
      'Wireless PowerShare',
      'In-Display Fingerprint',
      'Water Resistant IP68'
    ],
    colors: ['Phantom Gray', 'Phantom White', 'Phantom Violet'],
    dimensions: '5.97 x 2.80 x 0.31 inches',
    weight: '169g',
    material: 'Gorilla Glass Victus, Aluminum Frame'
  },
  {
    id: 3,
    image: shopImg3,
    rating: 5,
    sell: 423,
    title: 'Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/60Hz)',
    price: 15.99,
    offer: 'BEST DEALS',
    status: 'Out of Stock',
    category: 'accessories',
    brand: 'Dell',
    sku: 'AMZ-HDMI-4K-10FT'
  },
  {
    id: 4,
    image: shopImg4,
    rating: 4.5,
    sell: 789,
    title: 'Portable Washing Machine, 11lbs capacity Model 18NMF',
    price: 80,
    offer: 'HOT',
    status: 'In Stock',
    category: 'tv',
    brand: 'LG',
    sku: 'PORT-WASH-11LBS'
  },
  {
    id: 5,
    image: shopImg5,
    rating: 4.5,
    sell: 1234,
    title: 'Wired Over-Ear Gaming Headphones with USB',
    price: 279.99,
    offer: '',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'Sony',
    sku: 'GAME-HEAD-USB-RGB'
  },
  {
    id: 6,
    image: shopImg6,
    rating: 4.5,
    sell: 5678,
    title: 'Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Case',
    price: 129.99,
    offer: '25% OFF',
    status: 'In Stock',
    category: 'camera',
    brand: 'Sony',
    sku: 'POL-TRIPOD-57'
  },
  {
    id: 7,
    image: shopImg7,
    rating: 4.5,
    sell: 91011,
    title: 'Beats Studio Buds - True Wireless Noise Cancelling Earbuds',
    price: 149.99,
    offer: 'HOT',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'Apple',
    sku: 'BEATS-STUDIO-BUDS'
  },
  {
    id: 8,
    image: shopImg8,
    rating: 4.5,
    sell: 121314,
    title: '4K UHD LED Smart TV with Chromecast Built-in - 55 Inch',
    price: 299.99,
    offer: 'SALE',
    status: 'In Stock',
    category: 'tv',
    brand: 'Samsung',
    sku: 'SMART-TV-55-4K'
  },
  {
    id: 9,
    image: shopImg9,
    rating: 4.5,
    sell: 151617,
    title: 'Bose QuietComfort Earbuds - Wireless Noise Cancelling',
    price: 279.99,
    offer: 'BEST DEALS',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Sony',
    sku: 'BOSE-QC-EARBUDS'
  },
  {
    id: 10,
    image: shopImg10,
    rating: 4.5,
    sell: 2021,
    title: 'Jabra Elite 85t - Advanced Active Noise Cancelling Earbuds',
    price: 229.99,
    offer: '',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'Panasonic',
    sku: 'JABRA-85T-ANC'
  },
  {
    id: 11,
    image: shopImg11,
    rating: 4.5,
    sell: 12345,
    title: 'Apple AirPods (3rd Generation) with Lightning Charging Case',
    price: 159.99,
    offer: 'HOT',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Apple',
    sku: 'AIRPODS-3RD-GEN'
  },
  {
    id: 12,
    image: shopImg12,
    rating: 4.5,
    sell: 67890,
    title: 'Sony WH-1000XM4 - Premium Noise Cancelling Headphones',
    price: 349.99,
    offer: '',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Sony',
    sku: 'SONY-WH1000XM4'
  },
  {
    id: 13,
    image: shopImg13,
    rating: 4.5,
    sell: 111213,
    title: 'Samsung Galaxy Buds Pro - True Wireless Earbuds',
    price: 199.99,
    offer: '',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'Samsung',
    sku: 'GALAXY-BUDS-PRO'
  },
  {
    id: 14,
    image: shopImg14,
    rating: 4.5,
    sell: 141516,
    title: 'Anker Soundcore Liberty Air 2 Pro - True Wireless Earbuds',
    price: 129.99,
    offer: 'SALE',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Intel',
    sku: 'ANKER-LIBERTY-AIR2PRO'
  },
  {
    id: 15,
    image: shopImg15,
    rating: 4.5,
    sell: 171819,
    title: 'JBL Tune 125TWS - True Wireless In-Ear Headphones',
    price: 99.99,
    offer: '',
    status: 'In Stock',
    category: 'headphone',
    brand: 'LG',
    sku: 'JBL-TUNE-125TWS'
  },
  {
    id: 16,
    image: shopImg16,
    rating: 4.5,
    sell: 202122,
    title: 'Sennheiser Momentum True Wireless 2 - Premium Earbuds',
    price: 249.99,
    offer: '25% OFF',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'Sony',
    sku: 'SENN-MOMENTUM-TW2'
  },
  {
    id: 17,
    image: shopImg17,
    rating: 4.5,
    sell: 232425,
    title: 'Beats Flex Wireless Earbuds - All-Day Wireless Earphones',
    price: 69.99,
    offer: 'HOT',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Apple',
    sku: 'BEATS-FLEX-WIRELESS'
  },
  {
    id: 18,
    image: shopImg18,
    rating: 4.5,
    sell: 262728,
    title: 'OnePlus Buds Z2 - True Wireless Earbuds with ANC',
    price: 99.99,
    offer: '',
    status: 'In Stock',
    category: 'headphone',
    brand: 'One Plus',
    sku: 'ONEPLUS-BUDS-Z2'
  },
  {
    id: 19,
    image: shopImg19,
    rating: 4.5,
    sell: 293031,
    title: 'Google Pixel Buds A-Series - True Wireless Earbuds',
    price: 99.99,
    offer: 'BEST DEALS',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'Google',
    sku: 'GOOGLE-PIXEL-BUDS-A'
  },
  {
    id: 20,
    image: shopImg20,
    rating: 4.5,
    sell: 323334,
    title: 'Razer Hammerhead True Wireless Pro - Gaming Earbuds',
    price: 199.99,
    offer: '',
    status: 'In Stock',
    category: 'gaming',
    brand: 'Microsoft',
    sku: 'RAZER-HAMMERHEAD-PRO'
  },
  {
    id: 21,
    image: shopImg21,
    rating: 4.5,
    sell: 353637,
    title: 'TaoTronics SoundLiberty 92 - Wireless Earbuds',
    price: 49.99,
    offer: 'SALE',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Xiaomi',
    sku: 'TAOTRONICS-SL92'
  },
  {
    id: 22,
    image: shopImg22,
    rating: 4.5,
    sell: 383940,
    title: 'Soundcore Life P2 - True Wireless Earbuds',
    price: 59.99,
    offer: '',
    status: 'Out of Stock',
    category: 'headphone',
    brand: 'HP',
    sku: 'SOUNDCORE-LIFE-P2'
  },
  {
    id: 23,
    image: shopImg23,
    rating: 4.5,
    sell: 414243,
    title: 'Mpow X3 - Active Noise Cancelling Wireless Earbuds',
    price: 69.99,
    offer: '25% OFF',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Dell',
    sku: 'MPOW-X3-ANC'
  },
  {
    id: 24,
    image: shopImg24,
    rating: 4.5,
    sell: 444546,
    title: 'Tribit FlyBuds C1 - True Wireless Earbuds',
    price: 49.99,
    offer: 'HOT',
    status: 'In Stock',
    category: 'headphone',
    brand: 'Symphony',
    sku: 'TRIBIT-FLYBUDS-C1'
  }
];

export default shopItems;
