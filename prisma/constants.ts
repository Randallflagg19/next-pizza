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
	{
		name: 'Сырный бортик',
		price: 179,
		imageUrl: "/ingredients/CheeseEdge.png",
	},
	{
		name: 'Бекон',
		price: 179,
		imageUrl: "/ingredients/Bacon.png",
	},
	{
		name: 'Халапеньо',
		price: 79,
		imageUrl: "/ingredients/Halapenio.png",
	},
	{
		name: 'Пепперони',
		price: 179,
		imageUrl: "/ingredients/Pepperoni.png",
	},
	{
		name: 'Креветки',
		price: 179,
		imageUrl: "/ingredients/Shrimps.png",
	},
	{
		name: 'Брынза',
		price: 79,
		imageUrl: "/ingredients/Brynza.png",
	},
	{
		name: 'Ветчина',
		price: 79,
		imageUrl: "/ingredients/Ham.png",
	},
	{
		name: 'Перец',
		price: 79,
		imageUrl: "/ingredients/Pepper.png",
	},
	{
		name: 'Пряная ветчина',
		price: 179,
		imageUrl: "/ingredients/SpicyHam.png",
	},
	{
		name: 'Чеддер',
		price: 179,
		imageUrl: "/ingredients/Chedder.png",
	},
	{
		name: 'Итальянские травы',
		price: 79,
		imageUrl: "/ingredients/ItalianHerbs.png",
	},
	{
		name: 'Огурчики',
		price: 79,
		imageUrl: "/ingredients/Pickles.png",
	},
	{
		name: 'Томаты',
		price: 79,
		imageUrl: "/ingredients/Tomato.png",
	},
	{
		name: 'Лук',
		price: 79,
		imageUrl: "/ingredients/Leek.png",
	},
	{
		name: 'Ананасы',
		price: 79,
		imageUrl: "/ingredients/Pineapple.png",
	},
	{
		name: 'Курица',
		price: 179,
		imageUrl: "/ingredients/Chicken.png",
	},
	{
		name: 'Митболы',
		price: 179,
		imageUrl: "/ingredients/Meatbolls.png",
	},
	{
		name: 'Колбаски',
		price: 179,
		imageUrl: "/ingredients/Sausages.png",
	},
	{
		name: 'Чоризо',
		price: 179,
		imageUrl: "/ingredients/Chorizo.png",
	},
	{
		name: 'Моцарелла',
		price: 179,
		imageUrl: "/ingredients/Mozarella.png",
	},
	{
		name: 'Шампиньоны',
		price: 79,
		imageUrl: "/ingredients/Shamp.png",
	}
].map((object,  index) => ({id: index+1, ...object}));

export const products = [
	{
		name: 'Омлет с ветчиной и грибами',
		imageUrl: "/products/1.png",
		categoryId: 2,
	},
	{
		name: 'Молочный коктейль с печеньем орео',
		imageUrl: "/products/2.png",
		categoryId: 3,
	},
	{
		name: 'Ирландский капучино',
		imageUrl: "/products/3.png",
		categoryId: 4,
	},
	{
		name: 'Кофе американо',
		imageUrl: "/products/1.png",
		categoryId: 5,
	},
	{
		name: 'Яичница с беконом',
		imageUrl: "/products/2.png",
		categoryId: 2,
	},
	{
		name: 'Сырники со сметаной',
		imageUrl: "/products/3.png",
		categoryId: 2,
	},
	{
		name: 'Французские тосты',
		imageUrl: "/products/1.png",
		categoryId: 2,
	},
	{
		name: 'Молочный коктейль ванильный',
		imageUrl: "/products/2.png",
		categoryId: 3,
	},
	{
		name: 'Молочный коктейль клубничный',
		imageUrl: "/products/3.png",
		categoryId: 3,
	},
	{
		name: 'Молочный коктейль шоколадный',
		imageUrl: "/products/1.png",
		categoryId: 3,
	},
	{
		name: 'Эспрессо',
		imageUrl: "/products/2.png",
		categoryId: 5,
	},
	{
		name: 'Латте макиато',
		imageUrl: "/products/3.png",
		categoryId: 4,
	},
	{
		name: 'Гляссе',
		imageUrl: "/products/1.png",
		categoryId: 4,
	},
	{
		name: 'Мокачино',
		imageUrl: "/products/2.png",
		categoryId: 4,
	},
	{
		name: 'Флэт уайт',
		imageUrl: "/products/3.png",
		categoryId: 4,
	},
	{
		name: 'Какао с маршмеллоу',
		imageUrl: "/products/1.png",
		categoryId: 5,
	},
	{
		name: 'Матча латте',
		imageUrl: "/products/1.png",
		categoryId: 5,
	},
	{
		name: 'Банановый смузи',
		imageUrl: "/products/1.png",
		categoryId: 3,
	},
	{
		name: 'Фруктовый фреш',
		imageUrl: "/products/1.png",
		categoryId: 3,
	},
	{
		name: 'Горячий шоколад',
		imageUrl: "/products/1.png",
		categoryId: 5,
	}
];
