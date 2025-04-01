import {Metadata} from 'next'
import {Container, Header} from '../../../shared/components'
import {Suspense} from 'react'


export const metadata: Metadata = {
	title: "Next Pizza | Корзина",
	description: "Generated by create next app"
}

export default function CheckoutLayout({children}: Readonly<{children: React.ReactNode}>) {
	return (
			<main className='max-h-screen bg-[#F4F1EE]'>
				<Container >
					<Suspense>
						<Header className='border-gray-200' hasSearch={false} hasCart={false}/>
						{children}
					</Suspense>
				</Container>
			</main>
	)
}
