import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {createProveedor, getProveedores} from '../../api/proveedores'

export const getAllProveedores = createAsyncThunk(
    'proveedor/getAllStatus',
    async () => {
        const response = await getProveedores()
        return response.data.data
    })



export const proveedorSlice = createSlice({
    name: 'proveedor',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllProveedores.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default proveedorSlice.reducer;