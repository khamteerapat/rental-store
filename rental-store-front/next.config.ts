import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '9000',
        pathname: '/rental-store/book-cover/**',
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
