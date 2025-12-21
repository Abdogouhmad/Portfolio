/** @type {import('next').NextConfig} */
// const nextConfig = {
//   productionBrowserSourceMaps: false,
// };

// module.exports = nextConfig;
const nextConfig = {
  productionBrowserSourceMaps: false,
  // reactStrictMode: true,
  images: {
    qualities: [100, 25, 50, 75, 95],
  },
};
export default nextConfig;
