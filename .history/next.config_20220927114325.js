/** @type {import('next').NextConfig} */
// file nay da duoc custom
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = (phase) => {
  return {
    ...nextConfig,
  };
};
