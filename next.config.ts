import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev"],
  // output: 'export',
};

export default nextConfig;
