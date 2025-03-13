import {Ingredient} from '.prisma/client'

export interface CartItemProps {
	id:number
	imageUrl:string
	name: string
	price: number
	quantity: number
	details:string
}