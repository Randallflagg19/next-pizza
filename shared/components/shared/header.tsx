import React from 'react'
import {cn} from '../../lib/utils'
import {Container} from './container'
import Image from 'next/image'
import Link from 'next/link'
import {Button} from '../ui'
import {User} from 'lucide-react'
import {SearchInput,CartButton} from './index'

interface Props {
	className?: string
}

export const Header: React.FC<Props> = ({className}) => {
	return (
		<header className={cn('border border-b', className)}>
			<Container className={'flex items-center justify-between py-8'}>
				<Link href={'/'}>
					<div className="flex items-center gap-4">
						<Image src="/logo.png" alt="Logo" width={35} height={35}/>
						<div>
							<h1 className={'text-2xl uppercase font-black'}> Next Pizza</h1>
							<p className="text-sm text-gray-400 leading-3">вкусней уже некуда</p>
						</div>
					</div>
				</Link>

				<div className='mx-10 flex-1'>
					<SearchInput/>
				</div>

				<div className="flex items-center gap-3">
					<Button className="flex items-center gap-1" variant="outline">
						<User size={16}/>
						Войти
					</Button>
						<CartButton/>
				</div>
			</Container>
		</header>
	)
}