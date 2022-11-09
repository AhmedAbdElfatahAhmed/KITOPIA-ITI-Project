import { configureStore } from "@reduxjs/toolkit";
import subjects from "./subjectsSlice";
export const store = configureStore({
  // reducers
  reducer: {
    subjects,
  },
});
