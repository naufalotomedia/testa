import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginForm: {
    username: "",
    password: "",
  } as Record<string, any>,
  loginUtils: {
    isPassword: true,
  },
  buttonLogin: {
    loading: false,
    disabled: false,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    updateFormLogin: (state, action) => {
      const { key, value } = action.payload;
      state.loginForm[key] = value;
    },
    togglePassword: (state) => {
      state.loginUtils.isPassword = !state.loginUtils.isPassword;
    },
    toggleLoading: (state) => {
      state.buttonLogin.loading = !state.buttonLogin.loading;
    },
    toggleDisabled: (state) => {
      state.buttonLogin.disabled = !state.buttonLogin.disabled;
    },
  },
});

export const {
  updateFormLogin,
  togglePassword,
  toggleLoading,
  toggleDisabled,
} = loginSlice.actions;
export default loginSlice.reducer;
