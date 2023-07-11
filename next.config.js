/** @type {import('next').NextConfig} */

const withRoutes = require("nextjs-routes/config")();

const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');



const nextConfig = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
  swcMinify: true,
  experimental: {
    swcPlugins: [
      [
        'next-superjson-plugin',
        {
          excluded: [],
        },
      ],
    ],
  },
}

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

]);

module.exports = withRoutes(nextConfig);
