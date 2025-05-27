import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slice/login.slice";
import userSlice from "./slice/user.slice";
import dashboardSlice from "./slice/dashboard.slice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    user: userSlice,
    dashboard: dashboardSlice,
  },
});
