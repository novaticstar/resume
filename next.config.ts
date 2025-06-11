import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/resume' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/resume/' : '',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;