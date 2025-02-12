import {useSearchParams} from 'next/navigation'
import {useSet} from 'react-use'
import React from 'react'


interface PriceProps {
	priceFrom?: number
	priceTo?: number
}

interface QueryFilters extends PriceProps {
	pizzaTypes:string,
	sizes:string,
	ingredients:string,
}

export interface Filters {
	sizes: Set<string>;
	pizzaTypes: Set<string>;
	selectedIngredients: Set<string>;
	prices: PriceProps;
}

interface ReturnProps extends Filters {
	updatePrice:(name: keyof PriceProps, value:number) => void;
	togglePizzaTypes:(value:string) => void;
	toggleSizes:(value:string) => void;
	toggleIngredients:(value:string) => void;
}

export const useFilters = (): ReturnProps => {

	const searchParams = useSearchParams() as unknown as Map<keyof  QueryFilters, string>

	//  Характеристики
	const [selectedIngredients, {toggle: toggleIngredients}] = useSet(
		new Set<string>(searchParams.get('ingredients')?.split(',')));

	const [sizes, {toggle: toggleSizes}] = useSet(
		new Set<string>(searchParams.get('sizes')?.split(',')));

	const [pizzaTypes, {toggle: togglePizzaTypes}] = useSet(
		new Set<string>(searchParams.get('pizzaTypes')?.split(',')));


	// Цена
	const [prices, setPrices] = React.useState<PriceProps>({
		priceFrom: Number(searchParams.get('priceFrom'))||undefined,
		priceTo: Number(searchParams.get('priceTo'))||undefined
	})

	const updatePrice = (name:keyof PriceProps,value:number)=>{
		setPrices(prev=>({
			...prev,
			[name]:value
		}))
	}



	return {
			sizes,pizzaTypes,selectedIngredients,prices,
			updatePrice,togglePizzaTypes, toggleSizes, toggleIngredients
	}
}