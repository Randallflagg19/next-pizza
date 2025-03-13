import {pizzaSizes, PizzaType} from '../constants/pizza'
import {ProductVariant} from '.prisma/client'
import {Variant} from '../components/shared/group-variants'

/**
 *
 *
 *
 * @param items список вариаций
 * @param type тип теста 1/2
 *
 * @return доступные размеры для этого типа теста
 */
export const getAvailablePizzaSizes = (items:ProductVariant[], type: PizzaType): Variant[] =>{

	const filteredByTypePizzas = items.filter((item) => item.doughType === type)

	return pizzaSizes.map(item => ({
		name:item.name,
		value:item.value,
		disabled: !filteredByTypePizzas.some((pizza) => Number(pizza.size) ===Number(item.value))
	}))


}