import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import HomePage from './pages/home-page/HomePage';
// import TvShowPage from './pages/tvShow-page/TvShowPage';
import ProfilePage from './pages/profile-page/ProfilePage';
import NewsPage from './pages/news-page/NewsPage';
import Footer from './components/Footer';
import TvShowDetails from './pages/tvShow-page/tvShow-details';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/tvshow" element={<TvShowPage />} />
          <Route path="/TvShowDetails" element={<TvShowDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
