import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../feactures/auth/auhtSlice";
import ciudadesSlice from "../feactures/ciudades/ciudadesSlice";
import toastSlice from "../feactures/notifications/toastSlice";
import comprasSlice  from "../feactures/compras/comprasSlice";
import proveedorSlice from "../feactures/provedores/proveedores";
import mercaderiasSlice from '../feactures/mercaderias/mercaderias'


export const store = configureStore({
    reducer: {
        auth: taskReducer,
        ciudades: ciudadesSlice,
        compras: comprasSlice,
        proveedor: proveedorSlice,
        mercaderias: mercaderiasSlice,  
        toast: toastSlice
    }
});
