import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Only use basePath and assetPrefix for production builds
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/resume',
    assetPrefix: '/resume',
  }),
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;