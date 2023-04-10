import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

export const loginPost = createAsyncThunk(
  "auth/loginStatus",
  async (user, thunkAPI) => {
    const response = await login(user);
    return response.data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("usuario")) || null,
    isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  },
  reducers: {
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.usuario;
      state.isAuth = true;

      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.usuario));
      localStorage.setItem("isAuth", true);
    },
    logout: (state, action) => {
      state.token = "";
      state.user = null;
      state.isAuth = false;

      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isAuth");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginPost.fulfilled, (state, action) => {
     console.log(action.payload)
      const {token, usuario} = action.payload;
       return {
          ...state,
          token,
          user: usuario,
          isAuth: true
       }
    })
      .addCase(loginPost.rejected, (state, action) => {
      // Aquí puedes agregar un manejo de errores, como mostrar un mensaje de error.
       state.error = action.error.message;
    });
  },
});

export const { setAuthData, logout } = authSlice.actions;
export default authSlice.reducer;
