import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Unsplash
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      // Pixabay
      {
        protocol: "https",
        hostname: "cdn.pixabay.com", // CDN host for image URLs
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pixabay.com", // fallback (some images or API links)
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
