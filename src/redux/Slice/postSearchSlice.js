import { createSlice } from '@reduxjs/toolkit';

export const postSearchSlice = createSlice({
  name: 'postSearch',
  initialState: {
    postSearchData: {},
  },
  reducers: {
    setPostSearchData: (state, action) => {
      state.postSearchData = action.payload;
    },
  },
});

export const { setPostSearchData } = postSearchSlice.actions;

export default postSearchSlice.reducer;
