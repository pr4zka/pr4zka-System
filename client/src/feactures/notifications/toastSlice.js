import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const showNotification = {
  success: (message) => {
    toast.success(message, { position: toast.POSITION.BOTTOM_UP });
  },
  error: (message) => {
    toast.error(message, { position: toast.POSITION.BOTTOM_UP });
  },
  warning: (message) => {
    toast.warning(message, { position: toast.POSITION.BOTTOM_UP });
  },
  info: (message) => {
    toast.info(message, { position: toast.POSITION.BOTTOM_UP });
  },
};

export const toastSlice = createSlice({
  name: "toast",
  initialState: {
    toast: {
      message: "",
      type: "",
      show: false,
    },
  },
  reducers: {
    showToast: (state, action) => {
      state.toast = action.payload;
      showNotification[action.payload.type](action.payload.message);
    },
    hideToast: (state) => {
      state.toast = {
        message: "",
        type: "",
        show: false,
      };
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;
export default toastSlice.reducer;
