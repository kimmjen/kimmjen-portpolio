import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/kimmjen-portpolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
