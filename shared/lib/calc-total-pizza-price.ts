import {Ingredient,ProductVariant} from '@prisma/client'
import {PizzaSize, PizzaType} from '../constants/pizza'

/**
 * Функция подсчета общей стоимости пиццы
 *
 * @example ```calcTotalPizzaPrice(1, 20, items, ingredients, selectedIngredients)```
 *
 * @param type тип теста выбранной пиццы
 * @param size размер выбранной пиццы
 * @param items список вариаций
 * @param ingredients список ингредиентов
 * @param selectedIngredients выбранные ингредиенты
 *
 * @return number общая стоимость
 */
export const calcTotalPizzaPrice = (
	type:PizzaType,
	size:PizzaSize,
	items: ProductVariant[],
	ingredients: Ingredient[],
	selectedIngredients: Set<number>) =>{
	const pizzaPrice =
		items.find((item) => item.doughType === type && item.size ===size)?.price || 0

	const totalIngredientsPrice = ingredients
		.filter(ingredient => selectedIngredients.has(ingredient.id))
		.reduce((acc,ingredient) =>acc+ingredient.price,0)

	return pizzaPrice+totalIngredientsPrice
}