import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static HTML export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export since we can't use Next.js server-side image optimization
  },
};

export default nextConfig;
