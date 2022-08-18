/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  distDir: 'build',

  experimental: {
    images: {
      unoptimized: true,
      allowFutureImage: true,
    },
    modularizeImports: {
      "@mui/joy": {
        transform: "@mui/joy/{{member}}",
      },
      "@mui/material": {
        transform: "@mui/material/{{member}}",
      },
      "@mui/icons-material": {
        transform: "@mui/icons-material/{{member}}",
      },
    },
  },
};

export default nextConfig;

