import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/api/v1/**"
      }
    ]
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.0.10:8812/:path*'
      },
      {
        source: '/cdn/:path*',
        destination: 'http://192.168.0.10:8812/v1/cdn/:path*'
      },
    ]
  }
};

export default nextConfig;