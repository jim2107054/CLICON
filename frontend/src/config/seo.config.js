// SEO Configuration for CLICON E-commerce Website

export const SITE_CONFIG = {
  siteName: "CLICON - Leading Computer, Laptop & Gadget Shop",
  siteUrl: "https://clicon.com", // Update with your actual domain
  defaultTitle: "CLICON - Leading Computer, Laptop & Gadget Shop in Bangladesh",
  defaultDescription: "This is where we come in. CLICON Ltd. started as a Tech Product Shop in March 2007. We focus on giving the best customer service in Bangladesh, following our motto: Customers Come First.",
  defaultKeywords: "computer shop, laptop price, gadgets, electronics, smartphone, headphone, gaming, tech store, Bangladesh, CLICON",
  author: "MD Jahid Hasan Jim (KUET-CSE)",
  twitterHandle: "@clicon",
  defaultImage: "/og-image.jpg", // Add your default OG image in public folder
  logo: "/logo.png",
  phone: "+880 1709-996587",
  email: "info@clicon.com",
  address: {
    street: "4517 Washington Ave.",
    city: "Manchester, Kentucky 39495",
    country: "Bangladesh"
  },
  businessHours: {
    opens: "10:00",
    closes: "22:00",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
  },
  social: {
    facebook: "https://facebook.com/clicon",
    twitter: "https://twitter.com/clicon",
    instagram: "https://instagram.com/clicon",
    youtube: "https://youtube.com/clicon"
  },
  googleAnalyticsId: "G-XXXXXXXXXX", // Add your GA4 ID
  googleSiteVerification: "your-verification-code", // Add your Google Search Console verification
};

// Page-specific SEO configurations
export const PAGE_SEO = {
  home: {
    title: "CLICON - Leading Computer, Laptop & Gadget Shop in Bangladesh",
    description: "Best deals on computers, laptops, smartphones, gaming accessories, and electronics. Top brands: Apple, Samsung, Dell, HP. Free shipping on orders over $299. Shop now!",
    keywords: "computer store, laptop deals, smartphone shop, gaming accessories, electronics store, tech shop Bangladesh",
    path: "/",
  },
  shop: {
    title: "Shop All Products - Computers, Laptops & Electronics | CLICON",
    description: "Browse our complete collection of computers, laptops, smartphones, gaming gear, and tech accessories. Filter by brand, price, and category. Best prices guaranteed.",
    keywords: "shop computers, buy laptops, electronics online, tech products, computer accessories",
    path: "/shop",
  },
  about: {
    title: "About Us - CLICON Tech Store | Our Story & Mission",
    description: "Learn about CLICON's journey since 2007. We're committed to providing the best tech products and customer service in Bangladesh. Customers Come First - that's our motto.",
    keywords: "about clicon, tech store history, customer service, company mission",
    path: "/about-us",
  },
  contact: {
    title: "Contact Us - Customer Support | CLICON",
    description: "Get in touch with CLICON. Call +880 1709-996587 or visit us at Khan Plaza, Khulna. Expert customer support for all your tech needs.",
    keywords: "contact clicon, customer support, tech support, store location",
    path: "/customer-support",
  },
  cart: {
    title: "Shopping Cart - Review Your Items | CLICON",
    description: "Review and manage items in your shopping cart. Secure checkout, multiple payment options, and fast delivery available.",
    keywords: "shopping cart, checkout, buy products",
    path: "/shoping-card",
  },
  wishlist: {
    title: "My Wishlist - Save Your Favorite Products | CLICON",
    description: "Save and manage your favorite tech products. Get notified about price drops and special offers on wishlist items.",
    keywords: "wishlist, saved items, favorite products",
    path: "/wish-list",
  },
  trackOrder: {
    title: "Track Your Order - Order Status & Delivery | CLICON",
    description: "Track your order status and delivery in real-time. Enter your order ID to see current location and estimated delivery time.",
    keywords: "track order, delivery status, order tracking",
    path: "/track-order",
  },
  blogs: {
    title: "Tech Blog - Latest News, Reviews & Guides | CLICON",
    description: "Read the latest tech news, product reviews, buying guides, and tutorials. Stay updated with trends in computers, smartphones, and gadgets.",
    keywords: "tech blog, product reviews, buying guides, tech news",
    path: "/blogs",
  },
  faqs: {
    title: "FAQs - Frequently Asked Questions | CLICON",
    description: "Find answers to common questions about orders, shipping, returns, payments, and products. Quick help for CLICON customers.",
    keywords: "faq, help, customer questions, support",
    path: "/faqs",
  },
};

