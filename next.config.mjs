/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // GitHub Pages deploys to a subdirectory matching your repo name
  // If your repo is named differently than "trak-website", update this value
  basePath: process.env.NODE_ENV === 'production' ? '/trak-website' : '',
  trailingSlash: true,
};

export default nextConfig;
