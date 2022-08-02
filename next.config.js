const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: '/nms-wiki-boilerplate',
  assetPrefix: '/nms-wiki-boilerplate'
}

module.exports = nextConfig
