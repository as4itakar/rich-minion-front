/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SERVER_URL: process.env.SERVER_URL
  },
  images: {
    remotePatterns: [
        {
            protocol: 'http',
            hostname: 'localhost',
            port: '3000',
            pathname: '/images/*'
        },
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '5000',
          pathname: '/*'
      }
    ],
  },
}

module.exports = nextConfig
