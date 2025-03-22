import {Container, Title, WhiteBlock} from '../../../../shared/components/shared'
import {Input} from '../../../../shared/components/ui'

export default function CheckoutPage() {
	return (
				<Container className='mt-10'>
					<Title text='Оформление заказа' className='font-extrabold text-[36px]'/>
					<div className='flex gap-10'>
						<div className='flex flex-col gap-10 flex-1 mb-20'>
							<WhiteBlock title='1. Корзина'>
								23123
							</WhiteBlock>

							<WhiteBlock title='3. Адрес доставки'>
								<div className='grid grid-cols-2 gap-5'>
									<Input name='firstName' className='text-base' placeholder="Имя"/>
									<Input name='lastName' className='text-base' placeholder="Фамилия"/>
									<Input name='email' className='text-base' placeholder="E-Mail"/>
									<Input name='phone' className='text-base' placeholder="Телефон"/>
								</div>

							</WhiteBlock>

							<WhiteBlock title='3. Адрес доставки'>
								<div className='flex flex-col gap-5'>
									<Input name='addres' className='text-base' placeholder="Адрес"/>

								</div>
							</WhiteBlock>
						</div>
						<div className='w-[150px]'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet assumenda aut deleniti eum libero molestiae quas vel? Autem dolorem eaque impedit mollitia odit quia reprehenderit vero. Eum ex nemo omnis optio quas ratione reiciendis sapiente. Fugiat magni veritatis voluptatem!
						</div>
					</div>


				</Container>
	);
}
