import NextAuth from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'

const handler = NextAuth({
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID!,
			clientSecret: process.env.GITHUB_CLIENT_SECRET!
		})
	],
	secret: process.env.NEXTAUTH_SECRET,
	cookies: {
		sessionToken: {
			name: `__Secure-next-auth.session-token`,
			options: {
				httpOnly: true,
				sameSite: 'none', // Разрешает куки для кросс-доменных редиректов
				secure: process.env.NODE_ENV === 'production' // Только по HTTPS в проде
			}
		}
	}
})

export {handler as GET, handler as POST}
