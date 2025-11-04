import ResourcesDetail from '@/components/ResourcesDetail';
import EnglishToLangTranslation from '@/components/EnglishToLangTranslation';
import fullDataset from '../data/howWeHelpData.json';

export default function Page({ isTranslation, toLang, item, relatedPosts }) {
  if (isTranslation) {
    return <EnglishToLangTranslation toLang={toLang} />;
  }
  return <ResourcesDetail item={item} relatedPosts={relatedPosts} />;
}

export async function getServerSideProps(context) {
  const { params, resolvedUrl } = context;

  const pathWithoutQuery = resolvedUrl.split('?')[0];
  const queryString = resolvedUrl.includes('?') ? '?' + resolvedUrl.split('?')[1] : '';

  // Build link from slug
  const { slug } = params;
  const link = Array.isArray(slug)
    ? slug.filter(Boolean).join('/')
    : typeof slug === 'string'
    ? slug
    : '';

  // Supported languages for translation
  const supportedLanguages = [
    'hindi','marathi','tamil','telugu','kannada','malayalam','punjabi',
    'gujarati','bengali','odia','assamese','urdu'
  ];

  // Check translation routes (without trailing slash)
  const langs = supportedLanguages.join('|');
  const re = new RegExp(`^english-to-(${langs})-(translation|transliteration)$`, 'i');
  const match = link.match(re);

  if (match) {
    const [, toLang] = match;
    return {
      props: { isTranslation: true, toLang },
    };
  }

  // Find dataset item
  const cleanLink = link.replace(/^\/+|\/+$/g, '');
  const item = fullDataset?.howWeHelpCards?.find((item) => {
    if (!item) return false;

    if (item.link) {
      const itemLink = item.link.replace(/^\/+|\/+$/g, '');
      if (itemLink === cleanLink) return true;
    }

    const titleAsLink = (item.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (titleAsLink === cleanLink) return true;

    return false;
  });

  if (!item) return { notFound: true };

  const relatedPosts = fullDataset.howWeHelpCards
    .filter((post) => post.type === item.type && post.id !== item.id)
    .slice(0, 3);

  return { props: { item, relatedPosts } };
}
