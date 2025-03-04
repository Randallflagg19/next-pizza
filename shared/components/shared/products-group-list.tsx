'use client'
import React, {useEffect} from 'react'
import {Title} from './title'
import {cn} from '../../lib/utils'
import {ProductCard} from './product-card'
import {useIntersection} from 'react-use'
import {useCategoryStore} from '../../store/categiry'

interface Props {
	title: string;
	products: any[]
	className?: string;
	listClassName?: string;
	categoryId: number
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	products,
	className,
	listClassName,
	categoryId
}) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId)
	const intersectionRef = React.useRef<HTMLDivElement>(null)
	const intersection = useIntersection(
		intersectionRef as React.RefObject<HTMLElement>, {
			threshold: 0.1
		})

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId)
		}
	}, [categoryId, intersection?.isIntersecting, title])

	return (
		<div className={className} id={title} ref={intersectionRef}>
			<Title text={title} size="lg" className="font-extrabold mb-5 "></Title>
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>

				{products.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						imageUrl={product.imageUrl}
						price={product.items[0].price}/>
				))}

			</div>
		</div>
	)
}
