import React from 'react';
import {cn} from '../../lib/utils'

interface Props {
		title?: React.ReactNode
		value?: string
    className?: string
}

export const CheckoutItemDetails:React.FC<Props> = ({className, title, value}) => {
    return (
	    <div className='flex my-4'>
									<span className={cn('flex flex-1 text-lg text-neutral-500', className)}>
										{title}
										<div
											className='flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2'/>
									</span>
		    <span className='font-bold text-lg'>{value}</span>
	    </div>
    );
};
