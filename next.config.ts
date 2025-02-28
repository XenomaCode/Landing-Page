import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Asegúrate de que los archivos estáticos se copien correctamente
  images: {
    domains: [],
  },
  // Configuración para archivos estáticos
  webpack: (config) => {
    return config;
  },
};

export default nextConfig;
