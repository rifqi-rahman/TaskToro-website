import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Optimize for Cloudflare Pages
  assetPrefix: undefined,
  basePath: ''
};

export default nextConfig;
