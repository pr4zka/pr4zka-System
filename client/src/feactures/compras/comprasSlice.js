import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCompras } from "../../api/compras";


export const getAll = createAsyncThunk(
   "compras/getAllStatus",
    async (compras, thunkAPI) => {
        const response = await getCompras();
         return response.data.data;
    }  
)


export const comprasSlice = createSlice({
    name: "compras",
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAll.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export default comprasSlice.reducer;