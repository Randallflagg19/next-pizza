import {Filters} from './useFilters'
import React from 'react'
import qs from 'qs'
import {useRouter} from 'next/navigation'

// export const useQueryFilters = (filters:Filters) => {
// 	const 	router = useRouter()
//
// 	React.useEffect(() =>{
// 		const params  = {
// 			priceFrom: filters.prices.priceFrom,
// 			priceTo: filters.prices.priceTo,
// 			pizzaTypes:Array.from(filters.pizzaTypes),
// 			sizes:Array.from(filters.sizes),
// 			ingredients: Array.from(filters.selectedIngredients)
// 		}
//
// 		const query = qs.stringify(params, {arrayFormat: "comma"})
//
// 		router.push(`?${query}`, {scroll: false})
// 	}, [filters.prices.priceFrom, filters.prices.priceTo, filters.pizzaTypes, filters.sizes, filters.selectedIngredients,router])
// }

export const useQueryFilters = (filters:Filters) => {
	const 	router = useRouter()

	React.useEffect(() =>{
		const params  = {
			...filters.prices,
			pizzaTypes:Array.from(filters.pizzaTypes),
			sizes:Array.from(filters.sizes),
			ingredients: Array.from(filters.selectedIngredients)
		}

		const query = qs.stringify(params, {arrayFormat: "comma"})

		router.push(`?${query}`, {scroll: false})
	}, [filters])
}