/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['ol'], // OpenLayers often needs transpilation
};

export default nextConfig;
