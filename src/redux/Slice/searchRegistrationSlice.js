import { createSlice } from '@reduxjs/toolkit';

export const searchRegistrationSlice = createSlice({
  name: 'searchRegistration',
  initialState: {
    searchRegistrationData: {},
  },
  reducers: {
    setSearchRegistrationData: (state, action) => {
      state.searchRegistrationData = action.payload;
    },
  },
});

export const { setSearchRegistrationData } = searchRegistrationSlice.actions;

export default searchRegistrationSlice.reducer;
