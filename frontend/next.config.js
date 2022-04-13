/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://montywcc.herokuapp.com/api/:path*',
      }
    ]
  },
  images: {
    loader: 'akamai',
    path: '',
  },
}

module.exports = nextConfig
