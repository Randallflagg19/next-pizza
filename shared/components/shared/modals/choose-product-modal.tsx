"use client"

import React from 'react';
import {Dialog} from '../../ui'
import {DialogContent} from '../../ui/dialog'
import {cn} from '../../../lib/utils'
import {useRouter} from 'next/navigation'
import {ProductWithRelations} from '../../../../@types/prisma'
import {ChoosePizzaForm, ChooseProductForm} from '../index'

interface Props {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal:React.FC<Props> = ({product,className}) => {
	const router=useRouter()
	const isPizzaForm = Boolean(product.items[0].doughType)

    return (
        <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
	        <DialogContent className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden',className)}>
		        {isPizzaForm ? (
		           <ChoosePizzaForm imageUrl={product.imageUrl} name={product.name}
		                            ingredients={product.ingredients}
		           items={product.items}/>
		        ):
		           <ChooseProductForm imageUrl={product.imageUrl} name={product.name} />
						}
	        </DialogContent>
        </Dialog>
    );
};
