'use client'

import React from 'react'
import {Title} from './title'
import {Input, RangeSlider} from '../ui'
import {CheckboxFiltersGroup} from './checkbox-filters-group'
import { useQueryFilters,useIngredients,useFilters} from '../../hooks'

interface Props {
	className?: string;
}


export const Filters: React.FC<Props> =	({className}) => {
	const {ingredients,loading} = useIngredients()
  const filters = useFilters()

	useQueryFilters(filters)

	const items = ingredients.map(item => ({value: String(item.id), text: item.name}))

	const updatePrices = (prices:number[]) => {
		filters.updatePrice('priceFrom',prices[0])
		filters.updatePrice('priceTo',prices[1])
	}
	
		return (
			<div className={className}>
				<Title text="Фильтрация" size="sm" className="mb-5 font-bold"/>

				<CheckboxFiltersGroup
				                      title="Тип теста"
															name='PizzaTypes'
				                      className="mt-5"
				                      onCheckboxClick={filters.togglePizzaTypes}
				                      selectedIds={filters.pizzaTypes}
				                      items ={[
					                      { text: 'Тонкое', value: '1'	},
					                      { text: 'Традиционное', value: '2'	},
				                      ]}/>


				<CheckboxFiltersGroup
				                      title="Размеры"
															name='Sizes'
				                      className="mt-5"
				                      onCheckboxClick={filters.toggleSizes}
				                      selectedIds={filters.sizes}
				                      items ={[
																{ text: '20 см', value: '20'	},
																{ text: '30 см', value: '30'	},
																{ text: '40 см', value: '40'	},
															]}/>

				<div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
					<p className="font-bold mb-3">Цена от и до</p>
					<div className="flex gap-3 mb-5">
						<Input type="number" placeholder="0" max={1000}
						       value={filters.prices.priceFrom ?? ""}
						       onChange={(e)=>filters.updatePrice('priceFrom',Number(e.target.value))}/>
						<Input type="number" placeholder="1000" min={100} max={1000}
						       value={filters.prices.priceTo ?? ""}
						       onChange={(e)=>filters.updatePrice('priceTo',Number(e.target.value))}/>
					</div>

					<RangeSlider min={0} max={1000} step={10} value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
					onValueChange={updatePrices}/>
				</div>

				<CheckboxFiltersGroup title="Ингридиенты"
				                      name='Ingredients'
				                      className="mt-5"
				                      limit={6}
				                      defaultItems={items.slice(0,6)}
				                      items={items}
															loading={loading}
				                      onCheckboxClick={filters.toggleIngredients}
				                      selectedIds={filters.selectedIngredients}
				/>
			</div>)
	}

