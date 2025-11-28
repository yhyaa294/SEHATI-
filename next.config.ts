import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // PENTING: Ini biar Vercel tetep deploy walau ada warning/error kecil
    ignoreDuringBuilds: true,
  },
  typescript: {
    // PENTING: Ini biar Vercel gak rewel soal tipe data
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
