import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.0.10:8812/:path*'
      },
    ]
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.devServer = {
        ...config.devServer,
        proxy: {
          '/api': {
            target: 'http://192.168.0.10:8812/',
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
