'use client'

import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '../ui/sheet'
import Link from 'next/link'
import {Button} from '../ui'
import {ArrowLeft, ArrowRight} from 'lucide-react'
import {CartDrawerItem} from './cart-drawer-item'
import {getCartItemDetails} from '../../lib'
import {PizzaSize, PizzaType} from '../../constants/pizza'
import Image from 'next/image'
import {Title} from './title'
import {VisuallyHidden} from '@radix-ui/react-visually-hidden'
import {cn} from '../../lib/utils'
import {useCart} from '../../hooks'
import React, {useState} from 'react'

export const CartDrawer:React.FC<React.PropsWithChildren> = ({children}) => {
	const {totalAmount, updateItemQuantity, items, removeCartItem} = useCart()

	const [redirecting, setRedirecting] = useState(false)

	const onClickCountButton = (id:number, quantity:number, type: 'plus' | 'minus') =>{
		const newQuantity = type === 'plus' ? quantity + 1 : quantity - 1
		updateItemQuantity(id, newQuantity)
	}
	return (
					<Sheet>
						<SheetTrigger asChild>{children}</SheetTrigger>
						<VisuallyHidden>
							<SheetTitle>Ваша корзина</SheetTitle>
						</VisuallyHidden>
						<SheetContent aria-describedby={undefined} className='flex flex-col justify-between pb-0 bg-[#f4f1ee]'>
							<div className={cn('flex flex-col h-full', !totalAmount && 'justify-center' )}>
								{totalAmount > 0 &&
	                  <SheetHeader>
	                      <SheetTitle>
	                          В корзине <span className='font-bold'>{items.length} товар</span>
	                      </SheetTitle>
	                  </SheetHeader>
								}
								{!totalAmount &&
									<div className='flex flex-col items-center justify-center w-72 mx-auto'>
	                    <Image src="/emptyCart.png" alt="Empty cart" width={120} height={120}/>
											<Title size='sm' text='Корзина пустая' className='text-center font-bold my-2'/>
											<p className='text-center text-neutral-500 mb-5'>
													Добавьте хотя бы один товар, чтобы совершить заказ
											</p>
											<SheetClose asChild>
													<Button>
															<ArrowLeft className='w-5 mr-2'/>
															Вернуться назад
													</Button>
											</SheetClose>
									</div>
								}
								{totalAmount > 0 &&
								<>
									<div className="-mx-6 mt-5 overflow-auto flex-1">
										{items.map(item =>
											<div key={item.id} className="mb-2">
												<CartDrawerItem
													disabled={item.disabled}
													id={item.id}
													imageUrl={item.imageUrl}
													name={item.name}
													price={item.price}
													quantity={item.quantity}
													onClickCountButton={type => onClickCountButton(item.id, item.quantity, type)}
													onClickRemove={() => removeCartItem(item.id)}
													details={
														getCartItemDetails(
															item.ingredients,
															item.pizzaType as PizzaType,
															item.pizzaSize as PizzaSize)}/>
											</div>
										)}
									</div>
									<SheetFooter className="-mx-6 bg-white p-8">
										<div className="w-full">
											<div className="flex mb-4">
											<span className="flex flex-1 text-lg text-neutral-500">
												Итого
												<div
													className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
											</span>
												<span className='font-bold text-lg'>{totalAmount} ₽</span>
											</div>
											<Link href="/checkout">
												<Button
														loading={redirecting}
														onClick={() => setRedirecting(true)}
														type='submit'
														className='w-full h-12 text-base'>
														Оформить заказ
														<ArrowRight className='w-5 ml-2'/>
												</Button>
											</Link>
										</div>
									</SheetFooter>
								</>
								}
							</div>
						</SheetContent>
					</Sheet>
	);
};
