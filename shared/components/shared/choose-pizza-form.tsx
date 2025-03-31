"use client";

import React from 'react'
import {cn} from '../../lib/utils'
import {PizzaImage, Title} from './index'
import {Button} from '../ui'
import {GroupVariants} from './group-variants'
import {PizzaSize, PizzaType, pizzaTypes} from '../../constants/pizza'
import {Ingredient, ProductVariant} from '@prisma/client'
import {IngredientItem} from './ingredient-item'
import {getPizzaDetails} from '../../lib'
import {usePizzaOptions} from '../../hooks'

interface Props {
    imageUrl: string;
    name: string;
    ingredients: Ingredient[];
    items: ProductVariant[];
    onClickAddCart?:VoidFunction;
    className?: string;
    onSubmit: (itemId:number,ingredients: number[]) => void;
    loading?:boolean;
}

export const ChoosePizzaForm:React.FC<Props> = ({
    name,
    ingredients,
    imageUrl,
    items,
    onClickAddCart,
    className,
    onSubmit,
    loading = false
}) => {

  const {
    currentItemId,
    size,
    type,
    selectedIngredients,
    availableSizes,
    setSize,
    setType,
    addIngredient} = usePizzaOptions(items)

  const {totalPrice,textDetails} = getPizzaDetails(type, size, items, ingredients, selectedIngredients)

  const handleClickAdd = () => {
    if (currentItemId) {
    onSubmit(currentItemId, Array.from(selectedIngredients))
          }
  }

    return (
        <div className={cn(className,'flex flex-1')}>
          <PizzaImage imageUrl={imageUrl} size={size}/>
            <div className='w-[490px] bg-orange-50 p-7'>
                <Title text={name} size="md" className="mb-1 font-extrabold"/>
                <p className='text-gray-400'>{textDetails}</p>
                <div className='flex flex-col gap-4 mt-5'>
                  <GroupVariants items={availableSizes} value={String(size)} onClick={value => setSize(Number(value) as PizzaSize)}   />
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
              <Button
                loading={loading}
                onClick={handleClickAdd}
                className='h-[55px] px-10 text-base rounded-[18px] w-full mt-10'>
                Добавить в корзину за {totalPrice} ₽
              </Button>
            </div>
        </div>
    );
};
