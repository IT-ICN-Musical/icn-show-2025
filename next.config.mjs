/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "icn-2025.s3.ap-southeast-2.amazonaws.com",
        pathname: "/**/*",
      },
      {
        protocol: "http",
        hostname: "icn-2025.s3.ap-southeast-2.amazonaws.com",
        pathname: "/**/*",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;
