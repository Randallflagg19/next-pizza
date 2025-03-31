'use client'

import {zodResolver} from '@hookform/resolvers/zod'
import {
	CheckoutAddress,
	CheckoutCart,
	CheckoutForm,
	CheckoutSidebar,
	Container,
	Title
} from '../../../../shared/components'
import {useCart} from '../../../../shared/hooks'
import {FormProvider, useForm} from 'react-hook-form'
import {
	checkoutFormSchema,
	CheckoutFormValues
} from '../../../../shared/components/shared/checkout/schemas/checkout-form-schema'
import {createOrder} from '@/app/actions'
import {toast} from 'react-hot-toast'
import {useEffect, useState} from 'react'
import {useSession} from 'next-auth/react'
import {ApiClient} from '../../../../shared/services/api-client'

export default function CheckoutPage() {
	const [submitting, setSubmitting] = useState(false)
	const {totalAmount, updateItemQuantity, items, removeCartItem, loading} = useCart()
	const {data: session} = useSession()


	const form = useForm<CheckoutFormValues> ({
		resolver: zodResolver(checkoutFormSchema),
		defaultValues: {
			email: '',
			firstName: session?.user.name || '',
			lastName: '',
			phone: '',
			address: '',
			comment: '',
		}
})

	useEffect(() => {

		async function fetchUserInfo(){
			const data = await ApiClient.auth.getMe()
			const [firstName, lastName] = data.fullName.split(' ')

			form.setValue('firstName', firstName)
			form.setValue('lastName', lastName)
			form.setValue('email', data.email)
		}

		if (session){
			fetchUserInfo()
		}
	}, [session])

	const onClickCountButton = (id:number, quantity:number, type: 'plus' | 'minus') =>{
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}

	const onSubmit = async (data:CheckoutFormValues) =>{
		try {

			setSubmitting(true)
			const url = await createOrder (data)

			toast('Заказ успешно оформлен! Переход на оплату...', {
				icon: '✅'
			})
			if (url) {
				location.href=url
			}
		} catch (error) {
			console.log(error)
			setSubmitting(false)
			toast.error('Не удалось создать заказ', {
				icon: '❌'
			})
		}
	}

	return (
				<Container className='mt-10'>
					<Title text='Оформление заказа' className='font-extrabold text-[36px]'/>
					<FormProvider {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<div className='flex gap-10'>
								<div className='flex flex-col gap-10 flex-1 mb-20'>
									<CheckoutCart items={items}
									              loading={loading}
									              onClickCountButton={onClickCountButton}
									              removeCartItem={removeCartItem}/>
									<CheckoutForm className={loading ? 'opacity-40 pointer-events-none' : ''}/>
									<CheckoutAddress className={loading ? 'opacity-40 pointer-events-none' : ''}/>
								</div>
								<div className='w-[450px]'>
									<CheckoutSidebar
										totalAmount={totalAmount}
										loading={loading || submitting}/>
								</div>
							</div>
						</form>
					</FormProvider>
				</Container>
	);
}