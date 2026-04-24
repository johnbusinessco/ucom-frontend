import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'http', hostname: 'ucom.com.au' },
      { protocol: 'https', hostname: 'ucom.com.au' },
    ],
  },
};

export default nextConfig;
