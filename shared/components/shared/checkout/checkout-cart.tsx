import React from 'react'
import {CheckoutItem} from '../checkout-item'
import {getCartItemDetails} from '../../../lib'
import {PizzaSize, PizzaType} from '../../../constants/pizza'
import {WhiteBlock} from '../white-block'
import {CartStateItem} from '../../../store'

interface Props {
		items: CartStateItem[]
    className?: string
		onClickCountButton: (id:number, quantity:number, type: 'plus' | 'minus') =>void
		removeCartItem: (id:number) =>void
}

export const CheckoutCart:React.FC<Props> = ({className, items,
							removeCartItem, onClickCountButton}) => {
    return (
	    <WhiteBlock title='1. Корзина' className={className} >
		    <div className='flex flex-col gap-5'>
			    {items.map(item =>(
				    <CheckoutItem imageUrl={item.imageUrl}
				                  details={
					                  getCartItemDetails(
						                  item.ingredients,
						                  item.pizzaType as PizzaType,
						                  item.pizzaSize as PizzaSize)}
				                  id={item.id}
				                  key={item.id}
				                  name={item.name}
				                  price={item.price}
				                  quantity={item.quantity}
				                  disabled={item.disabled}
				                  onClickCountButton={type =>
					                  onClickCountButton(item.id, item.quantity, type)}
				                  onClickRemove={() => removeCartItem(item.id)}
				    />))}
		    </div>
	    </WhiteBlock>
    );
};
