import {Cart, CartItem, Product, ProductVariant, Ingredient} from '.prisma/client'

export type CartItemDTO = CartItem &  {
	productVariant: ProductVariant & {
		product: Product
	}
	ingredients: Ingredient[]
}

export interface CartDTO extends Cart{
	items: CartItemDTO[]
}

export interface CreateCartItemValue {
	productVariantId: number;
	ingredients?:number[];
}