import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
	output: 'standalone', // Улучшает работу API-роутов
	reactStrictMode: true
}

export default nextConfig
