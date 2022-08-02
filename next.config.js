const isProd = process.env.NODE_ENV === 'production'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  assetPrefix: isProd ? '/your-github-repo-name/' : ''
}

module.exports = nextConfig
