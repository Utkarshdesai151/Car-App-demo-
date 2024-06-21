import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        list: [],
        name: '',         // Added name to initial state
        cost: 0,          // Added cost to initial state
        searchTerm: '',   // Added searchTerm to initial state
    },
    reducers: {
        addcar(state, action) {
            state.list.push(action.payload);
        },
        removecar(state, action) {
            state.list = state.list.filter(car => car.id !== action.payload);
        },
        changename(state, action) {
            state.name = action.payload;
        },
        changecost(state, action) {
            state.cost = action.payload;
        },
        changeSearchTerm(state, action) {
            state.searchTerm = action.payload;
        },
    },
});

export const { addcar, removecar, changename, changecost, changeSearchTerm } = carsSlice.actions;
export default carsSlice.reducer;
