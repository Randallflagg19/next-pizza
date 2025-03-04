import React from 'react'
import Link from 'next/link'
import {Title} from './title'
import {Plus} from 'lucide-react'
import {Button} from '../ui'

interface Props {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	className?: string;
}

export const ProductCard: React.FC<Props> = ({id, name, price, imageUrl, className}) => {
	return (
		<div className={className}>
			<Link href={`/product/${id}`} className="block">
				<div className="flex justify-center py-6 bg-secondary rounded-lg h-[260px]">
					<img className="w-[215px] h-[215px] object-contain" src={imageUrl} alt={name}/>
				</div>
			</Link>

			<Title text={name} size="sm" className="mb-1 mt-3 font-bold"/>
			<p className="text-sm text-gray-400">
				Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
			</p>

			<div className="flex justify-between items-center mt-4">
				<span className="text-[20px]">
					от <b>{price} ₽</b>
				</span>
				<Button variant="secondary" className="text-base font-bold">
					<Plus size={20} className="mr-1"/>
					Добавить
				</Button>
			</div>
		</div>
	)
}
