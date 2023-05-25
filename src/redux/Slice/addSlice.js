import { createSlice } from '@reduxjs/toolkit';

export const addSlice = createSlice({
  name: 'add',
  initialState: {
    addData: {},
  },
  reducers: {
    setAddData: (state, action) => {
      state.addData = action.payload;
    },
  },
});

export const { setAddData } = addSlice.actions;

export default addSlice.reducer;
