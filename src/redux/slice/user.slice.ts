import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} as Record<string, any>,
  detailUser: {} as Record<string, any>,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateDetailUser: (state, action) => {
      state.detailUser = action.payload;
    },
  },
});

export const { setUser, updateDetailUser } = userSlice.actions;
export default userSlice.reducer;
