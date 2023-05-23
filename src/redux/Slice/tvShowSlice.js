import { createSlice } from '@reduxjs/toolkit';

export const tvShow = createSlice({
  name: 'tvShow',
  initialState: {
    tvShowData: {},
  },
  reducers: {
    setTvShowData: (state, action) => {
      state.tvShowData = action.payload;
    },
  },
});

export const { setTvShowData } = tvShow.actions;

export default tvShow.reducer;
