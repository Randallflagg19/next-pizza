import React from 'react';
import Image from 'next/image'
import {cn} from '@/lib/utils'

interface Props {
	imageUrl: string;
	className?: string;
	size: number
}

export const ProductImage:React.FC<Props> = ({imageUrl,className,size}) => {
    return (
        <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
	        <img src={imageUrl} alt={'logo'}
	                className={cn('relative left-2 top-2 transition-all z-10 duration-300 rounded-full',{
										'w-[300px] h-[300px]': size === 20,
										'w-[400px] h-[400px]': size === 30,
										'w-[500px] h-[500px]': size === 40,
		                })}
	        />
	        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed border-2 rounded-full bg-gray-200 w-[450px] h-[450px]'></div>
	        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dotted border-2 rounded-full bg-gray-100 w-[370px] h-[370px]'></div>
			  </div>
    );
};
