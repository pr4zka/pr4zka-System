import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getall, create} from '../../api/mercaderias'


export const getMercaderias = createAsyncThunk(
    'mercaderias/getAllStatus',
    async () => {
        const response = await getall()
        return response.data.data
    }
)



export const mercaderiasSlice = createSlice({
    name: 'mercaderias',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getMercaderias.fulfilled, (state, action) => {
             return action.payload;
        })
    }
})

export default mercaderiasSlice.reducer;