import { IAddToCartPayload, ICartState, IChangeQuantityPayload } from "@/models/cart.interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ICartState = {
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
            const isExist = state.items?.some( item => item.product.id === action.payload.product.id)

            if (!isExist)
                state.items?.push({...action.payload, id: state.items.length})
        },
        removeFromCart: (state, action: PayloadAction<{id: number}>) => {
            state.items = state.items?.filter(item => item.product.id !== action.payload.id)
        },
        changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
            const {id, type} = action.payload
            const item = state.items?.find(item => item.id === id)
            if (item) type === 'plus' ? item.quantity++ : item.quantity > 1 && item.quantity--
        },
        reset: state => {
            state.items = []
        }
    }
})