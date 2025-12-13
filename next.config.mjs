/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['ol'], // OpenLayers often needs transpilation
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '', // Default: ''
                pathname: '/**',
                search: '',
            },
        ],
    },
};

export default nextConfig;
