import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feactures/auth/auhtSlice";
import ciudadesSlice from "../feactures/ciudades/ciudadesSlice";
import toastSlice from "../feactures/notifications/toastSlice";


export const store = configureStore({
    reducer: {
        auth: taskReducer,
        ciudades: ciudadesSlice,
        toast: toastSlice
    }
});
