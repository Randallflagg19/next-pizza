import React from 'react'
import {WhiteBlock} from '../white-block'
import {Input, Textarea} from '../../ui'

interface Props {
    className?: string
}

export const CheckoutAddress:React.FC<Props> = ({className}) => {
    return (
	    <WhiteBlock title='3. Адрес доставки'>
		    <div className='flex flex-col gap-5'>
			    <Input name='adress' className='text-base' placeholder="Адрес доставки"/>
			    <Textarea rows={5} className='text-base' placeholder='Комментарий к заказу'/>
		    </div>
	    </WhiteBlock>
    );
};
