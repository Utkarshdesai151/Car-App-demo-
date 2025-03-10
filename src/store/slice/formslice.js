import { createSlice } from '@reduxjs/toolkit';


const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        cost: 0,
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload;
        },
        changeCost(state, action) {
            state.cost = action.payload;
        },
    },
});

export const { changeName, changeCost } = formSlice.actions;
export default formSlice.reducer; // This will export the reducer as the default export
