import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Fotos placeholder do Unsplash (licença livre).
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
