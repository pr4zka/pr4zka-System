import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { login, profileReques } from "../../api/auth";

export const loginPost = createAsyncThunk(
  "auth/loginStatus",
  async (user, thunkAPI) => {
    const response = await login(user);
    return response;
  }
);

// export const loginProfile = createAsyncThunk(
//   "auth/loginProfile",
//   async (user, thunkAPI) => {
//     const response = await profileReques();
//     return response.data;
//   }
// );

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token") || "",
    user: JSON.parse(localStorage.getItem("user")) || null,
    isAuth: localStorage.getItem("isAuth") === "true" ? true : false,
  },
  reducers: {
    setProfile: (state, action) => {
      return {
        ...state,
        user: localStorage.getItem("user") || (action.payload.msg.split(" ")[1]),
      };
    },
    setAuthData: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.usuario;
      state.isAuth = true;

      localStorage.setItem("token", action.payload.data.token);
      localStorage.setItem("user", JSON.stringify(action.payload.msg.split(" ")[1]));
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
    builder
      .addCase(loginPost.fulfilled, (state, action) => {
        const { token } = action.payload.data;
        const usuario  = action.payload.msg.split(" ")[1];
        return {
          ...state,
          token,
          user: localStorage.getItem("user") || usuario,
          isAuth: true,
        };
      })
      .addCase(loginPost.rejected, (state, action) => {
        // Aquí puedes agregar un manejo de errores, como mostrar un mensaje de error.
        state.error = action.error.message;
      })
  },
});

export const { setAuthData, logout, setProfile } = authSlice.actions;
export default authSlice.reducer;
