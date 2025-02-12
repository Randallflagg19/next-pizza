import {prisma} from './prisma-client'
import {hashSync} from 'bcrypt'
import {categories, ingredients, products} from './constants'
import { Prisma } from '@prisma/client';

const randomNumber  = (min: number,max:number) => {
  return Math.floor(Math.random() * (max - min) *10 + min*10)/10
}

type ProductVariantType = {
	productId: number;
	doughType?: 1|2;
	size?: 20|30|40;
}

const generateProductVariant = ({
	productId,
	doughType,
	size
}: ProductVariantType) => {
	return {
		productId,
		price: randomNumber(190, 600),
		doughType,
		size
	} as Prisma.ProductVariantUncheckedCreateInput;
};


// npx prisma db seed

async function up() {

	await prisma.user.createMany({
		data: [
			{
				fullName: "user user",
				email: "john@example.com",
				password: hashSync('111111', 10),
				verified: new Date(),
				role: "USER",
			},
			{
				fullName: "admin admin",
				email: "Vik@example.com",
				password: hashSync('1121111', 10),
				verified: new Date(),
				role: "ADMIN",
			}
		]
	})
	await prisma.category.createMany({
		data: categories
	})
	await prisma.ingredient.createMany({
		data: ingredients
	})
	await prisma.product.createMany({
		data: products
	})

	const pizza1 = await prisma.product.create({
		data:
			{
				name: 'Пепперони фреш',
				imageUrl:
					'/pizzas/1.png',
				categoryId: 1,
				ingredients: {
					connect: ingredients.slice(0, 5)
				}
			}
	})

	const pizza2 = await prisma.product.create({
		data:
			{
				name: 'Сырная',
				imageUrl:
					'/pizzas/2.png',
				categoryId: 1,
				ingredients: {
					connect: ingredients.slice(5, 10)
				}
			}
	})
	const pizza3 = await prisma.product.create({
		data:
			{
				name: 'Чоризо фреш',
				imageUrl:
					'/pizzas/3.png',
				categoryId: 1,
				ingredients: {
					connect: ingredients.slice(10, 15)
				}
			}
	})

	await prisma.productVariant.createMany({
		data: [
			generateProductVariant({productId: pizza1.id, doughType: 1, size: 20}),
		]
	})

	await prisma.productVariant.createMany({
		data: [
			// пепперони фреш
			generateProductVariant({productId: pizza1.id, doughType: 1, size: 20}),
			generateProductVariant({productId: pizza1.id, doughType: 2, size: 30}),
			generateProductVariant({productId: pizza1.id, doughType: 2, size: 40}),

			// Сырная
			generateProductVariant({productId: pizza2.id, doughType: 1, size: 20}),
			generateProductVariant({productId: pizza2.id, doughType: 1, size: 30}),
			generateProductVariant({productId: pizza2.id, doughType: 1, size: 40}),
			generateProductVariant({productId: pizza2.id, doughType: 2, size: 20}),
			generateProductVariant({productId: pizza2.id, doughType: 2, size: 30}),
			generateProductVariant({productId: pizza2.id, doughType: 2, size: 40}),

			// Чоризо фреш
			generateProductVariant({productId: pizza3.id, doughType: 1, size: 20}),
			generateProductVariant({productId: pizza3.id, doughType: 2, size: 30}),
			generateProductVariant({productId: pizza3.id, doughType: 2, size: 40}),

			// 	Остальные продукты
			generateProductVariant({ productId: 1 }),
			generateProductVariant({ productId: 2 }),
			generateProductVariant({ productId: 3 }),
			generateProductVariant({ productId: 4 }),
			generateProductVariant({ productId: 5 }),
			generateProductVariant({ productId: 6 }),
			generateProductVariant({ productId: 7 }),
			generateProductVariant({ productId: 8 }),
			generateProductVariant({ productId: 9 }),
			generateProductVariant({ productId: 10 }),
			generateProductVariant({ productId: 11 }),
			generateProductVariant({ productId: 12 }),
			generateProductVariant({ productId: 13 }),
			generateProductVariant({ productId: 14 }),
			generateProductVariant({ productId: 15 }),
			generateProductVariant({ productId: 16 }),
			generateProductVariant({ productId: 17 }),
			generateProductVariant({ productId: 18 }),
			generateProductVariant({ productId: 19 }),
			generateProductVariant({ productId: 20 }),
		]
	})

	await prisma.cart.createMany({
		data: [
			{
				userId:1,
				totalAmount: 0,
				token: '111111'
			},
			{
				userId:2,
				totalAmount: 0,
				token: '222222'
			},
		]
	})

	await prisma.cartItem.create({
		data:	{
				productVariantId:1,
				cartId: 1,
				quantity: 2,
				ingredients: {
					connect: [{id:1}, {id:2},{id:3}]
				}
			}
	})
}


async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
	await prisma.$executeRaw`TRUNCATE TABLE "ProductVariant" RESTART IDENTITY CASCADE`;
}

async function main() {
try {
	await down();
	await up();
} catch (e){
	console.error(e);
}
}



main().then(async () => {
	await prisma.$disconnect()
}) .catch(async (err) => {
	console.error(err)
	await prisma.$disconnect()
	process.exit(1)
})
