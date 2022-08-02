const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: ''
  },
  basePath: isProd ? '/nms-wiki-boilerplate' : '',
  assetPrefix: isProd ? '/nms-wiki-boilerplate' : ''
}

module.exports = nextConfig
