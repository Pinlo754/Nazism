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
};

export default nextConfig;
