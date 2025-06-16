// const isProd = process.env.NODE_ENV === 'production';
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  env: {
    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-8YL3N5E1Q0',
    NEXT_PUBLIC_VERSION: 'Beacon'
  }
};

module.exports = nextConfig;
