import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  output: 'export',
  // GitHub Pages 배포 시에만 basePath 적용
  basePath: isGitHubPages ? '/kimmjen-portpolio' : '',
  assetPrefix: isGitHubPages ? '/kimmjen-portpolio' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
