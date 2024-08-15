/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
};
