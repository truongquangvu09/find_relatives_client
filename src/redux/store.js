import { configureStore } from '@reduxjs/toolkit';
import userSlice from './Slice/userSlice';
import postSlice from './Slice/postSlice';
import postSearchSlice from './Slice/postSearchSlice';
import tvShowSlice from './Slice/tvShowSlice';
import newsSlice from './Slice/newsSlice';
import searchRegistrationSlice from './Slice/searchRegistrationSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    post: postSlice,
    postSearch: postSearchSlice,
    tvShow: tvShowSlice,
    news: newsSlice,
    searchRegistration: searchRegistrationSlice,
  },
});
export default store;
