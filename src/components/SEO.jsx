import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  keywords = 'website',
  sitemapUrl = '/sitemap.xml',
  googleSiteVerification // pass your GSC code like: "abc123..."
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

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Add sitemap
    updateLinkTag('sitemap', sitemapUrl);

    // Add Google Search Console verification
    if (googleSiteVerification) {
      updateMetaTag('google-site-verification', googleSiteVerification);
    }

  }, [title, description, keywords, sitemapUrl, googleSiteVerification]);

  return null; // This component doesn't render anything
};

export default SEO;
