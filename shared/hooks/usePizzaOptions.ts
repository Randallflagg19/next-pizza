import React, {useEffect} from 'react'
import {PizzaSize, PizzaType} from '../constants/pizza'
import {Variant} from '../components/shared/group-variants'
import {useSet} from 'react-use'
import {getAvailablePizzaSizes} from '../lib'
import {ProductVariant} from '.prisma/client'

interface ReturnProps {
	size: PizzaSize,
	type: PizzaType,
	setSize: (size:PizzaSize) => void
	setType: (type: PizzaType) => void
	selectedIngredients: Set<number>
	addIngredient:(id:number) => void
	availableSizes: Variant[]
}

export const usePizzaOptions = (items:ProductVariant[]): ReturnProps =>{

	const [size, setSize] = React.useState<PizzaSize>(20)
	const [type, setType] = React.useState<PizzaType>(1)
	const [selectedIngredients, {toggle:addIngredient}] = useSet(new Set<number>([]))

	const availableSizes = getAvailablePizzaSizes(items, type);


	useEffect(() => {
		const isSizeAvailable = availableSizes?.find(item => Number(item.value) ===
			size && !item.disabled)
		const availableSize = availableSizes?.find(item => !item.disabled)

		if (!isSizeAvailable && availableSize) {
			setSize(Number(availableSize.value) as PizzaSize)
		}
	},[type])

	return  {
		size,
		type,
		setSize,
		setType,
		selectedIngredients,
		availableSizes,
		addIngredient
	}
}