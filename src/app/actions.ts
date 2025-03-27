'use server'

import {
	CheckoutFormValues
} from '../../shared/components/shared/checkout/schemas/checkout-form-schema'
import {cookies} from 'next/headers'
import {prisma} from '../../prisma/prisma-client'
import {$Enums} from '.prisma/client'
import {createPayment, sendEmail} from '../../shared/lib'
import {PayOrderTemplate} from '../../shared/components'
import OrderStatus = $Enums.OrderStatus

export async function createOrder(data: CheckoutFormValues) {
	try {
		const cookieStore = await cookies()
		const cartToken = cookieStore.get('cartToken')?.value

		if (!cartToken) {
			throw new Error('Cart token not found')
		}

		const userCart = await prisma.cart.findFirst({
			include: {
				user: true,
				items: {
					include: {
						ingredients: true,
						productVariant: {
							include: {
								product: true,
							}
						}
					}
				}
			},
			where: {
				token: cartToken,
			}
		})

		if (!userCart) {
			throw new Error('Cart not found')
		}

		if (userCart?.totalAmount === 0) {
			throw new Error('Cart is empty')
		}

		const order =	await prisma.order.create({
			data: {
				token:cartToken,
				fullName: data.firstName + ' ' + data.lastName,
				email: data.email,
				phone: data.phone,
				address: data.address,
				comment: data.comment,
				totalAmount: userCart.totalAmount,
				status: OrderStatus.PENDING,
				items: userCart.items,
			}
		})

		await prisma.cart.update({
			where: {
				id: userCart.id,
			},
			data: {
				totalAmount: 0
			}
		})

		await prisma.cartItem.deleteMany({
			where: {
				cartId: userCart.id,
			}
		})

		const paymentData = await createPayment({
			amount:order.totalAmount,
			orderId: order.id,
			description: 'Оплата заказа №' + order.id
		})

		if (!paymentData) {
			throw new Error('Payment not found')
		}

		await prisma.order.update({
			where: {
				id: order.id,
			},
			data: {
				paymentId: paymentData.id
			}
		})

		const paymentUrl = paymentData.confirmation.confirmation_url

		await sendEmail(
			data.email,
			'Next Pizza / Оплатите заказ № ' + order.id,
			await PayOrderTemplate({
				orderId: order.id,
				totalAmount: order.totalAmount,
				paymentUrl
			})
		)

		return paymentUrl
	}catch (error) {
		console.log('[Create Order] Server error',error)
	}
}
