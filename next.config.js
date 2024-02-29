/** @type {import('next').NextConfig} */
const { withNextVideo } = require("next-video/process");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com", "firebasestorage.googleapis.com"],
  },
  async redirects() {
    return [
      {
        source: "https://polygonag.com/apetito.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección permanente (301)
      },
      {
        source: "https://www.polygonag.com/tuborg.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "http://www.polygonag.com/apetito.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "https://www.polygonag.com/actinver.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "http://www.polygonag.com/copa.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "http://polygonag.com/copa.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "https://polygonag.com/contacto.html",
        destination: "https://www.polygonag.com/",
        permanent: true, // Esto es una redirección temporal (302)
      },
      {
        source: "https://polygonag.com/nosotros.html",
        destination: "https://www.polygonag.com/",
        permanent: true, // Esto es una redirección temporal (302)
      },
    ];
  },
  async headers() {
    return [
      {
        source: "https://www.polygonag.com/index.html",
        headers: [
          {
            key: "Content-Type",
            value: "text/plain",
          },
          {
            key: "Content-Length",
            value: "0",
          },
          {
            key: "Status",
            value: "410 Gone",
          },
        ],
      },
    ];
  },
};

module.exports = withNextVideo(nextConfig);
