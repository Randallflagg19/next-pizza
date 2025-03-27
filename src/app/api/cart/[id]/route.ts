import {NextRequest, NextResponse} from 'next/server'
import {prisma} from '../../../../../prisma/prisma-client'
import {updateCartTotalAmount} from '../../../../../shared/lib/update-cart-total-amount'

export async function PATCH(req: NextRequest) {
	try {
		// Получаем ID из URL
		const pathname = req.nextUrl.pathname;
		const id = pathname.split('/').pop();
		if (!id) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

		const data = await req.json() as { quantity: number };
		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' }, { status: 400 });
		}

		const cartItem = await prisma.cartItem.findUnique({
			where: { id: Number(id) },
		});

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart item not found' }, { status: 404 });
		}

		await prisma.cartItem.update({
			where: { id: Number(id) },
			data: { quantity: data.quantity },
		});

		const updatedCart = await updateCartTotalAmount(token);

		return NextResponse.json(updatedCart);
	} catch (error) {
		console.error('[CART_PATCH] Server error:', error);
		return NextResponse.json({ message: 'Не удалось обновить корзину' }, { status: 500 });
	}
}

export async function DELETE(req: NextRequest) {
	try {
		// Получаем ID из URL
		const pathname = req.nextUrl.pathname;
		const id = pathname.split('/').pop(); // Берём последний сегмент URL
		if (!id) return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });

		const token = req.cookies.get('cartToken')?.value;

		if (!token) {
			return NextResponse.json({ error: 'Cart token not found' }, { status: 400 });
		}

		const cartItem = await prisma.cartItem.findUnique({
			where: { id: Number(id) },
		});

		if (!cartItem) {
			return NextResponse.json({ error: 'Cart item не найден' }, { status: 404 });
		}

		await prisma.cartItem.delete({
			where: { id: Number(id) },
		});

		const updatedCart = await updateCartTotalAmount(token);

		return NextResponse.json(updatedCart);
	} catch (error) {
		console.error('[CART_DELETE] Server error:', error);
		return NextResponse.json({ message: 'Не удалось удалить корзину' }, { status: 500 });
	}
}


// export async function DELETE(req: NextRequest) {
// 	try {
// 		console.time('DELETE_REQUEST'); // Засекаем общее время
//
// 		const pathname = req.nextUrl.pathname;
// 		const id = pathname.split('/').pop();
// 		if (!id || isNaN(Number(id))) {
// 			return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
// 		}
//
// 		const token = req.cookies.get('cartToken')?.value;
// 		if (!token) {
// 			return NextResponse.json({ error: 'Cart token not found' }, { status: 400 });
// 		}
//
// 		console.time('FIND_CART_ITEM'); // Засекаем поиск товара
// 		const cartItem = await prisma.cartItem.findUnique({
// 			where: { id: Number(id) },
// 		});
// 		console.timeEnd('FIND_CART_ITEM'); // Выводим время поиска
//
// 		if (!cartItem) {
// 			return NextResponse.json({ error: 'Cart item не найден' }, { status: 404 });
// 		}
//
// 		console.time('DELETE_CART_ITEM'); // Засекаем удаление
// 		await prisma.cartItem.delete({
// 			where: { id: Number(id) },
// 		});
// 		console.timeEnd('DELETE_CART_ITEM'); // Выводим время удаления
//
// 		console.time('UPDATE_CART_TOTAL'); // Засекаем обновление корзины
// 		const updatedCart = await updateCartTotalAmount(token);
// 		console.timeEnd('UPDATE_CART_TOTAL'); // Выводим время обновления
//
// 		console.timeEnd('DELETE_REQUEST'); // Выводим общее время
//
// 		if (!updatedCart) {
// 			return NextResponse.json({ message: 'Корзина теперь пуста', totalAmount: 0, items: [] }, { status: 200 });
// 		}
//
// 		return NextResponse.json(updatedCart);
// 	} catch (error) {
// 		console.error('[CART_DELETE] Server error:', error);
// 		return NextResponse.json({ message: 'Не удалось удалить товар из корзины' }, { status: 500 });
// 	}
// }
