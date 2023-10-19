/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      process.env.NEXT_PUBLIC_SUPABASE_IMAGE_ACCESS_URL
    ]
  }
};

module.exports = nextConfig;
