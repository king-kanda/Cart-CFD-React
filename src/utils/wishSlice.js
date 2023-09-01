// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const wishSlice = createSlice({
  name: 'wishList',
  initialState: [],
  reducers: {
    addWishList: (state, action) => {
      // Logic to add item to the cart state
      state.push(action.payload);
      
    },
    removeWishList: (state, action) => {
      // Logic to remove item from the cart state
      const itemIdToRemove = action.payload;
      return state.filter(item => item.id !== itemIdToRemove);
      
    },
    // Add more reducer logic as needed
  },
});

export const { addWishList, removeWishList } = wishSlice.actions;
export default wishSlice.reducer;
