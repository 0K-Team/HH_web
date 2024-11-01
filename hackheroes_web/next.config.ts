import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.0.10:8812/:path*'
      },
      {
        source: '/api-docs*',
        destination: 'http://192.168.0.10:8812/api-docs*'
      }
    ]
  }
};

export default nextConfig;