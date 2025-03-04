import React from 'react';
import {cn} from '../../lib/utils'
import {Title} from './index'
import {Button} from '../ui'
import Image from 'next/image'

interface Props {
    imageUrl: string;
    name: string;
    onClickAdd?:VoidFunction;
    className?: string;
}

export const ChooseProductForm:React.FC<Props> = ({
    imageUrl,
    name,
    onClickAdd,
    className,
}) => {
    const textDetails = '30 см традиционное тесто 30'
    const totalPrice = 350

    return (
        <div className={cn(className,'flex flex-1')}>
          <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
            <Image width={350} height={350} alt={name} src={imageUrl} className='relative left-2 top-2 transition-all z-10 duration-300'/>
          </div>
            <div className='w-[490px] bg-orange-50 p-7'>
                <Title text={name} size="md" className="mb-1 font-extrabold"/>
                <p className='text-gray-400'>{textDetails}</p>
            <Button
              className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                Добавить в корзину за {totalPrice} ₽
            </Button>
            </div>
        </div>
    );
};
