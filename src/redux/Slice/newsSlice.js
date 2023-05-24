import { createSlice } from '@reduxjs/toolkit';

export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsData: {},
  },
  reducers: {
    setNewsData: (state, action) => {
      state.newsData = action.payload;
    },
  },
});

export const { setNewsData } = newsSlice.actions;

export default newsSlice.reducer;
