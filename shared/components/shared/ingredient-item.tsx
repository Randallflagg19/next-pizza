import React from 'react';
import {cn} from '../../lib/utils'
import {CircleCheck} from 'lucide-react'
import Image from 'next/image'

interface Props {
    className?: string;
		imageUrl:string;
		name: string;
		price: number;
		active?: boolean;
		onClick?: () =>void
}

export const IngredientItem:React.FC<Props> = ({ className,
imageUrl,
name,
price,
active,
onClick}) => {
    return (
        <div className={cn('flex items-center flex-col p-1 rounded-md ' +
	        '2-32 text-center relative cursor-pointer shadow-md bg-white',
	        {'border border-primary': active,},
	        className)} onClick={onClick}>
	        {active && <CircleCheck className='absolute top-2 right-2 text-primary'/> }
          <Image  src={imageUrl} alt='ingredient' width={110} height={110} />
	        <span className='text-xs mb-1'>{name}</span>
	        <span className='font-bold'>{price} ₽</span>
				</div>
    );
};
