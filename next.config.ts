import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
	output: 'standalone', // Улучшает работу API-роутов
	reactStrictMode: true
	// reactStrictMode: false
}

export default nextConfig
