import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true, // Turn on React Strict Mode
  // Other strict configurations
  eslint: {
    // Do not ignore ESLint errors during builds
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Do not ignore TypeScript errors during builds
    ignoreBuildErrors: false,
  },
  images: {
    domains: [
      'picsum.photos', 
      'www.annefrank.org', 
      'e547kfpxfrd.exactdn.com',
      'www.nationalww2museum.org',
      'upload.wikimedia.org'
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    // Cho phép local images từ thư mục public
    unoptimized: false,
  },
};

export default nextConfig;
