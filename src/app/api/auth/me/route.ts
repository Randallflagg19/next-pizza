import {NextResponse} from 'next/server'
import {User} from 'lucide-react'
import {getUserSession} from '../../../../../shared/lib/get-user-session'
import {prisma} from '../../../../../prisma/prisma-client'
import {mockSession} from 'next-auth/client/__tests__/helpers/mocks'
import user = mockSession.user

export async function GET(){
	try {
		const user = await getUserSession()

		if (!user) {
			return NextResponse.json({message: 'Вы не авторизованы'}, {status: 401})
		}

		const data = await prisma.user.findUnique({
			where: {
				id: Number(user.id)
			},
			select: {
				fullName: true,
				email: true,
				password: false,
			}
		})
		return NextResponse.json(data)
	}
	catch (error) {
		return NextResponse.json({message: '[USER GET] Server error'}, {status: 500});
	}
}