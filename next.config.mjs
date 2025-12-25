/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
  // Allow running alongside Vite during migration
  typescript: {
    // We'll fix type errors incrementally during migration
    ignoreBuildErrors: false,
  },
  eslint: {
    // We'll fix ESLint errors incrementally
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
