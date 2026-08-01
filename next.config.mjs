/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    qualities: [55, 75],
    minimumCacheTTL: 31536000,
  },
}

export default nextConfig
