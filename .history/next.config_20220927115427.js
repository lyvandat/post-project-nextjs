/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
// file nay da duoc custom
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "lyvandat",
        mongodb_password: "0909927212aA",
        mongodb_cluster: "cluster0",
        mongodb_database: "posts-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "lyvandat",
      mongodb_password: "0909927212aA",
      mongodb_cluster: "cluster0",
      mongodb_database: "posts",
    },
  };
};
