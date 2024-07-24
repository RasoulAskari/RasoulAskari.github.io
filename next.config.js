/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "export",
  distDir: "pages",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
