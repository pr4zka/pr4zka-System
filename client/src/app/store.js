import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feactures/auth/auhtSlice";
import ciudadesSlice from "../feactures/ciudades/ciudadesSlice";


export const store = configureStore({
    reducer: {
        auth: taskReducer,
        ciudades: ciudadesSlice
    }
});
