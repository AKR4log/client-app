import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
	IAddToCartPayload,
	IChangeQuantityPayload,
	IInitialState
} from './types';

const initialState: IInitialState = {
	items: []
};

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
			const item = state.items.find(
				item => item.id === action.payload.product.id
			);
			if (!item)
				state.items.push({
					...action.payload,
					id: state.items.length.toString()
				});
		},
		removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter(item => item.product.id !== action.payload.id);
		},
		changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
			const { id, type } = action.payload;
			const item = state.items.find(item => item.product.id === id);
			if (item) type === 'plus' ? item.quantity++ : item.quantity--;
		}
	}
});
