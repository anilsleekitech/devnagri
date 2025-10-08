import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  keywords = 'website',
  sitemapUrl = 'https://devnagri.com/sitemap.xml',
  canonicalUrl,
  googleSiteVerification,
  ogImage,
  ogUrl,
  twitterCard = 'summary_large_image',
  twitterSite = '@devnagriai',
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Function to safely update or create meta/link tag
    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;
      
      try {
        let element = document.querySelector(`meta[${attribute}="${name}"]`);
        
        if (element) {
          element.setAttribute('content', content);
        } else {
          element = document.createElement('meta');
          element.setAttribute(attribute, name);
          element.setAttribute('content', content);
          document.head.appendChild(element);
        }
      } catch (error) {
        console.warn(`Failed to update meta tag ${name}:`, error);
      }
    };

    const updateLinkTag = (rel, href) => {
      if (!href) return;

      try {
        let element = document.querySelector(`link[rel="${rel}"]`);
        
        if (element) {
          element.setAttribute('href', href);
        } else {
          element = document.createElement('link');
          element.setAttribute('rel', rel);
          element.setAttribute('href', href);
          document.head.appendChild(element);
        }
      } catch (error) {
        console.warn(`Failed to update link tag ${rel}:`, error);
      }
    };

    // Use current URL as fallback
    const currentUrl = window.location.href;
    const finalCanonicalUrl = canonicalUrl || currentUrl;
    const finalOgUrl = ogUrl || currentUrl;
    
    // Handle ogImage safely
    let imageUrl = 'https://devnagri.com/assets/images/campaigns/Case-Study-EdTech.png';
    if (ogImage) {
      imageUrl = ogImage.startsWith('https') ? ogImage : `https://devnagri.com${ogImage}`;
    }

    // Update meta tags
    if (description) updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);

    // Update links
    updateLinkTag('sitemap', sitemapUrl);
    updateLinkTag('canonical', finalCanonicalUrl);

    // Google Search Console verification
    if (googleSiteVerification) {
      updateMetaTag('google-site-verification', googleSiteVerification);
    }

    // Open Graph tags
    if (title) updateMetaTag('og:title', title, 'property');
    if (description) updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', imageUrl, 'property');
    updateMetaTag('og:url', finalOgUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Devnagri AI', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    if (title) updateMetaTag('twitter:title', title);
    if (description) updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);
    updateMetaTag('twitter:site', twitterSite);

  }, [
    title, 
    description, 
    keywords, 
    sitemapUrl, 
    canonicalUrl, 
    googleSiteVerification, 
    ogImage, 
    ogUrl, 
    twitterCard, 
    twitterSite
  ]);

  return null;
};

export default SEO;