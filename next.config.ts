import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const baseConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default withPWA({
  ...baseConfig,
    dest: 'public', // required
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
})
