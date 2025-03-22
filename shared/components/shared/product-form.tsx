'use client'

import React from 'react';
import {useCartStore} from '../../store'
import {toast} from 'react-hot-toast'
import {ProductWithRelations} from '../../../@types/prisma'
import {ChoosePizzaForm} from './choose-pizza-form'
import {ChooseProductForm} from './choose-product-form'

interface Props {
		product: ProductWithRelations;
		onSubmitModal?: () => void;
    className?: string;
}

export const ProductForm:React.FC<Props> = ({product, onSubmitModal, className}) => {

	const loading = useCartStore(state => state.loading);
	const addCartItem = useCartStore(state => state.addCartItem)
	const firstItem = product.items[0]
	const isPizzaForm = Boolean(firstItem.doughType)

	const onSubmit = async (productVariantId?: number, ingredients?: number[]) => {
		try {
			const itemId = productVariantId ?? firstItem.id

			await addCartItem({
				productVariantId:itemId, ingredients
			});
			toast.success(product.name + ' добавлена в корзину')

			onSubmitModal?.()
		} catch (error) {
			toast.error('Не удалось добавить товар в корзину');
			console.error(error);
		}
	};

    if(isPizzaForm){
			return (
				<ChoosePizzaForm
					onSubmit={onSubmit}
					imageUrl={product.imageUrl}
					name={product.name}
					ingredients={product.ingredients}
					items={product.items}
					loading={loading}
				/>
			)
    }
		return (
			<ChooseProductForm
				price={firstItem.price}
				onSubmit={onSubmit}
				imageUrl={product.imageUrl}
				name={product.name}
				loading={loading}
			/>
		)
};
