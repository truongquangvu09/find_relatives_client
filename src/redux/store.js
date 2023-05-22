import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import postSlice from './Slice/postSlice';
import postSearchSlice from './Slice/postSearchSlice';
const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    postSearch: postSearchSlice,
  },
});
export default store;
