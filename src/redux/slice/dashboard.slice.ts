import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
  dataRequest: [],
  dataTracking: [],
  coordinate: [],
  loading: false,
  loadingRequest: false,
  loadingTracking: false,
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDataDashboard: (state, action) => {
      state.data = action.payload;
    },
    setDataRequest: (state, action) => {
      state.dataRequest = action.payload;
    },
    setDataTracking: (state, action) => {
      state.dataTracking = action.payload;
    },
    setCoordinate: (state, action) => {
      state.coordinate = action.payload;
    },
    toggleLoadingDashboard: (state) => {
      state.loading = !state.loading;
    },
    toggleLoadingRequest: (state) => {
      state.loadingRequest = !state.loadingRequest;
    },
    toggleLoadingTracking: (state) => {
      state.loadingTracking = !state.loadingTracking;
    },
  },
});

export const {
  setDataDashboard,
  toggleLoadingDashboard,
  setDataRequest,
  toggleLoadingRequest,
  setDataTracking,
  toggleLoadingTracking,
  setCoordinate,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
