/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  distDir: 'build',
  experimental: {
    modularizeImports: {
      "@mui/joy": {
        transform: "@mui/joy/{{member}}",
      },
      "@mui/icons-material": {
        transform: "@mui/icons-material/{{member}}",
      },
    },
  },
};

export default nextConfig;

