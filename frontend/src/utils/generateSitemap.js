/**
 * Sitemap Generator Utility
 * This generates sitemap data that can be used to create sitemap.xml
 * 
 * To generate sitemap.xml:
 * 1. Copy this data
 * 2. Save as sitemap.xml in the public folder
 * 3. Update the domain URL before deployment
 */

import { SITE_CONFIG, PAGE_SEO, CATEGORY_SEO } from '../config/seo.config.js';
import shopItems from '../assets/ShopItem.js';

export const generateSitemapData = () => {
  const baseUrl = SITE_CONFIG.siteUrl;
  const currentDate = new Date().toISOString().split('T')[0];

  const urls = [];

  // Homepage
  urls.push({
    loc: `${baseUrl}/`,
    lastmod: currentDate,
    changefreq: 'daily',
    priority: '1.0'
  });

  // Main pages
  Object.values(PAGE_SEO).forEach(page => {
    urls.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.8'
    });
  });

  // Category pages
  Object.keys(CATEGORY_SEO).forEach(category => {
    urls.push({
      loc: `${baseUrl}/shop?category=${category}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.7'
    });
  });

  // Product pages
  shopItems.forEach(product => {
    urls.push({
      loc: `${baseUrl}/shop/${product.id}`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.6'
    });
  });

  return urls;
};

export const generateSitemapXML = () => {
  const urls = generateSitemapData();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

  urls.forEach(url => {
    sitemap += `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>
`;
  });

  sitemap += `</urlset>`;
  
  return sitemap;
};

// Console log the sitemap for manual copying
if (typeof window !== 'undefined') {
  console.log('📄 CLICON Sitemap Generator');
  console.log('Run generateSitemapXML() to get the sitemap XML');
}

