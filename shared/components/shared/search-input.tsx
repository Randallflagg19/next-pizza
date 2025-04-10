'use client'

import {useClickAway, useDebounce} from 'react-use'
import {Search} from 'lucide-react'
import {cn} from '../../lib/utils'
import React from 'react'
import Link from 'next/link'
import {ApiClient} from '../../services/api-client'
import {Product} from '@prisma/client'


interface Props {
    className?: string;
}

export const SearchInput:React.FC<Props> = ({className}) => {

	const [focused, setFocused] = React.useState<boolean>(false)
	const [products, setProducts] = React.useState<Product[]>([])
	const [searchQuery, setSearchQuery] = React.useState<string>('')
	const ref = React.useRef(null)



		useClickAway(ref, () => {
			setFocused(false)
		});

		useDebounce(async()=>{
				try {
					const response= await ApiClient.products.search(searchQuery)
						setProducts(response)
				}
				catch (error){
					console.error(error)
				}
		},250,[searchQuery])




	const onItemClick = ()=>{
			setFocused(false)
		setSearchQuery('')
		setProducts([])
	}

    return (
	    <>
		    {focused && <div className='fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30'></div>}
			    <div ref={ref} className={cn('flex rounded-2xl flex-1 justify-between relative h-11   z-30', className)}>
				    <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400"/>
				    <input type="text" className='rounded-2xl outline-none w-full bg-gray-100 pl-11'
				           placeholder='Найти пиццу...'
				           onFocus={() => setFocused(true)}
				           value={searchQuery}
				           onChange={e => setSearchQuery(e.target.value)}
				    />

				    {products.length > 0&&<div className={cn(
					    'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
					    focused && 'visible opacity-100 top-12'
				    )}>
					    {products.map((product) => (
						    <Link onClick={onItemClick} key={product.id} href={`/product/${product.id}`}
						          className="flex py-1 gap-3 items-center px-3 hover:bg-primary/10">
							    <img src={product.imageUrl} alt={product.name} className="rounded-sm h-8 w-8"/>
							    <span>
								    {product.name}
							    </span>
						    </Link>
					    ))}
				    </div>}
			    </div>
	    </>

    );
};
