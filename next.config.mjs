/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "randomuser.me" },
      { protocol: "https", hostname: "s.wordpress.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600,
  },
  compress: true,
  async redirects() {
    return [
      // www → non-www (canonical domain)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nooviraai.com" }],
        destination: "https://nooviraai.com/:path*",
        permanent: true,
      },
      // Redirect old /nos-realisations → canonical /realisations (301 permanent)
      {
        source: "/nos-realisations",
        destination: "/realisations",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        // Long cache for videos — they never change once deployed
        source: "/videos/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Long cache for static images
        source: "/:path*.(webp|png|jpg|jpeg|svg|ico)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default nextConfig;
