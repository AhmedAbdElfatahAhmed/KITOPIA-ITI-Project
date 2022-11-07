import { configureStore } from "@reduxjs/toolkit";
import youngerSubjects from "./youngerSubjectsSlice";
import olderSubjects from "./olderSubjectsSlice";
// console.log("slice", youngerSubjects);
export const store = configureStore({
  // reducers
  reducer: {
    youngerSubjects,
    olderSubjects,
  },
});
