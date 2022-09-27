/** @type {import('next').NextConfig} */
import { PHASE_DEVELOPMENT_SERVER } from 'next/dist/shared/lib/constants';
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
        mongodb_username: 
        mongodb_password: 
        mongodb_cluster: 
        mongodb_database:
      }
    }
  }

  return {
    ...nextConfig,
  };
};
