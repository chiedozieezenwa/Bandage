import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = action.payload;
            state.items.push(product);
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
