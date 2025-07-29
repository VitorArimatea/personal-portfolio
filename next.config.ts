import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
