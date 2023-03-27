/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/usr-exists',
                destination: '/signup?error=This user already exists!',
                permanent: true,
            },

            {
                source: '/reg-success',
                destination: '/login?success=Registered successfully!',
                permanent: true,
            },

            {
                source: '/err-login',
                destination: '/login?error=Incorrect username or password!',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;
