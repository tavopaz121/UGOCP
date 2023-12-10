/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { formats: ['image/webp'], domains: ['res.cloudinary.com'] },
}

module.exports = nextConfig
