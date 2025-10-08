import ReactDOM from 'react-dom';

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
  const imageUrl = ogImage && ogImage.startsWith('https') ? ogImage : ogImage ? `https://devnagri.com${ogImage}` : '';

  return ReactDOM.createPortal(
    <>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {sitemapUrl && <link rel="sitemap" href={sitemapUrl} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Devnagri AI" />
      {twitterCard && <meta name="twitter:card" content={twitterCard} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
    </>,
    document.head
  );
};

export default SEO;
