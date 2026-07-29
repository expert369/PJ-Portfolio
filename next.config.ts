import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1536],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "react-icons", "motion"],
  },
};

export default nextConfig;
