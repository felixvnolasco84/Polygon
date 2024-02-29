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
        source: "/apetito.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección permanente (301)
      },
      {
        source: "/tuborg.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "/apetito.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "/actinver.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "/copa.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "/copa.html",
        destination: "https://www.polygonag.com/",
        permanent: false, // Esto es una redirección temporal (302)
      },
      {
        source: "/contacto.html",
        destination: "https://www.polygonag.com/",
        permanent: true, // Esto es una redirección temporal (302)
      },
      {
        source: "/nosotros.html",
        destination: "https://www.polygonag.com/",
        permanent: true, // Esto es una redirección temporal (302)
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/index.html",
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
