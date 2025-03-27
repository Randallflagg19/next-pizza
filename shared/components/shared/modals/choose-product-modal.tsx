'use client'

import React from 'react'
import {Dialog} from '../../ui'
import {DialogContent} from '../../ui/dialog'
import {cn} from '../../../lib/utils'
import {useRouter} from 'next/navigation'
import {ProductWithRelations} from '../../../../@types/prisma'
import {ProductForm} from '../index'

interface Props {
	product: ProductWithRelations;
	className?: string;
}

export const ChooseProductModal:React.FC<Props> = ({product,className}) => {
	const router=useRouter()

return (
        <Dialog open={Boolean(product)} onOpenChange={()=>router.back()}>
	        <DialogContent aria-describedby={undefined}  className={cn('p-0 w-[1060px] max-w-[1060px] min-h-[600px] bg-white overflow-hidden',className)}>

		        <ProductForm product={product} onSubmitModal={() => router.back()} />
	        </DialogContent>
        </Dialog>
    );
};
