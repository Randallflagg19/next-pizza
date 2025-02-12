import {useEffect, useState} from 'react'
import {Ingredient} from '.prisma/client'
import {ApiClient} from '../../services/api-client'

export const useIngredients = () => {

	const [ingredients, setIngredients] = useState<Ingredient[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchIngredients = async () => {
			try {
				setLoading(true);
				const ingredientsData = await ApiClient.ingredients.getAll();
				setIngredients(ingredientsData);
			} catch (error) {
				console.error('Error fetching ingredients:', error);
			}finally {
				setLoading(false);
			}
		};
		fetchIngredients();
	}, []);

	return {
		ingredients,
		loading
	};
}