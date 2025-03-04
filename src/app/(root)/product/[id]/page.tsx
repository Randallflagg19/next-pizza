import {notFound} from 'next/navigation'
import {Container,PizzaImage,Title} from '../../../../../shared/components/shared'
import {prisma} from '../../../../../prisma/prisma-client'
import {GroupVariants} from '../../../../../shared/components/shared/group-variants'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params; // Ожидание params перед использованием id

	const product = await prisma.product.findFirst({ where: { id: Number(id) } });

	if (!product) {
		return notFound();
	}

	return (
		<Container className="flex flex-col my-20">
			<div className="flex flex-1 gap-40">
				<PizzaImage imageUrl={product.imageUrl} size={20} />
				<div className="w-[490px] bg-orange-100 p-7">
					<Title text={product.name} size="md" className="font-extrabold mb-1" />
					<p className="text-gray-400">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque consectetur eaque necessitatibus...
					</p>

					<GroupVariants
						value="2"
						items={[
							{ name: 'Маленькая', value: '1' },
							{ name: 'Средняя', value: '2' },
							{ name: 'Большая', value: '3', disabled: true }
						]}
					/>
				</div>
			</div>
		</Container>
	);
}
