import type { NextConfig } from 'next'
import withPWA from 'next-pwa'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
}

export default withPWA({
  ...nextConfig,
  dest: 'public',
  register: true,
  skipWaiting: true,
})
