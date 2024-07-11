/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APIURL: process.env.APIURL,
    },
    images: {
        domains: ["upload.wikimedia.org", "images.hdqwalls.com"],
    },
};

export default nextConfig;
