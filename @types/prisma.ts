import {Product, ProductVariant,Ingredient} from '@prisma/client'

export type ProductWithRelations = Product & {items: ProductVariant[]; ingredients: Ingredient[]};