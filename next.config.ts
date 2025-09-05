import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(",") || [],
  // output: 'export',
};

export default nextConfig;
