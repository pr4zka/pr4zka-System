import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCiudades, createCiudad } from "../../api/ciudades";


// First, create the thunk
export const getAll = createAsyncThunk(
  "ciudades/getAllStatus",
  async (ciudades, thunkAPI) => {
    const response = await getCiudades();
    return response.data;
  }
);

export const create = createAsyncThunk(
  "ciudades/createCiudadStatus",
  async (ciudad, thunkAPI) => {
    const response = await createCiudad(ciudad);
    return response.data;
  }
);

export const ciudadesSlice = createSlice({
  name: "ciudades",
  initialState: [],
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) =>{
    builder.addCase(getAll.fulfilled, (state, action) => {
      return action.payload;
    }),
    builder.addCase(create.fulfilled, (state, action) => {
      // state.push(action.payload);
      console.log(action.payload);
    })
  }
    
});

export default ciudadesSlice.reducer;