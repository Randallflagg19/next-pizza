import {prisma} from '../../../../../../prisma/prisma-client'
import {ChooseProductModal} from '../../../../../../shared/components'
import {notFound} from 'next/navigation'


export default async function ProductModalPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params; // Ждем params перед использованием id

	const product = await prisma.product.findFirst({
		where: { id: Number(id) },
		include: {
			ingredients: true,
			items: true
		}
	});

	if (!product) {
		return notFound();
	}

	return <ChooseProductModal product={product} />;
}

