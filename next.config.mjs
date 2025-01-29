const nextConfig = {
  reactStrictMode: false,
  async redirects() {
    return [
      {
        source: '/acerca',
        destination: '/', // Reemplaza con la URL de destino
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
