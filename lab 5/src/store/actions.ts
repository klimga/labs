import { getData } from '../service/getProducts';
import { productsActions, ShoppingItemsActions } from '../types/store';

export const getDataProducts = async () => {
	const data = await getData()
	return [
		{
			action: productsActions.GETPRODUCTS,
			payload: data,
		},
		{
			action: ShoppingItemsActions.GETSHOPPINGITEMS,
			payload: data,
		},
		{
			action: ShoppingItemsActions.SAVESHOPPINGITEMS,
			payload: data,
		},
	];
};
