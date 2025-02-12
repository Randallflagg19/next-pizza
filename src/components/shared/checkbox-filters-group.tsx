'use client'

import React from 'react'
import {FilterCheckbox, FilterCheckboxProps} from './filter-checkbox'
import {Input} from '@/components/ui'
import {Skeleton} from '@/components/ui'
type Item = FilterCheckboxProps

export interface Props {
	title: string;
	items: Item[];
	defaultItems?: Item[];
	limit?: number;
	searchInputPlaceholder?: string;
	loading?: boolean;
	onCheckboxClick?: (id:string) => void;
	defaultValue?: string[];
	selectedIds?:Set<string>;
	className?: string;
	name?:string
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
	title,
	items,
	defaultItems,
	limit=6,
	searchInputPlaceholder = 'Поиск...',
	loading,
	onCheckboxClick,
	selectedIds,
	className,
	name
}) => {
	const [showAll, setShowAll] = React.useState(false)
	const [searchValue, setSearchValue] = React.useState('')

	const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value)
	}

	const list = showAll
		? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLowerCase()))
		: (defaultItems||items).slice(0, limit)

	if (loading){
		return <div>
			<p className="font-bold mb-3">{title}</p>

			{
				Array(limit).fill(0).map((_, i) => (<Skeleton key={i} className='h-6 mb-4 rounded-[8px]'/>))}
			<Skeleton className='w-28 h-6 mb-4 rounded-[8px]'/>
		</div>
	}

	return (
		<div className={className}>
			<p className="font-bold mb-3">{title}</p>

			{
				showAll && (
					<div className="mb-5">
						<Input id="search-filter"
						       onChange={onChangeSearchInput}
						       placeholder={searchInputPlaceholder}
						       className="bg-gray-50 border-none"/>
					</div>
				)
			}

			<div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
				{list.map((item, i) => (
					<FilterCheckbox
						key={i}
						value={item.value}
						text={item.text}
						endAdornment={item.endAdornment}
						checked={selectedIds?.has(item.value)}
						onCheckedChange={() => onCheckboxClick?.(item.value)}
						name={name}
					/>
				))}
			</div>

			{items.length > limit && (
				<div className={showAll ? 'border-top border-t-neutral-100 mt-4' : ''}>
					<button onClick={() => setShowAll(!showAll)} className="text-primary mt-3">
						{showAll ? 'Скрыть' : '+ Показать все'}
					</button>
				</div>
			)}

		</div>
	)
}
