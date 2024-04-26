import { AppState } from '../types/store';
import { Actions, productsActions, ShoppingItemsActions } from '../types/store';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	
	const { action, payload } = currentAction;

	switch (action) {
		case productsActions.GETPRODUCTS:
			return {
				...currentState,
				products: payload,
			};
		case ShoppingItemsActions.GETSHOPPINGITEMS:
			return {
				...currentState,
				ShoppingItems: payload,
			};
		case ShoppingItemsActions.SAVESHOPPINGITEMS:
			return {
				...currentState,
				ShoppingItems: payload,
			};

		default:
			return currentState;
	}
};
