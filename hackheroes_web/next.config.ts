import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ecohero.q1000q.me',
        port: '',
        pathname: '/**',
      },
    ],
    minimumCacheTTL: 60
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*'
      },
    ]
  }
};

export default nextConfig;