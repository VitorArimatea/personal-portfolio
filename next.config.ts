import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS?.split(",") || [],
  // output: 'export',
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
