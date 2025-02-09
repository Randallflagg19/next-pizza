import {Container, Title, Filters, TopBar, ProductsGroupList} from '@/components/shared'

export default function Home() {
	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size={'lg'} className={'font-extrabold'}/>
			</Container>
			<TopBar/>
			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250]">
						<Filters/>
					</div>
					<div className="flex-1">
						<div className="flex flex-col gap-16">
							<ProductsGroupList title="Пиццы" products={[
								{
									id: 1,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 2,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 3,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 4,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 5,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 6,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 7,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 8,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 9,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								}

							]} categoryId={1}/>
							<ProductsGroupList title="Комбо" products={[
								{
									id: 1,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 2,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 3,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 4,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 5,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 6,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 7,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 8,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								},
								{
									id: 9,
									name: 'Чизбургер-пицца',
									imageUrl: 'https://media.dodostatic.net/image/r:292x292/11ef9a30c3246adebecb726548cbede9.avif',
									price: 550,
									items: [{price: 550}]
								}

							]} categoryId={2}/>
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
