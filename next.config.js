/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "s3-us-west-2.amazonaws.com",
      "download-archivos.s3.amazonaws.com",
      "aula.desarrolloglobal.pe",
    ],
  },
};

module.exports = nextConfig;
