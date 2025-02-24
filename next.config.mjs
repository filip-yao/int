/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.european-alternatives.eu',
          port: '',
          pathname: '/productLogo/**',
        },
      ],
    },
  };
  
  export default nextConfig;
  