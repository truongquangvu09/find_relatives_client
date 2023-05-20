import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import postSlice from './Slice/postSlice';
const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
  },
});
export default store;
