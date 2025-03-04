export const categories = [
{
	name: "Пиццы"
},
{
	name: "Завтрак"
},
{
	name: "Закуски"
},
{
	name: "Коктейли"
},
{
	name: "Напитки"
},
]

export const ingredients = [
	{ "name": "Сырный бортик", "price": 109, "imageUrl": "/ingredients/CheeseEdge.png" },
	{ "name": "Бекон", "price": 119, "imageUrl": "/ingredients/Bacon.png" },
	{ "name": "Халапеньо", "price": 49, "imageUrl": "/ingredients/Halapenio.png" },
	{ "name": "Пепперони", "price": 119, "imageUrl": "/ingredients/Pepperoni.png" },
	{ "name": "Креветки", "price": 139, "imageUrl": "/ingredients/Shrimps.png" },
	{ "name": "Брынза", "price": 59, "imageUrl": "/ingredients/Brynza.png" },
	{ "name": "Ветчина", "price": 69, "imageUrl": "/ingredients/Ham.png" },
	{ "name": "Перец", "price": 49, "imageUrl": "/ingredients/Pepper.png" },
	{ "name": "Пряная ветчина", "price": 129, "imageUrl": "/ingredients/SpicyHam.png" },
	{ "name": "Чеддер", "price": 99, "imageUrl": "/ingredients/Chedder.png" },
	{ "name": "Итальянские травы", "price": 39, "imageUrl": "/ingredients/ItalianHerbs.png" },
	{ "name": "Огурчики", "price": 49, "imageUrl": "/ingredients/Pickles.png" },
	{ "name": "Томаты", "price": 49, "imageUrl": "/ingredients/Tomato.png" },
	{ "name": "Лук", "price": 39, "imageUrl": "/ingredients/Leek.png" },
	{ "name": "Ананасы", "price": 59, "imageUrl": "/ingredients/Pineapple.png" },
	{ "name": "Курица", "price": 129, "imageUrl": "/ingredients/Chicken.png" },
	{ "name": "Митболы", "price": 129, "imageUrl": "/ingredients/Meatbolls.png" },
	{ "name": "Колбаски", "price": 119, "imageUrl": "/ingredients/Sausages.png" },
	{ "name": "Чоризо", "price": 119, "imageUrl": "/ingredients/Chorizo.png" },
	{ "name": "Моцарелла", "price": 99, "imageUrl": "/ingredients/Mozarella.png" },
	{ "name": "Шампиньоны", "price": 49, "imageUrl": "/ingredients/Shamp.png" }
].map((object,  index) => ({id: index+1, ...object}));

export const products = [
	{
		name: 'Омлет с ветчиной и грибами',
		imageUrl: "/products/1.avif",
		categoryId: 2,
	},
	{
		name: 'Молочный коктейль с печеньем орео',
		imageUrl: "/products/2.avif",
		categoryId: 4,
	},
	{
		name: 'Карамельный капучино',
		imageUrl: "/products/3.avif",
		categoryId: 5,
	},
	{
		name: 'Кофе американо',
		imageUrl: "/products/4.avif",
		categoryId: 5,
	},
	{
		name: 'Омлет с беконом',
		imageUrl: "/products/5.avif",
		categoryId: 2,
	},
	{
		name: 'Сырники со сгущенным молоком',
		imageUrl: "/products/6.avif",
		categoryId: 2,
	},
	{
		name: 'Сырники с малиновым вареньем',
		imageUrl: "/products/7.avif",
		categoryId: 2,
	},
	{
		name: 'Клубничный молочный коктейль',
		imageUrl: "/products/8.avif",
		categoryId: 4,
	},
	{
		name: 'Молочный коктейль Пина Колада',
		imageUrl: "/products/9.avif",
		categoryId: 4,
	},
	{
		name: 'Молочный коктейль Ежевика-малина',
		imageUrl: "/products/10.avif",
		categoryId: 4,
	},
	{
		name: 'Кофе Латте',
		imageUrl: "/products/11.avif",
		categoryId: 5,
	},
	{
		name: 'Салат Цезарь',
		imageUrl: "/products/12.avif",
		categoryId: 3,
	},
	{
		name: 'Капучино Яблочный пирог',
		imageUrl: "/products/13.avif",
		categoryId: 5,
	},
	{
		name: 'Кофе Кокосовый латте',
		imageUrl: "/products/14.avif",
		categoryId: 5,
	},
	{
		name: 'Айс капучино',
		imageUrl: "/products/15.avif",
		categoryId: 5,
	},
	{
		name: 'Кофе Ореховый латте',
		imageUrl: "/products/16.avif",
		categoryId: 5,
	},
	{
		name: 'Омлет с пепперони',
		imageUrl: "/products/17.avif",
		categoryId: 2,
	},
	{
		name: 'Додстер с ветчиной',
		imageUrl: "/products/18.avif",
		categoryId: 3,
	},
	{
		name: 'Куриные крылья барбекю',
		imageUrl: "/products/19.avif",
		categoryId: 3,
	},
	{
		name: 'Картофель из печи',
		imageUrl: "/products/20.avif",
		categoryId: 3,
	}
];
