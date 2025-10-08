import { useEffect } from 'react';

const SEO = ({
  title,
  description,
  keywords = 'website',
  sitemapUrl = 'https://devnagri.com/sitemap.xml',
  canonicalUrl = window.location.href, // Canonical URL, defaults to current URL
  googleSiteVerification, // pass your GSC code like: "abc123..."
  ogImage ,
  ogUrl = window.location.href,      // Current URL by default
  twitterCard = 'summary_large_image',
  twitterSite = '@devnagriai',         // Replace with your Twitter handle
  // twitterCreator = '@creator'        // Replace with creator handle if needed
}) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Function to update or create meta/link tag
    const updateMetaTag = (name, content, attribute = 'name') => {
      if (!content) return;
      
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    const updateLinkTag = (rel, href) => {
      if (!href) return;

      let element = document.querySelector(`link[rel="${rel}"]`);
      
      if (element) {
        element.setAttribute('href', href);
      } else {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        element.setAttribute('href', href);
        document.head.appendChild(element);
      }
    };

    const imageUrl = ogImage.startsWith('https') ? ogImage : `https://devnagri.com${ogImage}`;

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Add sitemap
    updateLinkTag('sitemap', sitemapUrl);
    updateLinkTag('canonical', canonicalUrl);

    // Add Google Search Console verification
    if (googleSiteVerification) {
      updateMetaTag('google-site-verification', googleSiteVerification);
    }

    // Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', imageUrl, 'property');
    updateMetaTag('og:url', ogUrl, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Devnagri AI', 'property');

    // Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', imageUrl);
    updateMetaTag('twitter:site', twitterSite);
    // updateMetaTag('twitter:creator', twitterCreator);

  }, [title, description, keywords, sitemapUrl, canonicalUrl, googleSiteVerification, ogImage, ogUrl, twitterCard, twitterSite,
    // twitterCreator
  ]);

  return null; // This component doesn't render anything
};

export default SEO;
