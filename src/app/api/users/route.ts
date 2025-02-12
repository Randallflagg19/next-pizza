import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '../../../../prisma/prisma-client'

export async function GET() {
	console.log(Object.keys(prisma))
	const users = await prisma.user.findMany();
	return NextResponse.json(users);
}


export async function POST(req: NextRequest){
	const data = await req.json()

	const user = await prisma.user.create({
		data
	})
	return NextResponse.json(user)
}