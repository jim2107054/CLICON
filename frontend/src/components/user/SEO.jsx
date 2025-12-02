import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../config/seo.config';

/**
 * SEO Component for managing meta tags, Open Graph, Twitter Cards, and structured data
 * @param {Object} props - SEO configuration props
 */
const SEO = ({
  title,
  description,
  keywords,
  author = SITE_CONFIG.author,
  image = SITE_CONFIG.defaultImage,
  url,
  type = 'website',
  article = null,
  product = null,
  structuredData = null,
  noindex = false,
  nofollow = false,
  canonical = null,
}) => {
  // Construct full title
  const fullTitle = title 
    ? `${title} | CLICON`
    : SITE_CONFIG.defaultTitle;

  // Construct full URL
  const fullUrl = url 
    ? `${SITE_CONFIG.siteUrl}${url}`
    : SITE_CONFIG.siteUrl;

  // Construct full image URL
  const fullImage = image.startsWith('http') 
    ? image 
    : `${SITE_CONFIG.siteUrl}${image}`;

  // Robots meta tag
  const robotsContent = [];
  if (noindex) robotsContent.push('noindex');
  if (nofollow) robotsContent.push('nofollow');
  const robots = robotsContent.length > 0 ? robotsContent.join(', ') : 'index, follow';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description || SITE_CONFIG.defaultDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical || fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || SITE_CONFIG.defaultDescription} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={title || SITE_CONFIG.siteName} />
      <meta property="og:site_name" content={SITE_CONFIG.siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Article specific OG tags */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:modified_time" content={article.modifiedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags && article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Product specific OG tags */}
      {product && (
        <>
          <meta property="product:price:amount" content={product.price} />
          <meta property="product:price:currency" content="USD" />
          {product.availability && (
            <meta property="product:availability" content={product.availability} />
          )}
          {product.brand && (
            <meta property="product:brand" content={product.brand} />
          )}
          {product.condition && (
            <meta property="product:condition" content={product.condition} />
          )}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:creator" content={SITE_CONFIG.twitterHandle} />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || SITE_CONFIG.defaultDescription} />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:image:alt" content={title || SITE_CONFIG.siteName} />

      {/* Additional Meta Tags for E-commerce */}
      <meta name="theme-color" content="#FA8232" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Business Meta Tags */}
      <meta name="geo.region" content="BD" />
      <meta name="geo.placename" content="Bangladesh" />
      
      {/* Google Site Verification */}
      {SITE_CONFIG.googleSiteVerification && (
        <meta name="google-site-verification" content={SITE_CONFIG.googleSiteVerification} />
      )}

      {/* Structured Data (JSON-LD) */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}

      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    </Helmet>
  );
};

export default SEO;
