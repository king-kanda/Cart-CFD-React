// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
       state.push(action.payload);
       console.log("item added");
     
    },
    removeItems: (state, action) => {
        const itemIdToRemove = action.payload;
        return state.filter(item => item.id !== itemIdToRemove);
        
    },
    // Add more reducer logic as needed
  },
});

export const { addItem, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
