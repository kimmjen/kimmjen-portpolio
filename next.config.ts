import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages 배포 시 아래 주석을 해제하세요
  basePath: '/kimmjen-portpolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
