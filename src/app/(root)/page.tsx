import {
	Container,
	Filters,
	ProductsGroupList,
	Title,
	TopBar
} from '../../../shared/components/shared'
import {Suspense} from 'react'
import {findPizzas, GetSearchParams} from '../../../shared/lib/find-pizzas'

export default async function Home({searchParams} : {searchParams: GetSearchParams}) {

	// const categories = await findPizzas(searchParams)


	const params = await searchParams;

	// Преобразуем параметры
	const transformedParams: GetSearchParams = {
		query: params.query,
		sortBy: params.sortBy,
		sizes: params.sizes ? params.sizes : undefined, // Убираем преобразование в массив
		pizzaTypes: params.pizzaTypes ? params.pizzaTypes : undefined, // Оставляем как строку
		ingredients: params.ingredients ? params.ingredients : undefined, // Оставляем как строку
		priceFrom: params.priceFrom ? params.priceFrom : undefined, // Оставляем как строку
		priceTo: params.priceTo ? params.priceTo : undefined, // Оставляем как строку
	};

	const categories = await findPizzas(transformedParams);

	return (
		<>
			<Container className="mt-10">
				<Title text="Все пиццы" size={'lg'} className={'font-extrabold'}/>
			</Container>
			<TopBar categories={categories.filter(category=>category.products.length)}/>
			<Container className="mt-10 pb-14">
				<div className="flex gap-[80px]">
					<div className="w-[250]">
						<Suspense>
							<Filters/>
						</Suspense>
					</div>

					<div className="flex-1">
						<div className="flex flex-col gap-16">
							{categories.map(
								(category) =>
									category.products.length > 0 && (
										<ProductsGroupList
											key={category.id}
											title={category.name}
											categoryId={category.id}
											products={category.products}
										/>)
							)}
						</div>
					</div>
				</div>
			</Container>
		</>
	)
}
