/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  static: {
    public: 'public',
  },
}

module.exports = nextConfig