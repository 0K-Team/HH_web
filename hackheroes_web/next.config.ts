import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ecoheroapi.q1000q.me/:path*'
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devServer = {
        ...config.devServer,
        proxy: {
          '/api': {
            target: 'http://localhost:3421',
            changeOrigin: true,
            pathRewrite: { '^/api': '/api' }
          }
        }
      };
    }
    return config;
  }
};

export default nextConfig;
