import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home-page/HomePage';
import TvShowPage from './pages/tvShow-page/TvShowPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import NewsPage from './pages/news-page/NewsPage';
import Footer from './components/Footer';
import ProfileList from './pages/profile-page/profile-list';
import ProfileDetails from './pages/profile-page/profile-details';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tvshow" element={<TvShowPage />} />
          <Route path="/profile" element={<ProfilePage />}>
            <Route path="" element={<ProfileList />} />
            <Route path=":id" element={<ProfileDetails />} />
          </Route>
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
