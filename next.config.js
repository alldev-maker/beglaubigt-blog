/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "",
    domains: ["images.prismic.io"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "/",
      },
    ];
  },
};

module.exports = nextConfig;
