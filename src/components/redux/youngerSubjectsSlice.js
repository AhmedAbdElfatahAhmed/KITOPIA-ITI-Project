import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSubjects = createAsyncThunk(
  "book/getBooks",
  async (_, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:3005/younger");
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// reducer
export const youngerSubjectsSlice = createSlice({
  name: "youngerSubjects",
  initialState: { youngerSubjects: [] },
  reducers: {},
  extraReducers: {
    [getSubjects.pending]: (state, action) => {
      // console.log(action);
    },
    [getSubjects.fulfilled]: (state, action) => {
      // console.log(action);
      state.youngerSubjects = action.payload;
    },
    [getSubjects.rejected]: (state, action) => {
      // console.log(action);
    },
  },
});

export default youngerSubjectsSlice.reducer;
