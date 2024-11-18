import { createSlice } from "@reduxjs/toolkit";
import {ACCESS_TOKEN} from "@/constants";

const initialState = {
  token: localStorage.getItem(ACCESS_TOKEN) || null
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    signup: (state, action) => {
      state.token = action.payload;
      localStorage.setItem(ACCESS_TOKEN, action.payload);
    }
  },
});

export const {
  signup
} = appSlice.actions;

export default appSlice.reducer;
