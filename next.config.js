/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['fakestoreapi.com'], // Ensure this domain is listed
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'fakestoreapi.com',
        },
      ],
    },
    experimental: {
      fetchCache: { revalidate: 60 }, // Increase revalidation time (optional)
    },
  };
  
  module.exports = nextConfig;
  