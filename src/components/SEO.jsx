import { useEffect } from 'react';

const SEO = ({ title, description, keywords = 'website' }) => {
  useEffect(() => {
    // Update document title
    if (title) {
      document.title = title;
    }

    // Function to update or create meta tag
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

    // Update meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    

    // Cleanup function to remove dynamic meta tags when component unmounts
    return () => {
      // Note: We don't remove meta tags on cleanup as they should persist
      // until the next page sets new ones
    };
  }, [title, description, keywords]);

  return null; // This component doesn't render anything
};

export default SEO;
