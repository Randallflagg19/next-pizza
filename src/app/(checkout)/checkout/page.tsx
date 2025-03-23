'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {CheckoutSidebar, Container, Title} from '../../../../shared/components/shared'
import {useCart} from '../../../../shared/hooks'
import {FormProvider, SubmitHandler, useForm} from 'react-hook-form'
import {
	CheckoutAddress,
	CheckoutCart,
	CheckoutForm
} from '../../../../shared/components/shared/checkout'
import {
	checkoutFormSchema,
	CheckoutFormValues
} from '../../../../shared/components/shared/checkout/schemas/checkout-form-schema'

export default function CheckoutPage() {
	const {totalAmount, updateItemQuantity, items, removeCartItem} = useCart()

	const form = useForm<CheckoutFormValues> ({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		}
})

	const onClickCountButton = (id:number, quantity:number, type: 'plus' | 'minus') =>{
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	const onSubmit = (data:CheckoutFormValues) =>{
		console.log(data)
	}

	return (
				<Container className='mt-10'>
					<Title text='Оформление заказа' className='font-extrabold text-[36px]'/>
					<FormProvider {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className='flex gap-10'>
								<div className='flex flex-col gap-10 flex-1 mb-20'>
									<CheckoutCart items={items}
									              onClickCountButton={onClickCountButton}
									              removeCartItem={removeCartItem}/>
									<CheckoutForm/>
									<CheckoutAddress/>
								</div>
								<div className='w-[450px]'>
									<CheckoutSidebar totalAmount={totalAmount}/>
								</div>
							</div>
						</form>
					</FormProvider>
				</Container>
	);
}