// Category SEO data
export const CATEGORY_SEO = {
  computer: {
    title: "Computers & Laptops - Best Deals on PCs | CLICON",
    description: "Shop desktop computers and laptops from top brands like Apple, Dell, HP, Asus. Gaming PCs, business laptops, and workstations at best prices.",
    keywords: "computers, laptops, desktop pc, gaming pc, business laptop",
  },
  smartphone: {
    title: "Smartphones - Latest Models & Best Prices | CLICON",
    description: "Buy latest smartphones from Apple, Samsung, Xiaomi, OnePlus. iPhone, Galaxy, and Android phones with warranty and fast delivery.",
    keywords: "smartphones, mobile phones, iphone, samsung galaxy, android",
  },
  headphone: {
    title: "Headphones & Audio - Premium Sound Quality | CLICON",
    description: "Shop wireless headphones, earbuds, gaming headsets. Top brands: Sony, Apple AirPods, Samsung. Noise cancelling and studio quality audio.",
    keywords: "headphones, earbuds, wireless headphones, gaming headset, airpods",
  },
  accessories: {
    title: "Computer Accessories - Keyboards, Mouse & More | CLICON",
    description: "Browse computer and mobile accessories. Keyboards, mice, chargers, cables, cases, and gaming accessories at competitive prices.",
    keywords: "computer accessories, keyboard, mouse, chargers, cables",
  },
  tv: {
    title: "TV & Home Appliances - Smart TVs & Electronics | CLICON",
    description: "Shop smart TVs, home appliances, and entertainment systems. LED, OLED, 4K TVs from Samsung, LG, Sony. Best prices guaranteed.",
    keywords: "smart tv, television, home appliances, 4k tv, oled tv",
  },
  gaming: {
    title: "Gaming Console & Accessories | CLICON",
    description: "Gaming consoles, accessories, and gear. PlayStation, Xbox, Nintendo Switch. Controllers, headsets, and gaming chairs.",
    keywords: "gaming console, playstation, xbox, nintendo switch, gaming accessories",
  },
};

// Generate structured data for Organization
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${SITE_CONFIG.siteUrl}/#organization`,
  name: SITE_CONFIG.siteName,
  url: SITE_CONFIG.siteUrl,
  logo: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logo}`,
  image: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.defaultImage}`,
  description: SITE_CONFIG.defaultDescription,
  telephone: SITE_CONFIG.phone,
  email: SITE_CONFIG.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE_CONFIG.address.street,
    addressLocality: SITE_CONFIG.address.city,
    addressCountry: SITE_CONFIG.address.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: SITE_CONFIG.businessHours.dayOfWeek,
    opens: SITE_CONFIG.businessHours.opens,
    closes: SITE_CONFIG.businessHours.closes,
  },
  sameAs: [
    SITE_CONFIG.social.facebook,
    SITE_CONFIG.social.twitter,
    SITE_CONFIG.social.instagram,
    SITE_CONFIG.social.youtube,
  ],
  priceRange: "$$",
});

// Generate structured data for Website
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_CONFIG.siteUrl}/#website`,
  url: SITE_CONFIG.siteUrl,
  name: SITE_CONFIG.siteName,
  description: SITE_CONFIG.defaultDescription,
  publisher: {
    "@id": `${SITE_CONFIG.siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_CONFIG.siteUrl}/shop?search={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

// Generate structured data for BreadcrumbList
export const getBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

// Generate structured data for Product
export const getProductSchema = (product) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.title,
  image: product.image,
  description: product.description || `Buy ${product.title} at best price`,
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  offers: {
    "@type": "Offer",
    url: `${SITE_CONFIG.siteUrl}/shop/${product.id}`,
    priceCurrency: "USD",
    price: product.price,
    priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    seller: {
      "@type": "Organization",
      name: SITE_CONFIG.siteName,
    },
  },
  aggregateRating: product.rating ? {
    "@type": "AggregateRating",
    ratingValue: product.rating,
    reviewCount: product.reviews || 50,
    bestRating: "5",
    worstRating: "1",
  } : undefined,
});

// Generate structured data for Blog Article
export const getArticleSchema = (article) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  image: article.image,
  author: {
    "@type": "Person",
    name: article.author || SITE_CONFIG.author,
  },
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.siteName,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_CONFIG.siteUrl}${SITE_CONFIG.logo}`,
    },
  },
  datePublished: article.publishDate,
  dateModified: article.modifiedDate || article.publishDate,
  description: article.description,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `${SITE_CONFIG.siteUrl}/blogs/${article.id}`,
  },
});

// Generate structured data for FAQ Page
export const getFAQSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
