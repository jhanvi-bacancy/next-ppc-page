/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["assets.bacancytechnology.com"], // 👈 allow external images
  },
};

export default nextConfig;
