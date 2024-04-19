/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        APIURL: process.env.APIURL
    },
    images: {
        domains: [
            "upload.wikimedia.org"
        ]
    }
};

export default nextConfig;
