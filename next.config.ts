import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
      },
      {
        hostname: "s4.anilist.co",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
    qualities: [100],
  },
};

export default nextConfig;
