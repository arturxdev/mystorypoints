/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname:
          "avatar-management--avatars.us-west-2.prod.public.atl-paas.net",
      },
    ],
  },
};

module.exports = nextConfig;
