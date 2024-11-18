import { combineReducers, configureStore } from "@reduxjs/toolkit";

import appSlice from "./slices/AppSlice";
import authSlice from "./slices/AuthSlice";

const rootReducer = combineReducers({
  app: appSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
