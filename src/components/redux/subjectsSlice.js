import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getSubjects = createAsyncThunk(
  "book/getBooks",
  async (arg, thunkAPI) => {
    try {
      const response = await fetch(`http://localhost:3005/${arg}`);
      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

// reducer
export const subjectsSlice = createSlice({
  name: "subjects",
  initialState: { subjects: [] },
  reducers: {},
  extraReducers: {
    [getSubjects.pending]: (state, action) => {
      // console.log(action);
    },
    [getSubjects.fulfilled]: (state, action) => {
      // console.log(action);
      state.subjects = action.payload;
    },
    [getSubjects.rejected]: (action) => {
      console.log(action.payload);
    },
  },
});

export default subjectsSlice.reducer;
