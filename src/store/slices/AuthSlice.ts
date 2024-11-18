import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || "",
  fullname: localStorage.getItem("fullname") || "",
  email: localStorage.getItem("email") || "",
  phone: localStorage.getItem("phone") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload || state.token;
      localStorage.setItem("token", action.payload);
    },

    setUser: (state, action) => {
      state.fullname = action.payload.fullname || state.fullname;
      state.email = action.payload.email || state.email;
      state.phone = action.payload.phone || state.phone;
      localStorage.setItem("fullname", state.fullname);
      localStorage.setItem("email", state.email);
      localStorage.setItem("phone", state.phone);
    },

    removeToken: (state) => {
      state.token = "";
      state.fullname = "";
      state.email = "";
      state.phone = "";
      localStorage.removeItem("token");
      localStorage.removeItem("fullname");
      localStorage.removeItem("email");
      localStorage.removeItem("phone");
    }
  },
});

export const {
  setUser,
  setToken,
  removeToken
} = authSlice.actions;

export default authSlice.reducer;
