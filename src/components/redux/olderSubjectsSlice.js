import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
export const getSubjects = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3005/older");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// reducer
export const olderSubjectsSlice = createSlice({
  name: "olderSubjects",
  initialState: { olderSubjects: [] },
  reducers: {},
  extraReducers: {
    [getSubjects.pending]: (state, action) => {
      // console.log(action);
    },
    [getSubjects.fulfilled]: (state, action) => {
      // console.log(action);
      state.olderSubjects = action.payload;
    },
    [getSubjects.rejected]: (state, action) => {
      // console.log(action);
    },
  },
});

export default olderSubjectsSlice.reducer;
