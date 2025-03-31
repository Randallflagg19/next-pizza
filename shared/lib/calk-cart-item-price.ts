import {CartItemDTO} from '../services/dto/cart.dto'
import {Ingredient} from '@prisma/client'

export const calkCartItemPrice = (item:CartItemDTO): number => {
	const ingredientsPrice = item.ingredients.reduce((acc: number,ingredient: Ingredient) => acc + ingredient.price,0)

	return (ingredientsPrice + item.productVariant.price) * item.quantity
}