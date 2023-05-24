import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import postSlice from './Slice/postSlice';
import postSearchSlice from './Slice/postSearchSlice';
import tvShowSlice from './Slice/tvShowSlice';
import newsSlice from './Slice/newsSlice';
const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    postSearch: postSearchSlice,
    tvShow: tvShowSlice,
    news: newsSlice,
  },
});
export default store;
