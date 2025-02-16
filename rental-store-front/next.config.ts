import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, 
  },
  images:{
    remotePatterns:[
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/rental-store/book-cover/**',
      }
    ]
  },
}

export default nextConfig;
