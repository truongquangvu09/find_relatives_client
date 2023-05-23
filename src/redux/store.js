import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import postSlice from './Slice/postSlice';
import postSearchSlice from './Slice/postSearchSlice';
import tvShowSlice from './Slice/tvShowSlice';
const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    postSearch: postSearchSlice,
    tvShow: tvShowSlice,
  },
});
export default store;
