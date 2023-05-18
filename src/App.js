import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home-page/HomePage';
import TvShowPage from './pages/tvShow-page/TvShowPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import NewsPage from './pages/news-page/NewsPage';
import Footer from './components/Footer';
import ProfileList from './pages/profile-page/profile-list';
import ProfileDetails from './pages/profile-page/profile-details';
import TvShowList from './pages/tvShow-page/tvShow-list';
import TvShowDetails from './pages/tvShow-page/tvShow-details';
import NewsList from './pages/news-page/news-list';
import NewsDetails from './pages/news-page/news-details';
import SearchRegistration from './utils/searchRegistration';
import Admin from './admin';
import Donate from './pages/donate-page';
import Contact from './pages/contact-page';
import Profile from './components/Profile/Profile';
import Login from './components/Header/HeaderOnly/header/Login';
import ProtectedRouter from './routes/protectedRouter';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tvshow" element={<TvShowPage />}>
            <Route path="" element={<TvShowList />} />
            <Route path=":id" element={<TvShowDetails />} />
          </Route>
          <Route
            path="/searchRegistration"
            element={
              <ProtectedRouter>
                <SearchRegistration />
              </ProtectedRouter>
            }
          />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="" element={<ProfileList />} />
            <Route path=":id" element={<ProfileDetails />} />
          </Route>
          <Route path="/news" element={<NewsPage />}>
            <Route path="" element={<NewsList />} />
            <Route path=":id" element={<NewsDetails />} />
          </Route>
          <Route path="/admin" element={<Admin />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profiles" element={<Profile />} />
        </Routes>
        <Footer />
      </Router>
      <ToastContainer autoClose={1500} />
    </div>
  );
}

export default App;
