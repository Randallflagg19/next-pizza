import {NextRequest, NextResponse} from 'next/server'
import {PaymentCallbackData} from '../../../../../@types/yookassa'
import {prisma} from '../../../../../prisma/prisma-client'
import {$Enums} from '@prisma/client'
import {CartItemDTO} from '../../../../../shared/services/dto/cart.dto'
import OrderStatus = $Enums.OrderStatus
import {sendEmail} from '../../../../../shared/lib'
import {OrderSuccessTemplate} from '../../../../../shared/components'

export async function POST(req: NextRequest) {

	try {
		const body = (await req.json()) as PaymentCallbackData
		console.log(body)
		const order = await prisma.order.findFirst({
			where: {
				id: Number(body.object.metadata.order_id)
			},
		})

		if (!order) {
			console.log('Order not found')
			return NextResponse.json({error: 'Order not found'})
		}
		console.log(body)
		const isSucceeded = body.object.status === 'succeeded'

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				status: isSucceeded ? OrderStatus.SUCEEDED : OrderStatus.CANCELLED
			}
		})

		const items: CartItemDTO[] = typeof order.items === 'string'
			? JSON.parse(order.items)
			: (order.items as unknown as CartItemDTO[]);

		if (isSucceeded) {
			await sendEmail(
				order.email,
				"Next Pizza / Ваш заказ оформлен 🎆",
				await OrderSuccessTemplate({orderId: order.id, items})
			)
		}

			return NextResponse.json({ success: true });
		}

	catch (error)
	{
		console.log('[Checkout callback] Error: ', error);

		return NextResponse.json({error: 'Server error'});
	}
}