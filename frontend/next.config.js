/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:4001/api/:path*',
      }
    ]
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
