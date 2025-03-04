"use client";

import React, {useEffect} from 'react'
import {cn} from '../../lib/utils'
import {PizzaImage, Title} from './index'
import {Button} from '../ui'
import {GroupVariants} from './group-variants'
import {mapPizzaType, PizzaSize, pizzaSizes, PizzaType, pizzaTypes} from '../../constants/pizza'
import {Ingredient,ProductVariant} from '.prisma/client'
import {IngredientItem} from './ingredient-item'
import {useSet} from 'react-use'


interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductVariant[];
    onClickAddCart?:VoidFunction;
    className?: string;
}

export const ChoosePizzaForm:React.FC<Props> = ({
    name,
    ingredients,
    imageUrl,
    items,
    onClickAddCart,
    className,
}) => {

    const [size, setSize] = React.useState<PizzaSize>(20)
    const [type, setType] = React.useState<PizzaType>(1)

  const [selectedIngredients, {toggle:addIngredient}] = useSet(new Set<Number>([]))


    const pizzaPrice = items.find((item) => item.doughType === type && item.size ===size)?.price || 0
  const totalIngredientsPrice = ingredients.
  filter(ingredient => selectedIngredients.has(ingredient.id))
    .reduce((acc,ingredient) =>acc+ingredient.price,0)
  
  const totalPrice = pizzaPrice+totalIngredientsPrice

  const textDetails = `${size} см, ${mapPizzaType[type]} тесто`

  const handleClickAdd = () => {
    onClickAddCart?.();
  }

  const availablePizzas = items.filter((item) => item.doughType === type)
  const availablePizzaSizes = pizzaSizes.map(item => ({
    name:item.name,
    value:item.value,
    disabled: !availablePizzas.some((pizza) => Number(pizza.size) ===Number(item.value))
  }))

  useEffect(() => {
    const isSizeAvailable = availablePizzaSizes?.find(item => Number(item.value) === size && !item.disabled)
    const availableSize = availablePizzaSizes?.find(item => !item.disabled)

    if (!isSizeAvailable && availableSize) {
      setSize(Number(availableSize.value) as PizzaSize)
    }
  },[type])

  console.log({items, availablePizzas, availablePizzaSizes})

    return (
        <div className={cn(className,'flex flex-1')}>

            <PizzaImage imageUrl={imageUrl} size={size}/>


            <div className='w-[490px] bg-orange-50 p-7'>
                <Title text={name} size="md" className="mb-1 font-extrabold"/>

                <p className='text-gray-400'>{textDetails}</p>
  <div className='flex flex-col gap-4 mt-5'>

              <GroupVariants items={availablePizzaSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)}   />
              <GroupVariants items={pizzaTypes} value={String(type)} onClick={value => setType(Number(value) as PizzaType)}   />
  </div>
              <div className=' mt-3 bg-gray-50 p-5 rounded-md h-[320px] overflow-auto scrollbar'>
                <div className='grid grid-cols-3 gap-3 '>
                  {ingredients.map((ingredient) => (
                    <IngredientItem
                      key={ingredient.id}
                      name={ingredient.name}
                      price={ingredient.price}
                      imageUrl={ingredient.imageUrl}
                      onClick={() => addIngredient(ingredient.id)}
                      active={selectedIngredients.has(ingredient.id)}
                    />
                  ))}
                </div>
              </div>

              <Button onClick={handleClickAdd}
                className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                Добавить в корзину за {totalPrice} ₽
              </Button>
            </div>
        </div>
    );
};
