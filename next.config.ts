import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/resume',
  assetPrefix: '/resume',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;