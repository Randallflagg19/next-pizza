'use client'

import {useEffect} from 'react'
import {CartStateItem, useCartStore} from '../store'
import {CreateCartItemValue} from '../services/dto/cart.dto'

type ReturnProps = {
		totalAmount: number
		items: CartStateItem[]
		loading: boolean
		updateItemQuantity: (id:number, quantity:number) => void
		removeCartItem: (id:number) => void
		addCartItem: (values:CreateCartItemValue) => void
}

export const useCart = (): ReturnProps => {
	const cartState = useCartStore(state => state);

	useEffect(() => {
		cartState.fetchCartItems();
	}, []);

	return cartState
}