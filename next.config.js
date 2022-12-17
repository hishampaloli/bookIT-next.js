/** @type {import('next').NextConfig} */

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    DB_LOCAL_URI: "mongodb://localhost:27017/bookit",
  },
  images: {
    domains: ['a0.muscache.com']
  }
};
