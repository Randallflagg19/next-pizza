'use client'

import dynamic from 'next/dynamic'

const AddressSuggestions = dynamic(() => import('react-dadata').then(mod => mod.AddressSuggestions), {
	ssr: false, // Отключаем серверный рендеринг
})

import 'react-dadata/dist/react-dadata.css'

interface Props {
	onChange?: (value?: string) => void
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
	return (
		<AddressSuggestions
			token="884ea29dbc220d24f605e7ff41f446eb51aa31ca"
			onChange={data => onChange?.(data?.value)}
		/>
	)
}
