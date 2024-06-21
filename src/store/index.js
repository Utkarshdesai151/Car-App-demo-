import { configureStore } from "@reduxjs/toolkit";
import carsReducer from '../store/slice/carsslice';  // Correct file path for carsReducer
import formReducer from '../store/slice/formslice';
const store = configureStore({
    reducer: {
        cars: carsReducer,
        form: formReducer
    }
});

export { store };
