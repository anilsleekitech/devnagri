/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: false, // ✅ Force all routes to not end with a "/"
  images: {
    domains: ['devnagri.com'],
  },
  experimental: {
    esmExternals: false,
  },
  async redirects() {
    return [
      // Custom redirects
      {
        source: '/machine-translation-api',
        destination: '/translation-api',
        permanent: true,
      },
      {
        source: '/multilingual-conversational-ai-bot',
        destination: '/voice-bot',
        permanent: true,
      },
      {
        source: '/pricing',
        destination: 'https://devnagri.com/pricing',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
