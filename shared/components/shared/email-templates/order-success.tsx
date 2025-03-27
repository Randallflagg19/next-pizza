import * as React from 'react';
import {CartItemDTO} from '../../../services/dto/cart.dto'

interface Props {
	orderId: number;
	items: CartItemDTO[]
}

export const OrderSuccessTemplate: React.FC<Props> = ({
	orderId, items
}) => (
	<div>
		<h1>Спасибо за покупку! 🎆</h1>
		<p>Ваш заказ №{orderId} оплачен. Список товаров:</p>
		<hr/>
		<ul>
			{items.map(item => (
				<li key={item.id}>
					{item.productVariant.product.name} - {item.productVariant.price} ₽ x {item.quantity}
					= {item.productVariant.price * item.quantity} ₽
				</li>
			))}
		</ul>
	</div>
);