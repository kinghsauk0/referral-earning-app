import { configureStore } from "@reduxjs/toolkit";
import registerSlice from "./RegisterSlicer"; // Import your slice

// Configure the store
export const store = configureStore({
  reducer: {
    register: registerSlice, // Include your slice in the reducer
  },
});

export default store;
