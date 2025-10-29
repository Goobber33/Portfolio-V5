import flowbite from 'flowbite-react/plugin/nextjs';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    plugins: [flowbite()],
  },
};

export default nextConfig;
