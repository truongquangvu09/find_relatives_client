import { createSlice } from '@reduxjs/toolkit';

export const tvShowSlice = createSlice({
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

export const { setTvShowData } = tvShowSlice.actions;

export default tvShowSlice.reducer;
