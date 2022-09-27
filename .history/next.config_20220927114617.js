/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from "next/dist/shared/lib/constants";
// file nay da duoc custom
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
      env: {
        mongodb_username: "lyvandat",
        mongodb_password: "0909927212aA",
        mongodb_cluster: "cluster0",
        mongodb_database: "posts",
      },
    };
  }

  return {
    ...nextConfig,
  };
};
