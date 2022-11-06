import { configureStore } from "@reduxjs/toolkit";
import youngerSubjects  from "./youngerSubjectsSlice";
// console.log("slice", youngerSubjects);
export const store = configureStore({
  // reducers
  reducer: {
    youngerSubjects
  },
});
