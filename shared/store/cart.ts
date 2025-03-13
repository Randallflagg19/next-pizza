'use client'

import {create} from 'zustand'
import {ApiClient} from '../services/api-client'
import {getCartDetails} from '../lib'

export type CartStateItem = {
	id: number;
	quantity: number;
	name: string;
	imageUrl: string;
	price: number;
	pizzaSize?: number|null;
	pizzaType?: number|null;
	ingredients: Array<{name:string; price: number}>
}

export interface CartState {
	loading: boolean;
	error: boolean;
	totalAmount: number;
	items: CartStateItem[];

	// получение товаров из корзины
	fetchCartItems: () => Promise<void>;

	// запрос на обновление количества товара
	updateItemQuantity: (id: number, quantity: number) => Promise<void>;

	// запрос на добавление товара
	// TODO: type v
	addCartItem: (values: any) => Promise<void>;

	// Запрос на удаление товара из корзины
	removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set,get)=>({
	items:[],
	error:false,
	loading:true,
	totalAmount:0,

	fetchCartItems:async () => {
		try {
			set({loading:true,error:false})
			const data = await ApiClient.cart.getCart()
			set(getCartDetails(data))
		}catch(error){
			console.log(error)
			set({error:true})
		}finally{
			set({loading:false})
		}
	},

	updateItemQuantity: async (id: number, quantity: number) => {
		try {
			set({loading:true,error:false})
			const data = await ApiClient.cart.updateItemQuantity(id, quantity)
			set(getCartDetails(data))
		}catch(error){
			console.log(error)
			set({error:true})
		}finally{
			set({loading:false})
		}
	},

	removeCartItem: async (id: number) => {
		try {
			set({loading:true,error:false})
			const data = await ApiClient.cart.removeCartItem(id)
			set(getCartDetails(data))
		}catch(error){
			console.log(error)
			set({error:true})
		}finally{
			set({loading:false})
		}
	},

	addCartItem: async (values: any) =>{}
}))