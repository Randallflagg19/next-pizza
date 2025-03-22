import React from 'react';
import {cn} from '../../lib/utils'
import {Title} from './index'
import {Button} from '../ui'
import Image from 'next/image'

interface Props {
    imageUrl: string;
    name: string;
    onSubmit?:VoidFunction;
    className?: string;
    price: number;
    loading?:boolean;
}

export const ChooseProductForm:React.FC<Props> = ({
    price,
    imageUrl,
    name,
    onSubmit,
    className,
    loading = false
}) => {

    return (
        <div className={cn(className,'flex flex-1')}>
          <div className={cn('flex items-center justify-center flex-1 relative w-full', className)}>
            <Image width={350} height={350} alt={name} src={imageUrl} className='relative left-2 top-2 transition-all z-10 duration-300'/>
          </div>
            <div className='w-[490px] bg-orange-50 p-7'>
                <Title text={name} size="md" className="mb-1 font-extrabold"/>
            <Button loading={loading}
                    onClick={()=>onSubmit?.()}
                    className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                    Добавить в корзину за {price} ₽
            </Button>
            </div>
        </div>
    );
};
