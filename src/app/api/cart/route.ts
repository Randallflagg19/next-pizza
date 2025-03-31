import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '../../../../prisma/prisma-client'
import {findOrCreateCart} from '../../../../shared/lib'
import {CreateCartItemValue} from '../../../../shared/services/dto/cart.dto'
import {updateCartTotalAmount} from '../../../../shared/lib/update-cart-total-amount'

export async function GET(req:NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({totalAmount: 0, items:[]});
		}

		const userCart = await prisma.cart.findFirst({
			where: {
						token
			},
			include: {
				items: {
					orderBy:{
						createdAt: 'desc'
					},
					include: {
						productVariant: {
							include: {
								product:true
							}
						},
						ingredients: true
					}
				}
			}
		})

		return NextResponse.json(userCart);
	}
	catch (error) {
		console.log('[CART_GET] Server error',error);
		return NextResponse.json({message: 'не удалось получить корзину'}, {status: 500});
	}
}

export async function POST(req: NextRequest) {
	try {
		const token = req.cookies.get('cartToken')?.value || crypto.randomUUID();

		const userCart = await findOrCreateCart(token);
		const data = (await req.json()) as CreateCartItemValue;

		// Получаем ВСЕ товары с таким productVariantId
		const cartItems = await prisma.cartItem.findMany({
			where: {
				cartId: userCart.id,
				productVariantId: data.productVariantId,
			},
			include: { ingredients: true },
		});

		// Преобразуем ингредиенты в Set для быстрого сравнения
		const newIngredientsSet = new Set(data.ingredients);

		// Ищем точное совпадение ингредиентов
		const theSameCartItem = cartItems.find(
			(item) =>
				item.ingredients.length === newIngredientsSet.size &&
				item.ingredients.every((ing) => newIngredientsSet.has(ing.id))
		);

		if (theSameCartItem) {
			// Если нашли товар с таким же набором ингредиентов, увеличиваем количество
			await prisma.cartItem.update({
				where: { id: theSameCartItem.id },
				data: { quantity: theSameCartItem.quantity + 1 },
			});
		} else {
			// Если товар с таким составом не найден – создаем новый
			await prisma.cartItem.create({
				data: {
					cartId: userCart.id,
					productVariantId: data.productVariantId,
					quantity: 1,
					ingredients: {
						connect: data.ingredients?.map((id) => ({ id })) ?? [],
					},
				},
			});
		}

		const updateUserCart = await updateCartTotalAmount(token);
		const response = NextResponse.json(updateUserCart);
		response.cookies.set('cartToken', token);

		return response;
	} catch (error) {
		console.log('[CART_POST] Server error', error);
		return NextResponse.json({ message: 'Не удалось создать корзину' }, { status: 500 });
	}
}



