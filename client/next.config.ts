import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  distDir: '.next',
  cleanDistDir: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'yylkfhsabbeolxqclpji.supabase.co',
      }
    ],
  },
};

export default nextConfig;
