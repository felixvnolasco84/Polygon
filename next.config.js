/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com"],
  },
  
};

module.exports = withNextVideo(nextConfig);
