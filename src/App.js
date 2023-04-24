import ProfilePage from './pages/profile-page/ProfilePage';
import NewsPage from './pages/news-page/NewsPage';
import Footer from './components/Footer';
import TvShowDetails from './pages/tvShow-details/index'
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tvshow" element={<TvShowPage />} />
          <Route path="/TvShowDetails" element={<TvShowDetails />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer/>
    </div >
  );
}
export default App;